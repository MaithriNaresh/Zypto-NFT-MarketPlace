import React from 'react'
import HeaderComponet from "./Componets/HeaderComponet";
import SideComponent from "./Componets/SideComponent";
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuctionForm = () => {
  const navigate = useNavigate();
    const {nftId} = useParams();
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    console.log("nftID: " , nftId);
    const [auction , setAuction] = useState({
        nftid:nftId,
        min_bid:0,
        startDate:"",
        endDate:""
    });

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setAuction((preValue) =>({...preValue, [name] : value}));
        console.log(auction);
       
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
          if (!acceptedTerms) {
    alert("You must accept the Terms & Conditions before submitting.");
    return;
  }
      try{
         const response = await axios.post("http://localhost:5656/createAuction", auction);
        console.log(response.data);
         alert("Auction created successfully!");
         navigate("/product")
      }catch (err) {
      console.error("Error creating auction:", err);
      alert("Failed to create auction");
    }
       
    }
  return (
          <div className="container-fluid fixed-sidebar">
            <SideComponent></SideComponent>
            <div className="wrapper pb-4">
                <HeaderComponet title="Auction Form"></HeaderComponet>
                 <div className="p-5">
          <h4 className="text-light">Create a New Auction for Your NFT</h4>
          <h5>Fill out the form below to create an auction and set minimum bid details for your NFT.</h5>
          <p>
            Start an auction by providing the minimum bid and auction duration.
          To list this NFT for auction, please enter the required details.
          </p>
        </div>
        <div className="card w-50 mx-5">
             <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12">
                {/* Item Name */}
                <div className="d-flex flex-column mb-3">
                  <label className="form-label text-light">
                    Min Bid <span className="grayscale-600">*</span>
                  </label>
                  <input
                    type="number"
                      step="0.01"
                    className="form-control py-2"
                    name="min_bid"
                    value={auction.min_bid}
                    onChange={(e) => handleChange(e)}
                    placeholder="RaidParty Fighters"
                    required
                  />
                </div>

                
                <div className="d-flex flex-column mb-3">
                  <label className="form-label text-light">
                   StartDate <span className="grayscale-600">*</span>
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={auction.startDate}
                    className="form-control py-2"
                    onChange={(e) => {handleChange(e)}}
                    required
                  />
                </div>    

                 <div className="d-flex flex-column mb-3">
                  <label className="form-label text-light">
                   End Date <span className="grayscale-600">*</span>
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    value={auction.endDate}
                    className="form-control py-2"
                    onChange={(e) => {handleChange(e)}}
                    required
                  />
                </div>            
                   <div className="mb-3 text-light border rounded p-3 bg-dark-subtle">
  <h6>Terms & Conditions:</h6>
  <ul className="mb-0">
    <li>The minimum bid amount must be less than the NFT’s sale price.</li>
    <li>The auction must start at least 5 to 7 days from today’s date.</li>
    <li>If the auction was previously rejected for this NFT, it cannot be resubmitted.</li>
     <li>Auction approval will be processed within 24 hours of submission.</li>
  </ul>
</div>
<div className="form-check mb-3">
  <input
    className="form-check-input"
    type="checkbox"
    id="acceptTerms"
    checked={acceptedTerms}
    onChange={(e) => setAcceptedTerms(e.target.checked)}
  />
  <label className="form-check-label text-light" htmlFor="acceptTerms">
    I agree to the Terms & Conditions
  </label>
</div>

                {/* Submit Button */}
                <button
                onClick={()=>{
//                   if (!acceptedTerms) {
//   alert("You must accept the Terms & Conditions before submitting.");
//   return;
// }
                }}
                  type="submit"
                  className="btn btn-editor btn-primary redius border-0 text-dark d-inline-flex align-items-center pe-3 ps-2"
                    // disabled={!acceptedTerms}
                   
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
            </div>
          </div>
  )
}

export default AuctionForm