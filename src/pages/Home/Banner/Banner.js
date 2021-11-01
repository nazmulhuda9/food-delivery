import React from 'react';
import img from '../../../images/banner (2).jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="d-flex justify-content-center align-items-center col">
            <div className="col">
                <h1 className="text-danger mt-3"></h1>
                <h2 className="text-primary pb-2">Just Order and Get Your Food Fast</h2>
                <h6 className=" fw-bold pb-2">Our Delivery boy is always ready for the first delivery. Fast delivery is our best practice.</h6>
                <button type="button" className="btn btn-warning">Order Now</button>
            </div>
            <img src={img} className="img w-75" alt="..." />
        </div>
    );
};

export default Banner;