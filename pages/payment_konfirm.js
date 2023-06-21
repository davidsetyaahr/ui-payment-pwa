import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import withAuth from "@/utils/withAuth.util";
import { useRouter } from "next/router";
import { verifyPayment } from "../pages/api/fetchdata";
import { toast } from "react-toastify";
function Payment_konfirm() {
  const router = useRouter();
  const query = router.query;

  const verify = async () => {
    let data = {
      id: query.id_transaction,
    };
    await verifyPayment({ data }, (res) => {
      if (res.code == "00") {
        toast("Berhasil konfirmasi pembayaran", {
          hideProgressBar: true,
          autoClose: 2000,
          type: "success",
          position: "top-right",
          theme: "colored",
        });
        router.push({
          pathname: "/payment_history",
        });
      } else {
        toast("Gagal konfirmasi pembayaran", {
          hideProgressBar: true,
          autoClose: 2000,
          type: "error",
          position: "top-right",
          theme: "colored",
        });
      }
    });
  };

  const handleVerify = () => {
    verify();
  };

  let checkCount = 0;
  const countHandle = () => {
    var count = checkCount++;
    const wa = document.getElementById("wa-confirm");
    if (count == 0) {
      wa.setAttribute("disabled", "");
      verify();
    }
  };

  function formatMoney(angka, prefix) {
    angka = angka.toString();
    var number_string = angka.replace(/[^,\d]/g, "").toString(),
      split = number_string.split(","),
      sisa = split[0].length % 3,
      rupiah = split[0].substr(0, sisa),
      ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if (ribuan) {
      var separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
    return prefix == undefined ? rupiah : rupiah ? "Rp. " + rupiah : "";
  }
  return (
    <>
      <Head />
      <main className="main bg-white mobile-view">
        <div className="d-flex flex-row py-4 px-3 mx-auto bg-dark-custome">
          <div className="d-flex flex-column align-items-start">
            <Link href="/">
              <span className="fa fa-arrow-left fa-2x text-white"></span>
            </Link>
          </div>
          <div className="d-flex flex-grow-1 justify-content-center align-items-center">
            <h4 className="text-white fw-500 mb-0">Payment</h4>
          </div>
        </div>
        <section className="section-2 bg-light text-center p-4">
          <p className="color-yellow fw-bold text-center mb-2 font-weight-bold">
            TRANSACTION ID {query.id_transaction}
          </p>

          <h4 className="text-black fw-bold text-center mb-3">
            Jumlah Transfer
          </h4>

          <span className="rounded-pill btn btn-yellow fw-bold h3">
            {formatMoney(parseInt(query.total_pay), "Rp. ")}
          </span>
        </section>
        <section className="section-2 mt-3 bg-light text-center py-4 px-1">
          <div className="mx-3 text-black">
            <p className="text-start fw-bold ps-3 fs-15">
              Tata cara pembayaran :
            </p>
            <ol className="list-group list-group-numbered text-start">
              <li className="list-group-item border-0">
                Transfer ke rekening BCA 4641327187 a.n Lie Citro Dewi Ruslie
              </li>
              <li className="list-group-item border-0">
                Masukan jumlah pembayaran sebesar
                {formatMoney(parseInt(query.total_pay), "Rp. ")}
              </li>
              <li className="list-group-item border-0">
                Masukan nomor transaction id diatas pada keterangan berita
                tansfer
              </li>
              <li className="list-group-item border-0">
                Secreenshoot bukti transfer
              </li>
              <li className="list-group-item border-0">
                Klik tombol konfirmasi di bawah.
              </li>
            </ol>
          </div>
        </section>
        <button
          onClick={countHandle}
          className="btn fw-bold py-3 btn-success wa-confirm"
          id="wa-confirm"
        >
          <span className="fab fa-whatsapp me-1 fa-lg"></span> Konfirmasi
          Whatsapp
        </button>
      </main>
    </>
  );
}

export default withAuth(Payment_konfirm);
