import React from 'react';
import CourseListMain from '../components/CourseList/CourseListMain';
import Footer from '../components/Layout/Footer/Footer';
import Header from '../components/Layout/Header/Header';

class CourseList extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <Header />
            <CourseListMain />
            <Footer />
            </React.Fragment>
        );
    }
}


export default CourseList;