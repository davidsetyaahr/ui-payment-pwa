import { useState, useEffect } from 'react';
import Image from 'next/image'
import custom from '../styles/custome.module.scss';
import { useRouter } from 'next/router';
function signin() {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState(null);
  const [otp, setOtp] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const [userData, setUserData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      setIsLoggedIn(true);
      const storedData = localStorage.getItem('userData');
      if (storedData) {
        setUserData(JSON.parse(storedData));
      }
    }
  }, []);

  const handleCodeSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://127.0.0.1:8000/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ phone })
    });

    const data = await response.json();
    setCode(data.message.split(': ')[1]);
  }

  const handleOtpSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://127.0.0.1:8000/api/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ phone, otp })
    });

    const data = await response.json();
    if (data.code === '00') {
      setToken(data.token.access_token);
      setIsLoggedIn(true);
      localStorage.setItem('token', data.token.access_token);
      setUserData(data.data);
      localStorage.setItem('userData', JSON.stringify(data.data));

    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    setToken('');
    setUserData(null);
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
  }

  if (isLoggedIn) {
    return (
      <div>
        <div>You are logged in as {userData.name} ({userData.no_hp})!</div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  if (code) {
    return (
      <div>
         <main className="main bg-white mobile-view">
          <form onSubmit={handleOtpSubmit}>
          <div class="row vh-100 align-items-center justify-content-center">
          <div class="col-12">
            <Image src="/img/logoutama1.png" class="rounded mx-auto d-block mb-5" width="80" height="80" alt="..."/>
            <div className="card py-4 rounded card-login">
              <div class="card-body">
                <div class="bg-light p-3 mb-3">
                    {code && (
                      <div>
                        {code}
                      </div>
                    )}
                </div>
                <div class="mb-3">
                  {/* <label for="exampleFormControlInput1" class="form-label">Phone</label> */}
                  <input type="text" class="form-control" value={otp} onChange={(event) => setOtp(event.target.value)} placeholder="Enter code" />
                </div>
                <div class="d-grid gap-2">
                  <button class="btn btn-secondary bg-warning-custome font-dark-custome" type="submit">submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </form>
        </main>
      </div>
    );
  }

  return (
    <div>
      <main className="main bg-white mobile-view">
      <form onSubmit={handleCodeSubmit}>
        <div class="row vh-100 align-items-center justify-content-center">
          <div class="col-12">
            <Image src="/img/logoutama1.png" class="rounded mx-auto d-block mb-5" width="80" height="80" alt="..."/>
            <div className="card py-4 rounded card-custome">
              <div class="card-body">
                <div class="bg-light p-3 mb-3">
                Welcome to U&i Member
                </div>
                <div class="mb-3">
                  {/* <label for="exampleFormControlInput1" class="form-label">Phone</label> */}
                  <input type="text" class="form-control" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="Enter phone number"/>
                </div>
                <div class="d-grid gap-2">
                  <button class="btn btn-secondary bg-warning-custome font-dark-custome" type="submit">Get Code</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      </main>
    </div>
  );
}

export default signin;
