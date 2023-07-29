import React, { useLayoutEffect } from "react";
import Link from "next/link";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { connect } from 'react-redux';
import { toast } from "react-toastify";
import store from '../../redux/store';

import UseHttp from "../../Hooks/HttpHooks"
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";

const SignInMain = (props) => {
    const router = useRouter();
    const http = new UseHttp();

    const validationSchema = yup.object().shape({
        login: yup.string().required("Required"),
        password: yup.string().min(8, 'Must be exactly 5 digits').max(30, 'Must be exactly 30 digits').required("Required"),
    });

    const loginSubmit = async (values) => {
        await http.post(`/auth/login`, values).then((response) => {
            store.dispatch({
                type: 'AUTH_USER_DATA',
                authData: response.data.user
            });
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
            });
    }
    return (
        <main>
            <section className="signup__area po-rel-z1 pt-100 pb-145">
                <div className="sign__shape">
                    <img
                        className="man-1"
                        src="assets/img/icon/sign/man-1.png"
                        alt="img not found"
                    />
                    <img
                        className="man-2"
                        src="assets/img/icon/sign/man-2.png"
                        alt="img not found"
                    />
                    <img
                        className="circle"
                        src="assets/img/icon/sign/circle.png"
                        alt="img not found"
                    />
                    <img
                        className="zigzag"
                        src="assets/img/icon/sign/zigzag.png"
                        alt="img not found"
                    />
                    <img
                        className="dot"
                        src="assets/img/icon/sign/dot.png"
                        alt="img not found"
                    />
                    <img
                        className="bg"
                        src="assets/img/icon/sign/sign-up.png"
                        alt="img not found"
                    />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
                            <div className="section__title-wrapper text-center mb-55">
                                <h2 className="section__title">
                                    Sign in to <br /> recharge direct.
                                </h2>
                                <p>
                                    it you don't have an account you can{" "}
                                    <Link href="/sign-up">Register here!</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="sign__wrapper white-bg">
                                <div className="sign__form">
                                    <Formik
                                        initialValues={{ login: "", password: "" }}
                                        validationSchema={validationSchema}
                                        onSubmit={(values, { setSubmitting }) => {
                                            loginSubmit(values)
                                            setSubmitting(false);
                                        }}
                                    >
                                        {({ isSubmitting }) => (
                                            <Form>
                                                <div className="sign__input-wrapper mb-25">
                                                    <h5>Work email/number/username</h5>
                                                    <div className="sign__input">
                                                        <Field
                                                            type="text"
                                                            name="login"
                                                            placeholder="e-mail address"
                                                        />
                                                        <i className="fas fa-envelope"></i>
                                                    </div>
                                                    <ErrorMessage name="login" component="div" />
                                                </div>
                                                <div className="sign__input-wrapper mb-10">
                                                    <h5>Password</h5>
                                                    <div className="sign__input">
                                                        <Field type="text" name="password" placeholder="Password" />
                                                        <i className="fas fa-lock"></i>
                                                    </div>
                                                    <ErrorMessage name="password" component="div" />
                                                </div>
                                                <div className="sign__action d-sm-flex justify-content-between mb-30">
                                                    {/* <div className="sign__agree d-flex align-items-center">
                                                    <input
                                                        className="m-check-input"
                                                        type="checkbox"
                                                        id="m-agree"
                                                    />
                                                    <label className="m-check-label" htmlFor="m-agree">
                                                        Keep me signed in
                                                    </label>
                                                </div> */}
                                                    <div className="sign__forgot">
                                                        <Link href="/forget-password">
                                                            Forgot your password?
                                                        </Link>
                                                    </div>
                                                </div>
                                                <button className="e-btn  w-100" type="submit" disabled={isSubmitting}>
                                                    Submit
                                                </button>
                                                <div className="sign__new text-center mt-20">
                                                    <p>
                                                        New to Markit? <Link href="/sign-up">Sign Up</Link>
                                                    </p>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}


export default SignInMain;


