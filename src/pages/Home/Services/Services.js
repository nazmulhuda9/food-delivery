import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import "./Services.css"

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://cryptic-reaches-10225.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])





    return (
        <div className="container">
            <div className="row">
                {
                    services.map((service) => <Service

                        key={service.id}
                        service={service}
                    ></Service>
                    )
                }

            </div>


        </div>
    );
};

export default Services;