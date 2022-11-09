import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextAuth } from '../../ContextAPI/AuthContext';

const NavBar = () => {
    const {user, logOut} = useContext(ContextAuth)
    return (
        <div>
            <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>Services</Link></li>
                    <li><Link to='/'>Blog</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Quick Test</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/all'>Services</Link></li>
                    <li><Link to='/'>Blog</Link></li>
                    {user?.email ? 
                    <>
                    <li><Link to='/myReview'>My Reviews</Link></li>
                    <li><Link to='/addService'>Add Service</Link></li>
                    <li><Link to=''><button onClick={logOut}>Log Out</button></Link></li>
                    </>
                    :
                    <li><Link to='/login'>Login</Link></li>
                    }
                </ul>
            </div>
                <div className="navbar-end">
                    <p>{user?.email}</p>
                    
                     
                </div>
            </div>
        </div>
    );
};

export default NavBar;