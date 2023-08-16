import React from 'react';
import FooterThree from '../components/Layout/Footer/FooterStyleThree';
import HeaderFour from '../components/Layout/Header/HeaderStyleFour';
import SignUpMain from '../components/SignUp/SignUpMain';
import ForgetPasswordMain from '../components/ForgetPassword/ForgetPasswordMain';

class ForgetPassword extends React.Component {

    static getInitialProps({ store }) { }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <ForgetPasswordMain />
                <FooterThree />
            </React.Fragment>
        );
    }
}


export default ForgetPassword;