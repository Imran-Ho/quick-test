import React from 'react';
import { useLoaderData } from 'react-router-dom';

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
        fetch(`http://localhost:5000/review/${_id}`,{
        method: 'PUT',
        headers:{
            'content-type' : 'application/json'
        },
        body:JSON.stringify(updateItems)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <div>
            <div>
            <h4>Your Name: {name}</h4>
            <h6>Given Exam: ${service}</h6>
            <form onSubmit={updateHandler}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                <input name='name' type="text" placeholder="Name" className="input input-bordered input-accent w-full" />
                <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered input-accent w-full" />
                <input name='email' type="text" defaultValue={email} className="input input-bordered input-accent w-full" readOnly />
                </div>
                <textarea name='text' className="textarea textarea-bordered h-24 w-full" placeholder="your opinion here"></textarea>
                <input className='btn' type="submit" value="place your order" />
            </form>
        </div>
            
        </div>
    );
};

export default UpdateItem;