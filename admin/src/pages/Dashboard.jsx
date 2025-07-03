import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const userId  = localStorage.getItem("id")
  // console.log(userId);
  const [user, setUser] = useState([]);
  const [nft, setnft] = useState([]);
  const [auctions, setAuctions] = useState([]);

  const fetchUser = async () => {
    const response = await axios.get("http://localhost:5656/getuser");
    const result = await response.data;
   
    setUser(result);
  };

  const fetchnft = async () => {
    const response = await axios.get("http://localhost:5656/getnft");
    setnft(await response.data);
  };

  const deletenft = async (id) => {
    const response = await axios.delete(
      `http://localhost:5656/deletenft/${id}`
    );
    console.log("delete NFT", response.data);
  };

  const getAuctionstatus = async () => {
    const response = await axios.get(
      "http://localhost:5656/getAuctionsWithNft"
    );
    console.log(await response.data);
    setAuctions(await response.data);
  };

  const auctionStatus = async (id, status, uid) => {
    console.log("Sending ID:", id, "Status:", status);
    try {
      const response = await axios.put(
        `http://localhost:5656/auctionStatus/${id}`,
        {
          status: status,
         uid: userId
        }
      );

      console.log("Status updated:", response.data);

      // Optionally re-fetch auction data
      getAuctionstatus();
    } catch (err) {
      console.error(
        "Error updating status:",
        err.response ? err.response.data : err.message
      );
    }
  };

  useEffect(() => {
    fetchnft();
    fetchUser();
    getAuctionstatus();
  }, []);

  const getOwnerName = (ownerId) => {
    const owner = user.find((u) => u._id === ownerId); // or u._id, or whatever your key is
    return owner ? owner.name : "Unknown";
  };

  const handleChange = async (id, currentStatus) => {
    try {
      const token = localStorage.getItem("token");
      const updatedStatus = !currentStatus;

      await axios.put(
        `http://localhost:5656/toggletrader/${id}`,
        { istrader: updatedStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchUser();
    } catch (error) {
      console.log("Error UpdatingStatus:", error.response?.data || error);
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      const response = await axios.put(
        `http://localhost:5656/updatestatus/${id}`,
        {
          status: newStatus,
        }
      );
      console.log("Updated NFT:", response.data);
      // Refresh NFT list after update
      fetchnft();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <>
      <section className="nftmax-adashboard nftmax-show">
        <div
          className="dashboard-banner nftmax-bg-cover mg-top-40"
          style={{ backgroundImage: "url('img/banner-bg.png')" }}
        >
          <div className="row">
            <div className="col-12">
              <div className="dashboard-banner__main">
                <div className="dashboard-banner__column dashboard-banner__column--one">
                  {/* <!-- Dashboard Content --> */}
                  <div className="dashboard-banner__content">
                    <h2 className="dashboard-banner__title nftmax-font-regular nftmax-lspacing">
                      Lock and Lob x Fiesta Spurs
                    </h2>
                    <p className="dashboard-banner__text nftmax-lspacing">
                      ID : 2320382
                    </p>
                  </div>

                  <div className="nftmax-header__author nftmax-header__author-two ">
                    <div className="nftmax-header__author-img">
                      <img src="img/profile-pic-2.png" alt="#" />
                    </div>
                    <div className="nftmax-header__author-content ">
                      <h4 className="nftmax-header__author-title nftmax-header__author-title--two nftmax-lspacing">
                        Brokln Simons
                      </h4>
                      <p className="nftmax-header__author-text nftmax-header__author-text--two">
                        <a
                          href="#"
                          className="nftmax-font-regular nftmax-lspacing"
                        >
                          @broklinslam_75
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="dashboard-banner__bids">
                    <div className="dashboard-banner__bid">
                      {/* <!-- Single Bid --> */}
                      <div className="dashboard-banner__group">
                        <p className="dashboard-banner__group-small">
                          Current Bid
                        </p>
                        <h3 className="dashboard-banner__group-title">
                          75,320 ETH
                        </h3>
                        <p className="dashboard-banner__group-small">
                          773.69 <span>USD</span>
                        </p>
                      </div>
                      {/* <!-- End Single Bid --> */}
                      <div className="dashboard-banner__middle-border"></div>
                      {/* <!-- Single Bid --> */}
                      <div className="dashboard-banner__group">
                        <p className="dashboard-banner__group-small">
                          Remaing Time
                        </p>
                        <h3
                          className="dashboard-banner__group-title"
                          data-countdown="2023/12/26"
                        ></h3>
                        <p className="dashboard-banner__group-small nftmax-timing">
                          <span>Hrs</span> <span>Min</span>
                          <span>Sec</span>
                        </p>
                      </div>
                      {/* <!-- End Single Bid --> */}
                    </div>
                  </div>

                  {/* <!-- Dashboard Banner Button --> */}
                  <div className="dashboard-banner__button">
                    <div className="dashboard-banner__single-btn">
                      <a className="dashboard-banner__heart">
                        <i className="fa-solid fa-heart"></i>
                      </a>
                    </div>
                    <div className="dashboard-banner__single-btn dashboard-banner__main-btn">
                      <a
                        href="active-bids.html"
                        className="nftmax-btn nftmax-btn__secondary radius"
                      >
                        Place a Bid
                      </a>
                    </div>
                    <div className="dashboard-banner__single-btn">
                      <Link
                        to="/marketplace"
                        // href="marketplace.html"
                        className="nftmax-btn trs-white"
                      >
                        View Art Work
                      </Link>
                    </div>
                  </div>
                  {/* <!-- End Dashboard Banner Button --> */}
                </div>
                <div className="dashboard-banner__column dashboard-banner__column--two">
                  <div className="dashboard-banner__slider">
                    <div className="dashboard-banner__single-slider">
                      <img src="img/dashboard-slider-1.png" alt="#" />
                    </div>
                    <div className="dashboard-banner__single-slider">
                      <img src="img/slide_2.jpg" alt="#" />
                    </div>
                    <div className="dashboard-banner__single-slider">
                      <img src="img/slide_3.jpg" alt="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="welcome-cta mg-top-40">
          <div className="welcome-cta__heading">
            <h2 className="welcome-cta__title">
              Create your own NFT and extraordinary get lot of Sell..
            </h2>
            <p className="welcome-cta__text nftmax-lspacing">
              Buy and sell NFTs from the world’s top artists
            </p>
          </div>
          <div className="welcome-cta__button">
            <Link
              to="/upload"
              href="product-upload.html"
              className="nftmax-btn nftmax-btn__bordered bg radius"
            >
              Upload Products
            </Link>
            <Link
              to="/marketplace"
              href="marketplace.html"
              className="nftmax-btn trs-white bl-color"
            >
              View Art Work
            </Link>
          </div>
        </div>

        <div className="trending-action mg-top-40">
          <h2 className="trending-action__heading">Trending Auction</h2>
          <div className="row">
            {auctions &&
              auctions.map((auction) => {
                return (
                  <div className="col-3" key={auction._id}>
                    <div className="trending-action__slider">
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
                          <img src={auction.nftData?.image || "default-image.jpg"} alt="#" />
                        </div>
                        <div className="trending-action__body">
                          <div className="trending-action__author-meta">
                            <div className="trending-action__author-img">
                              <img src="img/author-pic.png" alt="#" />
                            </div>
                            <p className="trending-action__author-name">
                              Owned by
                              <a href="">{getOwnerName(auction.nftData?.userid)}</a>
                            </p>
                          </div>
                          <h2 className="trending-action__title">
                            <a href="active-bids.html">{auction.nftData?.name || "NFT Image"}</a>
                          </h2>
                          <div className="dashboard-banner__bid dashboard-banner__bid-v2">
                            {/* <!-- Single Bid --> */}
                            <div className="dashboard-banner__group dashboard-banner__group-v2">
                              <p className="dashboard-banner__group-small">
                                Mininum Bid
                              </p>
                              <h3 className="dashboard-banner__group-title">
                                {auction.min_bid} ETH
                              </h3>
                            </div>
                            {/* <!-- End Single Bid --> */}
                            <div className="dashboard-banner__middle-border"></div>
                            {/* <!-- Single Bid --> */}
                            <div className="dashboard-banner__group dashboard-banner__group-v2">
                              <p className="dashboard-banner__group-small">
                                Starting Date
                              </p>
                              <h3
                                className="dashboard-banner__group-title"
                                data-countdown="2023/09/01"
                              >
                                {
                                  new Date(auction.startDate)
                                    .toISOString()
                                    .split("T")[0]
                                }
                              </h3>
                            </div>
                            {/* <!-- End Single Bid --> */}
                          </div>
                        </div>
                        <span style={{color:auction.status === "accept" ?"green" : "red"}}>{auction.status === "accept" && "Accepted"}
                          {auction.status === "reject" && "Rejected"}
                          
                        </span>
                       {auction.status === "pending" && <div className="dashboard-banner__button trending-action__bottom">
                          <a
                            // href="active-bids.html"
                            className="nftmax-btn nftmax-btn__secondary radius"
                            onClick={(e) => {
                              e.preventDefault();
                              auctionStatus(auction._id, "accept");
                            }}
                          >
                            Accept
                          </a>
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                              auctionStatus(auction._id, "reject");
                            }}
                            className="nftmax-btn  radius"
                            // style={{backgroundColor:"red"}}
                          >
                            Reject
                          </a>
                        </div>}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="col-xxl-12 col-xl-6 col-12 nftmax-sidebar__widget mt-5">
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
                  className="tab-pane fade show active"
                  id="weekly"
                  aria-labelledby="nav-profile-tab"
                >
                  <ul className="nftmax-sidebar__creatorlist">
                    {user &&
                      user.map((e) => {
                        return (
                          <li key={e._id}>
                            <div className="nftmax-sidebar__creator">
                              <img src={e.image} alt="#" />
                              <a href="#">
                                <b className="nftmax-sidebar__creator-name">
                                  {e.name}
                                  <span className="nftmax-sidebar__creator-link">
                                    {e.email}
                                  </span>
                                </b>
                              </a>
                            </div>
                            <div className="nftmax-sidebar__button">
                              <button
                                onClick={() => handleChange(e._id, e.istrader)}
                                className={
                                  e.istrader
                                    ? "nftmax-btn nftmax-btn__bordered bg radius"
                                    : "btn btn-danger rounded-pill"
                                }
                                style={{
                                  color: "white",
                                  border: `1px solid ${
                                    e.istrader ? "purple" : "red"
                                  }`,
                                  backgroundColor: `${
                                    e.istrader ? "purple" : "red"
                                  }`,
                                }}
                              >
                                {e.istrader ? "Trader" : "User"}
                              </button>

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
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="nftmax-table mg-top-40">
          <div className="nftmax-table__heading">
            <h3 className="nftmax-table__title mb-0">
              All NFTS Update
              <span className="nftmax-table__badge">435</span>
            </h3>
            <ul
              className="nav nav-tabs  nftmax-dropdown__list"
              id="nav-tab"
              role="tablist"
            >
              <li className="nav-item dropdown ">
                <a
                  className="nftmax-sidebar_btn nftmax-heading__tabs nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  All Categories
                  <span className="nftmax-table__arrow--icon">
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
                    className="dropdown-item list-group-item"
                    data-bs-toggle="tab"
                    data-bs-target="#table_1"
                    role="tab"
                  >
                    Categories V1
                  </a>
                  <a
                    className="dropdown-item list-group-item"
                    data-bs-toggle="tab"
                    data-bs-target="#table_2"
                    role="tab"
                  >
                    Categories V2
                  </a>
                  <a
                    className="dropdown-item list-group-item"
                    data-bs-toggle="tab"
                    data-bs-target="#table_1"
                    role="tab"
                  >
                    Categories V3
                  </a>
                </ul>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="table_1"
              role="tabpanel"
              aria-labelledby="table_1"
            >
              {/* <!-- NFTMax Table --> */}
              <table
                id="nftmax-table__main"
                className="nftmax-table__main nftmax-table__main-v1"
              >
                {/* <!-- NFTMax Table Head --> */}
                <thead className="nftmax-table__head">
                  <tr>
                    <th className="nftmax-table__column-1 nftmax-table__h1">
                      All Products
                    </th>
                    <th className="nftmax-table__column-2 nftmax-table__h2">
                      Value
                    </th>
                    {/* <th
                                className="nftmax-table__column-3 nftmax-table__h3"
                              >
                                USD
                              </th> */}
                    <th className="nftmax-table__column-4 nftmax-table__h4">
                      24H%
                    </th>
                    <th className="nftmax-table__column-5 nftmax-table__h5">
                      Bids
                    </th>
                    <th className="nftmax-table__column-6 nftmax-table__h6">
                      Time
                    </th>
                    <th className="nftmax-table__column-7 nftmax-table__h7">
                      Status
                    </th>
                  </tr>
                </thead>
                {/* <!-- NFTMax Table Body --> */}
                <tbody className="nftmax-table__body">
                  {nft &&
                    nft.map((e) => {
                      return (
                        <tr key={e._id}>
                          <td className="nftmax-table__column-1 nftmax-table__data-1">
                            <div className="nftmax-table__product">
                              <div className="nftmax-table__product-img">
                                <img src={e.image} alt="#" />
                              </div>
                              <div className="nftmax-table__product-content">
                                <h4 className="nftmax-table__product-title">
                                  {e.name}
                                </h4>
                                <p className="nftmax-table__product-desc">
                                  Owned by{" "}
                                  <a href="#">{getOwnerName(e.userid)}</a>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="nftmax-table__column-2 nftmax-table__data-2">
                            <div className="nftmax-table__amount nftmax-table__text-one">
                              <img src="img/eth-icon.png" alt="#" />
                              <span className="nftmax-table__text">
                                {" "}
                                {e.saleprice} ETH
                              </span>
                            </div>
                          </td>
                          {/* <td
                                className="nftmax-table__column-3 nftmax-table__data-3"
                              >
                                <div
                                  className="nftmax-table__amount nftmax-table__text-two"
                                >
                                  <img src="img/usd-icon.png" alt="#" /><span
                                    className="nftmax-table__text"
                                    >6392.99$</span
                                  >
                                </div>
                              </td> */}
                          <td className="nftmax-table__column-4 nftmax-table__data-4">
                            <p className="nftmax-table__text nftmax-table__up-down nftmax-rcolor">
                              {e.discount}% (11.5%)
                            </p>
                          </td>
                          <td className="nftmax-table__column-5 nftmax-table__data-5">
                            <p className="nftmax-table__text nftmax-table__bid-text">
                              343
                            </p>
                          </td>
                          <td className="nftmax-table__column-6 nftmax-table__data-6">
                            <p className="nftmax-table__text nftmax-table__time">
                              2 Hours 1 min 30s
                            </p>
                          </td>
                          <td className="nftmax-table__column-7 nftmax-table__data-7">
                            <div>
                              {/* Status Display with color */}
                              <p>
                                <span
                                  style={{
                                    color:
                                      e.status === "accept"
                                        ? "green"
                                        : e.status === "reject"
                                        ? "red"
                                        : "gray",
                                  }}
                                >
                                  {e.status === "accept" && "Accepted"}
                                  {e.status === "reject" && "Rejected"}
                                  {e.status === "block" && "Blocked"}
                                </span>
                              </p>

                              {/* Accept/Reject buttons only if status is pending */}
                              {e.status === "pending" && (
                                <div className="gap-3">
                                  <button
                                    className="nftmax-btn radius"
                                    style={{ marginBottom: "5px" }}
                                    onClick={() =>
                                      updateStatus(e._id, "accept")
                                    }
                                  >
                                    Accept
                                  </button>
                                  <button
                                    className="nftmax-btn nftmax-btn__secondary radius"
                                    style={{ marginBottom: "5px" }}
                                    onClick={() =>
                                      updateStatus(e._id, "reject")
                                    }
                                  >
                                    Reject
                                  </button>
                                </div>
                              )}
                              {e.status === "accept" && (
                                <button
                                  onClick={() => updateStatus(e._id, "blocked")}
                                  className="nftmax-btn nftmax-btn__primary radius"
                                >
                                  Block
                                </button>
                              )}
                            </div>
                          </td>
                          {/* <td>
                                 <button onClick={()=>deletenft(e._id)}
                                      href="#"
                                      className="nftmax-btn nftmax-btn__secondary radius"
                                    >
                                      Delete
                                    </button>
                              </td> */}
                        </tr>
                      );
                    })}
                </tbody>
                {/* <!-- End NFTMax Table Body --> */}
              </table>
              {/* <!-- End NFTMax Table --> */}
            </div>
            <div
              className="tab-pane fade"
              id="table_2"
              role="tabpanel"
              aria-labelledby="table_1"
            >
              {/* <!-- NFTMax Table --> */}
              <table
                id="nftmax-table__main"
                className="nftmax-table__main nftmax-table__main-v1"
              >
                {/* <!-- NFTMax Table Head --> */}
                <thead className="nftmax-table__head">
                  <tr>
                    <th className="nftmax-table__column-1 nftmax-table__h1">
                      All Products
                    </th>
                    <th className="nftmax-table__column-2 nftmax-table__h2">
                      Value
                    </th>
                    <th className="nftmax-table__column-3 nftmax-table__h3">
                      USD
                    </th>
                    <th className="nftmax-table__column-4 nftmax-table__h4">
                      24H%
                    </th>
                    <th className="nftmax-table__column-5 nftmax-table__h5">
                      Bids
                    </th>
                    <th className="nftmax-table__column-6 nftmax-table__h6">
                      Time
                    </th>
                    <th className="nftmax-table__column-7 nftmax-table__h7">
                      Status
                    </th>
                  </tr>
                </thead>
                {/* <!-- NFTMax Table Body --> */}
                <tbody className="nftmax-table__body">
                  <tr>
                    <td className="nftmax-table__column-1 nftmax-table__data-1">
                      <div className="nftmax-table__product">
                        <div className="nftmax-table__product-img">
                          <img src="img/nft-table-img1.png" alt="#" />
                        </div>
                        <div className="nftmax-table__product-content">
                          <h4 className="nftmax-table__product-title">
                            Mullican Computer Joy
                          </h4>
                          <p className="nftmax-table__product-desc">
                            Owned by <a href="#">Xoeyam</a>
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="nftmax-table__column-2 nftmax-table__data-2">
                      <div className="nftmax-table__amount nftmax-table__text-one">
                        <img src="img/eth-icon.png" alt="#" />
                        <span className="nftmax-table__text">7473 ETH</span>
                      </div>
                    </td>
                    {/* <td
                                className="nftmax-table__column-3 nftmax-table__data-3"
                              >
                                <div
                                  className="nftmax-table__amount nftmax-table__text-two"
                                >
                                  <img src="img/usd-icon.png" alt="#" /><span
                                    className="nftmax-table__text"
                                    >6392.99$</span
                                  >
                                </div>
                              </td> */}
                    <td className="nftmax-table__column-4 nftmax-table__data-4">
                      <p className="nftmax-table__text nftmax-table__up-down nftmax-rcolor">
                        -24.75 (11.5%)
                      </p>
                    </td>
                    <td className="nftmax-table__column-5 nftmax-table__data-5">
                      <p className="nftmax-table__text nftmax-table__bid-text">
                        343
                      </p>
                    </td>
                    <td className="nftmax-table__column-6 nftmax-table__data-6">
                      <p className="nftmax-table__text nftmax-table__time">
                        2 Hours 1 min 30s
                      </p>
                    </td>
                    <td className="nftmax-table__column-7 nftmax-table__data-7">
                      <div className="nftmax-table__status nftmax-sbcolor">
                        Active
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="nftmax-table__column-1 nftmax-table__data-1">
                      <div className="nftmax-table__product">
                        <div className="nftmax-table__product-img">
                          <img src="img/nft-table-img2.png" alt="#" />
                        </div>
                        <div className="nftmax-table__product-content">
                          <h4 className="nftmax-table__product-title">
                            View Card by Jeff Davis
                          </h4>
                          <p className="nftmax-table__product-desc">
                            Owned by <a href="#">Xoeyam</a>
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="nftmax-table__column-2 nftmax-table__data-2">
                      <div className="nftmax-table__amount nftmax-table__text-one">
                        <img src="img/eth-icon.png" alt="#" />
                        <span className="nftmax-table__text">7473 ETH</span>
                      </div>
                    </td>
                    <td className="nftmax-table__column-3 nftmax-table__data-3">
                      <div className="nftmax-table__amount nftmax-table__text-two">
                        <img src="img/usd-icon.png" alt="#" />
                        <span className="nftmax-table__text">6392.99$</span>
                      </div>
                    </td>
                    <td className="nftmax-table__column-4 nftmax-table__data-4">
                      <p className="nftmax-table__text nftmax-table__up-down nftmax-rcolor">
                        -24.75 (11.5%)
                      </p>
                    </td>
                    <td className="nftmax-table__column-5 nftmax-table__data-5">
                      <p className="nftmax-table__text nftmax-table__bid-text">
                        343
                      </p>
                    </td>
                    <td className="nftmax-table__column-6 nftmax-table__data-6">
                      <p className="nftmax-table__text nftmax-table__time">
                        2 Hours 1 min 30s
                      </p>
                    </td>
                    <td className="nftmax-table__column-7 nftmax-table__data-7">
                      <div className="nftmax-table__status nftmax-gbcolor">
                        Completed
                      </div>
                    </td>
                  </tr>
                </tbody>
                {/* <!-- End NFTMax Table Body --> */}
              </table>
              {/* <!-- End NFTMax Table --> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
