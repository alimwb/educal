import React, { Component } from 'react';

import dynamic from 'next/dynamic';
const Tabs = dynamic(import('react-tabs').then(mod => mod.Tabs), { ssr: false }) // disable ssr
import { Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Link from 'next/link';
 
export default () => (
    
    <section className="price__area pt-60 pb-130">
        <Tabs>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-4 offset-xxl-4">
                        <div className="section__title-wrapper mb-60 text-center">
                            <h2 className="section__title">Simple <br/> All Inclusive  <span className="yellow-bg yellow-bg-big">Pricing<img src="assets/img/shape/yellow-bg.png" alt="img not found"/></span></h2>
                            <p>No contracts. No surprise fees.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="price__tab-btn text-center mb-50">
                            <div className="nav-tabs">
                                <TabList>
                                    <Tab><button className="nav-link" id="nav-monthly-tab" type="button">monthly plan</button></Tab>
                                    <Tab><button className="nav-link" id="nav-annually-tab" type="button">Annual Plan</button></Tab>
                                </TabList>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
                        <div className="price__tab-content">
                            <TabPanel>
                                <div className="row">
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                        <div className="price__item grey-bg mb-30 p-relative">
                                        <div className="price__head">
                                            <h3>Gold</h3>
                                            <p>Perfect for small marketing teams</p>
                                        </div>
                                        <div className="price__tag mb-25">
                                            <h4>$39<span>.99 / monthly</span></h4>
                                        </div>
                                        <div className="price__features mb-40">
                                            <ul>
                                                <li><i className="fas fa-check"></i>Course Discussions</li>
                                                <li><i className="fas fa-check"></i>Content Library</li>
                                                <li><i className="fas fa-check"></i>1-hour Mentorship</li>
                                            </ul>
                                        </div>
                                        <Link href="/contact"><a className="e-btn e-btn-4">Get Started</a></Link>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                        <div className="price__item grey-bg mb-30 p-relative">
                                        <div className="price__offer">
                                            <span>Best Value</span>
                                        </div>
                                        <div className="price__head">
                                            <h3>Diamond</h3>
                                            <p>Perfect for small marketing teams</p>
                                        </div>
                                        <div className="price__tag mb-25">
                                            <h4>$79<span>.99 / monthly</span></h4>
                                        </div>
                                        <div className="price__features mb-40">
                                            <ul>
                                                <li><i className="fas fa-check"></i>Course Discussions</li>
                                                <li><i className="fas fa-check"></i>Content Library</li>
                                                <li><i className="fas fa-check"></i>1-hour Mentorship</li>
                                                <li><i className="fas fa-check"></i>Online Course</li>
                                            </ul>
                                        </div>
                                        <Link href="/contact"><a className="e-btn e-btn-border">Get Started</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="row">
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                        <div className="price__item grey-bg mb-30 p-relative">
                                            <div className="price__head">
                                                <h3>Gold</h3>
                                                <p>Perfect for small marketing teams</p>
                                            </div>
                                            <div className="price__tag mb-25">
                                                <h4>$59<span>.99 / annually</span></h4>
                                            </div>
                                            <div className="price__features mb-40">
                                                <ul>
                                                    <li><i className="fas fa-check"></i>Course Discussions</li>
                                                    <li><i className="fas fa-check"></i>Content Library</li>
                                                    <li><i className="fas fa-check"></i>1-hour Mentorship</li>
                                                </ul>
                                            </div>
                                            <Link href="/contact"><a className="e-btn e-btn-4">Get Started</a></Link>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                            <div className="price__item grey-bg mb-30 p-relative">
                                            <div className="price__offer">
                                                <span>Best Value</span>
                                            </div>
                                            <div className="price__head">
                                                <h3>Diamond</h3>
                                                <p>Perfect for small marketing teams</p>
                                            </div>
                                            <div className="price__tag mb-25">
                                                <h4>$99<span>.99 / annually</span></h4>
                                            </div>
                                            <div className="price__features mb-40">
                                                <ul>
                                                    <li><i className="fas fa-check"></i>Course Discussions</li>
                                                    <li><i className="fas fa-check"></i>Content Library</li>
                                                    <li><i className="fas fa-check"></i>1-hour Mentorship</li>
                                                    <li><i className="fas fa-check"></i>Online Course</li>
                                                </ul>
                                            </div>
                                            <Link href="/contact"><a className="e-btn e-btn-border">Get Started</a></Link>
                                            </div>
                                        </div>
                                    </div>
                            </TabPanel>
                        </div>
                    </div>
                </div>
            </div>
        </Tabs>
 </section>
);