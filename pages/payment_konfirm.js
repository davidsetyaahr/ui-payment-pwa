import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";

function payment_konfirm() {
  return (
    <>
      <Head />
      <main className="main bg-white mobile-view">
        <div className="navbar d-flex flex-row bg-dark-custome rounded-bottom-custome py-4 px-3 mx-auto">
          <div className="d-flex flex-column align-items-start">
            <Link href="/payment">
              <span className="material-symbols-outlined text-white">
                arrow_back
              </span>
            </Link>
          </div>
          <div className="d-flex flex-grow-1 justify-content-center align-items-center">
            <h4 className="mb-1 text-white">Konfirmasi Pembayaran</h4>
          </div>
        </div>
        <section className="section-2 mt-4 text-center mx-3">
          <p className="text-black text-center font-weight-bold">
            TRANSACTION ID 16711
          </p>

          <h2 className="text-black text-center mb-5">Jumlah Transfer</h2>

          <span className="rounded-pill border border-dark px-3 py-1 mt-5 h3">
            Rp.530.001,-
          </span>

          <div className="mx-3 mt-5 text-black">
            <p className="text-start">Tata cara pembayaran :</p>
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
      </main>
    </>
  );
}

export default payment_konfirm;
