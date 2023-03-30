import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";

function attend() {
  return (
    <>
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
            <h2 className="mb-1 text-white">Score</h2>
          </div>
        </div>
        <section className="section-1">
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
              Pilih
            </button>
          </div>
          <h2 className="mt-3 text-black">- Test 1</h2>
        </section>
        <section className="section-2 mt-4">
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
              <tr className="text-center">
                <th scope="row">23/03/2023</th>
                <td>in</td>
                <td>10</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
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
    </>
  );
}

export default attend;
