import React, { useContext, useEffect, useState } from 'react';
import { ContextAuth } from '../ContextAPI/AuthContext';
import useTitle from '../TitleHooks/useTitle';
import SoloReview from './SoloReview';
import swal from 'sweetalert';

const MyReview = () => {
    useTitle("MyReview")

    const { user, logOut} = useContext(ContextAuth);
    // console.log(user)
    const [singleReview, setSingleReview] = useState([])
    // console.log(singleReview)

    useEffect(() => {
        fetch(`https://assignment-11-server-one-rosy.vercel.app/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setSingleReview(data))

    }, [user?.email])

// delete handler
    const handleDelete = id =>{
        const proceed = window.confirm('are you going to delete?')
        if(proceed){
            fetch(`https://assignment-11-server-one-rosy.vercel.app/review/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    swal('deleted successfully')
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