import React from 'react';
import Header from '../components/Layout/Header/Header';
import FooterThree from '../components/Layout/Footer/FooterStyleThree';
import MyWishListMain from '../components/MyWishList/MyWishListMain';

class MyWishList extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <Header />
            <MyWishListMain />
            <FooterThree />
            </React.Fragment>
        );
    }
}


export default MyWishList;