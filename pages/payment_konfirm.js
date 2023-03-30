import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

function payment_konfirm() {
  return (
    <>
    <Head/>
    <main class="main bg-white mobile-view">
      <div class="navbar d-flex flex-row bg-dark-custome rounded-bottom-custome py-4 px-3 mx-auto">
        <div class="d-flex flex-column align-items-start">
          <Link href="/payment">
          <span class="material-symbols-outlined text-white">
            arrow_back
          </span>
          </Link>
        </div>
        <div class="d-flex flex-grow-1 justify-content-center align-items-center">
          <h4 class="mb-1 text-white">Konfirmasi Pembayaran</h4>
        </div>
      </div>
    <section class="section-2 mt-4 text-center mx-3">
            <p class="text-black text-center font-weight-bold">
                TRANSACTION ID 16711
            </p>

            <h2 class="text-black text-center mb-5">
                Jumlah Transfer
            </h2>

            <span class="rounded-pill border border-dark px-3 py-1 mt-5 h3">
                Rp.530.001,-
            </span>

            <div class="mx-3 mt-5 text-black">
                <p class="text-start">
                    Tata cara pembayaran :
                </p>
                <ol class="list-group list-group-numbered text-start">
                    <li class="list-group-item border-0">Transfer ke rekening BCA 1410098776 a.n Lis Citro dewi rusli</li>
                    <li class="list-group-item border-0">Masukan jumlah pembayaran sebesar Rp. 530.001</li>
                    <li class="list-group-item border-0">Masukan nomor transaction id diatas pada keterangan berita tansfer</li>
                    <li class="list-group-item border-0">Secreenshoot bukti transfer</li>
                    <li class="list-group-item border-0">kli tombol konfirmasi di bawah.</li>
                </ol>
            </div>
    </section>


    </main>
    </>
  )
}

export default payment_konfirm
