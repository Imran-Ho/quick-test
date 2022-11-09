import React from 'react';
import { Link } from 'react-router-dom';

const SoloReview = ({individual,handleDelete, updateHandler}) => {
    // console.log(individual)
    const {_id, photo, service, name, text} = individual
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className='h-40' src={photo} alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Test Name: {service}</h2>
                    <h2 className="card-title">Student Name: {name}</h2>
                    <p>Own Thought: {text}</p>
                    <div className="card-actions justify-end">
                    <Link to={`/updateItem/${_id}`}>
                        <button className="btn btn-primary">Update</button>
                    </Link>
                    <button onClick={()=>handleDelete(_id)} className="btn btn-warning">Delete</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default SoloReview;