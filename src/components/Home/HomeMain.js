import React, { Component } from 'react';
import Hero from './HeroSection';
import Category from './CategorySection';
import Banner from './BannerSection';
import Event from './EventSection';
import Cta from './CtaSection';
import PriceTab from '../Elements/Tab/PriceTab';
import CourseTab from '../Elements/Tab/CourseTab';

class HomeMain extends Component {

    render() {

        return (
            <main>
	            {/* hero-start */}
				<Hero />
				{/* hero-end */}

				{/* category-start */}
				<Category />
				{/* category-end */}

				{/* banner-start */}
				<Banner />
				{/* banner-end */}

				{/* course-start */}
				<CourseTab />
				{/* course-end */}

				{/* event-start */}
				<Event />
				{/* event-end */}

				{/* tab-start */}
				<PriceTab />
				{/* tab-end */}
				
				{/* cta-start */}
				<Cta />
				{/* cta-end */}

        	</main>
        );
    }
}

export default HomeMain;