import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideComponent from './Pages/Componets/SideComponent';
import HeaderComponet from './Pages/Componets/HeaderComponet';
import { useNavigate } from 'react-router-dom';
import FooterComponent from './Pages/Componets/FooterComponent';

const TraderPage = () => {
  const isLogin = localStorage.getItem("loggedin");
    const currentUserid = localStorage.getItem("id");
    const [following , setfollowing]= useState([]);
    const [followers, setFollowers] = useState([]);
    const navigate = useNavigate();
    const [traders, setTraders] = useState([]);
   const fetchTrader = async () => {
  const result = await axios.get("http://localhost:5656/getuser");
  setTraders(result.data);

  const singleTrader = await axios.get(`http://localhost:5656/getuser/${currentUserid}`);
  setfollowing(singleTrader.data.following || []);


  const followersRes = await axios.get(`http://localhost:5656/getfollowers/${currentUserid}`);
  const followerIds = followersRes.data.map(f => f._id); 
  setFollowers(followerIds);
};
    
   const fetchFollowers = async () => {
    try {
      const res = await axios.get(`http://localhost:5656/getfollowers/${currentUserid}`);
      console.log("Fetched followers:", res.data);
      setFollowers(res.data);
    } catch (err) {
      console.error("Error fetching followers:", err);
    }
  };

   
   // Follow Trader
const followTrader = async (userIdToFollow) => {
  if(!isLogin){
    navigate("/login")
  }
  try {
    const result = await axios.put(`http://localhost:5656/follow/${userIdToFollow}`, { currentUserid });
    alert(result.data?.message);
    console.log("Follow Click Event");
    setfollowing((prev) => [...prev, userIdToFollow]);
  } catch (error) {
   
    alert(error.response?.data?.message || "Something went wrong");
  }
};

// Unfollow Trader
const unFollowTrader = async (userIdToUnfollow) => {
  try {
    const result = await axios.put(`http://localhost:5656/unfollow/${userIdToUnfollow}`, { currentUserid });
    alert(result.data?.message);
    console.log("Unfollow Click Event");

    // ✅ Update local following state
    setfollowing((prev) => prev.filter((id) => id !== userIdToUnfollow));
  } catch (error) {
    alert(error.response?.data?.message || "Something went wrong");
  }
};

    useEffect(()=>{
        fetchTrader();
        fetchFollowers();
    },[])
  return (
    
    <>
   <section className="container-fluid fixed-sidebar">
     <SideComponent></SideComponent>
      <div className="wrapper pb-4">
         <HeaderComponet  title='Traders'/>
        
       
     <hr className='m-5' />
  
               <div className="tab-pane fade show active mx-5" id="owned-tab-pane" role="tabpanel" aria-labelledby="owned-tab" tabindex="1">
       
         <div className="d-grid grid-col-5 gap-4">
             {
  traders && traders.map((e) => {
    const traderId = e._id;

    const isFollowing = following.includes(traderId); 
    const isFollower = followers.includes(traderId); 

    return (
      e.istrader === true && traderId !== currentUserid && (
        <div key={traderId} className="nft-card animation-1 card-border">
          <div className="nft-card-head" data-bs-toggle="modal" data-bs-target="#NFTsPreview">
            <img src={e.image} className="card-img-top product-img rounded" alt="" width="400"/>
          </div>

          <div className="nft-card-body">
            <div className="d-flex justify-content-between align-items-center mb-1">
              <a className="d-flex align-items-center gap-1" href="collection-single.html">
                <span className="d-inline-block text-truncate text-sm grayscale-300 link-secondary mb-0">
                  {e.name}
                </span>
              </a>
            </div>
          </div>

         
          {isFollowing ? (
            <button
              onClick={() => unFollowTrader(traderId)}
              className='d-flex align-items-center gap-2 btn btn-editor btn-primary text-dark px-2'>
              Unfollow
            </button>
          ) : isFollower ? (
            <button
              onClick={() => followTrader(traderId)}
              className='d-flex align-items-center gap-2 btn btn-primary  text-dark px-2'>
              Confirm Request
            </button>
          ) : (
            <button
              onClick={() => followTrader(traderId)}
              className='d-flex align-items-center gap-2 btn btn-editor btn-primary text-dark px-2'>
              Follow
            </button>
          )}
        </div>
      )
    );
  })
}

         </div>
        
     </div>
            
      </div>
   </section>
   <FooterComponent/>
    </>
    
     
  )
}

export default TraderPage