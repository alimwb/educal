import React from 'react';
import FooterThree from '../components/Layout/Footer/FooterStyleThree';
import Header from '../components/Layout/Header/Header';
import { connect } from 'react-redux';
import ProfileMain from '../components/Profile/ProfileMain';

const SignIn = (props) => {
    const { authData } = props;
    console.log(authData);
    return (
        <React.Fragment>
            <Header />
            <ProfileMain />
            <FooterThree />
        </React.Fragment>
    );
}



const mapStateToProps = (state) => {
    const { authData } = state.authData;
    return { authData }
};

export default connect(mapStateToProps)(SignIn);
