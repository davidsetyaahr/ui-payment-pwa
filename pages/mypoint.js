import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { getMyPoint } from "../pages/api/fetchdata";
export default function mypoint(){
  const [dataPoint, setDataPoint] = useState()
  const [id, setId] = useState(4)
  const  getData = async () => {
    let data = {
      startDate: '',
      endDate: '',
      page:1,
      id:'2067',
    };
   await getMyPoint(data, (res) => {
      setDataPoint(res.payload);
    })
  }

  useEffect(() => {
    getData();
   },)

  const getList = () => {
    return (
      <tbody>
        { dataPoint &&
          dataPoint.data.map((data) =>
            <tr class="text-center">
              <th scope="row">{data.date}</th>
              <td>{data.type}</td>
              <td>{data.total_point}</td>
              <td>{data.keterangan}</td>
            </tr>
          )
        }
      </tbody>
    )
  }


  return (
    <div>
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
          <h2 class="mb-1 text-white">My point :</h2>
        </div>
      </div>
    <section class="section-1">
        <div class="d-flex justify-content-center mt-3">
            <div class="card border-0">
              <div class="card-body bg-light rounded-1 shadow text-center">
                  <h3 class="text-black">
                    Gracia Limantoro
                  </h3>
                  <h1 class="text-dark">
                    80
                  </h1>
              </div>
            </div>
        </div>
    </section>
    <section class="section-2 mt-4">

        <table class="table table-borderless table-hover">
            <thead>
              <tr class="table-dark-opacity text-center">
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                <th scope="col">Detail</th>
                <th scope="col">Kategori</th>
              </tr>
            </thead>
            {getList()}

          </table>
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
    </div>
)
}
