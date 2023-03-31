import React from 'react';
import ListTile from '../ListTile/ListTile';

const LeftSide = (props) => {
    console.log(props.toasty);
    let titleArr = []
    for (let id of props.titels) {

        // if (titleArr.includes(id.blog_title)) {
        //     props.toasty;
        //     // return ;
        // } else {
        //     titleArr.push(id.blog_title);
        // }
        titleArr.push(id.blog_title);
    }

    let listOFTitle = titleArr.map((title, index) => <ListTile title={title} key={index}></ListTile>)
    return (
        <div className=' sticky top-0 bg-cyan-600 rounded-lg p-10 ml-4 text-black'>
            <h1 className='text-2xl font-black'>Spent time on read : {props.readTime} min</h1>
            <h1 className='text-xl font-medium mt-3'>Bookmarked Blogs :{titleArr.length}</h1>
            <ul>{listOFTitle}</ul>
        </div>
    );
};

export default LeftSide;

// Prviues
// import React from 'react';

// const LeftSide = (props) => {
//     console.log(props);
//     return (
//         <div className=' sticky top-0 bg-cyan-600 rounded-lg p-10 ml-4 text-black'>
//             <h1 className='text-2xl font-black'>Spent time on read : {props.readTime} min</h1>
//             <h1 className='text-xl font-medium mt-3'>Bookmarked Blogs : 0</h1>
//         </div>
//     );
// };

// export default LeftSide;