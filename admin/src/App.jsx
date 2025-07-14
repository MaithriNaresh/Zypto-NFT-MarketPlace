import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SideBar from './pages/Components/SideBar';
import Dashboard from './pages/Dashboard';
import Bids from './pages/Bids';
import MarketPlace from './pages/MarketPlace';
import MyWallet from './pages/MyWallet';
import MyCollection from './pages/MyCollection';
import UserCollections from './pages/UserCollections'
import Header from './pages/Components/Header'; 
import Upload from './pages/Upload';
import UCollectionDetail from './pages/UCollectionDetail';
import AdminTraderList from './pages/AdminTraderList';
import CurrencyDetail from './pages/CurrencyDetail';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
	
    <BrowserRouter>
	<SideBar></SideBar>
	   <Header></Header>
	<Routes>
		<Route path="/" element={<Dashboard></Dashboard>}></Route>
		<Route path="/bids" element={<Bids></Bids>}></Route>
		<Route path="/marketplace" element={<MarketPlace></MarketPlace>}></Route>
		<Route path="/mywallet" element={<MyWallet></MyWallet>}></Route>
		<Route path="/mycollections" element={<MyCollection></MyCollection>}></Route>
		<Route path="/upload" element={<Upload></Upload>}></Route>
		<Route path='/usercollections' element={<UserCollections></UserCollections>}></Route>
		<Route path="/ucollectionDetail/:collectionId" element={<UCollectionDetail></UCollectionDetail>}></Route>
		<Route path='/adminTraderList/:uid' element={<AdminTraderList></AdminTraderList>}></Route>
		<Route path='/currencyDetail' element={<CurrencyDetail></CurrencyDetail>}></Route>
	</Routes>
	</BrowserRouter>
    
    </>
  )
}

export default App
