// pages/AdminTraderList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const AdminTraderList = () => {
    const {uid} = useParams();
    // console.log("UserId:",uid)
  const [trader, setTrader] = useState(null);
  const [user, setUser] = useState({}); 
  useEffect(() => {
    fetchTrader();
    fetchUser();
    //  console.log(trader)
  }, [uid]);

  const fetchTrader = async () => {
    try {
         const response = await axios.get(`http://localhost:5656/gettrader/${uid}`);
         const result = response.data
      setTrader(result);
      console.log(result.bankdetails.accountNumber)
     
    } catch (error) {
      console.error("Error fetching trader data:", error);
    }
  };
   const fetchUser = async()=>{
      const userDetail = await axios.get(`http://localhost:5656/getuser/${uid}`);
      const result = userDetail.data;
     setUser(result);
     console.log(result)
   }
  const handleAcceptTrader = async(id,status)=>{
   const response =  await axios.put(`http://localhost:5656/acceptTrader/${id}`,
    {request : status}
   );
   alert(response.data.message);
   fetchTrader();
  }

  return (
    <div className="nftmax-adashboard nftmax-show">
      <h2 className="mb-4">Trader Details</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-hover table-striped">
          <thead className="table-primary border-primary">
            <tr>
              {/* <th>UID</th> */}
              <th>Account Holder</th>
              <th>Account No</th>
              <th>IFSC</th>
              <th>Bank Name</th>
              <th>Branch</th>
              <th>PAN No</th>
              <th>Aadhaar No</th>
              <th>ID Proof</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            {trader ? (
               <tr>
               {/* <td>{trader.uid}</td> */}
                <td>{trader.bankdetails?.accountHolderName}</td> 
                <td>{trader.bankdetails?.accountNumber}</td>
                <td>{trader.bankdetails?.ifscCode}</td>
                <td>{trader.bankdetails?.bankName}</td>
                <td>{trader.bankdetails?.branch}</td>
                <td>{trader.pancardNo}</td>
                <td>{trader.adhaarNo}</td>
                <td>
                  <a href={trader.idProof} target="_blank" rel="noreferrer">
                    View
                  </a>
                </td>
                <td>
                  <img
                    src={trader.passportSizePhoto}
                    alt="Passport"
                    width="80"
                    height="80"
                  />
                </td>
               
              </tr>
            ):
            (<tr>
                <td colSpan="10" className="text-center">Loading...</td>
              </tr>)
            }
          </tbody>
        </table>
       <div className="d-flex gap-3">
        <button className="nftmax-btn nftmax-btn__bordered bg radius ms-3"
        onClick={()=>handleAcceptTrader(uid,"accept")}
        >Accept trader</button>
       <button className="nftmax-btn nftmax-btn__primary bg radius ms-3"
        onClick={()=>handleAcceptTrader(uid,"reject")}
        >Decline</button>
        
       </div>
      </div>
    </div>
  );
};

export default AdminTraderList;
