import React from 'react';
import Footer from '../components/Layout/Footer/Footer';
import CourseDetailsMain from '../components/CourseDetails/CourseDetailsMain';
import Header from '../components/Layout/Header/Header';

class CourseDetails extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <Header />
            <CourseDetailsMain />
            <Footer />
            </React.Fragment>
        );
    }
}


export default CourseDetails;

