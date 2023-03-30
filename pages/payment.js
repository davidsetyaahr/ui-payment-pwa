import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Script from 'next/script'

function payment() {
  return (
    <>
    <Head/>
    <main className="main bg-white mobile-view">
      <div className="navbar d-flex flex-row bg-dark-custome rounded-bottom-custome py-4 px-3 mx-auto">
        <div className="d-flex flex-column align-items-start">
          <Link href="/">
          <span className="material-symbols-outlined text-white">
            arrow_back
          </span>
          </Link>
        </div>
        <div className="d-flex flex-grow-1 justify-content-center align-items-center">
          <h2 className="mb-1 text-white">Jumlah Tagihan</h2>
        </div>
      </div>
    <section className="section-1 mt-5">
    <table className="table table-striped">
              <thead>
                <tr className="table-dark text-center">
                  <th scope="col"></th>
                  <th scope="col">Nama</th>
                  <th scope="col">Pembayaran</th>
                  <th scope="col">Detail</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">

                  <td><input type="checkbox" className="form-check-input"/></td>
                  <td>Gilbert limantoro</td>
                  <td>jan</td>
                  <td>2000</td>
                </tr>
                <tr className="text-center">

                  <td><input type="checkbox" className="form-check-input"/></td>
                  <td>silbert</td>
                  <td>jan</td>
                  <td>1000</td>
                </tr>
              </tbody>
            </table>
    </section>
    <section className="section-4 bg-white">
    <footer className="footer fixed-bottom bg-dark-custome rounded-top-dnone-bottom">
              <div className="container pt-2">
              <div className="d-flex flex-row p-2 pt-0 pb-0 ps-3">
                    <h2 className="text-black">Total: </h2>
                    <h3 className="mb-1 text-black d-flex align-items-center">
                    Rp.&nbsp;
                    <span id="total">
                      0
                    </span>
                    ,-
                    </h3>
                  <Link href="/payment_konfirm" className="btn btn-primary mx-auto">Bayar Sekarang</Link>
                  </div>
              </div>
          </footer>
    </section>

    </main>
    <Script src="/js/custome.js"/>
    </>

  )
}

export default payment
