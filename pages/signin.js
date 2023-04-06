import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";
function signin() {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState(null);
  const [otp, setOtp] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState(null);
  const router = useRouter();

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

    const response = await fetch("https://primtech-sistem.com/ui-payment-backoffice/public/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone }),
    });

    const data = await response.json();
    setCode(data.message.split(": ")[1]);
  };

  const handleOtpSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("https://primtech-sistem.com/ui-payment-backoffice/public/api/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ phone, otp }),
    });

    const data = await response.json();
    if (data.code === "00") {
      setToken(data.token.access_token);
      setIsLoggedIn(true);
      localStorage.setItem("token", data.token.access_token);
      setUserData(data.data);
      localStorage.setItem("userData", JSON.stringify(data.data));
      router.push('/home');
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
          <form className="h-100"  onSubmit={handleOtpSubmit}>
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
                      >
                        submit
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
              <h5 className="font-dark text-center fw-bold">Welcome to U&I Member App</h5>
              <div className="card py-4">
                <div className="card-body">
                  <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label fs-15 fw-500">Your Phone Number</label>
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
                    >
                      Get Code
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

export default signin;
