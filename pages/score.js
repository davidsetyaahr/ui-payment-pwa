import { useScoreDetail, useScoreDetailBytest } from '@/helper/helperApiScore';
import { useQueryClient } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const score = () => {
  const [token, setToken] = useState(null)
  const [authUser, setAuthUser] = useState(null)
  const [testId, setTestId] = useState(2)

  const queryClient = useQueryClient()
  const { data:datascore } = useScoreDetail({ token, options: { enabled: !!token } });
  const { data:datascorebytest } = useScoreDetailBytest({
    token,
    studentId: authUser?.id,
    testId,
    options: {
      enabled: !!token && !!authUser?.id
    }
  });

    const handleScoreByTestSubmit =() => {


        // fetch data queary
        queryClient.refetchQueries('fetchScoreByTest')

      }
    useEffect(() => {
        setToken(localStorage.getItem('token'))
        const localStorageAuthUser = localStorage.getItem('userData')
        if (localStorageAuthUser) {
          setAuthUser(JSON.parse(localStorageAuthUser))
        }
    }, [])
  return (
    <div>
      <Head />
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
            <h2 className="mb-1 text-white">My point :</h2>
          </div>
        </div>
        <section class="section-1 px-3 py-1">
        <a class="text-decoration-none text-black h2" href="#" target="_blank">Gracia Limantoro</a>
                {/* <form onSubmit={handleScoreByTestSubmit}> */}
                  <div class="d-flex flex-row align-items-center p-0 pt-0 pb-0 mt-3">
                        <select onChange={(e) => setTestId(e.target.value)} class="form-select rounded-pill me-3" aria-label="Default select example">
                            <option selected disabled>Open this select menu</option>
                            {datascore?.payload?.map((score)=>
                              <option value={score.id}>{score.name}</option>
                              )}
                              <option value={1}>"asdfsdaf"</option>
                          </select>
                          <button type="submit" class="btn btn-primary rounded-pill" onClick={handleScoreByTestSubmit}>Primary</button>
                    </div>
                {/* </form> */}
            <h2 class="mt-2 text-black">- Test 1</h2>
        </section>
        <section class="section-2 mt-2">
            <table class="table table-borderless table-hover">
                <thead>
                  <tr class="table-dark-opacity text-center">
                    <th scope="col">No</th>
                    <th scope="col">Item</th>
                    <th scope="col">Score</th>
                    <th scope="col">Kategori</th>
                  </tr>
                </thead>
                <tbody>
                  {datascorebytest?.payload?.scoreItems?.map((scorebytest,index)=>
                      <tr key={scorebytest.id} class="text-center">
                        <th scope="row">{index + 1}</th>
                        <th>{scorebytest.name}</th>
                        <td>{scorebytest.score}</td>
                        <td>{scorebytest.grade}</td>
                      </tr>
                  )}

                      <tr  class="text-center">
                        <th scope="row"></th>
                        <td>Average point</td>
                        <th>{datascorebytest?.payload?.score?.average_score}</th>
                        <td>{datascorebytest?.payload?.score?.grade}</td>
                      </tr>


                </tbody>
              </table>
            </section>
              <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-primary mt-3">Primary</button>
        </div>
        <section className="section-1 px-3 py-1">
          <a
            className="text-decoration-none text-black h2"
            href="#"
            target="_blank"
          >
            Gracia Limantoro
          </a>
          <div className="d-flex flex-row align-items-center p-0 pt-0 pb-0 mt-3">
            <select
              className="form-select rounded-pill me-3"
              aria-label="Default select example"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <button type="button" className="btn btn-primary rounded-pill">
              Primary
            </button>
          </div>
          <h2 className="mt-2 text-black">- Test 1</h2>
        </section>
        <section className="section-2 mt-2">
          <table className="table table-borderless table-hover">
            <thead>
              <tr className="table-dark-opacity text-center">
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                <th scope="col">Detail</th>
                <th scope="col">Kategori</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <th scope="row">23/03/2023</th>
                <td>in</td>
                <td>10</td>
                <td>Attend</td>
              </tr>
              <tr className="text-center">
                <th scope="row">23/03/2023</th>
                <td>in</td>
                <td>10</td>
                <td>Attend</td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-primary mt-3">
              Primary
            </button>
          </div>
        </section>

        <section className="section-3 px-3 py-1">
          <div className="">
            <h4 className="mt-3 text-black">Comment for student :</h4>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="1"
            ></textarea>
            <div className="p-5"></div>
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
                        <Image
                          src="/img/icons/icon-home.png"
                          width={30}
                          height={30}
                          className="icon"
                          alt=""
                          srcset=""
                        />
                      </div>
                      <span className="text-white">home</span>
                    </Link>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <div className="d-flex flex-column pt-0 pb-0">
                    <Link href="/attend" className="nav-link">
                      <div className="text-center">
                        <Image
                          src="/img/icons/icon-attend.png"
                          width={30}
                          height={30}
                          className="icon"
                          alt=""
                          srcset=""
                        />
                      </div>
                      <span className="text-white">Attend</span>
                    </Link>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <div className="d-flex flex-column pt-0 pb-0">
                    <Link href="/mypoint" className="nav-link">
                      <div className="text-center">
                        <Image
                          src="/img/icons/icon-point.png"
                          width={30}
                          height={30}
                          className="icon"
                          alt=""
                          srcset=""
                        />
                      </div>
                      <span className="text-white">Point</span>
                    </Link>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <div className="d-flex flex-column pt-0 pb-0">
                    <Link href="/score" className="nav-link">
                      <div className="text-center">
                        <Image
                          src="/img/icons/icon-score.png"
                          width={30}
                          height={30}
                          className="icon"
                          alt=""
                          srcset=""
                        />
                      </div>
                      <span className="text-white">Score</span>
                    </Link>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <div className="d-flex flex-column pt-0 pb-0">
                    <Link href="/payment" className="nav-link">
                      <div className="text-center">
                        <Image
                          src="/img/icons/icon-payment.png"
                          width={30}
                          height={30}
                          className="icon"
                          alt=""
                          srcset=""
                        />
                      </div>
                      <span className="text-white">Payment</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default score;
