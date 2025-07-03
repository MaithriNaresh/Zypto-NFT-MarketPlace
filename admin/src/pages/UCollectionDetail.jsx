import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UCollectionDetail = () => {
  const [nfts, setnfts] = useState([]);
  const { collectionId } = useParams();
//   console.log(collectionId);

  const fetchnft = async () => {
    const response = await axios.get(
      `http://localhost:5656/getnftbycollection/${collectionId}`
    );
    setnfts(response.data);
  };

  useEffect(() => {
    fetchnft();
  },[]);
  return (
    <section className="nftmax-adashboard nftmax-show">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-12 nftmax-main__column">
            <div className="nftmax-body">
              <div className="nftmax-dsinner">
                <div className="nftmax-inner__heading mg-btm-20">
                  <h2 className="nftmax-inner__page-title m-0">
                    Collection Detail
                  </h2>
                </div>
                <div className="row nftmax-gap-sq30">
                  <div
                    className="tab-pane fade show active"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >

                    <div className="row nftmax-gap-sq30">
                         {nfts &&
                          nfts.map((e) => {
                            return (
                      <div className="col-lg-4 col-md-6 col-12">
                       
                              <div className="trending-action__single trending-action__single--v2">
                                <div className="nftmax-trendmeta">
                                  <div className="nftmax-trendmeta__main">
                                    <div className="nftmax-trendmeta__author">
                                      <div className="nftmax-trendmeta__img">
                                        <img
                                          src="img/market-author-1.png"
                                          alt="#"
                                        />
                                      </div>
                                      <div className="nftmax-trendmeta__content">
                                        <span className="nftmax-trendmeta__small">
                                          Owned by
                                        </span>
                                        <h4 className="nftmax-trendmeta__title">
                                          Rrayak John
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="nftmax-trendmeta__author">
                                      <div className="nftmax-trendmeta__content">
                                        <span className="nftmax-trendmeta__small">
                                          Create by
                                        </span>
                                        <h4 className="nftmax-trendmeta__title">
                                          Yuaisn Kha
                                        </h4>
                                      </div>
                                      <div className="nftmax-trendmeta__img">
                                        <img
                                          src="img/market-author-2.png"
                                          alt="#"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="trending-action__head">
                                  <div className="trending-action__badge">
                                    <span>Active</span>
                                  </div>
                                  <div className="trending-action__button v2">
                                    <a className="trending-action__btn heart-icon">
                                      <i className="fa-solid fa-heart"></i>
                                    </a>
                                    <a className="trending-action__btn">
                                      <i className="fa-solid fa-ellipsis-vertical"></i>
                                    </a>
                                  </div>
                                  <img src={e.image} alt="#" />
                                </div>

                                <div className="trending-action__body trending-marketplace__body">
                                  <h2 className="trending-action__title">
                                    <a href="marketplace-details.html">
                                      {e.name}
                                    </a>
                                  </h2>
                                  <div className="nftmax-currency">
                                    <div className="nftmax-currency__main">
                                      <div className="nftmax-currency__icon">
                                        <img src="img/eth-icon.png" alt="#" />
                                      </div>
                                      <div className="nftmax-currency__content">
                                        <h4 className="nftmax-currency__content-title">
                                          {e.saleprice} ETH{" "}
                                        </h4>
                                        <p className="nftmax-currency__content-sub">
                                          (773.69 USD)
                                        </p>
                                      </div>
                                    </div>
                                    <a
                                      href="#"
                                      className="nftmax-btn nftmax-btn__secondary radius"
                                    >
                                      On Sale
                                    </a>
                                  </div>
                                </div>
                              </div>
                           
                      </div>
                       );
                          })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UCollectionDetail;
