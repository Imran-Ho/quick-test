import React, { useContext, useEffect, useState } from 'react';
import { ContextAuth } from '../ContextAPI/AuthContext';
import SoloReview from './SoloReview';

const MyReview = () => {

    const { user, logOut} = useContext(ContextAuth);
    // console.log(user)
    const [singleReview, setSingleReview] = useState([])
    // console.log(singleReview)

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setSingleReview(data))

    }, [user?.email])

// delete handler
    const handleDelete = id =>{
        const proceed = window.confirm('are you going to delete?')
        if(proceed){
            fetch(`http://localhost:5000/review/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    alert('deleted successfully')
                    const remaining = singleReview.filter(remainingReview => remainingReview._id !== id)
                    setSingleReview(remaining)
                }
            })
        }
    }
// handle Update
    const updateHandler = id =>{
        console.log(id)
    }
    return (
        <div className='mx-auto'>
            {
                singleReview?.map(single => <SoloReview
                key={single._id}
                individual={single}
                handleDelete={handleDelete}
                updateHandler={updateHandler}
                ></SoloReview>)
            }
        </div>
    );
};

export default MyReview;