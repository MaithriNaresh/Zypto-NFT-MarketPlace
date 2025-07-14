import axios from "axios";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "./Componets/Header";
import FooterComponent from "./Componets/FooterComponent";
const Login = () => {
   const navigate = useNavigate();
  const [user , setUser] = useState({email:"" , password:""});
  const [errorText , setErrorText] = useState("")
  const handleChange = (e) => {
    const {name , value} =e.target;
    setUser((preVal) => ({...preVal , [name] : value}));
    console.log(user);
  }

  const handleSubmit = async (e) => {
  e.preventDefault();
  setErrorText("")
  try {
    const res = await axios.post("http://localhost:5656/login", user);

    const token = res.data?.token;
    const userData = res.data?.response;

    console.log("Token:", token);
    console.log("UserData:", userData);

    if (userData && userData.id) {
  localStorage.setItem("token", token);
  localStorage.setItem("loggedin", "true");
  localStorage.setItem("id" ,userData.id )
  localStorage.setItem("istrader", userData.istrader?.toString());
  
  alert("Login Successfull")
  navigate("/")
} else {
  throw new Error("Invalid login response");
}

  } catch (err) {
    const msg = err.response?.data?.message;
    console.error("Login error:", err.message);
    if(msg === "Invalid email" || msg === "Invalid password")
    {setErrorText(msg)}else{
      setErrorText("Login Failed")
    }
  }
};



  return (
    <>
   
        <Header></Header>
      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="login-form my-5">
            <div className="d-flex justify-content-between mb-4 text-center">
              <h4 className="text-uppercase grayscale-100 fw-bold">Log in</h4>

              <div className="dropdown">
                <a
                  className="card card-border circle grayscale-600 text-link p-2"
                  href="#!"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  <svg
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="QR code login"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 4h7v7H4V4zm0 9h7v7H4v-7zm11 0h-2v4h4v-2h3v-2h-4v2h-1v-2zm5 3h-2v2h-2v2h4v-4zm-5 2h-2v2h2v-2zM13 4h7v7h-7V4zM8.5 6.5h-2v2h2v-2zm-2 9h2v2h-2v-2zm11-9h-2v2h2v-2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-lg-end text-center card-bs redius"
                  style={{ "maxWidth": "390px" }}
                >
                  <div className="flex text-sm grayscale-100">
                    {/* <!--QR Scan --> */}
                    <svg width="280px" height="280px" viewBox="0 0 24 24">
                      <path
                        d="M3 9h6V3H3zm1-5h4v4H4zm1 1h2v2H5zm10 4h6V3h-6zm1-5h4v4h-4zm1 1h2v2h-2zM3 21h6v-6H3zm1-5h4v4H4zm1 1h2v2H5zm15 2h1v2h-2v-3h1zm0-3h1v1h-1zm0-1v1h-1v-1zm-10 2h1v4h-1v-4zm-4-7v2H4v-1H3v-1h3zm4-3h1v1h-1zm3-3v2h-1V3h2v1zm-3 0h1v1h-1zm10 8h1v2h-2v-1h1zm-1-2v1h-2v2h-2v-1h1v-2h3zm-7 4h-1v-1h-1v-1h2v2zm6 2h1v1h-1zm2-5v1h-1v-1zm-9 3v1h-1v-1zm6 5h1v2h-2v-2zm-3 0h1v1h-1v1h-2v-1h1v-1zm0-1v-1h2v1zm0-5h1v3h-1v1h-1v1h-1v-2h-1v-1h3v-1h-1v-1zm-9 0v1H4v-1zm12 4h-1v-1h1zm1-2h-2v-1h2zM8 10h1v1H8v1h1v2H8v-1H7v1H6v-2h1v-2zm3 0V8h3v3h-2v-1h1V9h-1v1zm0-4h1v1h-1zm-1 4h1v1h-1zm3-3V6h1v1z"
                        fill="currentColor"
                      />
                      <path fill="none" d="M0 0h24v24H0z" />
                    </svg>
                    <div
                      className="has-dropdown fw-medium grayscale-400 my-3"
                      role="button"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                      >
                        <path d="M213.344 170.656c-23.552 0-42.656 19.104-42.656 42.656v106.656a42.656 42.656 0 01-85.312 0V213.312a128 128 0 01128-128h106.656a42.656 42.656 0 010 85.312H213.376zM128 661.344c23.552 0 42.656 19.104 42.656 42.656v106.656c0 23.552 19.104 42.656 42.656 42.656h106.656a42.656 42.656 0 010 85.312H213.312a128 128 0 01-128-128V703.968c0-23.552 19.104-42.656 42.656-42.656zM938.656 704a42.656 42.656 0 00-85.312 0v106.656c0 23.552-19.104 42.656-42.656 42.656H704.032a42.656 42.656 0 000 85.312h106.656a128 128 0 00128-128V703.968zM661.344 128c0-23.552 19.104-42.656 42.656-42.656h106.656a128 128 0 01128 128V320a42.656 42.656 0 01-85.312 0V213.344c0-23.552-19.104-42.656-42.656-42.656H704.032a42.656 42.656 0 01-42.656-42.656zm-448 341.344a42.656 42.656 0 000 85.312h597.344a42.656 42.656 0 000-85.312H213.344z"></path>
                      </svg>
                      Scan the QR code to log in app.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form className="needs-validation"  onSubmit={(e) => handleSubmit(e)}>
              <div className="d-flex flex-column">
                <div className="d-flex flex-column mb-3">
                  <label htmlFor="email" className="form-label text-light">
                    Email/Phone Number <span className="grayscale-600">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control py-2"
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={(e) => handleChange(e)}
                    placeholder="Email/Phone Number"
                    required
                  />
                  <div className="invalid-feedback mt-0">
                    This field is required.
                  </div>
                </div>

                <div className="d-flex flex-column">
                  <div className="d-flex justify-content-between">
                    <label htmlFor="password" className="form-label text-light">
                      Password <span className="grayscale-600">*</span>
                    </label>
                    <a
                      href="#!"
                      className="link-primary text-sm text-decoration-none"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="input-group-append">
                    <input
                      type="password"
                      className="form-control form-controls py-2"
                      name="password"
                      id="password"
                      value={user.password}
                      onChange={(e) => {handleChange(e)}}
                      placeholder="Password"
                      required
                    />
                    <div className="eye fright">
                      <i className="fa fa-eye" id="eye" onClick={toggle}></i>
                    </div>
                    <div className="invalid-feedback mt-0">
                      This field is required.
                    </div>
                    <p className="text-danger">{errorText}</p>
                  </div>
                </div>

                <div className="d-flex justify-content-between">
                  <div className="form-check d-flex gap-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      name="remember_me"
                      id="remember_me"
                    />
                    <label
                      className="form-check-label text-secondary"
                      htmlFor="remember_me"
                    >
                      Remember me
                    </label>
                  </div>
                </div>

                <button
                  className="btn btn-primary rounded-pill text-center mt-4"
                  type="submit"
                >
                  Continue
                </button>
              </div>
            </form>
            <div className="d-grid mb-3">
              <div className="divider" role="separator">
                <span className="grayscale-500 p-2">or</span>
              </div>
              <a  href="http://localhost:5656/auth/google"
                className="d-flex justify-content-between align-items-center button btn btn-outline-secondary"
              >
                Sign in with Google
                <img alt="" width="32" src="images/icon/google.svg" />
              </a>
              <a
                href="#!"
                className="d-flex justify-content-between align-items-center button btn btn-outline-secondary mt-3"
              >
                Sign in with Apple
                <img alt="" width="32" src="images/icon/apple.svg" />
              </a>
            </div>

            <div className="d-flex align-items-center justify-content-center gap-2">
              <div className="text-sm grayscale-500">
                Don't have an account?
              </div>
              <Link to="/signUp"
                href="#!"
                className="grayscale-200 text-link fw-medium"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </>
  );
};

export default Login;
