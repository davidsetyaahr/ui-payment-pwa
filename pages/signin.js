import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";
import { baseUrl } from "@/helper/baseUrl";
import { toast } from "react-toastify";

function Signin() {
  const [phone, setPhone] = useState("62");
  const [name, setName] = useState("");
  const [code, setCode] = useState(false);
  const [otp, setOtp] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState(null);
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      setIsLoggedIn(true);
      const storedData = localStorage.getItem("userData");
      if (storedData) {
        setUserData(JSON.parse(storedData));
      }
    }
  }, []);

  const handleCodeSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const response = await fetch(baseUrl + "signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, phone }),
    });

    setIsSubmitting(false);

    const data = await response.json();
    if (data.code == "00") {
      setCode(true);
    } else if (data.code == "01") {
      toast("Enter your name !", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "error",
        position: "top-right",
        theme: "colored",
      });
    } else {
      toast("Phone number not found !", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "error",
        position: "top-right",
        theme: "colored",
      });
    }
  };

  const handleOtpSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const response = await fetch(baseUrl + "authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ phone, otp }),
    });
    setIsSubmitting(false);
    const data = await response.json();
    if (data.code === "00") {
      setToken(data.token.access_token);
      setIsLoggedIn(true);
      localStorage.setItem("token", data.token.access_token);
      setUserData(data.data);
      localStorage.setItem("userData", JSON.stringify(data.data));
      router.push("/home");
    } else {
      toast("OTP is invalid !", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "error",
        position: "top-right",
        theme: "colored",
      });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setToken("");
    setUserData(null);
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
  };

  // if (isLoggedIn) {
  //   return (
  //     <div>
  //       <div>
  //         You are logged in as {userData.name} ({userData.no_hp})!
  //       </div>
  //       <button onClick={handleLogout}>Logout</button>
  //     </div>
  //   );
  // }

  if (code) {
    return (
      <div>
        <Head />
        <main className="main bg-white mobile-view">
          <div className="container bg-light h-100">
            <form className="h-100" onSubmit={handleOtpSubmit}>
              <div className="h-100 row align-items-center justify-content-center">
                <div className="col-12">
                  <Image
                    src="/img/logoutama1.png"
                    className="rounded mx-auto d-block mb-3"
                    width="130"
                    height="130"
                    alt="..."
                  />
                  <div className="card py-4 rounded card-login">
                    <div className="card-body">
                      <div className="mb-3">
                        {/* <label for="exampleFormControlInput1" className="form-label">Phone</label> */}
                        <input
                          type="text"
                          className="form-control"
                          value={otp}
                          onChange={(event) => setOtp(event.target.value)}
                          placeholder="Enter code"
                        />
                      </div>
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-secondary bg-warning-custome font-dark-custome"
                          type="submit"
                          disabled={isSubmitting}
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
                            "Submit"
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div>
      <Head />
      <main className="main bg-white mobile-view">
        <div className="container bg-light h-100">
          <form className="h-100" onSubmit={handleCodeSubmit}>
            <div className="h-100 row align-items-center justify-content-center">
              <div className="col-12">
                <Image
                  src="/img/logoutama1.png"
                  className="rounded mx-auto d-block mb-3"
                  width="130"
                  height="130"
                  alt="..."
                />
                <h5 className="font-dark text-center fw-bold">
                  Welcome to U&I Member App
                </h5>
                <div className="card py-4">
                  <div className="card-body">
                    <div className="mb-3">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label fs-15 fw-500"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="form-control py-3"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Enter name"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label fs-15 fw-500"
                      >
                        Your Phone Number
                      </label>
                      <input
                        type="text"
                        className="form-control py-3"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        placeholder="Enter phone number"
                      />
                    </div>
                    <div className="d-grid gap-2">
                      <button
                        className="py-3 btn btn-yellow fw-bold"
                        type="submit"
                        disabled={isSubmitting}
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
                          "Get code"
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Signin;
