import React, { useContext, useEffect, useState } from 'react';
import { ContextAuth } from '../ContextAPI/AuthContext';
import useTitle from '../TitleHooks/useTitle';
import SingleItem from './SingleItem';

const AllItems = () => {
    const {loading} = useContext(ContextAuth)
    const [testItems, setTestItems] = useState([])
    useTitle("services")
    

    useEffect(()=>{
        fetch('http://localhost:5000/tests')
        .then(res => res.json())
        .then(data => {
            setTestItems(data)
            if(loading){
                return <progress className="progress w-56"></progress>
            }
        })
    }, [])
    return (
        <div>
            <h3 className='text-3xl text-center text-base-600 my-5'>All Kind of English online Tests are here.</h3>
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