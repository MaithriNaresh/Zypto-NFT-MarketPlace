import React, { useEffect, useState } from "react";
import axios from "axios";
import HeaderComponet from "./Componets/HeaderComponet";
import SideComponent from "./Componets/SideComponent";
import { useNavigate } from "react-router-dom";
import FooterComponent from "./Componets/FooterComponent"
const Product = () => {
  const navigate = useNavigate();
  const [nft, setnft] = useState([]);
  const [biddingnft, setbiddingnfts] = useState([]);
  const id = localStorage.getItem("id");

  const fetchnft = async (id) => {
    const response = await axios.get(`http://localhost:5656/getnftbyid/${id}`);
    setnft(response.data);
    console.log(response.data);

  };




  useEffect(() => {
    fetchnft(id);
    
  }, [id]);
  return (
    <>
      <div className="container-fluid fixed-sidebar">
        <SideComponent></SideComponent>
        <div className="wrapper pb-4">
          <HeaderComponet title="My NFTs"></HeaderComponet>

          <div className="card-bs card-border redius table-scroll">
            <div className="table-responsive">
              <table className="table table-dark table-hover mb-0">
                <thead>
                  <tr className="table-active mb-0">
                    <th scope="col" className="text-uppercase mb-0">
                      Item
                    </th>
                    <th scope="col" className="text-uppercase mb-0">
                      Status
                    </th>
                    <th scope="col" className="text-uppercase mb-0">
                      Collections
                    </th>
                    <th scope="col" className="text-uppercase mb-0">
                      Categories
                    </th>
                    <th scope="col" className="text-uppercase mb-0">
                      Chain
                    </th>
                    <th scope="col" className="text-uppercase mb-0">
                      Unit Price
                    </th>
                    <th scope="col" className="text-uppercase mb-0">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                
                  {nft && nft.length > 0 ?
                   ( nft
                    //  .filter((e) => e.userData?.istrader === true && e.status === "accept")
                     
                    .map((e) => {  
                      // if (e.status !== "accept") return null;
                      //  console.log(e.userData?.istrader === true);                    
                      return (
                        <tr key={e._id}
                          className="align-middle"
                          data-bs-toggle="modal"
                          data-bs-target="#NFTsPreview"
                        >
                          <td>
                            <div className="d-flex align-items-center gap-3">
                              <img
                                className="redius card-border"
                                alt=""
                                src={e.image}
                                width="80"
                                height="80"
                              />

                              <div className="d-grid">
                                {/* <!-- item name --> */}
                                <div className="heading-6 fw-bold grayscale-200 link-secondary mb-3">
                                  {e.name}
                                </div>

                                {/* <!-- item data --> */}
                                <div className="d-flex align-items-center gap-3 mb-2">
                                  {/* <!--- number of copy --> */}
                                  <span className="d-inline-flex gap-2 text-bg-bs card-border redius px-2 py-1">
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
                                    <span className="meta text-xs grayscale-100 mb-0">
                                      600,000
                                    </span>
                                  </span>

                                  {/* <!--- on chain --> */}
                                  <span
                                    className="d-flex align-items-center gap-1"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="The metadata for this collection is stored entirely on-chain and cannot be modified."
                                  >
                                    <svg
                                      width="16"
                                      height="16"
                                      fill="none"
                                      stroke="#857f94"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      viewBox="0 0 24 24"
                                      color="#857f94"
                                    >
                                      <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                      ></path>
                                      <rect
                                        width="14"
                                        height="10"
                                        x="5"
                                        y="11"
                                        rx="2"
                                      ></rect>
                                      <circle cx="12" cy="16" r="1"></circle>
                                      <path d="M8 11V7a4 4 0 018 0v4"></path>
                                    </svg>
                                    <span className="p link-secondary grayscale-300 mb-0">
                                      On Chain
                                    </span>
                                  </span>

                                  <span className="vr"></span>

                                  {/* <!--- star collection --> */}
                                  <span
                                    className="d-flex align-items-center gap-2 mb-1"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="Star collection to add it to your watchlist."
                                  >
                                    <svg
                                      className="favme active"
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth="0"
                                    >
                                      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                         
                           <td>
          <div className="d-flex flex-column gap-2">
            <button 
              className={`${e.auctionStatus === "started" ? "btn btn-primary btn-sm" :e.auctionStatus === "in-process" ? "btn btn-warning btn-sm": e.auctionStatus === "reject" ? "btn btn-danger" : "btn btn-secondary btn-sm"}`}
            

              onClick ={()=>{
                 if (e.auctionStatus == "not_started") {
      navigate(`/auctionform/${e._id}`);
    }
              }}
              //  disabled={e.auctionStatus !== "not_started"}
            >
              {e.auctionStatus === "not_started" && "StartAuction"}
               {e.auctionStatus === "in-process" && "In Process"}
                {e.auctionStatus === "started" && "Auction Started"}
                 {e.auctionStatus === "reject" && "Rejected"}
            </button>
           
          </div>
        </td>
                          {/* <!-- collections --> */}
                          <td>
                            <a
                              className="flex"
                              data-bs-toggle="popover"
                              data-bs-trigger="hover"
                              data-bs-custom-classname="custom-popover"
                              data-bs-content="Azuki Elementals"
                              href="collections.html"
                            >
                              <img
                                className="circle card-border"
                                alt=""
                                src= {e.collectionData[0].image}
                                width="42"
                                height="42"
                              />
                               {/* {e.collectionData[0].name} */}
                            </a>
                            <div className="heading-6 fw-bold grayscale-200 link-secondary mb-3">
                              {/* {e.col} */}
                            </div>
                          </td>
                          {/* <!-- categories --> */}
                          <td>
                            <a
                              className="d-inline-flex gap-2 text-bg-bs card-border redius px-2 py-1"
                              href="#"
                            >
                              <span className="meta text-xs text-link grayscale-100 mb-0">
                                PFPs
                              </span>
                            </a>
                          </td>
                          {/* <!-- chain --> */}
                          <td>
                            <span className="encrypted meta text-xs grayscale-100 mb-0">
                              ERC-721
                            </span>
                          </td>
                          {/* <!-- price --> */}
                          <td>
                            <span className="encrypted meta text-xs grayscale-100 mb-0">
                             {e.saleprice}
                            </span>
                          </td>
                          {/* <!-- action --> */}
                          <td>
                            <div className="d-inline-flex align-items-center h6 grayscale-400 gap-3 mb-0">
                              <div
                                className="flex"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="View on Etherscan"
                              >
                                <a className="link-secondary fw-bold" href="#">
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      d="M4.16497 9.51121C4.16497 9.04961 4.54417 8.67041 5.00497 8.67041H6.42177C6.88337 8.67041 7.27857 9.04961 7.27857 9.52801V14.8712C7.44337 14.8216 7.64097 14.772 7.87217 14.7224C8.18497 14.64 8.41617 14.36 8.41617 14.0296V7.40001C8.41617 6.93841 8.79537 6.54241 9.27297 6.54241H10.6898C11.1514 6.54241 11.5466 6.92161 11.5466 7.40001V13.552C11.5466 13.552 11.893 13.4032 12.2386 13.2552C12.5026 13.14 12.6674 12.8928 12.6674 12.5952V5.25681C12.6674 4.79521 13.0466 4.39921 13.5082 4.39921H14.925C15.3866 4.39921 15.7658 4.77841 15.7658 5.25681V11.3096C16.985 10.4192 18.2378 9.34721 19.2266 8.06081C19.5234 7.68161 19.6058 7.18641 19.441 6.72481C17.6282 1.51361 11.9274 -1.25759 6.72017 0.556808C1.51297 2.37121 -1.25503 8.07681 0.55697 13.2888C0.754571 13.8824 1.01857 14.4432 1.33137 14.9872C1.57857 15.416 2.04017 15.6632 2.53457 15.6136C2.79857 15.5968 3.12817 15.564 3.53937 15.5144C3.90177 15.4816 4.16577 15.168 4.16577 14.8048L4.16497 9.51121Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M4.13135 18.0875C8.59695 21.3363 14.8425 20.3467 18.0881 15.8779C19.3241 14.1627 19.9993 12.1011 19.9993 9.99065C19.9993 9.75945 19.9825 9.52905 19.9665 9.29785C16.3257 14.7563 9.58575 17.3123 4.13135 18.0875Z"
                                      fill="currentColor"
                                      fillOpacity="0.3"
                                    />
                                  </svg>
                                </a>
                              </div>
                              <div className="flex">
                                <button
                                  className="btn btn-dark btn-editor-sm meta text-xs grayscale-500 text-link mb-0 py-2"
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#buyCrypto"
                                >
                                  Manage
                                </button>
                              </div>
                            </div>
                          </td>


                        </tr>
                      );
                    })):( <tr>
    <td colSpan="8" className="text-center py-3">
      <h5 className="text-danger">No NFTs found</h5>
    </td>
  </tr>)}

                    


                    
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <FooterComponent/>      </div>
    </>
  );
};

export default Product;
