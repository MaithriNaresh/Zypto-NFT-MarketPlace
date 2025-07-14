import Navbar from "./Componets/Navbar";
import Footer from "./Componets/Footer";
import { useEffect } from "react";
import useThemeToggle from "./Componets/UseThemeToggle";
import axios  from 'axios';
import { useState } from "react";
const Home = () => {
  const [nft , setNFT] = useState();
  useThemeToggle();
  const fetchNFT = async() =>{
    const response = await axios.get(`http://localhost:6363/getnft`);
    console.log(response.data)
    setNFT(response.data);
  }

  

  useEffect(()=>{
    fetchNFT();
  },[])
  return (
    <>
      
      <Navbar></Navbar>

      <section className="container-fluid mt-5 pt-2" id="home">
        {/* <!-- Hero --> */}
        <div className="container-fluid card slider-3 color1 mt-3 p-0 pt-4">
          <div className="container section-1600x d-sm-flex justify-content-between align-items-center gap-5">
            {/* <!-- assets --> */}
            <div className="col-md-5 mb-5 mb-sm-0" id="second">
              <div className="flex bounce">
                <img src="images/features/nft.png" alt="" width="680" />
              </div>
              <div className="flex position-relative">
                <img
                  className="position-absolute infinite-rotate bottom-0 start-50"
                  src="images/slider/circle-txt.png"
                  alt=""
                  width="130"
                />
              </div>
            </div>

            {/* <!-- content --> */}
            <div className="flex" id="first">
              {/* <!-- osmo text --> */}
              <div className="looping-words lg">
                <div className="looping-words-containers">
                  <div
                    data-looping-words-list=""
                    className="looping-words-list"
                  >
                    <div className="looping-words-list">
                      <div className="looping-words-p">Gaming</div>
                    </div>
                    <div className="looping-words-list">
                      <div className="looping-words-p">Anime IP</div>
                    </div>
                    <div className="looping-words-list">
                      <div className="looping-words-p">PFPs</div>
                    </div>
                    <div className="looping-words-list">
                      <div className="looping-words-p">Artwork</div>
                    </div>
                    <div className="looping-words-list">
                      <div className="looping-words-p">Collection</div>
                    </div>
                  </div>
                </div>
                <div className="looping-words-fade"></div>
                <div
                  data-looping-words-selector=""
                  className="looping-words-selector"
                >
                  <div className="looping-words-edge"></div>
                  <div className="looping-words-edge is--2"></div>
                  <div className="looping-words-edge is--3"></div>
                  <div className="looping-words-edge is--4"></div>
                </div>
              </div>

              {/* <!-- intro --> */}
              <div className="col-md-10 h5 grayscale-300">
                The <kbd>best marketplace</kbd> fot high-end collectors. Now
                anyone can own digital assets. Collect, buy and sell arts from
                more than <kbd>20k artists.</kbd>
              </div>

              {/* <!-- cta -->/ */}
              <div className="d-flex align-items-center gap-3 mt-5">
                <a
                  className="meme-brush-btn redius h2 fs-6 card-transform-x mb-0"
                  href="#drops"
                >
                  Mint now
                </a>
                <a
                  className="text-link grayscale-300 h2 fs-6 mb-0"
                  href="collections.html"
                  role="button"
                  rel="nofollow"
                >
                  Explore Collection ☞
                </a>
              </div>

              {/* <!-- counter --> */}
              <div className="d-flex flex-row gap-5 mt-5 mb-5 pb-4">
                <div className="meta">
                  <h2 className="grayscale-200">23m</h2>
                  <div className="grayscale-400 mt-2">Collections</div>
                </div>
                <div className="meta">
                  <h2 className="grayscale-200">32k</h2>
                  <div className="grayscale-400 mt-2">Owners (Unique)</div>
                </div>
                <div className="meta">
                  <h2 className="grayscale-200">16%</h2>
                  <div className="grayscale-400 mt-2">Creator earnings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid pt-3 px-0">
        <div className="container section-1600x mt-5">
          <div className="d-grid grid-col-2 gap-2">
            {/* <!-- card 1 --> */}
            <div
              data-cursor="Her art brims with color, joy, and life - just like Frida herself!"
              className="d-flex justify-content-between nft-card card-active redius text-link grayscale-100 animation-2"
            >
              <div className="d-flex flex-column align-self-end p-4">
                <h2 className="h2 fs-1 fw-bold meta mb-2">Frida</h2>
                <div className="meta text-sm grayscale-400">
                  Physical Collectible
                </div>
              </div>
              <div className="flex">
                <img
                  src="images/features/artwork-3.png"
                  className="img-box"
                  alt=""
                  width="400"
                />
              </div>
            </div>
            {/* <!-- card 2 --> */}
            <div
              data-cursor="He is very patient with Jelly and his little brother, Toshi."
              className="d-flex justify-content-between nft-card card-active redius text-link grayscale-100 animation-2"
            >
              <div className="d-flex flex-column align-self-end p-4">
                <h2 className="h2 fs-1 fw-bold meta mb-2">Jay</h2>
                <div className="meta text-sm grayscale-400">
                  Interactive Lore
                </div>
              </div>
              <div className="flex">
                <img
                  src="images/features/artwork-4.png"
                  className="img-box"
                  alt=""
                  width="400"
                />
              </div>
            </div>
            {/* <!-- card 3 --> */}
            <div
              data-cursor="Pip is a bean of few words, but when she speaks, she's full of wisdom."
              className="d-flex justify-content-between nft-card card-active redius text-link grayscale-100 animation-2"
            >
              <div className="d-flex flex-column align-self-end p-4">
                <h2 className="h2 fs-1 fw-bold meta mb-2">Pip</h2>
                <div className="meta text-sm grayscale-400">
                  Anthology Series
                </div>
              </div>
              <div className="flex">
                <img
                  src="images/features/artwork-5.png"
                  className="img-box"
                  alt=""
                  width="200"
                />
              </div>
            </div>
            {/* <!-- card 4 --> */}
            <div
              data-cursor="Toshi is young and full of energy, always ready for an adventure."
              className="d-flex justify-content-between nft-card card-active redius text-link grayscale-100 animation-2"
            >
              <div className="d-flex flex-column align-self-end p-4">
                <h2 className="h2 fs-1 fw-bold meta mb-2">Toshi</h2>
                <div className="meta text-sm grayscale-400">
                  Story Animations
                </div>
              </div>
              <div className="flex">
                <img
                  src="images/features/artwork-6.png"
                  className="img-box"
                  alt=""
                  width="200"
                />
              </div>
            </div>

            {/* <!-- gsap cursor --> */}
            <div className="cursor">
              <p className="grayscale-100">Learn more</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid mt-5 mb-5 px-0" id="drops">
        <div className="container section-1600x">
          <div className="card-bs redius p-3 mb-2">
            {/* <!-- heading --> */}
            <div className="d-flex justify-content-between align-items-start mb-3">
              {/* <!-- title --> */}
              <div className="d-sm-flex align-items-center gap-2">
                <h4 className="h4 fw-bold text-uppercase grayscale-100 mb-2 mb-sm-0">
                  Featured Drops
                </h4>
                <span className="vr mx-2 disable-sm-screen"></span>
                <div className="meta text-sm grayscale-400 disable-sm-screen">
                  This week's curated featured drops
                </div>
              </div>

              {/* <!-- cta --> */}
              <div className="flex">
                <a
                  className="meme-brush-btn text-xs redius mb-0 py-2"
                  href="marketplace.html"
                >
                  View all drops
                </a>
              </div>
            </div>

            {/* <!-- drops --> */}
            <div className="d-grid grid-col-4">
              {/* <!-- card 1 --> */}
              {
                nft && nft.map((e, index) => {
                  return (
                    <div className="nft-card animation-1 card-border" key={index}>
                {/* <!-- cover/cta --> */}
                <div
                  className="nft-card-head mb-2"
                  data-bs-toggle="modal"
                  data-bs-target="#NFTsLivePreview"
                >
                  {/* <!-- artwork --> */}
                  <img
                    src={e.url}
                    className="card-img-top product-img rounded"
                    alt=""
                    width="400"
                  />

                  {/* <!-- cta --> */}
                  <div className="root-btns translate-middle start-50 gap-2 disable-sm-screen">
                    <span className="d-inline-flex align-items-center gap-2 btn btn-editor btn-primary text-dark px-3">
                      <svg width="16" height="16" viewBox="0 -960 960 960">
                        <path
                          d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      Mint now
                    </span>
                  </div>
                </div>

                {/* <!-- actions --> */}
                <div className="flex actions">
                  {/* <!-- meta --> */}
                  <div className="opacity-1 d-flex align-items-center gap-2">
                    {/* <!-- chain --> */}
                    <div className="flex">
                      <span
                        className="d-inline-flex btn bg-light bg-opacity-10 circle grayscale-200 link-secondary p-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Chain : Ethereum"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24">
                          {/* <g fill="currentColor">
                                                <path d="m12 16.576 7.498-4.353L12 8.873zM4.5 12.223l7.5 4.353V8.874zM12 0v8.872l7.498 3.35z"></path>
                                                <path d="M12 0 4.5 12.223 12 8.872zM12 17.972V24l7.503-10.381zM12 24v-6.03L4.5 13.62z"></path>
                                            </g> */}
                        </svg>
                      </span>
                    </div>

                    {/* <!-- market --> */}
                    <div className="flex">
                      <button
                        className="d-inline-flex btn bg-light bg-opacity-10 circle grayscale-200 link-secondary p-1"
                        type="button"
                      >
                        <svg
                          aria-label="OpenSea"
                          width="20"
                          height="20"
                          viewBox="0 0 30 30"
                        >
                          <path
                            d="M15.1312285,0.000519644168 C23.2763415,0.071020638 29.9319337,6.72661331 29.9994346,14.8687262 C30.0714356,23.2568425 23.2568412,30.0714369 14.8687249,29.9994359 C6.72511202,29.931935 0.0710206168,23.2763427 0.000519644585,15.1312298 C-0.0684813169,6.74311354 6.74311227,-0.0684812958 15.1312285,0.000519644168 Z M14.9782264,4.63408431 C14.441219,4.63408431 14.006213,5.06909034 14.006213,5.60609778 L14.006213,6.12360495 C13.1722014,5.87910157 12.2871891,5.69459901 11.3616763,5.58659751 C12.8916975,7.24862055 13.8262105,9.47165137 13.8262105,11.9091852 C13.8262105,14.0947154 13.0792001,16.1017433 11.8236827,17.6917653 L14.006213,17.6917653 L14.006213,19.5517911 L10.8111687,19.5517911 C10.3776627,19.5517911 10.0281578,19.2007862 10.0281578,18.7687802 L10.0281578,17.955769 C10.0281578,17.813267 9.91415623,17.6962654 9.76865421,17.6962654 L5.55659582,17.6962654 C5.47409468,17.6962654 5.40359306,17.7637663 5.40359306,17.8462675 C5.40209368,21.1733136 8.03463017,23.6708482 11.1816738,23.6708482 L20.069297,23.6708482 C22.1993265,23.6708482 23.1518397,20.9408103 24.399857,19.2037863 C24.8843637,18.531777 26.0468799,17.9917695 26.3993847,17.8417674 C26.4638856,17.814767 26.5013862,17.7547662 26.5013862,17.6842652 L26.5013862,16.6027502 C26.5013862,16.4932487 26.3948847,16.4107476 26.2868832,16.440748 C26.2868832,16.440748 25.1580223,16.6998092 23.9524278,16.9769157 L23.4685914,17.0881494 C22.261239,17.3657833 21.1174365,17.6293269 21.0893111,17.6377646 C21.0293103,17.6557648 21.00681,17.6902653 21.00681,17.6902653 C20.4878028,18.387775 19.3927876,19.545791 18.7822792,19.545791 L15.9517399,19.545791 L15.9517399,17.6887653 L18.2062712,17.6887653 C18.5287756,17.6887653 18.8362799,17.5582635 19.058283,17.3287603 C20.214799,16.1287436 20.8853083,14.7022239 20.8853083,13.1692026 C20.8853083,10.5561664 18.9322812,8.24613438 15.9502399,6.85411508 L15.9502399,5.60609778 C15.9502399,5.06909034 15.5152339,4.63408431 14.9782264,4.63408431 Z M10.6446664,7.46462354 L5.81009934,15.8302395 L11.0106714,15.8302395 C11.7501817,14.7037239 12.1806876,13.3537052 12.1806876,11.9031851 C12.1806876,10.2291619 11.6061797,8.68564047 10.6446664,7.46462354 Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* <!-- countdown --> */}
                  <div className="d-flex align-items-center gap-1 redius bg-light bg-opacity-50 pe-2 disable-sm-screen">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      {/* <style>@keyframes loader5{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}</style> */}
                      <g
                        style={{
                          "animation": "loader5 3s linear infinite both",
                          "transformOrigin": "center center",
                        }}
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="4"
                          stroke="var(--white)"
                          strokeWidth="1.5"
                        ></circle>
                        <circle
                          cx="17"
                          cy="7"
                          r="1"
                          fill="var(--color-primary-100)"
                        ></circle>
                      </g>
                    </svg>
                    <span
                      data-count="June 14, 2025 13:43:25"
                      className="countdown meta text-xs fw-light grayscale-200 mb-0"
                    >
                      0d 0h 0m 0s
                    </span>
                  </div>
                </div>

                {/* <!-- content --> */}
                <div className="flex px-1 pb-2">
                  {/* <!-- nft name --> */}
                  <div className="d-flex justify-content-between align-items-center gap-2 mb-3">
                    {/* <!-- title --> */}
                    <div
                      className="text-truncate tt-2 fs-5 fw-bold link-secondary grayscale-200 mb-0"
                      data-bs-toggle="modal"
                      data-bs-target="#NFTsLivePreview"
                    >
                      {e.name}
                    </div>

                    {/* <!-- more --> */}
                    <div className="d-grid">
                      <div className="dropdown d-block">
                        {/* <!-- btn --> */}
                        <button
                          className="d-inline-flex btn btn-editor btn-dark redius p-0 px-1"
                          type="button"
                          data-bs-toggle="dropdown"
                          data-bs-auto-close="outside"
                          aria-expanded="false"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            width="20"
                            height="20"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.5 12C8.5 12.8284 7.82843 13.5 7 13.5C6.17157 13.5 5.5 12.8284 5.5 12C5.5 11.1716 6.17157 10.5 7 10.5C7.82843 10.5 8.5 11.1716 8.5 12ZM13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12ZM16.999 13.5C17.8274 13.5 18.499 12.8284 18.499 12C18.499 11.1716 17.8274 10.5 16.999 10.5C16.1706 10.5 15.499 11.1716 15.499 12C15.499 12.8284 16.1706 13.5 16.999 13.5Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </button>

                        {/* <!-- dropdown menu --> */}
                        <div className="profile_menu">
                          <div
                            className="dropdown-menu redius card-bs card-border p-2"
                            data-popper-placement="bottom-end"
                            style={{"position": "absolute" , "inset": "0px 0px auto auto" , "margin": "0px" , "transform": "translate(0px, 38px)"}}
                          >
                            <a
                              className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2"
                              href="#!"
                              role="button"
                            >
                              <svg
                                width="20"
                                height="19"
                                viewBox="0 0 21 20"
                                fill="none"
                              >
                                <path
                                  d="M6.94321 17.9401C7.74513 17.9401 8.39521 17.2901 8.39521 16.4881C8.39521 15.6862 7.74513 15.0361 6.94321 15.0361C6.14129 15.0361 5.49121 15.6862 5.49121 16.4881C5.49121 17.2901 6.14129 17.9401 6.94321 17.9401Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M15.2152 17.9401C16.0171 17.9401 16.6672 17.2901 16.6672 16.4881C16.6672 15.6862 16.0171 15.0361 15.2152 15.0361C14.4133 15.0361 13.7632 15.6862 13.7632 16.4881C13.7632 17.2901 14.4133 17.9401 15.2152 17.9401Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M12.0114 4.51611H3.71143L4.41943 6.13211H19.5994L20.3114 4.51611H12.0114Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M6.81152 11.5761H12.0115H17.2075L17.9195 9.95605H6.10352L6.81152 11.5761Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M5.61523 8.85175H18.4032L19.1152 7.23975H4.90723L5.61523 8.85175Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M16.7434 12.6319H5.97543L1.72743 2.50794C1.57143 2.13594 1.13943 1.95594 0.759428 2.11194C0.387428 2.26794 0.211428 2.69994 0.367428 3.07994L4.77543 13.5879C4.85943 13.7919 5.02743 13.9359 5.21943 13.9999C5.33143 14.0679 5.46343 14.1119 5.60743 14.1119H16.7434C17.1474 14.1119 17.4794 13.7799 17.4794 13.3759C17.4794 12.9639 17.1474 12.6319 16.7434 12.6319Z"
                                  fill="white"
                                ></path>
                              </svg>
                              Add to cart
                            </a>
                            <a
                              className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2"
                              href="#!"
                              role="button"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 18 18"
                                fill="none"
                              >
                                <path
                                  d="M2.25 9C2.25 7.20979 2.96116 5.4929 4.22703 4.22703C5.4929 2.96116 7.20979 2.25 9 2.25C10.887 2.2571 12.6983 2.99342 14.055 4.305L15.75 6"
                                  stroke="currentColor"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M15.75 2.25V6H12"
                                  stroke="currentColor"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M15.75 9C15.75 10.7902 15.0388 12.5071 13.773 13.773C12.5071 15.0388 10.7902 15.75 9 15.75C7.11296 15.7429 5.30173 15.0066 3.945 13.695L2.25 12"
                                  stroke="currentColor"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M6 12H2.25V15.75"
                                  stroke="currentColor"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              Refresh Metadata
                            </a>
                            <a
                              className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2"
                              href="#!"
                              role="button"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M10.5303 7.53032C10.2374 7.82321 9.76256 7.82321 9.46967 7.53032C9.17678 7.23743 9.17678 6.76255 9.46967 6.46966L12.4697 3.46966L13 2.93933L13.5303 3.46966L16.5303 6.46966C16.8232 6.76255 16.8232 7.23743 16.5303 7.53032C16.2374 7.82321 15.7626 7.82321 15.4697 7.53032L13.75 5.81065V15C13.75 15.4142 13.4142 15.75 13 15.75C12.5858 15.75 12.25 15.4142 12.25 15V5.81065L10.5303 7.53032ZM9.625 11.75C8.58947 11.75 7.75 12.5895 7.75 13.625V16C7.75 17.2426 8.75736 18.25 10 18.25H16C17.2426 18.25 18.25 17.2426 18.25 16V13.625C18.25 12.5895 17.4105 11.75 16.375 11.75C15.9608 11.75 15.625 11.4142 15.625 11C15.625 10.5858 15.9608 10.25 16.375 10.25C18.239 10.25 19.75 11.761 19.75 13.625V16C19.75 18.0711 18.0711 19.75 16 19.75H10C7.92893 19.75 6.25 18.0711 6.25 16V13.625C6.25 11.761 7.76104 10.25 9.625 10.25C10.0392 10.25 10.375 10.5858 10.375 11C10.375 11.4142 10.0392 11.75 9.625 11.75Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                              Share
                            </a>
                            <a
                              className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2"
                              href="#!"
                              role="button"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  opacity="0.4"
                                  d="M21.25 9.15005C18.94 5.52005 15.56 3.43005 12 3.43005C10.22 3.43005 8.49 3.95005 6.91 4.92005C5.33 5.90005 3.91 7.33005 2.75 9.15005C1.75 10.7201 1.75 13.2701 2.75 14.8401C5.06 18.4801 8.44 20.5601 12 20.5601C13.78 20.5601 15.51 20.0401 17.09 19.0701C18.67 18.0901 20.09 16.6601 21.25 14.8401C22.25 13.2801 22.25 10.7201 21.25 9.15005ZM12 16.0401C9.76 16.0401 7.96 14.2301 7.96 12.0001C7.96 9.77005 9.76 7.96005 12 7.96005C14.24 7.96005 16.04 9.77005 16.04 12.0001C16.04 14.2301 14.24 16.0401 12 16.0401Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M12 9.14001C10.43 9.14001 9.15002 10.42 9.15002 12C9.15002 13.57 10.43 14.85 12 14.85C13.57 14.85 14.86 13.57 14.86 12C14.86 10.43 13.57 9.14001 12 9.14001Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                              Open original
                            </a>
                            <a
                              className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2"
                              href="#!"
                              role="button"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M6.4502 22C6.0402 22 5.7002 21.66 5.7002 21.25V2.75C5.7002 2.34 6.0402 2 6.4502 2C6.8602 2 7.2002 2.34 7.2002 2.75V21.25C7.2002 21.66 6.8602 22 6.4502 22Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  opacity="0.4"
                                  d="M15.2001 7.16004L7.10008 3.66004C6.98008 3.60004 6.85008 3.62004 6.74008 3.69004C6.64008 3.76004 6.58008 3.87004 6.58008 4.00004V17C6.58008 17.13 6.65008 17.25 6.76008 17.32C6.82008 17.36 6.89008 17.38 6.96008 17.38C7.02008 17.38 7.07008 17.37 7.13008 17.34L15.4301 13.24C15.4301 13.24 15.4301 13.24 15.4401 13.24C17.1001 12.38 17.9901 11.27 17.9401 10.1C17.8801 8.92004 16.9101 7.88004 15.2001 7.16004Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                              Report
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- metadata --> */}
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    {/* <!-- price --> */}
                    <div
                      className="meta text-sm fw-medium grayscale-200 mb-0"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Price: 0.092 ETH"
                    >
                      {e.saleprice} ETH
                    </div>

                    {/* <!-- mints --> */}
                    <div className="d-inline-flex align-items-center bg-primary bg-opacity-10 circle ps-sm-2">
                      <span className="meta text-xs fw-medium grayscale-200 mb-0 disable-sm-screen">
                        1,220/2,500
                      </span>
                      <span
                        className="text-blue meta text-xs bg-primary bg-opacity-25 redius px-1 py-0 m-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Items minted: 42%"
                      >
                        {e.discount}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
                  )
                })
              }

              {/* <!-- card 2 --> */}
              <div className="nft-card animation-1 card-border">
                {/* <!-- cover/cta --> */}
                <div
                  className="nft-card-head mb-2"
                  data-bs-toggle="modal"
                  data-bs-target="#NFTsLivePreview"
                >
                  {/* <!-- artwork --> */}
                  <img
                    src="images/nft/azuki-9.jpg"
                    className="card-img-top product-img rounded"
                    alt=""
                    width="400"
                  />

                  {/* <!-- cta --> */}
                  <div className="root-btns translate-middle start-50 gap-2 disable-sm-screen">
                    <span className="d-inline-flex align-items-center gap-2 btn btn-editor btn-primary text-dark px-3">
                      <svg width="16" height="16" viewBox="0 -960 960 960">
                        <path
                          d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      Mint now
                    </span>
                  </div>
                </div>

                {/* <!-- actions --> */}
                <div className="flex actions">
                  {/* <!-- meta --> */}
                  <div className="opacity-1 d-flex align-items-center gap-2">
                    {/* <!-- chain --> */}
                    <div className="flex">
                      <span
                        className="d-inline-flex btn bg-light bg-opacity-10 circle grayscale-200 link-secondary p-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Chain : Ethereum"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24">
                          {/* <g fill="currentColor">
                                                <path d="m12 16.576 7.498-4.353L12 8.873zM4.5 12.223l7.5 4.353V8.874zM12 0v8.872l7.498 3.35z"></path>
                                                <path d="M12 0 4.5 12.223 12 8.872zM12 17.972V24l7.503-10.381zM12 24v-6.03L4.5 13.62z"></path>
                                            </g> */}
                        </svg>
                      </span>
                    </div>

                    {/* <!-- market --> */}
                    <div className="flex">
                      <button
                        className="d-inline-flex btn bg-light bg-opacity-10 circle grayscale-200 link-secondary p-1"
                        type="button"
                      >
                        <svg
                          aria-label="OpenSea"
                          width="20"
                          height="20"
                          viewBox="0 0 30 30"
                        >
                          <path
                            d="M15.1312285,0.000519644168 C23.2763415,0.071020638 29.9319337,6.72661331 29.9994346,14.8687262 C30.0714356,23.2568425 23.2568412,30.0714369 14.8687249,29.9994359 C6.72511202,29.931935 0.0710206168,23.2763427 0.000519644585,15.1312298 C-0.0684813169,6.74311354 6.74311227,-0.0684812958 15.1312285,0.000519644168 Z M14.9782264,4.63408431 C14.441219,4.63408431 14.006213,5.06909034 14.006213,5.60609778 L14.006213,6.12360495 C13.1722014,5.87910157 12.2871891,5.69459901 11.3616763,5.58659751 C12.8916975,7.24862055 13.8262105,9.47165137 13.8262105,11.9091852 C13.8262105,14.0947154 13.0792001,16.1017433 11.8236827,17.6917653 L14.006213,17.6917653 L14.006213,19.5517911 L10.8111687,19.5517911 C10.3776627,19.5517911 10.0281578,19.2007862 10.0281578,18.7687802 L10.0281578,17.955769 C10.0281578,17.813267 9.91415623,17.6962654 9.76865421,17.6962654 L5.55659582,17.6962654 C5.47409468,17.6962654 5.40359306,17.7637663 5.40359306,17.8462675 C5.40209368,21.1733136 8.03463017,23.6708482 11.1816738,23.6708482 L20.069297,23.6708482 C22.1993265,23.6708482 23.1518397,20.9408103 24.399857,19.2037863 C24.8843637,18.531777 26.0468799,17.9917695 26.3993847,17.8417674 C26.4638856,17.814767 26.5013862,17.7547662 26.5013862,17.6842652 L26.5013862,16.6027502 C26.5013862,16.4932487 26.3948847,16.4107476 26.2868832,16.440748 C26.2868832,16.440748 25.1580223,16.6998092 23.9524278,16.9769157 L23.4685914,17.0881494 C22.261239,17.3657833 21.1174365,17.6293269 21.0893111,17.6377646 C21.0293103,17.6557648 21.00681,17.6902653 21.00681,17.6902653 C20.4878028,18.387775 19.3927876,19.545791 18.7822792,19.545791 L15.9517399,19.545791 L15.9517399,17.6887653 L18.2062712,17.6887653 C18.5287756,17.6887653 18.8362799,17.5582635 19.058283,17.3287603 C20.214799,16.1287436 20.8853083,14.7022239 20.8853083,13.1692026 C20.8853083,10.5561664 18.9322812,8.24613438 15.9502399,6.85411508 L15.9502399,5.60609778 C15.9502399,5.06909034 15.5152339,4.63408431 14.9782264,4.63408431 Z M10.6446664,7.46462354 L5.81009934,15.8302395 L11.0106714,15.8302395 C11.7501817,14.7037239 12.1806876,13.3537052 12.1806876,11.9031851 C12.1806876,10.2291619 11.6061797,8.68564047 10.6446664,7.46462354 Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* <!-- countdown --> */}
                  <div className="d-flex align-items-center gap-1 redius bg-light bg-opacity-50 pe-2 disable-sm-screen">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      {/* <style>@keyframes loader5{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}</style> */}
                      <g style={{"animation" :"loader5 3s linear infinite both", "transformOrigin":"center center"}}>
                        <circle
                          cx="12"
                          cy="12"
                          r="4"
                          stroke="var(--white)"
                          strokeWidth="1.5"
                        ></circle>
                        <circle
                          cx="17"
                          cy="7"
                          r="1"
                          fill="var(--color-primary-100)"
                        ></circle>
                      </g>
                    </svg>
                    <span
                      data-count="June 14, 2025 13:43:25"
                      className="countdown meta text-xs fw-light grayscale-200 mb-0"
                    >
                      0d 0h 0m 0s
                    </span>
                  </div>
                </div>

                {/* <!-- content --> */}
                <div className="flex px-1 pb-2">
                  {/* <!-- nft name --> */}
                  <div className="d-flex justify-content-between align-items-center gap-2 mb-3">
                    {/* <!-- title --> */}
                    <div
                      className="text-truncate tt-2 fs-5 fw-bold link-secondary grayscale-200 mb-0"
                      data-bs-toggle="modal"
                      data-bs-target="#NFTsLivePreview"
                    >
                      Elementals #1394
                    </div>

                    {/* <!-- more --> */}
                    <div className="d-grid">
                      <div className="dropdown d-block">
                        {/* <!-- btn --> */}
                        <button
                          className="d-inline-flex btn btn-editor btn-dark redius p-0 px-1"
                          type="button"
                          data-bs-toggle="dropdown"
                          data-bs-auto-close="outside"
                          aria-expanded="false"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            width="20"
                            height="20"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.5 12C8.5 12.8284 7.82843 13.5 7 13.5C6.17157 13.5 5.5 12.8284 5.5 12C5.5 11.1716 6.17157 10.5 7 10.5C7.82843 10.5 8.5 11.1716 8.5 12ZM13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12ZM16.999 13.5C17.8274 13.5 18.499 12.8284 18.499 12C18.499 11.1716 17.8274 10.5 16.999 10.5C16.1706 10.5 15.499 11.1716 15.499 12C15.499 12.8284 16.1706 13.5 16.999 13.5Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </button>

                        {/* <!-- dropdown menu --> */}
                        <div className="profile_menu">
                          <div
                            className="dropdown-menu redius card-bs card-border p-2"
                            data-popper-placement="bottom-end"
                            style={{"position": "absolute" , "inset": "0px 0px auto auto" , "margin": "0px" , "transform": "translate(0px, 38px)"}}
                          >
                            <a
                              className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2"
                              href="#!"
                              role="button"
                            >
                              <svg
                                width="20"
                                height="19"
                                viewBox="0 0 21 20"
                                fill="none"
                              >
                                <path
                                  d="M6.94321 17.9401C7.74513 17.9401 8.39521 17.2901 8.39521 16.4881C8.39521 15.6862 7.74513 15.0361 6.94321 15.0361C6.14129 15.0361 5.49121 15.6862 5.49121 16.4881C5.49121 17.2901 6.14129 17.9401 6.94321 17.9401Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M15.2152 17.9401C16.0171 17.9401 16.6672 17.2901 16.6672 16.4881C16.6672 15.6862 16.0171 15.0361 15.2152 15.0361C14.4133 15.0361 13.7632 15.6862 13.7632 16.4881C13.7632 17.2901 14.4133 17.9401 15.2152 17.9401Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M12.0114 4.51611H3.71143L4.41943 6.13211H19.5994L20.3114 4.51611H12.0114Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M6.81152 11.5761H12.0115H17.2075L17.9195 9.95605H6.10352L6.81152 11.5761Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M5.61523 8.85175H18.4032L19.1152 7.23975H4.90723L5.61523 8.85175Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M16.7434 12.6319H5.97543L1.72743 2.50794C1.57143 2.13594 1.13943 1.95594 0.759428 2.11194C0.387428 2.26794 0.211428 2.69994 0.367428 3.07994L4.77543 13.5879C4.85943 13.7919 5.02743 13.9359 5.21943 13.9999C5.33143 14.0679 5.46343 14.1119 5.60743 14.1119H16.7434C17.1474 14.1119 17.4794 13.7799 17.4794 13.3759C17.4794 12.9639 17.1474 12.6319 16.7434 12.6319Z"
                                  fill="white"
                                ></path>
                              </svg>
                              Add to cart
                            </a>
                            <a
                              className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2"
                              href="#!"
                              role="button"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 18 18"
                                fill="none"
                              >
                                <path
                                  d="M2.25 9C2.25 7.20979 2.96116 5.4929 4.22703 4.22703C5.4929 2.96116 7.20979 2.25 9 2.25C10.887 2.2571 12.6983 2.99342 14.055 4.305L15.75 6"
                                  stroke="currentColor"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M15.75 2.25V6H12"
                                  stroke="currentColor"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M15.75 9C15.75 10.7902 15.0388 12.5071 13.773 13.773C12.5071 15.0388 10.7902 15.75 9 15.75C7.11296 15.7429 5.30173 15.0066 3.945 13.695L2.25 12"
                                  stroke="currentColor"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M6 12H2.25V15.75"
                                  stroke="currentColor"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              Refresh Metadata
                            </a>
                            <a
                              className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2"
                              href="#!"
                              role="button"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M10.5303 7.53032C10.2374 7.82321 9.76256 7.82321 9.46967 7.53032C9.17678 7.23743 9.17678 6.76255 9.46967 6.46966L12.4697 3.46966L13 2.93933L13.5303 3.46966L16.5303 6.46966C16.8232 6.76255 16.8232 7.23743 16.5303 7.53032C16.2374 7.82321 15.7626 7.82321 15.4697 7.53032L13.75 5.81065V15C13.75 15.4142 13.4142 15.75 13 15.75C12.5858 15.75 12.25 15.4142 12.25 15V5.81065L10.5303 7.53032ZM9.625 11.75C8.58947 11.75 7.75 12.5895 7.75 13.625V16C7.75 17.2426 8.75736 18.25 10 18.25H16C17.2426 18.25 18.25 17.2426 18.25 16V13.625C18.25 12.5895 17.4105 11.75 16.375 11.75C15.9608 11.75 15.625 11.4142 15.625 11C15.625 10.5858 15.9608 10.25 16.375 10.25C18.239 10.25 19.75 11.761 19.75 13.625V16C19.75 18.0711 18.0711 19.75 16 19.75H10C7.92893 19.75 6.25 18.0711 6.25 16V13.625C6.25 11.761 7.76104 10.25 9.625 10.25C10.0392 10.25 10.375 10.5858 10.375 11C10.375 11.4142 10.0392 11.75 9.625 11.75Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                              Share
                            </a>
                            <a
                              className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2"
                              href="#!"
                              role="button"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  opacity="0.4"
                                  d="M21.25 9.15005C18.94 5.52005 15.56 3.43005 12 3.43005C10.22 3.43005 8.49 3.95005 6.91 4.92005C5.33 5.90005 3.91 7.33005 2.75 9.15005C1.75 10.7201 1.75 13.2701 2.75 14.8401C5.06 18.4801 8.44 20.5601 12 20.5601C13.78 20.5601 15.51 20.0401 17.09 19.0701C18.67 18.0901 20.09 16.6601 21.25 14.8401C22.25 13.2801 22.25 10.7201 21.25 9.15005ZM12 16.0401C9.76 16.0401 7.96 14.2301 7.96 12.0001C7.96 9.77005 9.76 7.96005 12 7.96005C14.24 7.96005 16.04 9.77005 16.04 12.0001C16.04 14.2301 14.24 16.0401 12 16.0401Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M12 9.14001C10.43 9.14001 9.15002 10.42 9.15002 12C9.15002 13.57 10.43 14.85 12 14.85C13.57 14.85 14.86 13.57 14.86 12C14.86 10.43 13.57 9.14001 12 9.14001Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                              Open original
                            </a>
                            <a
                              className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2"
                              href="#!"
                              role="button"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M6.4502 22C6.0402 22 5.7002 21.66 5.7002 21.25V2.75C5.7002 2.34 6.0402 2 6.4502 2C6.8602 2 7.2002 2.34 7.2002 2.75V21.25C7.2002 21.66 6.8602 22 6.4502 22Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  opacity="0.4"
                                  d="M15.2001 7.16004L7.10008 3.66004C6.98008 3.60004 6.85008 3.62004 6.74008 3.69004C6.64008 3.76004 6.58008 3.87004 6.58008 4.00004V17C6.58008 17.13 6.65008 17.25 6.76008 17.32C6.82008 17.36 6.89008 17.38 6.96008 17.38C7.02008 17.38 7.07008 17.37 7.13008 17.34L15.4301 13.24C15.4301 13.24 15.4301 13.24 15.4401 13.24C17.1001 12.38 17.9901 11.27 17.9401 10.1C17.8801 8.92004 16.9101 7.88004 15.2001 7.16004Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                              Report
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- metadata --> */}
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    {/* <!-- price --> */}
                    <div
                      className="meta text-sm fw-medium grayscale-200 mb-0"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Price: 0.092 ETH"
                    >
                      0.092 ETH
                    </div>

                    {/* <!-- mints --> */}
                    <div className="d-inline-flex align-items-center bg-primary bg-opacity-10 circle ps-sm-2">
                      <span className="meta text-xs fw-medium grayscale-200 mb-0 disable-sm-screen">
                        1,220/2,500
                      </span>
                      <span
                        className="text-blue meta text-xs bg-primary bg-opacity-25 redius px-1 py-0 m-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Items minted: 42%"
                      >
                        42%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- card 3 --> */}
              <div className="nft-card animation-1 card-border">
                {/* <!-- cover/cta --> */}
                <div
                  className="nft-card-head mb-2"
                  data-bs-toggle="modal"
                  data-bs-target="#NFTsLivePreview"
                >
                  {/* <!-- artwork --> */}
                  <img
                    src="images/nft/azuki-4.jpg"
                    className="card-img-top product-img rounded"
                    alt=""
                    width="400"
                  />

                  {/* <!-- cta --> */}
                  <div className="root-btns translate-middle start-50 gap-2 disable-sm-screen">
                    <span className="d-inline-flex align-items-center gap-2 btn btn-editor btn-primary text-dark px-3">
                      <svg width="16" height="16" viewBox="0 -960 960 960">
                        <path
                          d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      Mint now
                    </span>
                  </div>
                </div>

                {/* <!-- actions --> */}
                <div className="flex actions">
                  {/* <!-- meta --> */}
                  <div className="opacity-1 d-flex align-items-center gap-2">
                    {/* <!-- chain --> */}
                    <div className="flex">
                      <span
                        className="d-inline-flex btn bg-light bg-opacity-10 circle grayscale-200 link-secondary p-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Chain : Ethereum"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24">
                          {/* <g fill="currentColor">
                                                <path d="m12 16.576 7.498-4.353L12 8.873zM4.5 12.223l7.5 4.353V8.874zM12 0v8.872l7.498 3.35z"></path>
                                                <path d="M12 0 4.5 12.223 12 8.872zM12 17.972V24l7.503-10.381zM12 24v-6.03L4.5 13.62z"></path>
                                            </g> */}
                        </svg>
                      </span>
                    </div>

                    {/* <!-- market --> */}
                    <div className="flex">
                      <button
                        className="d-inline-flex btn bg-light bg-opacity-10 circle grayscale-200 link-secondary p-1"
                        type="button"
                      >
                        <svg
                          aria-label="OpenSea"
                          width="20"
                          height="20"
                          viewBox="0 0 30 30"
                        >
                          <path
                            d="M15.1312285,0.000519644168 C23.2763415,0.071020638 29.9319337,6.72661331 29.9994346,14.8687262 C30.0714356,23.2568425 23.2568412,30.0714369 14.8687249,29.9994359 C6.72511202,29.931935 0.0710206168,23.2763427 0.000519644585,15.1312298 C-0.0684813169,6.74311354 6.74311227,-0.0684812958 15.1312285,0.000519644168 Z M14.9782264,4.63408431 C14.441219,4.63408431 14.006213,5.06909034 14.006213,5.60609778 L14.006213,6.12360495 C13.1722014,5.87910157 12.2871891,5.69459901 11.3616763,5.58659751 C12.8916975,7.24862055 13.8262105,9.47165137 13.8262105,11.9091852 C13.8262105,14.0947154 13.0792001,16.1017433 11.8236827,17.6917653 L14.006213,17.6917653 L14.006213,19.5517911 L10.8111687,19.5517911 C10.3776627,19.5517911 10.0281578,19.2007862 10.0281578,18.7687802 L10.0281578,17.955769 C10.0281578,17.813267 9.91415623,17.6962654 9.76865421,17.6962654 L5.55659582,17.6962654 C5.47409468,17.6962654 5.40359306,17.7637663 5.40359306,17.8462675 C5.40209368,21.1733136 8.03463017,23.6708482 11.1816738,23.6708482 L20.069297,23.6708482 C22.1993265,23.6708482 23.1518397,20.9408103 24.399857,19.2037863 C24.8843637,18.531777 26.0468799,17.9917695 26.3993847,17.8417674 C26.4638856,17.814767 26.5013862,17.7547662 26.5013862,17.6842652 L26.5013862,16.6027502 C26.5013862,16.4932487 26.3948847,16.4107476 26.2868832,16.440748 C26.2868832,16.440748 25.1580223,16.6998092 23.9524278,16.9769157 L23.4685914,17.0881494 C22.261239,17.3657833 21.1174365,17.6293269 21.0893111,17.6377646 C21.0293103,17.6557648 21.00681,17.6902653 21.00681,17.6902653 C20.4878028,18.387775 19.3927876,19.545791 18.7822792,19.545791 L15.9517399,19.545791 L15.9517399,17.6887653 L18.2062712,17.6887653 C18.5287756,17.6887653 18.8362799,17.5582635 19.058283,17.3287603 C20.214799,16.1287436 20.8853083,14.7022239 20.8853083,13.1692026 C20.8853083,10.5561664 18.9322812,8.24613438 15.9502399,6.85411508 L15.9502399,5.60609778 C15.9502399,5.06909034 15.5152339,4.63408431 14.9782264,4.63408431 Z M10.6446664,7.46462354 L5.81009934,15.8302395 L11.0106714,15.8302395 C11.7501817,14.7037239 12.1806876,13.3537052 12.1806876,11.9031851 C12.1806876,10.2291619 11.6061797,8.68564047 10.6446664,7.46462354 Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* <!-- countdown --> */}
                  <div className="d-flex align-items-center gap-1 redius bg-light bg-opacity-50 pe-2 disable-sm-screen">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      {/* <style>@keyframes loader5{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}</style> */}
                      <g style={{"animation":"loader5 3s linear infinite both" ,"transformOrigin":"center center"}}>
                                        <circle cx="12" cy="12" r="4" stroke="var(--white)" strokeWidth="1.5"></circle>
                                        <circle cx="17" cy="7" r="1" fill="var(--color-primary-100)"></circle>
                                    </g>
                    </svg>
                    <span
                      data-count="June 14, 2025 13:43:25"
                      className="countdown meta text-xs fw-light grayscale-200 mb-0"
                    >
                      0d 0h 0m 0s
                    </span>
                  </div>
                </div>

                {/* <!-- content --> */}
                <div className="flex px-1 pb-2">
                  {/* <!-- nft name --> */}
                  <div className="d-flex justify-content-between align-items-center gap-2 mb-3">
                    {/* <!-- title --> */}
                    <div
                      className="text-truncate tt-2 fs-5 fw-bold link-secondary grayscale-200 mb-0"
                      data-bs-toggle="modal"
                      data-bs-target="#NFTsLivePreview"
                    >
                      Elementals #1394
                    </div>

                    {/* <!-- more --> */}
                    <div className="d-grid">
                      <div className="dropdown d-block">
                        {/* <!-- btn --> */}
                        <button
                          className="d-inline-flex btn btn-editor btn-dark redius p-0 px-1"
                          type="button"
                          data-bs-toggle="dropdown"
                          data-bs-auto-close="outside"
                          aria-expanded="false"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            width="20"
                            height="20"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.5 12C8.5 12.8284 7.82843 13.5 7 13.5C6.17157 13.5 5.5 12.8284 5.5 12C5.5 11.1716 6.17157 10.5 7 10.5C7.82843 10.5 8.5 11.1716 8.5 12ZM13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12ZM16.999 13.5C17.8274 13.5 18.499 12.8284 18.499 12C18.499 11.1716 17.8274 10.5 16.999 10.5C16.1706 10.5 15.499 11.1716 15.499 12C15.499 12.8284 16.1706 13.5 16.999 13.5Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </button>

                        {/* <!-- dropdown menu --> */}
                        <div className="profile_menu">
                          <div
                            className="dropdown-menu redius card-bs card-border p-2"
                            data-popper-placement="bottom-end"
                            style={{"position": "absolute" , "inset": "0px 0px auto auto" , "margin": "0px" , "transform": "translate(0px, 38px)"}}
                          >
                            <a
                              className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2"
                              href="#!"
                              role="button"
                            >
                              <svg
                                width="20"
                                height="19"
                                viewBox="0 0 21 20"
                                fill="none"
                              >
                                <path
                                  d="M6.94321 17.9401C7.74513 17.9401 8.39521 17.2901 8.39521 16.4881C8.39521 15.6862 7.74513 15.0361 6.94321 15.0361C6.14129 15.0361 5.49121 15.6862 5.49121 16.4881C5.49121 17.2901 6.14129 17.9401 6.94321 17.9401Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M15.2152 17.9401C16.0171 17.9401 16.6672 17.2901 16.6672 16.4881C16.6672 15.6862 16.0171 15.0361 15.2152 15.0361C14.4133 15.0361 13.7632 15.6862 13.7632 16.4881C13.7632 17.2901 14.4133 17.9401 15.2152 17.9401Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M12.0114 4.51611H3.71143L4.41943 6.13211H19.5994L20.3114 4.51611H12.0114Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M6.81152 11.5761H12.0115H17.2075L17.9195 9.95605H6.10352L6.81152 11.5761Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M5.61523 8.85175H18.4032L19.1152 7.23975H4.90723L5.61523 8.85175Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M16.7434 12.6319H5.97543L1.72743 2.50794C1.57143 2.13594 1.13943 1.95594 0.759428 2.11194C0.387428 2.26794 0.211428 2.69994 0.367428 3.07994L4.77543 13.5879C4.85943 13.7919 5.02743 13.9359 5.21943 13.9999C5.33143 14.0679 5.46343 14.1119 5.60743 14.1119H16.7434C17.1474 14.1119 17.4794 13.7799 17.4794 13.3759C17.4794 12.9639 17.1474 12.6319 16.7434 12.6319Z"
                                  fill="white"
                                ></path>
                              </svg>
                              Add to cart
                            </a>
                            <a
                              className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2"
                              href="#!"
                              role="button"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 18 18"
                                fill="none"
                              >
                                <path
                                  d="M2.25 9C2.25 7.20979 2.96116 5.4929 4.22703 4.22703C5.4929 2.96116 7.20979 2.25 9 2.25C10.887 2.2571 12.6983 2.99342 14.055 4.305L15.75 6"
                                  stroke="currentColor"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M15.75 2.25V6H12"
                                  stroke="currentColor"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M15.75 9C15.75 10.7902 15.0388 12.5071 13.773 13.773C12.5071 15.0388 10.7902 15.75 9 15.75C7.11296 15.7429 5.30173 15.0066 3.945 13.695L2.25 12"
                                  stroke="currentColor"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M6 12H2.25V15.75"
                                  stroke="currentColor"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              Refresh Metadata
                            </a>
                            <a
                              className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2"
                              href="#!"
                              role="button"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M10.5303 7.53032C10.2374 7.82321 9.76256 7.82321 9.46967 7.53032C9.17678 7.23743 9.17678 6.76255 9.46967 6.46966L12.4697 3.46966L13 2.93933L13.5303 3.46966L16.5303 6.46966C16.8232 6.76255 16.8232 7.23743 16.5303 7.53032C16.2374 7.82321 15.7626 7.82321 15.4697 7.53032L13.75 5.81065V15C13.75 15.4142 13.4142 15.75 13 15.75C12.5858 15.75 12.25 15.4142 12.25 15V5.81065L10.5303 7.53032ZM9.625 11.75C8.58947 11.75 7.75 12.5895 7.75 13.625V16C7.75 17.2426 8.75736 18.25 10 18.25H16C17.2426 18.25 18.25 17.2426 18.25 16V13.625C18.25 12.5895 17.4105 11.75 16.375 11.75C15.9608 11.75 15.625 11.4142 15.625 11C15.625 10.5858 15.9608 10.25 16.375 10.25C18.239 10.25 19.75 11.761 19.75 13.625V16C19.75 18.0711 18.0711 19.75 16 19.75H10C7.92893 19.75 6.25 18.0711 6.25 16V13.625C6.25 11.761 7.76104 10.25 9.625 10.25C10.0392 10.25 10.375 10.5858 10.375 11C10.375 11.4142 10.0392 11.75 9.625 11.75Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                              Share
                            </a>
                            <a
                              className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2"
                              href="#!"
                              role="button"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  opacity="0.4"
                                  d="M21.25 9.15005C18.94 5.52005 15.56 3.43005 12 3.43005C10.22 3.43005 8.49 3.95005 6.91 4.92005C5.33 5.90005 3.91 7.33005 2.75 9.15005C1.75 10.7201 1.75 13.2701 2.75 14.8401C5.06 18.4801 8.44 20.5601 12 20.5601C13.78 20.5601 15.51 20.0401 17.09 19.0701C18.67 18.0901 20.09 16.6601 21.25 14.8401C22.25 13.2801 22.25 10.7201 21.25 9.15005ZM12 16.0401C9.76 16.0401 7.96 14.2301 7.96 12.0001C7.96 9.77005 9.76 7.96005 12 7.96005C14.24 7.96005 16.04 9.77005 16.04 12.0001C16.04 14.2301 14.24 16.0401 12 16.0401Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M12 9.14001C10.43 9.14001 9.15002 10.42 9.15002 12C9.15002 13.57 10.43 14.85 12 14.85C13.57 14.85 14.86 13.57 14.86 12C14.86 10.43 13.57 9.14001 12 9.14001Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                              Open original
                            </a>
                            <a
                              className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2"
                              href="#!"
                              role="button"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M6.4502 22C6.0402 22 5.7002 21.66 5.7002 21.25V2.75C5.7002 2.34 6.0402 2 6.4502 2C6.8602 2 7.2002 2.34 7.2002 2.75V21.25C7.2002 21.66 6.8602 22 6.4502 22Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  opacity="0.4"
                                  d="M15.2001 7.16004L7.10008 3.66004C6.98008 3.60004 6.85008 3.62004 6.74008 3.69004C6.64008 3.76004 6.58008 3.87004 6.58008 4.00004V17C6.58008 17.13 6.65008 17.25 6.76008 17.32C6.82008 17.36 6.89008 17.38 6.96008 17.38C7.02008 17.38 7.07008 17.37 7.13008 17.34L15.4301 13.24C15.4301 13.24 15.4301 13.24 15.4401 13.24C17.1001 12.38 17.9901 11.27 17.9401 10.1C17.8801 8.92004 16.9101 7.88004 15.2001 7.16004Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                              Report
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- metadata --> */}
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    {/* <!-- price --> */}
                    <div
                      className="meta text-sm fw-medium grayscale-200 mb-0"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Price: 0.092 ETH"
                    >
                      0.092 ETH
                    </div>

                    {/* <!-- mints --> */}
                    <div className="d-inline-flex align-items-center bg-primary bg-opacity-10 circle ps-sm-2">
                      <span className="meta text-xs fw-medium grayscale-200 mb-0 disable-sm-screen">
                        1,220/2,500
                      </span>
                      <span
                        className="text-blue meta text-xs bg-primary bg-opacity-25 redius px-1 py-0 m-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Items minted: 42%"
                      >
                        42%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- card 4 --> */}
              <div className="nft-card animation-1 card-border">
                {/* <!-- cover/cta --> */}
                <div
                  className="nft-card-head mb-2"
                  data-bs-toggle="modal"
                  data-bs-target="#NFTsLivePreview"
                >
                  {/* <!-- artwork --> */}
                  <img
                    src="images/nft/azuki-5.jpg"
                    className="card-img-top product-img rounded"
                    alt=""
                    width="400"
                  />

                  {/* <!-- cta --> */}
                  <div className="root-btns translate-middle start-50 gap-2 disable-sm-screen">
                    <span className="d-inline-flex align-items-center gap-2 btn btn-editor btn-primary text-dark px-3">
                      <svg width="16" height="16" viewBox="0 -960 960 960">
                        <path
                          d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      Mint now
                    </span>
                  </div>
                </div>

                {/* <!-- actions --> */}
                <div className="flex actions">
                  {/* <!-- meta --> */}
                  <div className="opacity-1 d-flex align-items-center gap-2">
                    {/* <!-- chain --> */}
                    <div className="flex">
                      <span
                        className="d-inline-flex btn bg-light bg-opacity-10 circle grayscale-200 link-secondary p-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Chain : Ethereum"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24">
                          {/* <g fill="currentColor">
                                                <path d="m12 16.576 7.498-4.353L12 8.873zM4.5 12.223l7.5 4.353V8.874zM12 0v8.872l7.498 3.35z"></path>
                                                <path d="M12 0 4.5 12.223 12 8.872zM12 17.972V24l7.503-10.381zM12 24v-6.03L4.5 13.62z"></path>
                                            </g> */}
                        </svg>
                      </span>
                    </div>

                    {/* <!-- market --> */}
                    <div className="flex">
                      <button
                        className="d-inline-flex btn bg-light bg-opacity-10 circle grayscale-200 link-secondary p-1"
                        type="button"
                      >
                        <svg
                          aria-label="OpenSea"
                          width="20"
                          height="20"
                          viewBox="0 0 30 30"
                        >
                          <path
                            d="M15.1312285,0.000519644168 C23.2763415,0.071020638 29.9319337,6.72661331 29.9994346,14.8687262 C30.0714356,23.2568425 23.2568412,30.0714369 14.8687249,29.9994359 C6.72511202,29.931935 0.0710206168,23.2763427 0.000519644585,15.1312298 C-0.0684813169,6.74311354 6.74311227,-0.0684812958 15.1312285,0.000519644168 Z M14.9782264,4.63408431 C14.441219,4.63408431 14.006213,5.06909034 14.006213,5.60609778 L14.006213,6.12360495 C13.1722014,5.87910157 12.2871891,5.69459901 11.3616763,5.58659751 C12.8916975,7.24862055 13.8262105,9.47165137 13.8262105,11.9091852 C13.8262105,14.0947154 13.0792001,16.1017433 11.8236827,17.6917653 L14.006213,17.6917653 L14.006213,19.5517911 L10.8111687,19.5517911 C10.3776627,19.5517911 10.0281578,19.2007862 10.0281578,18.7687802 L10.0281578,17.955769 C10.0281578,17.813267 9.91415623,17.6962654 9.76865421,17.6962654 L5.55659582,17.6962654 C5.47409468,17.6962654 5.40359306,17.7637663 5.40359306,17.8462675 C5.40209368,21.1733136 8.03463017,23.6708482 11.1816738,23.6708482 L20.069297,23.6708482 C22.1993265,23.6708482 23.1518397,20.9408103 24.399857,19.2037863 C24.8843637,18.531777 26.0468799,17.9917695 26.3993847,17.8417674 C26.4638856,17.814767 26.5013862,17.7547662 26.5013862,17.6842652 L26.5013862,16.6027502 C26.5013862,16.4932487 26.3948847,16.4107476 26.2868832,16.440748 C26.2868832,16.440748 25.1580223,16.6998092 23.9524278,16.9769157 L23.4685914,17.0881494 C22.261239,17.3657833 21.1174365,17.6293269 21.0893111,17.6377646 C21.0293103,17.6557648 21.00681,17.6902653 21.00681,17.6902653 C20.4878028,18.387775 19.3927876,19.545791 18.7822792,19.545791 L15.9517399,19.545791 L15.9517399,17.6887653 L18.2062712,17.6887653 C18.5287756,17.6887653 18.8362799,17.5582635 19.058283,17.3287603 C20.214799,16.1287436 20.8853083,14.7022239 20.8853083,13.1692026 C20.8853083,10.5561664 18.9322812,8.24613438 15.9502399,6.85411508 L15.9502399,5.60609778 C15.9502399,5.06909034 15.5152339,4.63408431 14.9782264,4.63408431 Z M10.6446664,7.46462354 L5.81009934,15.8302395 L11.0106714,15.8302395 C11.7501817,14.7037239 12.1806876,13.3537052 12.1806876,11.9031851 C12.1806876,10.2291619 11.6061797,8.68564047 10.6446664,7.46462354 Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* <!-- countdown --> */}
                  <div className="d-flex align-items-center gap-1 redius bg-light bg-opacity-50 pe-2 disable-sm-screen">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      {/* <style>@keyframes loader5{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}</style> */}
                      <g style={{"animation" :"loader5 3s linear infinite both", "transformOrigin":"center center"}}>
                                        <circle cx="12" cy="12" r="4" stroke="var(--white)" strokeWidth="1.5"></circle>
                                        <circle cx="17" cy="7" r="1" fill="var(--color-primary-100)"></circle>
                                    </g>
                    </svg>
                    <span
                      data-count="June 14, 2025 13:43:25"
                      className="countdown meta text-xs fw-light grayscale-200 mb-0"
                    >
                      0d 0h 0m 0s
                    </span>
                  </div>
                </div>

                {/* <!-- content --> */}
                <div className="flex px-1 pb-2">
                  {/* <!-- nft name --> */}
                  <div className="d-flex justify-content-between align-items-center gap-2 mb-3">
                    {/* <!-- title --> */}
                    <div
                      className="text-truncate tt-2 fs-5 fw-bold link-secondary grayscale-200 mb-0"
                      data-bs-toggle="modal"
                      data-bs-target="#NFTsLivePreview"
                    >
                      Elementals #1394
                    </div>

                    {/* <!-- more --> */}
                    <div className="d-grid">
                      <div className="dropdown d-block">
                        {/* <!-- btn --> */}
                        <button
                          className="d-inline-flex btn btn-editor btn-dark redius p-0 px-1"
                          type="button"
                          data-bs-toggle="dropdown"
                          data-bs-auto-close="outside"
                          aria-expanded="false"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            width="20"
                            height="20"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.5 12C8.5 12.8284 7.82843 13.5 7 13.5C6.17157 13.5 5.5 12.8284 5.5 12C5.5 11.1716 6.17157 10.5 7 10.5C7.82843 10.5 8.5 11.1716 8.5 12ZM13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12ZM16.999 13.5C17.8274 13.5 18.499 12.8284 18.499 12C18.499 11.1716 17.8274 10.5 16.999 10.5C16.1706 10.5 15.499 11.1716 15.499 12C15.499 12.8284 16.1706 13.5 16.999 13.5Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </button>

                        {/* <!-- dropdown menu --> */}
                        <div className="profile_menu">
                          <div
                            className="dropdown-menu redius card-bs card-border p-2"
                            data-popper-placement="bottom-end"
                            style={{"position": "absolute" , "inset": "0px 0px auto auto" , "margin": "0px" , "transform": "translate(0px, 38px)"}}
                          >
                            <a
                              className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2"
                              href="#!"
                              role="button"
                            >
                              <svg
                                width="20"
                                height="19"
                                viewBox="0 0 21 20"
                                fill="none"
                              >
                                <path
                                  d="M6.94321 17.9401C7.74513 17.9401 8.39521 17.2901 8.39521 16.4881C8.39521 15.6862 7.74513 15.0361 6.94321 15.0361C6.14129 15.0361 5.49121 15.6862 5.49121 16.4881C5.49121 17.2901 6.14129 17.9401 6.94321 17.9401Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M15.2152 17.9401C16.0171 17.9401 16.6672 17.2901 16.6672 16.4881C16.6672 15.6862 16.0171 15.0361 15.2152 15.0361C14.4133 15.0361 13.7632 15.6862 13.7632 16.4881C13.7632 17.2901 14.4133 17.9401 15.2152 17.9401Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M12.0114 4.51611H3.71143L4.41943 6.13211H19.5994L20.3114 4.51611H12.0114Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M6.81152 11.5761H12.0115H17.2075L17.9195 9.95605H6.10352L6.81152 11.5761Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M5.61523 8.85175H18.4032L19.1152 7.23975H4.90723L5.61523 8.85175Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M16.7434 12.6319H5.97543L1.72743 2.50794C1.57143 2.13594 1.13943 1.95594 0.759428 2.11194C0.387428 2.26794 0.211428 2.69994 0.367428 3.07994L4.77543 13.5879C4.85943 13.7919 5.02743 13.9359 5.21943 13.9999C5.33143 14.0679 5.46343 14.1119 5.60743 14.1119H16.7434C17.1474 14.1119 17.4794 13.7799 17.4794 13.3759C17.4794 12.9639 17.1474 12.6319 16.7434 12.6319Z"
                                  fill="white"
                                ></path>
                              </svg>
                              Add to cart
                            </a>
                            <a
                              className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2"
                              href="#!"
                              role="button"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 18 18"
                                fill="none"
                              >
                                <path
                                  d="M2.25 9C2.25 7.20979 2.96116 5.4929 4.22703 4.22703C5.4929 2.96116 7.20979 2.25 9 2.25C10.887 2.2571 12.6983 2.99342 14.055 4.305L15.75 6"
                                  stroke="currentColor"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M15.75 2.25V6H12"
                                  stroke="currentColor"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M15.75 9C15.75 10.7902 15.0388 12.5071 13.773 13.773C12.5071 15.0388 10.7902 15.75 9 15.75C7.11296 15.7429 5.30173 15.0066 3.945 13.695L2.25 12"
                                  stroke="currentColor"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M6 12H2.25V15.75"
                                  stroke="currentColor"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              Refresh Metadata
                            </a>
                            <a
                              className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2"
                              href="#!"
                              role="button"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M10.5303 7.53032C10.2374 7.82321 9.76256 7.82321 9.46967 7.53032C9.17678 7.23743 9.17678 6.76255 9.46967 6.46966L12.4697 3.46966L13 2.93933L13.5303 3.46966L16.5303 6.46966C16.8232 6.76255 16.8232 7.23743 16.5303 7.53032C16.2374 7.82321 15.7626 7.82321 15.4697 7.53032L13.75 5.81065V15C13.75 15.4142 13.4142 15.75 13 15.75C12.5858 15.75 12.25 15.4142 12.25 15V5.81065L10.5303 7.53032ZM9.625 11.75C8.58947 11.75 7.75 12.5895 7.75 13.625V16C7.75 17.2426 8.75736 18.25 10 18.25H16C17.2426 18.25 18.25 17.2426 18.25 16V13.625C18.25 12.5895 17.4105 11.75 16.375 11.75C15.9608 11.75 15.625 11.4142 15.625 11C15.625 10.5858 15.9608 10.25 16.375 10.25C18.239 10.25 19.75 11.761 19.75 13.625V16C19.75 18.0711 18.0711 19.75 16 19.75H10C7.92893 19.75 6.25 18.0711 6.25 16V13.625C6.25 11.761 7.76104 10.25 9.625 10.25C10.0392 10.25 10.375 10.5858 10.375 11C10.375 11.4142 10.0392 11.75 9.625 11.75Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                              Share
                            </a>
                            <a
                              className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2"
                              href="#!"
                              role="button"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  opacity="0.4"
                                  d="M21.25 9.15005C18.94 5.52005 15.56 3.43005 12 3.43005C10.22 3.43005 8.49 3.95005 6.91 4.92005C5.33 5.90005 3.91 7.33005 2.75 9.15005C1.75 10.7201 1.75 13.2701 2.75 14.8401C5.06 18.4801 8.44 20.5601 12 20.5601C13.78 20.5601 15.51 20.0401 17.09 19.0701C18.67 18.0901 20.09 16.6601 21.25 14.8401C22.25 13.2801 22.25 10.7201 21.25 9.15005ZM12 16.0401C9.76 16.0401 7.96 14.2301 7.96 12.0001C7.96 9.77005 9.76 7.96005 12 7.96005C14.24 7.96005 16.04 9.77005 16.04 12.0001C16.04 14.2301 14.24 16.0401 12 16.0401Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M12 9.14001C10.43 9.14001 9.15002 10.42 9.15002 12C9.15002 13.57 10.43 14.85 12 14.85C13.57 14.85 14.86 13.57 14.86 12C14.86 10.43 13.57 9.14001 12 9.14001Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                              Open original
                            </a>
                            <a
                              className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2"
                              href="#!"
                              role="button"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M6.4502 22C6.0402 22 5.7002 21.66 5.7002 21.25V2.75C5.7002 2.34 6.0402 2 6.4502 2C6.8602 2 7.2002 2.34 7.2002 2.75V21.25C7.2002 21.66 6.8602 22 6.4502 22Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  opacity="0.4"
                                  d="M15.2001 7.16004L7.10008 3.66004C6.98008 3.60004 6.85008 3.62004 6.74008 3.69004C6.64008 3.76004 6.58008 3.87004 6.58008 4.00004V17C6.58008 17.13 6.65008 17.25 6.76008 17.32C6.82008 17.36 6.89008 17.38 6.96008 17.38C7.02008 17.38 7.07008 17.37 7.13008 17.34L15.4301 13.24C15.4301 13.24 15.4301 13.24 15.4401 13.24C17.1001 12.38 17.9901 11.27 17.9401 10.1C17.8801 8.92004 16.9101 7.88004 15.2001 7.16004Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                              Report
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- metadata --> */}
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    {/* <!-- price --> */}
                    <div
                      className="meta text-sm fw-medium grayscale-200 mb-0"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Price: 0.092 ETH"
                    >
                      0.092 ETH
                    </div>

                    {/* <!-- mints --> */}
                    <div className="d-inline-flex align-items-center bg-primary bg-opacity-10 circle ps-sm-2">
                      <span className="meta text-xs fw-medium grayscale-200 mb-0 disable-sm-screen">
                        1,220/2,500
                      </span>
                      <span
                        className="text-blue meta text-xs bg-primary bg-opacity-25 redius px-1 py-0 m-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Items minted: 42%"
                      >
                        42%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- card 5 --> */}
              <div className="nft-card animation-1 card-border">
                {/* <!-- cover/cta --> */}
                <div
                  className="nft-card-head mb-2"
                  data-bs-toggle="modal"
                  data-bs-target="#NFTsLivePreview"
                >
                  {/* <!-- artwork --> */}
                  <img
                    src="images/nft/azuki-7.jpg"
                    className="card-img-top product-img rounded"
                    alt=""
                    width="400"
                  />

                  {/* <!-- cta --> */}
                  <div className="root-btns translate-middle start-50 gap-2 disable-sm-screen">
                    <span className="d-inline-flex align-items-center gap-2 btn btn-editor btn-primary text-dark px-3">
                      <svg width="16" height="16" viewBox="0 -960 960 960">
                        <path
                          d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      Mint now
                    </span>
                  </div>
                </div>

                {/* <!-- actions --> */}
                <div className="flex actions">
                  {/* <!-- meta --> */}
                  <div className="opacity-1 d-flex align-items-center gap-2">
                    {/* <!-- chain --> */}
                    <div className="flex">
                      <span
                        className="d-inline-flex btn bg-light bg-opacity-10 circle grayscale-200 link-secondary p-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Chain : Ethereum"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24">
                          <g fill="currentColor">
                            <path d="m12 16.576 7.498-4.353L12 8.873zM4.5 12.223l7.5 4.353V8.874zM12 0v8.872l7.498 3.35z"></path>
                            <path d="M12 0 4.5 12.223 12 8.872zM12 17.972V24l7.503-10.381zM12 24v-6.03L4.5 13.62z"></path>
                          </g>
                        </svg>
                      </span>
                    </div>

                    {/* <!-- market --> */}
                    <div className="flex">
                      <button
                        className="d-inline-flex btn bg-light bg-opacity-10 circle grayscale-200 link-secondary p-1"
                        type="button"
                      >
                        <svg
                          aria-label="OpenSea"
                          width="20"
                          height="20"
                          viewBox="0 0 30 30"
                        >
                          <path
                            d="M15.1312285,0.000519644168 C23.2763415,0.071020638 29.9319337,6.72661331 29.9994346,14.8687262 C30.0714356,23.2568425 23.2568412,30.0714369 14.8687249,29.9994359 C6.72511202,29.931935 0.0710206168,23.2763427 0.000519644585,15.1312298 C-0.0684813169,6.74311354 6.74311227,-0.0684812958 15.1312285,0.000519644168 Z M14.9782264,4.63408431 C14.441219,4.63408431 14.006213,5.06909034 14.006213,5.60609778 L14.006213,6.12360495 C13.1722014,5.87910157 12.2871891,5.69459901 11.3616763,5.58659751 C12.8916975,7.24862055 13.8262105,9.47165137 13.8262105,11.9091852 C13.8262105,14.0947154 13.0792001,16.1017433 11.8236827,17.6917653 L14.006213,17.6917653 L14.006213,19.5517911 L10.8111687,19.5517911 C10.3776627,19.5517911 10.0281578,19.2007862 10.0281578,18.7687802 L10.0281578,17.955769 C10.0281578,17.813267 9.91415623,17.6962654 9.76865421,17.6962654 L5.55659582,17.6962654 C5.47409468,17.6962654 5.40359306,17.7637663 5.40359306,17.8462675 C5.40209368,21.1733136 8.03463017,23.6708482 11.1816738,23.6708482 L20.069297,23.6708482 C22.1993265,23.6708482 23.1518397,20.9408103 24.399857,19.2037863 C24.8843637,18.531777 26.0468799,17.9917695 26.3993847,17.8417674 C26.4638856,17.814767 26.5013862,17.7547662 26.5013862,17.6842652 L26.5013862,16.6027502 C26.5013862,16.4932487 26.3948847,16.4107476 26.2868832,16.440748 C26.2868832,16.440748 25.1580223,16.6998092 23.9524278,16.9769157 L23.4685914,17.0881494 C22.261239,17.3657833 21.1174365,17.6293269 21.0893111,17.6377646 C21.0293103,17.6557648 21.00681,17.6902653 21.00681,17.6902653 C20.4878028,18.387775 19.3927876,19.545791 18.7822792,19.545791 L15.9517399,19.545791 L15.9517399,17.6887653 L18.2062712,17.6887653 C18.5287756,17.6887653 18.8362799,17.5582635 19.058283,17.3287603 C20.214799,16.1287436 20.8853083,14.7022239 20.8853083,13.1692026 C20.8853083,10.5561664 18.9322812,8.24613438 15.9502399,6.85411508 L15.9502399,5.60609778 C15.9502399,5.06909034 15.5152339,4.63408431 14.9782264,4.63408431 Z M10.6446664,7.46462354 L5.81009934,15.8302395 L11.0106714,15.8302395 C11.7501817,14.7037239 12.1806876,13.3537052 12.1806876,11.9031851 C12.1806876,10.2291619 11.6061797,8.68564047 10.6446664,7.46462354 Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* <!-- countdown --> */}
                  <div className="d-flex align-items-center gap-1 redius bg-light bg-opacity-50 pe-2 disable-sm-screen">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      {/* <style>@keyframes loader5{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}</style> */}
                      <g style={{"animation" :"loader5 3s linear infinite both", "transformOrigin":"center center"}}>
                        <circle
                          cx="12"
                          cy="12"
                          r="4"
                          stroke="var(--white)"
                          strokeWidth="1.5"
                        ></circle>
                        <circle
                          cx="17"
                          cy="7"
                          r="1"
                          fill="var(--color-primary-100)"
                        ></circle>
                      </g>
                    </svg>
                    <span
                      data-count="June 14, 2025 13:43:25"
                      className="countdown meta text-xs fw-light grayscale-200 mb-0"
                    >
                      0d 0h 0m 0s
                    </span>
                  </div>
                </div>

                {/* <!-- content --> */}
                <div className="flex px-1 pb-2">
                  {/* <!-- nft name --> */}
                  <div className="d-flex justify-content-between align-items-center gap-2 mb-3">
                    {/* <!-- title --> */}
                    <div
                      className="text-truncate tt-2 fs-5 fw-bold link-secondary grayscale-200 mb-0"
                      data-bs-toggle="modal"
                      data-bs-target="#NFTsLivePreview"
                    >
                      Elementals #1394
                    </div>

                    {/* <!-- more --> */}
                    <div className="d-grid">
                      <div className="dropdown d-block">
                        {/* <!-- btn --> */}
                        <button
                          className="d-inline-flex btn btn-editor btn-dark redius p-0 px-1"
                          type="button"
                          data-bs-toggle="dropdown"
                          data-bs-auto-close="outside"
                          aria-expanded="false"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            width="20"
                            height="20"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.5 12C8.5 12.8284 7.82843 13.5 7 13.5C6.17157 13.5 5.5 12.8284 5.5 12C5.5 11.1716 6.17157 10.5 7 10.5C7.82843 10.5 8.5 11.1716 8.5 12ZM13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12ZM16.999 13.5C17.8274 13.5 18.499 12.8284 18.499 12C18.499 11.1716 17.8274 10.5 16.999 10.5C16.1706 10.5 15.499 11.1716 15.499 12C15.499 12.8284 16.1706 13.5 16.999 13.5Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </button>

                        {/* <!-- dropdown menu --> */}
                        <div className="profile_menu">
                          <div
                            className="dropdown-menu redius card-bs card-border p-2"
                            data-popper-placement="bottom-end"
                            style={{"position": "absolute" , "inset": "0px 0px auto auto" , "margin": "0px" , "transform": "translate(0px, 38px)"}}
                          >
                            <a
                              className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2"
                              href="#!"
                              role="button"
                            >
                              <svg
                                width="20"
                                height="19"
                                viewBox="0 0 21 20"
                                fill="none"
                              >
                                <path
                                  d="M6.94321 17.9401C7.74513 17.9401 8.39521 17.2901 8.39521 16.4881C8.39521 15.6862 7.74513 15.0361 6.94321 15.0361C6.14129 15.0361 5.49121 15.6862 5.49121 16.4881C5.49121 17.2901 6.14129 17.9401 6.94321 17.9401Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M15.2152 17.9401C16.0171 17.9401 16.6672 17.2901 16.6672 16.4881C16.6672 15.6862 16.0171 15.0361 15.2152 15.0361C14.4133 15.0361 13.7632 15.6862 13.7632 16.4881C13.7632 17.2901 14.4133 17.9401 15.2152 17.9401Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M12.0114 4.51611H3.71143L4.41943 6.13211H19.5994L20.3114 4.51611H12.0114Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M6.81152 11.5761H12.0115H17.2075L17.9195 9.95605H6.10352L6.81152 11.5761Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M5.61523 8.85175H18.4032L19.1152 7.23975H4.90723L5.61523 8.85175Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M16.7434 12.6319H5.97543L1.72743 2.50794C1.57143 2.13594 1.13943 1.95594 0.759428 2.11194C0.387428 2.26794 0.211428 2.69994 0.367428 3.07994L4.77543 13.5879C4.85943 13.7919 5.02743 13.9359 5.21943 13.9999C5.33143 14.0679 5.46343 14.1119 5.60743 14.1119H16.7434C17.1474 14.1119 17.4794 13.7799 17.4794 13.3759C17.4794 12.9639 17.1474 12.6319 16.7434 12.6319Z"
                                  fill="white"
                                ></path>
                              </svg>
                              Add to cart
                            </a>
                            <a
                              className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2"
                              href="#!"
                              role="button"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 18 18"
                                fill="none"
                              >
                                <path
                                  d="M2.25 9C2.25 7.20979 2.96116 5.4929 4.22703 4.22703C5.4929 2.96116 7.20979 2.25 9 2.25C10.887 2.2571 12.6983 2.99342 14.055 4.305L15.75 6"
                                  stroke="currentColor"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M15.75 2.25V6H12"
                                  stroke="currentColor"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M15.75 9C15.75 10.7902 15.0388 12.5071 13.773 13.773C12.5071 15.0388 10.7902 15.75 9 15.75C7.11296 15.7429 5.30173 15.0066 3.945 13.695L2.25 12"
                                  stroke="currentColor"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M6 12H2.25V15.75"
                                  stroke="currentColor"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              Refresh Metadata
                            </a>
                            <a
                              className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2"
                              href="#!"
                              role="button"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M10.5303 7.53032C10.2374 7.82321 9.76256 7.82321 9.46967 7.53032C9.17678 7.23743 9.17678 6.76255 9.46967 6.46966L12.4697 3.46966L13 2.93933L13.5303 3.46966L16.5303 6.46966C16.8232 6.76255 16.8232 7.23743 16.5303 7.53032C16.2374 7.82321 15.7626 7.82321 15.4697 7.53032L13.75 5.81065V15C13.75 15.4142 13.4142 15.75 13 15.75C12.5858 15.75 12.25 15.4142 12.25 15V5.81065L10.5303 7.53032ZM9.625 11.75C8.58947 11.75 7.75 12.5895 7.75 13.625V16C7.75 17.2426 8.75736 18.25 10 18.25H16C17.2426 18.25 18.25 17.2426 18.25 16V13.625C18.25 12.5895 17.4105 11.75 16.375 11.75C15.9608 11.75 15.625 11.4142 15.625 11C15.625 10.5858 15.9608 10.25 16.375 10.25C18.239 10.25 19.75 11.761 19.75 13.625V16C19.75 18.0711 18.0711 19.75 16 19.75H10C7.92893 19.75 6.25 18.0711 6.25 16V13.625C6.25 11.761 7.76104 10.25 9.625 10.25C10.0392 10.25 10.375 10.5858 10.375 11C10.375 11.4142 10.0392 11.75 9.625 11.75Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                              Share
                            </a>
                            <a
                              className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2"
                              href="#!"
                              role="button"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  opacity="0.4"
                                  d="M21.25 9.15005C18.94 5.52005 15.56 3.43005 12 3.43005C10.22 3.43005 8.49 3.95005 6.91 4.92005C5.33 5.90005 3.91 7.33005 2.75 9.15005C1.75 10.7201 1.75 13.2701 2.75 14.8401C5.06 18.4801 8.44 20.5601 12 20.5601C13.78 20.5601 15.51 20.0401 17.09 19.0701C18.67 18.0901 20.09 16.6601 21.25 14.8401C22.25 13.2801 22.25 10.7201 21.25 9.15005ZM12 16.0401C9.76 16.0401 7.96 14.2301 7.96 12.0001C7.96 9.77005 9.76 7.96005 12 7.96005C14.24 7.96005 16.04 9.77005 16.04 12.0001C16.04 14.2301 14.24 16.0401 12 16.0401Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M12 9.14001C10.43 9.14001 9.15002 10.42 9.15002 12C9.15002 13.57 10.43 14.85 12 14.85C13.57 14.85 14.86 13.57 14.86 12C14.86 10.43 13.57 9.14001 12 9.14001Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                              Open original
                            </a>
                            <a
                              className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2"
                              href="#!"
                              role="button"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M6.4502 22C6.0402 22 5.7002 21.66 5.7002 21.25V2.75C5.7002 2.34 6.0402 2 6.4502 2C6.8602 2 7.2002 2.34 7.2002 2.75V21.25C7.2002 21.66 6.8602 22 6.4502 22Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  opacity="0.4"
                                  d="M15.2001 7.16004L7.10008 3.66004C6.98008 3.60004 6.85008 3.62004 6.74008 3.69004C6.64008 3.76004 6.58008 3.87004 6.58008 4.00004V17C6.58008 17.13 6.65008 17.25 6.76008 17.32C6.82008 17.36 6.89008 17.38 6.96008 17.38C7.02008 17.38 7.07008 17.37 7.13008 17.34L15.4301 13.24C15.4301 13.24 15.4301 13.24 15.4401 13.24C17.1001 12.38 17.9901 11.27 17.9401 10.1C17.8801 8.92004 16.9101 7.88004 15.2001 7.16004Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                              Report
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- metadata --> */}
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    {/* <!-- price --> */}
                    <div
                      className="meta text-sm fw-medium grayscale-200 mb-0"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Price: 0.092 ETH"
                    >
                      0.092 ETH
                    </div>

                    {/* <!-- mints --> */}
                    <div className="d-inline-flex align-items-center bg-primary bg-opacity-10 circle ps-sm-2">
                      <span className="meta text-xs fw-medium grayscale-200 mb-0 disable-sm-screen">
                        1,220/2,500
                      </span>
                      <span
                        className="text-blue meta text-xs bg-primary bg-opacity-25 redius px-1 py-0 m-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Items minted: 42%"
                      >
                        42%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       <div className="container-fluid panel fixed-bottom mb-2">
         <div className="d-grid justify-content-end">
              <div className="mode">
                <button className="offcn-demo text-bg-danger m-auto mb-3" id="darkMode">
                    <span className="moon moon-logo animate-moon">
                        <svg viewBox="0 0 512 512" width="100">
                            <path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path>
                        </svg>
                    </span>
                    <span className="sun sun-logo animate-sun">
                        <svg viewBox="0 0 512 512" width="100">
                            <path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"></path>
                        </svg>
                    </span>
                </button>
            </div>
         </div>
       </div>
        
      <Footer></Footer>
    </>
  );
};

export default Home;
