import axios from "axios";
import { useState, useEffect } from "react";

const ConnectWalletModal = () => {
  const uid = localStorage.getItem("id");
  const [getWallet, setGetWallet] = useState([]);
  const [selectedCurrencyId, setSelectedCurrencyId] = useState("");
  const [selectedCurrencyPrice, setSelectedCurrencyPrice] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleCurrencyChange = (e) => {
    const selectedId = e.target.value;
    setSelectedCurrencyId(selectedId);

    const currency = getWallet.find((item) => item._id === selectedId);
    if (currency) {
      setSelectedCurrencyPrice(currency.currencyCurrentPrice);
      setSelectedCurrency(currency);
    } else {
      setSelectedCurrencyPrice("");
      setSelectedCurrency(null);
    }
  };

  const handleAddCurrency = async (e) => {
    e.preventDefault();

    if (!selectedCurrency) {
      alert("Please select a currency.");
      return;
    }

    const dataToSend = {
      currencyName: selectedCurrency.currencyName,
      amount: selectedCurrency.currencyCurrentPrice * quantity,
      quantity: quantity,
      uid: uid,
      currencyImageUrl: selectedCurrency.image,
    };

    try {
      const response = await axios.post("http://localhost:5656/buy_currency", {
        amount: dataToSend.amount,
        uid: uid,
      });

      const { id, amount: rzpAmount, currencyName } = response.data;

      const options = {
        key: "rzp_test_pWkH7tKMDRIWyC",
        amount: rzpAmount,
        currency: "INR",
        order_id: id,
        name: currencyName,
        handler: async (res) => {
          alert("Payment Successful ✅");
          try {
            const res = await axios.post(
              "http://localhost:5656/addcurrency",
              dataToSend
            );

            setSelectedCurrencyId("");
            setSelectedCurrencyPrice("");
            setSelectedCurrency(null);
            setQuantity(1);
          } catch (error) {
            console.error("Add currency error:", error.message);
          }
        },
        theme: { color: "#4196e1" },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", function (response) {
        console.error("Payment Failed", response.error);
        alert("Payment Failed: " + response.error.description);
      });
      rzp.open();
    } catch (err) {
      console.error("Razorpay order creation failed:", err);
    }
  };

  const getCurrencyDetail = async () => {
    try {
      const response = await axios.get("http://localhost:6363/getcurrencyDetail");
      setGetWallet(response.data);
    } catch (error) {
      console.error("Failed to fetch wallet data:", error);
    }
  };

  useEffect(() => {
    getCurrencyDetail();
  }, []);

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content meme-section">
          <div className="modal-header d-flex justify-content-between">
            <div className="flex">
              <div className="heading-5 grayscale-100 fw-bold mb-1">
                Connect Wallet
              </div>
            </div>

            <div className="flex">
              <button
                className="btn-close menu-button text-reset me-1"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <svg
                  className="icon-wrap"
                  width="24"
                  height="24"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M13.5 4.5L4.5 13.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M4.5 4.5L13.5 13.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="modal-body">
            {/* Currency Dropdown */}
            <label className="form-label fw-bold">Select Currency</label>
            <select
              className="form-select text-secondary"
              value={selectedCurrencyId}
              onChange={handleCurrencyChange}
            >
              <option value="">---Select Currency---</option>
              {getWallet.map((wallet) => (
                <option key={wallet._id} value={wallet._id}>
                  {wallet.currencyName}
                </option>
              ))}
            </select>

            {/* Currency Image + Name */}
            {selectedCurrency && (
              <div className="d-flex align-items-center gap-2 mt-3">
                <img
                  src={selectedCurrency.image}
                  alt={selectedCurrency.currencyName}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <div className="fw-semibold">
                    {selectedCurrency.currencyName}
                  </div>
                  <div className="text-muted">
                    ₹{selectedCurrency.currencyCurrentPrice}
                  </div>
                </div>
              </div>
            )}

            {/* Price Display */}
            <input
              type="text"
              className="form-control my-2 bg-dark-subtle"
              value={selectedCurrencyPrice}
              readOnly
            />

            {/* Quantity Input */}
            <input
              type="number"
              className="form-control my-2 bg-dark-subtle"
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(Number(e.target.value))}
              placeholder="Enter quantity"
            />

            {/* Total Price */}
            <p className="text-success fw-bold">
              Total: ₹ {selectedCurrencyPrice * quantity || 0}
            </p>

            {/* Submit Button */}
            <button
              onClick={handleAddCurrency}
              className="btn btn-primary mt-2"
            >
              Add to Wallet
            </button>
          </div>

          {/* Footer */}
          <div className="modal-footer d-flex flex-column justify-content-center">
            <div className="text-sm grayscale-400">
              By connecting your wallet you agree to the
            </div>
            <a className="text-sm fw-medium grayscale-200 text-link" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletModal;
