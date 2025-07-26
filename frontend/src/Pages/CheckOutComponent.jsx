import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FooterComponent from "./Componets/FooterComponent";
import SideComponent from "./Componets/SideComponent";
import HeaderComponet from "./Componets/HeaderComponet";
import OtpDialogBox from "./Componets/otpDialogBox";
import "../App.css";

const CheckOutComponent = () => {
  const { id: nftId } = useParams();
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [showOtpDialog, setShowOtpDialog] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const uid = localStorage.getItem("id");
  const [userWallet, setUserWallet] = useState([]);
  const [getAllCurrency, setgetAllCurrency] = useState([]);
  const [sBid, setsBid] = useState([]);
  const [errortext, setErrortext] = useState("");

  const getCurrencyDetail = async () => {
    const response = await axios.get("http://localhost:6363/getcurrencyDetail");
    setgetAllCurrency(await response.data);
    //  console.log(await response.data)
  };

  const fetchSingleBiddingNft = async () => {
    const response = await axios.get(
      `http://localhost:5656/getSingleBiddingNfts/${nftId}`
    );
    console.log(response.data);
    setsBid(response.data);
  };

  const fetchWalletDetailofUser = async () => {
    const result = await axios.get(`http://localhost:5656/getWallet/${uid}`);
    const data = await result.data;
    setUserWallet(data);
  };

  const handlepaymentByUpi = async (nftId) => {
    const amount = sBid[0]?.bids?.[sBid[0].bids.length - 1]?.bidamt;

    if (!amount || !nftId || !uid) {
      alert("Bid amount , nftId and userID missing!");
      return;
    }
    const response = await axios.post("http://localhost:5656/create_order", {
      amount: amount,
    });
    console.log(response.data);
    const { id, amount: rzpAmount, currency } = response.data;
    const options = {
      key: "rzp_test_pWkH7tKMDRIWyC",
      amount: rzpAmount,
      currency: currency,
      order_id: id,
      name: sBid?.nftData?.name,
      handler: async (res) => {
        alert("Payment Succesull ");
        try {
          console.log("NFT ID:", nftId);
          console.log("USER ID:", uid);
          if (!nftId || !uid) {
            return;
          }
          const transferRes = await axios.put(
            `http://localhost:5656/transferNFTOwnerShip`,
            {
              nftid: nftId,
              newownerId: uid,
            }
          );

          if (transferRes.data?.message) {
            alert("NFT ownership has been transferred to your account ");
          } else {
            alert("OwnerShip transferred Failed:");
          }
        } catch (err) {}
      },

      theme: "#4196e1",
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  // ✅ Utility function to check balance and prepare deduction plan
  const prepareDeductionPlan = () => {
    if (!selectedCurrency) {
      setErrortext("Please select a currency.");
      return null;
    }

    const currencyData = getAllCurrency.find(
      (c) =>
        c.currencyName.trim().toLowerCase() ===
        selectedCurrency.trim().toLowerCase()
    );

    if (!currencyData) {
      setErrortext("Currency data not found.");
      return null;
    }

    const price = currencyData.currencyCurrentPrice;
    const bidAmt = sBid[0]?.bids?.[sBid[0].bids.length - 1]?.bidamt || 0;
    const amountToDeduct = Number((bidAmt / price).toFixed(8));

    const matchingWallets = userWallet.filter(
      (wallet) =>
        wallet.currencyName.trim().toLowerCase() ===
        selectedCurrency.trim().toLowerCase()
    );

    const totalAvailable = matchingWallets.reduce(
      (sum, w) => sum + w.quantity,
      0
    );

    if (totalAvailable < amountToDeduct) {
      setErrortext("Insufficient balance in the selected currency.");
      return null;
    }

    const sortedWallets = matchingWallets.sort(
      (a, b) => a.quantity - b.quantity
    );
    let remainingAmount = amountToDeduct;
    const deductionPlan = [];

    for (const wallet of sortedWallets) {
      if (remainingAmount <= 0) break;

      const deductQty = Math.min(wallet.quantity, remainingAmount);
      deductionPlan.push({
        walletId: wallet._id,
        amountToDeduct: deductQty,
      });

      remainingAmount -= deductQty;
    }

    if (remainingAmount > 0) {
      setErrortext("Insufficient balance across wallets.");
      return null;
    }

    setErrortext(""); // clear previous error
    return { deductionPlan };
  };

  const handlePayment = async () => {
    const result = prepareDeductionPlan();
    if (!result) return;

    const { deductionPlan } = result;

    try {
      for (const plan of deductionPlan) {
        const url = `http://localhost:5656/deductcurrency/${plan.walletId}`;
        const response = await axios.put(url, {
          amountToDeduct: plan.amountToDeduct,
        });

        if (response.status !== 200) {
          alert(`Failed to deduct from wallet ${plan.walletId}`);
          return;
        }
      }

      const transferRes = await axios.put(
        `http://localhost:5656/transferNFTOwnerShip`,
        {
          nftid: nftId,
          newownerId: uid,
        }
      );

      if (transferRes.data?.message) {
        setShowSuccessModal(true);
        // alert("NFT ownership has been transferred to your account ");
      } else {
        alert("OwnerShip transferred Failed:");
        return;
      }

      fetchWalletDetailofUser();
    } catch (err) {
      console.error("Payment Error:", err);
      alert("Something went wrong during payment.");
    }
  };

  useEffect(
    () => {
      if (showSuccessModal) {
        const timer = setTimeout(() => setShowSuccessModal(false), 3000);
        return () => clearTimeout(timer);
      }
      fetchSingleBiddingNft();
      getCurrencyDetail();
      fetchWalletDetailofUser();
    },
    [nftId],
    [showSuccessModal]
  );

  return (
    <>
      {showSuccessModal && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal-box">
            <div className="modal-icon">
              <svg
                className="modal-check"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="modal-title">Payment Successful</h2>
            <p className="modal-text">
              Your transaction was completed securely.
            </p>
            <button
              className="modal-button"
              onClick={() => setShowSuccessModal(false)}
            >
              Done
            </button>
          </div>
        </div>
      )}
      <div className="container-fluid z-1 fixed-sidebar ">
        <SideComponent></SideComponent>
        <div className="wrapper pb-4">
          <HeaderComponet title="CheckOut"></HeaderComponet>
          <div className="d-flex">
            <div className="container">
              <p className=" fs-6">PaymentMethod</p>
              <div className="card p-3 rounded-2 ">
                <p className="fs-6 mb-0">Your available balance</p>
                <hr />
                {getAllCurrency && (
                  <>
                    <div className="d-flex px-3 py-2 fw-bold border-bottom">
                      <p className="w-25 ">Currency</p>
                      <p className="w-25">Available</p>
                      <p className="w-25 text-center">Required</p>
                      <p className="w-25 text-end">Status</p>
                    </div>

                    {getAllCurrency.map((currency) => {
                      // Group wallet currency quantities by currencyName
                      const getTotalQuantities = () => {
                        const totals = {};

                        userWallet.forEach((wallet) => {
                          const name = wallet.currencyName;
                          if (!totals[name]) {
                            totals[name] = {
                              quantity: 0,
                              image: wallet.currencyImageUrl, // or from allCurrency
                            };
                          }
                          totals[name].quantity += wallet.quantity;
                        });

                        return totals;
                      };

                      const totalQuantities = getTotalQuantities();
                      const name = currency.currencyName;
                      const total = totalQuantities[name]?.quantity || 0;
                      const image = currency.image;
                      const price = currency.currencyCurrentPrice;
                      const bidAmt =
                        sBid[0]?.bids?.[sBid[0].bids.length - 1]?.bidamt || 0;
                      const requiredQty =
                        bidAmt && price ? (bidAmt / price).toFixed(4) : 0;
                      const hasEnough =
                        parseFloat(total) >= parseFloat(requiredQty);
                      const isSelected = selectedCurrency === name;

                      return (
                        <div
                          key={name}
                          className="card border-secondary-subtle rounded-1 m-2 d-flex flex-row align-content-center "
                        >
                          <div className="w-25 d-flex">
                            <input
                              type="radio"
                              name="currencySelect"
                              value={name}
                              checked={isSelected}
                              disabled={!hasEnough}
                              onChange={() => setSelectedCurrency(name)}
                              className="me-2"
                            />
                            <img
                              src={image}
                              alt={name}
                              width={40}
                              height={40}
                              style={{ marginRight: "10px" }}
                            />
                            <p className=" fs-6 fw-bold">{name}</p>{" "}
                          </div>
                          <p className="w-25">{total}</p>
                          <p className="w-25 text-center">{requiredQty}</p>
                          <div className="w-25 text-end">
                            {hasEnough ? (
                              <span className="text-success">Sufficient</span>
                            ) : (
                              <span className="text-danger">Insufficient</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}
                <div className="w-50">
                  {errortext && (
                    <div className="alert alert-danger mt-2" role="alert">
                      {errortext}
                    </div>
                  )}
                  <button
                    className="btn btn-primary mt-3"
                    onClick={() => {
                      const result = prepareDeductionPlan();
                      if (!result) return;

                      setShowOtpDialog(true);
                    }}
                  >
                    Pay Now
                  </button>

                  <OtpDialogBox
                    show={showOtpDialog}
                    onClose={() => setShowOtpDialog(false)}
                    onConfirm={async (enteredOtp) => {
                      console.log("OTP entered:", enteredOtp);
                       setIsOtpVerified(true);
                      setShowOtpDialog(false);

                      // Now run original handlePayment logic
                      await handlePayment();
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="container  pt-4 pt-sm-5">
              {sBid &&
                sBid.map((e) => {
                  return (
                    <div
                      className="d-flex card rounded-1 gap-3 align-items-start p-3 m-3"
                      key={e._id}
                    >
                      <span className="d-flex align-items-center meta text-xs gap-1 text-bg-bs card-border redius px-2 py-1">
                        Owned by
                        <a className="d-flex align-items-center gap-1 mt-1 mt-sm-0">
                          <img
                            className="circle card-border"
                            src="images/user/ava_2.png"
                            alt=""
                            width="16"
                          />
                          <span className="d-flex align-items-center gap-1  text-xs text-link grayscale-100 mb-0">
                            {e.userData?.name}
                          </span>
                        </a>
                      </span>
                      <div className="col-md-6 mb-4">
                        <div className="card-line mb-4 pb-4">
                          <div className="d-flex flex-column align-items-start p-3 mb-3">
                            <span className="d-inline-flex align-items-end meta text-xs grayscale-100 gap-2 text-bg-bs card-border redius px-2 py-1 mb-3">
                              Current Price
                            </span>

                            <div className=" p-3 d-flex flex-row justify-content-between">
                              <div className="grayscale-200  fs-3 mt-2">
                                ≈ {e.bids[e.bids?.length - 1]?.bidamt}{" "}
                                <span className="fs-5">INR</span>
                              </div>
                            </div>
                          </div>

                          <div className="d-flex align-items-center gap-2">
                            <div className="col">
                              <div className="d-grid">
                                <button
                                  className="btn btn-primary mt-2"
                                  onClick={() =>
                                    handlepaymentByUpi(e.nftData?._id)
                                  }
                                >
                                  Payment By UPI
                                </button>
                              </div>
                            </div>

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
                      <div>
                        <p className="text-muted mb-0"></p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        <FooterComponent></FooterComponent>
      </div>
    </>
  );
};

export default CheckOutComponent;
