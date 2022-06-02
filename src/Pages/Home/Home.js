import React from 'react';
import Banner from './Banner';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;