import { Link, useNavigate } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const Navbar = () => {
  const navigate = useNavigate();
  const [walletDetails , setWalletDetails]=useState([]);
  const uid = localStorage.getItem("id");
  const [user, setUser] = useState({});
  const isLogin = localStorage.getItem("loggedin");
  
  const fetchUser = async () => {
    const response = await axios.get(`http://localhost:5656/getuser/${uid}`);
    setUser(response.data);
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
       localStorage.clear();
      navigate("/login");
    }
  };

  const fetchWalletDetailofUser = async ()=>{
    const result = await axios.get(`http://localhost:5656/getWallet/${uid}`);
    const data = await result.data
    setWalletDetails(data);
  }

  useEffect(() => {
    fetchUser(uid);
    fetchWalletDetailofUser(uid)
  }, [uid]);
  return (
    <>
      <header className="fixed-top">
        <div className="container-fluid px-0">
          <div className="header-boxed md-escape">
            <div className="d-flex flex-row transparent-menu-bg justify-content-between align-items-center redius border-0">
              <div className="d-flex flex-row justify-content-between align-items-center py-2">
                 <div className="brand-logo pe-3">
                            <div className="dark">
                                <a href="#home">
                                    <img src="images/logo-dark.svg" alt=""/>
                                </a>
                            </div>
                            <div className="light">
                                <a href="#home">
                                    <img src="images/logo.svg" alt=""/>
                                </a>
                            </div>
                        </div>
                <div className="flex hidesmscreen">
                  <div className="d-flex flex-row align-items-center not-apply-bg gap-4 mb-0">
                    <div className=" nav-item profile_menu">
                      <Link
                        to="/"
                        className="nav-link has-dropdown fw-medium"
                         role="button"
                        // data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Home
                      </Link>
                    </div>

                    <div className="nav-item profile_menu">
                      <Link
                        to="/auction"
                        className="nav-link fw-medium"
                        role="button"
                      >
                        Auction
                      </Link>
                    </div>

                    <div className="dropdown nav-item profile_menu">
                      <Link
                        to="/product"
                        className="nav-link  fw-medium"
                        role="button"
                        // data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        My NFTs
                      </Link>
                   
                    </div>

                    <div className="dropdown nav-item profile_menu">
                      <Link
                        to="/mycollection"
                        className="nav-link  fw-medium"
                        role="button"
                        // data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        My Collections
                      </Link>
                    </div>
                    <div className="dropdown nav-item profile_menu">
                      <Link
                        to="/traders"
                        className="nav-link  fw-medium"
                        role="button"
                        // data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Traders
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

             

              <div className="d-flex gap-4">
                { user.istrader ? <div className="dropdown disable-sm-screen">

                                    
                                    <button className="btn btn-editor btn-dark redius d-inline-flex align-items-center pe-3 ps-2" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                        <svg width="16" height="16" viewBox="0 0 24 24">
                                            <g fill="currentColor">
                                                <path d="m12 16.576 7.498-4.353L12 8.873zM4.5 12.223l7.5 4.353V8.874zM12 0v8.872l7.498 3.35z"></path>
                                                <path d="M12 0 4.5 12.223 12 8.872zM12 17.972V24l7.503-10.381zM12 24v-6.03L4.5 13.62z"></path>
                                            </g>
                                        </svg>
                                        Ethereum
                                    </button>

                                   
                                    <div className="profile_menu">
                                        <div className="dropdown-menu redius card-bs card-border p-2" data-popper-placement="bottom-end" style={{position: "absolute", inset: "0px 0px auto auto", margin: "0px", transform: "translate(0px, 38px)"}}>
                                          {walletDetails && (
  [
    ...Object.values(
    walletDetails.reduce((acc, item) => {
      if (!acc[item.currencyName]) {
        acc[item.currencyName] = {
          ...item,
          quantity: item.quantity,
        };
      } else {
        acc[item.currencyName].quantity += item.quantity;
      }
      return acc;
    }, {})
  )
].map((wallet) => (
    <a
      key={wallet.currencyName}
      className="dropdown-item card-bs d-flex align-items-between fw-medium gap-2"
      role="button"
    >
      <img
        src={wallet.currencyImageUrl}
        width="24"
        height="24"
        style={{ borderRadius: "50%" }}
        alt={wallet.currencyName}
      />
      {wallet.currencyName}
      <p className="fw-medium text-primary ms-auto">{wallet.quantity}</p>
    </a>
  ))
)}

                                           
                                        </div>
                                    </div>

                                </div>: <></>}
                <button
                  className="btn btn-editor btn-primary redius border-0 text-dark d-inline-flex align-items-center pe-3 ps-2"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  <svg height="16" width="16" viewBox="0 -960 960 960">
                    <path
                      d="M160-120v-640q0-33 23.5-56.5T240-840h240q33 0 56.5 23.5T560-760v280h40q33 0 56.5 23.5T680-400v180q0 17 11.5 28.5T720-180q17 0 28.5-11.5T760-220v-288q-9 5-19 6.5t-21 1.5q-42 0-71-29t-29-71q0-32 17.5-57.5T684-694l-84-84 42-42 148 144q15 15 22.5 35t7.5 41v380q0 42-29 71t-71 29q-42 0-71-29t-29-71v-200h-60v300H160Zm80-440h240v-200H240v200Zm480 0q17 0 28.5-11.5T760-600q0-17-11.5-28.5T720-640q-17 0-28.5 11.5T680-600q0 17 11.5 28.5T720-560Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Connect
                </button>
                  
                 

                {!isLogin && (
                  <Link to="/login">
                    <button
                      className="btn btn-editor btn-primary redius border-0 text-dark d-inline-flex align-items-center pe-3 ps-2"
                      type="button"
                      data-bs-toggle="modal"
                      // data-bs-target="#staticBackdrop"
                    >
                      Login
                    </button>
                  </Link>
                )}

               
                   {isLogin &&  <div className="profile_menu d-flex align-items-center">
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle no-active card-border d-flex align-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      <img alt="" src="images/user/0X9999E.webp" />
                    </button>

                    <div className="dropdown-menu redius card-bs card-border">
                      <div className="d-flex gap-2 align-items-center card-bs-tabs redius mx-2 p-1">
                        <img
                          className="redius"
                          alt=""
                          src="images/user/XCOPY.gif"
                          width="54"
                        />

                        <div className="d-grid">
                          <div className="d-flex align-items-center gap-1">
                            <a
                              className="h6 fw-bold grayscale-100 text-link mb-0"
                              href="profile.html"
                            >
                              0X9999E
                            </a>
                            <div
                              className="pb-1"
                              data-bs-toggle="tooltip"
                              data-bs-placement="right"
                              data-bs-title="Verified"
                            >
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 12 12"
                                fill="none"
                              >
                                <path
                                  d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z"
                                  fill="var(--brand-color)"
                                ></path>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z"
                                  fill="rgb(25, 28, 31)"
                                ></path>
                              </svg>
                            </div>
                          </div>

                          <div
                            className="d-flex justify-content-between align-items-center gap-1 text-bg-bs card-border redius ps-2"
                            role="button"
                          >
                            <span
                              className="d-flex align-items-center gap-1"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Copy address"
                            >
                              <svg
                                width="16"
                                height="16"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                ></path>
                              </svg>
                              <span className="meta text-xs grayscale-400 link-secondary mb-0">
                                0xed5...c544
                              </span>
                            </span>

                            <span className="vr"></span>

                            <div className="social d-flex align-items-center gap-2">
                              <span className="d-inline-flex gap-2 link-secondary text-bg-bs card-border redius p-1">
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M18.9308 5.32631C17.6561 4.71242 16.2892 4.26013 14.8599 4.00109C14.8339 3.99609 14.8079 4.00858 14.7945 4.03357C14.6187 4.36175 14.4239 4.78988 14.2876 5.12639C12.7503 4.88484 11.221 4.88484 9.71527 5.12639C9.57887 4.7824 9.37707 4.36175 9.20048 4.03357C9.18707 4.00941 9.16107 3.99692 9.13504 4.00109C7.70659 4.2593 6.33963 4.71159 5.06411 5.32631C5.05307 5.33131 5.04361 5.33965 5.03732 5.35047C2.44449 9.4161 1.73421 13.3818 2.08265 17.2983C2.08423 17.3175 2.09447 17.3358 2.10867 17.3475C3.81934 18.666 5.47642 19.4665 7.10273 19.9971C7.12876 20.0054 7.15634 19.9954 7.1729 19.9729C7.55761 19.4215 7.90054 18.8401 8.19456 18.2287C8.21192 18.1929 8.19535 18.1504 8.15989 18.1363C7.61594 17.9197 7.098 17.6557 6.59977 17.3558C6.56037 17.3317 6.55721 17.2725 6.59347 17.2442C6.69831 17.1617 6.80318 17.0759 6.9033 16.9893C6.92141 16.9735 6.94665 16.9701 6.96794 16.9801C10.2411 18.5486 13.7846 18.5486 17.0191 16.9801C17.0404 16.9693 17.0657 16.9726 17.0846 16.9885C17.1847 17.0751 17.2895 17.1617 17.3952 17.2442C17.4314 17.2725 17.4291 17.3317 17.3897 17.3558C16.8914 17.6615 16.3735 17.9197 15.8288 18.1354C15.7933 18.1496 15.7775 18.1929 15.7949 18.2287C16.0952 18.8393 16.4381 19.4207 16.8157 19.9721C16.8315 19.9954 16.8599 20.0054 16.8859 19.9971C18.5201 19.4665 20.1772 18.666 21.8879 17.3475C21.9028 17.3358 21.9123 17.3183 21.9139 17.2992C22.3309 12.7712 21.2154 8.83804 18.9568 5.3513C18.9513 5.33965 18.9419 5.33131 18.9308 5.32631ZM8.68335 14.9136C7.69792 14.9136 6.88594 13.964 6.88594 12.7979C6.88594 11.6317 7.68217 10.6822 8.68335 10.6822C9.69239 10.6822 10.4965 11.6401 10.4807 12.7979C10.4807 13.964 9.68451 14.9136 8.68335 14.9136ZM15.329 14.9136C14.3435 14.9136 13.5316 13.964 13.5316 12.7979C13.5316 11.6317 14.3278 10.6822 15.329 10.6822C16.338 10.6822 17.1421 11.6401 17.1264 12.7979C17.1264 13.964 16.338 14.9136 15.329 14.9136Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-2">
                        <Link
                          to="/profile"
                          className="dropdown-item d-flex align-items-center flex-row gap-2"
                          href="profile.html"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              opacity="0.4"
                              d="M22 7.81V16.19C22 19 20.71 20.93 18.44 21.66C17.78 21.89 17.02 22 16.19 22H7.81C6.98 22 6.22 21.89 5.56 21.66C3.29 20.93 2 19 2 16.19V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81Z"
                              fill="currentColor"
                            />
                            <path
                              d="M18.44 21.66C17.78 21.89 17.02 22 16.19 22H7.81C6.98 22 6.22 21.89 5.56 21.66C5.91 19.02 8.67 16.97 12 16.97C15.33 16.97 18.09 19.02 18.44 21.66Z"
                              fill="currentColor"
                            />
                            <path
                              d="M15.58 11.58C15.58 13.56 13.98 15.17 12 15.17C10.02 15.17 8.41998 13.56 8.41998 11.58C8.41998 9.60002 10.02 8 12 8C13.98 8 15.58 9.60002 15.58 11.58Z"
                              fill="currentColor"
                            />
                          </svg>
                          Profile
                        </Link>
                        <a
                          className="dropdown-item d-flex align-items-center gap-2"
                          href="discover.html"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              opacity="0.4"
                              d="M20.9799 3.01986C20.1099 2.14986 18.8799 1.80986 17.6899 2.10986L7.88986 4.55986C6.23986 4.96986 4.96986 6.24986 4.55986 7.88986L2.10986 17.6999C1.80986 18.8899 2.14986 20.1199 3.01986 20.9899C3.67986 21.6399 4.54986 21.9999 5.44986 21.9999C5.72986 21.9999 6.01986 21.9699 6.29986 21.8899L16.1099 19.4399C17.7499 19.0299 19.0299 17.7599 19.4399 16.1099L21.8899 6.29986C22.1899 5.10986 21.8499 3.87986 20.9799 3.01986Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M12.0001 15.8801C14.143 15.8801 15.8801 14.143 15.8801 12.0001C15.8801 9.85725 14.143 8.12012 12.0001 8.12012C9.85725 8.12012 8.12012 9.85725 8.12012 12.0001C8.12012 14.143 9.85725 15.8801 12.0001 15.8801Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          Discover
                        </a>
                        <Link
                          className="dropdown-item d-flex align-items-center gap-2"
                          to="/auction"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M13.1901 16.29H10.8101V17.71H13.1901V16.29Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M7.94977 2.71C7.94977 3.11 7.62977 3.43 7.23977 3.43H6.28977C4.57977 3.43 3.18977 4.82 3.18977 6.52V12.4C2.33977 12.83 1.75977 13.71 1.75977 14.73V6.52C1.75977 4.03 3.78977 2 6.28977 2H7.23977C7.62977 2 7.94977 2.32 7.94977 2.71Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M22.2398 6.52V14.73C22.2398 13.71 21.6598 12.83 20.8098 12.4V6.52C20.8098 4.82 19.4198 3.43 17.7098 3.43H16.7598C16.3698 3.43 16.0498 3.11 16.0498 2.71C16.0498 2.32 16.3698 2 16.7598 2H17.7098C20.2098 2 22.2398 4.03 22.2398 6.52Z"
                              fill="currentColor"
                            ></path>
                            <path
                              opacity="0.4"
                              d="M10.8098 14.7299V19.3799C10.8098 20.8299 9.62977 21.9999 8.18976 21.9999H4.37977C2.93977 21.9999 1.75977 20.8299 1.75977 19.3799V14.7299C1.75977 13.7099 2.33977 12.8299 3.18977 12.3999C3.54977 12.2099 3.94977 12.1099 4.37977 12.1099H8.18976C9.62977 12.1099 10.8098 13.2799 10.8098 14.7299Z"
                              fill="currentColor"
                            ></path>
                            <path
                              opacity="0.4"
                              d="M22.2399 14.7299V19.3799C22.2399 20.8299 21.0599 21.9999 19.6199 21.9999H15.8099C14.3699 21.9999 13.1899 20.8299 13.1899 19.3799V14.7299C13.1899 13.2799 14.3699 12.1099 15.8099 12.1099H19.6199C20.0499 12.1099 20.4499 12.2099 20.8099 12.3999C21.6599 12.8299 22.2399 13.7099 22.2399 14.7299Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          Marketplaces
                        </Link>
                        <Link
                          className="dropdown-item d-flex align-items-center gap-2"
                          to={"/product"}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              opacity="0.4"
                              d="M22.0199 16.8198L18.8899 9.49978C18.3199 8.15978 17.4699 7.39978 16.4999 7.34978C15.5399 7.29978 14.6099 7.96978 13.8999 9.24978L11.9999 12.6598C11.5999 13.3798 11.0299 13.8098 10.4099 13.8598C9.77989 13.9198 9.14989 13.5898 8.63989 12.9398L8.41989 12.6598C7.70989 11.7698 6.82989 11.3398 5.92989 11.4298C5.02989 11.5198 4.25989 12.1398 3.74989 13.1498L2.01989 16.5998C1.39989 17.8498 1.45989 19.2998 2.18989 20.4798C2.91989 21.6598 4.18989 22.3698 5.57989 22.3698H18.3399C19.6799 22.3698 20.9299 21.6998 21.6699 20.5798C22.4299 19.4598 22.5499 18.0498 22.0199 16.8198Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M6.97009 8.38012C8.83681 8.38012 10.3501 6.86684 10.3501 5.00012C10.3501 3.13339 8.83681 1.62012 6.97009 1.62012C5.10337 1.62012 3.59009 3.13339 3.59009 5.00012C3.59009 6.86684 5.10337 8.38012 6.97009 8.38012Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          My NFTs
                        </Link>
                        <Link
                          className="dropdown-item d-flex align-items-center gap-2"
                          to="/mycollection"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M19.3302 5.67979L13.0602 2.29979C12.4002 1.93979 11.6002 1.93979 10.9402 2.29979L4.67018 5.67979C4.21018 5.92979 3.93018 6.40979 3.93018 6.95979C3.93018 7.49979 4.21018 7.98979 4.67018 8.23979L10.9402 11.6198C11.2702 11.7998 11.6402 11.8898 12.0002 11.8898C12.3602 11.8898 12.7302 11.7998 13.0602 11.6198L19.3302 8.23979C19.7902 7.98979 20.0702 7.50979 20.0702 6.95979C20.0702 6.40979 19.7902 5.92979 19.3302 5.67979Z"
                              fill="currentColor"
                            ></path>
                            <path
                              opacity="0.4"
                              d="M9.91 12.79L4.07 9.87C3.62 9.65 3.1 9.67 2.68 9.93C2.25 10.2 2 10.65 2 11.15V16.66C2 17.61 2.53 18.47 3.38 18.9L9.21 21.82C9.41 21.92 9.63 21.97 9.85 21.97C10.11 21.97 10.37 21.9 10.6 21.76C11.03 21.5 11.28 21.04 11.28 20.54V15.03C11.29 14.07 10.76 13.21 9.91 12.79Z"
                              fill="currentColor"
                            ></path>
                            <path
                              opacity="0.4"
                              d="M21.3202 9.93014C20.8902 9.67014 20.3702 9.64014 19.9302 9.87014L14.1002 12.7901C13.2502 13.2201 12.7202 14.0701 12.7202 15.0301V20.5401C12.7202 21.0401 12.9702 21.5001 13.4002 21.7601C13.6302 21.9001 13.8902 21.9701 14.1502 21.9701C14.3702 21.9701 14.5902 21.9201 14.7902 21.8201L20.6202 18.9001C21.4702 18.4701 22.0002 17.6201 22.0002 16.6601V11.1501C22.0002 10.6501 21.7502 10.2001 21.3202 9.93014Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          My Collections
                        </Link>
                        <a
                          className="dropdown-item d-flex align-items-center gap-2"
                          href="settings.html"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path
                              opacity="0.4"
                              d="M2 12.8801V11.1201C2 10.0801 2.85 9.22006 3.9 9.22006C5.71 9.22006 6.45 7.94006 5.54 6.37006C5.02 5.47006 5.33 4.30006 6.24 3.78006L7.97 2.79006C8.76 2.32006 9.78 2.60006 10.25 3.39006L10.36 3.58006C11.26 5.15006 12.74 5.15006 13.65 3.58006L13.76 3.39006C14.23 2.60006 15.25 2.32006 16.04 2.79006L17.77 3.78006C18.68 4.30006 18.99 5.47006 18.47 6.37006C17.56 7.94006 18.3 9.22006 20.11 9.22006C21.15 9.22006 22.01 10.0701 22.01 11.1201V12.8801C22.01 13.9201 21.16 14.7801 20.11 14.7801C18.3 14.7801 17.56 16.0601 18.47 17.6301C18.99 18.5401 18.68 19.7001 17.77 20.2201L16.04 21.2101C15.25 21.6801 14.23 21.4001 13.76 20.6101L13.65 20.4201C12.75 18.8501 11.27 18.8501 10.36 20.4201L10.25 20.6101C9.78 21.4001 8.76 21.6801 7.97 21.2101L6.24 20.2201C5.33 19.7001 5.02 18.5301 5.54 17.6301C6.45 16.0601 5.71 14.7801 3.9 14.7801C2.85 14.7801 2 13.9201 2 12.8801Z"
                              fill="currentColor"
                            />
                            <path
                              d="M12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25Z"
                              fill="currentColor"
                            />
                          </svg>
                          Settings
                        </a>
                        <a
                          style={{ cursor: "pointer" }}
                          className="dropdown-item d-flex align-items-center gap-2"
                          onClick={handleLogout}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path
                              opacity="0.4"
                              d="M16.19 2H7.82002C4.18002 2 2.01001 4.17 2.01001 7.81V16.18C2.01001 19.82 4.18002 21.99 7.82002 21.99H16.19C19.83 21.99 22 19.82 22 16.18V7.81C22 4.17 19.83 2 16.19 2Z"
                              fill="currentColor"
                            />
                            <path
                              d="M9.16985 14.0899C9.35985 14.0899 9.54985 14.0199 9.69985 13.8699L14.0799 9.48992V11.9199C14.0799 12.3299 14.4199 12.6699 14.8299 12.6699C15.2399 12.6699 15.5799 12.3299 15.5799 11.9199V7.67992C15.5799 7.57992 15.5599 7.48992 15.5199 7.38992C15.4399 7.20992 15.2998 7.05993 15.1098 6.97993C15.0198 6.93993 14.9199 6.91992 14.8199 6.91992H10.5799C10.1699 6.91992 9.82985 7.25992 9.82985 7.66992C9.82985 8.07992 10.1699 8.41992 10.5799 8.41992H13.0098L8.62985 12.7999C8.33985 13.0899 8.33985 13.5699 8.62985 13.8599C8.78985 14.0199 8.97985 14.0899 9.16985 14.0899Z"
                              fill="currentColor"
                            />
                            <path
                              d="M18.7099 16.28C18.5799 15.89 18.1599 15.68 17.7599 15.81C14.0399 17.05 9.94993 17.05 6.22993 15.81C5.83993 15.68 5.40994 15.89 5.27994 16.28C5.14994 16.67 5.35994 17.1 5.74994 17.23C7.75994 17.9 9.86994 18.24 11.9899 18.24C14.1099 18.24 16.2199 17.9 18.2299 17.23C18.6299 17.09 18.8399 16.67 18.7099 16.28Z"
                              fill="currentColor"
                            />
                          </svg>
                          Log Out
                        </a>
                      </div>
                    </div>
                  </div>
                </div>}
                
             

                <div id="mobile_menu" className="close">
                  <button
                    className="navbar-toggler btn btn-editor text-bg-bs text-link card-border redius px-2"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasDarkNavbar"
                    aria-controls="offcanvasDarkNavbar"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 18H20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M4 12H20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M4 6H20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </header>
      
    </>
  );
};

export default Navbar;
