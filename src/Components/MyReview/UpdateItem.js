import React from 'react';
import { useLoaderData } from 'react-router-dom';
import swal from 'sweetalert';

const UpdateItem = () => {
    const updateUser = useLoaderData()
    console.log(updateUser)
    const {_id, name, service, photo, text, email} = updateUser;

    const updateHandler = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const text = form.text.value;
        console.log(name, photo, text)

        const updateItems = {
            name,
            photo,
            text
        }
        fetch(`https://assignment-11-server-one-rosy.vercel.app/review/${_id}`,{
        method: 'PUT',
        headers:{
            'content-type' : 'application/json'
        },
        body:JSON.stringify(updateItems)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            
            if(data.modifiedCount > 0){
                swal('Update completed successfully')
                form.reset()
            }
        })
    }
    return (
        <div className=''>
            <div className=''>
            <h4 className='text-3xl text-center'>Your Name: {name}</h4>
            <h6 className='text-2xl text-center text-rose-700'>Given Exam: {service}</h6>
            <form onSubmit={updateHandler} className='text-center my-5'>
                <div className='text-center'>
                <input name='name' type="text" placeholder="Name" className="input input-bordered w-80" /><br />
                <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered w-80" /><br />
                <input name='email' type="text" defaultValue={email} className="input input-bordered w-80" readOnly /><br />
                
                <input name='text' className="input input-bordered h-24 w-80" placeholder="your opinion here"></input><br />
                <input className='btn btn-outline my-5' type="submit" value="place your update" />
                </div>
            </form>
        </div>
            
        </div>
    );
};

export default UpdateItem;