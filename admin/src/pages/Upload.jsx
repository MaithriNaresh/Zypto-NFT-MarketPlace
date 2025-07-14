
import axios from "axios";
import React from "react";
import { useState } from "react";

const Upload = () => {
  const [nft, setnft] = useState({
    name: "",   
    description: "",
    saleprice: 0,
    discount: 0,
  });
   const [img, setimage] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setnft((preval) => ({ ...preval, [name]: value }));
    console.log(nft);
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("name", nft.name);
  formData.append("description", nft.description);
  formData.append("saleprice", nft.saleprice);
  formData.append("discount", nft.discount);
 formData.append("url", img);

  // console.log("Sending:", {
  //   ...nft,
  //   image: img?.name,
  // });

  try {
    const response = await axios.post( `http://localhost:6363/addnft`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    alert("Product uploaded!");
    console.log(await response.data);
  } catch (error) {
    console.error("Upload failed:", error);
    alert("Upload failed. Check console for details.");
  }
};



  return (
    <>
      <section className="nftmax-adashboard nftmax-show">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-12 nftmax-main__column">
              <div className="nftmax-body">
                {/* <!-- Dashboard Inner --> */}
                <div className="nftmax-dsinner">
                  {/* <!-- All Notification Heading --> */}
                  <div className="nftmax-inner__heading">
                    <h2 className="nftmax-inner__page-title">
                      Create new item
                    </h2>
                  </div>
                  {/* <!-- End All Notification Heading --> */}

                  <div className="nftmax__item">
                    <div className="nftmax__item-heading">
                      <h2 className="nftmax__item-title nftmax__item-title--psingle">
                        Image,Video,Audio or 3D Model
                      </h2>
                      <p className="nftmax__item-text nftmax__item-text--single">
                        File types suppported: JPG, PNG, GIP, SVG, MP4, MP3,
                        WEBM, OGG, GLB, GLTF. Max Size : 100 MB
                      </p>
                    </div>
                    <form className ="form" onSubmit={(e) => {handleSubmit(e)}} >
                      <div className ="row">
                        <div className ="col-12">
                          <div className ="nftmax__item-box">
                            <div className="row nftmax-pcolumn">
                              <div className="col-xxl-5 col-lg-5 col-12 nftmax-pcolumn__one">
                                <div className="nftmax__file-top">
                                  <div className="nftmax__file-upload">
                                    <div className="upload-files">
                                      <div className="body" id="drop">
                                        <img
                                          className="nftmax__file-upload--img"
                                          src="img/upload.png"
                                          alt=""
                                        />
                                        <p className="pointer-none nftmax__file-text">
                                          <b>
                                            Drop files to upload <br /> or{" "}
                                            <a href="" id="triggerFile">
                                              Browse
                                            </a>
                                          </b>
                                        </p>
                                        <input
                                          type="file"
                                          // multiple="multiple"
                                          // name="url"
                                          // onChange={(e) => {handleChange(e)}}
                                        />
                                      </div>
                                      <div className="nftmax__file-updated">
                                        <div className="divider">
                                          <span>FILES</span>
                                        </div>
                                        <div className="list-files"></div>
                                        <button className="importar">
                                          UPDATE FILES
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xxl-7 col-lg-7 col-12 nftmax-pcolumn__two">
                                <div className="nftmax__item-form--main">
                                  <div className="nftmax__item-form--group ntfmax__item-form--radio">
                                    <div className="ntfmax__item-radio--inner">
                                      <label className="nftmax__item-label">
                                        Put on marketplace{" "}
                                        <span className="nftmax__item-sublabel">
                                          Enter price to allow users instantly
                                          purchase your NFT
                                        </span>
                                      </label>

                                      <div className="ntfmax__item-radio--disable">
                                        <input
                                          type="radio"
                                          name="select"
                                          id="option-1"
                                          value="option-1"
                                          defaultChecked
                                        />
                                        <input
                                          type="radio"
                                          name="select"
                                          id="option-2"
                                        />
                                        <input
                                          type="radio"
                                          name="select"
                                          id="option-3"
                                        />
                                      </div>
                                      <div className="ntfmax__item-radio--group">
                                        <label
                                          htmlFor="option-1"
                                          className="option option-1"
                                        >
                                          <span className="item-input-icon">
                                            <svg
                                              width="26"
                                              height="38"
                                              viewBox="0 0 26 38"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M22.6099 12.2789C22.6099 12.438 22.6194 12.5947 22.6099 12.7537C22.4817 14.7076 22.8663 16.398 23.975 18.1762C27.3462 23.582 25.8458 30.6949 20.7961 34.6667C15.8484 38.5579 8.61214 38.2208 4.05385 33.8857C-0.646876 29.4176 -1.35673 22.281 2.43471 17.0438C2.95939 16.3197 3.17781 15.6312 3.15407 14.7622C3.10896 13.0244 3.11846 11.2842 3.14457 9.54396C3.23004 4.22358 7.59127 -0.0165701 12.9378 4.86842e-05C18.2012 0.0166674 22.5173 4.27344 22.6075 9.5487C22.6217 10.4604 22.6075 11.3696 22.6099 12.2789ZM11.2688 31.2409C11.2688 31.73 11.2593 32.1597 11.2711 32.5894C11.302 33.7765 11.8172 34.3629 12.8404 34.389C13.9135 34.4175 14.5427 33.7978 14.4857 32.5704C14.4429 31.6303 14.6875 31.1507 15.6419 30.7685C18.251 29.7215 19.8488 27.0435 19.7206 24.2682C19.59 21.424 17.7145 18.9478 15.0104 18.0575C12.3062 17.1672 9.31962 18.0385 7.54142 20.2725C4.4717 24.1281 6.25465 29.7832 11.2688 31.2409ZM20.0197 13.7366C20.0197 12.2362 20.0363 10.9376 20.0173 9.63655C19.9627 6.06826 17.2847 3.05078 13.8304 2.6448C10.1458 2.21034 6.75321 4.40402 5.9935 7.99129C5.61127 9.79324 5.74422 11.7044 5.63264 13.8079C10.5375 10.9471 15.1908 10.9684 20.0197 13.7366Z"
                                                fill="url(#paint0_linear_0_1)"
                                              ></path>
                                              <path
                                                d="M13.3603 30.334C13.0161 30.334 12.6718 30.334 12.2564 30.334C12.197 29.9518 12.1377 29.5767 12.0759 29.1849C11.3661 28.9808 10.6657 28.779 9.8799 28.5534C10.0152 27.9955 10.1221 27.5539 10.2336 27.0815C11.0029 27.2382 11.689 27.4946 12.368 27.4756C12.838 27.4637 13.301 27.072 13.7663 26.8512C13.4529 26.4595 13.2036 25.9728 12.8072 25.7021C12.2967 25.3531 11.6296 25.2415 11.0978 24.9139C9.50716 23.9334 9.59738 21.9154 11.1975 20.9563C11.7056 20.6524 12.0902 20.1443 12.5318 19.7289C12.4582 19.6197 12.387 19.5081 12.3134 19.3989C12.6837 19.3989 13.0541 19.3989 13.4767 19.3989C13.5313 19.7716 13.5811 20.1111 13.6286 20.4269C14.2696 20.612 14.8631 20.7806 15.5184 20.9705C15.3783 21.4833 15.2667 21.8893 15.148 22.3214C14.3978 22.2288 13.7093 22.0745 13.0208 22.0887C12.7003 22.0958 12.387 22.433 12.0712 22.6205C12.2682 22.922 12.3988 23.3351 12.6766 23.5013C13.2464 23.8432 13.904 24.0307 14.507 24.3228C15.4021 24.7572 15.8983 25.4884 15.884 26.4903C15.8698 27.4851 15.3285 28.1498 14.4975 28.6816C13.999 28.9997 13.6262 29.5149 13.1965 29.9399C13.2511 30.0728 13.3057 30.2034 13.3603 30.334Z"
                                                fill="url(#paint1_linear_0_1)"
                                              ></path>
                                              <defs>
                                                <linearGradient
                                                  id="paint0_linear_0_1"
                                                  x1="0"
                                                  y1="0"
                                                  x2="36.6228"
                                                  y2="24.727"
                                                  gradientUnits="userSpaceOnUse"
                                                >
                                                  <stop stopColor="#F539F8"></stop>
                                                  <stop
                                                    offset="0.416763"
                                                    stopColor="#C342F9"
                                                  ></stop>
                                                  <stop
                                                    offset="1"
                                                    stopColor="#5356FB"
                                                  ></stop>
                                                </linearGradient>
                                                <linearGradient
                                                  id="paint1_linear_0_1"
                                                  x1="9.8799"
                                                  y1="19.3989"
                                                  x2="19.514"
                                                  y2="24.5763"
                                                  gradientUnits="userSpaceOnUse"
                                                >
                                                  <stop stopColor="#F539F8"></stop>
                                                  <stop
                                                    offset="0.416763"
                                                    stopColor="#C342F9"
                                                  ></stop>
                                                  <stop
                                                    offset="1"
                                                    stopColor="#5356FB"
                                                  ></stop>
                                                </linearGradient>
                                              </defs>
                                            </svg>
                                          </span>
                                          <span className="ntfmax__item-radio-title">
                                            Fixed price
                                          </span>
                                        </label>
                                        <label
                                          htmlFor="option-2"
                                          className="option option-2"
                                        >
                                          <span className="item-input-icon">
                                            <svg
                                              width="31"
                                              height="31"
                                              viewBox="0 0 31 31"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M30.4474 27.215C29.9672 28.2468 29.3095 29.0141 28.0359 28.9897C27.3174 28.9758 26.8232 28.6035 26.3535 28.132C22.4666 24.2399 18.5745 20.3512 14.6911 16.4574C14.5032 16.2678 14.3657 16.0294 14.1222 15.7041C13.3166 16.5392 12.6363 17.2456 12.0134 17.8911C9.48889 15.4031 6.96955 12.9185 4.49023 10.4757C7.00087 7.97206 9.50455 5.47534 11.9438 3.04474C14.3971 5.49796 16.8973 7.99816 19.4758 10.5732C18.8146 11.1647 18.096 11.8085 17.3427 12.4835C17.595 12.7619 17.7463 12.9411 17.9116 13.1082C21.628 16.8524 25.3565 20.5861 29.052 24.353C29.6001 24.9115 29.9881 25.63 30.4491 26.2738C30.4474 26.5852 30.4474 26.9001 30.4474 27.215Z"
                                                fill="url(#paint0_linear_0_1)"
                                              ></path>
                                              <path
                                                d="M0 28.158C0.351454 27.2724 1.00043 26.9018 1.94692 26.987C2.36449 27.0253 2.78728 26.994 3.3336 26.994C3.19615 26.8357 3.15265 26.7643 3.09175 26.7208C2.42538 26.2389 2.234 25.5829 2.4567 24.8244C2.64635 24.1806 3.26922 23.8413 4.19831 23.8379C7.38228 23.8309 10.5662 23.8309 13.7485 23.8361C14.6723 23.8379 15.1578 24.1684 15.4048 24.9131C15.6415 25.6282 15.4187 26.1501 14.6341 26.7173C14.5697 26.7626 14.5123 26.8165 14.4792 27.0079C14.9594 27.0079 15.4396 27.0114 15.9216 27.0079C17.0142 26.9975 17.6197 27.3663 17.7867 28.1527C17.9642 28.9827 17.5692 29.5951 16.5705 30.044C11.4518 30.044 6.3314 30.044 1.21269 30.044C0.809041 29.6403 0.40365 29.2349 0 28.8313C0 28.6068 0 28.3824 0 28.158Z"
                                                fill="url(#paint1_linear_0_1)"
                                              ></path>
                                              <path
                                                d="M15.6268 -6.10352e-05C16.0183 0.320075 16.4394 0.612374 16.7978 0.967308C18.3932 2.54015 19.9713 4.1304 21.5511 5.71716C22.5741 6.74368 22.5498 7.51097 21.4728 8.50269C21.2449 8.71322 21.0065 8.9133 20.8638 9.03858C18.3028 6.48444 15.7782 3.96337 13.1719 1.364C13.7304 0.93599 14.3411 0.467965 14.9518 -6.10352e-05C15.1779 -6.10352e-05 15.4024 -6.10352e-05 15.6268 -6.10352e-05Z"
                                                fill="url(#paint2_linear_0_1)"
                                              ></path>
                                              <path
                                                d="M10.6615 19.363C10.3031 19.6988 9.94117 20.0659 9.55144 20.3982C8.96162 20.9028 8.16302 20.9115 7.60104 20.3564C5.70284 18.4826 3.8203 16.5896 1.95167 14.6845C1.43319 14.1573 1.42971 13.3639 1.89948 12.7863C2.23701 12.3704 2.62152 11.9911 2.9434 11.6414C5.50971 14.2095 8.0534 16.7549 10.6615 19.363Z"
                                                fill="url(#paint3_linear_0_1)"
                                              ></path>
                                              <defs>
                                                <linearGradient
                                                  id="paint0_linear_0_1"
                                                  x1="4.49023"
                                                  y1="3.04474"
                                                  x2="31.8937"
                                                  y2="29.8789"
                                                  gradientUnits="userSpaceOnUse"
                                                >
                                                  <stop stopColor="#F539F8"></stop>
                                                  <stop
                                                    offset="0.416763"
                                                    stopColor="#C342F9"
                                                  ></stop>
                                                  <stop
                                                    offset="1"
                                                    stopColor="#5356FB"
                                                  ></stop>
                                                </linearGradient>
                                                <linearGradient
                                                  id="paint1_linear_0_1"
                                                  x1="0"
                                                  y1="23.8324"
                                                  x2="4.14661"
                                                  y2="35.4804"
                                                  gradientUnits="userSpaceOnUse"
                                                >
                                                  <stop stopColor="#F539F8"></stop>
                                                  <stop
                                                    offset="0.416763"
                                                    stopColor="#C342F9"
                                                  ></stop>
                                                  <stop
                                                    offset="1"
                                                    stopColor="#5356FB"
                                                  ></stop>
                                                </linearGradient>
                                                <linearGradient
                                                  id="paint2_linear_0_1"
                                                  x1="13.1719"
                                                  y1="-6.10352e-05"
                                                  x2="22.7199"
                                                  y2="9.43722"
                                                  gradientUnits="userSpaceOnUse"
                                                >
                                                  <stop stopColor="#F539F8"></stop>
                                                  <stop
                                                    offset="0.416763"
                                                    stopColor="#C342F9"
                                                  ></stop>
                                                  <stop
                                                    offset="1"
                                                    stopColor="#5356FB"
                                                  ></stop>
                                                </linearGradient>
                                                <linearGradient
                                                  id="paint3_linear_0_1"
                                                  x1="1.55469"
                                                  y1="11.6414"
                                                  x2="11.2005"
                                                  y2="21.0545"
                                                  gradientUnits="userSpaceOnUse"
                                                >
                                                  <stop stopColor="#F539F8"></stop>
                                                  <stop
                                                    offset="0.416763"
                                                    stopColor="#C342F9"
                                                  ></stop>
                                                  <stop
                                                    offset="1"
                                                    stopColor="#5356FB"
                                                  ></stop>
                                                </linearGradient>
                                              </defs>
                                            </svg>
                                          </span>
                                          <span className="ntfmax__item-radio-title">
                                            Open for bids
                                          </span>
                                        </label>
                                        <label
                                          htmlFor="option-3"
                                          className="option option-3"
                                        >
                                          <span className="item-input-icon">
                                            <svg
                                              width="21"
                                              height="32"
                                              viewBox="0 0 21 32"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M18.9031 2.59374C18.9031 3.06158 18.8957 3.48721 18.905 3.91102C18.944 5.67045 18.6394 7.34916 17.7202 8.8866C17.1482 9.84245 16.4035 10.6515 15.577 11.3927C14.8918 12.0073 14.1935 12.6091 13.5175 13.2329C13.2779 13.453 13.0681 13.7099 12.8786 13.9741C12.1414 15.0107 12.1172 16.2215 12.9362 17.1939C13.5509 17.9223 14.2845 18.557 14.9976 19.1992C15.8278 19.9477 16.6542 20.6944 17.3097 21.6026C18.3646 23.0648 18.8567 24.705 18.8957 26.4864C18.9106 27.1451 18.8976 27.8055 18.8976 28.5192C19.1576 28.5192 19.3897 28.5155 19.6219 28.5192C20.4408 28.5357 21.011 29.0843 20.9998 29.8438C20.9906 30.5759 20.4018 31.1097 19.5921 31.1097C13.5193 31.1116 7.44842 31.1116 1.37563 31.1097C0.673637 31.1097 0.116499 30.6602 0.0162144 30.0218C-0.0840701 29.3943 0.289211 28.7797 0.903919 28.5889C1.06735 28.5376 1.24749 28.5302 1.4202 28.521C1.63377 28.51 1.8492 28.5192 2.10362 28.5192C2.10362 28.1284 2.11105 27.7652 2.10176 27.4019C2.07391 26.114 2.17976 24.8444 2.62362 23.6189C3.17704 22.0832 4.16688 20.854 5.36844 19.7734C6.06858 19.1441 6.78171 18.5295 7.47442 17.8911C7.70656 17.6782 7.91084 17.4306 8.09841 17.1774C8.85426 16.1592 8.89883 14.9391 8.0947 13.9594C7.51713 13.2549 6.817 12.6421 6.13543 12.0257C5.29973 11.2698 4.45474 10.5286 3.77689 9.62229C2.67747 8.1509 2.15748 6.48687 2.10919 4.6724C2.09062 3.99358 2.10548 3.31476 2.10548 2.59374C1.83805 2.59374 1.60406 2.59924 1.37006 2.5919C0.547353 2.56989 -0.0116381 2.01949 0.0032189 1.25444C0.0180759 0.537094 0.604923 0.00137599 1.39234 0.00137599C7.46513 -0.000458663 13.5361 -0.000458663 19.6089 0.00137599C20.3963 0.00137599 20.985 0.53526 20.998 1.25444C21.0128 2.01949 20.4501 2.57172 19.6311 2.5919C19.4064 2.59741 19.1799 2.59374 18.9031 2.59374ZM3.15847 28.5009C8.06498 28.5009 12.9381 28.5009 17.8464 28.5009C17.8464 27.7945 17.8669 27.1047 17.8427 26.4167C17.7814 24.5875 17.189 22.9492 15.9373 21.5787C15.4359 21.0302 14.875 20.533 14.3328 20.0174C13.6512 19.3698 12.9269 18.7607 12.2881 18.0764C11.5471 17.282 11.2072 16.3133 11.3038 15.218C11.3892 14.2511 11.8349 13.4439 12.5072 12.7742C13.1869 12.0972 13.9075 11.4569 14.6373 10.8313C16.4295 9.29572 17.6812 7.47208 17.813 5.05584C17.8557 4.2486 17.8204 3.43584 17.8204 2.61025C12.9381 2.61025 8.06498 2.61025 3.15661 2.61025C3.15661 3.30742 3.13804 3.98624 3.16033 4.66323C3.21604 6.41348 3.73975 8.00596 4.90973 9.34159C5.45387 9.9617 6.07415 10.5158 6.67029 11.09C7.36856 11.7633 8.10769 12.3981 8.77254 13.1045C9.33711 13.7044 9.63982 14.4529 9.70296 15.284C9.79768 16.5444 9.27768 17.5682 8.40855 18.4268C7.74741 19.0799 7.03799 19.6854 6.33786 20.3C5.00259 21.476 3.90131 22.7969 3.42961 24.5527C3.08604 25.8443 3.16218 27.1542 3.15847 28.5009Z"
                                                fill="url(#paint0_linear_0_1)"
                                              ></path>
                                              <path
                                                d="M3.88867 7C8.29172 7 12.6611 7 17.1109 7C16.9108 7.46528 16.7518 7.91401 16.5348 8.33331C15.9194 9.5195 14.9393 10.4004 13.9498 11.274C13.2428 11.8992 12.5376 12.5355 11.8905 13.2178C11.161 13.9866 10.785 14.9282 10.7439 15.9874C10.7364 16.164 10.7158 16.3277 10.4914 16.3332C10.2707 16.3387 10.222 16.1861 10.2164 16.004C10.1884 14.7387 9.62348 13.7033 8.73875 12.8353C8.00553 12.1162 7.21621 11.4542 6.44932 10.7682C5.41122 9.8395 4.51715 8.80779 4.04392 7.47999C3.98781 7.33287 3.94479 7.17839 3.88867 7Z"
                                                fill="url(#paint1_linear_0_1)"
                                              ></path>
                                              <path
                                                d="M3.88867 27.8941C4.00779 27.8086 4.09527 27.7357 4.19205 27.6771C6.11285 26.5415 8.03364 25.4075 9.95444 24.275C10.323 24.058 10.6431 24.0565 11.0116 24.2703C11.2331 24.3986 11.4527 24.5284 11.6724 24.6567C11.6835 24.5395 11.6593 24.416 11.7152 24.332C11.7729 24.2465 11.9032 24.161 12.0167 24.142C12.2568 24.1008 12.4113 24.2228 12.4559 24.4207C12.5025 24.6235 12.3238 24.7644 11.9404 24.8119C13.6751 25.8399 15.3799 26.8488 17.1109 27.8751C16.8112 28.0366 4.18647 28.0398 3.88867 27.8941Z"
                                                fill="url(#paint2_linear_0_1)"
                                              ></path>
                                              <path
                                                d="M10.5247 18.6667C10.7341 18.6978 10.87 18.8259 10.8884 19.0565C10.9031 19.2687 10.6937 19.4663 10.4788 19.4425C10.2474 19.4169 10.1151 19.276 10.1114 19.0418C10.1059 18.8406 10.3006 18.6631 10.5247 18.6667Z"
                                                fill="url(#paint3_linear_0_1)"
                                              ></path>
                                              <path
                                                d="M11.6664 22.9362C11.6374 23.1744 11.5141 23.3276 11.2837 23.3332C11.057 23.3387 10.9118 23.1984 10.8901 22.962C10.8701 22.7442 11.066 22.5466 11.2801 22.5559C11.5195 22.5651 11.6302 22.7146 11.6664 22.9362Z"
                                                fill="url(#paint4_linear_0_1)"
                                              ></path>
                                              <path
                                                d="M10.1118 23.6938C10.1043 23.951 9.96442 24.0833 9.73128 24.109C9.52051 24.1329 9.33213 23.9473 9.334 23.7306C9.33586 23.4899 9.46643 23.3429 9.70889 23.3337C9.95696 23.3245 10.0838 23.4715 10.1118 23.6938Z"
                                                fill="url(#paint5_linear_0_1)"
                                              ></path>
                                              <path
                                                d="M11.6662 19.8215C11.6735 20.0348 11.5037 20.2204 11.2901 20.2222C11.0472 20.2241 10.9121 20.0886 10.8902 19.8511C10.8701 19.6415 11.0545 19.4522 11.2627 19.4448C11.4708 19.4355 11.6589 19.6118 11.6662 19.8215Z"
                                                fill="url(#paint6_linear_0_1)"
                                              ></path>
                                              <path
                                                d="M10.489 21.7778C10.2734 21.7647 10.1345 21.636 10.1126 21.3973C10.0943 21.1828 10.2734 21 10.489 21C10.7339 20.9982 10.8618 21.1436 10.8873 21.3786C10.9093 21.5838 10.7247 21.7703 10.489 21.7778Z"
                                                fill="url(#paint7_linear_0_1)"
                                              ></path>
                                              <path
                                                d="M11.2856 18.6667C11.0513 18.6538 10.914 18.5245 10.8902 18.288C10.8701 18.0775 11.0513 17.8946 11.2654 17.889C11.4759 17.8835 11.6736 18.0571 11.6663 18.264C11.6571 18.5005 11.5308 18.6408 11.2856 18.6667Z"
                                                fill="url(#paint8_linear_0_1)"
                                              ></path>
                                              <path
                                                d="M10.8889 16.698C10.8963 16.9335 10.7281 17.1129 10.5076 17.1111C10.2628 17.1073 10.1151 16.9784 10.1114 16.7317C10.1077 16.4868 10.2478 16.3373 10.4908 16.3336C10.7319 16.3261 10.8683 16.4682 10.8889 16.698Z"
                                                fill="url(#paint9_linear_0_1)"
                                              ></path>
                                              <defs>
                                                <linearGradient
                                                  id="paint0_linear_0_1"
                                                  x1="0"
                                                  y1="0"
                                                  x2="30.2315"
                                                  y2="19.9721"
                                                  gradientUnits="userSpaceOnUse"
                                                >
                                                  <stop stopColor="#F539F8"></stop>
                                                  <stop
                                                    offset="0.416763"
                                                    stopColor="#C342F9"
                                                  ></stop>
                                                  <stop
                                                    offset="1"
                                                    stopColor="#5356FB"
                                                  ></stop>
                                                </linearGradient>
                                                <linearGradient
                                                  id="paint1_linear_0_1"
                                                  x1="3.88867"
                                                  y1="7"
                                                  x2="13.2446"
                                                  y2="19.9722"
                                                  gradientUnits="userSpaceOnUse"
                                                >
                                                  <stop stopColor="#F539F8"></stop>
                                                  <stop
                                                    offset="0.416763"
                                                    stopColor="#C342F9"
                                                  ></stop>
                                                  <stop
                                                    offset="1"
                                                    stopColor="#5356FB"
                                                  ></stop>
                                                </linearGradient>
                                                <linearGradient
                                                  id="paint2_linear_0_1"
                                                  x1="3.88867"
                                                  y1="24.1111"
                                                  x2="6.15335"
                                                  y2="31.6472"
                                                  gradientUnits="userSpaceOnUse"
                                                >
                                                  <stop stopColor="#F539F8"></stop>
                                                  <stop
                                                    offset="0.416763"
                                                    stopColor="#C342F9"
                                                  ></stop>
                                                  <stop
                                                    offset="1"
                                                    stopColor="#5356FB"
                                                  ></stop>
                                                </linearGradient>
                                                <linearGradient
                                                  id="paint3_linear_0_1"
                                                  x1="10.1113"
                                                  y1="18.6667"
                                                  x2="10.9328"
                                                  y2="19.4707"
                                                  gradientUnits="userSpaceOnUse"
                                                >
                                                  <stop stopColor="#F539F8"></stop>
                                                  <stop
                                                    offset="0.416763"
                                                    stopColor="#C342F9"
                                                  ></stop>
                                                  <stop
                                                    offset="1"
                                                    stopColor="#5356FB"
                                                  ></stop>
                                                </linearGradient>
                                                <linearGradient
                                                  id="paint4_linear_0_1"
                                                  x1="10.8887"
                                                  y1="22.5555"
                                                  x2="11.7101"
                                                  y2="23.3595"
                                                  gradientUnits="userSpaceOnUse"
                                                >
                                                  <stop stopColor="#F539F8"></stop>
                                                  <stop
                                                    offset="0.416763"
                                                    stopColor="#C342F9"
                                                  ></stop>
                                                  <stop
                                                    offset="1"
                                                    stopColor="#5356FB"
                                                  ></stop>
                                                </linearGradient>
                                                <linearGradient
                                                  id="paint5_linear_0_1"
                                                  x1="9.33398"
                                                  y1="23.3333"
                                                  x2="10.1555"
                                                  y2="24.1373"
                                                  gradientUnits="userSpaceOnUse"
                                                >
                                                  <stop stopColor="#F539F8"></stop>
                                                  <stop
                                                    offset="0.416763"
                                                    stopColor="#C342F9"
                                                  ></stop>
                                                  <stop
                                                    offset="1"
                                                    stopColor="#5356FB"
                                                  ></stop>
                                                </linearGradient>
                                                <linearGradient
                                                  id="paint6_linear_0_1"
                                                  x1="10.8887"
                                                  y1="19.4445"
                                                  x2="11.7101"
                                                  y2="20.2485"
                                                  gradientUnits="userSpaceOnUse"
                                                >
                                                  <stop stopColor="#F539F8"></stop>
                                                  <stop
                                                    offset="0.416763"
                                                    stopColor="#C342F9"
                                                  ></stop>
                                                  <stop
                                                    offset="1"
                                                    stopColor="#5356FB"
                                                  ></stop>
                                                </linearGradient>
                                                <linearGradient
                                                  id="paint7_linear_0_1"
                                                  x1="10.1113"
                                                  y1="21"
                                                  x2="10.9328"
                                                  y2="21.804"
                                                  gradientUnits="userSpaceOnUse"
                                                >
                                                  <stop stopColor="#F539F8"></stop>
                                                  <stop
                                                    offset="0.416763"
                                                    stopColor="#C342F9"
                                                  ></stop>
                                                  <stop
                                                    offset="1"
                                                    stopColor="#5356FB"
                                                  ></stop>
                                                </linearGradient>
                                                <linearGradient
                                                  id="paint8_linear_0_1"
                                                  x1="10.8887"
                                                  y1="17.8889"
                                                  x2="11.7101"
                                                  y2="18.6929"
                                                  gradientUnits="userSpaceOnUse"
                                                >
                                                  <stop stopColor="#F539F8"></stop>
                                                  <stop
                                                    offset="0.416763"
                                                    stopColor="#C342F9"
                                                  ></stop>
                                                  <stop
                                                    offset="1"
                                                    stopColor="#5356FB"
                                                  ></stop>
                                                </linearGradient>
                                                <linearGradient
                                                  id="paint9_linear_0_1"
                                                  x1="10.1113"
                                                  y1="16.3333"
                                                  x2="10.9328"
                                                  y2="17.1373"
                                                  gradientUnits="userSpaceOnUse"
                                                >
                                                  <stop stopColor="#F539F8"></stop>
                                                  <stop
                                                    offset="0.416763"
                                                    stopColor="#C342F9"
                                                  ></stop>
                                                  <stop
                                                    offset="1"
                                                    stopColor="#5356FB"
                                                  ></stop>
                                                </linearGradient>
                                              </defs>
                                            </svg>
                                          </span>
                                          <span className="ntfmax__item-radio-title">
                                            Timed auction
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                          

                                  <div className="nftmax__item-form--group">
                                    <label className="nftmax__item-label">
                                      Item Name
                                    </label>
                                    <input
                                      className="nftmax__item-input"
                                      type="text"
                                      name = "name"
                                      placeholder="RaidParty Fighters"
                                      onChange={(e) => handleChange(e)}
                                      // value={nft.name}
                                      required
                                    />
                                  </div>

                                  <div className="nftmax__item-form--group">
                                    <label className="nftmax__item-label">
                                      Exter link
                                    </label>
                                    <input
                                      className="nftmax__item-input"
                                      type="file"
                                      name="url"
                                     onChange={(e) => setimage(e.target.files[0])}
                                      placeholder="https:yoursite.lo/imte/item_name123"
                                      
                                      // value={nft.url}
                                      required
                                    />
                                  </div>

                                  <div className="nftmax__item-form--group">
                                    <label className="nftmax__item-label">
                                      Description
                                    </label>
                                    <textarea
                                      className="nftmax__item-input nftmax__item-textarea"
                                      type="text"
                                      name="description"
                                      placeholder="provide a detailed description of your item."
                                      // value={nft.description}
                                      onChange={(e) => handleChange(e)}
                                      required
                                    ></textarea>
                                  </div>

                                  <div className="nftmax__item-form--group">
                                    <label className="nftmax__item-label">
                                      Instant sale price
                                    </label>
                                    <input
                                      className="nftmax__item-input nftmax__item-input__arrow"
                                      type="text"
                                      name="saleprice"
                                      placeholder="enter the price for which the item will be instantly sold"
                                      onChange={(e) => handleChange(e)}
                                      // value={nft.saleprice}
                                      required
                                    />
                                    <select
                                      className="form-select nftmax__item-form--select"
                                      aria-label="Currency select"
                                      //   value={}
                                      onChange={(e) =>
                                        setCurrency(e.target.value)
                                      }
                                    >
                                      <option value="ETH">ETH</option>
                                      <option value="USD">USD</option>
                                      <option value="INR">INR</option>
                                    </select>
                                    <div className="nftmax__item-fee">
                                      <p className="nftmax__item-fee-text">
                                        Service fee : <b>1.5%</b>
                                      </p>
                                      <p className="nftmax__item-fee-text">
                                        You will Receive :{" "}
                                        <b>.29 ETH $120.56</b>
                                      </p>
                                    </div>
                                  </div>

                                  <div className="nftmax__item-form--group">
                                    <label className="nftmax__item-label">
                                      Royalties
                                    </label>
                                    <input
                                      className="nftmax__item-input"
                                      type="number"
                                      placeholder="0%"
                                      required
                                      name="discount"
                                      onChange={(e) => handleChange(e)}
                                      value={nft.discount}
                                    />
                                    <div className="nftmax__item-fee">
                                      <p className="nftmax__item-fee-text">
                                        Suggested: 10%, 20%, 30%
                                      </p>
                                    </div>
                                  </div>

                                  <div className="nftmax__item-form--group">
                                    <label className="nftmax__item-label">
                                      Properties
                                      <span className="nftmax__item-label--inline">
                                        (Optional)
                                      </span>
                                    </label>
                                    <div className="nftmax__item-form--group--line">
                                      <input
                                        className="nftmax__item-input"
                                        type="text"
                                        placeholder="Enter key"
                                        required="required"
                                      />
                                      <input
                                        className="nftmax__item-input"
                                        type="text"
                                        placeholder="Enter Value"
                                        required="required"
                                      />
                                    </div>
                                  </div>

                                  <div className="nftmax__item-form--group ntfmax__item-form--radio nftmax-choose">
                                    <div className="ntfmax__item-radio--inner">
                                      <label className="nftmax__item-label">
                                        Choose collection
                                      </label>

                                      <div className="ntfmax__item-radio--disable">
                                        <input
                                          type="radio"
                                          name="select"
                                          id="option-11"
                                        />
                                        <input
                                          type="radio"
                                          name="select"
                                          id="option-1"
                                          defaultChecked
                                        />
                                        <input
                                          type="radio"
                                          name="select"
                                          id="option-2"
                                        />
                                        <input
                                          type="radio"
                                          name="select"
                                          id="option-3"
                                        />
                                      </div>
                                      <div className="ntfmax__item-radio--group ntfmax__item-radio--collection">
                                        <label
                                          htmlFor="option-1"
                                          className="option option-11"
                                        >
                                          <div className="ntfmax__item-radio--group--icon">
                                            <i className="fa-solid fa-circle-plus"></i>
                                          </div>
                                          <span className="ntfmax__item-radio-title">
                                            Create
                                          </span>
                                        </label>
                                        <label
                                          htmlFor="option-1"
                                          className="option option-1"
                                        >
                                          <div className="ntfmax__item-radio--group--icon">
                                            <img
                                              src="img/collection-1.png"
                                              alt="#"
                                            />
                                          </div>
                                          <span className="ntfmax__item-radio-title">
                                            Name 1
                                          </span>
                                        </label>
                                        <label
                                          htmlFor="option-2"
                                          className="option option-2"
                                        >
                                          <div className="ntfmax__item-radio--group--icon">
                                            <img
                                              src="img/collection-2.png"
                                              alt="#"
                                            />
                                          </div>
                                          <span className="ntfmax__item-radio-title">
                                            Name 2
                                          </span>
                                        </label>
                                        <label
                                          htmlFor="option-3"
                                          className="option option-3"
                                        >
                                          <div className="ntfmax__item-radio--group--icon">
                                            <img
                                              src="img/collection-3.png"
                                              alt="#"
                                            />
                                          </div>
                                          <span className="ntfmax__item-radio-title">
                                            Name 3
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="nftmax__item-form--group nftmax__item-form--unlock">
                                    <div className="nftmax__item-unlock--first">
                                      <div className="nftmax__item-unlock--icon">
                                        <img src="img/lock-icon.png" alt="#" />
                                      </div>
                                      <div className="nftmax__item-unlock--title">
                                        <h4 className="nftmax__item-label--head">
                                          Unlock once purchased
                                        </h4>
                                        <p className="nftmax__item-fee-text">
                                          Unlockable content, only revealed by
                                          the owner of the item.
                                        </p>
                                      </div>
                                    </div>
                                    <div className="nftmax__item-unlock--title">
                                      <label className="nftmax__item-switch">
                                        <input type="checkbox" defaultChecked />
                                        <span className="nftmax__item-switch--slide nftmax__item-switch--round"></span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="nftmax__item-button--group">
                            <button
                              className="nftmax__item-button--single nftmax__item-button--cancel"
                              data-bs-toggle="modal"
                              data-bs-target="#cancel_modal"
                            >
                              Cancel
                            </button>
                            <button
                              className="nftmax__item-button--single nftmax-btn nftmax-btn__bordered--plus radius nftmax-item__btn"
                              data-bs-toggle="modal"
                              data-bs-target="#preview_modal"
                            >
                              <span className="ntfmax__btn-textgr">
                                Preview
                              </span>
                            </button>
                            <button
                              className="nftmax__item-button--single nftmax-btn nftmax-btn__bordered bg radius nftmax-item__btn"
                              type="submit"
                            >
                              Create Now
                            </button>
                            {/* <!-- Preview Product --> */}
                            <div
                              className="nftmax-preview__modal modal fade"
                              id="preview_modal"
                              tabIndex="-1"
                              aria-labelledby="previewModalLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog  nftmax-preview__modal-preview">
                                <div
                                  className="modal-content nftmax-preview__modal-content"
                                  style={{
                                    backgroundImage: `url(img/body-bg.jpg)`,
                                  }}
                                >
                                  <div className="modal-header nftmax__modal__header">
                                    <h4
                                      className="modal-title nftmax-preview__modal-title"
                                      id="previewModalLabel"
                                    >
                                      Item Preview
                                    </h4>
                                    <button
                                      type="button"
                                      className="nftmax-preview__modal--close btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>
                                  <div className="modal-body nftmax-modal__body">
                                    {/* <!-- Treadning Action Single --> */}
                                    <div className="trending-action__single">
                                      <div className="trending-action__head">
                                        <div className="trending-action__button">
                                          <a className="trending-action__btn heart-icon">
                                            <i className="fa-solid fa-heart"></i>
                                          </a>
                                          <a className="trending-action__btn">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                          </a>
                                        </div>
                                        <img
                                          src="img/trending-img-1.png"
                                          alt="#"
                                        />
                                      </div>
                                      {/* <!-- Treadning Body --> */}
                                      <div className="trending-action__body">
                                        <div className="trending-action__author-meta">
                                          <img
                                            src="img/author-pic.png"
                                            alt="#"
                                          />
                                          <p className="trending-action__author-name">
                                            Owned by{" "}
                                            <a href="profile.html">Bilout</a>
                                          </p>
                                        </div>
                                        <h2 className="trending-action__title">
                                          <a href="#">Interconnected Planes</a>
                                        </h2>
                                        <div className="dashboard-banner__bid dashboard-banner__bid-v2">
                                          {/* <!-- Single Bid --> */}
                                          <div className="dashboard-banner__group dashboard-banner__group-v2">
                                            <p className="dashboard-banner__group-small">
                                              Current Bid
                                            </p>
                                            <h3 className="dashboard-banner__group-title">
                                              75,320 ETH
                                            </h3>
                                          </div>

                                          <div className="dashboard-banner__group dashboard-banner__group-v2">
                                            <p className="dashboard-banner__group-small">
                                              Remaing Time
                                            </p>
                                            <h3
                                              className="dashboard-banner__group-title"
                                              id="CountDown"
                                              data-countdown="2023/09/01"
                                            ></h3>
                                          </div>
                                          {/* <!-- End Single Bid --> */}
                                        </div>
                                      </div>
                                    </div>
                                    {/* <!-- End Treadning Action Single --> */}
                                    <div className="nftmax__item-button--group">
                                      <button
                                        className="nftmax__item-button--single nftmax__item-button--cancel"
                                        data-bs-dismiss="modal"
                                      >
                                        Cancel
                                      </button>
                                      <button
                                        className="nftmax__item-button--single nftmax-btn nftmax-btn__bordered bg radius "
                                        type="submit"
                                      >
                                        Create Now
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              className="nftmax-preview__modal modal fade"
                              id="cancel_modal"
                              tabIndex="-1"
                              aria-labelledby="CancelModalLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog  nftmax-close__modal-close">
                                <div className="modal-content nftmax-preview__modal-content">
                                  <div className="modal-header nftmax__modal__header">
                                    <h4
                                      className="modal-title nftmax-preview__modal-title"
                                      id="CancelModalLabel"
                                    >
                                      Confirm
                                    </h4>
                                    <button
                                      type="button"
                                      className="nftmax-preview__modal--close btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>
                                  <div className="modal-body nftmax-modal__body modal-body nftmax-close__body">
                                    <div className="nftmax-preview__close">
                                      {/* <!-- Treadning Head --> */}
                                      <div className="nftmax-preview__close-img">
                                        <img src="img/close.png" alt="#" />
                                      </div>
                                      <h2 className="nftmax-preview__close-title">
                                        Are you sure you want to Navigate away
                                        from this page?
                                      </h2>
                                      <div className="nftmax__item-button--group">
                                        <button
                                          className="nftmax__item-button--single nftmax-btn nftmax-btn__bordered bg radius "
                                          type="submit"
                                        >
                                          Yes Delete{" "}
                                        </button>
                                        <button
                                          className="nftmax__item-button--single nftmax-btn nftmax-btn__bordered--plus radius "
                                          type="submit"
                                        >
                                          <span
                                            className="ntfmax__btn-textgr"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                          >
                                            Not now
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!-- End Preview Product --> */}
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-3 col-12 nftmax-main__sidebar">
              <div className="nftmax-sidebar mg-top-40">
                <div className="row">
                  <div className="col-xxl-12 col-xl-6 col-12 nftmax-sidebar__widget">
                    <div className="nftmax-sidebar__single">
                      <div className="nftmax-sidebar__heading">
                        <h4 className="nftmax-sidebar__title">Statistics</h4>
                        <ul
                          className="nav nav-tabs nftmax-dropdown__list"
                          id="nav-tab"
                          role="tablist"
                        >
                          <li className="nav-item dropdown">
                            <a
                              className="nftmax-sidebar_btn nftmax-heading__tabs nav-link dropdown-toggle"
                              data-bs-toggle="dropdown"
                              href="#"
                              role="button"
                              aria-expanded="false"
                            >
                              Last 7 days{" "}
                              <span className="nftmax-sidebar__arrow--icon">
                                <svg
                                  width="13"
                                  height="6"
                                  viewBox="0 0 13 6"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    opacity="0.7"
                                    d="M12.4124 0.247421C12.3327 0.169022 12.2379 0.106794 12.1335 0.0643287C12.0291 0.0218632 11.917 0 11.8039 0C11.6908 0 11.5787 0.0218632 11.4743 0.0643287C11.3699 0.106794 11.2751 0.169022 11.1954 0.247421L7.27012 4.07837C7.19045 4.15677 7.09566 4.219 6.99122 4.26146C6.88678 4.30393 6.77476 4.32579 6.66162 4.32579C6.54848 4.32579 6.43646 4.30393 6.33202 4.26146C6.22758 4.219 6.13279 4.15677 6.05312 4.07837L2.12785 0.247421C2.04818 0.169022 1.95338 0.106794 1.84895 0.0643287C1.74451 0.0218632 1.63249 0 1.51935 0C1.40621 0 1.29419 0.0218632 1.18975 0.0643287C1.08531 0.106794 0.990517 0.169022 0.910844 0.247421C0.751218 0.404141 0.661621 0.616141 0.661621 0.837119C0.661621 1.0581 0.751218 1.2701 0.910844 1.42682L4.84468 5.26613C5.32677 5.73605 5.98027 6 6.66162 6C7.34297 6 7.99647 5.73605 8.47856 5.26613L12.4124 1.42682C12.572 1.2701 12.6616 1.0581 12.6616 0.837119C12.6616 0.616141 12.572 0.404141 12.4124 0.247421Z"
                                    fill="#374557"
                                    fillOpacity="0.6"
                                  ></path>
                                </svg>
                              </span>
                            </a>
                            <ul className="dropdown-menu nftmax-sidebar_dropdown">
                              <a
                                className="list-group-item"
                                data-bs-toggle="list"
                                data-bs-target="#side__one"
                                role="tab"
                              >
                                Daily
                              </a>
                              <a
                                className="list-group-item"
                                data-bs-toggle="list"
                                data-bs-target="#side__one"
                                role="tab"
                              >
                                Weekly
                              </a>
                              <a
                                className="list-group-item"
                                data-bs-toggle="list"
                                data-bs-target="#side__one"
                                role="tab"
                              >
                                Monthly
                              </a>
                            </ul>
                          </li>
                        </ul>
                      </div>

                      <div className="tab-content" id="nav-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="side__one"
                          role="tabpanel"
                          aria-labelledby="side__one"
                        >
                          <div className="nftmax-sidebar__charts nftmax-sidebar__charts--v1">
                            <div className="nftmax-sidebar__cside-one">
                              <canvas id="myChart_Side_One"></canvas>
                              <div className="nftmax-sidebar__cicon">
                                <img src="img/charts-middle.png" alt="#" />
                              </div>
                            </div>
                            <div className="nftmax-sidebar__cstatics">
                              <h4 className="nftmax-sidebar__cstatics-title">
                                Your All Artwork Statistics
                              </h4>
                              <ul className="nftmax-sidebar__clist">
                                <li>
                                  <span className="nftmax-sidebar__ccolor nftmax-sidebar__ccolor-one"></span>
                                  Total Sold
                                </li>
                                <li>
                                  <span className="nftmax-sidebar__ccolor nftmax-sidebar__ccolor-two"></span>
                                  Total Cancel
                                </li>
                                <li>
                                  <span className="nftmax-sidebar__ccolor nftmax-sidebar__ccolor-three"></span>
                                  Total Panding
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* <!-- End Single Tab --> */}
                      </div>
                    </div>
                  </div>

                  <div className="col-xxl-12 col-xl-6 col-12 nftmax-sidebar__widget">
                    <div className="nftmax-sidebar__single">
                      <ul
                        className="nav nav-tabs nftmax-dropdown__list"
                        id="nav-tab"
                        role="tablist"
                      >
                        <li className="nav-item dropdown nftmax-multiple__adropdownn">
                          <a
                            className="nftmax-heading__amount-dropdown nav-link  dropdown-toggle"
                            data-bs-toggle="dropdown"
                            href="#"
                            role="button"
                            aria-expanded="false"
                          >
                            <div className="nftmax__amount-dropdown">
                              <img src="img/eth-icon.png" alt="#" />
                              ETH rate
                              <span className="nftmax-sidebar__arrow--icon">
                                <svg
                                  width="14"
                                  height="7"
                                  viewBox="0 0 14 7"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13.7092 0.288658C13.6163 0.197192 13.5057 0.124593 13.3839 0.0750502C13.262 0.025507 13.1313 0 12.9993 0C12.8673 0 12.7366 0.025507 12.6148 0.0750502C12.4929 0.124593 12.3824 0.197192 12.2894 0.288658L7.70992 4.7581C7.61697 4.84956 7.50638 4.92216 7.38453 4.9717C7.26269 5.02125 7.132 5.04676 7 5.04676C6.868 5.04676 6.73731 5.02125 6.61547 4.9717C6.49362 4.92216 6.38303 4.84956 6.29008 4.7581L1.7106 0.288658C1.61765 0.197192 1.50706 0.124593 1.38521 0.0750502C1.26337 0.025507 1.13268 0 1.00068 0C0.868682 0 0.737991 0.025507 0.616146 0.0750502C0.4943 0.124593 0.383712 0.197192 0.29076 0.288658C0.10453 0.471497 0 0.718831 0 0.976639C0 1.23445 0.10453 1.48178 0.29076 1.66462L4.88024 6.14382C5.44268 6.69206 6.20509 7 7 7C7.79491 7 8.55732 6.69206 9.11976 6.14382L13.7092 1.66462C13.8955 1.48178 14 1.23445 14 0.976639C14 0.718831 13.8955 0.471497 13.7092 0.288658Z"
                                    fill="#374557"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </a>
                          <ul className="dropdown-menu nftmax-sidebar_dropdown">
                            <a
                              className="list-group-item"
                              data-bs-toggle="tab"
                              data-bs-target="#side__two"
                              role="tab"
                            >
                              <div className="nftmax__amount-dropdown">
                                <img src="img/eth-icon.png" alt="#" />
                                ETH rate
                              </div>
                            </a>
                            <a
                              className="list-group-item"
                              data-bs-toggle="tab"
                              data-bs-target="#side__two"
                              role="tab"
                            >
                              <div className="nftmax__amount-dropdown">
                                <img src="img/btc-icon.png" alt="#" />
                                BTC rate
                              </div>
                            </a>
                          </ul>
                        </li>
                      </ul>

                      <div className="tab-content" id="nav-tabContent">
                        {/* <!-- Single Tab --> */}
                        <div
                          className="tab-pane fade show active"
                          id="side__two"
                          role="tabpanel"
                          aria-labelledby="side__two"
                        >
                          <div className="nftmax-amount__statics">
                            <h4 className="nftmax-amount__statics__title">
                              $7473.67 USD
                            </h4>
                            <p className="nftmax-amount__statics__text">
                              +324.75 (11.5%)
                            </p>
                          </div>

                          <div className="nftmax-sidebar__cside-one">
                            <canvas id="myChart_Side_Two"></canvas>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xxl-12 col-xl-6 col-12 nftmax-sidebar__widget">
                    <div className="nftmax-sidebar__single">
                      <div className="nftmax-sidebar__heading">
                        <h4 className="nftmax-sidebar__title">Top Creators</h4>
                        <ul
                          className="nav nav-tabs nftmax-dropdown__list"
                          id="nav-tab"
                          role="tablist"
                        >
                          <li className="nav-item dropdown">
                            <a
                              className="nftmax-sidebar_btn nftmax-heading__tabs nav-link dropdown-toggle"
                              data-bs-toggle="dropdown"
                              href="#"
                              role="button"
                              aria-expanded="false"
                            >
                              View All{" "}
                              <svg
                                width="13"
                                height="6"
                                viewBox="0 0 13 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  opacity="0.7"
                                  d="M12.4124 0.247421C12.3327 0.169022 12.2379 0.106794 12.1335 0.0643287C12.0291 0.0218632 11.917 0 11.8039 0C11.6908 0 11.5787 0.0218632 11.4743 0.0643287C11.3699 0.106794 11.2751 0.169022 11.1954 0.247421L7.27012 4.07837C7.19045 4.15677 7.09566 4.219 6.99122 4.26146C6.88678 4.30393 6.77476 4.32579 6.66162 4.32579C6.54848 4.32579 6.43646 4.30393 6.33202 4.26146C6.22758 4.219 6.13279 4.15677 6.05312 4.07837L2.12785 0.247421C2.04818 0.169022 1.95338 0.106794 1.84895 0.0643287C1.74451 0.0218632 1.63249 0 1.51935 0C1.40621 0 1.29419 0.0218632 1.18975 0.0643287C1.08531 0.106794 0.990517 0.169022 0.910844 0.247421C0.751218 0.404141 0.661621 0.616141 0.661621 0.837119C0.661621 1.0581 0.751218 1.2701 0.910844 1.42682L4.84468 5.26613C5.32677 5.73605 5.98027 6 6.66162 6C7.34297 6 7.99647 5.73605 8.47856 5.26613L12.4124 1.42682C12.572 1.2701 12.6616 1.0581 12.6616 0.837119C12.6616 0.616141 12.572 0.404141 12.4124 0.247421Z"
                                  fill="#374557"
                                  fillOpacity="0.6"
                                ></path>
                              </svg>
                            </a>
                            <ul className="dropdown-menu nftmax-sidebar_dropdown">
                              <a
                                className="list-group-item"
                                data-bs-toggle="tab"
                                data-bs-target="#daily"
                                role="tab"
                              >
                                Daily
                              </a>
                              <a
                                className="list-group-item"
                                data-bs-toggle="tab"
                                data-bs-target="#weekly"
                                role="tab"
                              >
                                Weekly
                              </a>
                              <a
                                className="list-group-item"
                                data-bs-toggle="tab"
                                data-bs-target="#daily"
                                role="tab"
                              >
                                Monthly
                              </a>
                            </ul>
                          </li>
                        </ul>
                      </div>

                      <div className="nftmax-sidebar__creators">
                        <div className="tab-content" id="nav-tabContent">
                          <div
                            className="tab-pane fade"
                            id="daily"
                            role="tabpanel"
                            aria-labelledby="nav-home-tab"
                          >
                            <ul className="nftmax-sidebar__creatorlist">
                              <li>
                                <div className="nftmax-sidebar__creator">
                                  <img src="img/creator-1.png" alt="#" />
                                  <a href="#">
                                    <b className="nftmax-sidebar__creator-name">
                                      Albert Flores
                                      <span className="nftmax-sidebar__creator-link">
                                        @broklinslam_75
                                      </span>
                                    </b>
                                  </a>
                                </div>
                                <div className="nftmax-sidebar__button">
                                  <a
                                    href="#"
                                    className="nftmax-sidebar__button-btn nftmax-request_request"
                                  >
                                    <svg
                                      width="13"
                                      height="12"
                                      viewBox="0 0 13 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M12.1351 5.4852H11.1378V4.4879C11.1378 4.2125 10.9145 3.98926 10.6391 3.98926C10.3637 3.98926 10.1405 4.2125 10.1405 4.4879V5.4852H9.14317C8.86778 5.4852 8.64453 5.70845 8.64453 5.98384C8.64453 6.25924 8.86778 6.48248 9.14317 6.48248H10.1405V7.47979C10.1405 7.75518 10.3637 7.97843 10.6391 7.97843C10.9145 7.97843 11.1378 7.75518 11.1378 7.47979V6.48248H12.1351C12.4105 6.48248 12.6337 6.25924 12.6337 5.98384C12.6337 5.70845 12.4105 5.4852 12.1351 5.4852Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        d="M5.15595 5.98378C6.80833 5.98378 8.14784 4.64426 8.14784 2.99189C8.14784 1.33951 6.80833 0 5.15595 0C3.50358 0 2.16406 1.33951 2.16406 2.99189C2.16406 4.64426 3.50358 5.98378 5.15595 5.98378Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        d="M5.1558 6.98096C2.67838 6.98372 0.670727 8.99137 0.667969 11.4688C0.667969 11.7442 0.891215 11.9674 1.16661 11.9674H9.14497C9.42037 11.9674 9.64361 11.7442 9.64361 11.4688C9.64088 8.99137 7.63323 6.98369 5.1558 6.98096Z"
                                        fill="white"
                                      ></path>
                                    </svg>
                                  </a>
                                  <a
                                    href="#"
                                    className="nftmax-sidebar__button-btn nftmax-request_close"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                      ></path>
                                    </svg>
                                  </a>
                                </div>
                              </li>
                              <li>
                                <div className="nftmax-sidebar__creator">
                                  <img src="img/creator-2.png" alt="#" />
                                  <a href="#">
                                    <b className="nftmax-sidebar__creator-name">
                                      Jenny Wilson
                                      <span className="nftmax-sidebar__creator-link">
                                        @broklinslam_75
                                      </span>
                                    </b>
                                  </a>
                                </div>
                                <div className="nftmax-sidebar__button">
                                  <a
                                    href="#"
                                    className="nftmax-sidebar__button-btn nftmax-request_request"
                                  >
                                    <svg
                                      width="13"
                                      height="12"
                                      viewBox="0 0 13 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M12.1351 5.4852H11.1378V4.4879C11.1378 4.2125 10.9145 3.98926 10.6391 3.98926C10.3637 3.98926 10.1405 4.2125 10.1405 4.4879V5.4852H9.14317C8.86778 5.4852 8.64453 5.70845 8.64453 5.98384C8.64453 6.25924 8.86778 6.48248 9.14317 6.48248H10.1405V7.47979C10.1405 7.75518 10.3637 7.97843 10.6391 7.97843C10.9145 7.97843 11.1378 7.75518 11.1378 7.47979V6.48248H12.1351C12.4105 6.48248 12.6337 6.25924 12.6337 5.98384C12.6337 5.70845 12.4105 5.4852 12.1351 5.4852Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        d="M5.15595 5.98378C6.80833 5.98378 8.14784 4.64426 8.14784 2.99189C8.14784 1.33951 6.80833 0 5.15595 0C3.50358 0 2.16406 1.33951 2.16406 2.99189C2.16406 4.64426 3.50358 5.98378 5.15595 5.98378Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        d="M5.1558 6.98096C2.67838 6.98372 0.670727 8.99137 0.667969 11.4688C0.667969 11.7442 0.891215 11.9674 1.16661 11.9674H9.14497C9.42037 11.9674 9.64361 11.7442 9.64361 11.4688C9.64088 8.99137 7.63323 6.98369 5.1558 6.98096Z"
                                        fill="white"
                                      ></path>
                                    </svg>
                                  </a>
                                  <a
                                    href="#"
                                    className="nftmax-sidebar__button-btn nftmax-request_close"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                      ></path>
                                    </svg>
                                  </a>
                                </div>
                              </li>
                              <li>
                                <div className="nftmax-sidebar__creator">
                                  <img src="img/creator-3.png" alt="#" />
                                  <a href="#">
                                    <b className="nftmax-sidebar__creator-name">
                                      Robert Fox
                                      <span className="nftmax-sidebar__creator-link">
                                        @broklinslam_75
                                      </span>
                                    </b>
                                  </a>
                                </div>
                                <div className="nftmax-sidebar__button">
                                  <a
                                    href="#"
                                    className="nftmax-sidebar__button-btn nftmax-request_request"
                                  >
                                    <svg
                                      width="13"
                                      height="12"
                                      viewBox="0 0 13 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M12.1351 5.4852H11.1378V4.4879C11.1378 4.2125 10.9145 3.98926 10.6391 3.98926C10.3637 3.98926 10.1405 4.2125 10.1405 4.4879V5.4852H9.14317C8.86778 5.4852 8.64453 5.70845 8.64453 5.98384C8.64453 6.25924 8.86778 6.48248 9.14317 6.48248H10.1405V7.47979C10.1405 7.75518 10.3637 7.97843 10.6391 7.97843C10.9145 7.97843 11.1378 7.75518 11.1378 7.47979V6.48248H12.1351C12.4105 6.48248 12.6337 6.25924 12.6337 5.98384C12.6337 5.70845 12.4105 5.4852 12.1351 5.4852Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        d="M5.15595 5.98378C6.80833 5.98378 8.14784 4.64426 8.14784 2.99189C8.14784 1.33951 6.80833 0 5.15595 0C3.50358 0 2.16406 1.33951 2.16406 2.99189C2.16406 4.64426 3.50358 5.98378 5.15595 5.98378Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        d="M5.1558 6.98096C2.67838 6.98372 0.670727 8.99137 0.667969 11.4688C0.667969 11.7442 0.891215 11.9674 1.16661 11.9674H9.14497C9.42037 11.9674 9.64361 11.7442 9.64361 11.4688C9.64088 8.99137 7.63323 6.98369 5.1558 6.98096Z"
                                        fill="white"
                                      ></path>
                                    </svg>
                                  </a>
                                  <a
                                    href="#"
                                    className="nftmax-sidebar__button-btn nftmax-request_close"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                      ></path>
                                    </svg>
                                  </a>
                                </div>
                              </li>
                              <li>
                                <div className="nftmax-sidebar__creator">
                                  <img src="img/creator-4.png" alt="#" />
                                  <a href="#">
                                    <b className="nftmax-sidebar__creator-name">
                                      Jacob Jones
                                      <span className="nftmax-sidebar__creator-link">
                                        @broklinslam_75
                                      </span>
                                    </b>
                                  </a>
                                </div>
                                <div className="nftmax-sidebar__button">
                                  <a
                                    href="#"
                                    className="nftmax-sidebar__button-btn nftmax-request_request"
                                  >
                                    <svg
                                      width="13"
                                      height="12"
                                      viewBox="0 0 13 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M12.1351 5.4852H11.1378V4.4879C11.1378 4.2125 10.9145 3.98926 10.6391 3.98926C10.3637 3.98926 10.1405 4.2125 10.1405 4.4879V5.4852H9.14317C8.86778 5.4852 8.64453 5.70845 8.64453 5.98384C8.64453 6.25924 8.86778 6.48248 9.14317 6.48248H10.1405V7.47979C10.1405 7.75518 10.3637 7.97843 10.6391 7.97843C10.9145 7.97843 11.1378 7.75518 11.1378 7.47979V6.48248H12.1351C12.4105 6.48248 12.6337 6.25924 12.6337 5.98384C12.6337 5.70845 12.4105 5.4852 12.1351 5.4852Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        d="M5.15595 5.98378C6.80833 5.98378 8.14784 4.64426 8.14784 2.99189C8.14784 1.33951 6.80833 0 5.15595 0C3.50358 0 2.16406 1.33951 2.16406 2.99189C2.16406 4.64426 3.50358 5.98378 5.15595 5.98378Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        d="M5.1558 6.98096C2.67838 6.98372 0.670727 8.99137 0.667969 11.4688C0.667969 11.7442 0.891215 11.9674 1.16661 11.9674H9.14497C9.42037 11.9674 9.64361 11.7442 9.64361 11.4688C9.64088 8.99137 7.63323 6.98369 5.1558 6.98096Z"
                                        fill="white"
                                      ></path>
                                    </svg>
                                  </a>
                                  <a
                                    href="#"
                                    className="nftmax-sidebar__button-btn nftmax-request_close"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                      ></path>
                                    </svg>
                                  </a>
                                </div>
                              </li>
                              <li>
                                <div className="nftmax-sidebar__creator">
                                  <img src="img/creator-5.png" alt="#" />
                                  <a href="#">
                                    <b className="nftmax-sidebar__creator-name">
                                      Cody Fisher
                                      <span className="nftmax-sidebar__creator-link">
                                        @broklinslam_75
                                      </span>
                                    </b>
                                  </a>
                                </div>
                                <div className="nftmax-sidebar__button">
                                  <a
                                    href="#"
                                    className="nftmax-sidebar__button-btn nftmax-request_request"
                                  >
                                    <svg
                                      width="13"
                                      height="12"
                                      viewBox="0 0 13 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M12.1351 5.4852H11.1378V4.4879C11.1378 4.2125 10.9145 3.98926 10.6391 3.98926C10.3637 3.98926 10.1405 4.2125 10.1405 4.4879V5.4852H9.14317C8.86778 5.4852 8.64453 5.70845 8.64453 5.98384C8.64453 6.25924 8.86778 6.48248 9.14317 6.48248H10.1405V7.47979C10.1405 7.75518 10.3637 7.97843 10.6391 7.97843C10.9145 7.97843 11.1378 7.75518 11.1378 7.47979V6.48248H12.1351C12.4105 6.48248 12.6337 6.25924 12.6337 5.98384C12.6337 5.70845 12.4105 5.4852 12.1351 5.4852Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        d="M5.15595 5.98378C6.80833 5.98378 8.14784 4.64426 8.14784 2.99189C8.14784 1.33951 6.80833 0 5.15595 0C3.50358 0 2.16406 1.33951 2.16406 2.99189C2.16406 4.64426 3.50358 5.98378 5.15595 5.98378Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        d="M5.1558 6.98096C2.67838 6.98372 0.670727 8.99137 0.667969 11.4688C0.667969 11.7442 0.891215 11.9674 1.16661 11.9674H9.14497C9.42037 11.9674 9.64361 11.7442 9.64361 11.4688C9.64088 8.99137 7.63323 6.98369 5.1558 6.98096Z"
                                        fill="white"
                                      ></path>
                                    </svg>
                                  </a>
                                  <a
                                    href="#"
                                    className="nftmax-sidebar__button-btn nftmax-request_close"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                      ></path>
                                    </svg>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>

                          <div
                            className="tab-pane fade show active"
                            id="weekly"
                            role="tabpanel"
                            aria-labelledby="nav-profile-tab"
                          >
                            <ul className="nftmax-sidebar__creatorlist">
                              <li>
                                <div className="nftmax-sidebar__creator">
                                  <img src="img/creator-1.png" alt="#" />
                                  <a href="#">
                                    <b className="nftmax-sidebar__creator-name">
                                      Albert Flores
                                      <span className="nftmax-sidebar__creator-link">
                                        @broklinslam_75
                                      </span>
                                    </b>
                                  </a>
                                </div>
                                <div className="nftmax-sidebar__button">
                                  <a
                                    href="#"
                                    className="nftmax-sidebar__button-btn nftmax-request_request"
                                  >
                                    <svg
                                      width="13"
                                      height="12"
                                      viewBox="0 0 13 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M12.1351 5.4852H11.1378V4.4879C11.1378 4.2125 10.9145 3.98926 10.6391 3.98926C10.3637 3.98926 10.1405 4.2125 10.1405 4.4879V5.4852H9.14317C8.86778 5.4852 8.64453 5.70845 8.64453 5.98384C8.64453 6.25924 8.86778 6.48248 9.14317 6.48248H10.1405V7.47979C10.1405 7.75518 10.3637 7.97843 10.6391 7.97843C10.9145 7.97843 11.1378 7.75518 11.1378 7.47979V6.48248H12.1351C12.4105 6.48248 12.6337 6.25924 12.6337 5.98384C12.6337 5.70845 12.4105 5.4852 12.1351 5.4852Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        d="M5.15595 5.98378C6.80833 5.98378 8.14784 4.64426 8.14784 2.99189C8.14784 1.33951 6.80833 0 5.15595 0C3.50358 0 2.16406 1.33951 2.16406 2.99189C2.16406 4.64426 3.50358 5.98378 5.15595 5.98378Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        d="M5.1558 6.98096C2.67838 6.98372 0.670727 8.99137 0.667969 11.4688C0.667969 11.7442 0.891215 11.9674 1.16661 11.9674H9.14497C9.42037 11.9674 9.64361 11.7442 9.64361 11.4688C9.64088 8.99137 7.63323 6.98369 5.1558 6.98096Z"
                                        fill="white"
                                      ></path>
                                    </svg>
                                  </a>
                                  <a
                                    href="#"
                                    className="nftmax-sidebar__button-btn nftmax-request_close"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                      ></path>
                                    </svg>
                                  </a>
                                </div>
                              </li>
                              <li>
                                <div className="nftmax-sidebar__creator">
                                  <img src="img/creator-2.png" alt="#" />
                                  <a href="#">
                                    <b className="nftmax-sidebar__creator-name">
                                      Jenny Wilson
                                      <span className="nftmax-sidebar__creator-link">
                                        @broklinslam_75
                                      </span>
                                    </b>
                                  </a>
                                </div>
                                <div className="nftmax-sidebar__button">
                                  <a
                                    href="#"
                                    className="nftmax-sidebar__button-btn nftmax-request_request"
                                  >
                                    <svg
                                      width="13"
                                      height="12"
                                      viewBox="0 0 13 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M12.1351 5.4852H11.1378V4.4879C11.1378 4.2125 10.9145 3.98926 10.6391 3.98926C10.3637 3.98926 10.1405 4.2125 10.1405 4.4879V5.4852H9.14317C8.86778 5.4852 8.64453 5.70845 8.64453 5.98384C8.64453 6.25924 8.86778 6.48248 9.14317 6.48248H10.1405V7.47979C10.1405 7.75518 10.3637 7.97843 10.6391 7.97843C10.9145 7.97843 11.1378 7.75518 11.1378 7.47979V6.48248H12.1351C12.4105 6.48248 12.6337 6.25924 12.6337 5.98384C12.6337 5.70845 12.4105 5.4852 12.1351 5.4852Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        d="M5.15595 5.98378C6.80833 5.98378 8.14784 4.64426 8.14784 2.99189C8.14784 1.33951 6.80833 0 5.15595 0C3.50358 0 2.16406 1.33951 2.16406 2.99189C2.16406 4.64426 3.50358 5.98378 5.15595 5.98378Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        d="M5.1558 6.98096C2.67838 6.98372 0.670727 8.99137 0.667969 11.4688C0.667969 11.7442 0.891215 11.9674 1.16661 11.9674H9.14497C9.42037 11.9674 9.64361 11.7442 9.64361 11.4688C9.64088 8.99137 7.63323 6.98369 5.1558 6.98096Z"
                                        fill="white"
                                      ></path>
                                    </svg>
                                  </a>
                                  <a
                                    href="#"
                                    className="nftmax-sidebar__button-btn nftmax-request_close"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                      ></path>
                                    </svg>
                                  </a>
                                </div>
                              </li>
                              <li>
                                <div className="nftmax-sidebar__creator">
                                  <img src="img/creator-3.png" alt="#" />
                                  <a href="#">
                                    <b className="nftmax-sidebar__creator-name">
                                      Robert Fox
                                      <span className="nftmax-sidebar__creator-link">
                                        @broklinslam_75
                                      </span>
                                    </b>
                                  </a>
                                </div>
                                <div className="nftmax-sidebar__button">
                                  <a
                                    href="#"
                                    className="nftmax-sidebar__button-btn nftmax-request_request"
                                  >
                                    <svg
                                      width="13"
                                      height="12"
                                      viewBox="0 0 13 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M12.1351 5.4852H11.1378V4.4879C11.1378 4.2125 10.9145 3.98926 10.6391 3.98926C10.3637 3.98926 10.1405 4.2125 10.1405 4.4879V5.4852H9.14317C8.86778 5.4852 8.64453 5.70845 8.64453 5.98384C8.64453 6.25924 8.86778 6.48248 9.14317 6.48248H10.1405V7.47979C10.1405 7.75518 10.3637 7.97843 10.6391 7.97843C10.9145 7.97843 11.1378 7.75518 11.1378 7.47979V6.48248H12.1351C12.4105 6.48248 12.6337 6.25924 12.6337 5.98384C12.6337 5.70845 12.4105 5.4852 12.1351 5.4852Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        d="M5.15595 5.98378C6.80833 5.98378 8.14784 4.64426 8.14784 2.99189C8.14784 1.33951 6.80833 0 5.15595 0C3.50358 0 2.16406 1.33951 2.16406 2.99189C2.16406 4.64426 3.50358 5.98378 5.15595 5.98378Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        d="M5.1558 6.98096C2.67838 6.98372 0.670727 8.99137 0.667969 11.4688C0.667969 11.7442 0.891215 11.9674 1.16661 11.9674H9.14497C9.42037 11.9674 9.64361 11.7442 9.64361 11.4688C9.64088 8.99137 7.63323 6.98369 5.1558 6.98096Z"
                                        fill="white"
                                      ></path>
                                    </svg>
                                  </a>
                                  <a
                                    href="#"
                                    className="nftmax-sidebar__button-btn nftmax-request_close"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                      ></path>
                                    </svg>
                                  </a>
                                </div>
                              </li>
                              <li>
                                <div className="nftmax-sidebar__creator">
                                  <img src="img/creator-4.png" alt="#" />
                                  <a href="#">
                                    <b className="nftmax-sidebar__creator-name">
                                      Jacob Jones
                                      <span className="nftmax-sidebar__creator-link">
                                        @broklinslam_75
                                      </span>
                                    </b>
                                  </a>
                                </div>
                                <div className="nftmax-sidebar__button">
                                  <a
                                    href="#"
                                    className="nftmax-sidebar__button-btn nftmax-request_request"
                                  >
                                    <svg
                                      width="13"
                                      height="12"
                                      viewBox="0 0 13 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M12.1351 5.4852H11.1378V4.4879C11.1378 4.2125 10.9145 3.98926 10.6391 3.98926C10.3637 3.98926 10.1405 4.2125 10.1405 4.4879V5.4852H9.14317C8.86778 5.4852 8.64453 5.70845 8.64453 5.98384C8.64453 6.25924 8.86778 6.48248 9.14317 6.48248H10.1405V7.47979C10.1405 7.75518 10.3637 7.97843 10.6391 7.97843C10.9145 7.97843 11.1378 7.75518 11.1378 7.47979V6.48248H12.1351C12.4105 6.48248 12.6337 6.25924 12.6337 5.98384C12.6337 5.70845 12.4105 5.4852 12.1351 5.4852Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        d="M5.15595 5.98378C6.80833 5.98378 8.14784 4.64426 8.14784 2.99189C8.14784 1.33951 6.80833 0 5.15595 0C3.50358 0 2.16406 1.33951 2.16406 2.99189C2.16406 4.64426 3.50358 5.98378 5.15595 5.98378Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        d="M5.1558 6.98096C2.67838 6.98372 0.670727 8.99137 0.667969 11.4688C0.667969 11.7442 0.891215 11.9674 1.16661 11.9674H9.14497C9.42037 11.9674 9.64361 11.7442 9.64361 11.4688C9.64088 8.99137 7.63323 6.98369 5.1558 6.98096Z"
                                        fill="white"
                                      ></path>
                                    </svg>
                                  </a>
                                  <a
                                    href="#"
                                    className="nftmax-sidebar__button-btn nftmax-request_close"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                      ></path>
                                    </svg>
                                  </a>
                                </div>
                              </li>
                              <li>
                                <div className="nftmax-sidebar__creator">
                                  <img src="img/creator-5.png" alt="#" />
                                  <a href="#">
                                    <b className="nftmax-sidebar__creator-name">
                                      Cody Fisher
                                      <span className="nftmax-sidebar__creator-link">
                                        @broklinslam_75
                                      </span>
                                    </b>
                                  </a>
                                </div>
                                <div className="nftmax-sidebar__button">
                                  <a
                                    href="#"
                                    className="nftmax-sidebar__button-btn nftmax-request_request"
                                  >
                                    <svg
                                      width="13"
                                      height="12"
                                      viewBox="0 0 13 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M12.1351 5.4852H11.1378V4.4879C11.1378 4.2125 10.9145 3.98926 10.6391 3.98926C10.3637 3.98926 10.1405 4.2125 10.1405 4.4879V5.4852H9.14317C8.86778 5.4852 8.64453 5.70845 8.64453 5.98384C8.64453 6.25924 8.86778 6.48248 9.14317 6.48248H10.1405V7.47979C10.1405 7.75518 10.3637 7.97843 10.6391 7.97843C10.9145 7.97843 11.1378 7.75518 11.1378 7.47979V6.48248H12.1351C12.4105 6.48248 12.6337 6.25924 12.6337 5.98384C12.6337 5.70845 12.4105 5.4852 12.1351 5.4852Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        d="M5.15595 5.98378C6.80833 5.98378 8.14784 4.64426 8.14784 2.99189C8.14784 1.33951 6.80833 0 5.15595 0C3.50358 0 2.16406 1.33951 2.16406 2.99189C2.16406 4.64426 3.50358 5.98378 5.15595 5.98378Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        d="M5.1558 6.98096C2.67838 6.98372 0.670727 8.99137 0.667969 11.4688C0.667969 11.7442 0.891215 11.9674 1.16661 11.9674H9.14497C9.42037 11.9674 9.64361 11.7442 9.64361 11.4688C9.64088 8.99137 7.63323 6.98369 5.1558 6.98096Z"
                                        fill="white"
                                      ></path>
                                    </svg>
                                  </a>
                                  <a
                                    href="#"
                                    className="nftmax-sidebar__button-btn nftmax-request_close"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                      ></path>
                                    </svg>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xxl-12 col-xl-6 col-12 nftmax-sidebar__widget">
                    <div className="nftmax-sidebar__single">
                      <div className="nftmax-sidebar__heading">
                        <h4 className="nftmax-sidebar__title">Top Flatform</h4>
                        <a href="#" className="nftmax-sidebar_btn">
                          View All
                        </a>
                      </div>

                      <div className="nftmax-sidebar__platform">
                        <ul className="nftmax-sidebar__list">
                          <li>
                            <a href="#">
                              <img src="img/platform-1.png" alt="#" />
                              OpenSea
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src="img/platform-2.png" alt="#" />
                              Rarible
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src="img/platform-3.png" alt="#" />
                              Myth Market
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src="img/platform-4.png" alt="#" />
                              KnownOrigin
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Upload;
