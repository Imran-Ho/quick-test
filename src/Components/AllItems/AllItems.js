import React, { useContext, useEffect, useState } from 'react';
import { ContextAuth } from '../ContextAPI/AuthContext';
import useTitle from '../TitleHooks/useTitle';
import SingleItem from './SingleItem';
import ClipLoader from "react-spinners/ClipLoader";

const AllItems = () => {
    const [testItems, setTestItems] = useState([])
    useTitle("services")
    const [spinner, setSpinner] = useState(false);
    useEffect(() => {
        setSpinner(true)
        setTimeout(()=>{
            setSpinner(false)
        }, 2000)
    }, [])

    useEffect(()=>{
        fetch('https://assignment-11-server-imran-ho.vercel.app/tests')
        .then(res => res.json())
        .then(data => {
            setTestItems(data)
           
        })
    }, [])
    return (
            <div>
            {
                spinner ? 
                <ClipLoader color={"#D0021B"} loading={spinner} size={150} />
                :
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
                
            }
            </div>
    );
};

export default AllItems;