import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const details = useLoaderData()
    const {title, img, description, price} = details
    return (
        <div className='my-5 mx-20'>
            <div className="">
                <img src={img} alt="Shoes" className="rounded-xl w-full" />
            <div className="">
                <h2 className="text-3xl">{title}</h2>
                <h2 className="text-2xl">Price: ${price}</h2>
                <p>{description}</p>
            </div>
            </div>
        </div>
    );
};

export default Details;