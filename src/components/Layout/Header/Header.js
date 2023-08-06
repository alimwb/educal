import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import BurgerMenus from './BurgerMenus';
import ShopingCart from './ShopingCart';
import { connect } from 'react-redux';

const Header = (props) => {
   const [menuOpen, setMenuOpen] = useState(false)
   const [shopOpen, setShopOpen] = useState(false)

   const router = useRouter();
   const { authData } = props;
   const [path, setPath] = useState("");

   useEffect(() => {
      setPath(router.pathname)
   }, [router])


   // Sticky Menu Area start
   useEffect(() => {
      window.addEventListener('scroll', sticky);
      return () => {
         window.removeEventListener('scroll', sticky);
      };
   });


   const sticky = (e) => {
      const header = document.querySelector('.header__area');
      const scrollTop = window.scrollY;
      scrollTop >= 1 ? header.classList.add('sticky') : header.classList.remove('sticky');
   };
   // Sticky Menu Area End


   const logOutHandler = ()=>{
      storage.removeItem('persist:root');
      router.push('/');
   }


   return (
      <React.Fragment>
         <Head>
            <title>Educal – Online Course and Education React, Nextjs Template</title>
         </Head>
         <header>
            <div id="header-sticky" className="header__area header__transparent header__padding">
               <div className="container-fluid">
                  <div className="row align-items-center">
                     <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-2 col-sm-4 col-6">
                        <div className="header__left d-flex">
                           <div className="logo">
                              <Link href="/">
                                 <img src="assets/img/logo/logo.png" alt="logo" />
                              </Link>
                           </div>
                           <div className="header__category d-none d-lg-block">
                              <nav>
                                 <ul>
                                    <li>
                                       <Link href="/course-grid" className="cat-menu d-flex align-items-center">
                                          <div className="cat-dot-icon d-inline-block">
                                             <svg viewBox="0 0 276.2 276.2">
                                                <g>
                                                   <g>
                                                      <path className="cat-dot" d="M33.1,2.5C15.3,2.5,0.9,17,0.9,34.8s14.5,32.3,32.3,32.3s32.3-14.5,32.3-32.3S51,2.5,33.1,2.5z" />
                                                      <path className="cat-dot" d="M137.7,2.5c-17.8,0-32.3,14.5-32.3,32.3s14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3S155.5,2.5,137.7,2.5    z" />
                                                      <path className="cat-dot" d="M243.9,67.1c17.8,0,32.3-14.5,32.3-32.3S261.7,2.5,243.9,2.5S211.6,17,211.6,34.8S226.1,67.1,243.9,67.1z" />
                                                      <path className="cat-dot" d="M32.3,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3S0,120.4,0,138.2S14.5,170.5,32.3,170.5z" />
                                                      <path className="cat-dot" d="M136.8,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3c-17.8,0-32.3,14.5-32.3,32.3    C104.5,156.1,119,170.5,136.8,170.5z" />
                                                      <path className="cat-dot" d="M243,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3s-32.3,14.5-32.3,32.3    C210.7,156.1,225.2,170.5,243,170.5z" />
                                                      <path className="cat-dot" d="M33,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3s32.3-14.5,32.3-32.3S50.8,209.1,33,209.1z    " />
                                                      <path className="cat-dot" d="M137.6,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3    S155.4,209.1,137.6,209.1z" />
                                                      <path className="cat-dot" d="M243.8,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3    S261.6,209.1,243.8,209.1z" />
                                                   </g>
                                                </g>
                                             </svg>
                                          </div>
                                          <span>Category</span>

                                       </Link>
                                       <ul className="cat-submenu">
                                          <li><Link href="/course-grid">English Learning</Link></li>
                                          <li><Link href="/course-grid">Web Development</Link></li>
                                          <li><Link href="/course-grid">Logo Design</Link></li>
                                          <li><Link href="/course-grid">Motion Graphics</Link></li>
                                          <li><Link href="/course-grid">Video Edition</Link></li>
                                       </ul>
                                    </li>
                                 </ul>
                              </nav>
                           </div>
                        </div >
                     </div >
                     <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-10 col-sm-8 col-6">
                        <div className="header__right d-flex justify-content-end align-items-center">
                           <div className="main-menu d-none d-xl-block">
                              <nav id="mobile-menu">
                                 <ul>
                                    <li className="has-dropdown">
                                       <Link href="/">Home</Link>
                                       <ul className="submenu">
                                          <li><Link href="/">Home Style 1</Link></li>
                                          <li><Link href="/home-2">Home Style 2</Link></li>
                                          <li><Link href="/home-3">Home Style 3</Link></li>
                                       </ul>
                                    </li>
                                    <li className="has-dropdown">
                                       <Link href="/course-grid">Courses</Link>
                                       <ul className="submenu">
                                          <li><Link href="/course-grid">Courses</Link></li>
                                          <li><Link href="/course-list">Courses List</Link></li>
                                          <li><Link href="/course-sidebar">Courses Sidebar</Link></li >
                                          <li><Link href="/course-details">Courses Details</Link></li >
                                       </ul >
                                    </li >
                                    <li className="has-dropdown">
                                       <Link href="/blog">Blog</Link>
                                       <ul className="submenu">
                                          <li><Link href="/blog">Blog</Link></li>
                                          <li><Link href="/blog-details">Blog Details</Link></li >
                                       </ul >
                                    </li >
                                    <li className="has-dropdown">
                                       <Link href="/course-grid">Pages</Link>
                                       <ul className="submenu">
                                          <li><Link href="/about">About</Link></li>
                                          <li><Link href="/instructor">Instructor</Link></li >
                                          <li><Link href="/instructor-details">Instructor Details</Link></li >
                                          <li><Link href="/event-details">Event Details</Link></li >
                                          <li><Link href="/cart">My Cart</Link></li >
                                          <li><Link href="/wishlist">My Wishlist</Link></li >
                                          <li><Link href="/checkout">Checkout</Link></li >
                                          <li><Link href="/sign-in">Sign In</Link></li >
                                          <li><Link href="/sign-up">Sign Up</Link></li >
                                          <li><Link href="/error">Error</Link></li >
                                       </ul >
                                    </li >
                                    <li><Link href="/contact">Contact</Link></li >
                                 </ul >
                              </nav >
                           </div >
                           <div className="header__search p-relative ml-50 d-none d-md-block">
                              <form action="#">
                                 <input type="text" placeholder="Search..." />
                                 <button type="submit"><i className="fas fa-search"></i></button>
                              </form>
                              <div className="header__cart">
                                 <span className="cart-toggle-btn" onClick={() => { setShopOpen(!shopOpen) }}>
                                    <div className="header__cart-icon">
                                       <svg viewBox="0 0 24 24">
                                          <circle className="st0" cx="9" cy="21" r="1" />
                                          <circle className="st0" cx="20" cy="21" r="1" />
                                          <path className="st0" d="M1,1h4l2.7,13.4c0.2,1,1,1.6,2,1.6h9.7c1,0,1.8-0.7,2-1.6L23,6H6" />
                                       </svg>
                                    </div>
                                    <span className="cart-item">2</span>
                                 </span>
                              </div>
                           </div>
                           <div className="header__cart header__cart--responsive">
                              <span className="cart-toggle-btn" onClick={() => { setShopOpen(!shopOpen) }}>
                                 <div className="header__cart-icon">
                                    <svg viewBox="0 0 24 24">
                                       <circle className="st0" cx="9" cy="21" r="1" />
                                       <circle className="st0" cx="20" cy="21" r="1" />
                                       <path className="st0" d="M1,1h4l2.7,13.4c0.2,1,1,1.6,2,1.6h9.7c1,0,1.8-0.7,2-1.6L23,6H6" />
                                    </svg>
                                 </div>
                                 <span className="cart-item">2</span>
                              </span>
                           </div>
                           {authData === null ?
                              <Link href="/sign-up" className="e-btn ms-3">Sign Up</Link>
                              :
                              <div className="header__btn ml-20 d-none d-sm-block">
                                 <Dropdown alignright="true" className="drp-user">
                                    <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                                       <img className="img-avatar img-avatar48 img-avatar-thumb" src="assets/img/blog/author/blog-author-1.jpg" alt="" />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu alignright="true" className="profile-notification">
                                       <div className="text-center bg-body-light border-bottom rounded-top">
                                          <img className="img-avatar img-avatar48 img-avatar-thumb" src="assets/img/blog/author/blog-author-1.jpg" alt="" />
                                          <p className="mt-2 mb-0 fw-medium">{authData.firstName!==null?authData.firstName:null}</p>
                                          <p className="mb-0 text-muted fs-sm fw-medium">{authData.email!==null?authData.email :null}</p>
                                       </div>
                                       <div>
                                          <a className="dropdown-item d-flex align-items-center justify-content-between" href="be_pages_generic_profile.html">
                                             <span className="fs-sm fw-medium">Profile</span>
                                             {/* <span className="badge rounded-pill bg-primary ms-2">1</span> */}
                                          </a>
                                          <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">
                                             <span className="fs-sm fw-medium">Settings</span>
                                          </a>
                                       </div>
                                       <div role="separator" className="dropdown-divider m-0"></div>
                                       <div>
                                          <a className="dropdown-item d-flex align-items-center justify-content-between" onClick={logOutHandler}>
                                             <span className="fs-sm fw-medium">Log Out</span>
                                          </a>
                                       </div>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                           }
                           <div className="sidebar__menu d-xl-none">
                              <div className="sidebar-toggle-btn ml-30" id="sidebar-toggle" onClick={() => {
                                 setMenuOpen(!menuOpen)
                              }}>
                                 <span className="line"></span>
                                 <span className="line"></span>
                                 <span className="line"></span>
                              </div>
                           </div>
                        </div >
                     </div >
                  </div >
               </div >
            </div >

            <BurgerMenus menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div onClick={() => setMenuOpen(false)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>

            <ShopingCart shopOpen={shopOpen} setShopOpen={setShopOpen} />
            <div onClick={() => setShopOpen(false)} className={shopOpen ? "body-overlay show" : "body-overlay"}></div>

         </header >
      </React.Fragment >
   );
}


const mapStateToProps = (state) => {
   const { authData } = state.authData;
   return { authData }
};

export default connect(mapStateToProps)(Header);




