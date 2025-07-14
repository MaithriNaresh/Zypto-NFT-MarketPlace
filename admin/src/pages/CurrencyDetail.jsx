import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const CurrencyDetail = () => {
  const [getWallet, setGetWallet] = useState([]);

  const getCurrencyDetail = async () => {
    const response = await axios.get("http://localhost:6363/getcurrencyDetail");
    setGetWallet(await response.data);
  };

  useEffect(() => {
    getCurrencyDetail();
  });
  return (
    <section className="nftmax-adashboard nftmax-show">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-12 nftmax-main__column">
            <div className="nftmax-body">
              {/* <div className="nftmax-balance"> */}
              <div className="nftmax-balance__all mg-top-30 w-50">
                <h3 className="nftmax-balance__all-title">Crypto Currency</h3>

                <ul className="nftmax-balance_list">
                  {getWallet &&
                    getWallet.map((wal) => {
                      return (
                        <li
                          className="nftmax-balance__all-single"
                          key={wal._id}
                        >
                          <div className="nftmax-balance-info">
                            <div className="nftmax-balance__img">
                              <img src={wal.image} alt="#" />
                            </div>
                            <h4 className="nftmax-balance-name">
                              {wal.currencyName}
                            </h4>
                          </div>
                          <div className="nftmax-balance-desc">
                            <div className="nftmax-balance-desc__main">
                              <h4 className="nftmax-balance-amount">
                                <b>$</b>
                                {wal.currencyCurrentPrice}
                              </h4>
                              <p className="nftmax-balance__sub">
                                New Add <span>+324.75</span>
                              </p>
                            </div>
                            <div className="nftmax-dots">
                              <img src="img/dots.png" alt="#" />
                            </div>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default CurrencyDetail;
