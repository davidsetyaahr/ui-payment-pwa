import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react';
export default function Home() {

  const [students, setStudents] = useState([]);
  const [totalPoint, setTotalPoint] = useState(0);
  const [averageScore, setAverageScore] = useState(0);
  const [tagihan, setTagihan] = useState(0);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/listStudents/2')
      .then(response => response.json())
      .then(data => {
        setStudents(data.payload);
        setTotalPoint(data.payload.reduce((acc, curr) => acc + curr.total_point, 0));
        setAverageScore(data.payload.reduce((acc, curr) => acc + curr.average_score, 0) / data.payload.length);
        setTagihan(data.payload.reduce((acc, curr) => acc + curr.price, 0));
      })
      .catch(error => console.error(error));
  }, []);
  return (
    <div>
      <Head/>
      {/* <body className="bg-black"> */}

        <main className="main bg-white mobile-view">
        <div className="navbar bg-dark-custome rounded-bottom-custome d-flex flex-row justify-content-start py-4 px-3 mx-auto">
          <div className="navbar-brand navbar" href="#">
            <Image src="/img/avatar/avatar.png" className="rounded-circle" alt="" width="40" height="40"/>
            <div className="d-flex flex-column p-2 pt-0 pb-0 ps-3" >
              <p className="mb-1 text-white">
                <strong>
                Hallo Mr.Limantoro
                </strong>
                </p>
                <button className="text-decoration-none bg-dark-custome border-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <p className="mb-1 text-warning d-flex align-items-center">Gracia Limantoro
              <span className="material-symbols-outlined">
              expand_more
              </span>
              </p>
                </button>
            </div>
          </div>
        </div>
      <section className="section-1 bg-white rounded-top-dnone-bottom p-3">
          <div className="d-flex justify-content-between mt-3">
              <div className="d-flex flex-row align-items-center">
                  <div className="d-flex flex-column pt-0 pb-0">
                    <p className="mb-1 text-black">Tagihan saat ini :</p>
                    <h5 className="mb-1 text-danger price">
                      {/* price */}
                      {tagihan}
                    </h5>
                    <small className="mb-1 text-info">Rincian tagihan</small>
                  </div>
              </div>
              <div className="card shadow rounded bg-light border-0 pr-3">
              <div className="card-body">
                <div className="d-flex flex-row align-items-center p-0 pt-0 pb-0">
                  <Image src="/img/icons/icon-score-red.png" className="mr-2" height={10} width={10} alt="" srcSet=""/>
                  <small className="mb-1 text-black total_point">Mypoint:</small>
                </div>
                  <h4 className="text-danger font-weight-bold ml-auto">
                    {/* "total_point" */}
                    {totalPoint}
                  </h4>
              </div>
            </div>
              <div className="card shadow rounded bg-light border-0">
                <div className="card-body">
                <div className="d-flex flex-row align-items-center p-0 pt-0 pb-0">
                  <Image src="/img/icons/icon-point-red.png" className="mr-2" height={10} width={10} alt="" srcSet=""/>
                  <small className="mb-1 text-black average_score">Last score:</small>
                </div>
                  <h4 className="text-danger font-weight-bold ml-auto">
                    {/* average_score */}
                    {averageScore}
                  </h4>
              </div>
              </div>
            </div>
      </section>
      <section className="section-2 bg-white px-3 pb-2">
          <h3 className="mb-4 text-dark">
              Agenda
          </h3>
          <div className="card shadow" style={{height: '100px !important'}}>
          <div className="card-body">

          </div>
          </div>
      </section>
      <section className="section-3 bg-white px-3 pb-3">
          <h3 className="text-dark">
              Announcement :
          </h3>

          <Image src="/img/banner.png" width={100} height={100} className="rounded-1 img-fluid" alt="" />
      </section>
      <section className="section-3 bg-white px-3 pb-3">
          <div>
              <Image src="/img/banner.png" width={100} height={100} className="rounded-1 img-fluid" alt="" />
          </div>
      </section>
      <section className="section-4 bg-white">
          <footer className="footer fixed-bottom bg-dark-custome rounded-top-dnone-bottom">
              <div className="container pt-2">
                  <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                          <div className="d-flex flex-column pt-0 pb-0">
                              <Link href="/" className="nav-link">
                              <div className="text-center">
                                  <Image src="/img/icons/icon-home.png" width={30} height={30} className="icon" alt="" srcSet=""/>
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
                                  <Image src="/img/icons/icon-attend.png" width={30} height={30} className="icon" alt="" srcSet=""/>
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
                                  <Image src="/img/icons/icon-point.png" width={30} height={30} className="icon" alt="" srcSet=""/>
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
                                  <Image src="/img/icons/icon-score.png" width={30} height={30} className="icon" alt="" srcSet=""/>
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
                                  <Image src="/img/icons/icon-payment.png" width={30} height={30} className="icon" alt="" srcSet=""/>
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
      {/* </body> */}
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-position-bottom">
        <div className="modal-content animate-bottom">
            <div className="modal-header border-0">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Chose Student :</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <div className="border border-dark rounded-1 p-3">
                <h4 className="text-dark">
                    Gilberd Limantoro
                </h4>

                <p className="text-danger">
                    KID 2B
                </p>
            </div>
            </div>
            <div className="modal-footer border-0">
            <button type="button" className="btn btn-primary mx-auto">Chose</button>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}
