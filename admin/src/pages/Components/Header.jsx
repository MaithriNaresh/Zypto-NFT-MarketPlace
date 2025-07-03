import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {Link} from 'react-router-dom'
const Header = () => {

  const[trader, setTrader] = useState([]);
  const fetchTrader= async()=>{
   const result = await axios.get("http://localhost:5656/gettrader");
   console.log(await result.data)
   setTrader(await result.data);
  }
  function showDays(createDate){
    if (!createDate) return "Invalid date";

       const now = Date.now();
      const created = new Date(createDate).getTime();
      if (isNaN(created)) return "Invalid date";
      const differentMs = now - created;
      const differentInMin = Math.floor(differentMs/(1000 * 60));
      const differentDays = Math.floor(differentMs/(1000 * 60 * 60 * 24));
        if(differentInMin < 1) return "Justnow";
        if(differentDays < 1) return  `${differentInMin} minute${differentInMin<1 ? "s" : ""} ago`;
        return `${differentDays} days ${differentDays < 1  ? "s" : ""} ago` 
  }
  useEffect(()=>{
    fetchTrader()
    // console.log("TrsderLength: " ,pendingTraders.length)
  },[])
  const pendingTraders = trader.filter(t => t.request === "pending");

  

 

  return (
    
    <>
    <header className="nftmax-header">
        <div className="container">
          <div className="row g-50">
            <div className="col-12">
              {/* <!-- Dashboard Header --> */}
              <div className="nftmax-header__inner">
                <div className="nftmax__sicon close-icon d-xl-none">
                  <img src="img/menu-toggle.svg" alt="#" />
                </div>
                <div className="nftmax-header__left">
                  {/* <!-- Search Form --> */}
                  <div className="nftmax-header__form">
                    <form className="nftmax-header__form-inner" action="#">
                      <button className="search-btn" type="submit">
                        <img src="img/search.png" alt="#" />
                      </button>
                      <input
                        name="s"
                        // value=""
                        type="text"
                        placeholder="Search items, collections..."
                      />
                    </form>
                  </div>
                  {/* <!-- End Search Form --> */}
                </div>
                <div className="nftmax-header__right">
                  <div className="nftmax-header__group">
                    {/* <!-- Search Form --> */}
                    <div className="nftmax-header__amount">
                      <div className="nftmax-amount__icon">
                        <img src="img/bag-icon.svg" alt="#" />
                      </div>
                      <div className="nftmax-amount__digit">
                        <span>$</span> 234,435.34
                      </div>
                      <div className="nftmax-header__plus">
                        <a href="#"><img src="img/plus-icon.svg" alt="#" /></a>
                      </div>
                      {/* <!-- NFTMax Balance Hover --> */}
                      <div className="nftmax-balance">
                        <h3 className="nftmax-balance__title">Your Balance</h3>
                        {/* <!-- NFTMax Balance List --> */}
                        <ul className="nftmax-balance_list">
                          <li>
                            <div className="nftmax-balance-info">
                              <div className="nftmax-balance__img">
                                <img src="img/wallet-1.png" alt="#" />
                              </div>
                              <h4 className="nftmax-balance-name">MetaMask</h4>
                            </div>
                            <div className="nftmax-balance-amount">
                              <h4
                                className="nftmax-balance-amount nftmax-scolor"
                              >
                                75,320 ETH
                                <span className="nftmax-balance-usd"
                                  >(773.69 USD)</span
                                >
                              </h4>
                            </div>
                          </li>
                          <li>
                            <div className="nftmax-balance-info">
                              <div className="nftmax-balance__img">
                                <img src="img/wallet-2.png" alt="#" />
                              </div>
                              <h4 className="nftmax-balance-name">
                                Coinbase Wallet
                              </h4>
                            </div>
                            <div className="nftmax-balance-amount">
                              <h4
                                className="nftmax-balance-amount nftmax-scolor"
                              >
                                56,124 ETH
                                <span className="nftmax-balance-usd"
                                  >(773.69 USD)</span
                                >
                              </h4>
                            </div>
                          </li>
                          <li>
                            <div className="nftmax-balance-info">
                              <div className="nftmax-balance__img">
                                <img src="img/wallet-3.png" alt="#" />
                              </div>
                              <h4 className="nftmax-balance-name">Bitski</h4>
                            </div>
                            <div className="nftmax-balance-amount">
                              <h4
                                className="nftmax-balance-amount nftmax-scolor"
                              >
                                56,124 ETH
                                <span className="nftmax-balance-usd"
                                  >(773.69 USD)</span
                                >
                              </h4>
                            </div>
                          </li>
                          <li>
                            <div className="nftmax-balance-info">
                              <div className="nftmax-balance__img">
                                <img src="img/wallet-4.png" alt="#" />
                              </div>
                              <h4 className="nftmax-balance-name">
                                WalletConnect
                              </h4>
                            </div>
                            <div className="nftmax-balance-amount">
                              <h4
                                className="nftmax-balance-amount nftmax-scolor"
                              >
                                43,728 ETH
                                <span className="nftmax-balance-usd"
                                  >(773.69 USD)</span
                                >
                              </h4>
                            </div>
                          </li>
                        </ul>
                        {/* <!-- NFTMax Balance Button --> */}
                        <div
                          className="nftmax-balance__button"
                          data-bs-toggle="modal"
                          data-bs-target="#add_wallet"
                        >
                          <a
                            href="#"
                            className="nftmax-btn nftmax-btn__bordered bg radius"
                            >Add Money</a
                          >
                        </div>
                      </div>
                      {/* <!-- End NFTMax Balance Hover --> */}
                    </div>
                    {/* <!-- End Search Form --> */}
                    <div className="nftmax-header__group-two">
                      <div className="nftmax-header__right">
                        <div className="nftmax-header__alarm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="24"
                            viewBox="0 0 22 24"
                            fill="none"
                          >
                            <path
                              d="M3.27336 17.6123H18.3622C18.8266 17.6123 19.2841 17.5005 19.6961 17.2863C20.1081 17.072 20.4625 16.7617 20.7292 16.3815C20.9959 16.0014 21.1671 15.5626 21.2283 15.1023C21.2896 14.6419 21.239 14.1736 21.081 13.737L18.3323 6.13763C17.8629 4.44882 16.8532 2.96026 15.4577 1.89961C14.0621 0.838957 12.3576 0.264609 10.6048 0.264404V0.264404C8.78009 0.264376 7.00995 0.886604 5.58662 2.02836C4.16328 3.17011 3.17186 4.76311 2.77605 6.54435L0.511187 13.869C0.377839 14.3015 0.347861 14.7592 0.423665 15.2053C0.49947 15.6515 0.678939 16.0736 0.947633 16.4377C1.21633 16.8018 1.56674 17.0978 1.97069 17.3018C2.37463 17.5058 2.82082 17.6122 3.27336 17.6123Z"
                              fill="#374557"
                            ></path>
                            <path
                              d="M6.19531 19.5398C6.41651 20.6291 7.00751 21.6085 7.86817 22.312C8.72883 23.0154 9.80622 23.3997 10.9178 23.3997C12.0294 23.3997 13.1068 23.0154 13.9674 22.312C14.8281 21.6085 15.4191 20.6291 15.6403 19.5398H6.19531Z"
                              fill="#374557"
                            ></path></svg>
                          {pendingTraders.length > 0 && (<span className="nftmax-header__count">{pendingTraders.length}</span>)}
                          {/* <!-- NFTMax Alarm Hover --> */}
                          <div className="nftmax-balance nftmax-alarm__hover">
                            <h3 className="nftmax-balance__title">
                              Recent Notification
                            </h3>
                            {/* <!-- NFTMax Balance List --> */}
                            <ul className="nftmax-balance_list">
                              {trader && trader.map((e, index) => {
                                return( e.request === "pending" &&
                                   <li key={index}>
                                <Link to={`/adminTraderList/${e.uid}`}>
                                <div className="nftmax-balance-info">
                                  <div
                                    className="nftmax-balance__img nftmax-alarm__default"
                                  >
                                    <img src={e.passportSizePhoto} alt="#" />
                                  </div>
                                  <div className="nftmax-alarm__content">
                                    <h4 className="nftmax-balance-name">
                                      You have a new
                                      <strong className="nftmax-balance__second"
                                        >Trader Request</strong
                                      >
                                    </h4>
                                    <p className="nftmax-alarm__text">
                                     {showDays(e.createDate)}
                                    </p>
                                  </div>
                                </div>
                                </Link>
                                
                              </li>
                                )
                              })}
                             
                            
                            </ul>
                            {/* <!-- NFTMax Balance Button --> */}
                            <div className="nftmax-balance__button">
                              <a href="#" className="nftmax-balance__sell-all"
                                >See all Notification</a
                              >
                            </div>
                          </div>
                          {/* <!-- End NFTMax Balance Hover --> */}
                        </div>
                        <div className="nftmax-header__author">
                          <div className="nftmax-header__author-img">
                            <img src="img/profile-pic.png" alt="#" />
                          </div>
                          <div className="nftmax-header__author-content">
                            <h4 className="nftmax-header__author-title">
                              Brokln Simons
                            </h4>
                            <p className="nftmax-header__author-text v1">
                              <a href="#">@broklinslam_75</a>
                            </p>
                          </div>

                          {/* <!-- NFTMax Profile Hover --> */}
                          <div className="nftmax-balance nftmax-profile__hover">
                            <h3 className="nftmax-balance__title">
                              My Profile
                            </h3>
                            {/* <!-- NFTMax Balance List --> */}
                            <ul className="nftmax-balance_list">
                              <li>
                                <div className="nftmax-balance-info">
                                  <div
                                    className="nftmax-balance__img nftmax-profile__img-one"
                                  >
                                    <img src="img/profile-1.png" alt="#" />
                                  </div>
                                  <h4 className="nftmax-balance-name">
                                    <a href="profile.html">My Profile</a>
                                  </h4>
                                </div>
                              </li>
                              <li>
                                <div className="nftmax-balance-info">
                                  <div
                                    className="nftmax-balance__img nftmax-profile__img-two"
                                  >
                                    <img src="img/profile-2.png" alt="#" />
                                  </div>
                                  <h4 className="nftmax-balance-name">
                                    <a href="chat-messages.html">Message</a
                                    ><span className="nftmax-profile__count"
                                      >19</span
                                    >
                                  </h4>
                                </div>
                              </li>
                              <li>
                                <div className="nftmax-balance-info">
                                  <div
                                    className="nftmax-balance__img nftmax-profile__img-three"
                                  >
                                    <img src="img/profile-3.png" alt="#" />
                                  </div>
                                  <h4 className="nftmax-balance-name">
                                    <a href="history.html">History</a>
                                  </h4>
                                </div>
                              </li>
                              <li>
                                <div className="nftmax-balance-info">
                                  <div
                                    className="nftmax-balance__img nftmax-profile__img-four"
                                  >
                                    <img src="img/profile-4.png" alt="#" />
                                  </div>
                                  <h4 className="nftmax-balance-name">
                                    <a href="settings.html">Setting</a>
                                  </h4>
                                </div>
                              </li>
                              <li>
                                <div className="nftmax-balance-info">
                                  <div
                                    className="nftmax-balance__img nftmax-profile__img-five"
                                  >
                                    <img src="img/profile-5.png" alt="#" />
                                  </div>
                                  <h4 className="nftmax-balance-name">
                                    <a href="profile.html">Log Out</a>
                                  </h4>
                                </div>
                              </li>
                            </ul>
                          </div>
                          {/* <!-- End NFTMax Balance Hover --> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header