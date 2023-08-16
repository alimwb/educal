import React from 'react';
import InstructorMain from '../components/Instructor/InstructorMain';
import Footer from '../components/Layout/Footer/Footer';
import Header from '../components/Layout/Header/Header';

class Instructor extends React.Component {

    static getInitialProps({ store }) { }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <InstructorMain />
                <Footer />
            </React.Fragment>
        );
    }
}


export default Instructor;