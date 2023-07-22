import React, { Component } from 'react';
import Link from 'next/link';


class ForgetPasswordMain extends Component {

    render() {
        return (
            <main>
                <section className="signup__area po-rel-z1 pt-100 pb-145">
                    <div className="sign__shape">
                        <img className="man-1" src="assets/img/icon/sign/man-1.png" alt="img not found" />
                        <img className="man-2" src="assets/img/icon/sign/man-2.png" alt="img not found" />
                        <img className="circle" src="assets/img/icon/sign/circle.png" alt="img not found" />
                        <img className="zigzag" src="assets/img/icon/sign/zigzag.png" alt="img not found" />
                        <img className="dot" src="assets/img/icon/sign/dot.png" alt="img not found" />
                        <img className="bg" src="assets/img/icon/sign/sign-up.png" alt="img not found" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                                <div className="sign__wrapper white-bg">

                                    <div className="sign__form">
                                        <form action="#">
                                            <div className="sign__input-wrapper mb-25">
                                                <h5>Work email</h5>
                                                <div className="sign__input">
                                                    <input type="text" placeholder="e-mail address" />
                                                    <i className="fas fa-envelope"></i>
                                                </div>
                                            </div>

                                            <button className="e-btn  w-100"> <span></span>Send email</button>
                                            <div className="sign__new text-center mt-20">
                                                <p>New to Markit? <Link href="/sign-up">Sign Up</Link></p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >

            </main >
        );
    }
}

export default ForgetPasswordMain;