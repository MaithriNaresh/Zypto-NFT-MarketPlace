import React from 'react'
import { useEffect , useState} from 'react';
import axios from 'axios';

export const CreateItems = () => {
   const [collections , setcollections] = useState([]);
   const userId = localStorage.getItem("id");
   const fetchCollections = async()=>{
     const result = await axios.get(`http://localhost:5656/getcollectionwithnft/${userId}`);
     console.log(await result.data)
     setcollections(await result.data)
   }

   useEffect(()=>{
    fetchCollections();
   },[])

  return (
     <div className="card-bs">
                          <div className="table-responsive">
                            <table className="table table-dark table-hover mb-0">
                              <thead>
                                <tr className="table-active mb-0">
                                  <th
                                    scope="col"
                                    className="text-uppercase mb-0"
                                  >
                                    Collection
                                  </th>
                                  <th
                                    scope="col"
                                    className="text-uppercase mb-0"
                                  >
                                    Items
                                  </th>
                                  <th
                                    scope="col"
                                    className="text-uppercase mb-0"
                                  >
                                    Floor Price
                                  </th>
                                  <th
                                    scope="col"
                                    className="text-uppercase mb-0"
                                  >
                                    Top Offer
                                  </th>
                                  <th
                                    scope="col"
                                    className="text-uppercase mb-0"
                                  >
                                    Volume
                                  </th>
                                  <th
                                    scope="col"
                                    className="text-uppercase mb-0"
                                  >
                                    Sales
                                  </th>
                                  <th
                                    scope="col"
                                    className="text-uppercase mb-0"
                                  >
                                    Owners
                                  </th>
                                  <th
                                    scope="col"
                                    className="text-uppercase mb-0"
                                  >
                                    Supply
                                  </th>
                                  <th
                                    scope="col"
                                    className="text-uppercase mb-0"
                                  >
                                    Action
                                  </th>
                                </tr>
                              </thead>

                              <tbody>
                               {collections && collections.map((e)=>{
                                return(
                                   e.nfts?.length > 0 && 
                                   <tr className="align-middle" key={e._id}>
                                  <td>
                                    <a
                                      className="d-flex gap-2"
                                      href="collections.html"
                                    >
                                      <img
                                        className="circle card-border"
                                        alt=""
                                        src={e.image}
                                        width="42"
                                        height="42"
                                      />
                                      <span className="d-inline-flex align-items-center gap-1">
                                        <span className="fw-bold fs-6 text-link grayscale-300 mb-0">
                                         {e.name}
                                        </span>
                                        <svg
                                          width="12"
                                          height="12"
                                          viewBox="0 0 12 12"
                                          fill="none"
                                        >
                                          <path
                                            d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z"
                                            fill="var(--brand-color)"
                                          ></path>
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z"
                                            fill="rgb(25, 28, 31)"
                                          ></path>
                                        </svg>
                                      </span>
                                    </a>
                                  </td>

                                  <td>
                                    <span
                                      className="d-flex align-items-center gap-1 py-2"
                                      role="button"
                                      data-bs-toggle="modal"
                                      data-bs-target="#NFTsPreview"
                                    >
                                        {e.nfts &&
                                        e.nfts.slice(0 , 5).map((e)=>{
                                          return( <img key={e._id}
                                        className="redius card-border"
                                        alt=""
                                        src={e.image}
                                        width="42"
                                        height="42"
                                      />)
                                        })}
                                      
                                     
                                       {e.nfts.length >2 && (
      <span className="grayscale-500 text-sm fw-bold">
        +{e.nfts.length - 2}
      </span>
    )}
                                    </span>
                                  </td>

                                  <td>
                                    <div
                                      className="encrypted d-inline-flex align-items-center gap-1 text-sm fw-bold grayscale-100 mb-0"
                                      data-bs-toggle="tooltip"
                                      data-bs-html="true"
                                      data-bs-title="<b> $1,503.06 </b>"
                                    >
                                      0.7493
                                      <span className="grayscale-500 text-sm">
                                        ETH
                                      </span>
                                    </div>
                                  </td>

                                  <td>
                                    <div
                                      className="encrypted d-inline-flex align-items-center gap-1 text-sm fw-bold grayscale-100 mb-0"
                                      data-bs-toggle="tooltip"
                                      data-bs-html="true"
                                      data-bs-title="<b> $1,489.16 </b>"
                                    >
                                      0.74
                                      <span className="grayscale-500 text-sm">
                                        wETH
                                      </span>
                                    </div>
                                  </td>

                                  <td>
                                    <div className="encrypted d-inline-flex align-items-center gap-1 text-sm fw-bold grayscale-100 mb-0">
                                      113.5k
                                      <span className="grayscale-500 text-sm">
                                        ETH
                                      </span>
                                    </div>
                                  </td>

                                  <td>
                                    <div className="encrypted d-inline-flex align-items-center gap-1 text-sm fw-bold grayscale-100 mb-0">
                                      25,824
                                    </div>
                                  </td>

                                  <td>
                                    <div className="encrypted d-inline-flex align-items-center gap-1 text-sm fw-bold grayscale-100 mb-0">
                                      3,412
                                    </div>
                                  </td>

                                  <td>
                                    <div className="encrypted d-inline-flex align-items-center gap-1 text-sm fw-bold grayscale-100 mb-0">
                                      9,999
                                    </div>
                                  </td>

                                  <td>
                                    <div className="flex">
                                      <button
                                        className="btn btn-dark btn-editor-sm meta text-xs grayscale-500 text-link mb-0 py-2"
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#buyCrypto"
                                      >
                                        Manage
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                  
                                )
                               })}
                                        
                               

                              
                              </tbody>
                            </table>
                          </div>
                        </div>
  )
}

