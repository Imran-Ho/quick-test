import React, { useContext } from 'react';
import { ContextAuth } from '../ContextAPI/AuthContext';

const Opinion = () => {
    const {user} = useContext(ContextAuth)

    const ownReview = event =>{
        event.preventDefault()
        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const email = user?.email || "unregister"
        const text = form.text.value;
        // console.log(photo, name, text)

        const review = {
           photo,
           name,
           email,
           text

        }
       
// post service to database 
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Review placed successfully')
                form.reset();
            }
        })
        .catch(err => console.error(err))

    }
    
    return (
        <div>
            <div className="bg-base-200">
                <div className="">
                    
                    <div className="card">
                    <form onSubmit={ownReview} className="card-body">
                        <div className="form-control">
                        <input name='photo' type="text" placeholder="photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <input name='name' type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <input name='email' type="text" defaultValue={user?.email} className="input input-bordered" readOnly />
                        </div>
                        <div className="form-control">
                        <textarea name='text' type="text" placeholder="Your review" className="input input-bordered" />
                        </div>
                        
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Opinion;