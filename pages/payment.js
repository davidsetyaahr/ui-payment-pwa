import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Script from 'next/script'
import NavBottom from "./component/navbottom";

function payment() {
  return (
    <>
    <Head/>
    <main className="main bg-white mobile-view">
        <div className="d-flex flex-row py-4 px-3 mx-auto">
          <div className="d-flex flex-column align-items-start">
            <Link href="/" >
              <span className="fa fa-arrow-left fa-2x color-blue">
              </span>
            </Link>
          </div>
          <div className="d-flex flex-grow-1 justify-content-center align-items-center">
            <h4 className="font-dark fw-500 mb-0">Payment</h4>
          </div>
        </div>
        <section className="section-1 bg-light p-4">
          <div className="d-flex align-items-center justify-content-between">
            <div className="icon-bg">
              <span className="fa fa-star fa-lg color-blue"></span>
            </div>
            <a
              className="text-decoration-none color-blue text-end"
              href="#"
              target="_blank"
            >
            <small className="font-dark fw-bold">Nama Siswa:</small>
            <h5 className="my-0">
              Gracia Limantoro
            </h5>
            </a>
          </div>
        </section>
    <section className="section-1 mt-3 p-4 bg-light">
    <table className="table table-striped table-borderless">
              <thead>
                <tr className="table-dark-opacity text-center">
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
    
    <section className="total-pay">
              <div className="container">
              <div className="d-flex align-items-center justify-content-between p-3">
                    <h5 className="color-yellow my-0">Total: Rp. 0</h5>
                    <Link href="/payment_konfirm" className="btn btn-yellow btn-sm">Bayar Sekarang</Link>
                  </div>
              </div>
          </section>
    </section>
    <NavBottom />

    </main>
    <Script src="/js/custome.js"/>
    </>

  )
}

export default payment
