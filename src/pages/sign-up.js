import React from 'react';
import FooterThree from '../components/Layout/Footer/FooterStyleThree';
import Header from '../components/Layout/Header/Header';
import SignUpMain from '../components/SignUp/SignUpMain';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';

const SignIn = (props) => {
    const { authData } = props;
    const router = useRouter();
    if (authData) {
        router.push('/sign-in');
    }
    return (
        <React.Fragment>
            <Header />
            <SignUpMain />
            <FooterThree />
        </React.Fragment>
    );
}



const mapStateToProps = (state) => {
    const { authData } = state.authData;
    return { authData }
};

export default connect(mapStateToProps)(SignIn);
