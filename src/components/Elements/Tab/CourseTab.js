import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const Tabs = dynamic(import('react-tabs').then(mod => mod.Tabs), { ssr: false }) // disable ssr
import { Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Link from 'next/link';

export default () => (
   <section className="course__area pt-115 pb-120 grey-bg">
      <Tabs variant="enclosed" id="react-tabs-276">
         <div className="container">
            <div className="row align-items-end">
               <div className="col-xxl-5 col-xl-6 col-lg-6">
                  <div className="section__title-wrapper mb-60">
                     <h2 className="section__title">Find the Right<br />Online <span className="yellow-bg yellow-bg-big">Course<img src="assets/img/shape/yellow-bg.png" alt="img not found" /></span> for you</h2>
                     <p>You don't have to struggle alone, you've got our assistance and help.</p>
                  </div>
               </div>
               <div className="col-xxl-7 col-xl-6 col-lg-6">
                  <div className="course__menu d-flex justify-content-lg-end mb-60">
                     <div className="masonary-menu filter-button-group">
                        <TabList>
                           <Tab><button>See All <span className="tag">new</span></button></Tab>
                           <Tab><button>Trending</button></Tab>
                           <Tab><button>Popularity</button></Tab>
                           <Tab><button>Featured</button></Tab>
                           <Tab><button>Art & Design</button></Tab>
                        </TabList>
                     </div>
                  </div>
               </div>
            </div>
            <TabPanel>
               <div className="row">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="course__item white-bg mb-30 fix">
                        <div className="course__thumb w-img p-relative fix">
                           <Link href="/course-details">
                              <img src="assets/img/course/course-1.jpg" alt="img not found" />
                           </Link>
                           <div className="course__tag">
                              <Link href="/course-details">Art & Design</Link>
                           </div>
                        </div>
                        <div className="course__content">
                           <div className="course__meta d-flex align-items-center justify-content-between">
                              <div className="course__lesson">
                                 <span><i className="fas fa-book"></i>43 Lesson</span>
                              </div>
                              <div className="course__rating">
                                 <span><i className="fas fa-star"></i>4.5 (44)</span>
                              </div>
                           </div>
                           <h3 className="course__title"><Link href="/course-details">Become a product Manager learn the skills & job.</Link></h3>
                           <div className="course__teacher d-flex align-items-center">
                              <div className="course__teacher-thumb mr-15">
                                 <img src="assets/img/course/teacher/teacher-1.jpg" alt="img not found" />
                              </div>
                              <h6><Link href="/instructor-details">Jim Séchen</Link></h6>
                           </div>
                        </div>
                        <div className="course__more d-flex justify-content-between align-items-center">
                           <div className="course__status">
                              <span>Free</span>
                           </div>
                           <div className="course__btn">
                              <Link href="/course-details" className="link-btn">
                                 Know Details
                                 <i className="fas fa-arrow-right"></i>
                                 <i className="fas fa-arrow-right"></i>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="course__item white-bg mb-30 fix">
                        <div className="course__thumb w-img p-relative fix">
                           <Link href="/course-details">
                              <img src="assets/img/course/course-2.jpg" alt="img not found" />
                           </Link>
                           <div className="course__tag">
                              <Link href="/course-details">Art & Design</Link>
                           </div>
                        </div>
                        <div className="course__content">
                           <div className="course__meta d-flex align-items-center justify-content-between">
                              <div className="course__lesson">
                                 <span><i className="fas fa-book"></i>72 Lesson</span>
                              </div>
                              <div className="course__rating">
                                 <span><i className="fas fa-star"></i>4.5 (44)</span>
                              </div>
                           </div>
                           <h3 className="course__title"><Link href="/course-details">Fundamentals of music theory Learn new</Link></h3>
                           <div className="course__teacher d-flex align-items-center">
                              <div className="course__teacher-thumb mr-15">
                                 <img src="assets/img/course/teacher/teacher-2.jpg" alt="img not found" />
                              </div>
                              <h6><Link href="/instructor-details">Barry Tone</Link></h6>
                           </div>
                        </div>
                        <div className="course__more d-flex justify-content-between align-items-center">
                           <div className="course__status d-flex align-items-center">
                              <span className="sky-blue">$32.00</span>
                              <span className="old-price">$68.00</span>
                           </div>
                           <div className="course__btn">
                              <Link href="/course-details" className="link-btn">
                                 Know Details
                                 <i className="fas fa-arrow-right"></i>
                                 <i className="fas fa-arrow-right"></i>
                              </Link>
                           </div>
                        </div>
                     </div >
                  </div >
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="course__item white-bg mb-30 fix">
                        <div className="course__thumb w-img p-relative fix">
                           <Link href="/course-details">
                              <img src="assets/img/course/course-3.jpg" alt="img not found" />
                           </Link>
                           <div className="course__tag">
                              <Link href="/course-details" className="green">Development</Link>
                           </div>
                        </div>
                        <div className="course__content">
                           <div className="course__meta d-flex align-items-center justify-content-between">
                              <div className="course__lesson">
                                 <span><i className="fas fa-book"></i>14 Lesson</span>
                              </div>
                              <div className="course__rating">
                                 <span><i className="fas fa-star"></i>3.5 (55)</span>
                              </div>
                           </div>
                           <h3 className="course__title"><Link href="/course-details">Strategy law and organization Foundation</Link></h3>
                           <div className="course__teacher d-flex align-items-center">
                              <div className="course__teacher-thumb mr-15">
                                 <img src="assets/img/course/teacher/teacher-3.jpg" alt="img not found" />
                              </div>
                              <h6><Link href="/instructor-details">Elon Gated</Link></h6>
                           </div>
                        </div>
                        <div className="course__more d-flex justify-content-between align-items-center">
                           <div className="course__status d-flex align-items-center">
                              <span className="green">$46.00</span>
                              <span className="old-price">$68.00</span>
                           </div>
                           <div className="course__btn">
                              <Link href="/course-details" className="link-btn">
                                 Know Details
                                 <i className="fas fa-arrow-right"></i>
                                 <i className="fas fa-arrow-right"></i>
                              </Link>
                           </div>
                        </div>
                     </div >
                  </div >
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="course__item white-bg mb-30 fix">
                        <div className="course__thumb w-img p-relative fix">
                           <Link href="/course-details">
                              <img src="assets/img/course/course-4.jpg" alt="img not found" />
                           </Link>
                           <div className="course__tag">
                              <Link href="/course-details" className="blue">Marketing</Link>
                           </div>
                        </div>
                        <div className="course__content">
                           <div className="course__meta d-flex align-items-center justify-content-between">
                              <div className="course__lesson">
                                 <span><i className="fas fa-book"></i>22 Lesson</span>
                              </div>
                              <div className="course__rating">
                                 <span><i className="fas fa-star"></i>4.5 (42)</span>
                              </div>
                           </div>
                           <h3 className="course__title"><Link href="/course-details">The business Intelligence analyst Course 2022</Link></h3>
                           <div className="course__teacher d-flex align-items-center">
                              <div className="course__teacher-thumb mr-15">
                                 <img src="assets/img/course/teacher/teacher-4.jpg" alt="img not found" />
                              </div>
                              <h6><Link href="/instructor-details">Eleanor Fant</Link></h6>
                           </div>
                        </div>
                        <div className="course__more d-flex justify-content-between align-items-center">
                           <div className="course__status d-flex align-items-center">
                              <span className="blue">$62.00</span>
                              <span className="old-price">$97.00</span>
                           </div>
                           <div className="course__btn">
                              <Link href="/course-details" className="link-btn">
                                 Know Details
                                 <i className="fas fa-arrow-right"></i>
                                 <i className="fas fa-arrow-right"></i>
                              </Link>
                           </div>
                        </div>
                     </div >
                  </div >
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="course__item white-bg mb-30 fix">
                        <div className="course__thumb w-img p-relative fix">
                           <Link href="/course-details">
                              <img src="assets/img/course/course-5.jpg" alt="img not found" />
                           </Link>
                           <div className="course__tag">
                              <Link href="/course-details" className="orange">Audio & Music</Link>
                           </div>
                        </div>
                        <div className="course__content">
                           <div className="course__meta d-flex align-items-center justify-content-between">
                              <div className="course__lesson">
                                 <span><i className="fas fa-book"></i>18 Lesson</span>
                              </div>
                              <div className="course__rating">
                                 <span><i className="fas fa-star"></i>4.5 (37)</span>
                              </div>
                           </div>
                           <h3 className="course__title"><Link href="/course-details">Build your media and Public presence</Link></h3>
                           <div className="course__teacher d-flex align-items-center">
                              <div className="course__teacher-thumb mr-15">
                                 <img src="assets/img/course/teacher/teacher-5.jpg" alt="img not found" />
                              </div>
                              <h6><Link href="/instructor-details">Pelican Steve</Link></h6>
                           </div>
                        </div>
                        <div className="course__more d-flex justify-content-between align-items-center">
                           <div className="course__status d-flex align-items-center">
                              <span className="orange">$62.00</span>
                              <span className="old-price">$97.00</span>
                           </div>
                           <div className="course__btn">
                              <Link href="/course-details" className="link-btn">
                                 Know Details
                                 <i className="fas fa-arrow-right"></i>
                                 <i className="fas fa-arrow-right"></i>
                              </Link>
                           </div>
                        </div>
                     </div >
                  </div >
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="course__item white-bg mb-30 fix">
                        <div className="course__thumb w-img p-relative fix">
                           <Link href="/course-details">
                              <img src="assets/img/course/course-6.jpg" alt="img not found" />
                           </Link>
                           <div className="course__tag">
                              <Link href="/course-details" className="pink">UX Design</Link>
                           </div>
                        </div>
                        <div className="course__content">
                           <div className="course__meta d-flex align-items-center justify-content-between">
                              <div className="course__lesson">
                                 <span><i className="fas fa-book"></i>13 Lesson</span>
                              </div>
                              <div className="course__rating">
                                 <span><i className="fas fa-star"></i>4.5 (72)</span>
                              </div>
                           </div>
                           <h3 className="course__title"><Link href="/course-details">Creative writing through Storytelling</Link></h3>
                           <div className="course__teacher d-flex align-items-center">
                              <div className="course__teacher-thumb mr-15">
                                 <img src="assets/img/course/teacher/teacher-6.jpg" alt="img not found" />
                              </div>
                              <h6><Link href="/instructor-details">Shahnewaz Sakil</Link></h6>
                           </div>
                        </div>
                        <div className="course__more d-flex justify-content-between align-items-center">
                           <div className="course__status d-flex align-items-center">
                              <span className="pink">$46.00</span>
                              <span className="old-price">$72.00</span>
                           </div>
                           <div className="course__btn">
                              <Link href="/course-details" className="link-btn">
                                 Know Details
                                 <i className="fas fa-arrow-right"></i>
                                 <i className="fas fa-arrow-right"></i>
                              </Link>
                           </div>
                        </div>
                     </div >
                  </div >
               </div >
            </TabPanel >
            <TabPanel>
               <div className="row">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="course__item white-bg mb-30 fix">
                        <div className="course__thumb w-img p-relative fix">
                           <Link href="/course-details">
                              <img src="assets/img/course/course-2.jpg" alt="img not found" />
                           </Link>
                           <div className="course__tag">
                              <Link href="/course-details" className="sky-blue">Art & Design</Link>
                           </div>
                        </div>
                        <div className="course__content">
                           <div className="course__meta d-flex align-items-center justify-content-between">
                              <div className="course__lesson">
                                 <span><i className="fas fa-book"></i>72 Lesson</span>
                              </div>
                              <div className="course__rating">
                                 <span><i className="fas fa-star"></i>4.5 (44)</span>
                              </div>
                           </div>
                           <h3 className="course__title"><Link href="/course-details">Fundamentals of music theory Learn new</Link></h3>
                           <div className="course__teacher d-flex align-items-center">
                              <div className="course__teacher-thumb mr-15">
                                 <img src="assets/img/course/teacher/teacher-2.jpg" alt="img not found" />
                              </div>
                              <h6><Link href="/instructor-details">Barry Tone</Link></h6>
                           </div>
                        </div>
                        <div className="course__more d-flex justify-content-between align-items-center">
                           <div className="course__status d-flex align-items-center">
                              <span className="sky-blue">$32.00</span>
                              <span className="old-price">$68.00</span>
                           </div>
                           <div className="course__btn">
                              <Link href="/course-details" className="link-btn">
                                 Know Details
                                 <i className="fas fa-arrow-right"></i>
                                 <i className="fas fa-arrow-right"></i>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="course__item white-bg mb-30 fix">
                        <div className="course__thumb w-img p-relative fix">
                           <Link href="/course-details">
                              <img src="assets/img/course/course-3.jpg" alt="img not found" />
                           </Link>
                           <div className="course__tag">
                              <Link href="/course-details" className="green">Development</Link>
                           </div>
                        </div>
                        <div className="course__content">
                           <div className="course__meta d-flex align-items-center justify-content-between">
                              <div className="course__lesson">
                                 <span><i className="fas fa-book"></i>14 Lesson</span>
                              </div>
                              <div className="course__rating">
                                 <span><i className="fas fa-star"></i>3.5 (55)</span>
                              </div>
                           </div>
                           <h3 className="course__title"><Link href="/course-details">Strategy law and organization Foundation</Link></h3>
                           <div className="course__teacher d-flex align-items-center">
                              <div className="course__teacher-thumb mr-15">
                                 <img src="assets/img/course/teacher/teacher-3.jpg" alt="img not found" />
                              </div>
                              <h6><Link href="/instructor-details">Elon Gated</Link></h6>
                           </div>
                        </div>
                        <div className="course__more d-flex justify-content-between align-items-center">
                           <div className="course__status d-flex align-items-center">
                              <span className="green">$46.00</span>
                              <span className="old-price">$68.00</span>
                           </div>
                           <div className="course__btn">
                              <Link href="/course-details" className="link-btn">
                                 Know Details
                                 <i className="fas fa-arrow-right"></i>
                                 <i className="fas fa-arrow-right"></i>
                              </Link>
                           </div>
                        </div>
                     </div >
                  </div >
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="course__item white-bg mb-30 fix">
                        <div className="course__thumb w-img p-relative fix">
                           <Link href="/course-details">
                              <img src="assets/img/course/course-4.jpg" alt="img not found" />
                           </Link>
                           <div className="course__tag">
                              <Link href="/course-details" className="blue">Marketing</Link>
                           </div>
                        </div>
                        <div className="course__content">
                           <div className="course__meta d-flex align-items-center justify-content-between">
                              <div className="course__lesson">
                                 <span><i className="fas fa-book"></i>22 Lesson</span>
                              </div>
                              <div className="course__rating">
                                 <span><i className="fas fa-star"></i>4.5 (42)</span>
                              </div>
                           </div>
                           <h3 className="course__title"><Link href="/course-details">The business Intelligence analyst Course 2022</Link></h3>
                           <div className="course__teacher d-flex align-items-center">
                              <div className="course__teacher-thumb mr-15">
                                 <img src="assets/img/course/teacher/teacher-4.jpg" alt="img not found" />
                              </div>
                              <h6><Link href="/instructor-details">Eleanor Fant</Link></h6>
                           </div>
                        </div>
                        <div className="course__more d-flex justify-content-between align-items-center">
                           <div className="course__status d-flex align-items-center">
                              <span className="blue">$62.00</span>
                              <span className="old-price">$97.00</span>
                           </div>
                           <div className="course__btn">
                              <Link href="/course-details" className="link-btn">
                                 Know Details
                                 <i className="fas fa-arrow-right"></i>
                                 <i className="fas fa-arrow-right"></i>
                              </Link>
                           </div>
                        </div>
                     </div >
                  </div >
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="course__item white-bg mb-30 fix">
                        <div className="course__thumb w-img p-relative fix">
                           <Link href="/course-details">
                              <img src="assets/img/course/course-5.jpg" alt="img not found" />
                           </Link>
                           <div className="course__tag">
                              <Link href="/course-details" className="orange">Audio & Music</Link>
                           </div>
                        </div>
                        <div className="course__content">
                           <div className="course__meta d-flex align-items-center justify-content-between">
                              <div className="course__lesson">
                                 <span><i className="fas fa-book"></i>18 Lesson</span>
                              </div>
                              <div className="course__rating">
                                 <span><i className="fas fa-star"></i>4.5 (37)</span>
                              </div>
                           </div>
                           <h3 className="course__title"><Link href="/course-details">Build your media and Public presence</Link></h3>
                           <div className="course__teacher d-flex align-items-center">
                              <div className="course__teacher-thumb mr-15">
                                 <img src="assets/img/course/teacher/teacher-5.jpg" alt="img not found" />
                              </div>
                              <h6><Link href="/instructor-details">Steve Smith</Link></h6>
                           </div>
                        </div>
                        <div className="course__more d-flex justify-content-between align-items-center">
                           <div className="course__status d-flex align-items-center">
                              <span className="orange">$62.00</span>
                              <span className="old-price">$97.00</span>
                           </div>
                           <div className="course__btn">
                              <Link href="/course-details" className="link-btn">
                                 Know Details
                                 <i className="fas fa-arrow-right"></i>
                                 <i className="fas fa-arrow-right"></i>
                              </Link>
                           </div>
                        </div>
                     </div >
                  </div >
               </div >
            </TabPanel >
            <TabPanel>
               <div className="row">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="course__item white-bg mb-30 fix">
                        <div className="course__thumb w-img p-relative fix">
                           <Link href="/course-details">
                              <img src="assets/img/course/course-2.jpg" alt="img not found" />
                           </Link>
                           <div className="course__tag">
                              <Link href="/course-details" className="sky-blue">Art & Design</Link>
                           </div>
                        </div>
                        <div className="course__content">
                           <div className="course__meta d-flex align-items-center justify-content-between">
                              <div className="course__lesson">
                                 <span><i className="fas fa-book"></i>72 Lesson</span>
                              </div>
                              <div className="course__rating">
                                 <span><i className="fas fa-star"></i>4.5 (44)</span>
                              </div>
                           </div>
                           <h3 className="course__title"><Link href="/course-details">Fundamentals of music theory Learn new</Link></h3>
                           <div className="course__teacher d-flex align-items-center">
                              <div className="course__teacher-thumb mr-15">
                                 <img src="assets/img/course/teacher/teacher-2.jpg" alt="img not found" />
                              </div>
                              <h6><Link href="/instructor-details">Andrew Nihal</Link></h6>
                           </div>
                        </div>
                        <div className="course__more d-flex justify-content-between align-items-center">
                           <div className="course__status d-flex align-items-center">
                              <span className="sky-blue">$32.00</span>
                              <span className="old-price">$68.00</span>
                           </div>
                           <div className="course__btn">
                              <Link href="/course-details" className="link-btn">
                                 Know Details
                                 <i className="fas fa-arrow-right"></i>
                                 <i className="fas fa-arrow-right"></i>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="course__item white-bg mb-30 fix">
                        <div className="course__thumb w-img p-relative fix">
                           <Link href="/course-details">
                              <img src="assets/img/course/course-3.jpg" alt="img not found" />
                           </Link>
                           <div className="course__tag">
                              <Link href="/course-details" className="green">Development</Link>
                           </div>
                        </div>
                        <div className="course__content">
                           <div className="course__meta d-flex align-items-center justify-content-between">
                              <div className="course__lesson">
                                 <span><i className="fas fa-book"></i>14 Lesson</span>
                              </div>
                              <div className="course__rating">
                                 <span><i className="fas fa-star"></i>3.5 (55)</span>
                              </div>
                           </div>
                           <h3 className="course__title"><Link href="/course-details">Strategy law and organization Foundation</Link></h3>
                           <div className="course__teacher d-flex align-items-center">
                              <div className="course__teacher-thumb mr-15">
                                 <img src="assets/img/course/teacher/teacher-3.jpg" alt="img not found" />
                              </div>
                              <h6><Link href="/instructor-details">Jhon Saif</Link></h6>
                           </div>
                        </div>
                        <div className="course__more d-flex justify-content-between align-items-center">
                           <div className="course__status d-flex align-items-center">
                              <span className="green">$46.00</span>
                              <span className="old-price">$68.00</span>
                           </div>
                           <div className="course__btn">
                              <Link href="/course-details" className="link-btn">
                                 Know Details
                                 <i className="fas fa-arrow-right"></i>
                                 <i className="fas fa-arrow-right"></i>
                              </Link>
                           </div>
                        </div>
                     </div >
                  </div >
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="course__item white-bg mb-30 fix">
                        <div className="course__thumb w-img p-relative fix">
                           <Link href="/course-details">
                              <img src="assets/img/course/course-4.jpg" alt="img not found" />
                           </Link>
                           <div className="course__tag">
                              <Link href="/course-details" className="blue">Marketing</Link>
                           </div>
                        </div>
                        <div className="course__content">
                           <div className="course__meta d-flex align-items-center justify-content-between">
                              <div className="course__lesson">
                                 <span><i className="fas fa-book"></i>22 Lesson</span>
                              </div>
                              <div className="course__rating">
                                 <span><i className="fas fa-star"></i>4.5 (42)</span>
                              </div>
                           </div>
                           <h3 className="course__title"><Link href="/course-details">The business Intelligence analyst Course 2022</Link></h3>
                           <div className="course__teacher d-flex align-items-center">
                              <div className="course__teacher-thumb mr-15">
                                 <img src="assets/img/course/teacher/teacher-4.jpg" alt="img not found" />
                              </div>
                              <h6><Link href="/instructor-details">Kevin Peter</Link></h6>
                           </div>
                        </div>
                        <div className="course__more d-flex justify-content-between align-items-center">
                           <div className="course__status d-flex align-items-center">
                              <span className="blue">$62.00</span>
                              <span className="old-price">$97.00</span>
                           </div>
                           <div className="course__btn">
                              <Link href="/course-details" className="link-btn">
                                 Know Details
                                 <i className="fas fa-arrow-right"></i>
                                 <i className="fas fa-arrow-right"></i>
                              </Link>
                           </div>
                        </div>
                     </div >
                  </div >
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="course__item white-bg mb-30 fix">
                        <div className="course__thumb w-img p-relative fix">
                           <Link href="/course-details">
                              <img src="assets/img/course/course-5.jpg" alt="img not found" />
                           </Link>
                           <div className="course__tag">
                              <Link href="/course-details" className="orange">Audio & Music</Link>
                           </div>
                        </div>
                        <div className="course__content">
                           <div className="course__meta d-flex align-items-center justify-content-between">
                              <div className="course__lesson">
                                 <span><i className="fas fa-book"></i>18 Lesson</span>
                              </div>
                              <div className="course__rating">
                                 <span><i className="fas fa-star"></i>4.5 (37)</span>
                              </div>
                           </div>
                           <h3 className="course__title"><Link href="/course-details">Build your media and Public presence</Link></h3>
                           <div className="course__teacher d-flex align-items-center">
                              <div className="course__teacher-thumb mr-15">
                                 <img src="assets/img/course/teacher/teacher-5.jpg" alt="img not found" />
                              </div>
                              <h6><Link href="/instructor-details">Peter Parker</Link></h6>
                           </div>
                        </div>
                        <div className="course__more d-flex justify-content-between align-items-center">
                           <div className="course__status d-flex align-items-center">
                              <span className="orange">$62.00</span>
                              <span className="old-price">$97.00</span>
                           </div>
                           <div className="course__btn">
                              <Link href="/course-details" className="link-btn">
                                 Know Details
                                 <i className="fas fa-arrow-right"></i>
                                 <i className="fas fa-arrow-right"></i>
                              </Link>
                           </div>
                        </div>
                     </div >
                  </div >
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="course__item white-bg mb-30 fix">
                        <div className="course__thumb w-img p-relative fix">
                           <Link href="/course-details">
                              <img src="assets/img/course/course-6.jpg" alt="img not found" />
                           </Link>
                           <div className="course__tag">
                              <Link href="/course-details" className="pink">UX Design</Link>
                           </div>
                        </div>
                        <div className="course__content">
                           <div className="course__meta d-flex align-items-center justify-content-between">
                              <div className="course__lesson">
                                 <span><i className="fas fa-book"></i>13 Lesson</span>
                              </div>
                              <div className="course__rating">
                                 <span><i className="fas fa-star"></i>4.5 (72)</span>
                              </div>
                           </div>
                           <h3 className="course__title"><Link href="/course-details">Creative writing through Storytelling</Link></h3>
                           <div className="course__teacher d-flex align-items-center">
                              <div className="course__teacher-thumb mr-15">
                                 <img src="assets/img/course/teacher/teacher-6.jpg" alt="img not found" />
                              </div>
                              <h6><Link href="/instructor-details">Steve Long</Link></h6>
                           </div>
                        </div>
                        <div className="course__more d-flex justify-content-between align-items-center">
                           <div className="course__status d-flex align-items-center">
                              <span className="pink">$46.00</span>
                              <span className="old-price">$72.00</span>
                           </div>
                           <div className="course__btn">
                              <Link href="/course-details" className="link-btn">
                                 Know Details
                                 <i className="fas fa-arrow-right"></i>
                                 <i className="fas fa-arrow-right"></i>
                              </Link>
                           </div>
                        </div>
                     </div >
                  </div >
               </div >
            </TabPanel >
            <TabPanel>
               <div className="row">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="course__item white-bg mb-30 fix">
                        <div className="course__thumb w-img p-relative fix">
                           <Link href="/course-details">
                              <img src="assets/img/course/course-1.jpg" alt="img not found" />
                           </Link>
                           <div className="course__tag">
                              <Link href="/course-details">Art & Design</Link>
                           </div>
                        </div>
                        <div className="course__content">
                           <div className="course__meta d-flex align-items-center justify-content-between">
                              <div className="course__lesson">
                                 <span><i className="fas fa-book"></i>43 Lesson</span>
                              </div>
                              <div className="course__rating">
                                 <span><i className="fas fa-star"></i>4.5 (44)</span>
                              </div>
                           </div>
                           <h3 className="course__title"><Link href="/course-details">Become a product Manager learn the skills & job.</Link></h3>
                           <div className="course__teacher d-flex align-items-center">
                              <div className="course__teacher-thumb mr-15">
                                 <img src="assets/img/course/teacher/teacher-1.jpg" alt="img not found" />
                              </div>
                              <h6><Link href="/instructor-details">Peterson</Link></h6>
                           </div>
                        </div>
                        <div className="course__more d-flex justify-content-between align-items-center">
                           <div className="course__status">
                              <span>Free</span>
                           </div>
                           <div className="course__btn">
                              <Link href="/course-details" className="link-btn">
                                 Know Details
                                 <i className="fas fa-arrow-right"></i>
                                 <i className="fas fa-arrow-right"></i>
                              </Link>
                           </div>
                        </div>
                     </div >
                  </div >
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="course__item white-bg mb-30 fix">
                        <div className="course__thumb w-img p-relative fix">
                           <Link href="/course-details">
                              <img src="assets/img/course/course-2.jpg" alt="img not found" />
                           </Link>
                           <div className="course__tag">
                              <Link href="/course-details" className="sky-blue">Art & Design</Link>
                           </div>
                        </div>
                        <div className="course__content">
                           <div className="course__meta d-flex align-items-center justify-content-between">
                              <div className="course__lesson">
                                 <span><i className="fas fa-book"></i>72 Lesson</span>
                              </div>
                              <div className="course__rating">
                                 <span><i className="fas fa-star"></i>4.5 (44)</span>
                              </div>
                           </div>
                           <h3 className="course__title"><Link href="/course-details">Fundamentals of music theory Learn new</Link></h3>
                           <div className="course__teacher d-flex align-items-center">
                              <div className="course__teacher-thumb mr-15">
                                 <img src="assets/img/course/teacher/teacher-2.jpg" alt="img not found" />
                              </div>
                              <h6><Link href="/instructor-details">Willamson</Link></h6>
                           </div>
                        </div>
                        <div className="course__more d-flex justify-content-between align-items-center">
                           <div className="course__status d-flex align-items-center">
                              <span className="sky-blue">$32.00</span>
                              <span className="old-price">$68.00</span>
                           </div>
                           <div className="course__btn">
                              <Link href="/course-details" className="link-btn">
                                 Know Details
                                 <i className="fas fa-arrow-right"></i>
                                 <i className="fas fa-arrow-right"></i>
                              </Link>
                           </div>
                        </div>
                     </div >
                  </div >
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="course__item white-bg mb-30 fix">
                        <div className="course__thumb w-img p-relative fix">
                           <Link href="/course-details">
                              <img src="assets/img/course/course-3.jpg" alt="img not found" />
                           </Link>
                           <div className="course__tag">
                              <Link href="/course-details" className="green">Development</Link>
                           </div>
                        </div>
                        <div className="course__content">
                           <div className="course__meta d-flex align-items-center justify-content-between">
                              <div className="course__lesson">
                                 <span><i className="fas fa-book"></i>14 Lesson</span>
                              </div>
                              <div className="course__rating">
                                 <span><i className="fas fa-star"></i>3.5 (55)</span>
                              </div>
                           </div>
                           <h3 className="course__title"><Link href="/course-details">Strategy law and organization Foundation</Link></h3>
                           <div className="course__teacher d-flex align-items-center">
                              <div className="course__teacher-thumb mr-15">
                                 <img src="assets/img/course/teacher/teacher-3.jpg" alt="img not found" />
                              </div>
                              <h6><Link href="/instructor-details">Martin</Link></h6>
                           </div>
                        </div>
                        <div className="course__more d-flex justify-content-between align-items-center">
                           <div className="course__status d-flex align-items-center">
                              <span className="green">$46.00</span>
                              <span className="old-price">$68.00</span>
                           </div>
                           <div className="course__btn">
                              <Link href="/course-details" className="link-btn">
                                 Know Details
                                 <i className="fas fa-arrow-right"></i>
                                 <i className="fas fa-arrow-right"></i>
                              </Link>
                           </div>
                        </div>
                     </div >
                  </div >
               </div >
            </TabPanel >
            <TabPanel>
               <div className="row">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="course__item white-bg mb-30 fix">
                        <div className="course__thumb w-img p-relative fix">
                           <Link href="/course-details">
                              <img src="assets/img/course/course-2.jpg" alt="img not found" />
                           </Link>
                           <div className="course__tag">
                              <Link href="/course-details" className="sky-blue">Art & Design</Link>
                           </div>
                        </div>
                        <div className="course__content">
                           <div className="course__meta d-flex align-items-center justify-content-between">
                              <div className="course__lesson">
                                 <span><i className="fas fa-book"></i>72 Lesson</span>
                              </div>
                              <div className="course__rating">
                                 <span><i className="fas fa-star"></i>4.5 (44)</span>
                              </div>
                           </div>
                           <h3 className="course__title"><Link href="/course-details">Fundamentals of music theory Learn new</Link></h3>
                           <div className="course__teacher d-flex align-items-center">
                              <div className="course__teacher-thumb mr-15">
                                 <img src="assets/img/course/teacher/teacher-2.jpg" alt="img not found" />
                              </div>
                              <h6><Link href="/instructor-details">Jhon Doe</Link></h6>
                           </div>
                        </div>
                        <div className="course__more d-flex justify-content-between align-items-center">
                           <div className="course__status d-flex align-items-center">
                              <span className="sky-blue">$32.00</span>
                              <span className="old-price">$68.00</span>
                           </div>
                           <div className="course__btn">
                              <Link href="/course-details" className="link-btn">
                                 Know Details
                                 <i className="fas fa-arrow-right"></i>
                                 <i className="fas fa-arrow-right"></i>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="course__item white-bg mb-30 fix">
                        <div className="course__thumb w-img p-relative fix">
                           <Link href="/course-details">
                              <img src="assets/img/course/course-3.jpg" alt="img not found" />
                           </Link>
                           <div className="course__tag">
                              <Link href="/course-details" className="green">Development</Link>
                           </div>
                        </div>
                        <div className="course__content">
                           <div className="course__meta d-flex align-items-center justify-content-between">
                              <div className="course__lesson">
                                 <span><i className="fas fa-book"></i>14 Lesson</span>
                              </div>
                              <div className="course__rating">
                                 <span><i className="fas fa-star"></i>3.5 (55)</span>
                              </div>
                           </div>
                           <h3 className="course__title"><Link href="/course-details">Strategy law and organization Foundation</Link></h3>
                           <div className="course__teacher d-flex align-items-center">
                              <div className="course__teacher-thumb mr-15">
                                 <img src="assets/img/course/teacher/teacher-3.jpg" alt="img not found" />
                              </div>
                              <h6><Link href="/instructor-details">Spider</Link></h6>
                           </div>
                        </div>
                        <div className="course__more d-flex justify-content-between align-items-center">
                           <div className="course__status d-flex align-items-center">
                              <span className="green">$46.00</span>
                              <span className="old-price">$68.00</span>
                           </div>
                           <div className="course__btn">
                              <Link href="/course-details" className="link-btn">
                                 Know Details
                                 <i className="fas fa-arrow-right"></i>
                                 <i className="fas fa-arrow-right"></i>
                              </Link>
                           </div>
                        </div>
                     </div >
                  </div >
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="course__item white-bg mb-30 fix">
                        <div className="course__thumb w-img p-relative fix">
                           <Link href="/course-details">
                              <img src="assets/img/course/course-4.jpg" alt="img not found" />
                           </Link>
                           <div className="course__tag">
                              <Link href="/course-details" className="blue">Marketing</Link>
                           </div>
                        </div>
                        <div className="course__content">
                           <div className="course__meta d-flex align-items-center justify-content-between">
                              <div className="course__lesson">
                                 <span><i className="fas fa-book"></i>22 Lesson</span>
                              </div>
                              <div className="course__rating">
                                 <span><i className="fas fa-star"></i>4.5 (42)</span>
                              </div>
                           </div>
                           <h3 className="course__title"><Link href="/course-details">The business Intelligence analyst Course 2022</Link></h3>
                           <div className="course__teacher d-flex align-items-center">
                              <div className="course__teacher-thumb mr-15">
                                 <img src="assets/img/course/teacher/teacher-4.jpg" alt="img not found" />
                              </div>
                              <h6><Link href="/instructor-details">Ross Taylor</Link></h6>
                           </div>
                        </div>
                        <div className="course__more d-flex justify-content-between align-items-center">
                           <div className="course__status d-flex align-items-center">
                              <span className="blue">$62.00</span>
                              <span className="old-price">$97.00</span>
                           </div>
                           <div className="course__btn">
                              <Link href="/course-details" className="link-btn">
                                 Know Details
                                 <i className="fas fa-arrow-right"></i>
                                 <i className="fas fa-arrow-right"></i>
                              </Link>
                           </div>
                        </div>
                     </div >
                  </div >
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="course__item white-bg mb-30 fix">
                        <div className="course__thumb w-img p-relative fix">
                           <Link href="/course-details">
                              <img src="assets/img/course/course-5.jpg" alt="img not found" />
                           </Link>
                           <div className="course__tag">
                              <Link href="/course-details" className="orange">Audio & Music</Link>
                           </div>
                        </div>
                        <div className="course__content">
                           <div className="course__meta d-flex align-items-center justify-content-between">
                              <div className="course__lesson">
                                 <span><i className="fas fa-book"></i>18 Lesson</span>
                              </div>
                              <div className="course__rating">
                                 <span><i className="fas fa-star"></i>4.5 (37)</span>
                              </div>
                           </div>
                           <h3 className="course__title"><Link href="/course-details">Build your media and Public presence</Link></h3>
                           <div className="course__teacher d-flex align-items-center">
                              <div className="course__teacher-thumb mr-15">
                                 <img src="assets/img/course/teacher/teacher-5.jpg" alt="img not found" />
                              </div>
                              <h6><Link href="/instructor-details">Mitchel Stark</Link></h6>
                           </div>
                        </div>
                        <div className="course__more d-flex justify-content-between align-items-center">
                           <div className="course__status d-flex align-items-center">
                              <span className="orange">$62.00</span>
                              <span className="old-price">$97.00</span>
                           </div>
                           <div className="course__btn">
                              <Link href="/course-details" className="link-btn">
                                 Know Details
                                 <i className="fas fa-arrow-right"></i>
                                 <i className="fas fa-arrow-right"></i>
                              </Link>
                           </div>
                        </div>
                     </div >
                  </div >
               </div >
            </TabPanel >
         </div >
      </Tabs >
   </section >
);