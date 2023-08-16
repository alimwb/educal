import React from 'react';
import HomeThreeMain from '../components/HomeThree/HomeThreeMain';
import FooterThree from '../components/Layout/Footer/FooterStyleThree';
import Header from '../components/Layout/Header/Header';


class HomeThree extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <Header />
            <HomeThreeMain />
            <FooterThree />
            </React.Fragment>
        );
    }
}


export default HomeThree;

