import React from 'react';
import image from '../../Sources/dispensary.jpg'

const Header = () => {
    return (
        <div className='grid lg:grid-cols-2 bg-slate-300 mt-5 mx-5'>
            <img className='m-3' src={image} alt="" />
            <div className='text-center p-10'>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam adipisci incidunt quidem voluptate modi quod, autem in numquam deleniti mollitia minima temporibus similique vel nihil illo maxime quisquam dolores possimus?</h2>
            </div>
        </div>
    );
};

export default Header;