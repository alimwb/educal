import React, { useLayoutEffect, useState } from "react";
import Link from "next/link";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import store from '../../redux/store';
import Loading from '../Loading'

import UseHttp from "../../Hooks/HttpHooks"
import { useRouter } from "next/router";


const SignUpMain = () => {
    const [loading, setLoading] = useState(false)

    const router = useRouter();
    const http = new UseHttp();

    let EMAIL_REGX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
        const validationSchema = yup.object().shape({
        firstName: yup.string().required("Required"),
        lastName: yup.string().required("Required"),
        email: yup.string().matches(EMAIL_REGX, "Invalid email address"),
        password:yup.string().min(8, 'Must be exactly 5 digits').max(30, 'Must be exactly 30 digits').required("Required"),
        passwordConfirm: yup.string().min(8, 'Must be exactly 5 digits').max(30, 'Must be exactly 30 digits').required("Required"),
        agree: yup.boolean().oneOf([true], 'Message'),
    });

    const SignUpSubmit = async (values) => {
        setLoading(true)
        await http.post(`/auth/signup`, values).then((response) => {
            store.dispatch({
                type: 'AUTH_USER_DATA',
                authData: response.data.user
            });
            console.log(response.data);
            toast.success(response.data.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setLoading(false)
            setTimeout(() => router.push('/'), 3000);
        })
            .catch(error => {
                console.log(error)
                toast.error(JSON.parse(error.request.response).errors[0].message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setLoading(false)
            });
    }
    return (
        <main>
            <section className="signup__area po-rel-z1 pt-100 pb-145">
                <div className="sign__shape">
                    <img className="man-1" src="assets/img/icon/sign/man-3.png" alt="img not found" />
                    <img className="man-2 man-22" src="assets/img/icon/sign/man-2.png" alt="img not found" />
                    <img className="circle" src="assets/img/icon/sign/circle.png" alt="img not found" />
                    <img className="zigzag" src="assets/img/icon/sign/zigzag.png" alt="img not found" />
                    <img className="dot" src="assets/img/icon/sign/dot.png" alt="img not found" />
                    <img className="bg" src="assets/img/icon/sign/sign-up.png" alt="img not found" />
                    <img className="flower" src="assets/img/icon/sign/flower.png" alt="img not found" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
                            <div className="section__title-wrapper text-center mb-55">
                                <h2 className="section__title">Create a free <br />  Account</h2>
                                <p>I'm a subhead that goes with a story.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="sign__wrapper white-bg">
                                <div className="sign__form">
                                    <Formik
                                        initialValues={{
                                            firstName: "",
                                            lastName: "",
                                            email: "",
                                            password: "",
                                            passwordConfirm: "",
                                            agree: false
                                        }}
                                        validationSchema={validationSchema}
                                        onSubmit={(values, { setSubmitting }) => {
                                            console.log('lll');
                                            SignUpSubmit(values)
                                            setSubmitting(false);
                                        }}
                                    >
                                        {({ isSubmitting }) => (
                                            <Form>
                                                <div className="sign__input-wrapper mb-25">
                                                    <h5>Fisrt Name</h5>
                                                    <div className="sign__input">
                                                        <Field
                                                            type="text"
                                                            name="firstName"
                                                            placeholder="First Name"
                                                        />
                                                        <i className="fas fa-user"></i>
                                                    </div>
                                                    <ErrorMessage name="firstName" component="div" />
                                                </div>
                                                <div className="sign__input-wrapper mb-25">
                                                    <h5>Last Name</h5>
                                                    <div className="sign__input">
                                                        <Field
                                                            type="text"
                                                            name="lastName"
                                                            placeholder="Last Name"
                                                        />
                                                        <i className="fas fa-user"></i>
                                                    </div>
                                                    <ErrorMessage name="lastName" component="div" />
                                                </div>
                                                <div className="sign__input-wrapper mb-25">
                                                    <h5>Work email</h5>
                                                    <div className="sign__input">
                                                        <Field
                                                            type="text"
                                                            name="email"
                                                            placeholder="e-mail address"
                                                        />
                                                        <i className="fas fa-envelope"></i>
                                                    </div>
                                                    <ErrorMessage name="email" component="div" />
                                                </div>
                                                <div className="sign__input-wrapper mb-25">
                                                    <h5>Password</h5>
                                                    <div className="sign__input">
                                                        <Field
                                                            type="password"
                                                            name="password"
                                                            placeholder="Password"
                                                        />
                                                        <i className="fas fa-lock"></i>
                                                    </div>
                                                    <ErrorMessage name="password" component="div" />
                                                </div>
                                                <div className="sign__input-wrapper mb-25">
                                                    <h5>Re-Password</h5>
                                                    <div className="sign__input">
                                                        <Field
                                                            type="password"
                                                            name="passwordConfirm"
                                                            placeholder="Re-Password"
                                                        />
                                                        <i className="fas fa-lock"></i>
                                                    </div>
                                                    <ErrorMessage name="passwordConfirm" component="div" />
                                                </div>
                                                <div className="sign__action d-flex justify-content-between mb-30">
                                                    <div className="sign__agree d-flex align-items-center">
                                                        <Field
                                                            type="checkbox"
                                                            name="agree"
                                                            className="m-check-input"
                                                        />
                                                        <label className="m-check-label" htmlFor="m-agree">I agree to the <a href="#">Terms & Conditions
                                                        </a></label>
                                                    </div>
                                                    <ErrorMessage name="agree" component="div" />
                                                </div>
                                                <button className="e-btn  w-100" type="submit" disabled={isSubmitting}>
                                                {loading ?
                                                        <div id="loading">
                                                            <Loading />
                                                        </div>
                                                        : 'Submit'}              
                                                                                  </button>
                                                <div className="sign__new text-center mt-20">
                                                    <p>Already in Markit ? <Link href="/sign-in">Sign In</Link></p>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </main >
    );
}


export default SignUpMain;
