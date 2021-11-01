import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import "./Details.css"

const Details = () => {
    const { serviceId } = useParams();
    const [details, setDetails] = useState({})
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch('https://cryptic-reaches-10225.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    reset();
                }
            })
    };


    useEffect(() => {
        fetch(`https://cryptic-reaches-10225.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])


    return (
        <div className="container m-4 p-3">
            <div className="row">
                <div className="col-md-6 details text-center">

                    <img src={details.imageUrl} alt="" />
                    <h3>Food Name: {details.name}</h3>
                    <h5>Food Price: {details.price} tk/=</h5>
                    <h5>Delivery Charge: 70 tk/=</h5>
                    <p>{details.details}</p>
                </div>

                {/* order placed form  */}
                <div className="col-md-6">
                    <h4 className="mt-2">Fill Up the form and placed order</h4>
                    <form className="order-form ms-5 " onSubmit={handleSubmit(onSubmit)}>

                        <input defaultValue={user.displayName} {...register("name")} />

                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className="error">This field is required</span>}
                        <input placeholder="Rode No." defaultValue="" {...register("RodeNo")} />
                        <input placeholder="Building No." defaultValue="" {...register("BuildingNo")} />
                        <input placeholder="phone number" defaultValue="" {...register("phone")} />

                        <input type="submit" />
                    </form>
                </div>

            </div>

        </div>
    );
};

export default Details;