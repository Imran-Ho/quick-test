import React from 'react';
import image from '../../Sources/photo-quick.avif'

const Header = () => {
    return (
        <div className='grid lg:grid-cols-2 bg-slate-300 mt-5 mx-5'>
            <img className='m-3' src={image} alt="" />
            <div className='text-center p-10'>
                <h2>Technology has always played a key role in General and ESP "English for Specific Purposes" language learning and teaching. Currently the range of technologies being used in classrooms all over the globe for Language Learning and Teaching has become very diverse, and some which have become central to language practice are briefly described in this website</h2>
            </div>
        </div>
    );
};

export default Header;