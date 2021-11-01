import React from 'react';
import { Accordion } from 'react-bootstrap';
import freeDelivery from "../../../images/free-delivery.jpg"


const Ordering = () => {
    return (
        <div className="container p-5">
            <h1 className="text-primary text-center">Free Delivery </h1>
            <h5 className="text-danger text-center">fill up some condition</h5>  <h5 className="text-danger text-center">and get a coupon for free delivery</h5>
            <hr />
            <div className="row">
                <div className="col d-flex justify-content-evenly">
                    <div>
                        <img src={freeDelivery} className="img-fluid" alt="..." />
                    </div>

                    {/* acordin  */}
                    <div className="p-3">


                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Condition #1</Accordion.Header>
                                <Accordion.Body>
                                    if you get 2 times delivery for every week on a month. you won a coupon for  Monthly on times free delivery
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Condition #2</Accordion.Header>
                                <Accordion.Body>
                                    if you get 7 times delivery for every Month  on 2021. you won a coupon for  Monthly on times free delivery
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Condition #3</Accordion.Header>
                                <Accordion.Body>
                                    if you  payment 12 times on delivery only bkash.  you won a coupon for  Monthly on times free delivery
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ordering;