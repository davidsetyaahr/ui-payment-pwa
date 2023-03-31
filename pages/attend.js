import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavBottom from "./component/navbottom";
import withAuth from "@/utils/withAuth.util";
import { getAttend } from "./api/fetchdata";


function attend() {
  const [dataAttend, setDataAttend] = useState();
  const [id, setId] = useState();
  const [perPage, setPerPage] = useState(10);
  const [studentName, setStudentName] = useState();
  const [total, setTotal] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const getData = async (perpage) => {
    var tempStorage = JSON.parse(localStorage.getItem("userData")) ?? [];
    let data = {
      startDate: startDate ?? "",
      endDate: endDate ?? "",
      id: tempStorage.default_student_id,
    };
    await getAttend({ data, perPage: perpage }, (res) => {
      setStudentName(tempStorage.default_student_name)
      setDataAttend(res.payload);
      setTotal(res.payload.total);
    });
  };

  useEffect(() => {
    getData(10);
  }, []);

  function filter() {
    getData(10);
  }



    const getList = () => {
      return (
        <tbody>
          {dataAttend &&
            dataAttend.data.map((data, index) => (
              <tr key={index} className="text-center">
                <th scope="row">{data.date}</th>
                <th scope="row">{data.is_absent=="1"?"in":"-"}</th>
                <td>{data.total_point}</td>
                <td>attend</td>
              </tr>
          ))}
        </tbody>
      );
    };

    const getPageNum = () => {
      let item = [];
      let tmpTotal = 0;
      for (let index = 0; index < total; index++) {
        tmpTotal += 10;
        item.push(
          <option key={index} value={tmpTotal}>
            {tmpTotal}
          </option>
        );
      }

      return item;
    };
  return (
    <>
      <Head />
      <main className="main bg-white mobile-view">
        <div className="d-flex flex-row py-4 px-3 mx-auto">
          <div className="d-flex flex-column align-items-start">

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
            {studentName}
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

        <div className="filter-date">
          <input
            type="date"
            value={startDate}
            className="start"
            name="startDate"
            onChange={(e) => {
              setStartDate(e.currentTarget.value);
            }}
            title="start"
          />
          <div className="px-1"></div>
          <input
            type="date"
            value={endDate}
            name="endDate"
            onChange={(e) => {
              setEndDate(e.currentTarget.value);
            }}
            className="end"
            title="end"
          />
          <div className="px-3"></div>
          <button type="submit" onClick={filter}>
            Filter
          </button>
          </div>
          <table className="table table-borderless table-hover">
            <thead>
              <tr className="table-dark-opacity text-center">
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                <th scope="col">Detail</th>
                <th scope="col">Kategori</th>
              </tr>
            </thead>
            {/* get data table */}
            {getList()}
          </table>
          {/* select  */}
          <div className="d-flex justify-content-center">

          <span className="me-2">per</span>
          <select className="text-center"
            value={perPage}
            onChange={(e) => {
              setPerPage(e.target.value);
              console.log(e.target.value);
              getData(e.target.value);
            }}
            >
          {getPageNum()}
          </select>
          <span className="ms-2">page</span>
          </div>
        </section>
        <NavBottom />
      </main>
    </>
  );
}

export default withAuth(attend);
