import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavBottom from "./component/navbottom";
import withAuth from "@/utils/withAuth.util";
import { getAttend, getClassItem } from "./api/fetchdata";
import { format_date } from "./helper/textHelper";

function Attend() {
  const [dataAttend, setDataAttend] = useState();
  const [dataClass, setDataClass] = useState();
  const [classSelected, setClassSelected] = useState(0);
  const [id, setId] = useState();
  const [className, setclassName] = useState();
  const [perPage, setPerPage] = useState(10);
  const [studentName, setStudentName] = useState();
  const [total, setTotal] = useState();
  const getData = async (perpage) => {
    var tempStorage = JSON.parse(localStorage.getItem("userData")) ?? [];
    let data = {
      classSelected: classSelected,
      id: tempStorage.default_student_id,
    };
    await getAttend({ data, perPage: perpage }, (res) => {
      setStudentName(tempStorage.default_student_name);
      setDataAttend(res.payload);
      setclassName(res.class);
      setTotal(res.payload.total);
    });
  };

  const getDataClass = async (perpage) => {
    var tempStorage = JSON.parse(localStorage.getItem("userData")) ?? [];
    let data = {
      id: tempStorage.default_student_id,
    };
    await getClassItem({ data, perPage: perpage }, (res) => {
      setDataClass(res.payload);
    });
  };

  useEffect(() => {
    getDataClass();
    getData(10);
  }, []);

  function filter() {
    getData(perPage);
  }

  const getList = () => {
    return (
      <tbody>
        {dataAttend &&
          dataAttend.data.map((data, index) => (
            <tr key={index} className="text-center">
              <th scope="row">{index + 1}</th>
              <th scope="row">{format_date(String(data.date))}</th>
              <th scope="row">{data.is_absent == "1" ? "Attend" : "Alpha"}</th>
            </tr>
          ))}
      </tbody>
    );
  };
  const getClassData = () => {
    let item = [];
    // item.push(<option value={0}>Select Class</option>);
    {
      dataClass &&
        dataClass.map((dt, idx) =>
          item.push(
            <option key={idx} value={dt.id}>
              {dt.program}
            </option>
          )
        );
    }
    return item;
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
            <Link href="/">
              <span className="fa fa-arrow-left fa-2x color-blue"></span>
            </Link>
          </div>
          <div className="d-flex flex-grow-1 justify-content-center align-items-center">
            <h4 className="font-dark fw-500 mb-0">Attendance</h4>
          </div>
        </div>
        <section className="section-1 bg-light p-4">
          <div className="d-flex align-items-center justify-content-between">
            <div className="btn btn-yellow btn-sm me-3">
              <span className="color-blue fw-bold">{className}</span>
            </div>
            <a
              className="text-decoration-none color-blue text-end"
              href="#"
              target="_blank"
            >
              <small className="font-dark fw-bold">Nama Siswa:</small>
              <h5 className="my-0">{studentName}</h5>
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
          <div className="input-group">
            <select
              className="form-control"
              // style={{ width: "250px !important" }}
              value={classSelected}
              onChange={(e) => {
                setClassSelected(e.target.value);
              }}
            >
              {getClassData()}
            </select>
            <button
              type="submit"
              className="btn fw-bold btn-yellow"
              onClick={filter}
            >
              Filter
            </button>
          </div>
          <table className="table table-borderless table-hover">
            <thead>
              <tr className="table-dark-opacity text-center">
                <th scope="col">No</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            {/* get data table */}
            {getList()}
          </table>
          {/* select  */}
          <div className="d-flex justify-content-center mb-last-content">
            <span className="me-2">per</span>
            <select
              className="text-center"
              value={perPage}
              onChange={(e) => {
                setPerPage(e.target.value);
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

export default withAuth(Attend);
