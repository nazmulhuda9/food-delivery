import React from 'react';
import choose from '../../../images/choose food.png'
import order from '../../../images/order.png'
import delivery from '../../../images/deliivery (1).png'
import "./Delivery.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown, faArrowRight, faCoffee } from '@fortawesome/free-solid-svg-icons'

const Delivery = () => {

    return (
        <div className="container m-4">
            <div className="text-center text-primary p-2"><h1>How It Works</h1></div>  <span className="text-danger"><hr /></span>
            <div className="row">

                <div className="d-flex justify-content-evenly align-items-center delivery">


                    <div className=" col-md-3 col-sm-12  option">
                        <img className='text-center' src={choose} alt="" />
                        <h5>visiting our website and choose your favourite food</h5>
                    </div>


                    <i className="fas fa-arrow-right fs-5 fw-bold"></i>
                    <div className=" col-md-3 col-sm-12  option">
                        <img src={order} alt="" />
                        <h5>Get payment and confirm your order.  fast delivery for extra payment.</h5>
                    </div>


                    <i className="fas fa-arrow-right  fs-5 fw-bold"></i>
                    <div className="col-md-3 col-sm-12 option">
                        <img className="align-middle " src={delivery} alt="" />
                        <h5>Waiting sometimes, our delivery boy will be on your door.</h5>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Delivery;