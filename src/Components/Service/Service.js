import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TestItems from '../TestItems/TestItems';

const Service = () => {
    const [testItems, setTestItems] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/tests')
        .then(res => res.json())
        .then(data => setTestItems(data))
    }, [])
    return (
        <div>
            <h3>service: {testItems.length}</h3>
                <div className='grid lg:grid-cols-3 gap-3'>
                    {
                    testItems.map(singleItem => <TestItems
                    key={singleItem._id}
                    singleItem={singleItem}
                    ></TestItems>)
                    }
                </div>
                <div className=''>
                <Link className='' to='/all'>
                    <button className='btn btn-primary'>See All</button>
                </Link>
                </div>
        </div>
    );
};

export default Service;