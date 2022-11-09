import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const TestItems = ({singleItem}) => {
    const {_id, title, img, price, description} = singleItem
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
            <PhotoProvider>
                    <PhotoView src={img}>
                    <img src={img} style={{ objectFit: 'cover' }} alt="" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h2 className="card-title">Price: ${price}</h2>
                <p>{description.slice(0,100)}</p>
                <div className="card-actions justify-end">
                <Link to={`/details/${_id}`}>
                    <button className="btn btn-primary">More Details</button>
                </Link>
                </div>
            </div>
            
            </div>
        </div>
    );
};

export default TestItems;