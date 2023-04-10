import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  getHistoryPayment,
  getDetailPayment,
  getPrintReceipt,
} from "../pages/api/fetchdata";
import NavBottom from "./component/navbottom";
import withAuth from "@/utils/withAuth.util";
import { format_date } from "./helper/textHelper";

function payment_history() {
  const [dataPayment, setDataPayment] = useState();
  const [dataDetail, setDataDetail] = useState();
  const [id, setId] = useState();
  const [code, setCode] = useState();
  const [name, setname] = useState();
  const [studentName, setStudentName] = useState();
  const [studentClass, setStudentClass] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [perPage, setPerPage] = useState(10);
  const [total, setTotal] = useState();


  const getData = async (perpage) => {
    const student = JSON.parse(localStorage.getItem("userData")) ?? [];
    var tempStorage = JSON.parse(localStorage.getItem("userData")) ?? [];
    let data = {
      startDate: startDate ?? "",
      endDate: endDate ?? "",
      id: student.default_student_id,
      id: tempStorage.default_student_id,
    };
    await getHistoryPayment({ data, perPage: perpage }, (res) => {
      setStudentName(tempStorage.default_student_name)
      setDataPayment(res.payload);
      setTotal(res.payload.total);
      setStudentClass(res.class);
      setname(student.default_student_name)
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
      aElement.setAttribute("download", `invoice-${idDetail}`);
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
    setCode(idPayment);
  }

  function getReceipt(params) {
    printReceipt(params);
  }

  function formatMoney(amount, currency) {
    return currency + amount.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
  }

  const getList = () => {
    return (
      <tbody>
        {dataPayment &&
          dataPayment.data.map((data, index) => (
            <tr key={index} className="text-center">
              <th scope="row">{format_date(String(data.created_at).split("T")[0])}</th>
              <td>{formatMoney(data.amount, 'Rp. ')}</td>
              <td>
                <button
                  onClick={() => showModal(data.unique_code)}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className="btn-sm btn btn-primary rounded-pill px-3"
                >
                  View
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
              <td>{data.payment}</td>
              <td>{formatMoney(data.price, 'Rp. ')}</td>
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
            <Link href="/" >
              <span className="fa fa-arrow-left fa-2x font-dark">
              </span>
            </Link>
          </div>
          <div className="d-flex flex-grow-1 justify-content-center align-items-center">
            <h4 className="font-dark fw-500 mb-0">History Pembayaran</h4>
          </div>
        </div>
        <section className="section-1 bg-light p-4">
          <div className="d-flex align-items-center justify-content-between">
            <div className="btn btn-yellow btn-sm me-3">
              <span className="color-blue fw-bold">{studentClass}</span>
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
        </section>
        <section className="section-1 mt-3 p-4 bg-light">
          <div className="filter-date">
            <input
              type="date"
              value={startDate}
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
              title="end"
            />
            <div className="px-1"></div>
            <button type="submit" onClick={filter}>
              Filter
            </button>
          </div>
            <table className="table table-borderless">
              <thead>
                <tr className="table-dark-opacity">
                  <th scope="col" className="width-th">Date</th>
                  <th scope="col" className="text-center">Total</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              {getList()}
            </table>
            <div className="d-flex justify-content-center">
            <span className="me-2">per</span>
            <select
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
      {/* modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
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
              <div className="table-responsive">
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
            </div>
            <div className="modal-footer border-0">
              <button type="button" onClick={() => getReceipt(code)} className="btn btn-yellow fw-bold  mx-auto">
                Save Recipt
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withAuth(payment_history);
