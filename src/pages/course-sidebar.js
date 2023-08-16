import React from 'react';
import CourseSidebarMain from '../components/CourseSidebar/CourseSidebarMain';
import Footer from '../components/Layout/Footer/Footer';
import Header from '../components/Layout/Header/Header';

class CourseSidebar extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <Header />
            <CourseSidebarMain />
            <Footer />
            </React.Fragment>
        );
    }
}


export default CourseSidebar;