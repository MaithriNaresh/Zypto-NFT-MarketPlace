import React from 'react'

const Header = () => {
  return (
 <>
 <nav className="navbar py-0 navbar-dark bg-dark">
        <div className="container-fluid">
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasDarkNavbar">

                {/* <!-- header --> */}
                <div className="offcanvas-header card-line">

                    {/* <!-- brand logo --> */}
                    <div className="brand-logo pe-3">
                        <div className="logo-sm dark">
                            <a href="#home">
                                <img src="images/logo-dark.svg" alt=""/>
                            </a>
                        </div>
                        <div className="logo-sm light">
                            <a href="#home">
                                <img src="images/logo.svg" alt=""/>
                            </a>
                        </div>
                    </div>

                    {/* <!-- close btn --> */}
                    <button type="button" className="btn-close menu-button text-reset me-1" data-bs-dismiss="offcanvas" aria-label="Close">
                        <svg className="icon-wrap" width="24" height="24" viewBox="0 0 18 18" fill="none">
                            <path d="M13.5 4.5L4.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M4.5 4.5L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>

                </div>

                {/* <!-- main menu --> */}
                <div className="offcanvas-body">

                    {/* <!-- Search --> */}
                    <div className="d-flex align-items-center">
                        <input type="text" className="search input-wrap form-control redius card-border px-2" placeholder="Search for collections, NFTs or users"/>
                        <button className="enter" type="button" disabled="">/</button>
                    </div>

                    {/* <!-- menu item --> */}
                    <div className="navbar-nav justify-content-end flex-grow-1 gap-2 mt-3 pb-3">

                        {/* <!-- head --> */}
                        <div className="flex card-line mb-1 pb-1">
                            <span className="text-xs text-uppercase grayscale-500">
                                Pro Mode
                            </span>
                        </div>

                        {/* <!-- link --> */}
                        <div className="d-flex gap-2 mb-2">

                            {/* <!-- profile --> */}
                            <a className="col d-flex align-items-center gap-2 grayscale-300 text-link" href="profile.html">
                                <span className="d-inline-flex btn fw-medium bg-light bg-opacity-10 circle grayscale-200 p-1">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.4" d="M22 7.81V16.19C22 19 20.71 20.93 18.44 21.66C17.78 21.89 17.02 22 16.19 22H7.81C6.98 22 6.22 21.89 5.56 21.66C3.29 20.93 2 19 2 16.19V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81Z" fill="currentColor"></path>
                                        <path d="M18.44 21.66C17.78 21.89 17.02 22 16.19 22H7.81C6.98 22 6.22 21.89 5.56 21.66C5.91 19.02 8.67 16.97 12 16.97C15.33 16.97 18.09 19.02 18.44 21.66Z" fill="currentColor"></path>
                                        <path d="M15.58 11.58C15.58 13.56 13.98 15.17 12 15.17C10.02 15.17 8.41998 13.56 8.41998 11.58C8.41998 9.60002 10.02 8 12 8C13.98 8 15.58 9.60002 15.58 11.58Z" fill="currentColor"></path>
                                    </svg>
                                </span>
                                Profile
                            </a>

                            {/* <!-- marketplace --> */}
                            <a className="col d-flex align-items-center gap-2 grayscale-300 text-link" href="marketplace.html">
                                <span className="d-inline-flex btn fw-medium bg-light bg-opacity-10 circle grayscale-200 p-1">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M13.1901 16.29H10.8101V17.71H13.1901V16.29Z" fill="currentColor"></path>
                                        <path d="M7.94977 2.71C7.94977 3.11 7.62977 3.43 7.23977 3.43H6.28977C4.57977 3.43 3.18977 4.82 3.18977 6.52V12.4C2.33977 12.83 1.75977 13.71 1.75977 14.73V6.52C1.75977 4.03 3.78977 2 6.28977 2H7.23977C7.62977 2 7.94977 2.32 7.94977 2.71Z" fill="currentColor"></path>
                                        <path d="M22.2398 6.52V14.73C22.2398 13.71 21.6598 12.83 20.8098 12.4V6.52C20.8098 4.82 19.4198 3.43 17.7098 3.43H16.7598C16.3698 3.43 16.0498 3.11 16.0498 2.71C16.0498 2.32 16.3698 2 16.7598 2H17.7098C20.2098 2 22.2398 4.03 22.2398 6.52Z" fill="currentColor"></path>
                                        <path opacity="0.4" d="M10.8098 14.7299V19.3799C10.8098 20.8299 9.62977 21.9999 8.18976 21.9999H4.37977C2.93977 21.9999 1.75977 20.8299 1.75977 19.3799V14.7299C1.75977 13.7099 2.33977 12.8299 3.18977 12.3999C3.54977 12.2099 3.94977 12.1099 4.37977 12.1099H8.18976C9.62977 12.1099 10.8098 13.2799 10.8098 14.7299Z" fill="currentColor"></path>
                                        <path opacity="0.4" d="M22.2399 14.7299V19.3799C22.2399 20.8299 21.0599 21.9999 19.6199 21.9999H15.8099C14.3699 21.9999 13.1899 20.8299 13.1899 19.3799V14.7299C13.1899 13.2799 14.3699 12.1099 15.8099 12.1099H19.6199C20.0499 12.1099 20.4499 12.2099 20.8099 12.3999C21.6599 12.8299 22.2399 13.7099 22.2399 14.7299Z" fill="currentColor"></path>
                                    </svg>
                                </span>
                                Marketplace
                            </a>

                        </div>

                        {/* <!-- link --> */}
                        <div className="d-flex gap-2">

                            {/* <!-- my nft --> */}
                            <a className="col d-flex align-items-center gap-2 grayscale-300 text-link" href="my-nfts.html">
                                <span className="d-inline-flex btn fw-medium bg-light bg-opacity-10 circle grayscale-200 p-1">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.4" d="M22.0199 16.8198L18.8899 9.49978C18.3199 8.15978 17.4699 7.39978 16.4999 7.34978C15.5399 7.29978 14.6099 7.96978 13.8999 9.24978L11.9999 12.6598C11.5999 13.3798 11.0299 13.8098 10.4099 13.8598C9.77989 13.9198 9.14989 13.5898 8.63989 12.9398L8.41989 12.6598C7.70989 11.7698 6.82989 11.3398 5.92989 11.4298C5.02989 11.5198 4.25989 12.1398 3.74989 13.1498L2.01989 16.5998C1.39989 17.8498 1.45989 19.2998 2.18989 20.4798C2.91989 21.6598 4.18989 22.3698 5.57989 22.3698H18.3399C19.6799 22.3698 20.9299 21.6998 21.6699 20.5798C22.4299 19.4598 22.5499 18.0498 22.0199 16.8198Z" fill="currentColor"></path>
                                        <path d="M6.97009 8.38012C8.83681 8.38012 10.3501 6.86684 10.3501 5.00012C10.3501 3.13339 8.83681 1.62012 6.97009 1.62012C5.10337 1.62012 3.59009 3.13339 3.59009 5.00012C3.59009 6.86684 5.10337 8.38012 6.97009 8.38012Z" fill="currentColor"></path>
                                    </svg>
                                </span>
                                My NFTs
                            </a>

                            {/* <!-- settings --> */}
                            <a className="col d-flex align-items-center gap-2 grayscale-300 text-link" href="settings.html">
                                <span className="d-inline-flex btn fw-medium bg-light bg-opacity-10 circle grayscale-200 p-1">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path opacity="0.4" d="M2 12.8801V11.1201C2 10.0801 2.85 9.22006 3.9 9.22006C5.71 9.22006 6.45 7.94006 5.54 6.37006C5.02 5.47006 5.33 4.30006 6.24 3.78006L7.97 2.79006C8.76 2.32006 9.78 2.60006 10.25 3.39006L10.36 3.58006C11.26 5.15006 12.74 5.15006 13.65 3.58006L13.76 3.39006C14.23 2.60006 15.25 2.32006 16.04 2.79006L17.77 3.78006C18.68 4.30006 18.99 5.47006 18.47 6.37006C17.56 7.94006 18.3 9.22006 20.11 9.22006C21.15 9.22006 22.01 10.0701 22.01 11.1201V12.8801C22.01 13.9201 21.16 14.7801 20.11 14.7801C18.3 14.7801 17.56 16.0601 18.47 17.6301C18.99 18.5401 18.68 19.7001 17.77 20.2201L16.04 21.2101C15.25 21.6801 14.23 21.4001 13.76 20.6101L13.65 20.4201C12.75 18.8501 11.27 18.8501 10.36 20.4201L10.25 20.6101C9.78 21.4001 8.76 21.6801 7.97 21.2101L6.24 20.2201C5.33 19.7001 5.02 18.5301 5.54 17.6301C6.45 16.0601 5.71 14.7801 3.9 14.7801C2.85 14.7801 2 13.9201 2 12.8801Z" fill="currentColor"></path>
                                        <path d="M12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25Z" fill="currentColor"></path>
                                    </svg>
                                </span>
                                Settings
                            </a>

                        </div>

                    </div>

                    {/* <!-- menu item --> */}
                    <div className="navbar-nav justify-content-end flex-grow-1 gap-2 mt-3 pb-3">

                        {/* <!-- head --> */}
                        <div className="flex card-line mb-1 pb-1">
                            <span className="text-xs text-uppercase grayscale-500">
                                Collector
                            </span>
                        </div>

                        {/* <!-- dropdown (NFTs) --> */}
                        <div className="nav-item dropdown has-dropdown">
                            {/* <!-- nav link --> */}
                            <a className="nav-link has-dropdown d-flex justify-content-between align-items-center fw-medium" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                NFTs
                                <svg  x="0" y="0" version="1.1" viewBox="0 0 29 29" xmlSpace="preserve">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="m20.5 11.5-6 6-6-6"></path>
                                </svg>
                            </a>
                            {/* <!-- dropdown link --> */}
                            <div className="dropdown-menu profile_menu">
                                <a className="dropdown-item d-flex justify-content-between align-content-center" href="template-1.html">
                                    Template 1
                                </a>
                                <a className="dropdown-item d-flex justify-content-between align-content-center" href="template-2.html">
                                    Template 2
                                </a>
                                <a className="dropdown-item d-flex justify-content-between align-content-center" href="template-3.html">
                                    Template 3
                                </a>
                                <a className="dropdown-item d-flex justify-content-between align-content-center" href="template-4.html">
                                    Template 4
                                </a>
                                <a className="dropdown-item d-flex justify-content-between align-content-center" href="template-5.html">
                                    Template 5
                                </a>
                                <a className="dropdown-item d-flex justify-content-between align-content-center" href="template-6.html">
                                    Template 6
                                </a>
                            </div>

                        </div>

                        {/* <!-- link (pages) --> */}
                        <div className="nav-item profile_menu">
                            <a className="nav-link fw-medium" href="marketplace.html" role="button">
                                Marketplace
                            </a>
                        </div>

                        {/* <!-- dropdown (pages) --> */}
                        <div className="nav-item dropdown has-dropdown">

                            {/* <!-- nav link --> */}
                            <a className="nav-link has-dropdown d-flex justify-content-between align-items-center fw-medium" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Pages
                                <svg  x="0" y="0" version="1.1" viewBox="0 0 29 29" xmlSpace="preserve">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="m20.5 11.5-6 6-6-6"></path>
                                </svg>
                            </a>
                            {/* <!-- dropdown link --> */}
                            <div className="dropdown-menu profile_menu">
                                <a className="dropdown-item d-flex justify-content-between align-content-center" href="cards.html">
                                    NFTs Cards
                                </a>
                                <a className="dropdown-item d-flex justify-content-between align-content-center" href="nft-single.html">
                                    NFTs Single 
                                </a>
                                <a className="dropdown-item d-flex justify-content-between align-content-center" href="collection-single.html">
                                    Collections Single
                                </a>
                                <a className="dropdown-item d-flex justify-content-between align-content-center" href="user-single.html">
                                    User Profile
                                </a>
                            </div>

                        </div>

                        {/* <!-- dropdown (elements) --> */}
                        <div className="nav-item dropdown has-dropdown">

                            {/* <!-- nav link --> */}
                            <a className="nav-link has-dropdown d-flex justify-content-between align-items-center fw-medium" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Elements
                                <svg  x="0" y="0" version="1.1" viewBox="0 0 29 29" xmlSpace="preserve">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="m20.5 11.5-6 6-6-6"></path>
                                </svg>
                            </a>
                            {/* <!-- dropdown link --> */}
                            <div className="dropdown-menu profile_menu">
                                <a className="dropdown-item d-flex justify-content-between align-content-center" href="elements-accordions.html">
                                    Accordions
                                </a>
                                <a className="dropdown-item d-flex justify-content-between align-content-center" href="elements-buttons.html">
                                    Buttons
                                </a>
                                <a className="dropdown-item d-flex justify-content-between align-content-center" href="elements-alert.html">
                                    Alert messages
                                </a>
                                <a className="dropdown-item d-flex justify-content-between align-content-center" href="elements-modal.html">
                                    Modal
                                </a>
                                <a className="dropdown-item d-flex justify-content-between align-content-center" href="elements-login-form.html">
                                    Login form
                                </a>
                                <a className="dropdown-item d-flex justify-content-between align-content-center" href="elements-table.html">
                                    Tables
                                </a>
                                <a className="dropdown-item d-flex justify-content-between align-content-center" href="elements-progress-bar.html">
                                    Progress bar
                                </a>
                                <a className="dropdown-item d-flex justify-content-between align-content-center" href="elements-tab.html">
                                    Tabs
                                </a>
                                <a className="dropdown-item d-flex justify-content-between align-content-center" href="elements-carousel.html">
                                    Carousel
                                </a>
                                <a className="dropdown-item d-flex justify-content-between align-content-center" href="elements-tooltip.html">
                                    Tooltips
                                </a>
                            </div>

                        </div>

                        {/* <!-- dropdown (dashboard) --> */}
                        <div className="nav-item dropdown has-dropdown">

                            {/* <!-- nav link --> */}
                            <a className="nav-link has-dropdown d-flex justify-content-between align-items-center fw-medium" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dashboard
                                <svg  x="0" y="0" version="1.1" viewBox="0 0 29 29" xmlSpace="preserve">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="m20.5 11.5-6 6-6-6"></path>
                                </svg>
                            </a>
                            {/* <!-- dropdown link --> */}
                            <div className="dropdown-menu profile_menu">
                                <a className="dropdown-item d-flex justify-content-between align-content-center" href="discover.html">
                                    Discover
                                </a>
                                <a className="dropdown-item d-flex justify-content-between align-content-center" href="marketplace.html">
                                    Marketplace
                                </a>
                                <a className="dropdown-item d-flex justify-content-between align-content-center" href="activity.html">
                                    Activity
                                </a>
                                <a className="dropdown-item d-flex justify-content-between align-content-center" href="drops.html">
                                    Drops
                                </a>
                                <a className="dropdown-item d-flex justify-content-between align-content-center" href="launchpad.html">
                                    Launchpad
                                </a>
                                <a className="dropdown-item d-flex justify-content-between align-content-center" href="profile.html">
                                    My Profile
                                </a>
                                <a className="dropdown-item d-flex justify-content-between align-content-center" href="my-nfts.html">
                                    My NFTs
                                </a>
                                <a className="dropdown-item d-flex justify-content-between align-content-center" href="my-collections.html">
                                    My Collections
                                </a>
                                <a className="dropdown-item d-flex justify-content-between align-content-center" href="rewards.html">
                                    Rewards
                                </a>
                            </div>

                        </div>

                        {/* <!-- dropdown (blog) --> */}
                        <div className="nav-item dropdown has-dropdown">

                            {/* <!-- nav link --> */}
                            <a className="nav-link has-dropdown d-flex justify-content-between align-items-center fw-medium" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Blog
                                <svg  x="0" y="0" version="1.1" viewBox="0 0 29 29" xmlSpace="preserve">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="m20.5 11.5-6 6-6-6"></path>
                                </svg>
                            </a>
                            {/* <!-- dropdown link --> */}
                            <div className="dropdown-menu profile_menu">
                                <a className="dropdown-item d-flex justify-content-between align-content-center" href="blog.html">
                                    Blog classNameic
                                </a>
                                <a className="dropdown-item d-flex justify-content-between align-content-center" href="blog-single.html">
                                    Blog Single
                                </a>
                            </div>

                        </div>

                    </div>

                    {/* <!-- net Worth --> */}
                    <div className="card-border redius card-bs-tabs p-2 mb-3">
        
                        {/* <!-- head --> */}
                        <div className="d-flex justify-content-between align-items-center">

                            {/* <!-- title --> */}
                            <span className="d-flex align-items-center gap-2 text-sm fw-bold mb-2">
                                <svg className="infinite-rotate" width="18" height="18" viewBox="0 0 100 100" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M57.6809 5.00098C56.9465 5.02478 56.2419 5.29723 55.6826 5.77371C55.1233 6.25019 54.7423 6.90247 54.602 7.62374C54.52 8.04179 54.5212 8.47191 54.6054 8.88951C54.6897 9.30712 54.8554 9.70404 55.093 10.0576C55.3307 10.4112 55.6357 10.7144 55.9906 10.9501C56.3455 11.1858 56.7433 11.3492 57.1614 11.4311C64.7267 12.928 71.6765 16.6336 77.1297 22.0868C89.548 34.5051 92.1151 53.6454 83.4078 68.897C83.1956 69.2663 83.0583 69.6739 83.0037 70.0964C82.949 70.5188 82.9781 70.9479 83.0893 71.3591C83.2005 71.7703 83.3916 72.1556 83.6517 72.4929C83.9118 72.8303 84.2358 73.1131 84.6052 73.3252C84.9745 73.5374 85.3821 73.6747 85.8045 73.7294C86.227 73.784 86.6561 73.7549 87.0673 73.6437C87.4785 73.5325 87.8637 73.3414 88.2011 73.0814C88.5384 72.8213 88.8213 72.4973 89.0334 72.1279C99.1754 54.3634 96.1681 31.9519 81.7037 17.4875C75.3421 11.1259 67.235 6.81052 58.4095 5.06431C58.1698 5.01586 57.9253 4.99451 57.6809 5.00098ZM38.7832 5.54584C38.5952 5.55914 38.4086 5.58882 38.2257 5.63452C30.3818 7.66468 23.2201 11.7582 17.4909 17.4875C11.7632 23.2152 7.66863 30.3809 5.63789 38.2223C5.42197 39.054 5.54485 39.9373 5.97956 40.6785C6.41426 41.4196 7.12528 41.958 7.95654 42.1755C8.78905 42.3912 9.67316 42.2674 10.4145 41.8314C11.1558 41.3954 11.6936 40.6829 11.9096 39.8505C13.6504 33.1289 17.1741 26.9965 22.0838 22.0868C26.9949 17.1758 33.1302 13.6719 39.8538 11.9316C40.6837 11.7141 41.3936 11.1767 41.8281 10.437C42.2627 9.69733 42.3865 8.81562 42.1725 7.98485C41.9852 7.24429 41.5425 6.59359 40.9225 6.1474C40.3025 5.70122 39.5449 5.4882 38.7832 5.54584ZM50.0027 19.8125C33.3661 19.8125 19.8096 33.3691 19.8096 50.0057C19.8096 66.6423 33.3661 80.1989 50.0027 80.1989C66.6394 80.1989 80.1959 66.6423 80.1959 50.0057C80.1959 33.3691 66.6394 19.8125 50.0027 19.8125ZM50.0027 26.2997C63.1335 26.2997 73.7087 36.875 73.7087 50.0057C73.7087 63.1364 63.1335 73.7054 50.0027 73.7054C36.872 73.7054 26.2967 63.1364 26.2967 50.0057C26.2967 36.875 36.872 26.2997 50.0027 26.2997ZM8.31766 54.567C8.07765 54.5594 7.83754 54.5786 7.60175 54.6241C6.76091 54.7938 6.02155 55.2897 5.54546 56.0033C5.06936 56.7168 4.89531 57.5899 5.06138 58.4315C6.80833 67.2548 11.1307 75.3465 17.4909 81.7067C31.9553 96.1711 54.3414 99.1721 72.1059 89.0301C72.8483 88.6049 73.3927 87.9037 73.6205 87.079C73.8484 86.2544 73.7411 85.3731 73.3223 84.6272C73.1122 84.2557 72.831 83.9293 72.4946 83.6666C72.1582 83.404 71.7733 83.2104 71.3619 83.0968C70.9505 82.9832 70.5208 82.9519 70.0973 83.0047C69.6738 83.0575 69.2649 83.1934 68.894 83.4045C53.6424 92.1118 34.5021 89.551 22.0838 77.1328C16.6318 71.6808 12.9067 64.7279 11.4092 57.1644C11.2633 56.4458 10.8783 55.7977 10.3168 55.326C9.7554 54.8543 9.0507 54.5867 8.31766 54.567Z" fill="currentColor"/>
                                </svg>
                                Net worth
                            </span>

                        </div>
                        {/* <!-- amount card --> */}
                        <div className="card-bs p-3">

                            {/* <!-- head --> */}
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <span className="meta grayscale-500">Net worth</span>
                                <span className="flex grayscale-500 text-link" role="button" id="encrypt">
                                    <svg width="18" height="18" role="img" viewBox="0 -960 960 960">
                                        <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" fill="currentColor"></path>
                                    </svg>
                                </span>
                            </div>
                            {/* <!-- amount --> */}
                            <div className="d-sm-flex align-items-end gap-3">
                                <span className="h3 encrypted mb-0" data-content="">
                                    0.8263 <span className="fs-4 grayscale-500">ETH</span>
                                </span>
                                <span className="crypt-grayscale-700 encrypted" data-content="">
                                    ≈ $1,455.20
                                </span>
                            </div>
                            {/* <!-- metadata --> */}
                            <div className="d-flex gap-2 mt-3">
                                <button className="d-inline-flex align-items-center meta text-xs gap-2 text-bg-bs card-border redius  px-2 py-1" type="button" data-bs-toggle="tooltip" data-bs-html="true" data-bs-title="The percentage of your wallet's estimated value that comes from NFTs.">
                                    NFTs : <span className="encrypted meta text-xs text-link grayscale-100 mb-0">2%</span>
                                </button>
                                <button className="d-inline-flex align-items-center meta text-xs gap-2 text-bg-bs card-border redius  px-2 py-1" type="button" data-bs-toggle="tooltip" data-bs-html="true" data-bs-title="The percentage of your wallet's estimated value that comes from NFTs.">
                                    Tokens : <span className="encrypted meta text-xs text-link grayscale-100 mb-0">99%</span>
                                </button>
                            </div>

                        </div>

                    </div>

                </div>

                {/* <!-- footer --> */}
                <div className="offcanvas-footer p-2">
                    <div className="d-flex gap-2 card-bs-tabs redius p-1">

                        {/* <!-- avater --> */}
                        <img className="redius card-border" alt="" src="images/user/XCOPY.gif" width="54"/>

                        {/* <!-- info --> */}
                        <div className="d-grid">

                            {/* <!-- username --> */}
                            <div className="d-flex align-items-center gap-1">
                                <a className="h6 fw-bold grayscale-100 text-link mb-0" href="profile.html">0X9999E</a>
                                <div className="pb-1" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Verified">
                                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                                        <path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="var(--brand-color)"></path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="rgb(25, 28, 31)"></path>
                                    </svg>
                                </div>
                            </div>

                            {/* <!-- meta --> */}
                            <div className="d-flex justify-content-between align-items-center text-bg-bs card-border redius ps-2" role="button">
    
                                {/* <!-- address --> */}
                                <span className="d-flex align-items-center gap-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Copy address">
                                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path>
                                    </svg>
                                    <span className="meta text-xs grayscale-400 link-secondary mb-0">
                                        0xed5...c544
                                    </span>
                                </span>

                                <span className="vr mx-2"></span>

                                {/* <!-- social --> */}
                                <div className="social d-flex align-items-center gap-2">

                                    {/* <!-- website --> */}
                                    <span className="d-inline-flex gap-2 link-secondary text-bg-bs card-border redius px-2 py-1 disable-sm-screen">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M4.68131 11.1818H7.95007C8.13351 8.92103 8.89017 6.75089 10.1392 4.8735C7.22902 5.63125 5.01928 8.12447 4.68131 11.1818ZM12 5.08702C10.6339 6.84704 9.7981 8.96195 9.59257 11.1818H14.4074C14.2019 8.96195 13.3661 6.84704 12 5.08702ZM14.4074 12.8182C14.2019 15.038 13.3661 17.153 12 18.913C10.6339 17.153 9.7981 15.038 9.59257 12.8182H14.4074ZM7.95007 12.8182H4.68131C5.01928 15.8755 7.22902 18.3687 10.1392 19.1265C8.89017 17.2491 8.13351 15.079 7.95007 12.8182ZM13.8608 19.1265C15.1098 17.2491 15.8665 15.079 16.0499 12.8182H19.3187C18.9807 15.8755 16.771 18.3687 13.8608 19.1265ZM19.3187 11.1818H16.0499C15.8665 8.92103 15.1098 6.75089 13.8608 4.8735C16.771 5.63125 18.9807 8.12447 19.3187 11.1818ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" fill="currentColor"></path>
                                        </svg>
                                    </span>
                                    {/* <!-- x --> */}
                                    <span className="d-inline-flex gap-2 link-secondary text-bg-bs card-border redius px-2 py-1">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                            <path d="M17.7512 4H20.818L14.1179 11.201L22 21H15.8284L10.9946 15.057L5.46359 21H2.39494L9.5613 13.2977L2 4H8.32828L12.6976 9.43215L17.7512 4ZM16.6748 19.2738H18.3742L7.4049 5.63549H5.58133L16.6748 19.2738Z" fill="currentColor"></path>
                                        </svg>
                                    </span>
                                    {/* <!-- discord --> */}
                                    <span className="d-inline-flex gap-2 link-secondary text-bg-bs card-border redius px-2 py-1 disable-sm-screen">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                            <path d="M18.9308 5.32631C17.6561 4.71242 16.2892 4.26013 14.8599 4.00109C14.8339 3.99609 14.8079 4.00858 14.7945 4.03357C14.6187 4.36175 14.4239 4.78988 14.2876 5.12639C12.7503 4.88484 11.221 4.88484 9.71527 5.12639C9.57887 4.7824 9.37707 4.36175 9.20048 4.03357C9.18707 4.00941 9.16107 3.99692 9.13504 4.00109C7.70659 4.2593 6.33963 4.71159 5.06411 5.32631C5.05307 5.33131 5.04361 5.33965 5.03732 5.35047C2.44449 9.4161 1.73421 13.3818 2.08265 17.2983C2.08423 17.3175 2.09447 17.3358 2.10867 17.3475C3.81934 18.666 5.47642 19.4665 7.10273 19.9971C7.12876 20.0054 7.15634 19.9954 7.1729 19.9729C7.55761 19.4215 7.90054 18.8401 8.19456 18.2287C8.21192 18.1929 8.19535 18.1504 8.15989 18.1363C7.61594 17.9197 7.098 17.6557 6.59977 17.3558C6.56037 17.3317 6.55721 17.2725 6.59347 17.2442C6.69831 17.1617 6.80318 17.0759 6.9033 16.9893C6.92141 16.9735 6.94665 16.9701 6.96794 16.9801C10.2411 18.5486 13.7846 18.5486 17.0191 16.9801C17.0404 16.9693 17.0657 16.9726 17.0846 16.9885C17.1847 17.0751 17.2895 17.1617 17.3952 17.2442C17.4314 17.2725 17.4291 17.3317 17.3897 17.3558C16.8914 17.6615 16.3735 17.9197 15.8288 18.1354C15.7933 18.1496 15.7775 18.1929 15.7949 18.2287C16.0952 18.8393 16.4381 19.4207 16.8157 19.9721C16.8315 19.9954 16.8599 20.0054 16.8859 19.9971C18.5201 19.4665 20.1772 18.666 21.8879 17.3475C21.9028 17.3358 21.9123 17.3183 21.9139 17.2992C22.3309 12.7712 21.2154 8.83804 18.9568 5.3513C18.9513 5.33965 18.9419 5.33131 18.9308 5.32631ZM8.68335 14.9136C7.69792 14.9136 6.88594 13.964 6.88594 12.7979C6.88594 11.6317 7.68217 10.6822 8.68335 10.6822C9.69239 10.6822 10.4965 11.6401 10.4807 12.7979C10.4807 13.964 9.68451 14.9136 8.68335 14.9136ZM15.329 14.9136C14.3435 14.9136 13.5316 13.964 13.5316 12.7979C13.5316 11.6317 14.3278 10.6822 15.329 10.6822C16.338 10.6822 17.1421 11.6401 17.1264 12.7979C17.1264 13.964 16.338 14.9136 15.329 14.9136Z" fill="currentColor"></path>
                                        </svg>
                                    </span>

                                </div>

                            </div>

                        </div>

                        {/* <!-- arrow btn --> */}
                        <div className="d-flex align-items-start ml-auto">
                            <a className="btn btn-editor btn-dark px-2 py-1" href="profile.html">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 3V16.4751H19.5083V5.53591L4.0442 21L3 19.9061L18.4144 4.49171H7.47514V3H21Z" fill="currentColor" fillOpacity="0.41"></path>
                                </svg>
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </nav>
 </>
  )
}

export default Header