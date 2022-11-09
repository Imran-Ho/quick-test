import React, { useContext } from 'react';
import { ContextAuth } from '../ContextAPI/AuthContext';

const AddService = () => {
    const {user} = useContext(ContextAuth)
    // console.log(user)

    const addService = event =>{
        event.preventDefault()
        const form = event.target;
        const photo = form.photo.value;;
        const email = user?.email || "unregister"
        const title = form.title.value;
        const price = form.price.value;
        const description = form.description.value;
        // console.log(photo,title,price,description)
        const service = {
            title,
            img:photo,
            price,
            description,
        }
       
// post service to database 
        fetch('http://localhost:5000/tests', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Service placed successfully')
                form.reset();
            }
        })
        .catch(err => console.error(err))



    }
    return (
        <div className=''>
            <form onSubmit={addService}>
            <h4>Add your valued Service</h4>
            <h6>we appreciate your service added here.</h6>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                <input name='photo' type="text" placeholder="photo URL" className="input input-bordered input-accent w-full" /><br />
                <input name='title' type="text" placeholder="Title name" className="input input-bordered input-accent w-full" /><br />
                <input name='price' type="text" placeholder="price" className="input input-bordered input-accent w-full" /><br />
                <input name='email' type="text" defaultValue={user?.email} className="input input-bordered input-accent w-full" readOnly /><br />
                <textarea name='description' className="textarea textarea-bordered h-24 w-full" placeholder="description"></textarea>
                </div>
                <input className='btn btn-primary my-5' type="submit" value="place your order" />
            </form>
        </div>
    );
};

export default AddService;