import React from 'react';

const About = () => {
    return (
        <div>
            <div>
                <h2 className='text-4xl text-center text-orange-500 my-5'>About Us</h2>
            </div>
            <div className='grid lg:grid-cols-3 gap-5 mt-5'>
            <div className='text-center text-purple-600 text-2xl p-5'>
                <h2>Quick Test is a non profit online organization for all kind of online tests services.</h2>
            </div>
            <div className='bg-warning p-8 rounded-xl'>
                <h4 className='text-center mb-2 text-3xl'>Other Services</h4>
                <ul>
                    <li className='text-1xl'>Short time membership</li>
                    <li className='text-1xl'>6 months membership</li>
                    <li className='text-1xl'>Life time membership</li>
                </ul>
            </div>
            <div className='bg-primary rounded-xl p-8'>
                <h4 className='text-2xl text-center'>Established:</h4>
                <p className='text-1xl text-center p-5'>Since 2022, we are trying to make our service flexible for our clients and students.</p>
            </div>
        </div>
        </div>
    );
};

export default About;