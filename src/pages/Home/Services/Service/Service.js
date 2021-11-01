import React from 'react';
// import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import "./Service.css"

const Service = ({ service }) => {
    const { name, imageUrl, price, _id, description } = service;

    return (
        <div className="col-md-4 mt-5" >
            <div className="border image-size m-1">
                <img src={imageUrl} alt="" />
                <h4 className="m-1">Food: {name}</h4>
                <h5 className="m-1">Price: {price} tk</h5>
                <p className="m-1"> <span className="fw-bold">Made by:</span> {description}.</p>
                <Link to={`/details/${_id}`}>
                    <button className="btn btn-warning text-center m-1">Order Now</button>
                </Link>
            </div>
        </div >
    );
};

export default Service;