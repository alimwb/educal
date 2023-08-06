import React from 'react';
import FooterThree from '../components/Layout/Footer/FooterStyleThree';
import SignInMain from '../components/SignIn/SignInMain';
import HeaderFour from '../components/Layout/Header/HeaderStyleFour';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';

const SignIn = (props) => {
    const { authData } = props;
    const router = useRouter();
    if (authData !== null) {
        router.push('/');
    }


    return (
        <React.Fragment>
            <HeaderFour />
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