import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextAuth } from '../ContextAPI/AuthContext';

const Opinion = ({detail}) => {
    const {user} = useContext(ContextAuth)
    const {_id, title} = detail;

    const ownReview = event =>{
        event.preventDefault()
        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const email = user?.email || "unregister"
        const text = form.text.value;
        // console.log(photo, name, text)

        const review = {
            id: _id,
           photo,
           name,
           service: title,
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
        {
            !user?.email ? <h3 className='text-center text-1xl text-red-600 mt-5'>Please <Link className='text-blue-600' to='/login'>Login</Link>  first to add a review</h3> : <>
            
            <div>
            <div className="bg-base-200">
                <div className="">
                    
                    <div className="card">
                    <form onSubmit={ownReview} className="card-body">
                        <div className="form-control">
                        <input name='service' type="text" defaultValue={title} className="input input-bordered" readOnly />
                        </div>
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
            </>
        }
    </div>
    );
};

export default Opinion;