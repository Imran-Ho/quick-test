import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TestItems from '../TestItems/TestItems';

const Service = () => {
    const [testItems, setTestItems] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/limit')
        .then(res => res.json())
        .then(data => setTestItems(data))
    }, [])
    return (
        <div>
            <h3 className='text-4xl text-center text-orange-500 my-5'>Our Services are for you</h3>
            <p className='text-1xl text-center text-sky-500 my-5'>We give a good qualitiful environment for having a homely feel place.</p>
                <div className='grid lg:grid-cols-3 gap-3'>
                    {
                    testItems?.map(singleItem => <TestItems
                    key={singleItem._id}
                    singleItem={singleItem}
                    ></TestItems>)
                    }
                </div>
                <div className='flex justify-center align-middle my-5 '>
                <Link className='' to='/all'>
                    <button className='btn btn-primary'>See All</button>
                </Link>
                </div>
        </div>
    );
};

export default Service;