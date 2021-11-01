import React from 'react';
import { useForm } from 'react-hook-form';
import "./AddProducts.css"

const AddProducts = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch(`https://cryptic-reaches-10225.herokuapp.com/addProducts`, {
            method: "POST",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                reset()
                console.log(result)
            })

    };
    return (
        <div className="addProducts">
            <form onSubmit={handleSubmit(onSubmit)}>

                <input type="text"   {...register("name")} placeholder="name" />
                <input type="text"   {...register("description")} placeholder="short description" />
                <input type="text"   {...register("details")} placeholder="details" />
                <input type="url"   {...register("imageUrl")} placeholder="imageUrl" />


                <input type="number" {...register("price")} placeholder="price" />

                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;