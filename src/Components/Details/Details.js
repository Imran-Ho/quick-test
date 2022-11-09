import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Opinion from '../Opinion/Opinion';
import Students from '../Students/Students';

const Details = () => {
    const details = useLoaderData()
    const {title, img, description, price} = details
    return (
        <div className='grid lg:grid-cols-3 mt-10 mb-5'>
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
                <div>
                    <h2 className='text-center text-2xl bg-green-500 rounded-lg'>Share Your opinion</h2>
                    <Opinion title={title}></Opinion>
                </div>
            </div>
            <div>
                <h3 className='text-center text-2xl bg-orange-600 rounded-lg'>Students' reviews</h3>
                <Students></Students>
            </div>
        </div>
    );
};

export default Details;