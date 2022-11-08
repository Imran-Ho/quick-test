import React from 'react';

const About = () => {
    return (
        <div>
            <div>
                <h2 className='text-4xl text-center'>About Us</h2>
            </div>
            <div className='grid lg:grid-cols-3 gap-5 mt-5'>
            <div>
                <img src="" alt="" />
            </div>
            <div className='bg-warning p-8'>
                <h4 className='text-center mb-2 text-5xl'>other services</h4>
                <ul>
                    <li>short time membership</li>
                    <li>6 months membership</li>
                    <li>life time membership</li>
                </ul>
            </div>
            <div className='bg-primary'>
                <h4>started</h4>
                <p>from </p>
            </div>
        </div>
        </div>
    );
};

export default About;