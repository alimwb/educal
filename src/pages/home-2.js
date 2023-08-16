import React from 'react';
import HomeTwoMain from '../components/HomeTwo/HomeTwoMain';
import FooterStyleTwo from '../components/Layout/Footer/FooterStyleTwo';
import Header from '../components/Layout/Header/Header';

class HomeTwo extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <Header />
            <HomeTwoMain />
            <FooterStyleTwo />
            </React.Fragment>
        );
    }
}


export default HomeTwo;

