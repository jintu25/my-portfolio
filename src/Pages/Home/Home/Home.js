import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Project from '../Project/Project';
import './home.css'
import Myskills from '../MySkils/Myskills';
import Testimonial from '../Testimonial/Testimonial';
const Home = () => {
    return (
        <div id='homePage'>
            <Banner></Banner>
            <About></About>
            <Myskills></Myskills>
            <Project></Project>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;