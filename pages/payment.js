import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Script from "next/script";
import NavBottom from "./component/navbottom";
import withAuth from "@/utils/withAuth.util";
import { getListBill, checkOutBill } from "../pages/api/fetchdata";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

function payment() {
  const [dataBilling, setDataBilling] = useState();
  const [total_payment, setTotalPayment] = useState(0);
  const [studentName, setStudentName] = useState();
  const [studentClass, setStudentClass] = useState();
  const [student_id, setStudentId] = useState();
  const [id_bill, setBodyBill] = useState([]);
  const [price, setBodyPrice] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const getData = async () => {
    const student = JSON.parse(localStorage.getItem("userData")) ?? [];

    let data = {
      id: student.default_student_id,
    };
    await getListBill({ data }, (res) => {
      setDataBilling(res.payload);
      setStudentName(student.default_student_name);
      setStudentClass(res.class);
      setStudentId(student.default_student_id);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleOnChange = (paramId, paramPrice) => {
    var tmpIdBill = id_bill;
    var tmpIdPrice = price;
    let tmpTotalPayment = total_payment;
    const idx = tmpIdBill.indexOf(paramId);
    if (idx == -1) {
      tmpIdBill.push(paramId);
      tmpIdPrice.push(paramPrice);
      tmpTotalPayment += paramPrice;
    } else {
      tmpIdBill.splice(idx);
      tmpIdPrice.splice(idx);
      tmpTotalPayment -= paramPrice;
    }

    setBodyBill(tmpIdBill);
    setBodyPrice(tmpIdPrice);
    setTotalPayment(tmpTotalPayment);
  };

  const handleCheckOutBill = () => {
    setIsSubmitting(true);
    if (id_bill.length == 0) {
      toast("Harap pilih tagihan!", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "error",
        position: "top-right",
        theme: "colored",
      });
      setIsSubmitting(false);
    } else {
      let data = {
        body: {
          id_bill,
          price,
          total_payment,
          student_id,
        },
      };
      checkOutBill(data, (rescallback) => {
        if (rescallback.code == "00") {
          toast("Berhasil generate pembayaran", {
            hideProgressBar: true,
            autoClose: 2000,
            type: "success",
            position: "top-right",
            theme: "colored",
          });
          router.push({
            pathname: "/payment_konfirm",
            query: {
              total_pay: rescallback.payload.total_pay,
              id_transaction: rescallback.payload.id_transaction,
            },
          });
        } else {
          toast("Gagal generate pembayaran", {
            hideProgressBar: true,
            autoClose: 2000,
            type: "error",
            position: "top-right",
            theme: "colored",
          });
        }
      });
    }
  };

  function formatMoney(amount, currency) {
    return currency + amount.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
  }

  const getList = () => {
    return (
      <tbody>
        {dataBilling &&
          dataBilling.map((data, index) => (
            <tr key={data.id} className="text-center">
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleOnChange(data.id, data.price)}
                  className="form-check-input"
                />
              </td>
              <td>{data.name}</td>
              <td>{data.payment}</td>
              <td>{formatMoney(parseInt(data.price), "Rp. ")}</td>
            </tr>
          ))}
      </tbody>
    );
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
            <h4 className="font-dark fw-500 mb-0">Payment</h4>
          </div>
          <Link href="/payment_history" className="px-2">
            <span className="fa fa-file-invoice fa-2x color-blue"></span>
          </Link>
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
              <h5 className="my-0">{studentName}</h5>
            </a>
          </div>
        </section>
        <section className="section-1 mt-3 p-4 bg-light">
          <table className="table table-striped table-borderless">
            <thead>
              <tr className="table-dark-opacity text-center">
                <th scope="col"></th>
                <th scope="col">Nama</th>
                <th scope="col">Pembayaran</th>
                <th scope="col">Detail</th>
              </tr>
            </thead>
            {getList()}
          </table>
        </section>
        <section className="section-4 bg-white">
          <section className="total-pay">
            <div className="container">
              <div className="d-flex align-items-center justify-content-between p-3">
                <h5 className="color-yellow my-0">
                  Total: {formatMoney(parseInt(total_payment), "Rp. ")}
                </h5>
                <button
                  className="btn btn-yellow btn-sm fw-bold"
                  onClick={handleCheckOutBill}
                >
                  {isSubmitting ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Loading...
                          </>
                        ) : (
                          'Bayar Sekarang'
                        )}
                </button>
                {/* <Link href="/payment_konfirm" className="btn btn-yellow btn-sm">
                  Bayar Sekarang
                </Link> */}
              </div>
            </div>
          </section>
        </section>
        <NavBottom />
      </main>
      <Script src="/js/custome.js" />
    </>
  );
}

export default withAuth(payment);
