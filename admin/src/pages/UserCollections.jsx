import { useState , useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
const UserCollections = () => {
const [collection, setcollection] = useState([]);
const fetchcollections = async() => {
   const response = await axios.get("http://localhost:5656/getcollectionwithnft");
   setcollection(await response.data)
}
useEffect(()=>{
  fetchcollections();
},[])
  return (
    <section className="nftmax-adashboard nftmax-show">
      <div className="container">
        	<div className="row">
            <div className="col-lg-9 col-12 nftmax-main__column">
              <div className="nftmax-body">
                <div className="nftmax-dsinner">
                  <div className="nftmax-inner__heading mg-btm-20">
										<h2 className="nftmax-inner__page-title m-0">All Collections</h2>
									</div>
                  
                  <div className="row nftmax-gap-sq30 ">
                      {collection && collection.map((e) => {
                          return (
                            e.nfts.length > 0 ?
                      (
                      
                     
                         <div className="col-lg-4 col-md-6 col-12" key={e._id}>
  <Link to={`/ucollectionDetail/${e._id}`}>
    <div className="nftmax-collection__single">
      <div className="nftmax-collection__body">
        <div className="row g-2">
          {e.nfts.slice(0, 3).map((nft) => (
            <div className="col-6" key={nft._id}>
              <div className="nftmax-collection__img-wrapper">
                <img className="nftmax-collection__img" src={nft.image} alt="#" />
              </div>
            </div>
          ))}
        </div>
        <div className="nftmax-collection__author">
          <div className="nftmax-collection__author-head">
            <div className="nftmax-collection__author-info">
              <img src={e.image} alt="#" />
              <h4 className="nftmax-collection__title">{e.name}</h4>
            </div>
          </div>
          <div className="nftmax-collection__item">{e.nfts.length}</div>
        </div>
      </div>
    </div>
  </Link>
</div>

                   
                      
                     ) : null) })}
                    </div>
                 

                  	
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default UserCollections