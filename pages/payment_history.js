import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  getHistoryPayment,
  getDetailPayment,
  getPrintReceipt,
} from "../pages/api/fetchdata";
import NavBottom from "./component/navbottom";

export default function payment_history() {
  const [dataPayment, setDataPayment] = useState();
  const [dataDetail, setDataDetail] = useState();
  const [id, setId] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [perPage, setPerPage] = useState(10);
  const [total, setTotal] = useState();

  const getData = async (perpage) => {
    let data = {
      startDate: startDate ?? "",
      endDate: endDate ?? "",
      id: "1",
    };
    await getHistoryPayment({ data, perPage: perpage }, (res) => {
      setDataPayment(res.payload);
      setTotal(res.payload.total);
    });
  };

  const getDataDetail = async (idDetail) => {
    let data = {
      id: idDetail,
    };
    await getDetailPayment({ data }, (res) => {
      setDataDetail(res.payload);
    });
  };

  const printReceipt = async (idDetail) => {
    let data = {
      id: idDetail,
    };
    await getPrintReceipt({ data }, (res) => {
      const aElement = document.createElement("a");
      aElement.setAttribute("download", `invoice-${Date()}`);
      const href = URL.createObjectURL(res);
      aElement.href = href;
      aElement.setAttribute("target", "_blank");
      aElement.click();
      URL.revokeObjectURL(href);
    });
  };

  useEffect(() => {
    getData(10);
  }, []);

  function filter() {
    getData(10);
  }

  function showModal(idPayment) {
    getDataDetail(idPayment);
    setId(idPayment);
  }

  function getReceipt(params) {
    printReceipt(params);
  }

  const getList = () => {
    return (
      <tbody>
        {dataPayment &&
          dataPayment.data.map((data, index) => (
            <tr key={index} className="text-center">
              <th scope="row">{data.date}</th>
              <td>{data.total}</td>
              <td>
                <button
                  onClick={() => showModal(data.id)}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className="rounded-pill text-decoration-none px-3 bg-primary text-white"
                >
                  view
                </button>
               
              </td>
            </tr>
          ))}
      </tbody>
    );
  };

  const getDetail = () => {
    return (
      <tbody>
        {dataDetail &&
          dataDetail.map((data, index) => (
            <tr  key={index} className="text-center">
              <td>{data.name}</td>
              <td>{data.description}</td>
              <td>{data.total}</td>
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
        <div className="navbar d-flex flex-row bg-dark-custome rounded-bottom-custome py-4 px-3 mx-auto">
          <div className="d-flex flex-column align-items-start">
            <Link href="/">
              <span className="material-symbols-outlined text-white">
                arrow_back
              </span>
            </Link>
          </div>
          <div className="d-flex flex-grow-1 justify-content-center align-items-center">
            <h2 className="mb-1 text-white">Jumlah Tagihan</h2>
          </div>
        </div>
        <section className="section-1">
          <h3 className="text-black mx-3 mt-5">history payment :</h3>
          <div className="mx-4 mt-5">
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
            <table className="table table-borderless">
              <thead>
                <tr className="text-start">
                  <th scope="col">Tanggal</th>
                  <th scope="col">Jumlah</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              {getList()}
            </table>
            <select
              value={perPage}
              onChange={(e) => {
                setPerPage(e.target.value);
                
                getData(e.target.value);
              }}
            >
              {getPageNum()}
            </select>
          </div>
        </section>
        <NavBottom />
      </main>
      {/* modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-position-bottom">
          <div className="modal-content animate-bottom">
            <div className="modal-header border-0">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Payment detail:
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <table className="table table-striped">
                <thead>
                  <tr className="table-dark text-center">
                    <th scope="col">Nama</th>
                    <th scope="col">Pembayaran</th>
                    <th scope="col">Detail</th>
                  </tr>
                </thead>
                {getDetail()}
              </table>
            </div>
            <div className="modal-footer border-0">
              <button type="button" onClick={() => getReceipt(id)} className="btn btn-primary mx-auto">
                save recipt
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
