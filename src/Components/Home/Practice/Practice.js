import React from 'react';

const Practice = () => {
    return (
        <div className='my-5'>
            <h4 className='text-5xl text-center my-5'>Prepare to do your best!</h4>
                <div className="flex w-full">
                    <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
                        <h2 className='text-2xl'>Take the free practice test</h2>
                        <h2 className='text-2xl'>Download the official guide</h2>
                    </div>
                        <div className="divider divider-horizontal">OR</div>
                    <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
                        <h2 className='text-2xl'>Check out each question type</h2>
                        <h2 className='text-2xl'>feel free to contact with us</h2>
                    </div>
                </div>
        </div>
    );
};

export default Practice;