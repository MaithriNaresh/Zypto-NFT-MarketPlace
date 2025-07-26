// src/components/OtpDialogBox.jsx

import React, { useState } from "react";
// import { auth } from "../../firebaseconfig"; // ✅ Correct path
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

const OtpDialogBox = ({ show, onClose, onConfirm }) => {
  const [otp, setOtp] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmation, setConfirmation] = useState(null);

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            console.log("reCAPTCHA solved");
          },
          "expired-callback": () => {
            alert("reCAPTCHA expired. Try again.");
          },
        },
        auth
      );

      window.recaptchaVerifier.render().then((widgetId) => {
        window.recaptchaWidgetId = widgetId;
      });
    }
  };

 const sendOtp = () => {
  if (!phone || !/^[0-9]{10}$/.test(phone)) {
    alert("Enter valid 10-digit phone number");
    return;
  }

  setupRecaptcha();
  const appVerifier = window.recaptchaVerifier;

  signInWithPhoneNumber(auth, `+91${phone}`, appVerifier)
    .then((confirmationResult) => {
      setConfirmation(confirmationResult);
      alert("OTP sent successfully!");
    })
    .catch((error) => {
      console.error("OTP error:", error);  // ✅ More helpful
      alert("OTP failed to send: " + error.message);
    });
};


  const handleSubmit = async () => {
    if (!otp || !confirmation) {
      alert("Enter OTP or request again");
      return;
    }

    try {
      const result = await confirmation.confirm(otp);
      const uid = localStorage.getItem("id");

      await fetch("http://localhost:5656/verify_user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid, phone }),
      });

      alert("OTP verified successfully");
      onConfirm(phone);
      onClose();
    } catch (error) {
      console.error("Verification error:", error);
      alert("Invalid OTP");
    }
  };

  if (!show) return null;

  return (
    <div className="modal d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-3">
          <div className="modal-header">
            <h5 className="modal-title">OTP Verification</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="9876543210"
                />
                <button className="btn btn-primary ms-2" onClick={sendOtp}>
                  Send OTP
                </button>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Enter OTP</label>
              <input
                type="text"
                className="form-control"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
              />
            </div>
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button className="btn btn-success" onClick={handleSubmit}>
              Submit OTP
            </button>
          </div>
        </div>
      </div>

      <div id="recaptcha-container"></div>
    </div>
  );
};

export default OtpDialogBox;
