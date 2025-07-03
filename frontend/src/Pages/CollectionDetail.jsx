
import SideComponent from './Componets/SideComponent'
import HeaderComponet from './Componets/HeaderComponet'
import {Link , useParams} from 'react-router-dom'
import { useEffect , useState} from 'react'
import axios from 'axios'
const CollectionDetail = () => {
     const [nfts, setNfts] = useState([]);
     const [collection, setCollection] = useState(null);
     const { collectionId } = useParams();
     console.log(collectionId);
     const fetchCollection = async () => {
  try {
    const response = await axios.get(`http://localhost:5656/getnftbycollection/${collectionId}`);
    console.log("API response:", response.data);
     
    setNfts(response.data);
       if (response.data.length > 0 && response.data[0].collection?.length > 0) {
    setCollection(response.data[0].collection[0]);
  } else {
    setCollection(null);
  }
  } catch (err) {
    console.error("Error fetching collection:", err);
  }
};

     useEffect(()=>{
       
        fetchCollection();
     },[collectionId])
  return (
    <div className="container-fluid fixed-sidebar">
          <SideComponent></SideComponent>
           <div className="wrapper pb-4">
                    <HeaderComponet title='Collection Detail'></HeaderComponet>
                    <div className="card-bs redius p-3 mb-2">
                        
                        {
                         
                        collection ? (
                            
                                 <div className="tab-content">

                                
                                <div className="tab-pane fade show active" id="all-collections-tab-pane" role="tabpanel" aria-labelledby="all-collections-tab" tabIndex="0">
                                    <div id="allCarousel" className="flex carousel slide carousel-wrap" data-bs-ride="carousel">
    
                                        {/* <!-- carousel --> */}
                                        <div className="carousel-inner">

                                            {/* <!-- slider 1 --> */}
                                            <div className="carousel-item active">
                                                <div className="w-100">

                                                 
                                                    <div className="nft-card-head collection-wrapper wrap-1">
                                                        
                                                        <div className="flex actions z-2">

                                                         
                                                            <div className="opacity-1 d-flex align-items-center gap-2">
                                                              
                                                                <div className="flex">
                                                                    <span className="d-inline-flex btn bg-light bg-opacity-10 circle link-secondary p-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Chain : Ethereum">
                                                                        <svg width="20" height="20" viewBox="0 0 24 24">
                                                                            <g fill="white">
                                                                                <path d="m12 16.576 7.498-4.353L12 8.873zM4.5 12.223l7.5 4.353V8.874zM12 0v8.872l7.498 3.35z"></path>
                                                                                <path d="M12 0 4.5 12.223 12 8.872zM12 17.972V24l7.503-10.381zM12 24v-6.03L4.5 13.62z"></path>
                                                                            </g>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                {/* <!--- market --> */}
                                                                <div className="flex">
                                                                    <button className="d-inline-flex btn bg-light bg-opacity-10 circle grayscale-200 link-secondary p-1" type="button">
                                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                            <path d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM5.75501 10.36H4.58334V14.84L5.83668 15.8333H8.73501L9.97334 14.8383V10.36H8.80168V14.3217L8.30668 14.7192H6.26084L5.75501 14.3183V10.36ZM15.1567 10.3583H10.8133V15.7733H11.985V13.7833H14.8533L15.0783 13.9708V15.7725H16.25V13.5392L15.8858 13.2075L16.25 12.8325V11.3808L15.1567 10.3583ZM14.675 11.4717L15.0783 11.8483V12.4425L14.8333 12.6717H11.985V11.4717H14.675ZM8.92501 4.16667H4.58334V9.61501L8.92168 9.64334L10.0208 8.62251V7.27334L9.70834 6.93584L10.0208 6.56501V5.18834L8.92501 4.16667ZM11.9833 4.16834H10.8125V8.65167L12.0808 9.64251H16.0542V8.52834H12.5L11.9833 8.12501V4.16834ZM8.62418 7.51751L8.84918 7.70417V8.15417L8.44751 8.525L5.75418 8.50917V7.51751H8.62418ZM8.44501 5.28084L8.84918 5.65667V6.17417L8.60334 6.40334H5.75501V5.28084H8.44501Z" fill="white"></path>
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            {/* <!-- badge --> */}
                                                            
                                                            
                                                        </div>
                                                        <img src={collection.image} className="img-fluid img-scaleY rounded" alt=""/>
                                                        {/* <!--- actions --> */}
                                                        <div className="collection-btn border-0 d-flex gap-1 z-2">
                                                            {/* <!--- cta --> */}
                                                            <div className="flex">
                                                                <Link to="/mycollection" className="btn btn-primary "  role="button">View Collection</Link>
                                                            </div>
                                                            {/* <!--- share --> */}
                                                            <div className="dropdown d-block">
                                                                <a className="btn btn-editor btn-dark px-2" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
                                                                    <svg viewBox="0 0 25 24" fill="none" width="24" height="24">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.5303 7.53032C10.2374 7.82321 9.76256 7.82321 9.46967 7.53032C9.17678 7.23743 9.17678 6.76255 9.46967 6.46966L12.4697 3.46966L13 2.93933L13.5303 3.46966L16.5303 6.46966C16.8232 6.76255 16.8232 7.23743 16.5303 7.53032C16.2374 7.82321 15.7626 7.82321 15.4697 7.53032L13.75 5.81065V15C13.75 15.4142 13.4142 15.75 13 15.75C12.5858 15.75 12.25 15.4142 12.25 15V5.81065L10.5303 7.53032ZM9.625 11.75C8.58947 11.75 7.75 12.5895 7.75 13.625V16C7.75 17.2426 8.75736 18.25 10 18.25H16C17.2426 18.25 18.25 17.2426 18.25 16V13.625C18.25 12.5895 17.4105 11.75 16.375 11.75C15.9608 11.75 15.625 11.4142 15.625 11C15.625 10.5858 15.9608 10.25 16.375 10.25C18.239 10.25 19.75 11.761 19.75 13.625V16C19.75 18.0711 18.0711 19.75 16 19.75H10C7.92893 19.75 6.25 18.0711 6.25 16V13.625C6.25 11.761 7.76104 10.25 9.625 10.25C10.0392 10.25 10.375 10.5858 10.375 11C10.375 11.4142 10.0392 11.75 9.625 11.75Z" fill="currentColor"></path>
                                                                    </svg>
                                                                </a>
                                                                <div className="profile_menu">
                                                                    <div className="dropdown-menu redius card-bs card-border py-3" style={{"position": "absolute", "inset": "0px auto auto 0px", margin: "0px", transform: "translate(0px, 38px)"}} data-popper-placement="bottom-start">
                                                                        <div className="px-3">
                                                                            <h6 className="grayscale-200 fw-bold">Share link to this page</h6>
                                                                            <div className="social d-flex align-items-center gap-2 mt-3">
                                                                                {/* <!--- x --> */}
                                                                                <a className="d-inline-flex gap-2 link-secondary text-bg-bs card-border redius px-2 py-1" href="#!" role="button" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="X">
                                                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                                                                        <path d="M17.7512 4H20.818L14.1179 11.201L22 21H15.8284L10.9946 15.057L5.46359 21H2.39494L9.5613 13.2977L2 4H8.32828L12.6976 9.43215L17.7512 4ZM16.6748 19.2738H18.3742L7.4049 5.63549H5.58133L16.6748 19.2738Z" fill="currentColor"></path>
                                                                                    </svg>
                                                                                </a>
                                                                                <span className="vr disable-sm-screen"></span>
                                                                                {/* <!--- discord --> */}
                                                                                <a className="d-inline-flex gap-2 link-secondary text-bg-bs card-border redius px-2 py-1" href="#!" role="button" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Discord">
                                                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                                                                        <path d="M18.9308 5.32631C17.6561 4.71242 16.2892 4.26013 14.8599 4.00109C14.8339 3.99609 14.8079 4.00858 14.7945 4.03357C14.6187 4.36175 14.4239 4.78988 14.2876 5.12639C12.7503 4.88484 11.221 4.88484 9.71527 5.12639C9.57887 4.7824 9.37707 4.36175 9.20048 4.03357C9.18707 4.00941 9.16107 3.99692 9.13504 4.00109C7.70659 4.2593 6.33963 4.71159 5.06411 5.32631C5.05307 5.33131 5.04361 5.33965 5.03732 5.35047C2.44449 9.4161 1.73421 13.3818 2.08265 17.2983C2.08423 17.3175 2.09447 17.3358 2.10867 17.3475C3.81934 18.666 5.47642 19.4665 7.10273 19.9971C7.12876 20.0054 7.15634 19.9954 7.1729 19.9729C7.55761 19.4215 7.90054 18.8401 8.19456 18.2287C8.21192 18.1929 8.19535 18.1504 8.15989 18.1363C7.61594 17.9197 7.098 17.6557 6.59977 17.3558C6.56037 17.3317 6.55721 17.2725 6.59347 17.2442C6.69831 17.1617 6.80318 17.0759 6.9033 16.9893C6.92141 16.9735 6.94665 16.9701 6.96794 16.9801C10.2411 18.5486 13.7846 18.5486 17.0191 16.9801C17.0404 16.9693 17.0657 16.9726 17.0846 16.9885C17.1847 17.0751 17.2895 17.1617 17.3952 17.2442C17.4314 17.2725 17.4291 17.3317 17.3897 17.3558C16.8914 17.6615 16.3735 17.9197 15.8288 18.1354C15.7933 18.1496 15.7775 18.1929 15.7949 18.2287C16.0952 18.8393 16.4381 19.4207 16.8157 19.9721C16.8315 19.9954 16.8599 20.0054 16.8859 19.9971C18.5201 19.4665 20.1772 18.666 21.8879 17.3475C21.9028 17.3358 21.9123 17.3183 21.9139 17.2992C22.3309 12.7712 21.2154 8.83804 18.9568 5.3513C18.9513 5.33965 18.9419 5.33131 18.9308 5.32631ZM8.68335 14.9136C7.69792 14.9136 6.88594 13.964 6.88594 12.7979C6.88594 11.6317 7.68217 10.6822 8.68335 10.6822C9.69239 10.6822 10.4965 11.6401 10.4807 12.7979C10.4807 13.964 9.68451 14.9136 8.68335 14.9136ZM15.329 14.9136C14.3435 14.9136 13.5316 13.964 13.5316 12.7979C13.5316 11.6317 14.3278 10.6822 15.329 10.6822C16.338 10.6822 17.1421 11.6401 17.1264 12.7979C17.1264 13.964 16.338 14.9136 15.329 14.9136Z" fill="currentColor"></path>
                                                                                    </svg>
                                                                                </a>
                                                                                <span className="vr disable-sm-screen"></span>
                                                                                {/* <!--- instagram --> */}
                                                                                <a className="d-inline-flex gap-2 link-secondary text-bg-bs card-border redius px-2 py-1" href="#!" role="button" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Instagram">
                                                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                                                                        <path d="M11.999 7.37688C9.44495 7.37688 7.37595 9.44688 7.37595 11.9999C7.37595 14.5539 9.44495 16.6239 11.999 16.6239C14.551 16.6239 16.622 14.5539 16.622 11.9999C16.622 9.44688 14.551 7.37688 11.999 7.37688ZM11.999 15.0039C10.34 15.0039 8.99495 13.6589 8.99495 12.0009C8.99495 10.3419 10.34 8.99788 11.999 8.99788C13.658 8.99788 15.001 10.3419 15.001 12.0009C15.001 13.6589 13.658 15.0039 11.999 15.0039Z" fill="currentColor"></path>
                                                                                        <path d="M16.806 8.28488C17.4013 8.28488 17.884 7.80225 17.884 7.20688C17.884 6.61152 17.4013 6.12888 16.806 6.12888C16.2106 6.12888 15.728 6.61152 15.728 7.20688C15.728 7.80225 16.2106 8.28488 16.806 8.28488Z" fill="currentColor"></path>
                                                                                        <path d="M20.533 6.11088C20.064 4.90188 19.109 3.94588 17.9 3.47888C17.201 3.21588 16.462 3.07488 15.714 3.05888C14.751 3.01688 14.446 3.00488 12.004 3.00488C9.56195 3.00488 9.24895 3.00488 8.29395 3.05888C7.54795 3.07388 6.80895 3.21488 6.10995 3.47888C4.89995 3.94588 3.94495 4.90188 3.47695 6.11088C3.21395 6.81088 3.07295 7.54888 3.05795 8.29688C3.01495 9.25888 3.00195 9.56388 3.00195 12.0069C3.00195 14.4489 3.00195 14.7599 3.05795 15.7169C3.07295 16.4649 3.21395 17.2029 3.47695 17.9039C3.94595 19.1119 4.90095 20.0679 6.11095 20.5359C6.80695 20.8079 7.54595 20.9619 8.29595 20.9859C9.25895 21.0279 9.56395 21.0409 12.006 21.0409C14.448 21.0409 14.761 21.0409 15.716 20.9859C16.463 20.9709 17.202 20.8289 17.902 20.5669C19.111 20.0979 20.066 19.1429 20.535 17.9339C20.798 17.2339 20.939 16.4959 20.954 15.7479C20.997 14.7859 21.01 14.4809 21.01 12.0379C21.01 9.59488 21.01 9.28488 20.954 8.32788C20.941 7.56988 20.801 6.81888 20.533 6.11088ZM19.315 15.6429C19.308 16.2189 19.204 16.7899 19.004 17.3309C18.699 18.1179 18.078 18.7399 17.292 19.0419C16.757 19.2409 16.193 19.3449 15.622 19.3529C14.672 19.3969 14.404 19.4079 11.968 19.4079C9.52995 19.4079 9.28095 19.4079 8.31295 19.3529C7.74395 19.3459 7.17795 19.2409 6.64395 19.0419C5.85495 18.7409 5.22995 18.1189 4.92495 17.3309C4.72895 16.7969 4.62295 16.2319 4.61395 15.6619C4.57095 14.7119 4.56095 14.4439 4.56095 12.0079C4.56095 9.57088 4.56095 9.32188 4.61395 8.35288C4.62095 7.77688 4.72495 7.20688 4.92495 6.66588C5.22995 5.87688 5.85495 5.25588 6.64395 4.95388C7.17795 4.75588 7.74395 4.65088 8.31295 4.64288C9.26395 4.59988 9.53095 4.58788 11.968 4.58788C14.405 4.58788 14.655 4.58788 15.622 4.64288C16.193 4.64988 16.757 4.75488 17.292 4.95388C18.078 5.25688 18.699 5.87888 19.004 6.66588C19.2 7.19988 19.306 7.76488 19.315 8.33488C19.358 9.28588 19.369 9.55288 19.369 11.9899C19.369 14.4259 19.369 14.6879 19.326 15.6439H19.315V15.6429Z" fill="currentColor"></path>
                                                                                    </svg>
                                                                                </a>
                                                                                <span className="vr disable-sm-screen"></span>
                                                                                {/* <!--- link --> */}
                                                                                <a className="d-inline-flex gap-2 link-secondary text-bg-bs card-border redius px-2 py-1" href="#!" role="button" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Copy">
                                                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                                                                        <path d="M18.6693 5.33057C16.8144 3.47558 13.8068 3.47558 11.9518 5.33057L10.8912 6.39123C10.5983 6.68413 10.5983 7.159 10.8912 7.45189C11.1841 7.74479 11.6589 7.74479 11.9518 7.45189L13.0125 6.39123C14.2817 5.12203 16.3395 5.12203 17.6087 6.39123C18.8779 7.66044 18.8779 9.71822 17.6087 10.9874L15.4874 13.1087C14.2182 14.378 12.1604 14.378 10.8912 13.1087C10.5983 12.8159 10.1234 12.8159 9.83051 13.1087C9.53762 13.4016 9.53762 13.8765 9.83051 14.1694C11.6855 16.0244 14.693 16.0244 16.548 14.1694L18.6693 12.0481C20.5243 10.1931 20.5243 7.18556 18.6693 5.33057Z" fill="currentColor"></path>
                                                                                        <path d="M14.1695 9.83057C12.3145 7.97558 9.30701 7.97558 7.45202 9.83057L5.3307 11.9519C3.47571 13.8069 3.47571 16.8144 5.3307 18.6694C7.18569 20.5244 10.1932 20.5244 12.0482 18.6694C12.3411 18.3765 12.3411 17.9016 12.0482 17.6087C11.7553 17.3159 11.2804 17.3159 10.9875 17.6087C9.71835 18.878 7.66056 18.878 6.39136 17.6087C5.12215 16.3395 5.12215 14.2818 6.39136 13.0126L8.51268 10.8912C9.78188 9.62203 11.8397 9.62203 13.1089 10.8912C13.4018 11.1841 13.8766 11.1841 14.1695 10.8912C14.4624 10.5983 14.4624 10.1235 14.1695 9.83057Z" fill="currentColor"></path>
                                                                                    </svg>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* <!--- more --> */}
                                                            <div className="dropdown d-block">
                                                                {/* <!-- icon --> */}
                                                                <a className="btn btn-editor btn-dark px-2" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
                                                                    <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.5 12C8.5 12.8284 7.82843 13.5 7 13.5C6.17157 13.5 5.5 12.8284 5.5 12C5.5 11.1716 6.17157 10.5 7 10.5C7.82843 10.5 8.5 11.1716 8.5 12ZM13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12ZM16.999 13.5C17.8274 13.5 18.499 12.8284 18.499 12C18.499 11.1716 17.8274 10.5 16.999 10.5C16.1706 10.5 15.499 11.1716 15.499 12C15.499 12.8284 16.1706 13.5 16.999 13.5Z" fill="currentColor"></path>
                                                                    </svg>
                                                                </a>
                                                                {/* <!-- dropdown menu --> */}
                                                                <div className="profile_menu">
                                                                    <div className="dropdown-menu redius card-bs card-border p-2" data-popper-placement="bottom-end" style={{"position": "absolute", "inset": "0px auto auto 0px", margin: "0px", transform: "translate(0px, 38px)"}}>
                                                                        {/* <!-- link --> */}
                                                                        <a className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2" href="#!" role="button">
                                                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                                                <path d="M20.5398 19.0398C20.3898 19.1898 20.1998 19.2598 20.0098 19.2598C19.8198 19.2598 19.6298 19.1898 19.4798 19.0398L14.5298 14.0898L15.0598 13.5598L15.5898 13.0298L20.5398 17.9798C20.8298 18.2698 20.8298 18.7498 20.5398 19.0398Z" fill="currentColor"></path>
                                                                                <path opacity="0.4" d="M6.46987 9.28009L12.2699 15.0801C12.6599 15.4701 12.6599 16.1001 12.2699 16.4901L11.3699 17.4001C10.5599 18.2001 9.27986 18.2001 8.47986 17.4001L4.13986 13.0601C3.34986 12.2701 3.34986 10.9801 4.13986 10.1801L5.04987 9.27009C5.43987 8.89009 6.07986 8.89009 6.46987 9.28009Z" fill="currentColor"></path>
                                                                                <path d="M18.59 10.1899L14.78 13.9899C14.38 14.3899 13.74 14.3899 13.34 13.9899L7.57002 8.21994C7.17002 7.81994 7.17002 7.17994 7.57002 6.77994L11.38 2.96994C12.17 2.17994 13.46 2.17994 14.26 2.96994L18.6 7.30994C19.38 8.09994 19.38 9.37994 18.59 10.1899Z" fill="currentColor"></path>
                                                                                <path d="M8 21.75H2C1.59 21.75 1.25 21.41 1.25 21C1.25 20.59 1.59 20.25 2 20.25H8C8.41 20.25 8.75 20.59 8.75 21C8.75 21.41 8.41 21.75 8 21.75Z" fill="currentColor"></path>
                                                                            </svg>
                                                                            Claim ownership
                                                                        </a>
                                                                        {/* <!-- link --> */}
                                                                        <a className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2" href="#!" role="button">
                                                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                                                <path d="M6.4502 22C6.0402 22 5.7002 21.66 5.7002 21.25V2.75C5.7002 2.34 6.0402 2 6.4502 2C6.8602 2 7.2002 2.34 7.2002 2.75V21.25C7.2002 21.66 6.8602 22 6.4502 22Z" fill="currentColor"></path>
                                                                                <path opacity="0.4" d="M15.2001 7.16004L7.10008 3.66004C6.98008 3.60004 6.85008 3.62004 6.74008 3.69004C6.64008 3.76004 6.58008 3.87004 6.58008 4.00004V17C6.58008 17.13 6.65008 17.25 6.76008 17.32C6.82008 17.36 6.89008 17.38 6.96008 17.38C7.02008 17.38 7.07008 17.37 7.13008 17.34L15.4301 13.24C15.4301 13.24 15.4301 13.24 15.4401 13.24C17.1001 12.38 17.9901 11.27 17.9401 10.1C17.8801 8.92004 16.9101 7.88004 15.2001 7.16004Z" fill="currentColor"></path>
                                                                            </svg>
                                                                            Report page
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!--- content --> */}
                                                   {nfts && nfts.map((e) =>{
                                                    return (
                                                         <div className="nft-card-body d-sm-flex mt-2">
                                                        {/* <!--- collection info --> */}
                                                        <div className="col-md-7">
                                                            <div className="d-flex gap-3 mb-4">
                
                                                                {/* <!--- assets --> */}
                                                                <div className="collection-img md animation-2">
                                                                    <img className="" src={e.image} alt=""/>
                                                                </div>
                                                                {/* <!--- meta --> */}
                                                                <div className="d-grid align-items-start">
                                                                    {/* <!--- collection name --> */}
                                                                    <div className="d-flex align-items-center gap-2">

                                                                        {/* <!--- title --> */}
                                                                        <a  className="fs-4 fw-bold grayscale-200 link-secondary text-truncate mb-1">
                                                                            {e.name}
                                                                        </a>
                                                                        {/* <!--- verified badge --> */}
                                                                        <div className="text-primary" 
                                                                            data-bs-toggle="popover" 
                                                                            data-bs-trigger="hover " 
                                                                            data-bs-custom-class="custom-popover"
                                                                            data-bs-content="⚠︎ Disclaimer: Verification is not an endorsement of the project in any way from our store.">
                                                                            <svg width="20" height="20" viewBox="0 0 20 22" fill="none">
                                                                                <path fillRule="evenodd" clipRule="evenodd" d="M11.513 1.94254C11.2246 0.237905 8.77552 0.237904 8.48715 1.94254C8.2805 3.16417 6.78595 3.64978 5.9007 2.78292C4.66545 1.57334 2.6841 3.01289 3.45276 4.56146C4.00363 5.67125 3.07995 6.94258 1.85425 6.76162C0.143939 6.50911 -0.612873 8.83834 0.919219 9.63935C2.0172 10.2134 2.0172 11.7849 0.919218 12.3589C-0.612874 13.1599 0.143939 15.4891 1.85425 15.2366C3.07995 15.0557 4.00363 16.327 3.45276 17.4368C2.6841 18.9854 4.66546 20.4249 5.9007 19.2153C6.78595 18.3485 8.2805 18.8341 8.48715 20.0557C8.77552 21.7603 11.2246 21.7603 11.513 20.0557C11.7196 18.8341 13.2142 18.3485 14.0994 19.2153C15.3347 20.4249 17.316 18.9854 16.5474 17.4368C15.9965 16.327 16.9202 15.0557 18.1459 15.2366C19.8562 15.4891 20.613 13.1599 19.0809 12.3589C17.9829 11.7849 17.9829 10.2134 19.0809 9.63935C20.613 8.83834 19.8562 6.50911 18.1459 6.76162C16.9202 6.94258 15.9965 5.67125 16.5474 4.56146C17.316 3.01289 15.3347 1.57334 14.0994 2.78292C13.2142 3.64978 11.7196 3.16417 11.513 1.94254ZM8.29287 13.6601C8.22746 13.5947 8.173 13.5225 8.1295 13.4457L6.70708 12.0233C6.31656 11.6328 6.31656 10.9996 6.70708 10.6091C7.09761 10.2186 7.73077 10.2186 8.1213 10.6091L9.02548 11.5133L12.2462 8.29262C12.6367 7.9021 13.2698 7.9021 13.6604 8.29262C14.0509 8.68315 14.0509 9.31631 13.6604 9.70684L9.70708 13.6601C9.31656 14.0506 8.6834 14.0506 8.29287 13.6601Z" fill="currentColor"></path>
                                                                            </svg>
                                                                        </div>
                                                                        {/* <!--- royalties badge --> */}
                                                                        <div className="text-warning" 
                                                                            data-bs-toggle="tooltip" 
                                                                            data-bs-html="true" 
                                                                            data-bs-title="<em> This project is receiving </em> <u> 8% royalties </u> <em> which goes back to the creator with each sale! </em>">
                                                                            <svg width="20" height="20" viewBox="0 0 30 30" fill="none">
                                                                                <path fillRule="evenodd" clipRule="evenodd" d="M17.1433 2.16984C16.7348 -0.245051 13.2652 -0.245051 12.8567 2.16984C12.564 3.90049 10.4467 4.58843 9.19258 3.36039C7.44265 1.64682 4.63572 3.68617 5.72466 5.87998C6.50506 7.45219 5.19651 9.25325 3.46011 8.99688C1.03717 8.63916 -0.0349846 11.9389 2.13548 13.0737C3.69095 13.8869 3.69095 16.1131 2.13548 16.9264C-0.0349855 18.0611 1.03717 21.3609 3.4601 21.0031C5.19651 20.7468 6.50506 22.5478 5.72466 24.12C4.63572 26.3139 7.44265 28.3532 9.19258 26.6396C10.4467 25.4116 12.564 26.0995 12.8567 27.8302C13.2652 30.2451 16.7348 30.2451 17.1433 27.8302C17.4361 26.0995 19.5533 25.4116 20.8074 26.6396C22.5574 28.3532 25.3643 26.3139 24.2753 24.12C23.495 22.5478 24.8035 20.7468 26.5399 21.0031C28.9628 21.3609 30.035 18.0611 27.8645 16.9264C26.3091 16.1131 26.3091 13.8869 27.8645 13.0737C30.035 11.9389 28.9628 8.63916 26.5399 8.99688C24.8035 9.25325 23.495 7.45219 24.2753 5.87998C25.3643 3.68617 22.5574 1.64682 20.8074 3.36039C19.5533 4.58843 17.4361 3.90049 17.1433 2.16984ZM8.20826 13.4165C8.24134 13.4165 8.27406 13.415 8.30638 13.4121C8.28934 13.6086 8.38845 13.9437 8.54121 14.4602L9.62551 18.1266C9.68674 18.3336 9.71735 18.4371 9.79721 18.4967C9.87707 18.5564 9.98501 18.5564 10.2009 18.5564H14.4668H15.5879H19.8538C20.0697 18.5564 20.1776 18.5564 20.2575 18.4967C20.3374 18.4371 20.368 18.3336 20.4292 18.1266L21.5135 14.4602C21.6653 13.9468 21.7642 13.6126 21.7486 13.4157C21.7631 13.4162 21.7776 13.4165 21.7922 13.4165C22.3905 13.4165 22.8755 12.9315 22.8755 12.3333C22.8755 11.735 22.3905 11.25 21.7922 11.25C21.194 11.25 20.709 11.735 20.709 12.3333C20.709 12.7502 20.9446 13.1121 21.2899 13.2932C21.1139 13.3939 20.8822 13.5738 20.5701 13.8162L18.336 15.5513C18.0626 15.7637 17.9259 15.8699 17.7857 15.8362C17.6454 15.8025 17.5719 15.6458 17.4248 15.3324L15.5773 11.3958C15.5544 11.3468 15.5326 11.3003 15.5117 11.2562C15.8706 11.0798 16.1177 10.7105 16.1177 10.2835C16.1177 9.6852 15.6327 9.20021 15.0344 9.20021C14.4362 9.20021 13.9512 9.6852 13.9512 10.2835C13.9512 10.7103 14.198 11.0795 14.5568 11.256C14.5359 11.3002 14.514 11.3468 14.491 11.3958L12.6399 15.3402C12.4928 15.6536 12.4193 15.8103 12.2791 15.844C12.1389 15.8777 12.0021 15.7715 11.7287 15.5591L9.4846 13.8162C9.15645 13.5613 8.91718 13.3755 8.7381 13.2783C9.06838 13.0928 9.29152 12.7391 9.29152 12.3333C9.29152 11.735 8.80653 11.25 8.20826 11.25C7.61 11.25 7.12501 11.735 7.12501 12.3333C7.12501 12.9315 7.61 13.4165 8.20826 13.4165ZM10.05 19.543C9.88432 19.543 9.75001 19.6773 9.75001 19.843V20.9178C9.75001 21.0835 9.88432 21.2178 10.05 21.2178H20.005C20.1707 21.2178 20.305 21.0835 20.305 20.9178V19.843C20.305 19.6773 20.1707 19.543 20.005 19.543H10.05Z" fill="currentColor"></path>
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    {/* <!--- meta --> */}
                                                                    <div className="d-flex align-items-center gap-3 mb-2">
                                                                        
                                                                        {/* <!--- on chain --> */}
                                                                        <span className="d-flex align-items-center gap-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="The metadata for this collection is stored entirely on-chain and cannot be modified.">
                                                                            <svg width="16" height="16" fill="none" stroke="#857f94" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" color="#857f94">
                                                                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                                                                <rect width="14" height="10" x="5" y="11" rx="2"></rect>
                                                                                <circle cx="12" cy="16" r="1"></circle>
                                                                                <path d="M8 11V7a4 4 0 018 0v4"></path>
                                                                            </svg>
                                                                            <span className="p link-secondary grayscale-300 mb-0">On Chain</span>
                                                                        </span>
                                                                        <span className="vr"></span>
                                                                        {/* <!--- star collection --> */}
                                                                        <span className="d-flex align-items-center gap-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Star collection to add it to your watchlist.">
                                                                            <svg className="favme active" width="15" height="15" viewBox="0 0 16 16" stroke="currentColor" fill="currentColor" strokeWidth="0.5">
                                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"></path>
                                                                            </svg>
                                                                        </span>
                                                                        {/* <!--- info --> */}
                                                                        <div className="flex grayscale-600 link-secondary" 
                                                                            data-bs-toggle="popover" 
                                                                            data-bs-trigger="hover " 
                                                                            data-bs-custom-class="custom-popover"
                                                                            data-bs-title="Apex Legends"
                                                                            data-bs-content="Digital art Original Collection features 10,000 characters created by Co-Founder and renowned artist, Burnt Toast Each NFT has 20,000 copies for a total of 600k items.">
                                                                            <svg width="18" height="18" viewBox="0 -960 960 960">
                                                                                <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" fill="currentColor"></path>
                                                                            </svg>
                                                                        </div>

                                                                    </div>
                                                                    {/* <!--- metadata --> */}
                                                                    <div className="filter-wrapper align-items-center gap-1 mb-2">
                                                                        {/* <!--- author --> */}
                                                                        <a className="d-inline-flex align-items-center meta text-xs gap-1 text-bg-bs card-border redius px-2 py-1 z-2" href="user-single.html" role="button">
                                                                            By
                                                                            <span className="d-flex align-items-center gap-1">
                                                                                <img className="circle card-border" src="images/user/RENGA.gif" alt="" width="18"/>
                                                                                <span className="meta text-truncate text-xs text-link grayscale-100 mb-0" style={{"maxWidth": "180px"}}>
                                                                                    RENGA-inc
                                                                                </span>
                                                                            </span>
                                                                            <span className="d-flex align-items-center">
                                                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                                                    <path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="var(--brand-color)"></path>
                                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="rgb(25, 28, 31)"></path>
                                                                                </svg>
                                                                            </span>
                                                                        </a>
                                                                        {/* <!--- editions --> */}
                                                                        <button className="d-inline-flex gap-2 text-bg-bs card-border redius px-2 py-1 z-2" type="button">
                                                                            <span className="d-flex align-items-center gap-2">
                                                                                <svg width="18" height="18" viewBox="0 -960 960 960">
                                                                                    <path d="M480-400 40-640l440-240 440 240-440 240Zm0 160L63-467l84-46 333 182 333-182 84 46-417 227Zm0 160L63-307l84-46 333 182 333-182 84 46L480-80Z" fill="currentColor"></path>
                                                                                </svg>
                                                                                <span className="meta text-xs text-link grayscale-100 mb-0">600,000</span>
                                                                            </span>
                                                                        </button>
                                                                        {/* <!--- categories --> */}
                                                                        <a className="d-inline-flex gap-2 text-bg-bs card-border redius px-2 py-1 z-2" href="#">
                                                                            <span className="meta text-xs text-link grayscale-100 mb-0">Gaming</span>
                                                                        </a>
                                                                        {/* <!--- launched --> */}
                                                                        <a className="d-inline-flex gap-2 text-bg-bs card-border redius px-2 py-1 z-2" href="#!" role="button" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Launched : September 24, 2022">
                                                                            <span className="meta text-xs text-link grayscale-100 mb-0">Sep 2022</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                
                                                            </div>
                                                        </div>
                                                        {/* <!--- metadata --> */}
                                                        <div className="col-md-5">
                
                                                            {/* <!--- statistics --> */}
                                                            <div className="filter-wrapper justify-content-between card-bs card-border p-2 text-sm mb-2">
                                                                {/* <!--- floor --> */}
                                                                <div className="d-grid gap-3">
                                                                    <span className="fw-medium grayscale-500">Floor price</span>
                                                                    <span className="grayscale-100">{e.saleprice} ETH</span>
                                                                </div>
                                                                {/* <!--- offer --> */}
                                                                <div className="d-grid gap-3">
                                                                    <span className="fw-medium grayscale-500">Best offer</span>
                                                                    <span className="grayscale-100">{e.discount} ETH</span>
                                                                </div>
                                                                {/* <!--- volume --> */}
                                                                <div className="d-grid gap-3 disable-sm-screen">
                                                                    <span className="fw-medium grayscale-500">Total volume</span>
                                                                    <span className="grayscale-100">960.20 ETH</span>
                                                                </div>
                                                                {/* <!--- owners --> */}
                                                                <div className="d-grid gap-3">
                                                                    <span className="fw-medium grayscale-500">Owners (Unique)</span>
                                                                    <span className="grayscale-100">2,678 <span className="text-xs grayscale-500">(32.1%)</span></span>
                                                                </div>
                                                                {/* <!--- listed --> */}
                                                                <div className="d-grid gap-3">
                                                                    <span className="fw-medium grayscale-500">Listed</span>
                                                                    <span className="grayscale-100">3.45%</span>
                                                                </div>
                                                            </div>
                                                            {/* <!--- meta --> */}
                                                            <div className="d-inline-flex align-items-center card-bs-tabs ps-2 ps-sm-3 pe-1 py-1 text-sm">
                                                                <div className="d-flex align-items-center gap-2 z-2">
                                                                    <span className="fw-medium meta grayscale-500 disable-sm-screen mb-0">Address : </span>
                                                                    <a className="d-flex align-items-center grayscale-300 link-secondary fw-medium" href="#">
                                                                        
                                                                        <span className="meta mb-0">0xed5...c544</span>
                                                                        <span className="grayscale-600 px-1 text-link" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Copy">
                                                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.15556 5C6.8605 5 5 6.8605 5 9.15556V12.48C5 14.5149 6.46269 16.2083 8.39406 16.566C8.75174 18.4974 10.4451 19.96 12.48 19.96H15.8044C18.0995 19.96 19.96 18.0995 19.96 15.8044V12.48C19.96 10.4451 18.4974 8.75174 16.566 8.39406C16.2083 6.46269 14.5149 5 12.48 5H9.15556ZM14.8315 8.32444C14.4892 7.35604 13.5657 6.66222 12.48 6.66222H9.15556C7.77853 6.66222 6.66222 7.77853 6.66222 9.15556V12.48C6.66222 13.5657 7.35603 14.4892 8.32444 14.8315V12.48C8.32444 10.1849 10.1849 8.32444 12.48 8.32444H14.8315ZM9.98667 12.48C9.98667 11.103 11.103 9.98667 12.48 9.98667H15.8044C17.1814 9.98667 18.2978 11.103 18.2978 12.48V15.8044C18.2978 17.1814 17.1814 18.2978 15.8044 18.2978H12.48C11.103 18.2978 9.98667 17.1814 9.98667 15.8044V12.48Z" fill="currentColor"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                                <span className="vr mx-2 mx-sm-4"></span>
                                                                <div className="social d-flex align-items-center gap-2 z-2">
                                                                    {/* <!--- website --> */}
                                                                    <a className="d-inline-flex gap-2 link-secondary text-bg-bs card-border redius px-2 py-1" href="#!" role="button">
                                                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                                                            <path fillRule="evenodd" clipRule="evenodd" d="M4.68131 11.1818H7.95007C8.13351 8.92103 8.89017 6.75089 10.1392 4.8735C7.22902 5.63125 5.01928 8.12447 4.68131 11.1818ZM12 5.08702C10.6339 6.84704 9.7981 8.96195 9.59257 11.1818H14.4074C14.2019 8.96195 13.3661 6.84704 12 5.08702ZM14.4074 12.8182C14.2019 15.038 13.3661 17.153 12 18.913C10.6339 17.153 9.7981 15.038 9.59257 12.8182H14.4074ZM7.95007 12.8182H4.68131C5.01928 15.8755 7.22902 18.3687 10.1392 19.1265C8.89017 17.2491 8.13351 15.079 7.95007 12.8182ZM13.8608 19.1265C15.1098 17.2491 15.8665 15.079 16.0499 12.8182H19.3187C18.9807 15.8755 16.771 18.3687 13.8608 19.1265ZM19.3187 11.1818H16.0499C15.8665 8.92103 15.1098 6.75089 13.8608 4.8735C16.771 5.63125 18.9807 8.12447 19.3187 11.1818ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" fill="currentColor"></path>
                                                                        </svg>
                                                                    </a>
                                                                    <span className="vr disable-sm-screen"></span>
                                                                    {/* <!--- x --> */}
                                                                    <a className="d-inline-flex gap-2 link-secondary text-bg-bs card-border redius px-2 py-1" href="#!" role="button">
                                                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                                                            <path d="M17.7512 4H20.818L14.1179 11.201L22 21H15.8284L10.9946 15.057L5.46359 21H2.39494L9.5613 13.2977L2 4H8.32828L12.6976 9.43215L17.7512 4ZM16.6748 19.2738H18.3742L7.4049 5.63549H5.58133L16.6748 19.2738Z" fill="currentColor"></path>
                                                                        </svg>
                                                                    </a>
                                                                    <span className="vr disable-sm-screen"></span>
                                                                    {/* <!--- discord --> */}
                                                                    <a className="d-inline-flex gap-2 link-secondary text-bg-bs card-border redius px-2 py-1" href="#!" role="button">
                                                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                                                            <path d="M18.9308 5.32631C17.6561 4.71242 16.2892 4.26013 14.8599 4.00109C14.8339 3.99609 14.8079 4.00858 14.7945 4.03357C14.6187 4.36175 14.4239 4.78988 14.2876 5.12639C12.7503 4.88484 11.221 4.88484 9.71527 5.12639C9.57887 4.7824 9.37707 4.36175 9.20048 4.03357C9.18707 4.00941 9.16107 3.99692 9.13504 4.00109C7.70659 4.2593 6.33963 4.71159 5.06411 5.32631C5.05307 5.33131 5.04361 5.33965 5.03732 5.35047C2.44449 9.4161 1.73421 13.3818 2.08265 17.2983C2.08423 17.3175 2.09447 17.3358 2.10867 17.3475C3.81934 18.666 5.47642 19.4665 7.10273 19.9971C7.12876 20.0054 7.15634 19.9954 7.1729 19.9729C7.55761 19.4215 7.90054 18.8401 8.19456 18.2287C8.21192 18.1929 8.19535 18.1504 8.15989 18.1363C7.61594 17.9197 7.098 17.6557 6.59977 17.3558C6.56037 17.3317 6.55721 17.2725 6.59347 17.2442C6.69831 17.1617 6.80318 17.0759 6.9033 16.9893C6.92141 16.9735 6.94665 16.9701 6.96794 16.9801C10.2411 18.5486 13.7846 18.5486 17.0191 16.9801C17.0404 16.9693 17.0657 16.9726 17.0846 16.9885C17.1847 17.0751 17.2895 17.1617 17.3952 17.2442C17.4314 17.2725 17.4291 17.3317 17.3897 17.3558C16.8914 17.6615 16.3735 17.9197 15.8288 18.1354C15.7933 18.1496 15.7775 18.1929 15.7949 18.2287C16.0952 18.8393 16.4381 19.4207 16.8157 19.9721C16.8315 19.9954 16.8599 20.0054 16.8859 19.9971C18.5201 19.4665 20.1772 18.666 21.8879 17.3475C21.9028 17.3358 21.9123 17.3183 21.9139 17.2992C22.3309 12.7712 21.2154 8.83804 18.9568 5.3513C18.9513 5.33965 18.9419 5.33131 18.9308 5.32631ZM8.68335 14.9136C7.69792 14.9136 6.88594 13.964 6.88594 12.7979C6.88594 11.6317 7.68217 10.6822 8.68335 10.6822C9.69239 10.6822 10.4965 11.6401 10.4807 12.7979C10.4807 13.964 9.68451 14.9136 8.68335 14.9136ZM15.329 14.9136C14.3435 14.9136 13.5316 13.964 13.5316 12.7979C13.5316 11.6317 14.3278 10.6822 15.329 10.6822C16.338 10.6822 17.1421 11.6401 17.1264 12.7979C17.1264 13.964 16.338 14.9136 15.329 14.9136Z" fill="currentColor"></path>
                                                                        </svg>
                                                                    </a>
                                                                    <span className="vr disable-sm-screen"></span>
                                                                    {/* <!--- instagram --> */}
                                                                    <a className="d-inline-flex gap-2 link-secondary text-bg-bs card-border redius px-2 py-1" href="#!" role="button">
                                                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                                                            <path d="M11.999 7.37688C9.44495 7.37688 7.37595 9.44688 7.37595 11.9999C7.37595 14.5539 9.44495 16.6239 11.999 16.6239C14.551 16.6239 16.622 14.5539 16.622 11.9999C16.622 9.44688 14.551 7.37688 11.999 7.37688ZM11.999 15.0039C10.34 15.0039 8.99495 13.6589 8.99495 12.0009C8.99495 10.3419 10.34 8.99788 11.999 8.99788C13.658 8.99788 15.001 10.3419 15.001 12.0009C15.001 13.6589 13.658 15.0039 11.999 15.0039Z" fill="currentColor"></path>
                                                                            <path d="M16.806 8.28488C17.4013 8.28488 17.884 7.80225 17.884 7.20688C17.884 6.61152 17.4013 6.12888 16.806 6.12888C16.2106 6.12888 15.728 6.61152 15.728 7.20688C15.728 7.80225 16.2106 8.28488 16.806 8.28488Z" fill="currentColor"></path>
                                                                            <path d="M20.533 6.11088C20.064 4.90188 19.109 3.94588 17.9 3.47888C17.201 3.21588 16.462 3.07488 15.714 3.05888C14.751 3.01688 14.446 3.00488 12.004 3.00488C9.56195 3.00488 9.24895 3.00488 8.29395 3.05888C7.54795 3.07388 6.80895 3.21488 6.10995 3.47888C4.89995 3.94588 3.94495 4.90188 3.47695 6.11088C3.21395 6.81088 3.07295 7.54888 3.05795 8.29688C3.01495 9.25888 3.00195 9.56388 3.00195 12.0069C3.00195 14.4489 3.00195 14.7599 3.05795 15.7169C3.07295 16.4649 3.21395 17.2029 3.47695 17.9039C3.94595 19.1119 4.90095 20.0679 6.11095 20.5359C6.80695 20.8079 7.54595 20.9619 8.29595 20.9859C9.25895 21.0279 9.56395 21.0409 12.006 21.0409C14.448 21.0409 14.761 21.0409 15.716 20.9859C16.463 20.9709 17.202 20.8289 17.902 20.5669C19.111 20.0979 20.066 19.1429 20.535 17.9339C20.798 17.2339 20.939 16.4959 20.954 15.7479C20.997 14.7859 21.01 14.4809 21.01 12.0379C21.01 9.59488 21.01 9.28488 20.954 8.32788C20.941 7.56988 20.801 6.81888 20.533 6.11088ZM19.315 15.6429C19.308 16.2189 19.204 16.7899 19.004 17.3309C18.699 18.1179 18.078 18.7399 17.292 19.0419C16.757 19.2409 16.193 19.3449 15.622 19.3529C14.672 19.3969 14.404 19.4079 11.968 19.4079C9.52995 19.4079 9.28095 19.4079 8.31295 19.3529C7.74395 19.3459 7.17795 19.2409 6.64395 19.0419C5.85495 18.7409 5.22995 18.1189 4.92495 17.3309C4.72895 16.7969 4.62295 16.2319 4.61395 15.6619C4.57095 14.7119 4.56095 14.4439 4.56095 12.0079C4.56095 9.57088 4.56095 9.32188 4.61395 8.35288C4.62095 7.77688 4.72495 7.20688 4.92495 6.66588C5.22995 5.87688 5.85495 5.25588 6.64395 4.95388C7.17795 4.75588 7.74395 4.65088 8.31295 4.64288C9.26395 4.59988 9.53095 4.58788 11.968 4.58788C14.405 4.58788 14.655 4.58788 15.622 4.64288C16.193 4.64988 16.757 4.75488 17.292 4.95388C18.078 5.25688 18.699 5.87888 19.004 6.66588C19.2 7.19988 19.306 7.76488 19.315 8.33488C19.358 9.28588 19.369 9.55288 19.369 11.9899C19.369 14.4259 19.369 14.6879 19.326 15.6439H19.315V15.6429Z" fill="currentColor"></path>
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                
                                                        </div>
                                                    </div>
                                                    )
                                                   })}

                                                </div>
                                            </div>
                                            

                                        </div>

                    
                                    </div>
                                </div>
                                {/* <!-- art tab --> */}
                                
                    </div>
                            ) :(
                                <p>No collection data available.</p>
                            )
                        })
           </div>
    </div></div>
  )
}

export default CollectionDetail