import React from 'react'

const Footer = () => {
  return (
   <>
   <footer className="container-fluid text-left text-lg-start">
        <div className="container section-1600x pt-3">

            
            <div className="row mt-5 pt-3">

            
                <div className="col-12 col-sm-12 col-lg-4 pb-5">

            
                    <div className="mb-4">
                        {/* <!-- Logo --> */}
                        <div className="brand-logo pe-3">
                            <div className="dark">
                                <a href="#">
                                    <img src="images/logo-dark.svg" alt=""/>
                                </a>
                            </div>
                            <div className="light">
                                <a href="#">
                                    <img src="images/logo.svg" alt=""/>
                                </a>
                            </div>
                        </div>
                        {/* <!-- text --> */}
                        <div className="col-md-10 text-sm heading-6 grayscale-400 mt-3">
                            The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs).
                        </div>
                    </div>

                    {/* <!-- socials --> */}
                    <div className="social d-flex align-items-center gap-2">
                        <div className="h6 grayscale-400 mb-0">Social Links</div>
                        <span className="vr disable-sm-screen mx-2"></span>
                        {/* <!-- x --> */}
                        <a className="d-inline-flex gap-2 link-secondary text-bg-bs card-border redius px-2 py-1" href="#!" role="button">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path d="M17.7512 4H20.818L14.1179 11.201L22 21H15.8284L10.9946 15.057L5.46359 21H2.39494L9.5613 13.2977L2 4H8.32828L12.6976 9.43215L17.7512 4ZM16.6748 19.2738H18.3742L7.4049 5.63549H5.58133L16.6748 19.2738Z" fill="currentColor"></path>
                            </svg>
                        </a>
                        {/* <!-- discord --> */}
                        <a className="d-inline-flex gap-2 link-secondary text-bg-bs card-border redius px-2 py-1" href="#!" role="button">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path d="M18.9308 5.32631C17.6561 4.71242 16.2892 4.26013 14.8599 4.00109C14.8339 3.99609 14.8079 4.00858 14.7945 4.03357C14.6187 4.36175 14.4239 4.78988 14.2876 5.12639C12.7503 4.88484 11.221 4.88484 9.71527 5.12639C9.57887 4.7824 9.37707 4.36175 9.20048 4.03357C9.18707 4.00941 9.16107 3.99692 9.13504 4.00109C7.70659 4.2593 6.33963 4.71159 5.06411 5.32631C5.05307 5.33131 5.04361 5.33965 5.03732 5.35047C2.44449 9.4161 1.73421 13.3818 2.08265 17.2983C2.08423 17.3175 2.09447 17.3358 2.10867 17.3475C3.81934 18.666 5.47642 19.4665 7.10273 19.9971C7.12876 20.0054 7.15634 19.9954 7.1729 19.9729C7.55761 19.4215 7.90054 18.8401 8.19456 18.2287C8.21192 18.1929 8.19535 18.1504 8.15989 18.1363C7.61594 17.9197 7.098 17.6557 6.59977 17.3558C6.56037 17.3317 6.55721 17.2725 6.59347 17.2442C6.69831 17.1617 6.80318 17.0759 6.9033 16.9893C6.92141 16.9735 6.94665 16.9701 6.96794 16.9801C10.2411 18.5486 13.7846 18.5486 17.0191 16.9801C17.0404 16.9693 17.0657 16.9726 17.0846 16.9885C17.1847 17.0751 17.2895 17.1617 17.3952 17.2442C17.4314 17.2725 17.4291 17.3317 17.3897 17.3558C16.8914 17.6615 16.3735 17.9197 15.8288 18.1354C15.7933 18.1496 15.7775 18.1929 15.7949 18.2287C16.0952 18.8393 16.4381 19.4207 16.8157 19.9721C16.8315 19.9954 16.8599 20.0054 16.8859 19.9971C18.5201 19.4665 20.1772 18.666 21.8879 17.3475C21.9028 17.3358 21.9123 17.3183 21.9139 17.2992C22.3309 12.7712 21.2154 8.83804 18.9568 5.3513C18.9513 5.33965 18.9419 5.33131 18.9308 5.32631ZM8.68335 14.9136C7.69792 14.9136 6.88594 13.964 6.88594 12.7979C6.88594 11.6317 7.68217 10.6822 8.68335 10.6822C9.69239 10.6822 10.4965 11.6401 10.4807 12.7979C10.4807 13.964 9.68451 14.9136 8.68335 14.9136ZM15.329 14.9136C14.3435 14.9136 13.5316 13.964 13.5316 12.7979C13.5316 11.6317 14.3278 10.6822 15.329 10.6822C16.338 10.6822 17.1421 11.6401 17.1264 12.7979C17.1264 13.964 16.338 14.9136 15.329 14.9136Z" fill="currentColor"></path>
                            </svg>
                        </a>
                        {/* <!-- instagram --> */}
                        <a className="d-inline-flex gap-2 link-secondary text-bg-bs card-border redius px-2 py-1" href="#!" role="button">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path d="M11.999 7.37688C9.44495 7.37688 7.37595 9.44688 7.37595 11.9999C7.37595 14.5539 9.44495 16.6239 11.999 16.6239C14.551 16.6239 16.622 14.5539 16.622 11.9999C16.622 9.44688 14.551 7.37688 11.999 7.37688ZM11.999 15.0039C10.34 15.0039 8.99495 13.6589 8.99495 12.0009C8.99495 10.3419 10.34 8.99788 11.999 8.99788C13.658 8.99788 15.001 10.3419 15.001 12.0009C15.001 13.6589 13.658 15.0039 11.999 15.0039Z" fill="currentColor"></path>
                                <path d="M16.806 8.28488C17.4013 8.28488 17.884 7.80225 17.884 7.20688C17.884 6.61152 17.4013 6.12888 16.806 6.12888C16.2106 6.12888 15.728 6.61152 15.728 7.20688C15.728 7.80225 16.2106 8.28488 16.806 8.28488Z" fill="currentColor"></path>
                                <path d="M20.533 6.11088C20.064 4.90188 19.109 3.94588 17.9 3.47888C17.201 3.21588 16.462 3.07488 15.714 3.05888C14.751 3.01688 14.446 3.00488 12.004 3.00488C9.56195 3.00488 9.24895 3.00488 8.29395 3.05888C7.54795 3.07388 6.80895 3.21488 6.10995 3.47888C4.89995 3.94588 3.94495 4.90188 3.47695 6.11088C3.21395 6.81088 3.07295 7.54888 3.05795 8.29688C3.01495 9.25888 3.00195 9.56388 3.00195 12.0069C3.00195 14.4489 3.00195 14.7599 3.05795 15.7169C3.07295 16.4649 3.21395 17.2029 3.47695 17.9039C3.94595 19.1119 4.90095 20.0679 6.11095 20.5359C6.80695 20.8079 7.54595 20.9619 8.29595 20.9859C9.25895 21.0279 9.56395 21.0409 12.006 21.0409C14.448 21.0409 14.761 21.0409 15.716 20.9859C16.463 20.9709 17.202 20.8289 17.902 20.5669C19.111 20.0979 20.066 19.1429 20.535 17.9339C20.798 17.2339 20.939 16.4959 20.954 15.7479C20.997 14.7859 21.01 14.4809 21.01 12.0379C21.01 9.59488 21.01 9.28488 20.954 8.32788C20.941 7.56988 20.801 6.81888 20.533 6.11088ZM19.315 15.6429C19.308 16.2189 19.204 16.7899 19.004 17.3309C18.699 18.1179 18.078 18.7399 17.292 19.0419C16.757 19.2409 16.193 19.3449 15.622 19.3529C14.672 19.3969 14.404 19.4079 11.968 19.4079C9.52995 19.4079 9.28095 19.4079 8.31295 19.3529C7.74395 19.3459 7.17795 19.2409 6.64395 19.0419C5.85495 18.7409 5.22995 18.1189 4.92495 17.3309C4.72895 16.7969 4.62295 16.2319 4.61395 15.6619C4.57095 14.7119 4.56095 14.4439 4.56095 12.0079C4.56095 9.57088 4.56095 9.32188 4.61395 8.35288C4.62095 7.77688 4.72495 7.20688 4.92495 6.66588C5.22995 5.87688 5.85495 5.25588 6.64395 4.95388C7.17795 4.75588 7.74395 4.65088 8.31295 4.64288C9.26395 4.59988 9.53095 4.58788 11.968 4.58788C14.405 4.58788 14.655 4.58788 15.622 4.64288C16.193 4.64988 16.757 4.75488 17.292 4.95388C18.078 5.25688 18.699 5.87888 19.004 6.66588C19.2 7.19988 19.306 7.76488 19.315 8.33488C19.358 9.28588 19.369 9.55288 19.369 11.9899C19.369 14.4259 19.369 14.6879 19.326 15.6439H19.315V15.6429Z" fill="currentColor"></path>
                            </svg>
                        </a>
                    </div>

                </div>

                {/* <!-- widgets --> */}
                <div className="col-12 col-sm-12 col-lg-8">
                    <div className="row">

                        {/* <!-- links 1 --> */}
                        <div className="col-6 col-md-3 col-sm-6 col-lg-3 mb-3">
                            {/* <!-- Links --> */}
                            <div className="meta fs-6 fw-bold grayscale-200 mb-3">About us</div>
                            <div className="d-grid gap-3 text-sm heading-6 grayscale-400">
                                <a className="text-reset link-secondary" href="#!">Projects</a>
                                <a className="text-reset link-secondary" href="#!">Team</a>
                                <a className="text-reset link-secondary" href="#!">Careers</a>
                                <a className="text-reset link-secondary mb-0 d-flex align-items-center gap-1" href="#!">
                                    Jobs <kbd className="py-0">We're hiring!</kbd>
                                </a>
                            </div>
                        </div>
                        {/* <!-- links 2 --> */}
                        <div className="col-6 col-md-3 col-sm-6 col-lg-3 mb-3">
                            {/* <!-- Links --> */}
                            <div className="meta fs-6 fw-bold grayscale-200 mb-3">Marketplace</div>
                            <div className="d-grid gap-3 text-sm heading-6 grayscale-400">
                                <a className="text-reset link-secondary" href="#!">Explore</a>
                                <a className="text-reset link-secondary" href="#!">Anime</a>
                                <a className="text-reset link-secondary" href="#!">Blog</a>
                                <a className="text-reset link-secondary" href="#!">Help center</a>
                            </div>
                        </div>
                        {/* <!-- links 3 --> */}
                        <div className="col-6 col-md-3 col-sm-6 col-lg-3 mb-3">
                            {/* <!-- Links --> */}
                            <div className="meta fs-6 fw-bold grayscale-200 mb-3">Buy</div>
                            <div className="d-grid gap-3 text-sm heading-6 grayscale-400">
                                <a className="text-reset link-secondary" href="#!">Bitcoin</a>
                                <a className="text-reset link-secondary" href="#!">Ethereum</a>
                                <a className="text-reset link-secondary" href="#!">USDT</a>
                                <a className="text-reset link-secondary" href="#!">Cardano</a>
                            </div>
                        </div>
                        
                        <div className="col-6 col-md-3 col-sm-6 col-lg-3 mb-3">
                        
                            <div className="meta fs-6 fw-bold grayscale-200 mb-3">Links</div>
                            <div className="d-grid gap-3 text-sm heading-6 grayscale-400">
                                <a className="text-reset link-secondary" href="#!">Communities</a>
                                <a className="text-reset link-secondary" href="#!">License™</a>
                                <a className="text-reset link-secondary" href="#!">Terms & Conditions</a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            
            <div className="text-sm text-center heading-6 grayscale-500 p-4 mt-4 mb-0">
                © Enfty™️ 2025 - Made by 
                <a className="fw-bold grayscale-100 text-link" href="https://tophivetheme.com/" rel="nofollow" target="_blank">
                    Tophive
                </a>
            </div>

        </div>
    </footer>
   </>
  )
}

export default Footer