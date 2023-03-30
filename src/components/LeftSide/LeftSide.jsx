import React from 'react';

const LeftSide = (props) => {

    return (
        <div className=' sticky top-0 bg-cyan-600 rounded-lg p-10 ml-4 text-black'>
            <h1 className='text-2xl font-black'>Spent time on read : {props.readTime} min</h1>
            <h1 className='text-xl font-medium mt-3'>Bookmarked Blogs : 0</h1>
        </div>
    );
};

export default LeftSide;