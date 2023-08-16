import React from 'react';
import Header from '../components/Layout/Header/Header';
import FooterThree from '../components/Layout/Footer/FooterStyleThree';
import CheckoutMain from '../components/Checkout/CheckoutMain';

class Checkout extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <Header />
            <CheckoutMain />
            <FooterThree />
            </React.Fragment>
        );
    }
}


export default Checkout;