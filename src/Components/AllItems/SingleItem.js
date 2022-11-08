import React from 'react';

const SingleItem = ({single}) => {
    const {title, img, description, price} = single
    return (
        <div>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <h2 className="card-title">Price: ${price}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default SingleItem;