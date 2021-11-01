import React from 'react';
import Banner from '../Banner/Banner';
import Delivery from '../Delivery/Delivery';
import Services from '../Services/Services';
import './Home.css'
import Ordering from '../Ordering/Ordering';


const Home = () => {
    return (
        <div className="container ">
            <div className="home row">
                <div className="flex">
                    <Banner></Banner>
                </div>
                <div>
                    <Delivery></Delivery>

                </div>

                <div className="mt-5">
                    <h1 className="text-center text-danger">Our Menu</h1>

                    <Services></Services>
                </div>
                <div>
                    <Ordering></Ordering>
                </div>

            </div>
        </div>
    );
};

export default Home;