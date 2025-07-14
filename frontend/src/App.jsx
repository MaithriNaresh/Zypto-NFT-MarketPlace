import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Auction from "./Pages/Auctions";
import Product from "./Pages/Product";
import Login from "./Pages/Login";
import SignIn from "./Pages/SignIn";
import Profile from "./Pages/Profile";
import EditProfile from "./Pages/EditProfile";
import AddNFT from "./Pages/AddNFT";
import MyCollections from "./Pages/MyCollections";
import AddCollections from "./Pages/AddCollections";
import CollectionDetail from "./Pages/CollectionDetail";
import AuctionForm from "./Pages/AuctionForm";
import SingleNft from "./Pages/SingleNft";
import UserNft from "./Pages/UserNft";
import TraderForm from "./Pages/TraderForm";
import GoogleSuccess from "./Pages/GoogleSuccess";
import TraderPage from "./TraderPage";
import ConnectWalletModal from "./Pages/ConnectWalletModal";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Login></Login> */}
      <BrowserRouter>
        {/* <Navbar></Navbar> */}
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/auction" element={<Auction></Auction>}></Route>
          <Route path="/product" element={<Product></Product>}></Route>
          <Route path="/usernft" element={<UserNft></UserNft>}></Route>
          <Route path="/traders" element={<TraderPage></TraderPage>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signUp" element={<SignIn></SignIn>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/editprofile" element={<EditProfile></EditProfile>}></Route>
          <Route path="/addnft" element={<AddNFT></AddNFT>}></Route>
          <Route path ="/addcollection" element={<AddCollections></AddCollections>}></Route>
          <Route path="/mycollection" element={<MyCollections></MyCollections>}></Route>
          <Route path="/collectiondetail/:collectionId" element={<CollectionDetail></CollectionDetail>}></Route>
          <Route path='/auctionform/:nftId' element={<AuctionForm></AuctionForm>}></Route>
          <Route path="/singlenft/:nftid" element={<SingleNft></SingleNft>}></Route>
          <Route path="/traderform" element={<TraderForm></TraderForm>}></Route>
           <Route path="/google-success" element={<GoogleSuccess />} />
          
        </Routes>
      </BrowserRouter>
      <ConnectWalletModal></ConnectWalletModal>
    </>
  );
}

export default App;
