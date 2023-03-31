import React, { useEffect, useState } from 'react';
import SingleAuthor from '../SingleAuthor/SingleAuthor';
import LeftSide from '../LeftSide/LeftSide'
import { addToDb } from '../../assets/utilities/fakedb';

const Main = () => {
    const [authors, setAuthors] = useState([])
    const [titels,setTitels] = useState([])
    useEffect(() => {
        const authorsInfoFetchData = async () => {
            const res = await fetch('data.json');
            const data = await res.json();
            setAuthors(data);
        }
        authorsInfoFetchData()
    }, [])

    const [readTime, setReadTime] = useState(0);
    const totalReadTime = (time) => {
      const previousreadTime = JSON.parse(localStorage.getItem("readTime"));
      if (previousreadTime) {
        const sum = previousreadTime + time;
        localStorage.setItem("readTime", sum);
        setReadTime(sum);
      } else {
        localStorage.setItem("readTime", time);
        setReadTime(time);
      }
    }
  
    const blogTitle =(title)=>{
        // console.log(title.id);
        addToDb(title.id)
        let selectTitles = [...titels,title];
        setTitels(selectTitles)
    }

    return (
        <>
            <div className='container mx-auto grid lg:grid-cols-12'>
                <div className='lg:col-span-8'>
                    {
                        authors.map((author) => <SingleAuthor key={author.id} author={author} totalReadTime={totalReadTime} blogTitle={blogTitle}></SingleAuthor>)
                    }
                </div>

                <div className='lg:col-span-4'>
                    <LeftSide readTime={readTime} titels={titels}></LeftSide>
                </div>
            </div>
        </>
    );
};

export default Main;



// Prviues
// import React, { useEffect, useState } from 'react';
// import SingleAuthor from '../SingleAuthor/SingleAuthor';
// import LeftSide from '../LeftSide/LeftSide'

// const Main = (props) => {
//     const [authors, setAuthors] = useState([])
//     const totalReadTime = props.totalReadTime;
//     const handleBlogTitle = props.handleBlogTitle;
//     useEffect(() => {
//         const authorsInfoFetchData = async () => {
//             const res = await fetch('data.json');
//             const data = await res.json();
//             setAuthors(data);
//         }
//         authorsInfoFetchData()
//     }, [])
//     return (
//         <>
//             {
//                 authors.map((author) => <SingleAuthor key={author.id} author={author} totalReadTime={totalReadTime} handleBlogTitle={handleBlogTitle}></SingleAuthor>)
//             }
//         </>
//     );
// };

// export default Main;