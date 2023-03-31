import { useScoreDetail, useScoreDetailBytest } from '@/helper/helperApiScore';
import { useQueryClient } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import NavBottom from "./component/navbottom";
import withAuth from '@/utils/withAuth.util';

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
        <div className="d-flex flex-row py-4 px-3 mx-auto">
          <div className="d-flex flex-column align-items-start">
            <Link href="/" >
              <span className="fa fa-arrow-left fa-2x color-blue">
              </span>
            </Link>
          </div>
          <div className="d-flex flex-grow-1 justify-content-center align-items-center">
            <h4 className="font-dark fw-500 mb-0">Score</h4>
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
        <section class="section-2 mt-3 bg-light p-4">
        {/* <a class="text-decoration-none text-black h2" href="#" target="_blank">Gracia Limantoro</a> */}
                {/* <form onSubmit={handleScoreByTestSubmit}> */}
                  <div class="input-group mb-2">
                  <select onChange={(e) => setTestId(e.target.value)} class="form-select py-1" aria-label="Default select example">
                      <option selected disabled>Open this select menu</option>
                      {datascore?.payload?.map((score)=>
                        <option value={score.id}>{score.name}</option>
                        )}
                        <option value={1}>"asdfsdaf"</option>
                    </select>
                    <button type="submit" class="btn btn-primary" onClick={handleScoreByTestSubmit}>Filter</button>
                  </div>
                  <div class="d-flex flex-row align-items-center p-0 pt-0 pb-0">
                    </div>
                {/* </form> */}
            {/* <h2 class="mt-2 text-black">- Test 1</h2> */}

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
                </tbody>
              </table>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <p className="mt-0 mb-1 fw-bold"> Average Point</p>
                  <p class="mb-0 fw-500">{datascorebytest?.payload?.score?.average_score} ({datascorebytest?.payload?.score?.grade})</p>
                </div>
                <button type="button" class="fw-bold btn btn-yellow btn-sm"><span className="fa fa-download me-1"></span> E Sertifikat</button>
              </div>
            </section>

        <section className="section-3 p-4 mt-3 bg-light">
          <div className="">
            <h5 className="font-dark">Comment for student :</h5>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </section>
        <NavBottom />
      </main>
    </div>
  );
};

export default withAuth(score);
