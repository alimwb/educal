import React from 'react';
import Header from '../components/Layout/Header/Header';
import FooterThree from '../components/Layout/Footer/FooterStyleThree';
import MyCart from '../components/MyCart/MyCartMain';

class Cart extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <Header />
            <MyCart />
            <FooterThree />
            </React.Fragment>
        );
    }
}


export default Cart;

