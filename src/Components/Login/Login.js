import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextAuth } from '../ContextAPI/AuthContext';

const Login = () => {
    const {signIn, googleSignIn} = useContext(ContextAuth)
    const userSignIn = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                // navigate(from, {replace: true})
            })
            .catch(error => console.error(error));
    }

        const googleLogIn = ()=>{
            googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                // navigate(from, {replace: true})
            })
            .catch(error => console.error(error));
        }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login Now</h1>
                    <p className="py-6">we ensure that the information you provide will be secret.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form  onSubmit={userSignIn} className="card-body">
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
                        <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='text-center my-3'>don't have an account please <Link className='text-blue-600' to='/signup'>Sign up</Link></p>
                    <button onClick={googleLogIn} className="btn btn-outline btn-secondary mb-3">Sign in with Google</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Login;