import React from 'react'

const HeaderComponet = ({ title = "Profile"  }) => {
  return (
   <div className="header">

              
                <div className="d-flex align-items-center gap-2">
                  
                    <div className="hamburger-menu grayscale-600 link-secondary" role="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu">
                        <svg width="18" height="18" viewBox="0 0 100 100" fill="none">
                            <path d="M90.6454 20.1611H60.1615C57.7663 20.1611 55.8066 22.1208 55.8066 24.516C55.8066 26.9111 57.7663 28.8708 60.1615 28.8708H90.6454C93.0405 28.8708 95.0002 26.9111 95.0002 24.516C95.0002 22.1208 93.0405 20.1611 90.6454 20.1611Z" fill="currentcolor"/>
                            <path d="M90.6454 44.8389H60.1615C57.7663 44.8389 55.8066 46.7985 55.8066 49.1937C55.8066 51.5889 57.7663 53.5485 60.1615 53.5485H90.6454C93.0405 53.5485 95.0002 51.5889 95.0002 49.1937C95.0002 46.7985 93.0405 44.8389 90.6454 44.8389Z" fill="currentcolor"/>
                            <path d="M90.6454 69.5161H60.1615C57.7663 69.5161 55.8066 71.4758 55.8066 73.871C55.8066 76.2661 57.7663 78.2258 60.1615 78.2258H90.6454C93.0405 78.2258 95.0002 76.2661 95.0002 73.871C95.0002 71.4758 93.0405 69.5161 90.6454 69.5161Z" fill="currentcolor"/>
                            <path d="M25.3226 10H20.9677C12.1565 10 5 17.1565 5 25.9677V72.4194C5 81.2306 12.1565 88.3871 20.9677 88.3871H25.3226C29.5903 88.3871 33.5968 86.7323 36.6161 83.7129C39.6355 80.6935 41.2903 76.6871 41.2903 72.4194V25.9677C41.2903 17.171 34.1194 10 25.3226 10ZM25.3226 79.6774H20.9677C16.9613 79.6774 13.7097 76.4258 13.7097 72.4194V25.9677C13.7097 21.9613 16.9613 18.7097 20.9677 18.7097H25.3226C29.329 18.7097 32.5806 21.9613 32.5806 25.9677V72.4194C32.5806 76.4258 29.329 79.6774 25.3226 79.6774Z" fill="currentcolor"/>
                        </svg>
                    </div>
                    <h3 className="fw-bold fs-5 grayscale-100 mb-0">
                        {title}
                    </h3>
                </div>

                
                <div className=" col-4 disable-sm-screen">
                    <div className="d-flex align-items-center mx-3">
                        <input type="text" className="search input-wrap form-control redius card-border px-2" placeholder="Search for collections, NFTs or users"/>
                        <button className="enter" type="button" disabled="">/</button>
                    </div>
                </div>

                
                <div className="user-settings gap-2">

                    
                    <div className="wallet d-flex gap-2">

                        
                        <div className="dropdown disable-sm-screen">
                            <button className="dropdown-toggle btn btn-editor text-bg-bs card-border text-link redius px-2" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                <svg width="16" height="16" viewBox="0 0 24 24">
                                    <g fill="currentColor">
                                        <path d="m12 16.576 7.498-4.353L12 8.873zM4.5 12.223l7.5 4.353V8.874zM12 0v8.872l7.498 3.35z"></path>
                                        <path d="M12 0 4.5 12.223 12 8.872zM12 17.972V24l7.503-10.381zM12 24v-6.03L4.5 13.62z"></path>
                                    </g>
                                </svg>
                                <span className="fw-bold mb-0">
                                </span>
                            </button>
                            
                            <div className="profile_menu">
                                <div className="dropdown-menu redius card-bs card-border p-2" data-popper-placement="bottom-end" style={{"position": "absolute; inset: 0px 0px auto auto" , "margin": "0px" , "transform": "translate(0px, 38px)"}}>
                                    <a className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2" href="#!" role="button">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17 12.1471L11.9997 4L7.00146 12.1471L11.9997 15.0839L17 12.1471ZM17 13.0803L11.9998 15.979L6.99818 13.0775L11.9998 19.9972L17 13.0803Z" fill="currentColor"></path>
                                        </svg>
                                        Ethereum
                                    </a>
                                    <a className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2" href="#!" role="button">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M16.0738 9.34485C15.7786 9.16444 15.3948 9.16444 15.0701 9.34485L12.7675 10.728L11.2029 11.6301L8.90037 13.0132C8.60516 13.1936 8.2214 13.1936 7.89668 13.0132L6.06642 11.9307C5.77122 11.7503 5.56458 11.4196 5.56458 11.0587V8.92389C5.56458 8.56307 5.7417 8.23233 6.06642 8.05192L7.86715 6.99953C8.16236 6.81912 8.54612 6.81912 8.87084 6.99953L10.6716 8.05192C10.9668 8.23233 11.1734 8.56307 11.1734 8.92389V10.307L12.738 9.37492V7.99179C12.738 7.63096 12.5609 7.30021 12.2362 7.1198L8.90037 5.13531C8.60516 4.9549 8.2214 4.9549 7.89668 5.13531L4.50184 7.1198C4.17712 7.30021 4 7.63096 4 7.99179V11.9909C4 12.3517 4.17712 12.6824 4.50184 12.8628L7.89668 14.8473C8.19187 15.0277 8.57564 15.0277 8.90037 14.8473L11.2029 13.4943L12.7675 12.5622L15.0701 11.2091C15.3653 11.0287 15.7491 11.0287 16.0738 11.2091L17.8745 12.2615C18.1697 12.4419 18.3764 12.7726 18.3764 13.1334V15.2683C18.3764 15.6291 18.1993 15.9598 17.8745 16.1402L16.0738 17.2227C15.7786 17.4031 15.3948 17.4031 15.0701 17.2227L13.2694 16.1703C12.9742 15.9899 12.7675 15.6591 12.7675 15.2983V13.9152L11.2029 14.8473V16.2304C11.2029 16.5912 11.3801 16.922 11.7048 17.1024L15.0996 19.0869C15.3948 19.2673 15.7786 19.2673 16.1033 19.0869L19.4982 17.1024C19.7933 16.922 20 16.5912 20 16.2304V12.2314C20 11.8706 19.8228 11.5398 19.4982 11.3594L16.0738 9.34485Z" fill="currentColor"></path>
                                        </svg>
                                        Polygon
                                    </a>
                                    <a className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2" href="#!" role="button">
                                        <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
                                            <path d="M11.9331 6.95173C9.1618 6.98223 6.91745 9.37134 6.9516 12.2535C6.96136 12.9906 7.11261 13.6921 7.38584 14.3275C7.42487 14.4241 7.54685 14.4444 7.61515 14.3682L8.72269 13.1736C8.79588 13.0973 8.82515 12.9855 8.80563 12.8788C8.76172 12.6551 8.73733 12.4264 8.73733 12.1925C8.73733 10.327 10.1913 8.81219 11.9819 8.81219C12.3861 8.81219 12.6263 8.81297 12.7578 8.81452C12.7475 8.82056 12.737 8.82607 12.7261 8.83102C12.5988 8.83804 12.4556 8.84701 12.5186 8.85794C12.5896 8.87027 12.6624 8.86016 12.7261 8.83102L12.7601 8.82917C12.8913 8.82204 12.9811 8.81716 12.7578 8.81452C12.7867 8.79752 12.813 8.77628 12.8357 8.75119L13.9384 7.5668C14.0018 7.49563 13.9823 7.3838 13.8945 7.34314C13.2895 7.08389 12.6259 6.94156 11.9282 6.95173H11.9331Z" fill="currentColor"></path>
                                            <path d="M17.0484 12.0584C17.0826 14.771 14.8382 17.0196 12.0669 17.0483H12.0718C11.3741 17.0579 10.7105 16.9239 10.1055 16.6799C10.0177 16.6464 9.9982 16.5364 10.0616 16.4694L11.1643 15.3547C11.187 15.3311 11.2133 15.3111 11.2422 15.2951C11.3737 15.2965 11.6139 15.2973 12.0181 15.2973C13.8087 15.2973 15.2627 13.8716 15.2627 12.1158C15.2627 11.8957 15.2383 11.6804 15.1944 11.4699C15.1749 11.3694 15.2041 11.2642 15.2773 11.1924L16.3848 10.0681C16.4532 9.99638 16.5751 10.0155 16.6142 10.1064C16.8874 10.7044 17.0386 11.3647 17.0484 12.0584Z" fill="currentColor"></path>
                                            <path d="M11.2739 15.2796C11.263 15.2842 11.2525 15.2894 11.2422 15.2951C11.0189 15.2926 11.1087 15.288 11.2399 15.2813L11.2739 15.2796Z" fill="currentColor"></path>
                                            <path d="M11.4814 15.2542C11.4104 15.2426 11.3376 15.2521 11.2739 15.2796C11.4012 15.273 11.5444 15.2645 11.4814 15.2542Z" fill="currentColor"></path>
                                            <path d="M7.27937 15.1395L9.43223 12.9867C9.86976 12.5492 10.5758 12.5492 11.0133 12.9867C11.4508 13.4242 11.4508 14.1302 11.0133 14.5678L8.86045 16.7206C8.42292 17.1582 7.7169 17.1582 7.27937 16.7206C6.84184 16.2831 6.84184 15.5771 7.27937 15.1395Z" fill="currentColor"></path>
                                            <path d="M15.1395 7.27937L12.9867 9.43223C12.5492 9.86976 12.5492 10.5758 12.9867 11.0133C13.4242 11.4508 14.1302 11.4508 14.5678 11.0133L16.7206 8.86045C17.1582 8.42292 17.1582 7.7169 16.7206 7.27937C16.2831 6.84184 15.5771 6.84184 15.1395 7.27937Z" fill="currentColor"></path>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 3C7.02985 3 3 7.02985 3 12C3 16.9701 7.02985 21 12 21C16.9701 21 21 16.9701 21 12C21 7.02985 16.9701 3 12 3ZM12 19.4073C7.91258 19.4073 4.59275 16.0922 4.59275 12C4.59275 7.90778 7.90778 4.59275 12 4.59275C16.0922 4.59275 19.4072 7.90778 19.4072 12C19.4072 16.0922 16.0922 19.4073 12 19.4073Z" fill="currentColor"></path>
                                        </svg>
                                        Etherlink
                                    </a>
                                    <a className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2" href="#!" role="button">
                                        <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
                                            <circle cx="32" cy="32" r="32" fill="none"></circle><path d="M17.2358 12.6175H19.7714C19.8307 12.6175 19.8878 12.5949 19.9304 12.5543C19.9731 12.5137 19.998 12.4584 20 12.4V10.6C20 10.5403 19.9759 10.4831 19.9331 10.4409C19.8902 10.3987 19.8321 10.375 19.7714 10.375H16.2179L13.4187 4.1785C13.395 4.12581 13.3564 4.08097 13.3075 4.04931C13.2586 4.01766 13.2014 4.00054 13.1429 4H10.8572C10.7984 4.00025 10.741 4.01723 10.6918 4.0489C10.6425 4.08058 10.6037 4.12558 10.5799 4.1785L7.78219 10.3675H4.2287C4.19803 10.3675 4.16767 10.3735 4.13943 10.3853C4.11119 10.3971 4.08565 10.4143 4.06432 10.436C4.04299 10.4577 4.02632 10.4834 4.01529 10.5116C4.00426 10.5398 3.9991 10.5698 4.00013 10.6V12.4C4.00013 12.4597 4.02421 12.5169 4.06707 12.5591C4.10994 12.6013 4.16808 12.625 4.2287 12.625H6.76429L4.02146 18.691C4.00764 18.7248 4.00236 18.7614 4.00606 18.7976C4.00977 18.8338 4.02235 18.8686 4.04273 18.899C4.06312 18.9294 4.09069 18.9545 4.12308 18.9721C4.15547 18.9897 4.19171 18.9992 4.2287 19H6.26906C6.32811 19 6.38591 18.9832 6.43541 18.9515C6.48491 18.9198 6.524 18.8747 6.54791 18.8215L12.0001 6.76749L17.4522 18.8215C17.4761 18.8747 17.5152 18.9198 17.5647 18.9515C17.6142 18.9832 17.672 19 17.7311 19H19.7714C19.8095 19 19.847 18.9906 19.8805 18.9727C19.9139 18.9548 19.9423 18.929 19.9631 18.8975C19.9838 18.8661 19.9962 18.83 19.9993 18.7927C20.0022 18.7553 19.9957 18.7178 19.9802 18.6835L17.2358 12.6175Z" fill="currentColor"></path>
                                        </svg>
                                        Aleph Zero
                                    </a>
                                    <a className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2" href="#!" role="button">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M9.08673 10.8029L12 7.88994L14.9142 10.8041L16.6093 9.10929L12 4.5L7.39188 9.10782L9.08673 10.8029ZM4.5 12L6.19512 10.3046L7.88994 12L6.19482 13.6943L4.5 12ZM9.08673 13.1968L12 16.1095L14.9142 13.1953L16.6102 14.8893L12 19.5L7.39188 14.8916L7.38954 14.889L9.08673 13.1968ZM16.1095 12L17.8043 10.3052L19.5 12L17.8052 13.6948L16.1095 12Z" fill="currentColor"></path>
                                            <path d="M13.799 12.0006L12.001 10.2002L10.6707 11.5296L10.5174 11.6829L10.2027 11.9976L10.2002 12L10.2027 12.0025L12.001 13.8002L13.8002 12.0013H13.7987" fill="currentColor"></path>
                                        </svg>
                                        BNB
                                    </a>
                                    <a className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2" href="#!" role="button">
                                        <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
                                            <path d="M14.3493 7.15663C14.2908 7.18164 14.2279 7.19454 14.1642 7.19455H5.58021C6.32806 6.2016 7.29759 5.39595 8.41198 4.84146C9.52637 4.28697 10.755 3.99887 12.0005 4C13.2458 3.99902 14.4742 4.28718 15.5884 4.84167C16.7026 5.39615 17.672 6.20172 18.4198 7.19455H16.8815C16.7165 7.19455 16.5605 7.12364 16.4511 7.00091L15.8767 6.35546C15.7919 6.25818 15.6679 6.20364 15.5393 6.20364H15.511C15.4503 6.20381 15.3903 6.21622 15.3345 6.24013C15.2787 6.26403 15.2283 6.29893 15.1864 6.34273L14.5044 7.04909C14.4605 7.09504 14.4077 7.13163 14.3493 7.15663Z" fill="currentColor"></path>
                                            <path d="M19.5778 9.35182H14.9758C14.8116 9.35182 14.6548 9.28091 14.5454 9.15818L13.9709 8.51273C13.9287 8.46496 13.8768 8.4267 13.8187 8.4005C13.7605 8.37429 13.6974 8.36073 13.6335 8.36073C13.5697 8.36073 13.5066 8.37429 13.4484 8.4005C13.3903 8.4267 13.3384 8.46496 13.2962 8.51273L12.8038 9.06727C12.6415 9.24818 12.4108 9.35273 12.1673 9.35273H4.42127C4.19713 9.99067 4.05557 10.6545 4 11.3282H11.3129C11.3765 11.3281 11.4395 11.3152 11.4979 11.2902C11.5564 11.2652 11.6092 11.2286 11.653 11.1827L12.3342 10.4755C12.3762 10.4315 12.4267 10.3965 12.4826 10.3726C12.5386 10.3487 12.5988 10.3364 12.6597 10.3364H12.6871C12.7509 10.3363 12.814 10.3499 12.8722 10.376C12.9303 10.4022 12.9822 10.4404 13.0244 10.4882L13.5989 11.1336C13.653 11.1945 13.7194 11.2432 13.7937 11.2766C13.8681 11.31 13.9487 11.3273 14.0302 11.3273H20C19.9426 10.6409 19.7985 9.97909 19.5778 9.35182Z" fill="currentColor"></path>
                                            <path d="M8.61053 15.4408C8.66915 15.4159 8.7221 15.3795 8.76617 15.3336L9.44731 14.6264C9.4893 14.5824 9.5398 14.5474 9.59576 14.5235C9.65171 14.4996 9.71196 14.4873 9.77284 14.4873H9.80019C9.86401 14.4872 9.92711 14.5008 9.98528 14.527C10.0435 14.5531 10.0954 14.5914 10.1376 14.6391L10.712 15.2845C10.7661 15.3454 10.8325 15.3941 10.9068 15.4275C10.9812 15.4609 11.0618 15.4782 11.1433 15.4782H19.2331C19.5396 14.8452 19.7603 14.1745 19.8897 13.4836H12.1254C11.9603 13.4836 11.8035 13.4136 11.6941 13.29L11.1196 12.6445C11.0774 12.5968 11.0255 12.5585 10.9674 12.5323C10.9092 12.5061 10.8461 12.4925 10.7822 12.4925C10.7184 12.4925 10.6553 12.5061 10.5971 12.5323C10.539 12.5585 10.487 12.5968 10.4449 12.6445L9.95247 13.1991C9.79107 13.3809 9.56038 13.4845 9.31692 13.4845H4.11033C4.2396 14.1752 4.46037 14.8456 4.76685 15.4782H8.42514C8.48884 15.4784 8.55191 15.4656 8.61053 15.4408Z" fill="currentColor"></path>
                                            <path d="M17.8699 17.4555H8.97042C8.80538 17.4555 8.64854 17.3845 8.53912 17.2618L7.96466 16.6164C7.92248 16.5686 7.87057 16.5303 7.8124 16.5041C7.75422 16.4779 7.69112 16.4644 7.62728 16.4644C7.56345 16.4644 7.50035 16.4779 7.44217 16.5041C7.384 16.5303 7.3321 16.5686 7.28991 16.6164L6.79751 17.1709C6.63612 17.3518 6.40543 17.4564 6.16196 17.4564H6.12914C6.87962 18.26 7.7883 18.9006 8.79837 19.3383C9.80844 19.776 10.8982 20.0012 11.9995 20C13.1009 20.0011 14.1907 19.7757 15.2008 19.3379C16.2109 18.9001 17.1195 18.2592 17.8699 17.4555Z" fill="currentColor"></path>
                                        </svg>
                                        Aptos
                                    </a>
                                    <a className="dropdown-item card-bs d-flex align-items-center fw-medium gap-2" href="#!" role="button">
                                        <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
                                            <path d="M3 9.22078V7.14286C3 6.51167 3.76751 6 4.71428 6H7.83117C8.77794 6 9.54545 6.51167 9.54545 7.14286V8.82086C9.54545 9.11018 9.71786 9.38766 10.0247 9.59225C10.6638 10.0183 11.6999 10.0183 12.3389 9.59225L17.2252 6.33474C17.5467 6.12041 17.9827 6 18.4374 6H19.2857C20.2325 6 21 6.51167 21 7.14286V7.70843C21 8.01154 20.8194 8.30223 20.4979 8.51655L15.6116 11.7741C14.9726 12.2001 14.9726 12.8908 15.6116 13.3168C15.9185 13.5214 16.3347 13.6364 16.7687 13.6364H19.2857C20.2325 13.6364 21 14.148 21 14.7792V16.8571C21 17.4883 20.2325 18 19.2857 18H16.1688C15.2221 18 14.4545 17.4883 14.4545 16.8571V15.1791C14.4545 14.8898 14.2821 14.6123 13.9753 14.4078C13.3362 13.9817 12.3001 13.9817 11.6611 14.4078L6.77483 17.6653C6.45334 17.8796 6.0173 18 5.56265 18H4.71429C3.76751 18 3 17.4883 3 16.8571V16.2916C3 15.9885 3.18061 15.6978 3.5021 15.4834L8.38837 12.2259C9.02741 11.7999 9.02741 11.1092 8.38837 10.6832C8.08149 10.4786 7.66528 10.3636 7.23129 10.3636H4.71429C3.76751 10.3636 3 9.85196 3 9.22078Z" fill="currentColor"></path>
                                        </svg>
                                        RARI Chain
                                    </a>
                                </div>
                            </div>
                        </div>

                        
                        <div className="flex">

                            
                            <button className="btn btn-editor text-bg-bs text-link card-border redius position-relative px-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
                                
                                <svg fill="currentColor" height="20" width="20" viewBox="0 -960 960 960">
                                    <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"></path>
                                </svg>
                                
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                                    4
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </button>

                            
                            <div className="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">

                                {/* <!-- header --> */}
                                <div className="container offcanvas-header pt-4 px-4">
                                    <span className="fs-4 h2 grayscale-200" id="offcanvasBottomLabel">
                                        Checkout
                                    </span>
                                    <button type="button" className="btn-close text-reset close-notify align-items-center justify-content-center" data-bs-dismiss="offcanvas" aria-label="Close">
                                        <svg className="close-notify" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M13.5 4.5L4.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M4.5 4.5L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </button>
                                </div>

                                {/* <!-- content --> */}
                                <div className="container offcanvas-body">
                                    <div className="d-sm-flex justify-content-between gap-5">

                                        {/* <!-- cart items --> */}
                                        <div className="col-md-6 mb-4">
                                            <div className="card-bs card-border redius table-scroll">
                                                <div className="table-responsive">
                                                    <table className="table table-dark table-hover mb-0">
        
                                                        <thead>
                                                            <tr className="table-active mb-0">
                                                                <th scope="col" className="text-uppercase mb-0">Items</th>
                                                                <th scope="col" className="text-uppercase mb-0">Price</th>
                                                                <th scope="col" className="text-uppercase mb-0"></th>
                                                            </tr>
                                                        </thead>
        
                                                        <tbody>
                                                            {/* <!-- item 1 --> */}
                                                            <tr className="align-middle alert alert-dismissible fade show">
                                                                {/* <!-- nft --> */}
                                                                <td>
                                                                    <div className="d-flex align-items-center gap-3">
                                                                        <img className="redius card-border" alt="" src="images/nft/azuki-1.jpg" width="48" height="48"/>
                                                                        <div className="d-grid gap-1">
                                                                            <a className="fs-6 fw-bold grayscale-100 text-link mb-0" href="nft-single.html">Elementals #68</a>
                                                                            <a className="h6 fw-medium grayscale-400 link-secondary mb-0" href="user-single.html">@azuki_team</a>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                {/* <!-- price --> */}
                                                                <td className="h6 grayscale-600" data-content="Live Minted 2h ago">
                                                                    <div className="d-grid gap-2">
                                                                        <span className="text-sm link-secondary grayscale-200">0.0032 wETH</span>
                                                                        <span className="text-xs grayscale-500">$7.38</span>
                                                                    </div>
                                                                </td>
                                                                {/* <!-- action --> */}
                                                                <td className="h6 fw-medium grayscale-300" data-content="Manage">
                                                                    <span className="d-inline-flex grayscale-700 link-secondary" role="button" data-bs-dismiss="alert" aria-label="Close">
                                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                                            <path d="M13.5 4.5L4.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                            <path d="M4.5 4.5L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                        </svg>
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                            {/* <!-- item 2 --> */}
                                                            <tr className="align-middle alert alert-dismissible fade show">
                                                                {/* <!-- product --> */}
                                                                <td>
                                                                    <div className="d-flex align-items-center gap-3">
                                                                        <img className="redius card-border" alt="" src="images/nft/OriginStories-3.jpg" width="48" height="48"/>
                                                                        <div className="d-grid gap-1">
                                                                            <a className="fs-6 fw-bold grayscale-100 text-link mb-0" href="nft-single.html">OriginS tories #862</a>
                                                                            <a className="h6 fw-medium grayscale-400 link-secondary mb-0" href="user-single.html">@OriginStories</a>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                {/* <!-- price --> */}
                                                                <td className="h6 grayscale-600" data-content="Live Minted 2h ago">
                                                                    <div className="d-grid gap-2">
                                                                        <span className="text-sm link-secondary grayscale-200">0.0032 wETH</span>
                                                                        <span className="text-xs grayscale-500">$7.38</span>
                                                                    </div>
                                                                </td>
                                                                {/* <!-- action --> */}
                                                                <td className="h6 fw-medium grayscale-300" data-content="Manage">
                                                                    <span className="d-inline-flex grayscale-700 link-secondary" role="button" data-bs-dismiss="alert" aria-label="Close">
                                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                                            <path d="M13.5 4.5L4.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                            <path d="M4.5 4.5L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                        </svg>
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                            {/* <!-- item 3 --> */}
                                                            <tr className="align-middle alert alert-dismissible fade show">
                                                                {/* <!-- product --> */}
                                                                <td>
                                                                    <div className="d-flex align-items-center gap-3">
                                                                        <img className="redius card-border" alt="" src="images/nft/HypioBabies-2.jpg" width="48" height="48"/>
                                                                        <div className="d-grid gap-1">
                                                                            <a className="fs-6 fw-bold grayscale-100 text-link mb-0" href="nft-single.html">Hypio Babies #4520</a>
                                                                            <a className="h6 fw-medium grayscale-400 link-secondary mb-0" href="user-single.html">@Hypio</a>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                {/* <!-- price --> */}
                                                                <td className="h6 grayscale-600" data-content="Live Minted 2h ago">
                                                                    <div className="d-grid gap-2">
                                                                        <span className="text-sm link-secondary grayscale-200">0.0032 wETH</span>
                                                                        <span className="text-xs grayscale-500">$7.38</span>
                                                                    </div>
                                                                </td>
                                                                {/* <!-- action --> */}
                                                                <td className="h6 fw-medium grayscale-300" data-content="Manage">
                                                                    <span className="d-inline-flex grayscale-700 link-secondary" role="button" data-bs-dismiss="alert" aria-label="Close">
                                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                                            <path d="M13.5 4.5L4.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                            <path d="M4.5 4.5L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                        </svg>
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                            {/* <!-- item 3 --> */}
                                                            <tr className="align-middle alert alert-dismissible fade show">
                                                                {/* <!-- product --> */}
                                                                <td>
                                                                    <div className="d-flex align-items-center gap-3">
                                                                        <img className="redius card-border" alt="" src="images/nft/Snekkie-3.jpg" width="48" height="48"/>
                                                                        <div className="d-grid gap-1">
                                                                            <a className="fs-6 fw-bold grayscale-100 text-link mb-0" href="nft-single.html">Snekkies #4520</a>
                                                                            <a className="h6 fw-medium grayscale-400 link-secondary mb-0" href="user-single.html">@Mathiew JR</a>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                {/* <!-- price --> */}
                                                                <td className="h6 grayscale-600" data-content="Live Minted 2h ago">
                                                                    <div className="d-grid gap-2">
                                                                        <span className="text-sm link-secondary grayscale-200">0.0032 wETH</span>
                                                                        <span className="text-xs grayscale-500">$7.38</span>
                                                                    </div>
                                                                </td>
                                                                {/* <!-- action --> */}
                                                                <td className="h6 fw-medium grayscale-300" data-content="Manage">
                                                                    <span className="d-inline-flex grayscale-700 link-secondary" role="button" data-bs-dismiss="alert" aria-label="Close">
                                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                                            <path d="M13.5 4.5L4.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                            <path d="M4.5 4.5L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                        </svg>
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                        </tbody>

                                                        {/* <!-- total aamount --> */}
                                                        <tbody className="table-active">
                                                            <tr className="align-middle alert alert-dismissible fade show">
                                                                <td colSpan="2">
                                                                    <span className="text-sm link-secondary grayscale-400">
                                                                        Total amount
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <div className="d-grid gap-2 fright">
                                                                        <span className="text-sm link-secondary grayscale-200">= 0.0032 wETH</span>
                                                                        <span className="text-xs grayscale-500">≈ $7.38</span>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
        
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-1 vr disable-sm-screen"></div>

                                        {/* <!-- checkout --> */}
                                        <div className="col-md-5">
                                            <div className="flex">
                                                <div className="h6 meta grayscale-200 mb-3">Payment method</div>
                                                <form className="was-validation">
                                                    
                                                    {/* <!-- payment method --> */}
                                                    <div className="table-responsive card-bs card-border">
                                                        <table className="table table-dark table-hover mb-0">
                                                            <tbody>
                                                                {/* <!-- embedded wallet --> */}
                                                                <tr className="align-middle">
                                                                    <td>
                                                                        <label className="d-flex align-items-center justify-content-between py-2" htmlFor="EmbeddedWallet">
                                                                            <span className="d-flex align-items-center gap-2 svg-s1 grayscale-200 fs-5 fw-bold mb-0">
                                                                                <svg width="32" height="32" viewBox="0 0 20 20" fill="none">
                                                                                    <path d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM5.75501 10.36H4.58334V14.84L5.83668 15.8333H8.73501L9.97334 14.8383V10.36H8.80168V14.3217L8.30668 14.7192H6.26084L5.75501 14.3183V10.36ZM15.1567 10.3583H10.8133V15.7733H11.985V13.7833H14.8533L15.0783 13.9708V15.7725H16.25V13.5392L15.8858 13.2075L16.25 12.8325V11.3808L15.1567 10.3583ZM14.675 11.4717L15.0783 11.8483V12.4425L14.8333 12.6717H11.985V11.4717H14.675ZM8.92501 4.16667H4.58334V9.61501L8.92168 9.64334L10.0208 8.62251V7.27334L9.70834 6.93584L10.0208 6.56501V5.18834L8.92501 4.16667ZM11.9833 4.16834H10.8125V8.65167L12.0808 9.64251H16.0542V8.52834H12.5L11.9833 8.12501V4.16834ZM8.62418 7.51751L8.84918 7.70417V8.15417L8.44751 8.525L5.75418 8.50917V7.51751H8.62418ZM8.44501 5.28084L8.84918 5.65667V6.17417L8.60334 6.40334H5.75501V5.28084H8.44501Z" fill="currentColor"></path>
                                                                                </svg>
                                                                                Embedded Wallet
                                                                            </span>
                                                                            <input className="form-check-input ml-auto" type="radio" name="flexRadioDefault" id="EmbeddedWallet" required/>
                                                                        </label>
                                                                    </td>
                                                                </tr>
                                                                {/* <!-- metamask wallet --> */}
                                                                <tr className="align-middle">
                                                                    <td>
                                                                        <label className="d-flex align-items-center justify-content-between py-2" htmlFor="MetaMask">
                                                                            <span className="d-flex align-items-center gap-2 svg-s1 grayscale-200 fs-5 fw-bold mb-0">
                                                                                <svg width="32" height="32" viewBox="0 0 318.6 318.6">
                                                                                   
                                                                                    <polygon className="st0" points="274.1,35.5 174.6,109.4 193,65.8 "/>
                                                                                    <g>
                                                                                        <polygon className="st1" points="44.4,35.5 143.1,110.1 125.6,65.8 	"/>
                                                                                        <polygon className="st1" points="238.3,206.8 211.8,247.4 268.5,263 284.8,207.7 	"/>
                                                                                        <polygon className="st1" points="33.9,207.7 50.1,263 106.8,247.4 80.3,206.8 	"/>
                                                                                        <polygon className="st1" points="103.6,138.2 87.8,162.1 144.1,164.6 142.1,104.1 	"/>
                                                                                        <polygon className="st1" points="214.9,138.2 175.9,103.4 174.6,164.6 230.8,162.1 	"/>
                                                                                        <polygon className="st1" points="106.8,247.4 140.6,230.9 111.4,208.1 	"/>
                                                                                        <polygon className="st1" points="177.9,230.9 211.8,247.4 207.1,208.1 	"/>
                                                                                    </g>
                                                                                    <g>
                                                                                        <polygon className="st2" points="211.8,247.4 177.9,230.9 180.6,253 180.3,262.3 	"/>
                                                                                        <polygon className="st2" points="106.8,247.4 138.3,262.3 138.1,253 140.6,230.9 	"/>
                                                                                    </g>
                                                                                    <polygon className="st3" points="138.8,193.5 110.6,185.2 130.5,176.1 "/>
                                                                                    <polygon className="st3" points="179.7,193.5 188,176.1 208,185.2 "/>
                                                                                    <g>
                                                                                        <polygon className="st4" points="106.8,247.4 111.6,206.8 80.3,207.7 	"/>
                                                                                        <polygon className="st4" points="207,206.8 211.8,247.4 238.3,207.7 	"/>
                                                                                        <polygon className="st4" points="230.8,162.1 174.6,164.6 179.8,193.5 188.1,176.1 208.1,185.2 	"/>
                                                                                        <polygon className="st4" points="110.6,185.2 130.6,176.1 138.8,193.5 144.1,164.6 87.8,162.1 	"/>
                                                                                    </g>
                                                                                    <g>
                                                                                        <polygon className="st5" points="87.8,162.1 111.4,208.1 110.6,185.2 	"/>
                                                                                        <polygon className="st5" points="208.1,185.2 207.1,208.1 230.8,162.1 	"/>
                                                                                        <polygon className="st5" points="144.1,164.6 138.8,193.5 145.4,227.6 146.9,182.7 	"/>
                                                                                        <polygon className="st5" points="174.6,164.6 171.9,182.6 173.1,227.6 179.8,193.5 	"/>
                                                                                    </g>
                                                                                    <polygon className="st6" points="179.8,193.5 173.1,227.6 177.9,230.9 207.1,208.1 208.1,185.2 "/>
                                                                                    <polygon className="st6" points="110.6,185.2 111.4,208.1 140.6,230.9 145.4,227.6 138.8,193.5 "/>
                                                                                    <polygon className="st7" points="180.3,262.3 180.6,253 178.1,250.8 140.4,250.8 138.1,253 138.3,262.3 106.8,247.4 117.8,256.4 
                                                                                        140.1,271.9 178.4,271.9 200.8,256.4 211.8,247.4 "/>
                                                                                    <polygon className="st8" points="177.9,230.9 173.1,227.6 145.4,227.6 140.6,230.9 138.1,253 140.4,250.8 178.1,250.8 180.6,253 "/>
                                                                                    <g>
                                                                                        <polygon className="st9" points="278.3,114.2 286.8,73.4 274.1,35.5 177.9,106.9 214.9,138.2 267.2,153.5 278.8,140 273.8,136.4 
                                                                                            281.8,129.1 275.6,124.3 283.6,118.2 	"/>
                                                                                        <polygon className="st9" points="31.8,73.4 40.3,114.2 34.9,118.2 42.9,124.3 36.8,129.1 44.8,136.4 39.8,140 51.3,153.5 103.6,138.2 
                                                                                            140.6,106.9 44.4,35.5 	"/>
                                                                                    </g>
                                                                                    <polygon className="st6" points="267.2,153.5 214.9,138.2 230.8,162.1 207.1,208.1 238.3,207.7 284.8,207.7 "/>
                                                                                    <polygon className="st6" points="103.6,138.2 51.3,153.5 33.9,207.7 80.3,207.7 111.4,208.1 87.8,162.1 "/>
                                                                                    <polygon className="st6" points="174.6,164.6 177.9,106.9 193.1,65.8 125.6,65.8 140.6,106.9 144.1,164.6 145.3,182.8 145.4,227.6 
                                                                                        173.1,227.6 173.3,182.8 "/>
                                                                                </svg>
            
                                                                                MetaMask Wallet
                                                                            </span>
                                                                            <input className="form-check-input ml-auto" type="radio" name="flexRadioDefault" id="MetaMask" required/>
                                                                        </label>
                                                                    </td>
                                                                </tr>
                                                                {/* <!-- coinbase wallet --> */}
                                                                <tr className="align-middle">
                                                                    <td>
                                                                        <label className="d-flex align-items-center justify-content-between py-2" htmlFor="Coinbase">
                                                                            <span className="d-flex align-items-center gap-2 svg-s1 grayscale-200 fs-5 fw-bold mb-0">
                                                                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                                                    <path d="M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16Z" fill="url(#paint0_linear_971_1582)"/>
                                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.66699 16.0001C6.66699 21.1545 10.8454 25.3337 15.9998 25.3337C21.155 25.3337 25.3334 21.1545 25.3334 16.0001C25.3334 10.8457 21.1542 6.6665 15.9998 6.6665C10.8454 6.6665 6.66699 10.8457 6.66699 16.0001ZM13.615 12.9921C13.5332 12.9921 13.4522 13.0082 13.3766 13.0396C13.3011 13.0709 13.2324 13.1168 13.1746 13.1747C13.1168 13.2326 13.071 13.3013 13.0397 13.3769C13.0085 13.4525 12.9925 13.5335 12.9926 13.6153V18.3857C12.9926 18.7289 13.271 19.0073 13.615 19.0073H18.3854C18.7294 19.0073 19.007 18.7289 19.007 18.3857V13.6153C19.007 13.4504 18.9415 13.2922 18.825 13.1755C18.7084 13.0588 18.5503 12.9931 18.3854 12.9929L13.615 12.9921Z" fill="white"/>
                                                                                    <defs>
                                                                                        <linearGradient id="paint0_linear_971_1582" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
                                                                                            <stop offset="1" stopColor="#2E66F8"/>
                                                                                            <stop offset="1" stopColor="#124ADB"/>
                                                                                        </linearGradient>
                                                                                    </defs>
                                                                                </svg>
                                                                                Coinbase Wallet
                                                                            </span>
                                                                            <input className="form-check-input ml-auto" type="radio" name="flexRadioDefault" id="Coinbase" required/>
                                                                        </label>
                                                                    </td>
                                                                </tr>
                                                                
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                    {/* <!-- checkout btn --> */}
                                                    <div className="form-group d-flex gap-2 mb-3 mt-3">
                                                        <button type="submit" className="btn btn-primary px-3">
                                                            <svg height="16" viewBox="0 -960 960 960" width="16">
                                                                <path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z" fill="currentColor"></path>
                                                            </svg>
                                                            Checkout
                                                        </button>
                                                    </div>

                                                </form>
                                            </div>
                                        </div>
                        
                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* <!-- wallet --> */}
                        <div className="flex">
                            <button className="btn btn-editor text-bg-bs card-border text-link redius px-2" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                <svg height="16" width="16" viewBox="0 -960 960 960">
                                    <path d="M160-120v-640q0-33 23.5-56.5T240-840h240q33 0 56.5 23.5T560-760v280h40q33 0 56.5 23.5T680-400v180q0 17 11.5 28.5T720-180q17 0 28.5-11.5T760-220v-288q-9 5-19 6.5t-21 1.5q-42 0-71-29t-29-71q0-32 17.5-57.5T684-694l-84-84 42-42 148 144q15 15 22.5 35t7.5 41v380q0 42-29 71t-71 29q-42 0-71-29t-29-71v-200h-60v300H160Zm80-440h240v-200H240v200Zm480 0q17 0 28.5-11.5T760-600q0-17-11.5-28.5T720-640q-17 0-28.5 11.5T680-600q0 17 11.5 28.5T720-560Z" fill="currentColor"></path>
                                </svg>
                                <span className="fw-bold mb-0">
                                    Connect
                                </span>
                            </button>
                        </div>

                    </div>

                    {/* <!-- Hamburger Menu --> */}
                    <div id="mobile_menu" className="close">
                        <button className="navbar-toggler btn btn-editor text-bg-bs text-link card-border redius px-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </button>
                    </div>

                </div>
                
            </div>
  )
}

export default HeaderComponet