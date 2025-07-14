import axios from "axios";
import { useState, useEffect } from "react";

const ConnectWalletModal = () => {
  const uid = localStorage.getItem("id");
  const [getWallet, setGetWallet] = useState([]);
  const [selectedCurrencyId, setSelectedCurrencyId] = useState("");
  const [selectedCurrencyPrice, setSelectedCurrencyPrice] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleCurrencyChange = (e) => {
    const selectedId = e.target.value;
    setSelectedCurrencyId(selectedId);

    const selectedCurrency = getWallet.find((item) => item._id === selectedId);
    if (selectedCurrency) {
      setSelectedCurrencyPrice(selectedCurrency.currencyCurrentPrice);
    } else {
      setSelectedCurrencyPrice("");
    }
  };

  const handleAddCurrency = async (e) => {
    e.preventDefault();

    const selectedCurrency = getWallet.find(
      (item) => item._id === selectedCurrencyId
    );

    if (!selectedCurrency) {
      alert("Please select a currency.");
      return;
    }

    const dataToSend = {
      currencyName: selectedCurrency.currencyName,
      amount: selectedCurrency.currencyCurrentPrice * quantity,
      quantity: quantity,
      uid: uid,
    };
    const response = await axios.post("http://localhost:5656/create_order" , {
                   amount: dataToSend.amount
               });
    
    
      const { id, amount: rzpAmount, currencyName } = response.data;

      const options = {
        key: "rzp_test_n0bEoHKAbPgvxy",
        amount: rzpAmount,
        currency: "INR",
        order_id: id,
        name: currencyName,
        handler: async (res) => {
          alert("Payment Succesull ");
          try {
              const response = await axios.post(
        `http://localhost:5656/addcurrency`,
        dataToSend

      );

        setSelectedCurrencyId("");
    setSelectedCurrencyPrice("");
    setQuantity(1);
          } catch (error) {
            
          }
        },
        theme: "#4196e1",
      };
      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response){
  console.error("Payment Failed", response.error);
  alert("Payment Failed");
});
      rzp.open();
   
  };

  const getCurrencyDetail = async () => {
    const response = await axios.get("http://localhost:6363/getcurrencyDetail");
    setGetWallet(await response.data);
    console.log(await response.data);
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
                Connect wallet
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
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M4.5 4.5L13.5 13.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="modal-body">
            {/* Currency Dropdown */}
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
            {/* Price Display */}
            <input
              type="text"
              className="form-control my-2"
              value={selectedCurrencyPrice}
              readOnly
            />
            Quantity Input
            <input
              type="number"
              className="form-control my-2"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              placeholder="Enter amount to buy"
            />
            Total Price :
            <p className="text-success fw-bold">
              Total: ₹ {selectedCurrencyPrice * quantity}
            </p>
           
            <button
              onClick={handleAddCurrency}
              className="btn btn-primary mt-2"
            >
              Add to Wallet
            </button>
            
          </div>

          {/* <!-- footer --> */}
          <div className="modal-footer d-flex flex-column justify-content-center">
            <div className="text-sm grayscale-400">
              By connecting your wallet you agree to the
            </div>
            <a className="text-sm fw-medium grayscale-200 text-link" href="">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletModal;
