import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import NavBottom from "./component/navbottom";
import withAuth from "@/utils/withAuth.util";


function attend() {
  return (
    <>
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
            <h4 className="font-dark fw-500 mb-0">Attendance</h4>
          </div>
        </div>
        <section className="section-1 bg-light p-4">
        <div className="d-flex align-items-center justify-content-between">
          <div className="icon-bg">
            <span className="fa fa-clipboard-user fa-lg color-blue"></span>
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
          {/* <div className="d-flex flex-row align-items-center p-0 pt-0 pb-0 mt-3">
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
          <h2 className="mt-3 text-black">- Test 1</h2> */}
        </section>
        <section className="section-2 bg-light mt-3 p-4 mb-last-content">
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
        <NavBottom />
      </main>
    </>
  );
}

export default withAuth(attend);
