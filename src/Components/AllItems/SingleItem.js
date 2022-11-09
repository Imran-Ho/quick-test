import React from 'react';
import { Link } from 'react-router-dom';

const SingleItem = ({single}) => {
    const {_id, title, img, description, price} = single
    return (
        <div>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <h2 className="card-title">Price: ${price}</h2>
                        <p>{description}</p>
                        <div className="card-actions justify-end">
                        <Link to={`/details/${_id}`}>
                            <button className="btn btn-primary">More Details</button>
                        </Link>
                </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default SingleItem;