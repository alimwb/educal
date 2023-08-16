import React from 'react';
import FooterThree from '../components/Layout/Footer/FooterStyleThree';
import SignInMain from '../components/SignIn/SignInMain';
import Header from '../components/Layout/Header/Header';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';

const SignIn = (props) => {
    const { authData } = props;
    const router = useRouter();
    if (authData) {
        router.push('/');
    }


    return (
        <React.Fragment>
            <Header />
            <SignInMain />
            <FooterThree />
        </React.Fragment>
    );
}



const mapStateToProps = (state) => {
    const { authData } = state.authData;
    return { authData }
};

export default connect(mapStateToProps)(SignIn);