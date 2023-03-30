import React, { useEffect, useState } from 'react';
import SingleAuthor from '../SingleAuthor/SingleAuthor';

const Main = () => {
    const [authors,setAuthors] = useState([])

    useEffect(()=>{
        const authorsInfoFetchData = async()=> {
            const res = await fetch('data.json');
            const data = await res.json();
            setAuthors(data);
        }
        authorsInfoFetchData()
    },[])
    return (
        <>
            {
                authors.map((author)=> <SingleAuthor key={author.id} author={author}></SingleAuthor>)
            }
        </>
    );
};

export default Main;