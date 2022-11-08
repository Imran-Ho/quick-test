import React, { useEffect, useState } from 'react';
import SingleItem from './SingleItem';

const AllItems = () => {
    const [testItems, setTestItems] = useState([])
    

    useEffect(()=>{
        fetch('http://localhost:5000/tests')
        .then(res => res.json())
        .then(data => setTestItems(data))
    }, [])
    return (
        <div>
            <h3>All Tests are here.</h3>
            <div className='grid lg:grid-cols-3'>
                {
                    testItems.map(single => <SingleItem
                    key={single._id}
                    single={single}
                    ></SingleItem>)
                }
            </div>
        </div>
    );
};

export default AllItems;