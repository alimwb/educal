import React, { Component } from 'react';
import Link from 'next/link';

class Event extends Component {

    render() {

        return (
            <main>
                <section className="events__area pt-115 pb-120 p-relative">
                    <div className="events__shape">
                        <img className="events-1-shape" src="assets/img/events/events-shape.png" alt="img not found"/>
                        </div>
                        <div className="container">
                        <div className="row">
                            <div className="col-xxl-4 offset-xxl-4">
                                <div className="section__title-wrapper mb-60 text-center">
                                    <h2 className="section__title">Current <span className="yellow-bg yellow-bg-big">Events<img src="assets/img/shape/yellow-bg.png" alt="img not found"/></span></h2>
                                    <p>We found 13 events available for you.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
                                <div className="events__item mb-10 hover__active">
                                    <div className="events__item-inner d-sm-flex align-items-center justify-content-between white-bg">
                                    <div className="events__content">
                                        <div className="events__meta">
                                            <span>Jun 14, 2022</span>
                                            <span>12:00 am - 2:30 pm</span>
                                            <span>New York</span>
                                        </div>
                                        <h3 className="events__title"><Link href="/event-details"><a>Digital transformation conference</a></Link></h3>
                                    </div>
                                    <div className="events__more">
                                        <Link href="/event-details"><a className="link-btn">
                                            View More
                                            <i className="fas fa-arrow-right"></i>
                                            <i className="fas fa-arrow-right"></i>
                                        </a></Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
                                <div className="events__item mb-10 hover__active active">
                                    <div className="events__item-inner d-sm-flex align-items-center justify-content-between white-bg">
                                    <div className="events__content">
                                        <div className="events__meta">
                                            <span>April 10, 2022</span>
                                            <span>9:00 am - 5:00 pm</span>
                                            <span>Mindahan</span>
                                        </div>
                                        <h3 className="events__title"><Link href="/event-details"><a>World education day conference</a></Link></h3>
                                    </div>
                                    <div className="events__more">
                                        <Link href="/event-details"><a className="link-btn">
                                            View More
                                            <i className="fas fa-arrow-right"></i>
                                            <i className="fas fa-arrow-right"></i>
                                        </a></Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
                                <div className="events__item mb-10 hover__active">
                                    <div className="events__item-inner d-sm-flex align-items-center justify-content-between white-bg">
                                    <div className="events__content">
                                        <div className="events__meta">
                                            <span>July 16, 2022</span>
                                            <span>10:30 am - 1:30 pm</span>
                                            <span>Weedpatch</span>
                                        </div>
                                        <h3 className="events__title"><Link href="/event-details"><a>Foundations of global health</a></Link></h3>
                                    </div>
                                    <div className="events__more">
                                        <Link href="/event-details"><a className="link-btn">
                                            View More
                                            <i className="fas fa-arrow-right"></i>
                                            <i className="fas fa-arrow-right"></i>
                                        </a></Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
                                <div className="events__item mb-10 hover__active">
                                    <div className="events__item-inner d-sm-flex align-items-center justify-content-between white-bg">
                                    <div className="events__content">
                                        <div className="events__meta">
                                            <span>March 24, 2022</span>
                                            <span>10:30 am - 12:00 pm</span>
                                            <span>Lnland</span>
                                        </div>
                                        <h3 className="events__title"><Link href="/event-details"><a>Business creativity workshops</a></Link></h3>
                                    </div>
                                    <div className="events__more">
                                        <Link href="/event-details"><a className="link-btn">
                                            View More
                                            <i className="fas fa-arrow-right"></i>
                                            <i className="fas fa-arrow-right"></i>
                                        </a></Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default Event;