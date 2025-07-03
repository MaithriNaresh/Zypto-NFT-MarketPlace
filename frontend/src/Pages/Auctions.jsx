import React from "react";
import SideComponent from "./Componets/SideComponent";
import HeaderComponet from "./Componets/HeaderComponet";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Auctions = () => {
  const [auction, setAuction] = useState([]);
  const fetchAuction = async () => {
    const response = await axios.get(
      "http://localhost:5656/getAuctionsWithNft"
    );
    setAuction(await response.data);
    console.log(await response.data);
  };
  useEffect(() => {
    fetchAuction();
  }, []);

  const bidprice = (saleprice, discount) => {
    const actualprice = (saleprice * discount) / 100;
    return actualprice;
  };

  return (
    <div className="container-fluid fixed-sidebar">
      <SideComponent></SideComponent>
      <div className="wrapper pb-4">
        <HeaderComponet title="OnGoing Auctions"></HeaderComponet>
        <div className="d-grid grid-col-5">
          {auction &&
            auction.filter((auct) => auct.status === "accept").map((auct) => {
              return (
                <Link to={`/singlenft/${auct.nftData._id}`} key={auct._id}>
                  <div className="nft-card animation-1 card-border">
                    
                      <div className="d-flex justify-content-between align-items-center px-1 mb-1">
                        {/* <!-- minting --> */}
                        <div className="d-flex align-items-center gap-2">
                          <span
                            className="spinner-grow spinner-grow-sm text-success"
                            aria-hidden="true"
                          ></span>
                          <span className="meta text-xs fw-medium grayscale-200">
                            Now
                          </span>
                        </div>
                        {/* <!-- edition --> */}
                        <div className="flex">
                          <span className="meta text-xs grayscale-100 link-secondary bg-dark bg-opacity-25 redius p-1 px-2 mb-0">
                            422/1,500
                          </span>
                        </div>
                      </div>

                      {/* <!-- assets --> */}
                      <div className="nft-card-head">
                        {/* <!-- artwork --> */}
                        <img
                          src={auct.nftData.image}
                          className="card-img-top product-img rounded"
                          alt=""
                          width="400"
                        />
                      </div>

                      {/* <!-- actions --> */}
                      <div className="d-flex align-items-center gap-2 root-btns start-0 bottom-100 top-0 mt-5 pt-3 px-3">
                        {/* <!-- chain --> */}
                        <div className="flex">
                          <span
                            className="d-inline-flex btn bg-light bg-opacity-10 circle grayscale-200 link-secondary p-1"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Chain : Flow"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24">
                              <path
                                className="fill-current"
                                d="M17.647 5.649H24V0h-6.353a7.773 7.773 0 0 0-7.765 7.765v.708h5.645v-.708a2.12 2.12 0 0 1 2.12-2.116Zm-2.121 8.468V8.473h5.65v5.649l-5.647-.001v2.117a7.766 7.766 0 0 1-1.131 4.037l-.177.277a7.766 7.766 0 0 1-13.63-7.285 7.765 7.765 0 0 1 7.174-4.794h2.12v5.645h-2.12a2.12 2.12 0 1 0 2.12 2.12v-2.12l5.641-.001Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                        </div>
                        {/* <!-- market --> */}
                      </div>

                      {/* <!-- metadata --> */}
                      <div className="flex ps-2 pe-1 py-1">
                        {/* <!-- artwork name --> */}
                        <div className="d-flex justify-content-between mb-2 mt-1">
                          {/* <!-- title --> */}
                          <div className="text-truncate tt-1 fs-5 fw-bold link-secondary grayscale-200">
                            {auct.nftData.name}
                          </div>
                          {/* <!-- more --> */}
                          <div className="dropdown">
                            {/* <!-- btn --> */}
                            <span
                              className="btn btn-editor btn-dark px-1 py-0"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
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
                            </span>
                            {/* <!-- dropdown menu --> */}
                            <div className="profile_menu">
                              <div
                                className="dropdown-menu redius card-bs card-border p-2"
                                data-popper-placement="bottom-end"
                              >
                                <span className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2">
                                  <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      d="M20.5398 19.0398C20.3898 19.1898 20.1998 19.2598 20.0098 19.2598C19.8198 19.2598 19.6298 19.1898 19.4798 19.0398L14.5298 14.0898L15.0598 13.5598L15.5898 13.0298L20.5398 17.9798C20.8298 18.2698 20.8298 18.7498 20.5398 19.0398Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      opacity="0.4"
                                      d="M6.46987 9.28009L12.2699 15.0801C12.6599 15.4701 12.6599 16.1001 12.2699 16.4901L11.3699 17.4001C10.5599 18.2001 9.27986 18.2001 8.47986 17.4001L4.13986 13.0601C3.34986 12.2701 3.34986 10.9801 4.13986 10.1801L5.04987 9.27009C5.43987 8.89009 6.07986 8.89009 6.46987 9.28009Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M18.59 10.1899L14.78 13.9899C14.38 14.3899 13.74 14.3899 13.34 13.9899L7.57002 8.21994C7.17002 7.81994 7.17002 7.17994 7.57002 6.77994L11.38 2.96994C12.17 2.17994 13.46 2.17994 14.26 2.96994L18.6 7.30994C19.38 8.09994 19.38 9.37994 18.59 10.1899Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M8 21.75H2C1.59 21.75 1.25 21.41 1.25 21C1.25 20.59 1.59 20.25 2 20.25H8C8.41 20.25 8.75 20.59 8.75 21C8.75 21.41 8.41 21.75 8 21.75Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                  Place a floor bid
                                </span>
                                <span className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2">
                                  <svg
                                    width="20"
                                    height="20"
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
                                </span>
                                <span className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2">
                                  <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 25 24"
                                    fill="none"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M10.5303 7.53032C10.2374 7.82321 9.76256 7.82321 9.46967 7.53032C9.17678 7.23743 9.17678 6.76255 9.46967 6.46966L12.4697 3.46966L13 2.93933L13.5303 3.46966L16.5303 6.46966C16.8232 6.76255 16.8232 7.23743 16.5303 7.53032C16.2374 7.82321 15.7626 7.82321 15.4697 7.53032L13.75 5.81065V15C13.75 15.4142 13.4142 15.75 13 15.75C12.5858 15.75 12.25 15.4142 12.25 15V5.81065L10.5303 7.53032ZM9.625 11.75C8.58947 11.75 7.75 12.5895 7.75 13.625V16C7.75 17.2426 8.75736 18.25 10 18.25H16C17.2426 18.25 18.25 17.2426 18.25 16V13.625C18.25 12.5895 17.4105 11.75 16.375 11.75C15.9608 11.75 15.625 11.4142 15.625 11C15.625 10.5858 15.9608 10.25 16.375 10.25C18.239 10.25 19.75 11.761 19.75 13.625V16C19.75 18.0711 18.0711 19.75 16 19.75H10C7.92893 19.75 6.25 18.0711 6.25 16V13.625C6.25 11.761 7.76104 10.25 9.625 10.25C10.0392 10.25 10.375 10.5858 10.375 11C10.375 11.4142 10.0392 11.75 9.625 11.75Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                  Share
                                </span>
                                <span className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2">
                                  <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      opacity="0.4"
                                      d="M21.25 9.15005C18.94 5.52005 15.56 3.43005 12 3.43005C10.22 3.43005 8.49 3.95005 6.91 4.92005C5.33 5.90005 3.91 7.33005 2.75 9.15005C1.75 10.7201 1.75 13.2701 2.75 14.8401C5.06 18.4801 8.44 20.5601 12 20.5601C13.78 20.5601 15.51 20.0401 17.09 19.0701C18.67 18.0901 20.09 16.6601 21.25 14.8401C22.25 13.2801 22.25 10.7201 21.25 9.15005ZM12 16.0401C9.76 16.0401 7.96 14.2301 7.96 12.0001C7.96 9.77005 9.76 7.96005 12 7.96005C14.24 7.96005 16.04 9.77005 16.04 12.0001C16.04 14.2301 14.24 16.0401 12 16.0401Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M12 9.14001C10.43 9.14001 9.15002 10.42 9.15002 12C9.15002 13.57 10.43 14.85 12 14.85C13.57 14.85 14.86 13.57 14.86 12C14.86 10.43 13.57 9.14001 12 9.14001Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                  Open original
                                </span>
                                <span className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2">
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
                                  Report
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* <!-- meta --> */}
                        <div className="d-flex justify-content-between align-items-center">
                          {/* <!-- author --> */}
                          <div className="d-flex align-items-center gap-1 disable-sm-screen">
                            <img
                              className="circle card-border"
                              alt=""
                              src={auct.userData.image}
                              width="22"
                              height="22"
                            />
                            <div className="text-truncate tt-1 fw-medium grayscale-300 link-secondary">
                              {auct.userData.name.slice(0, 5) + "..."}
                            </div>
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

                          {/* <!-- price --> */}
                          <div className="flex">
                            <span className="meta text-xs grayscale-100 link-secondary bg-info bg-opacity-50 redius p-1 px-2">
                              {bidprice(
                                auct.nftData.saleprice,
                                auct.nftData.discount
                              )}{" "}
                              FLOW
                            </span>
                          </div>
                        </div>
                      </div>
                   
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Auctions;
