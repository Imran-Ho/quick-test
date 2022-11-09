import React from 'react';

const Review = ({review}) => {
    // console.log(review)
    const {id, photo, name, text, service} = review;
    return (
        <div className=''>
           <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <tbody>
                    <tr>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={photo} alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">{name}</div>
                            <div className="font-bold">{service}</div>
                            <div className="text-sm opacity-50">Service ID:{id}</div>
                            <div className="text-sm opacity-50">{text}</div>
                            </div>
                        </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>

        </div>
    );
};

export default Review;