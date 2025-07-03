import  { useState } from "react";
import axios from "axios";
import SideComponent from "./Componets/SideComponent";
import HeaderComponet from "./Componets/HeaderComponet";
const TraderForm = () => {
  const [formData, setFormData] = useState({
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
    bankName: "",
    branch: "",
    pancardNo: "",
    adhaarNo: "",
    idProof: null,
    passportSizePhoto: null,
  });

  const uid = localStorage.getItem("id"); // Or pass from props/context

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(formData);
    
  };
  const handleFileChange = (e) => {
  const { name, files } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: files[0],
  }));
};

 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submitData = new FormData();
    submitData.append("uid", uid);
    submitData.append("accountHolderName", formData.accountHolderName);
    submitData.append("accountNumber", formData.accountNumber);
    submitData.append("ifscCode", formData.ifscCode);
    submitData.append("bankName", formData.bankName);
    submitData.append("branch", formData.branch);
    submitData.append("pancardNo", formData.pancardNo);
    submitData.append("adhaarNo", formData.adhaarNo);
    submitData.append("idProof", formData.idProof);
    submitData.append("passportSizePhoto", formData.passportSizePhoto);

    try {
      const res = await axios.post("http://localhost:5656/trader", submitData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Trader request submitted!");
    } catch (err) {
      console.error(err);
      alert("Submission failed");
    }
  };

  return (
     <section className="container-fluid fixed-sidebar">
       <SideComponent />
       <div className="wrapper pb-4">
        {/* <HeaderComponet title="Become a Trader" /> */}
        <h4>Become a Trader</h4>
         <div className="p-5">
             <div className="card p-5">
              <form onSubmit={(e) => handleSubmit(e)}>
            <div className="row">
              <div className="col-12">
                {/* Item Name */}
                <div className="d-flex flex-row  mb-3">
                  <label className="form-label text-light ">
                    Account Holder Name: <span className="grayscale-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-2 w-25 ms-3"
                    name="accountHolderName"
                    value={formData.accountHolderName}
                    onChange={(e) => handleChange(e)}
                    placeholder="accountHolderName"
                    required
                  />
                </div>
                <div className="d-flex flex-row mb-3">
                  <label className="form-label text-light">
                    Account Number: <span className="grayscale-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-2 w-25 ms-3"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={(e) => handleChange(e)}
                    placeholder="accountHolderName"
                    required
                  />
                </div>
                <div className="d-flex flex-row mb-3">
                  <label className="form-label text-light">
                    IFSC Code: <span className="grayscale-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-2 w-25 ms-3"
                    name="ifscCode"
                    value={formData.ifscCode}
                    onChange={(e) => handleChange(e)}
                    placeholder=""
                    required
                  />
                </div>
                <div className="d-flex flex-row mb-3">
                  <label className="form-label text-light">
                   Bank Name: <span className="grayscale-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-2 w-25 ms-3"
                    name="bankName"
                    value={formData.bankName}
                    onChange={(e) => handleChange(e)}
                    placeholder=""
                    required
                  />
                </div>
                 <div className="d-flex flex-row mb-3">
                  <label className="form-label text-light">
                   Branch: <span className="grayscale-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-2 w-25 ms-3"
                    name="branch"
                    value={formData.branch}
                    onChange={(e) => handleChange(e)}
                    placeholder=""
                    required
                  />
                </div>

                <div className="d-flex flex-row mb-3">
                  <label className="form-label text-light">
                   PAN Card Number: <span className="grayscale-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-2 w-25 ms-3"
                    name="pancardNo"
                    value={formData.pancardNo}
                    onChange={(e) => handleChange(e)}
                    placeholder=""
                    required
                  />
                </div>

                 <div className="d-flex flex-row mb-3">
                  <label className="form-label text-light">
                   Adhaar Number: <span className="grayscale-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-2 w-25 ms-3"
                    name="adhaarNo"
                    value={formData.adhaarNo}
                    onChange={(e) => handleChange(e)}
                    placeholder=""
                    required
                  />
                </div>
                   
                      
                {/* Image Upload */}
                 <div className="d-flex flex-row mb-3">
                  <label className="form-label text-light">
                   ID Proof (PDF/JPG): <span className="grayscale-600">*</span>
                  </label>
                  <input
                    type="file"
                    name="idProof"
                    // value="image"
                    
                    className="form-control py-2  w-25 ms-3"
                    onChange={handleFileChange}
                    // accept="image/*,application/pdf"
                    required
                  />
                </div> 
                <div className="d-flex flex-row mb-3">
                  <label className="form-label text-light">
                   Passport Size Photo: <span className="grayscale-600">*</span>
                  </label>
                  <input
                    type="file"
                    name="passportSizePhoto"
                    // value="image"
                    className="form-control py-2  w-25 ms-3"
                    onChange={handleFileChange}
                    // accept="image/*"
                    required
                  />
                </div> 
                           
                 
     
                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-editor btn-primary redius border-0 text-dark d-inline-flex align-items-center pe-3 ps-2"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
             </div>
         </div>
       </div>
     </section>
    
  );
};

export default TraderForm;
