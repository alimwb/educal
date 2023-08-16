import React from 'react';
import ContactMain from '../components/Contact/ContactMain';
import Header from '../components/Layout/Header/Header';
import FooterThree from '../components/Layout/Footer/FooterStyleThree';

class Contact extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <Header />
            <ContactMain />
            <FooterThree />
            </React.Fragment>
        );
    }
}


export default Contact;

