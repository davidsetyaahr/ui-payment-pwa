import { useScoreDetail, useScoreDetailBytest } from "@/helper/helperApiScore";
import { useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { getResultScore, getScoreByTest } from "./api/fetchdata";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import NavBottom from "./component/navbottom";
import withAuth from "@/utils/withAuth.util";

import { toast } from "react-toastify";

const score = () => {
  const [token, setToken] = useState(null);
  const [authUser, setAuthUser] = useState(null);
  const [testId, setTestId] = useState(0);
  const [className, setclassName] = useState();
  const [totalTest, settotalTest] = useState(0);
  const [totalPassed, settotalPassed] = useState(0);
  const [resultScore, setResultScore] = useState();
  const [scoreData, setScoreData] = useState();
  const [scoreItems, setScoreItems] = useState();
  const [showResult, setShowResult] = useState(true);

  const { data: datascore } = useScoreDetail({
    token,
    options: { enabled: !!token },
  });

  const getResult = async () => {
    // const student = JSON.parse(localStorage.getItem("userData")) ?? [];
    var tempStorage = JSON.parse(localStorage.getItem("userData")) ?? [];
    let data = {
      id: tempStorage.default_student_id,
    };
    await getResultScore({ data }, (res) => {
      
      setResultScore(res.payload);
      setShowResult(true);
      setclassName(res.payload.class);
      settotalTest(res.payload.total_test);
      settotalPassed(res.payload.total_test_passed);
    });
  };

  const getByTest = async () => {
    if (testId != 0) {
      var tempStorage = JSON.parse(localStorage.getItem("userData")) ?? [];
      let data = {
        id: tempStorage.default_student_id,
        idTest: testId,
      };
      await getScoreByTest({ data }, (res) => {
        setShowResult(false);

        setScoreItems(res.payload.scoreItems);
        setScoreData(res.payload.score);
      });
    } else {
      toast("Please choose test!", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "error",
        position: "top-right",
        theme: "colored",
      });
    }
  };

  function handleScoreByTestSubmit() {
    getByTest();
  }
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    getResult();
    const localStorageAuthUser = localStorage.getItem("userData");
    if (localStorageAuthUser) {
      setAuthUser(JSON.parse(localStorageAuthUser));
    }
    console.log(totalTest);
    console.log(totalPassed);
  }, []);

  const getListScore = () => {
    return (
      <>
        <table className="table table-borderless table-hover">
          <thead>
            <tr className="table-dark-opacity text-center">
              <th scope="col">No</th>
              <th scope="col">Item</th>
              <th scope="col">Score</th>
              <th scope="col">category</th>
            </tr>
          </thead>
          <tbody>
            {scoreItems &&
              scoreItems.map((scorebytest, index) => (
                <tr key={scorebytest.id} className="text-center">
                  <th scope="row">{index + 1}</th>
                  <th>{scorebytest.name}</th>
                  <td>{scorebytest.score}</td>
                  <td>{scorebytest.grade}</td>
                </tr>
              ))}
          </tbody>
        </table>
        {getAverageBtn()}
      </>
    );
  };

  const getAverageBtn = () => {
    return (
      <>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <p className="mt-0 mb-1 fw-bold"> Average Point</p>
            <p className="mb-0 fw-500">
              {scoreData && scoreData.average_score} (
              {scoreData && scoreData.grade})
            </p>
          </div>
          {btnDownload()}
        </div>
      </>
    );
  };

  const btnDownload = () => {
    if (totalTest === totalPassed) {
      return (
        <>
          <button type="button" className="fw-bold btn btn-yellow btn-sm">
            <span className="fa fa-download me-1"></span> E Sertifikat
          </button>
        </>
      );
    }
  };

  const renderTestScores = () => {
    if (resultScore && showResult === true) {
      return (
        <>
          <div className="d-flex align-items-center mt-3 justify-content-between">
            <table>
              <tbody>
                <tr>
                  <td colSpan="4" className="fw-500">
                    {" "}
                      (Result test:{resultScore.total_score} (
                      {resultScore.grade}
                      ). {resultScore.total_test_passed} of{" "}
                      {resultScore.total_test} Test)
                  </td>
                </tr>
              </tbody>
            </table>
            {btnDownload()}
          </div>

        </>
      );
    } else {
      return getListScore();
    }
  };

  return (
    <div>
      <Head />
      <main className="main bg-white mobile-view">
        <div className="d-flex flex-row py-4 px-3 mx-auto">
          <div className="d-flex flex-column align-items-start">
            <Link href="/">
              <span className="fa fa-arrow-left fa-2x color-blue"></span>
            </Link>
          </div>
          <div className="d-flex flex-grow-1 justify-content-center align-items-center">
            <h4 className="font-dark fw-500 mb-0">Score</h4>
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
              <h5 className="my-0">{authUser?.default_student_name}</h5>
            </a>
          </div>
        </section>
        <section className="section-2 mt-3 bg-light p-4">
          {/* <a className="text-decoration-none text-black h2" href="#" target="_blank">Gracia Limantoro</a> */}

          <div className="input-group mb-2">
            <select
              onChange={(e) => setTestId(e.target.value)}
              className="form-select py-1"
              aria-label="Default select example"
            >
              <option value={0} selected>
                Select Test
              </option>
              {datascore?.payload?.map((score) => (
                <option key={score.id} value={score.id}>
                  {score.name}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="btn btn-yellow fw-bold"
              onClick={handleScoreByTestSubmit}
            >
              Filter
            </button>
          </div>
          <div className="d-flex flex-row align-items-center p-0 pt-0 pb-0"></div>

          {renderTestScores()}

          <div className="d-flex align-items-center justify-content-between"></div>
        </section>

        <section className="section-3 p-4 mt-3 bg-light ">
          <div className="mb-last-content">
            <h5 className="font-dark">Comment for student :</h5>
            <div className="bg-white p-4 border fs-18">
              {scoreData && scoreData.comment}
            </div>
          </div>
        </section>
        <NavBottom />
      </main>
    </div>
  );
};

export default withAuth(score);
