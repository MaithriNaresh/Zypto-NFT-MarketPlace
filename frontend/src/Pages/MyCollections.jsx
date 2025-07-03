
import SideComponent from './Componets/SideComponent'
import HeaderComponet from './Componets/HeaderComponet'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
function MyCollections() {
    const [collections , setcollection] = useState();
    const fetchcollections = async()=>{
        const response = await axios.get("http://localhost:5656/getcollection");
        setcollection( response.data);
    }

 useEffect(() => {
        fetchcollections()
    });
    return (
         <div className="container-fluid fixed-sidebar">
             <SideComponent></SideComponent>
              <div className="wrapper pb-4">
                 <HeaderComponet title='My Collections'></HeaderComponet>
                   <div className="card-bs redius p-3 mb-2">

                            {/* <!-- heading --> */}
                            <div className="d-flex justify-content-between align-items-start mb-3">
                                <div className="d-sm-flex align-items-center gap-2">
                                    <div className="heading-5 grayscale-100 mb-2 mb-sm-0">Trending Collections</div>
                                    <span className="vr mx-2 disable-sm-screen"></span>
                                    <p className="grayscale-400 mb-0">This week's curated primary drops</p>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <a href="my-collections.html" className="btn btn-editor text-link btn-dark px-3">
                                        View all
                                    </a>
                                </div>
                            </div>

                            {/* <!-- nft --> */}
                            <div className="d-grid grid-col-5 grid-sm">

                                {/* <!--- card 1 --> */}
                              {collections && collections.map((e) =>{
                                return(
                                      <Link to={`/collectiondetail/${e._id}`} className="nft-card animation-1 card-border pe-3">
                                    <div className="d-flex align-items-center gap-3">

                                        <img className="circle border-2x" alt="" src={e.image} width="72" height="72"/>
                                        <div className="d-grid">
                                            <a className="d-flex align-items-center gap-2 mb-2" href="collection-single.html">
                                                <span className="d-inline-block text-truncate fs-6 fw-bold grayscale-100 text-link">
                                                   {e.name}
                                                </span>
                                                <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                                                    <path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="var(--brand-color)"></path>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="rgb(25, 28, 31)"></path>
                                                </svg>
                                            </a>
                                            <div className="d-flex align-items-center gap-3">
                                                <span className="text-sm fw-medium grayscale-400 link-secondary mb-0">$0.00034</span>
                                                <span className="text-sm fw-medium text-down mb-0" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="1D : Price change">-0.6%</span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </Link>
                                )
                              })}
                               

                            </div>

                        </div>
              </div>
         </div>
    )
}

export default MyCollections