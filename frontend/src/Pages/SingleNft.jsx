import React from "react";
import SideComponent from "./Componets/SideComponent";
import HeaderComponet from "./Componets/HeaderComponet";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import CountDownTimer from "./CountDownTimer";
const SingleNft = () => {
  const { nftid } = useParams();

  const [snft, setSnft] = useState({});

  const [isCountdownRunning, setIsCountdownRunning] = useState(true);
  const [showBidmodel, setShowBidmodel] = useState(false);
  const [bidAmount, setBidAmount] = useState("");
  const fetchSinglenft = async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:5656/getAuctionsWithNft/${id}`
      );
        console.log("Auction response:", res.data);
      setSnft(res.data);
    } catch (err) {
      console.error(
        "Failed to fetch NFT auction:",
        err.response?.data || err.message
      );
    }
  };

  const handleBidSubmit = async (auctionId) => {
    const uid = localStorage.getItem("id");
    if (!uid || !bidAmount) {
      alert("User ID or bid amount missing");
      return;
    }
    const response = await axios
      .put(`http://localhost:5656/placeBid/${auctionId}`, {
        uid,
        bidamt: Number(bidAmount),
      })
      .then((res) => {
        alert("Bid places Successfully");
        console.log(res.data);
        setShowBidmodel(false);
        setBidAmount("");
      })
      .catch((err) => {
        alert(err.response?.data?.message || "Failed to place bid");
      });
  };

  useEffect(() => {
    const now = new Date();
    const start = new Date(snft?.startDate);
    const end = new Date(snft?.endDate);

    if (now >= start && now < end) {
      setIsCountdownRunning(true);
    } else {
      setIsCountdownRunning(false);
    }
    if (nftid) {
      fetchSinglenft(nftid);
    }
  }, [nftid, snft?.startDate, snft?.endDate]);
  return (
    <div className="container-fluid fixed-sidebar">
      <SideComponent></SideComponent>
      <div className="wrapper pb-4">
        <HeaderComponet title="Single NFT"></HeaderComponet>
        <section className="container section-1600x pt-4 pt-sm-5">
          {snft && (
            <div className="row mt-5">
              <div className="col-md-6 mb-4 mb-sm-0">
                <div className="nft-img">
                  <img alt="" src={snft?.nftData?.image} />
                </div>

                {/* <!-- accordion --> */}
                <div className="flex mt-3">
                  <div className="accordion">
                    {/* <!-- properties --> */}
                    <div className="accordion-item">
                      <div className="accordion-header">
                        <button
                          className="accordion-button d-flex align-items-center gap-2 h2 fw-bold mb-0 collapsed"
                          type="button"
                          aria-expanded="false"
                        >
                          <svg width="18" height="18" viewBox="0 0 32 32">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10 6H28V8H10V6ZM10 24H28V26H10V24ZM10 15H28V17H10V15ZM4 15H6V17H4V15ZM4 6H6V8H4V6ZM4 24H6V26H4V24Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          Properties
                        </button>
                      </div>
                      <div className="accordion-collapse collapse show">
                        <div className="accordion-body">
                          <div className="properties-grid gap-2">
                            {/* <!-- card 1 --> */}
                            <div className="col text-center card-border redius p-2">
                              <div className="meta text-xs d-inline-flex align-items-center gap-2 text-bg-bs card-border redius px-2 py-1 mt-2 mb-0">
                                Background
                              </div>
                              <div className="heading-6 fw-bold grayscale-100 mb-0 mt-2">
                                Off White B
                              </div>
                              <div className="text-sm grayscale-200 mb-0 mt-1">
                                18%{" "}
                                <span className="grayscale-500">
                                  have this trait
                                </span>
                              </div>
                            </div>

                            {/* <!-- card 2 --> */}
                            <div className="col text-center card-border redius p-2">
                              <div className="meta text-xs d-inline-flex align-items-center gap-2 text-bg-bs card-border redius px-2 py-1 mt-2 mb-0">
                                Eyes
                              </div>
                              <div className="heading-6 fw-bold grayscale-100 mb-0 mt-2">
                                Calm
                              </div>
                              <div className="text-sm grayscale-200 mb-0 mt-1">
                                29%{" "}
                                <span className="grayscale-500">
                                  have this trait
                                </span>
                              </div>
                            </div>

                            {/* <!-- card 3 --> */}
                            <div className="col text-center card-border redius p-2">
                              <div className="meta text-xs d-inline-flex align-items-center gap-2 text-bg-bs card-border redius px-2 py-1 mt-2 mb-0">
                                Mouth
                              </div>
                              <div className="heading-6 fw-bold grayscale-100 mb-0 mt-2">
                                Disappointed
                              </div>
                              <div className="text-sm grayscale-200 mb-0 mt-1">
                                34%{" "}
                                <span className="grayscale-500">
                                  have this trait
                                </span>
                              </div>
                            </div>

                            {/* <!-- card 4 --> */}
                            {/* <div className="col text-center card-border redius p-2">
                              <div className="meta text-xs d-inline-flex align-items-center gap-2 text-bg-bs card-border redius px-2 py-1 mt-2 mb-0">
                                Clothing
                              </div>
                              <div className="heading-6 fw-bold grayscale-100 mb-0 mt-2">
                                Light Kimono
                              </div>
                              <div className="text-sm grayscale-200 mb-0 mt-1">
                                26%{" "}
                                <span className="grayscale-500">
                                  have this trait
                                </span>
                              </div>
                            </div> */}

                            {/* <!-- card 5 --> */}
                            {/* <div className="col text-center card-border redius p-2">
                              <div className="meta text-xs d-inline-flex align-items-center gap-2 text-bg-bs card-border redius px-2 py-1 mt-2 mb-0">
                                Type
                              </div>
                              <div className="heading-6 fw-bold grayscale-100 mb-0 mt-2">
                                Human
                              </div>
                              <div className="text-sm grayscale-200 mb-0 mt-1">
                                12%{" "}
                                <span className="grayscale-500">
                                  have this trait
                                </span>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- description --> */}
                    <div className="accordion-item">
                      <div className="accordion-header">
                        <button
                          className="accordion-button d-flex align-items-center gap-2 h2 fw-bold mb-0 collapsed"
                          type="button"
                          aria-expanded="false"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M11.9595 1.9594C11.7719 1.77186 11.5176 1.6665 11.2524 1.6665H4.99992C4.55789 1.6665 4.13397 1.8421 3.82141 2.15466C3.50885 2.46722 3.33325 2.89114 3.33325 3.33317V16.6665C3.33325 17.1085 3.50885 17.5325 3.82141 17.845C4.13397 18.1576 4.55789 18.3332 4.99992 18.3332H14.9999C15.4419 18.3332 15.8659 18.1576 16.1784 17.845C16.491 17.5325 16.6666 17.1085 16.6666 16.6665V7.08072C16.6666 6.8155 16.5612 6.56115 16.3737 6.37361L11.9595 1.9594Z"
                              stroke="currentColor"
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M11.6667 2.6665V6.6665H15.6667"
                              stroke="currentColor"
                              strokeWidth="1"
                              strokeLinecap="square"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M13.3334 10.8335H6.66675"
                              stroke="currentColor"
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M13.3334 14.1665H6.66675"
                              stroke="currentColor"
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M8.33341 7.5H7.50008H6.66675"
                              stroke="currentColor"
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          Description
                        </button>
                      </div>
                      <div className="accordion-collapse collapse">
                        <div className="accordion-body">
                          <div className="d-flex align-items-center gap-3 py-1">
                          
                            <a
                              className="flex animation-2"
                              href="collections.html"
                            >
                              <img
                                className="avater xl redius border-2x card-transform-x"
                                alt=""
                                src={snft.image}
                              />
                            </a>

                            
                            <div className="flex">
                              
                              <div className="d-flex align-items-center gap-2 mb-2">
                               
                                <a
                                  className="d-flex align-items-center gap-2 fs-6 fw-bold grayscale-200 link-secondary mb-0"
                                  href="collections.html"
                                >
                                  {snft.name}
                                  <span className="text-primary">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 20 22"
                                      fill="none"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M11.513 1.94254C11.2246 0.237905 8.77552 0.237904 8.48715 1.94254C8.2805 3.16417 6.78595 3.64978 5.9007 2.78292C4.66545 1.57334 2.6841 3.01289 3.45276 4.56146C4.00363 5.67125 3.07995 6.94258 1.85425 6.76162C0.143939 6.50911 -0.612873 8.83834 0.919219 9.63935C2.0172 10.2134 2.0172 11.7849 0.919218 12.3589C-0.612874 13.1599 0.143939 15.4891 1.85425 15.2366C3.07995 15.0557 4.00363 16.327 3.45276 17.4368C2.6841 18.9854 4.66546 20.4249 5.9007 19.2153C6.78595 18.3485 8.2805 18.8341 8.48715 20.0557C8.77552 21.7603 11.2246 21.7603 11.513 20.0557C11.7196 18.8341 13.2142 18.3485 14.0994 19.2153C15.3347 20.4249 17.316 18.9854 16.5474 17.4368C15.9965 16.327 16.9202 15.0557 18.1459 15.2366C19.8562 15.4891 20.613 13.1599 19.0809 12.3589C17.9829 11.7849 17.9829 10.2134 19.0809 9.63935C20.613 8.83834 19.8562 6.50911 18.1459 6.76162C16.9202 6.94258 15.9965 5.67125 16.5474 4.56146C17.316 3.01289 15.3347 1.57334 14.0994 2.78292C13.2142 3.64978 11.7196 3.16417 11.513 1.94254ZM8.29287 13.6601C8.22746 13.5947 8.173 13.5225 8.1295 13.4457L6.70708 12.0233C6.31656 11.6328 6.31656 10.9996 6.70708 10.6091C7.09761 10.2186 7.73077 10.2186 8.1213 10.6091L9.02548 11.5133L12.2462 8.29262C12.6367 7.9021 13.2698 7.9021 13.6604 8.29262C14.0509 8.68315 14.0509 9.31631 13.6604 9.70684L9.70708 13.6601C9.31656 14.0506 8.6834 14.0506 8.29287 13.6601Z"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </span>
                                </a>

                               
                                <span
                                  className="d-flex align-items-center gap-2"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  data-bs-title="Star collection to add it to your watchlist."
                                >
                                  <svg
                                    className="favme"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 16 16"
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0.5"
                                  >
                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"></path>
                                  </svg>
                                </span>
                              </div>

                             
                              <div className="filter-wrapper align-items-center gap-1 mb-2">
                               
                                <a
                                  className="d-inline-flex gap-2 text-bg-bs card-border redius px-2 py-1"
                                  href="#"
                                  role="button"
                                >
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                  >
                                    <g fill="currentColor">
                                      <path d="m12 16.576 7.498-4.353L12 8.873zM4.5 12.223l7.5 4.353V8.874zM12 0v8.872l7.498 3.35z"></path>
                                      <path d="M12 0 4.5 12.223 12 8.872zM12 17.972V24l7.503-10.381zM12 24v-6.03L4.5 13.62z"></path>
                                    </g>
                                  </svg>
                                  <span className="meta text-xs grayscale-100 text-link mb-0">
                                    Ethereum
                                  </span>
                                </a>

                               
                                <a
                                  className="d-inline-flex gap-2 text-bg-bs card-border redius px-2 py-1"
                                  href="#"
                                  role="button"
                                >
                                  <span className="meta text-xs grayscale-100 text-link mb-0">
                                    ERC-721
                                  </span>
                                </a>

                               
                                <a
                                  className="d-inline-flex gap-2 text-bg-bs card-border redius px-2 py-1"
                                  href="#"
                                  role="button"
                                >
                                  <span className="meta text-xs grayscale-100 text-link mb-0">
                                    PFPs
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <p className="mt-3">
                           {snft.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* <!-- details --> */}
                    {/* <div className="accordion-item">
                      <div className="accordion-header">
                        <button
                          className="accordion-button collapsed d-flex align-items-center gap-2 h2 fw-bold mb-0"
                          type="button"
                        >
                          <svg width="18" height="18" viewBox="0 0 32 32">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4 26C4.0011 27.1041 4.89589 27.9989 6 28H26C27.1041 27.9989 27.9989 27.1041 28 26V6C27.9989 4.89589 27.1041 4.0011 26 4H6C4.89589 4.0011 4.0011 4.89589 4 6V26ZM6 26V6H26L26.001 26H6ZM17 22V13H13V15H15V22H12V24H20V22H17ZM14.5 9.83333C14.5 9.00491 15.1716 8.33333 16 8.33333C16.8284 8.33333 17.5 9.00491 17.5 9.83333C17.5 10.6618 16.8284 11.3333 16 11.3333C15.1716 11.3333 14.5 10.6618 14.5 9.83333Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          Details
                        </button>
                      </div>
                      <div className="accordion-collapse collapse">
                        <div className="accordion-body">
                          <div className="d-grid gap-3">
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="grayscale-400 mb-0">
                                Contract Address
                              </span>
                              <a
                                className="grayscale-100 fw-medium text-link mb-0"
                                href="#"
                              >
                                0xb6a3...786e
                              </a>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="grayscale-400 mb-0">
                                Token ID
                              </span>
                              <a
                                className="grayscale-100 fw-medium text-link"
                                href="#"
                              >
                                8924
                              </a>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="grayscale-400 mb-0">
                                Token Standard
                              </span>
                              <span className="grayscale-100 fw-medium mb-0">
                                ERC-721
                              </span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="grayscale-400 mb-0">Chain</span>
                              <span className="grayscale-100 fw-medium mb-0">
                                Ethereum
                              </span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="grayscale-400 mb-0">
                                Creator Earnings
                              </span>
                              <span className="text-warning meta bg-warning bg-opacity-25 redius px-1 py-0">
                                15%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* <!-- 2st column --> */}
              <div className="col-md-6">
                {/* <!-- info --> */}
                <div className="flex">
                  {/* <!-- head --> */}
                  <div className="d-flex justify-content-between align-items-center gap-2 px-0">
                    {/* <!-- collections --> */}
                    <div className="dropdown nav-item profile_menu">
                      {/* <!-- title --> */}
                      <div
                        className="nav-link"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <div className="bid-info">
                          <div className="img-box redius border-2x">
                            <img
                              src={snft?.userData?.image}
                              alt=""
                              width="40"
                            />
                          </div>
                          <span className="h5 fw-bold text-link grayscale-300 mb-0">
                            {snft?.nftData?.name}
                          </span>
                          <svg
                            display="block"
                            width="16"
                            height="16"
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

                      {/* <!-- dropdown --> */}
                      <div className="profile_menu dropdown-menu menu-xl dropdown-menu-shows redius">
                        <div className="nft-card card-bs p-2">
                          {/* <!-- author --> */}
                          <div className="d-flex gap-3 align-items-center mb-3">
                            <div className="bid-info">
                              <img
                                className="redius border-2x"
                                src={snft?.userData?.image}
                                alt=""
                                width="50"
                              />
                            </div>
                            <div className="d-grid">
                              <div className="d-flex align-items-center gap-2">
                                <a
                                  href="collection-single.html"
                                  className="h5 grayscale-100 text-link mb-0"
                                >
                                  {snft?.nftData?.name}
                                </a>
                                <svg
                                  display="block"
                                  width="20"
                                  height="20"
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
                              <div className="d-flex align-items-center gap-2">
                                <h6 className="grayscale-400 mb-0">
                                  Created by
                                </h6>
                                <a
                                  className="fw-bold grayscale-100 text-link mb-0"
                                  href="user-single.html"
                                >
                                  @{snft?.userData?.name}
                                </a>
                              </div>
                            </div>
                          </div>
                          {/* <!-- data --> */}
                          <div className="filter-wrapper justify-content-between card-bs card-border p-2 text-sm mb-2">
                            <div className="d-grid gap-1">
                              <span className="h6 fw-medium grayscale-500">
                                Floor
                              </span>
                              <span className="h5 fw-bold grayscale-100">
                                3.06 ETH
                              </span>
                            </div>
                            <div className="d-grid gap-1">
                              <span className="h6 fw-medium grayscale-500">
                                Volume
                              </span>
                              <span className="h5 fw-bold grayscale-100">
                                96.2K ETH
                              </span>
                            </div>
                            <div className="d-grid gap-1">
                              <span className="h6 fw-medium grayscale-500">
                                Items
                              </span>
                              <span className="h5 fw-bold grayscale-100">
                                10K
                              </span>
                            </div>
                          </div>
                          {/* <!-- nft --> */}
                          <div
                            className="crypt-scroll mt-2"
                            data-scroll=""
                            data-scroll-speed="3"
                          >
                            <div className="crypt-scrolling">
                              {/* <!-- nft 1 --> */}
                              <div className="gsap-image">
                                <img
                                  src="images/nft/azuki-1.jpg"
                                  alt=""
                                  width="120"
                                />
                              </div>
                              {/* <!-- nft 2 --> */}
                              <div className="gsap-image">
                                <img
                                  src="images/nft/azuki-10.jpg"
                                  alt=""
                                  width="120"
                                />
                              </div>
                              {/* <!-- nft 3 --> */}
                              <div className="gsap-image">
                                <img
                                  src="images/nft/azuki-2.jpg"
                                  alt=""
                                  width="120"
                                />
                              </div>
                              {/* <!-- nft 4 --> */}
                              <div className="gsap-image">
                                <img
                                  src="images/nft/azuki-3.jpg"
                                  alt=""
                                  width="120"
                                />
                              </div>
                              {/* <!-- nft 5 --> */}
                              <div className="gsap-image">
                                <img
                                  src="images/nft/azuki-4.jpg"
                                  alt=""
                                  width="120"
                                />
                              </div>
                              {/* <!-- nft 6 --> */}
                              <div className="gsap-image">
                                <img
                                  src="images/nft/azuki-5.jpg"
                                  alt=""
                                  width="120"
                                />
                              </div>
                              {/* <!-- nft 7 --> */}
                              <div className="gsap-image">
                                <img
                                  src="images/nft/azuki-6.jpg"
                                  alt=""
                                  width="120"
                                />
                              </div>
                              {/* <!-- nft 8 --> */}
                              <div className="gsap-image">
                                <img
                                  src="images/nft/azuki-7.jpg"
                                  alt=""
                                  width="120"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- meta --> */}
                    <div className="d-flex gap-2">
                      {/* <!-- fav --> */}
                      <button className="btn btn-editor btn-dark px-2 d-flex align-items-center grayscale-200 gap-2">
                        <span
                          data-toast="fav-toast"
                          className="toast-btn grayscale-400"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-title="Add to favorites"
                        >
                          <svg
                            className="favme"
                            width="18"
                            height="18"
                            fill="currentColor"
                            viewBox="0 0 1024 1024"
                          >
                            <path
                              d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        6,452
                      </button>

                      {/* <!-- share --> */}
                      <div className="dropdown z-2">
                        <a
                          className="btn btn-editor btn-dark px-2"
                          href="#!"
                          role="button"
                          data-bs-toggle="dropdown"
                          data-bs-auto-close="outside"
                          aria-expanded="false"
                        >
                          <svg
                            viewBox="0 0 25 24"
                            fill="none"
                            width="24"
                            height="24"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10.5303 7.53032C10.2374 7.82321 9.76256 7.82321 9.46967 7.53032C9.17678 7.23743 9.17678 6.76255 9.46967 6.46966L12.4697 3.46966L13 2.93933L13.5303 3.46966L16.5303 6.46966C16.8232 6.76255 16.8232 7.23743 16.5303 7.53032C16.2374 7.82321 15.7626 7.82321 15.4697 7.53032L13.75 5.81065V15C13.75 15.4142 13.4142 15.75 13 15.75C12.5858 15.75 12.25 15.4142 12.25 15V5.81065L10.5303 7.53032ZM9.625 11.75C8.58947 11.75 7.75 12.5895 7.75 13.625V16C7.75 17.2426 8.75736 18.25 10 18.25H16C17.2426 18.25 18.25 17.2426 18.25 16V13.625C18.25 12.5895 17.4105 11.75 16.375 11.75C15.9608 11.75 15.625 11.4142 15.625 11C15.625 10.5858 15.9608 10.25 16.375 10.25C18.239 10.25 19.75 11.761 19.75 13.625V16C19.75 18.0711 18.0711 19.75 16 19.75H10C7.92893 19.75 6.25 18.0711 6.25 16V13.625C6.25 11.761 7.76104 10.25 9.625 10.25C10.0392 10.25 10.375 10.5858 10.375 11C10.375 11.4142 10.0392 11.75 9.625 11.75Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </a>
                        <div className="profile_menu">
                          <div className="dropdown-menu redius card-bs card-border py-3">
                            <div className="px-3">
                              <h6 className="grayscale-200 fw-bold">
                                Share link to this page
                              </h6>
                              <div className="social d-flex align-items-center gap-2 mt-3">
                                {/* <!-- x --> */}
                                <a
                                  className="d-inline-flex gap-2 link-secondary text-bg-bs card-border redius px-2 py-1"
                                  href="#!"
                                  role="button"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  data-bs-title="X"
                                >
                                  <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      d="M17.7512 4H20.818L14.1179 11.201L22 21H15.8284L10.9946 15.057L5.46359 21H2.39494L9.5613 13.2977L2 4H8.32828L12.6976 9.43215L17.7512 4ZM16.6748 19.2738H18.3742L7.4049 5.63549H5.58133L16.6748 19.2738Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </a>
                                <span className="vr disable-sm-screen"></span>
                                {/* <!-- discord --> */}
                                <a
                                  className="d-inline-flex gap-2 link-secondary text-bg-bs card-border redius px-2 py-1"
                                  href="#!"
                                  role="button"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  data-bs-title="Discord"
                                >
                                  <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      d="M18.9308 5.32631C17.6561 4.71242 16.2892 4.26013 14.8599 4.00109C14.8339 3.99609 14.8079 4.00858 14.7945 4.03357C14.6187 4.36175 14.4239 4.78988 14.2876 5.12639C12.7503 4.88484 11.221 4.88484 9.71527 5.12639C9.57887 4.7824 9.37707 4.36175 9.20048 4.03357C9.18707 4.00941 9.16107 3.99692 9.13504 4.00109C7.70659 4.2593 6.33963 4.71159 5.06411 5.32631C5.05307 5.33131 5.04361 5.33965 5.03732 5.35047C2.44449 9.4161 1.73421 13.3818 2.08265 17.2983C2.08423 17.3175 2.09447 17.3358 2.10867 17.3475C3.81934 18.666 5.47642 19.4665 7.10273 19.9971C7.12876 20.0054 7.15634 19.9954 7.1729 19.9729C7.55761 19.4215 7.90054 18.8401 8.19456 18.2287C8.21192 18.1929 8.19535 18.1504 8.15989 18.1363C7.61594 17.9197 7.098 17.6557 6.59977 17.3558C6.56037 17.3317 6.55721 17.2725 6.59347 17.2442C6.69831 17.1617 6.80318 17.0759 6.9033 16.9893C6.92141 16.9735 6.94665 16.9701 6.96794 16.9801C10.2411 18.5486 13.7846 18.5486 17.0191 16.9801C17.0404 16.9693 17.0657 16.9726 17.0846 16.9885C17.1847 17.0751 17.2895 17.1617 17.3952 17.2442C17.4314 17.2725 17.4291 17.3317 17.3897 17.3558C16.8914 17.6615 16.3735 17.9197 15.8288 18.1354C15.7933 18.1496 15.7775 18.1929 15.7949 18.2287C16.0952 18.8393 16.4381 19.4207 16.8157 19.9721C16.8315 19.9954 16.8599 20.0054 16.8859 19.9971C18.5201 19.4665 20.1772 18.666 21.8879 17.3475C21.9028 17.3358 21.9123 17.3183 21.9139 17.2992C22.3309 12.7712 21.2154 8.83804 18.9568 5.3513C18.9513 5.33965 18.9419 5.33131 18.9308 5.32631ZM8.68335 14.9136C7.69792 14.9136 6.88594 13.964 6.88594 12.7979C6.88594 11.6317 7.68217 10.6822 8.68335 10.6822C9.69239 10.6822 10.4965 11.6401 10.4807 12.7979C10.4807 13.964 9.68451 14.9136 8.68335 14.9136ZM15.329 14.9136C14.3435 14.9136 13.5316 13.964 13.5316 12.7979C13.5316 11.6317 14.3278 10.6822 15.329 10.6822C16.338 10.6822 17.1421 11.6401 17.1264 12.7979C17.1264 13.964 16.338 14.9136 15.329 14.9136Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </a>
                                <span className="vr disable-sm-screen"></span>
                                {/* <!-- instagram --> */}
                                <a
                                  className="d-inline-flex gap-2 link-secondary text-bg-bs card-border redius px-2 py-1"
                                  href="#!"
                                  role="button"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  data-bs-title="Instagram"
                                >
                                  <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      d="M11.999 7.37688C9.44495 7.37688 7.37595 9.44688 7.37595 11.9999C7.37595 14.5539 9.44495 16.6239 11.999 16.6239C14.551 16.6239 16.622 14.5539 16.622 11.9999C16.622 9.44688 14.551 7.37688 11.999 7.37688ZM11.999 15.0039C10.34 15.0039 8.99495 13.6589 8.99495 12.0009C8.99495 10.3419 10.34 8.99788 11.999 8.99788C13.658 8.99788 15.001 10.3419 15.001 12.0009C15.001 13.6589 13.658 15.0039 11.999 15.0039Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M16.806 8.28488C17.4013 8.28488 17.884 7.80225 17.884 7.20688C17.884 6.61152 17.4013 6.12888 16.806 6.12888C16.2106 6.12888 15.728 6.61152 15.728 7.20688C15.728 7.80225 16.2106 8.28488 16.806 8.28488Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M20.533 6.11088C20.064 4.90188 19.109 3.94588 17.9 3.47888C17.201 3.21588 16.462 3.07488 15.714 3.05888C14.751 3.01688 14.446 3.00488 12.004 3.00488C9.56195 3.00488 9.24895 3.00488 8.29395 3.05888C7.54795 3.07388 6.80895 3.21488 6.10995 3.47888C4.89995 3.94588 3.94495 4.90188 3.47695 6.11088C3.21395 6.81088 3.07295 7.54888 3.05795 8.29688C3.01495 9.25888 3.00195 9.56388 3.00195 12.0069C3.00195 14.4489 3.00195 14.7599 3.05795 15.7169C3.07295 16.4649 3.21395 17.2029 3.47695 17.9039C3.94595 19.1119 4.90095 20.0679 6.11095 20.5359C6.80695 20.8079 7.54595 20.9619 8.29595 20.9859C9.25895 21.0279 9.56395 21.0409 12.006 21.0409C14.448 21.0409 14.761 21.0409 15.716 20.9859C16.463 20.9709 17.202 20.8289 17.902 20.5669C19.111 20.0979 20.066 19.1429 20.535 17.9339C20.798 17.2339 20.939 16.4959 20.954 15.7479C20.997 14.7859 21.01 14.4809 21.01 12.0379C21.01 9.59488 21.01 9.28488 20.954 8.32788C20.941 7.56988 20.801 6.81888 20.533 6.11088ZM19.315 15.6429C19.308 16.2189 19.204 16.7899 19.004 17.3309C18.699 18.1179 18.078 18.7399 17.292 19.0419C16.757 19.2409 16.193 19.3449 15.622 19.3529C14.672 19.3969 14.404 19.4079 11.968 19.4079C9.52995 19.4079 9.28095 19.4079 8.31295 19.3529C7.74395 19.3459 7.17795 19.2409 6.64395 19.0419C5.85495 18.7409 5.22995 18.1189 4.92495 17.3309C4.72895 16.7969 4.62295 16.2319 4.61395 15.6619C4.57095 14.7119 4.56095 14.4439 4.56095 12.0079C4.56095 9.57088 4.56095 9.32188 4.61395 8.35288C4.62095 7.77688 4.72495 7.20688 4.92495 6.66588C5.22995 5.87688 5.85495 5.25588 6.64395 4.95388C7.17795 4.75588 7.74395 4.65088 8.31295 4.64288C9.26395 4.59988 9.53095 4.58788 11.968 4.58788C14.405 4.58788 14.655 4.58788 15.622 4.64288C16.193 4.64988 16.757 4.75488 17.292 4.95388C18.078 5.25688 18.699 5.87888 19.004 6.66588C19.2 7.19988 19.306 7.76488 19.315 8.33488C19.358 9.28588 19.369 9.55288 19.369 11.9899C19.369 14.4259 19.369 14.6879 19.326 15.6439H19.315V15.6429Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </a>
                                <span className="vr disable-sm-screen"></span>
                                {/* <!-- link --> */}
                                <a
                                  className="d-inline-flex gap-2 link-secondary text-bg-bs card-border redius px-2 py-1"
                                  href="#!"
                                  role="button"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  data-bs-title="Copy"
                                >
                                  <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      d="M18.6693 5.33057C16.8144 3.47558 13.8068 3.47558 11.9518 5.33057L10.8912 6.39123C10.5983 6.68413 10.5983 7.159 10.8912 7.45189C11.1841 7.74479 11.6589 7.74479 11.9518 7.45189L13.0125 6.39123C14.2817 5.12203 16.3395 5.12203 17.6087 6.39123C18.8779 7.66044 18.8779 9.71822 17.6087 10.9874L15.4874 13.1087C14.2182 14.378 12.1604 14.378 10.8912 13.1087C10.5983 12.8159 10.1234 12.8159 9.83051 13.1087C9.53762 13.4016 9.53762 13.8765 9.83051 14.1694C11.6855 16.0244 14.693 16.0244 16.548 14.1694L18.6693 12.0481C20.5243 10.1931 20.5243 7.18556 18.6693 5.33057Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M14.1695 9.83057C12.3145 7.97558 9.30701 7.97558 7.45202 9.83057L5.3307 11.9519C3.47571 13.8069 3.47571 16.8144 5.3307 18.6694C7.18569 20.5244 10.1932 20.5244 12.0482 18.6694C12.3411 18.3765 12.3411 17.9016 12.0482 17.6087C11.7553 17.3159 11.2804 17.3159 10.9875 17.6087C9.71835 18.878 7.66056 18.878 6.39136 17.6087C5.12215 16.3395 5.12215 14.2818 6.39136 13.0126L8.51268 10.8912C9.78188 9.62203 11.8397 9.62203 13.1089 10.8912C13.4018 11.1841 13.8766 11.1841 14.1695 10.8912C14.4624 10.5983 14.4624 10.1235 14.1695 9.83057Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <!-- more --> */}
                      <div className="dropdown z-2">
                        {/* <!-- icon --> */}
                        <a
                          className="btn btn-editor btn-dark px-2"
                          href="#!"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            width="24"
                            height="24"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.5 12C8.5 12.8284 7.82843 13.5 7 13.5C6.17157 13.5 5.5 12.8284 5.5 12C5.5 11.1716 6.17157 10.5 7 10.5C7.82843 10.5 8.5 11.1716 8.5 12ZM13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12ZM16.999 13.5C17.8274 13.5 18.499 12.8284 18.499 12C18.499 11.1716 17.8274 10.5 16.999 10.5C16.1706 10.5 15.499 11.1716 15.499 12C15.499 12.8284 16.1706 13.5 16.999 13.5Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </a>
                        {/* <!-- dropdown menu --> */}
                        <div className="profile_menu">
                          <div className="dropdown-menu redius card-bs card-border p-2">
                            {/* <!-- link --> */}
                            <a
                              className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2"
                              href="#"
                            >
                              <svg
                                width="16"
                                height="16"
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
                              View Original Media
                            </a>

                            {/* <!-- link --> */}
                            <a
                              data-toast="refresh-toast"
                              className="toast-btn dropdown-item card-bs d-flex align-items-center fw-medium gap-2"
                              href="#!"
                            >
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 18 18"
                                fill="none"
                              >
                                <path
                                  d="M2.25 9C2.25 7.20979 2.96116 5.4929 4.22703 4.22703C5.4929 2.96116 7.20979 2.25 9 2.25C10.887 2.2571 12.6983 2.99342 14.055 4.305L15.75 6"
                                  stroke="currentColor"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M15.75 2.25V6H12"
                                  stroke="currentColor"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M15.75 9C15.75 10.7902 15.0388 12.5071 13.773 13.773C12.5071 15.0388 10.7902 15.75 9 15.75C7.11296 15.7429 5.30173 15.0066 3.945 13.695L2.25 12"
                                  stroke="currentColor"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M6 12H2.25V15.75"
                                  stroke="currentColor"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              Refresh Metadata
                            </a>

                            {/* <!-- link --> */}
                            <a
                              className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2"
                              href="#"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M6.4502 22C6.0402 22 5.7002 21.66 5.7002 21.25V2.75C5.7002 2.34 6.0402 2 6.4502 2C6.8602 2 7.2002 2.34 7.2002 2.75V21.25C7.2002 21.66 6.8602 22 6.4502 22Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  opacity="0.4"
                                  d="M15.2001 7.16004L7.10008 3.66004C6.98008 3.60004 6.85008 3.62004 6.74008 3.69004C6.64008 3.76004 6.58008 3.87004 6.58008 4.00004V17C6.58008 17.13 6.65008 17.25 6.76008 17.32C6.82008 17.36 6.89008 17.38 6.96008 17.38C7.02008 17.38 7.07008 17.37 7.13008 17.34L15.4301 13.24C15.4301 13.24 15.4301 13.24 15.4401 13.24C17.1001 12.38 17.9901 11.27 17.9401 10.1C17.8801 8.92004 16.9101 7.88004 15.2001 7.16004Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                              Report item
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- title --> */}
                  <div className="flex mt-2">
                    <div data-tabs-fade="" className="h3 grayscale-100 mb-4">
                      {snft.collectionData?.name}
                    </div>
                  </div>

                  {/* <!-- user data --> */}
                  <div className="d-flex align-items-center gap-2 px-0 mb-4">
                    {/* <!-- creator --> */}
                    <div className="dropdown nav-item profile_menu">
                      {/* <!-- nav link --> */}
                      <div
                        className="bid-info btn btn-editor btn-dark px-1 py-1"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <div className="circle card-border">
                          <img src="images/user/XCOPY.gif" alt="" width="26" />
                        </div>
                        <div className="d-flex align-items-center gap-2 heading-6 fw-bold text-link grayscale-200 mb-0 me-1">
                          {snft.userData?.name}
                          <svg
                            width="12"
                            height="12"
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

                      {/* <!-- dropdown --> */}
                      <div className="profile_menu dropdown-menu menu-xl dropdown-menu-shows redius">
                        <div className="nft-card card-bs p-2">
                          {/* <!-- author --> */}
                          <div className="d-flex justify-content-between mb-3">
                            {/* <!-- user --> */}
                            <div className="d-flex gap-3">
                              <div className="bid-info">
                                <img
                                  className="circle border-2x"
                                  src="images/user/XCOPY.gif"
                                  alt=""
                                  width="50"
                                />
                              </div>
                              <div className="d-grid">
                                <div className="h4 product-name mb-1">
                                  <div className="d-flex align-items-center gap-2">
                                    <a
                                      className="heading-5 grayscale-200 text-link mb-0"
                                      href=""
                                    >
                                      0X9999E
                                    </a>
                                    <svg
                                      display="block"
                                      width="16"
                                      height="16"
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
                                  className="d-flex justify-content-between align-items-center gap-2"
                                  role="button"
                                >
                                  {/* <!-- address --> */}
                                  <span
                                    className="meta text-xs grayscale-400 link-secondary mb-0"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="Copy address"
                                  >
                                    0x6e75r...c5464
                                  </span>
                                  <span className="vr mx-1"></span>
                                  {/* <!-- social --> */}
                                  <div className="social d-flex align-items-center gap-2 z-2">
                                    <span className="d-inline-flex gap-2 link-secondary text-bg-bs card-border redius px-2 py-1">
                                      <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                      >
                                        <path
                                          d="M17.7512 4H20.818L14.1179 11.201L22 21H15.8284L10.9946 15.057L5.46359 21H2.39494L9.5613 13.2977L2 4H8.32828L12.6976 9.43215L17.7512 4ZM16.6748 19.2738H18.3742L7.4049 5.63549H5.58133L16.6748 19.2738Z"
                                          fill="currentColor"
                                        ></path>
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* <!-- cta --> */}
                            <div className="flex">
                              <a
                                className="btn btn-dark btn-editor-sm meta text-xs grayscale-400 text-link d-flex align-items-center gap-2 mb-0 py-1"
                                role="button"
                                href="#!"
                              >
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                >
                                  <path
                                    d="M3.75 9H14.25"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M9 3.75V14.25"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                                Follow
                              </a>
                            </div>
                          </div>

                          {/* <!-- data --> */}
                          <div className="d-flex justify-content-between gap-4 card-bs card-border redius p-3 mt-3">
                            {/* <!-- followers --> */}
                            <div className="d-grid gap-4">
                              <span className="text-sm fw-medium grayscale-500">
                                Followers
                              </span>
                              <span className="meta fs-6 grayscale-100">
                                492.6k
                              </span>
                            </div>

                            {/* <!-- created --> */}
                            <div className="d-grid gap-4">
                              <span className="text-sm fw-medium grayscale-500">
                                Created
                              </span>
                              <span className="meta fs-6 grayscale-100">
                                90.24K
                              </span>
                            </div>

                            {/* <!-- collected --> */}
                            <div className="d-grid gap-4">
                              <span className="text-sm fw-medium grayscale-500">
                                Collected
                              </span>
                              <span className="meta fs-6 grayscale-100">
                                5.94K
                              </span>
                            </div>
                          </div>

                          {/* <!-- nft --> */}
                          <div
                            className="crypt-scroll mt-2"
                            data-scroll=""
                            data-scroll-speed="3"
                          >
                            <div className="crypt-scrolling">
                              {/* <!-- nft 1 --> */}
                              <div className="circle redius">
                                <img
                                  src="images/nft/azuki-3.jpg"
                                  alt=""
                                  width="80"
                                />
                              </div>
                              {/* <!-- nft 2 --> */}
                              <div className="circle redius">
                                <img
                                  src="images/nft/azuki-7.jpg"
                                  alt=""
                                  width="80"
                                />
                              </div>
                              {/* <!-- nft 3 --> */}
                              <div className="circle redius">
                                <img
                                  src="images/nft/HypioBabies-1.jpg"
                                  alt=""
                                  width="80"
                                />
                              </div>
                              {/* <!-- nft 4 --> */}
                              <div className="circle redius">
                                <img
                                  src="images/nft/Valhalla-2.jpg"
                                  alt=""
                                  width="80"
                                />
                              </div>
                              {/* <!-- nft 5 --> */}
                              <div className="circle redius">
                                <img
                                  src="images/nft/azuki-7.jpg"
                                  alt=""
                                  width="80"
                                />
                              </div>
                              {/* <!-- nft 6 --> */}
                              <div className="circle redius">
                                <img
                                  src="images/nft/azuki-1.jpg"
                                  alt=""
                                  width="80"
                                />
                              </div>
                              {/* <!-- nft 7 --> */}
                              <div className="circle redius">
                                <img
                                  src="images/nft/HypioBabies-2.jpg"
                                  alt=""
                                  width="80"
                                />
                              </div>
                              {/* <!-- nft 8 --> */}
                              <div className="circle redius">
                                <img
                                  src="images/nft/Valhalla-3.jpg"
                                  alt=""
                                  width="80"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="vr"></div>

                    {/* <!-- owned by --> */}
                    <span className="d-flex align-items-center meta text-xs gap-1 text-bg-bs card-border redius px-2 py-1">
                      Owned by
                      <a
                        className="d-flex align-items-center gap-1 mt-1 mt-sm-0"
                        href="user-single.html"
                      >
                        <img
                          className="circle card-border"
                          src="images/user/ava_2.png"
                          alt=""
                          width="16"
                        />
                        <span className="d-flex align-items-center gap-1 meta text-xs text-link grayscale-100 mb-0">
                          0x9870 ...RG34
                        </span>
                      </a>
                    </span>
                  </div>

                  {/* <!-- price info --> */}
                  <div className="card-bs card-border redius mt-4 p-2">
                    {/* <!-- countdown --> */}
                    <div className="d-inline-flex fright align-items-center gap-1 redius card-bs-tabs pe-2">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <style>{`
          @keyframes loader5 {
            0% { transform: rotate(0); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
                        <g
                          style={{
                            animation: isCountdownRunning
                              ? "loader5 1.5s linear infinite both"
                              : "none",
                            transformOrigin: "center center",
                          }}
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="4"
                            stroke="var(--brand-color)"
                            strokeWidth="1.5"
                          />
                          <circle
                            cx="17"
                            cy="7"
                            r="1"
                            fill="var(--color-primary-100)"
                          />
                        </g>
                      </svg>

                      <CountDownTimer
                        startDate={snft?.startDate}
                        endDate={snft?.endDate}
                        onEnd={() => setIsCountdownRunning(false)}
                      />
                    </div>

                    {/* <!-- price data --> */}
                    <div className="flex p-3 mb-3">
                      <span className="d-inline-flex align-items-center meta text-xs grayscale-100 gap-2 text-bg-bs card-border redius px-2 py-1 mb-3">
                        Current Price
                      </span>
                      <div className="d-flex align-items-end gap-2 h2 grayscale-100 mb-0">
                        0.324
                        <span className="meta fs-4 fw-medium grayscale-400 mb-0">
                          ETH
                        </span>
                      </div>
                      <div className="grayscale-500 fs-6 mt-2">
                        ≈ ${snft?.nftData?.saleprice}
                      </div>
                    </div>

                    {/* <!-- buy button --> */}
                    <div className="d-flex align-items-center gap-2">
                      {/* <!-- buy --> */}
                      <div className="col">
                        <div className="d-grid">
                          <button
                            className="btn btn-primary border-0 py-2 px-4"
                            onClick={() => setShowBidmodel(true)}
                            disabled={
                              new Date() < new Date(snft.startDate) ||
                              new Date() > new Date(snft.endDate)
                            }
                          >
                            Bid now
                          </button>
                          {new Date() < new Date(snft.startDate) && (
                            <small className="text-warning">
                              Auction not started yet
                            </small>
                          )}

                          {new Date() > new Date(snft.endDate) && (
                            <small className="text-danger">
                              Auction has ended
                            </small>
                          )}

                          {showBidmodel && (
                            <div className="modal show d-block" tabIndex="-1">
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5 className="modal-title">
                                      Place Your Bid
                                    </h5>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      onClick={() => setShowBidmodel(false)}
                                    ></button>
                                  </div>
                                  <div className="modal-body">
                                    <input
                                      type="number"
                                      className="form-control"
                                      placeholder="Enter bid amount"
                                      value={bidAmount}
                                      onChange={(e) =>
                                        setBidAmount(e.target.value)
                                      }
                                    />
                                  </div>
                                  <div className="modal-footer">
                                    <button
                                      className="btn btn-secondary"
                                      onClick={() => setShowBidmodel(false)}
                                    >
                                      Cancel
                                    </button>
                                    <button
                                      className="btn btn-primary"
                                      onClick={() => {
                                        handleBidSubmit(snft._id);
                                      }}
                                    >
                                      Submit Bid
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* <!-- offer --> */}
                      <div className="col-auto ml-auto">
                        <div className="d-grid">
                          <button
                            className="btn btn-dark border-0 py-2 px-4"
                            type="button"
                          >
                            Make offer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- chart --> */}
                <div className="flex mt-4">
                  <div className="accordion">
                    {/* <!-- chart --> */}
                    <div className="accordion-item">
                      {/* <!-- title --> */}
                      <div className="accordion-header">
                        <button
                          className="accordion-button collapsed gap-2 fs-5 fw-bold"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#History"
                          aria-expanded="true"
                          aria-controls="History"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M22 7L13.5 15.5L8.5 10.5L2 17"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M16 7H22V13"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Price History
                        </button>
                      </div>
                      {/* <!-- chart --> */}
                      <div
                        id="History"
                        className="accordion-collapse collapse show"
                        aria-labelledby="History"
                      >
                        <div className="accordion-body px-3 pb-2 pt-0">
                          <div className="col-md-8 h6 grayscale-400 py-1">
                            To switch directories, type <kbd>cd</kbd> followed
                            by the directory. The fastest way to the Clear
                            browsing data, press{" "}
                            <kbd>
                              <kbd>Ctrl</kbd> + <kbd>Shift</kbd>
                            </kbd>{" "}
                            r
                          </div>
                          <div className="row align-items-center">
                            <div className="col-md-1 verticle-text hidesmscreen">
                              <p className="fw-bold text-info">Volume (ETH)</p>
                            </div>
                            <div className="col-md-11">
                              <div className="mx-auto" id="chart"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- activity --> */}
                    <div className="accordion-item">
                      <div className="accordion-header">
                        <button
                          className="accordion-button gap-2 collapsed fs-5 fw-bold"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#Activity"
                          aria-expanded="false"
                          aria-controls="Activity"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5Z"
                              stroke="currentColor"
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M14.1668 10.0002H12.5002L10.8335 14.1668L9.16683 5.8335L7.50016 10.0002H5.8335"
                              stroke="currentColor"
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Activity
                        </button>
                      </div>
                      <div
                        id="Activity"
                        className="accordion-collapse collapse show"
                        aria-labelledby="Activity"
                      >
                        <div className="accordion-body px-0">
                          {/* <!-- Table --> */}
                          <div className="table-responsive">
                            <table className="table table-dark table-hover mb-0">
                              <thead>
                                <tr className="table-active mb-0">
                                  <th scope="col" className="h6">
                                    Name
                                  </th>
                                  <th scope="col" className="h6">
                                    Event
                                  </th>
                                  <th scope="col" className="h6">
                                    Price
                                  </th>
                                  <th scope="col" className="h6">
                                    Date
                                  </th>
                                  <th scope="col" className="h6">
                                    Action
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="align-middle">
                                  <td>
                                    <div className="d-flex flex-row align-items-center gap-2">
                                      <img
                                        alt=""
                                        src="images/user/ava_1.png"
                                        width="24"
                                      />
                                      <p className="d-flex align-items-center gap-2 fw-bold fs-6 mb-0">
                                        EarthNode
                                        <svg
                                          display="block"
                                          width="16"
                                          height="16"
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
                                        <span className="h6 grayscale-600 mb-0">
                                          Purchased for
                                        </span>
                                      </p>
                                    </div>
                                  </td>
                                  <td className="fw-medium">
                                    <span className="badge text-bg-primary text-uppercase">
                                      Sale
                                    </span>
                                  </td>
                                  <td className="grayscale-300 fw-medium">
                                    6.95 ETH
                                  </td>
                                  <td className="grayscale-500 fw-medium">
                                    1 day ago
                                  </td>
                                  <td>
                                    <a
                                      className="link-secondary fw-bold btn-tr"
                                      href="price.html"
                                      target="_blank"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      data-bs-title="Details"
                                    >
                                      <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                      >
                                        <path
                                          d="M7.50008 18.3333H12.5001C16.6667 18.3333 18.3334 16.6667 18.3334 12.5V7.49999C18.3334 3.33332 16.6667 1.66666 12.5001 1.66666L7.50008 1.66666C3.33341 1.66666 1.66675 3.33332 1.66675 7.49999L1.66675 12.5C1.66675 16.6667 3.33341 18.3333 7.50008 18.3333Z"
                                          stroke="var(--color-primary-500)"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.82495 6.39999H12.3583V9.94166"
                                          stroke="var(--color-primary-500)"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M12.3583 6.39999L7.6416 11.1167"
                                          stroke="var(--color-primary-500)"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M5 13.7583C8.24167 14.8417 11.7583 14.8417 15 13.7583"
                                          stroke="var(--color-primary-500)"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </a>
                                  </td>
                                </tr>
                                <tr className="align-middle">
                                  <td>
                                    <div className="d-flex flex-row align-items-center gap-2">
                                      <img
                                        alt=""
                                        src="images/user/ava_3.png"
                                        width="24"
                                      />
                                      <p className="d-flex align-items-center gap-2 fw-bold fs-6 mb-0">
                                        0x9870 ...RG34
                                        <span className="h6 grayscale-600 mb-0">
                                          Unlisted for
                                        </span>
                                      </p>
                                    </div>
                                  </td>
                                  <td className="fw-medium">
                                    <span className="badge text-bg-danger text-uppercase">
                                      Unlisted
                                    </span>
                                  </td>
                                  <td className="grayscale-600 fw-medium">
                                    --
                                  </td>
                                  <td className="grayscale-500 fw-medium">
                                    2 day ago
                                  </td>
                                  <td>
                                    <a
                                      className="link-secondary fw-bold btn-tr"
                                      href="price.html"
                                      target="_blank"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      data-bs-title="Details"
                                    >
                                      <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                      >
                                        <path
                                          d="M7.50008 18.3333H12.5001C16.6667 18.3333 18.3334 16.6667 18.3334 12.5V7.49999C18.3334 3.33332 16.6667 1.66666 12.5001 1.66666L7.50008 1.66666C3.33341 1.66666 1.66675 3.33332 1.66675 7.49999L1.66675 12.5C1.66675 16.6667 3.33341 18.3333 7.50008 18.3333Z"
                                          stroke="var(--color-primary-500)"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.82495 6.39999H12.3583V9.94166"
                                          stroke="var(--color-primary-500)"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M12.3583 6.39999L7.6416 11.1167"
                                          stroke="var(--color-primary-500)"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M5 13.7583C8.24167 14.8417 11.7583 14.8417 15 13.7583"
                                          stroke="var(--color-primary-500)"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </a>
                                  </td>
                                </tr>
                                <tr className="align-middle">
                                  <td>
                                    <div className="d-flex flex-row align-items-center gap-2">
                                      <img
                                        alt=""
                                        src="images/user/ava_6.png"
                                        width="24"
                                      />
                                      <p className="d-flex align-items-center gap-2 fw-bold fs-6 mb-0">
                                        Forexus
                                        <svg
                                          display="block"
                                          width="16"
                                          height="16"
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
                                        <span className="h6 grayscale-600 mb-0">
                                          Listed for
                                        </span>
                                      </p>
                                    </div>
                                  </td>
                                  <td className="fw-medium">
                                    <span className="badge text-bg-success text-uppercase">
                                      Minted
                                    </span>
                                  </td>
                                  <td className="grayscale-300 fw-medium">
                                    6.95 ETH
                                  </td>
                                  <td className="grayscale-500 fw-medium">
                                    1 day ago
                                  </td>
                                  <td>
                                    <a
                                      className="link-secondary fw-bold btn-tr"
                                      href="price.html"
                                      target="_blank"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      data-bs-title="Details"
                                    >
                                      <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                      >
                                        <path
                                          d="M7.50008 18.3333H12.5001C16.6667 18.3333 18.3334 16.6667 18.3334 12.5V7.49999C18.3334 3.33332 16.6667 1.66666 12.5001 1.66666L7.50008 1.66666C3.33341 1.66666 1.66675 3.33332 1.66675 7.49999L1.66675 12.5C1.66675 16.6667 3.33341 18.3333 7.50008 18.3333Z"
                                          stroke="var(--color-primary-500)"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.82495 6.39999H12.3583V9.94166"
                                          stroke="var(--color-primary-500)"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M12.3583 6.39999L7.6416 11.1167"
                                          stroke="var(--color-primary-500)"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M5 13.7583C8.24167 14.8417 11.7583 14.8417 15 13.7583"
                                          stroke="var(--color-primary-500)"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </a>
                                  </td>
                                </tr>
                                <tr className="align-middle">
                                  <td>
                                    <div className="d-flex flex-row align-items-center gap-2">
                                      <img
                                        alt=""
                                        src="images/user/ava_6.png"
                                        width="24"
                                      />
                                      <p className="d-flex align-items-center gap-2 fw-bold fs-6 mb-0">
                                        Forexus
                                        <svg
                                          display="block"
                                          width="16"
                                          height="16"
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
                                        <span className="h6 grayscale-600 mb-0">
                                          Listed for
                                        </span>
                                      </p>
                                    </div>
                                  </td>
                                  <td className="fw-medium">
                                    <span className="badge text-bg-secondary text-uppercase">
                                      Listed
                                    </span>
                                  </td>
                                  <td className="grayscale-600 fw-medium">
                                    --
                                  </td>
                                  <td className="grayscale-500 fw-medium">
                                    1 day ago
                                  </td>
                                  <td>
                                    <a
                                      className="link-secondary fw-bold btn-tr"
                                      href="price.html"
                                      target="_blank"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      data-bs-title="Details"
                                    >
                                      <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                      >
                                        <path
                                          d="M7.50008 18.3333H12.5001C16.6667 18.3333 18.3334 16.6667 18.3334 12.5V7.49999C18.3334 3.33332 16.6667 1.66666 12.5001 1.66666L7.50008 1.66666C3.33341 1.66666 1.66675 3.33332 1.66675 7.49999L1.66675 12.5C1.66675 16.6667 3.33341 18.3333 7.50008 18.3333Z"
                                          stroke="var(--color-primary-500)"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.82495 6.39999H12.3583V9.94166"
                                          stroke="var(--color-primary-500)"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M12.3583 6.39999L7.6416 11.1167"
                                          stroke="var(--color-primary-500)"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M5 13.7583C8.24167 14.8417 11.7583 14.8417 15 13.7583"
                                          stroke="var(--color-primary-500)"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default SingleNft;
