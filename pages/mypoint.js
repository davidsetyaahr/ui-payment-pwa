import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { getMyPoint } from "../pages/api/fetchdata";
import NavBottom from "./component/navbottom";

export default function mypoint() {
  const [dataPoint, setDataPoint] = useState();
  const [id, setId] = useState(4);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [perPage, setPerPage] = useState(10);
  const [total, setTotal] = useState();

  const getData = async (perpage) => {
    let data = {
      startDate: startDate ?? "",
      endDate: endDate ?? "",
      page: 1,
      id: "2067",
    };
    await getMyPoint({ data, perPage: perpage }, (res) => {
      setDataPoint(res.payload);
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
        {dataPoint &&
          dataPoint.data.map((data, index) => (
            <tr key={index} className="text-center">
              <th scope="row">{data.date}</th>
              <td>{data.type}</td>
              <td>{data.total_point}</td>
              <td>{data.keterangan}</td>
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
        <section className="section-1">
          <div className="d-flex justify-content-center mt-3">
            <div className="card border-0">
              <div className="card-body bg-light rounded-1 shadow text-center">
                <h3 className="text-black">Gracia Limantoro</h3>
                <h1 className="text-dark">80</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="section-2 mt-4">
          <input
            type="date"
            value={startDate}
            name="startDate"
            onChange={(e) => {
              setStartDate(e.currentTarget.value);
            }}
            title="start"
          />
          <input
            type="date"
            value={endDate}
            name="endDate"
            onChange={(e) => {
              setEndDate(e.currentTarget.value);
            }}
            title="end"
          />
          <button type="submit" onClick={filter}>
            Submit
          </button>

          <table className="table table-borderless table-hover">
            <thead>
              <tr className="table-dark-opacity text-center">
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                <th scope="col">Detail</th>
                <th scope="col">Kategori</th>
              </tr>
            </thead>
            {getList()}
          </table>
          {/* {getPageNum()} */}
          <select
            value={perPage}
            onChange={(e) => {
              setPerPage(e.target.value);
              console.log(e.target.value);
              getData(e.target.value);
            }}
          >
            {getPageNum()}
            {/* <option value={1}>Page 1</option> */}
          </select>
        </section>
        <NavBottom />
      </main>
    </div>
  );
}
