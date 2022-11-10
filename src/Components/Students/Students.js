import React, { useEffect, useState } from 'react';
import Review from './Review';

const Students = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() =>{
        fetch('https://assignment-11-server-imran-ho.vercel.app/review')
        .then(res => res.json())
        .then(data => {
            setReviews(data)
        })
    },[reviews])
    return (
        <div className=''>
            {
                reviews?.map(review => <Review
                key={review._id}
                review={review}
                ></Review>)
            }
            
            <div>
            
            </div>
        </div>
    );
};

export default Students;