import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ContextAuth } from '../ContextAPI/AuthContext';

const Signup = () => {
    const {createUser} = useContext(ContextAuth)
    const navigate = useNavigate()

    const createNewUser = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/')
                
            })
            .catch(error => console.error(error));
    }
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Sign up now!</h1>
                <p className="py-6">Please write your email and password carefully.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={createNewUser} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="text" name='password' placeholder="password" className="input input-bordered" />
                    
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Up</button>
                    </div>
                </form>
                <p className='text-center'>have an account please <Link className='text-blue-600' to='/login'>Log in</Link></p>
                </div>
            </div>
            </div>
    </div>
    );
};

export default Signup;