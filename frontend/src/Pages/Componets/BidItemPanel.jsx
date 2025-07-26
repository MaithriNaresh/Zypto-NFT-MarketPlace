import {useState , useEffect} from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const BidItemPanel = () => {
      const navigate = useNavigate();
      const [biddingnft, setbiddingnfts] = useState([]);
      const [selectedNftId, setSelectedNftId] = useState(null);
      const userid = localStorage.getItem("id");

        const fetchbiddingnfts = async () =>{
          const response = await axios.get(`http://localhost:5656/getbiddingnfts/${userid}`);
          setbiddingnfts(response.data);
          console.log(response.data)
        }

        

         useEffect(() => {
            fetchbiddingnfts(userid)
             }, [userid]);
  return (

   <div
                    className="tab-pane fade show active"
                    id="items-tab-pane"
                    role="tabpanel"
                    aria-labelledby="items-tab"
                    tabIndex="-1"
                  >
                    <div className="row g-3">
                      <div className="col-md-3 mb-3 mb-sm-0">
                        <div className="card-border redius card-bs-tabs p-2 mb-3">
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="d-flex align-items-center gap-2 text-sm fw-bold mb-2">
                              <svg
                                className="infinite-rotate"
                                width="18"
                                height="18"
                                viewBox="0 0 100 100"
                                fill="none"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M57.6809 5.00098C56.9465 5.02478 56.2419 5.29723 55.6826 5.77371C55.1233 6.25019 54.7423 6.90247 54.602 7.62374C54.52 8.04179 54.5212 8.47191 54.6054 8.88951C54.6897 9.30712 54.8554 9.70404 55.093 10.0576C55.3307 10.4112 55.6357 10.7144 55.9906 10.9501C56.3455 11.1858 56.7433 11.3492 57.1614 11.4311C64.7267 12.928 71.6765 16.6336 77.1297 22.0868C89.548 34.5051 92.1151 53.6454 83.4078 68.897C83.1956 69.2663 83.0583 69.6739 83.0037 70.0964C82.949 70.5188 82.9781 70.9479 83.0893 71.3591C83.2005 71.7703 83.3916 72.1556 83.6517 72.4929C83.9118 72.8303 84.2358 73.1131 84.6052 73.3252C84.9745 73.5374 85.3821 73.6747 85.8045 73.7294C86.227 73.784 86.6561 73.7549 87.0673 73.6437C87.4785 73.5325 87.8637 73.3414 88.2011 73.0814C88.5384 72.8213 88.8213 72.4973 89.0334 72.1279C99.1754 54.3634 96.1681 31.9519 81.7037 17.4875C75.3421 11.1259 67.235 6.81052 58.4095 5.06431C58.1698 5.01586 57.9253 4.99451 57.6809 5.00098ZM38.7832 5.54584C38.5952 5.55914 38.4086 5.58882 38.2257 5.63452C30.3818 7.66468 23.2201 11.7582 17.4909 17.4875C11.7632 23.2152 7.66863 30.3809 5.63789 38.2223C5.42197 39.054 5.54485 39.9373 5.97956 40.6785C6.41426 41.4196 7.12528 41.958 7.95654 42.1755C8.78905 42.3912 9.67316 42.2674 10.4145 41.8314C11.1558 41.3954 11.6936 40.6829 11.9096 39.8505C13.6504 33.1289 17.1741 26.9965 22.0838 22.0868C26.9949 17.1758 33.1302 13.6719 39.8538 11.9316C40.6837 11.7141 41.3936 11.1767 41.8281 10.437C42.2627 9.69733 42.3865 8.81562 42.1725 7.98485C41.9852 7.24429 41.5425 6.59359 40.9225 6.1474C40.3025 5.70122 39.5449 5.4882 38.7832 5.54584ZM50.0027 19.8125C33.3661 19.8125 19.8096 33.3691 19.8096 50.0057C19.8096 66.6423 33.3661 80.1989 50.0027 80.1989C66.6394 80.1989 80.1959 66.6423 80.1959 50.0057C80.1959 33.3691 66.6394 19.8125 50.0027 19.8125ZM50.0027 26.2997C63.1335 26.2997 73.7087 36.875 73.7087 50.0057C73.7087 63.1364 63.1335 73.7054 50.0027 73.7054C36.872 73.7054 26.2967 63.1364 26.2967 50.0057C26.2967 36.875 36.872 26.2997 50.0027 26.2997ZM8.31766 54.567C8.07765 54.5594 7.83754 54.5786 7.60175 54.6241C6.76091 54.7938 6.02155 55.2897 5.54546 56.0033C5.06936 56.7168 4.89531 57.5899 5.06138 58.4315C6.80833 67.2548 11.1307 75.3465 17.4909 81.7067C31.9553 96.1711 54.3414 99.1721 72.1059 89.0301C72.8483 88.6049 73.3927 87.9037 73.6205 87.079C73.8484 86.2544 73.7411 85.3731 73.3223 84.6272C73.1122 84.2557 72.831 83.9293 72.4946 83.6666C72.1582 83.404 71.7733 83.2104 71.3619 83.0968C70.9505 82.9832 70.5208 82.9519 70.0973 83.0047C69.6738 83.0575 69.2649 83.1934 68.894 83.4045C53.6424 92.1118 34.5021 89.551 22.0838 77.1328C16.6318 71.6808 12.9067 64.7279 11.4092 57.1644C11.2633 56.4458 10.8783 55.7977 10.3168 55.326C9.7554 54.8543 9.0507 54.5867 8.31766 54.567Z"
                                  fill="currentColor"
                                />
                              </svg>
                              Net worth
                            </span>

                            <div className="d-flex align-items-center gap-2 text-uppercase text-sm fw-medium grayscale-100 mb-2">
                              <div className="pulse"></div>
                              Live
                              <span className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="button"
                                  aria-pressed="true"
                                  defaultChecked=""
                                />
                              </span>
                            </div>
                          </div>

                          <div className="card-bs p-3">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                              <span className="meta grayscale-500">
                                Net worth
                              </span>
                              <span
                                className="flex grayscale-500 text-link"
                                role="button"
                              >
                                <svg
                                  width="18"
                                  height="18"
                                  role="img"
                                  viewBox="0 -960 960 960"
                                >
                                  <path
                                    d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </span>
                            </div>

                            <div className="flex">
                              <span
                                className="h2 encrypted mb-0"
                                data-content="0.0005 ETH"
                              >
                                0.8263{" "}
                                <span className="fs-3 grayscale-500">ETH</span>
                              </span>
                              <span
                                className="crypt-grayscale-700 encrypted"
                                data-content="≈ 0.00 USD"
                              >
                                ≈ $1,455.20
                              </span>
                            </div>

                            <div className="d-flex gap-2 mt-3">
                              <button
                                className="d-inline-flex align-items-center meta text-xs gap-2 text-bg-bs card-border redius  px-2 py-1"
                                type="button"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                data-bs-title="The percentage of your wallet's estimated value that comes from NFTs."
                              >
                                NFTs :{" "}
                                <span className="meta text-xs text-link grayscale-100 mb-0">
                                  2%
                                </span>
                              </button>
                              <button
                                className="d-inline-flex align-items-center meta text-xs gap-2 text-bg-bs card-border redius  px-2 py-1"
                                type="button"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                data-bs-title="The percentage of your wallet's estimated value that comes from NFTs."
                              >
                                Tokens :{" "}
                                <span className="meta text-xs text-link grayscale-100 mb-0">
                                  99%
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="card card-border redius card-bs p-1 animation-1">
                          <div className="tab-content">
                            <div
                              className="nav nav-tabs nav-justified card-border card-bs p-1 m-1 mb-3"
                              role="tablist"
                            >
                              <button
                                className="nav-link active text-sm fw-medium py-1"
                                id="itemsCollectionsTab-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#itemsCollectionsTab-tab-pane"
                                type="button"
                                aria-controls="itemsCollectionsTab-tab-pane"
                                aria-selected="false"
                                tabIndex="-1"
                                role="tab"
                              >
                                Collections
                              </button>
                              <button
                                className="nav-link text-sm fw-medium py-1"
                                id="itemsTokensTab-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#itemsTokensTab-tab-pane"
                                type="button"
                                aria-controls="itemsTokensTab-tab-pane"
                                aria-selected="false"
                                tabIndex="-1"
                                role="tab"
                              >
                                Tokens
                              </button>
                            </div>

                            <div
                              className="tab-pane fade show active"
                              id="itemsCollectionsTab-tab-pane"
                              role="tabpanel"
                              aria-labelledby="itemsCollectionsTab-tab"
                              tabIndex="-1"
                            >
                              <div className="flex mb-3 px-2">
                                <input
                                  type="text"
                                  className="search search-input form-control"
                                  placeholder="Search for collections"
                                />
                              </div>

                              <div className="table-responsive">
                                <table className="table table-dark table-hover mb-0">
                                  <thead>
                                    <tr className="mb-0">
                                      <th scope="col" className="meta text-xs">
                                        Collection
                                      </th>
                                      <th scope="col" className="meta text-xs">
                                        Held
                                      </th>
                                      <th scope="col" className="meta text-xs">
                                        Value
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="align-middle">
                                      <td>
                                        <div className="d-flex flex-row align-items-center gap-2">
                                          <input
                                            className="form-check-input fs-5"
                                            type="checkbox"
                                            value=""
                                            id="AzukiElementalsItems"
                                            required=""
                                          />
                                          <label
                                            className="form-check-label d-flex align-items-center gap-2 fs-6 fw-bold grayscale-200 text-link"
                                            htmlFor="AzukiElementalsItems"
                                          >
                                            <img
                                              className="circle"
                                              alt=""
                                              src="images/user/Elementals.jpg"
                                              width="28"
                                              height="28"
                                            />
                                            Azuki Elementals
                                          </label>
                                        </div>
                                      </td>
                                      <td
                                        className="encrypted fw-medium grayscale-600"
                                        data-content=""
                                      >
                                        1
                                      </td>
                                      <td
                                        className="encrypted text-up fw-medium"
                                        data-content=""
                                      >
                                        -
                                      </td>
                                    </tr>

                                  
                                  </tbody>
                                </table>
                              </div>
                            </div>

                            <div
                              className="tab-pane fade"
                              id="itemsTokensTab-tab-pane"
                              role="tabpanel"
                              aria-labelledby="itemsTokensTab-tab"
                              tabIndex="0"
                            >
                              <div className="table-responsive">
                                <table className="table table-dark table-hover mb-0">
                                  <tbody>
                                    <tr className="align-middle">
                                      <td>
                                        <div className="d-flex align-items-center gap-2">
                                          <img
                                            className="circle"
                                            alt=""
                                            src="images/coin/eth.html"
                                            width="40"
                                            height="40"
                                          />
                                          <div className="flex g-1">
                                            <div className="h6 fw-bold mb-0">
                                              Ethereum
                                            </div>
                                            <div className="fw-medium grayscale-600 text-sm mb-0">
                                              0.7654 ETH
                                            </div>
                                          </div>
                                        </div>
                                      </td>

                                      <td>
                                        <span
                                          className="d-inline-flex gap-2 text-bg-bs card-border redius px-2 py-1 disable-sm-screen"
                                          role="button"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          data-bs-title="Chain : Solana"
                                        >
                                          <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                          >
                                            <path
                                              className="fill-current"
                                              d="M15.452.495c6.134 1.843 9.739 8.178 8.19 14.392-1.548 6.215-7.708 10.116-13.988 8.858l.023-.023 3.642-3.602.558-.553 2.053-2.037a11.322 11.322 0 0 0 1.811-2.238c1.583-2.573 1.155-5.828-1.038-8.021a6.647 6.647 0 0 0-6.251-1.76ZM.359 9.092C1.905 2.885 8.052-1.014 14.326.232l-.053.051c-.48.475-4.157 4.107-6.222 6.164a11.189 11.189 0 0 0-1.812 2.234 6.45 6.45 0 0 0 1.046 8.033 6.653 6.653 0 0 0 6.252 1.76l-5.012 5.005C2.403 21.626-1.19 15.297.359 9.092Z"
                                              fill="currentColor"
                                            ></path>
                                          </svg>
                                          <span className="meta text-xs text-link grayscale-100 mb-0">
                                            Solana
                                          </span>
                                        </span>
                                      </td>

                                      <td
                                        className="encrypted h6 fw-medium text-up"
                                        data-content=""
                                      >
                                        $1,447.89
                                      </td>
                                    </tr>

                                   
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-9">
                      

                        <div className="card-bs card-border table-temp3 redius p-0">
                          <div className="table-responsive">
                            <table className="table table-dark table-hover mb-0">
                              <thead>
                                <tr className="table-active mb-0">
                                  <th
                                    scope="col"
                                    className="text-uppercase mb-0"
                                  >
                                     Items
                                  </th>
                                 
                                  <th
                                    scope="col"
                                    className="text-uppercase mb-0"
                                  >
                                    Your Last Bid
                                  </th>
                                  <th
                                    scope="col"
                                    className="text-uppercase mb-0"
                                  >
                                    Status
                                  </th>
                                </tr>
                              </thead>
                              {biddingnft && biddingnft.map((e) => {
                                // console.log("NFT ID:",e.nft?._id)
                                return (
                                    <tbody key={e._id}>
                                <tr className="align-middle">
                                  <td>
                                    <div className="d-flex gap-2">
                                      <img
                                        className="card-border"
                                        alt=""
                                        src={e.nft?.image}
                                        width="48"
                                        height="48"
                                      />
                                      <span className="d-flex flex-column gap-1">
                                        <a
                                          className="fw-bold h6 text-link grayscale-300 mb-0"
                                        //   href="nft-single.html"
                                        >
                                         {e.nft?.name}
                                        </a>
                                        <a
                                          className="d-flex align-items-center gap-1 text-sm grayscale-500 link-secondary"
                                        //   href="collection-single.html"
                                        >
                                          {e.collection?.name}
                                          <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
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
                                        </a>
                                      </span>
                                    </div>
                                  </td>

                              

                                 <td className="encrypted h6 fw-medium grayscale-300">
                                     {e.userBid} <span className="grayscale-400">ETH</span>
 
</td>
<td>
     {e.isAuctionEnded ? (
    e.isWinner  ? (
      <>
        <span className="d-inline-flex ">
             <span className="text-success fw-bold h6 text-link grayscale-300">You are Winner 🎉</span>
             <span>
             {/* {e.nft.userid !== userid &&  */}
             <button  className="btn btn-primary text-sm fw-medium py-1"
              type="button"
                  // data-bs-toggle="modal"
                  // data-bs-target="#checkOutBackdrop"
                //  onClick={() => setSelectedNftId(e.nft?._id)}
               onClick={()=>navigate(`/checkout/${e.nft?._id}`)}
             >Buy Nft</button>
             {/* } */}
             </span>
              
        </span>
          {/* <CheckOutComponent nftId={} /> */}
     </>
    ) : (
      <span className="text-danger h6  text-sm">Better luck for next time</span>
    )
  ) : (
     <span className="d-inline-flex align-items-center gap-2">
      <span className="pulse"></span>
      <span className="text-warning text-sm fw-medium">
        Live – Auction in Progress
      </span>
    </span>
  )}
</td>

                                
                                </tr>

                               
                              </tbody>
                                )
                              })}
                            
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  )
}
