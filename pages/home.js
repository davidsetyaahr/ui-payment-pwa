import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import NavBottom from "./component/navbottom";
import withAuth from '@/utils/withAuth.util';

function Home() {

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
        <div className="container">
          <div className="row">
            <div className="col-md-5 relative px-0">
              <main className="main bg-white mobile-view">
                <div className="navbar nav-top bg-dark-custome d-flex flex-row justify-content-between pt-4 px-3 mx-auto">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzPb_pSj-ir-9eB6mi0lVJdQP1KKHiB8fRBS1CbmOXGd9Z1FEGMJHbEKhahwhWLGSaEXY&usqp=CAU" className="rounded-circle" alt="" width="40" height="40"/>
                    <div className="d-flex flex-column p-2 pt-0 pb-0 ps-3" >
                      <p className="mb-1 text-white parent-name">
                        Hallo Mr.Limantoro
                        </p>
                        <button className="p-0 text-decoration-none bg-dark-custome border-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <p className="justify-content-center mb-1 text-warning d-flex align-items-center student-name">Gracia Limantoro
                          <span className="material-symbols-outlined">
                          expand_more
                          </span>
                          </p>
                        </button>
                    </div>
                    <Link href="" className="logout"><span className="fa fa-sign-out"></span></Link>
                </div>
                <section className="section-1 section-rounded bg-white p-4 pb-1">
                    <div className="bg-light rounded p-3">
                      <div className="pt-0 pb-0 align-items-center justify-content-between">
                        <div>
                          <div className="mb-2 d-flex align-items-center justify-content-between">
                            <div className="icon-bg">
                              <span className="fa fa-receipt fa-lg color-blue"></span>
                            </div>
                            <div>
                              <p className="mb-0 fw-500 font-dark fs-16">Tagihan saat ini :</p>
                              <h4 className="mb-1 color-blue price text-center">
                                {tagihan}
                              </h4>
                            </div>
                            <Link href="" className="px-2 btn btn-sm btn-blue">Detail</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-between mt-3">
                        <div className="col-6">
                          <div className="card rounded bg-light border-0 pr-3">
                            <div className="card-body">
                              <div className="d-flex flex-row align-items-center p-0 pt-0 pb-0">
                                <div className="me-2 icon-bg fw-500 color-blue sm">
                                  <h4 className="my-0">
                                    {totalPoint}
                                  </h4>
                                </div>
                                <div className="mb-1 font-dark total_point fw-500">Mypoint</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="card rounded bg-light border-0 pr-3">
                            <div className="card-body">
                              <div className="d-flex flex-row align-items-center p-0 pt-0 pb-0">
                                <div className="me-2 icon-bg fw-500 color-blue sm">
                                  <h4 className="my-0">
                                    {averageScore}
                                  </h4>
                                </div>
                                <div className="mb-1 font-dark total_point fw-500">Last Score</div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </section>
                <section className="section-2 bg-light p-4">
                    <h5 className="mb-2 font-dark fw-500">
                        Agenda
                    </h5>
                    <div className="card" style={{height: '100px !important'}}>
                    <div className="card-body">

                    </div>
                    </div>
                </section>
                <section className="section-3 mt-3 bg-light p-4">
                    <h5 className="mt-0 mb-2 font-dark fw-500">
                        Announcement
                    </h5>
                    <Image  src="/img/banner.png" width={100} height={100} style={{width:"100%"}} className="rounded-1 img-fluid" alt="" />
                </section>
                <section className="section-3 mt-3 bg-light px-4 pt-4 mb-last-content">
                    <h5 className="mt-0 mb-2 font-dark fw-500">
                        Advertise
                    </h5>
                    <div className="img-slide">
                      <div className="content">
                        <Image  src="/img/banner.png" width={100} height={100} alt="" />
                        <div className="title">Title</div>
                      </div>
                      <div className="content">
                        <Image  src="/img/banner.png" width={100} height={100} alt="" />
                        <div className="title">Title</div>
                      </div>
                      <div className="content">
                        <Image  src="/img/banner.png" width={100} height={100} alt="" />
                        <div className="title">Title</div>
                      </div>

                    </div>
                </section>
                  <NavBottom />
                </main>
            </div>
          </div>
        </div>
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
                  <h4 className="font-dark">
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

export default withAuth(Home);
