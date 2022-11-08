import React from 'react';

const TestItems = ({singleItem}) => {
    const {_id, title, img, price, description} = singleItem
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">More Details</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default TestItems;