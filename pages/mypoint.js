import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { getMyPoint } from "../pages/api/fetchdata";
import NavBottom from "./component/navbottom";
import withAuth from "@/utils/withAuth.util";
import { format_date } from "./helper/textHelper";

function Mypoint() {
  const [dataPoint, setDataPoint] = useState();
  const [name, setname] = useState();
  const [className, setclassName] = useState();
  const [startDate, setStartDate] = useState();
  const [studentName, setStudentName] = useState();
  const [endDate, setEndDate] = useState();
  const [perPage, setPerPage] = useState(10);
  const [total, setTotal] = useState();
  const [totalPointStudent, setTotalPointStudent] = useState();

  const getData = async (perpage) => {
    var tempStorage = JSON.parse(localStorage.getItem("userData")) ?? [];
    let data = {
      startDate: startDate ?? "",
      endDate: endDate ?? "",
      page: 1,
      // id: "2067",
      id: tempStorage.default_student_id,
    };
    await getMyPoint({ data, perPage: perpage }, (res) => {
      setStudentName(tempStorage.default_student_name);
      setDataPoint(res.payload);
      setTotal(res.payload.total);
      setname(tempStorage.default_student_name);
      setTotalPointStudent(res.total_point);
      setclassName(res.class);
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
        {dataPoint &&
          dataPoint.data.map((data, index) => (
            <tr key={index} className="text-center">
              <th scope="row">{format_date(String(data.date))}</th>
              <td>{data.type !== "in" ? "Redeem" : "Earn"}</td>
              <td>{data.total_point}</td>
              <td>
                {data.keterangan === "Absent" ||
                data.keterangan === "Attendance"
                  ? "Present"
                  : data.keterangan}
              </td>
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
    <div>
      <Head />
      <main className="main bg-white mobile-view">
        <div className="d-flex flex-row py-4 px-3 mx-auto">
          <div className="d-flex flex-column align-items-start">
            <Link href="/home">
              <span className="fa fa-arrow-left fa-2x color-blue"></span>
            </Link>
          </div>
          <div className="d-flex flex-grow-1 justify-content-center align-items-center">
            <h4 className="font-dark fw-500 mb-0">My Point</h4>
          </div>
        </div>
        <section className="section-1 bg-light p-4">
          <div className="d-flex align-items-center justify-content-between">
            <div className="me-3">
              <small className="font-dark fw-bold d-block">Point:</small>
              <div className="btn btn-yellow fs-18 fw-bold">
                {totalPointStudent}
              </div>
            </div>
            <a
              className="text-decoration-none color-blue text-end"
              href="#"
              target="_blank"
            >
              <small className="font-dark fw-bold">{"Student's Name:"}</small>
              <h5 className="my-0">{studentName}</h5>
            </a>
          </div>
        </section>
        <section className="section-2 mt-3 mb-last-content bg-light p-4 ">
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
            <div className="px-1"></div>
            <button type="submit" onClick={filter}>
              Filter
            </button>
          </div>

          <table className="table table-borderless table-hover">
            <thead>
              <tr className="table-dark-opacity text-center">
                <th scope="col" className="width-th-point">
                  Date
                </th>
                <th scope="col">Status</th>
                <th scope="col">Point</th>
                <th scope="col">Category</th>
              </tr>
            </thead>
            {getList()}
          </table>
          {/* {getPageNum()} */}
          <div className="d-flex justify-content-center mb-last-content">
            <span className="me-2">per</span>
            <select
              value={perPage}
              onChange={(e) => {
                setPerPage(e.target.value);
                getData(e.target.value);
              }}
            >
              {getPageNum()}
              {/* <option value={1}>Page 1</option> */}
            </select>
            <span className="ms-2">page</span>
          </div>
        </section>
        <NavBottom />
      </main>
    </div>
  );
}

export default withAuth(Mypoint);
