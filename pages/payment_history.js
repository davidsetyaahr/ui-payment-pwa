import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

function payment_history() {
  return (
    <>
    <Head/>
    <main class="main bg-white mobile-view">
      <div class="navbar d-flex flex-row bg-dark-custome rounded-bottom-custome py-4 px-3 mx-auto">
        <div class="d-flex flex-column align-items-start">
          <Link href="/">
          <span class="material-symbols-outlined text-white">
            arrow_back
          </span>
          </Link>
        </div>
        <div class="d-flex flex-grow-1 justify-content-center align-items-center">
          <h2 class="mb-1 text-white">Jumlah Tagihan</h2>
        </div>
      </div>
    <section class="section-1">
            <h3 class="text-black mx-3 mt-5">
                history payment :
            </h3>
            <div class="mx-4 mt-5">
                <table class="table table-borderless">
                    <thead>
                      <tr class="text-start">
                        <th scope="col">Tanggal</th>
                        <th scope="col">Jumlah</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="">
                        <td>23/01/2023</td>
                        <td>Rp 25.000</td>
                        <td class="text-start"><a href="" data-bs-toggle="modal" data-bs-target="#exampleModal" class="rounded-pill text-decoration-none px-3 bg-primary text-white">view</a></td>
                      </tr>
                      <tr class="">
                        <td>23/01/2023</td>
                        <td>Rp 25.000</td>
                        <td class="text-start"><a href="" data-bs-toggle="modal" data-bs-target="#exampleModal" class="rounded-pill text-decoration-none px-3 bg-primary text-white">view</a></td>
                      </tr>
                    </tbody>
                </table>
            </div>
    </section>
    <section class="section-4 bg-white">
    <footer className="footer fixed-bottom bg-dark-custome rounded-top-dnone-bottom">
              <div className="container pt-2">
                  <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                          <div className="d-flex flex-column pt-0 pb-0">
                              <Link href="/" className="nav-link">
                              <div className="text-center">
                                  <Image src="/img/icons/icon-home.png" width={30} height={30} className="icon" alt="" srcset=""/>
                              </div>
                              <span className="text-white">
                                  home
                              </span>
                              </Link>
                          </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                          <div className="d-flex flex-column pt-0 pb-0">
                              <Link href="/attend" className="nav-link">
                              <div className="text-center">
                                  <Image src="/img/icons/icon-attend.png" width={30} height={30} className="icon" alt="" srcset=""/>
                              </div>
                              <span className="text-white">
                                  Attend
                              </span>
                              </Link>
                          </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                          <div className="d-flex flex-column pt-0 pb-0">
                              <Link href="/mypoint" className="nav-link">
                              <div className="text-center">
                                  <Image src="/img/icons/icon-point.png" width={30} height={30} className="icon" alt="" srcset=""/>
                              </div>
                              <span className="text-white">
                                  Point
                              </span>
                              </Link>
                          </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                          <div className="d-flex flex-column pt-0 pb-0">
                              <Link href="/score" className="nav-link">
                              <div className="text-center">
                                  <Image src="/img/icons/icon-score.png" width={30} height={30} className="icon" alt="" srcset=""/>
                              </div>
                              <span className="text-white">
                                  Score
                              </span>
                              </Link>
                          </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                          <div className="d-flex flex-column pt-0 pb-0">
                              <Link href="/payment" className="nav-link">
                              <div className="text-center">
                                  <Image src="/img/icons/icon-payment.png" width={30} height={30} className="icon" alt="" srcset=""/>
                              </div>
                              <span className="text-white">
                                  Payment
                              </span>
                              </Link>
                          </div>
                      </div>

                    </div>
              </div>
          </footer>
    </section>

    </main>
    {/* modal */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-position-bottom">
      <div class="modal-content animate-bottom">
        <div class="modal-header border-0">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Payment detail:</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <table class="table table-striped">
                <thead>
                  <tr class="table-dark text-center">
                    <th scope="col">Nama</th>
                    <th scope="col">Pembayaran</th>
                    <th scope="col">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="text-center">
                    <td>Gilbert limantoro</td>
                    <td>jan</td>
                    <td>2000</td>
                  </tr>
                  <tr class="text-center">
                    <td>silbert</td>
                    <td>jan</td>
                    <td>1000</td>
                  </tr>
                </tbody>
              </table>
        </div>
        <div class="modal-footer border-0">
          <button type="button" class="btn btn-primary mx-auto">save recipt</button>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default payment_history
