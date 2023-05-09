import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import NavBottom from "./component/navbottom";
import withAuth from "@/utils/withAuth.util";
import {
  useStudent,
  useAdvertise,
  useAgenda,
  useAnnouncement,
} from "@/helper/helperApiInfo";
import { useRouter } from "next/router";
import { baseStorageUrl } from "@/helper/baseUrl";
import { getSummaryStudent } from "../pages/api/fetchdata";
import { format_date } from "./helper/textHelper";

function Home() {
  const [authUser, setAuthUser] = useState(null);
  const [testId, setTestId] = useState(2);
  const [studentId, setStudentId] = useState(null);
  const [studentName, setStudentName] = useState(null);
  const [className, setclassName] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [studentNameLocalStorage, setStudentNameLocalStorage] = useState(null);
  const [tagihan, setTagihan] = useState(0);
  const [mypoint, setMypoint] = useState(0);
  const [agenda, setAgenda] = useState([]);
  const [averageScore, setAverageScore] = useState(0);
  const [token, setToken] = useState(null);
  const router = useRouter();
  const { data: dataannounce } = useAnnouncement({
    token,
    options: { enabled: !!token },
  });
  const { data: dataagenda } = useAgenda({
    token,
    options: { enabled: !!token },
  });
  const { data: datads } = useAdvertise({
    token,
    options: { enabled: !!token },
  });
  const { data: datastudent } = useStudent({
    token,
    options: { enabled: !!token },
  });

  // logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setToken("");
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    router.push("/signin");
  };

  const handleSetStudent = async (id, name) => {
    let dataStorage = await JSON.parse(localStorage.getItem("userData"));
    dataStorage.default_student_id = id;
    dataStorage.default_student_name = name;
    setStudentId(id);
    setStudentName(name);
    localStorage.setItem("userData", JSON.stringify(dataStorage));
    getDataSummary();
  };

  const handleClickSetDefaultStudentId = () => {
    // var myModalEl = document.getElementById("exampleModal");
    // var modal = new bootstrap.Modal.getInstance(myModalEl)
    // modal.hide();
  };
  function formatMoney(angka, prefix) {
    angka = angka.toString();
    var number_string = angka.replace(/[^,\d]/g, "").toString(),
      split = number_string.split(","),
      sisa = split[0].length % 3,
      rupiah = split[0].substr(0, sisa),
      ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if (ribuan) {
      var separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
    return prefix == undefined ? rupiah : rupiah ? "Rp. " + rupiah : "";
  }

  const getDataSummary = async () => {
    var tempStorage = JSON.parse(localStorage.getItem("userData")) ?? [];
    let data = {
      id: tempStorage.default_student_id,
    };
    await getSummaryStudent({ data }, (res) => {
      setTagihan(res.payload.billing);
      setAverageScore(res.payload.score);
      setMypoint(res.payload.point);
      setAgenda(res.payload.agenda);
    });
  };

  useEffect(() => {
    var tempStorage = JSON.parse(localStorage.getItem("userData")) ?? [];
    getDataSummary();
    setStudentId(tempStorage.default_student_id);
    setStudentName(tempStorage.default_student_name);
    setToken(localStorage.getItem("token"));
    setStudentNameLocalStorage(
      JSON.parse(localStorage.getItem("userData"))?.default_student_name
    );
    const localStorageAuthUser = localStorage.getItem("userData");
    if (localStorageAuthUser) {
      setAuthUser(JSON.parse(localStorageAuthUser));
    }
  }, []);
  let getCurrentStudent = {
    price: 0,
  };
  if (typeof datastudent !== "undefined") {
    getCurrentStudent = datastudent.payload.find(
      (data) => data.id === studentId
    );
  }

  return (
    <div>
      <Head />
      {/* <body className="bg-black"> */}
      <div className="container">
        <div className="row">
          <div className="col-md-12 relative px-0">
            <main className="main bg-white mobile-view">
              <div className="navbar nav-top bg-dark-custome d-flex flex-row justify-content-between pt-4 px-3 mx-auto">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzPb_pSj-ir-9eB6mi0lVJdQP1KKHiB8fRBS1CbmOXGd9Z1FEGMJHbEKhahwhWLGSaEXY&usqp=CAU"
                  className="rounded-circle"
                  alt=""
                  width="40"
                  height="40"
                />
                <div className="d-flex flex-column p-2 pt-0 pb-0 ps-3">
                  <p className="mb-1 text-white text-center parent-name">
                    {authUser?.name}
                  </p>
                  <button
                    className="p-0 text-decoration-none bg-dark-custome border-0"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <p className="justify-content-center mb-1 text-warning d-flex align-items-center student-name">
                      {studentName}{" "}
                      <span className="fa fa-chevron-down ms-1"></span>
                    </p>
                  </button>
                </div>
                <Link href="#" onClick={handleLogout} className="logout">
                  <span className="fa fa-sign-out"></span>
                </Link>
              </div>
              <div className="section-rounded">
                <section className="section-1  bg-white">
                  <div className="card rounded bg-light border-0 p-4">
                    <div className="row justify-content-between">
                      <div className="col-auto">
                        <div className="mb-2 d-flex flex-column align-items-center justify-content-between">
                          {/* <div className="icon-bg">
                            <span className="fa fa-receipt fa-lg color-blue"></span>
                          </div> */}
                          <Link
                            href="/payment"
                            className="text-decoration-none"
                          >
                            <p className="mb-0 fw-500 font-dark fs-16">
                              Current bill
                            </p>
                            <h4 className="mt-2 fs-18 fw-bold color-blue price text-start">
                              {formatMoney(parseInt(tagihan), "Rp. ")}
                            </h4>
                          </Link>
                          {/* <Link
                            href="/payment"
                            className="px-2 btn btn-sm btn-blue"
                          >
                            Detail
                          </Link> */}
                        </div>
                      </div>
                      <div className="col-auto">
                        <Link
                          href="/mypoint"
                          className="mb-2 text-decoration-none"
                        >
                          <div className="mb-1 font-dark text-decoration-none total_point fs-16 fw-500">
                            Points
                          </div>
                          <div className="mt-2 fw-500 color-blue sm">
                            <h4 className="fs-18 fw-bold my-0">{mypoint}</h4>
                          </div>
                          {/* </div>
                        </div> */}
                        </Link>
                      </div>
                      <div className="col-auto">
                        {/* <div className="card rounded bg-light border-0 pr-3">
                        <div className="card-body"> */}
                        <Link href="/score" className="text-decoration-none">
                          <div className="mb-1 font-dark text-decoration-none total_point fs-16 fw-500">
                            Avg Score
                          </div>
                          <div className="mt-2 fw-500 color-blue sm">
                            <h4 className="fs-18 fw-bold my-0">
                              {averageScore}
                            </h4>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="section-2 mt-3 bg-light p-4 mt-0">
                  <h5 className="mb-2 font-dark fw-500">Agenda</h5>
                  {/* update ui agend with slide */}
                  <div className="img-slide">
                    {agenda?.map((dt) => (
                      <div
                        key={dt.id}
                        className="content card mr-1"
                        style={{
                          height: "100px !important",
                          marginRight: "8px !important",
                          width: "100% !important",
                        }}
                      >
                        <div className="card-body d-flex align-items-center">
                          {format_date(String(dt.date))}
                          <br></br>
                          {dt.activity}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* end update ui agend with slide */}
                  {/* test ui agenda with slide */}
                  {/* <div className="img-slide">
                  <div className="content card" style={{ height: "100px !important" }} id="card-slide">
                    <div className="card-body d-flex align-items-center">
                      {dataagenda?.payload?.activity}
                      <br></br>
                      {dataagenda?.payload?.activity}
                    </div>
                  </div>
                  <div className="content card" style={{ height: "100px !important" }} id="card-slide">
                    <div className="card-body d-flex align-items-center">
                      {dataagenda?.payload?.activity}
                      <br></br>
                      {dataagenda?.payload?.activity}
                    </div>
                  </div>
                  <div className="content card" style={{ height: "100px !important" }} id="card-slide">
                    <div className="card-body">
                      {dataagenda?.payload?.activity}
                      <br></br>
                      {dataagenda?.payload?.activity}
                    </div>
                  </div>
                  <div className="content card" style={{ height: "100px !important" }} id="card-slide">
                    <div className="card-body">
                      {dataagenda?.payload?.activity}
                      <br></br>
                      {dataagenda?.payload?.activity}
                    </div>
                  </div>
                  </div> */}
                  {/*end test ui agenda with slide */}
                </section>
                <section className="section-3 mt-3 bg-light p-4">
                  <h5 className="mt-0 mb-2 font-dark fw-500">Announcement</h5>
                  <div className="img-slide">
                    {dataannounce?.payload?.map((dt) => (
                      <div key={dt.id} className="content">
                        <Image
                          src={`${baseStorageUrl}${dt.banner}`}
                          width={100}
                          height={100}
                          alt=""
                        />
                        <div className="title">{dt.description}</div>
                      </div>
                    ))}
                  </div>
                  {/* <Image  src={`${baseStorageUrl}${dataannounce?.payload?.banner}`} width={100} height={100} style={{width:"100%"}} className="rounded-1" alt="" /> */}
                </section>
                <section className="section-3 mt-3 bg-light px-4 pt-4 mb-last-content">
                  <h5 className="mt-0 mb-2 font-dark fw-500">Promo</h5>

                  <div className="img-slide">
                    {datads?.payload?.map((ads) => (
                      <div key={ads.id} className="content">
                        <Image
                          src={`${baseStorageUrl}${ads.banner}`}
                          width={100}
                          height={100}
                          alt=""
                        />
                        <div className="title">{ads.title}</div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <NavBottom />
            </main>
          </div>
        </div>
      </div>
      {/* </body> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-position-bottom">
          <div className="modal-content animate-bottom">
            <div className="modal-header border-0">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Choose Student :
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {datastudent?.payload?.map((item, key) => (
                <div
                  onClick={() => handleSetStudent(item.id, item.name)}
                  key={item.id}
                  className={`rounded-1 p-3 mt-2 ${
                    item.id === studentId ? "bg-light border-blue" : "border"
                  }`}
                >
                  <h5 className="font-dark">{item.name}</h5>
                  {/* <p className="text-danger">
                          KID 2B
                      </p> */}
                </div>
              ))}
            </div>
            <div className="modal-footer border-0">
              {/* <button type="button" onClick={handleClickSetDefaultStudentId} className="btn btn-yellow mx-auto fw-bold px-3">Choose Student</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Home);
