import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Details = () => {
    const details = useLoaderData()
    const {title, img, description, price} = details
    return (
        <div className='grid lg:grid-cols-2 my-5 mx-20'>
            <div>
                <div className="">
                    <PhotoProvider>
                        <PhotoView src={img}>
                        <img src={img} style={{ objectFit: 'cover' }} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                <div className="">
                    <h2 className="text-3xl">{title}</h2>
                    <h2 className="text-2xl">Price: ${price}</h2>
                    <p>{description}</p>
                </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Details;