import React, { useState } from "react";
import axios from "axios";
import { Link , useNavigate} from "react-router-dom";
import Header from './Componets/Header'
import FooterComponent from "./Componets/FooterComponent";
// import logoImg from "../../public/images/logo.svg";
const SignIn = () => {
  const [uData, setuData] = useState({name: "" , email: "", password: "" });
  const usenavigate = useNavigate();
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [errorText , setErrorText] = useState("")
  const handleChange = (e) => {
    const { name, value } = e.target;
    setuData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!acceptedTerms){
     setErrorText("You must accept the Terms & Conditions before submitting.");
     return;
    }
    setErrorText("");

    if (!uData.name || !uData.email || !uData.password) {
    alert("Please fill in all required fields.");
    return;
  }
    try {
      
      const response = await axios.post(
        "http://localhost:5656/register",
        uData
      );
      console.log("Registered user:", response.data);
      alert("SignIn Successful");
    } catch (error) {
      console.error("Registration failed:", error);
    }
    setuData({email :"" , password:""});
    usenavigate("/login")
  };

  const toggle = () => {
    const input = document.getElementById("password");
    if (input) {
      input.type = input.type === "password" ? "text" : "password";
    }
  };

  return (
    <>
      <div className="theme-dark log-bg">
       
        <Header></Header>
        <div className="container mt-3">
          <div className="row justify-content-center">
            <div className="login-form my-5">
              <div className="d-flex mb-4">
                <h4 className="text-uppercase grayscale-100 fw-bold">
                  Create Account
                </h4>
              </div>

              <form
                className="needs-validation"
                action="#!"
                name="password_strength"
                id="pass_form"
                noValidate
                onSubmit={(e) => handleSubmit(e)}
              >
                <div className="d-flex flex-column">
                  <div className="flex mb-3">
                    <label htmlFor="email" className="form-label text-light">
                      Full Name
                      <span className="grayscale-600">*</span>
                    </label>
                    <input
                      onChange={(e) => handleChange(e)}
                      type="text"
                      className="form-control py-2 mb-0"
                      name="name"
                      id="email"
                      value={uData.name}
                      placeholder="name@example.com"
                      required
                    />
                    <div className="invalid-feedback mt-0">
                      This field is required.
                    </div>
                  </div>
                  <div className="flex mb-3">
                    <label htmlFor="email" className="form-label text-light">
                      Email/Phone Number
                      <span className="grayscale-600">*</span>
                    </label>
                    <input
                      onChange={(e) => handleChange(e)}
                      type="email"
                      className="form-control py-2 mb-0"
                      name="email"
                      id="email"
                      value={uData.email}
                      placeholder="name@123"
                      required
                    />
                    <div className="invalid-feedback mt-0">
                      This field is required.
                    </div>
                  </div>

                  <div className="d-flex flex-column mb-3">
                    <label htmlFor="password" className="form-label text-light">
                      Password <span className="grayscale-600">*</span>
                    </label>
                    <div className="input-group-append">
                      <input
                        type="password"
                        className="form-control form-controls py-2"
                        name="password"
                        id="password"
                        onChange={(e) => handleChange(e)}
                        placeholder="Enter a password"
                        autoComplete="off"
                        value={uData.password}
                        required
                      />
                      <div className="eye fright">
                        <i className="fa fa-eye" id="eye" onClick={toggle}></i>
                      </div>
                      <span id="passstrength"></span>
                      <div className="text-muted grayscale-500 text-xs mt-1">
                        Use 8 or more characters with a mix of letters, numbers
                        & symbols.
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between">
                    <div className="form-check d-flex gap-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        // name="remember_me"
                        id="acceptTerms"
                        checked={acceptedTerms}
                        onChange={(e) =>setAcceptedTerms(e.target.checked)}
                      />
                      <label
                        className="form-check-label text-secondary mb-0"
                        htmlFor="acceptTerms"
                      >
                        I have read and agree to the{" "}
                        <a href="#!" className="text-pink fw-bold mb-0">
                          Terms of Use.
                        </a>
                      </label>
                       </div>
                  </div>
                  {errorText && (
                    <div className="text-danger mb-2" style={{ fontSize: "0.875rem" }}>
                      {errorText}
                    </div>
                  )}
                  <button
                    className="btn btn-primary rounded-pill text-center mt-4"
                    type="submit"
                  >
                    Create Account
                  </button>
                </div>
              </form>

              <div className="d-grid mb-3">
                <div className="divider" role="separator">
                  <span className="grayscale-500 p-2">or</span>
                </div>
                <a
                  href="#!"
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
                  Already have an account?
                </div>
                <Link to="/login" href="" className="grayscale-200 text-link fw-medium">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>

       <FooterComponent></FooterComponent>

        <div
          className="modal fade"
          id="staticBackdrop"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content meme-section">
              <div className="modal-header d-flex justify-content-between">
                <div className="flex">
                  <div className="heading-5 grayscale-100 fw-bold mb-1">
                    Connect wallet
                  </div>
                  <div className="grayscale-500 fs-6 mb-0">
                    Choose your favourite wallet to log in.
                  </div>
                </div>

                <div className="flex">
                  <button
                    className="btn-close menu-button text-reset me-1"
                    type="button"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <svg
                      className="icon-wrap"
                      width="24"
                      height="24"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M13.5 4.5L4.5 13.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M4.5 4.5L13.5 13.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="modal-body">
                <input
                  type="email"
                  className="form-control text-sm py-2 my-3"
                  name="email"
                  id="continue-email"
                  placeholder="Continue with email"
                  required=""
                />

                <small className="grayscale-500">or connect a wallet</small>

                <div className="flex mt-2">
                  <a
                    className="btn btn-dark redius d-flex justify-content-between align-items-center mb-2"
                    href="#!"
                  >
                    <span className="d-flex align-items-center gap-2">
                      Metamask
                      <span className="meta text-xs grayscale-500 card-border bg-dark bg-opacity-25 redius px-1">
                        Installed
                      </span>
                    </span>
                    <img src="images/icon/metamask.svg" alt="" width="32" />
                  </a>
                  <a
                    className="btn btn-dark d-flex justify-content-between align-items-center mb-2"
                    href="#!"
                  >
                    WalletConnect
                    <img
                      src="images/icon/walletconnect.svg"
                      alt=""
                      width="32"
                    />
                  </a>
                  <a
                    className="btn btn-dark d-flex justify-content-between align-items-center mb-2"
                    href="#!"
                  >
                    Phantom
                    <img src="images/icon/phantom.svg" alt="" width="32" />
                  </a>
                  <a
                    className="btn btn-dark d-flex justify-content-between align-items-center mb-2"
                    href="#!"
                  >
                    Coinbase Wallet
                    <img src="images/icon/coinbase.svg" alt="" width="32" />
                  </a>
                  <a
                    className="btn btn-dark d-flex justify-content-between align-items-center mb-2"
                    href="#!"
                  >
                    Rainbow
                    <img src="images/icon/rainbow.svg" alt="" width="32" />
                  </a>
                </div>

                <div className="text-center mt-4 mb-4">
                  <a
                    className="d-flex justify-content-center align-items-center gap-1 text-link h6 grayscale-500 fw-medium"
                    href="login.html"
                  >
                    <svg height="16" width="16" viewBox="0 -960 960 960">
                      <path
                        d="M160-120v-640q0-33 23.5-56.5T240-840h240q33 0 56.5 23.5T560-760v280h40q33 0 56.5 23.5T680-400v180q0 17 11.5 28.5T720-180q17 0 28.5-11.5T760-220v-288q-9 5-19 6.5t-21 1.5q-42 0-71-29t-29-71q0-32 17.5-57.5T684-694l-84-84 42-42 148 144q15 15 22.5 35t7.5 41v380q0 42-29 71t-71 29q-42 0-71-29t-29-71v-200h-60v300H160Zm80-440h240v-200H240v200Zm480 0q17 0 28.5-11.5T760-600q0-17-11.5-28.5T720-640q-17 0-28.5 11.5T680-600q0 17 11.5 28.5T720-560Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    I don't have a wallet
                  </a>
                </div>
              </div>

              <div className="modal-footer d-flex flex-column justify-content-center">
                <div className="text-sm grayscale-400">
                  By connecting your wallet you agree to the
                </div>
                <a
                  className="text-sm fw-medium grayscale-200 text-link"
                  href="#"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
