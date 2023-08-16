import React from 'react';
import Header from '../components/Layout/Header/Header';
import FooterThree from '../components/Layout/Footer/FooterStyleThree';
import BlogMain from '../components/Blog/BlogMain';

class Blog extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <Header />
            <BlogMain />
            <FooterThree />
            </React.Fragment>
        );
    }
}


export default Blog;

