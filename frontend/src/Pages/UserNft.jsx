import {useState , useEffect} from "react"
import axios from "axios";
import HeaderComponet from "./Componets/HeaderComponet";
import SideComponent from "./Componets/SideComponent";
const UserNft = () => {
     const [biddingnft, setbiddingnfts] = useState([]);
      const id = localStorage.getItem("id");

        const fetchbiddingnfts = async () =>{
          const response = await axios.get(`http://localhost:5656/getbiddingnfts/${id}`);
          setbiddingnfts(response.data);
          console.log(response.data)
        }

         useEffect(() => {
            fetchbiddingnfts(id)
          }, [id]);
  return (
    <>
      <div className="container-fluid fixed-sidebar">
         <SideComponent></SideComponent>
        <div className="wrapper pb-4">
             <HeaderComponet title="My NFTs"></HeaderComponet>

          <div className="card-bs card-border redius table-scroll">
             <div className="table-responsive">
                <table className="table table-dark table-hover mb-0">
                      <thead>
                  <tr className="table-active mb-0">
                    <th scope="col" className="text-uppercase mb-0">
                      Item
                    </th>
                    
                    <th scope="col" className="text-uppercase mb-0">
                      Collections
                    </th>
                  
                    
                   
                  </tr>
                </thead>
                <tbody>

                  {biddingnft &&
                    biddingnft                                        
                    .map((e) => {  
                     return (
                        <tr key={e._id}
                          className="align-middle"
                          data-bs-toggle="modal"
                          data-bs-target="#NFTsPreview"
                        >
                          <td>
                            <div className="d-flex align-items-center gap-3">
                              <img
                                className="redius card-border"
                                alt=""
                                src={e.nft?.image}
                                width="80"
                                height="80"
                              />

                              <div className="d-grid">
                                {/* <!-- item name --> */}
                                <div className="heading-6 fw-bold grayscale-200 link-secondary mb-3">
                                  {e.nft?.name}
                                </div>

                                {/* <!-- item data --> */}
                               
                              </div>
                            </div>
                          </td>
                         
                          
                          {/* <!-- collections --> */}
                          <td>
                            <a
                              className="flex"
                              data-bs-toggle="popover"
                              data-bs-trigger="hover"
                              data-bs-custom-classname="custom-popover"
                              data-bs-content="Azuki Elementals"
                              href="collections.html"
                            >
                              <img
                                className="circle card-border"
                                alt=""
                                src= {e.collection?.image}
                                width="42"
                                height="42"
                              />
                               {/* {e.collectionData[0].name} */}
                            </a>
                            <div className="heading-6 fw-bold grayscale-200 link-secondary mb-3">
                              {/* {e.col} */}
                            </div>
                          </td>
                          {/* <!-- categories --> */}

                          {/* <!-- chain --> */}
                         
                          {/* <!-- price --> */}
                         
                          {/* <!-- action --> */}
                        


                        </tr>
                      );
                    })}

                    


                    
                </tbody>
                </table>
             </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserNft