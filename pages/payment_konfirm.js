import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import withAuth from "@/utils/withAuth.util";

function payment_konfirm() {
  return (
    <>
      <Head />
      <main className="main bg-white mobile-view">        
      <div className="d-flex flex-row py-4 px-3 mx-auto bg-dark-custome">
          <div className="d-flex flex-column align-items-start">
            <Link href="/" >
              <span className="fa fa-arrow-left fa-2x text-white">
              </span>
            </Link>
          </div>
          <div className="d-flex flex-grow-1 justify-content-center align-items-center">
            <h4 className="text-white fw-500 mb-0">Payment</h4>
          </div>
        </div>
        <section className="section-2 bg-light text-center p-4">
          <p className="color-yellow fw-bold text-center mb-2 font-weight-bold">
            TRANSACTION ID 16711
          </p>

          <h4 className="text-black fw-bold text-center mb-3">Jumlah Transfer</h4>

          <span className="rounded-pill btn btn-yellow fw-bold h3">
            Rp.530.001,-
          </span>
        </section>
        <section className="section-2 mt-3 bg-light text-center py-4 px-1">
          <div className="mx-3 text-black">
            <p className="text-start fw-bold ps-3 fs-15">Tata cara pembayaran :</p>
            <ol className="list-group list-group-numbered text-start">
              <li className="list-group-item border-0">
                Transfer ke rekening BCA 1410098776 a.n Lis Citro dewi rusli
              </li>
              <li className="list-group-item border-0">
                Masukan jumlah pembayaran sebesar Rp. 530.001
              </li>
              <li className="list-group-item border-0">
                Masukan nomor transaction id diatas pada keterangan berita
                tansfer
              </li>
              <li className="list-group-item border-0">
                Secreenshoot bukti transfer
              </li>
              <li className="list-group-item border-0">
                kli tombol konfirmasi di bawah.
              </li>
            </ol>
          </div>
        </section>
        <button className="btn fw-bold py-3 btn-success wa-confirm">
          <span className="fab fa-whatsapp me-1 fa-lg"></span> Konfirmasi Whatsapp
        </button>
      </main>
    </>
  );
}

export default withAuth(payment_konfirm);
