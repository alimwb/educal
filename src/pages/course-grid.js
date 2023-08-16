import React from 'react';
import Footer from '../components/Layout/Footer/Footer';
import CourseGridMain from '../components/CourseGrid/CourseGridMain';
import Header from '../components/Layout/Header/Header';

class CourseGrid extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <Header />
            <CourseGridMain />
            <Footer />
            </React.Fragment>
        );
    }
}


export default CourseGrid;

