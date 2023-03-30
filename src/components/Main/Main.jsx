import React, { useEffect, useState } from 'react';
import SingleAuthor from '../SingleAuthor/SingleAuthor';
import LeftSide from '../LeftSide/LeftSide'

const Main = (props) => {
    const [authors, setAuthors] = useState([])
    const totalReadTime = props.totalReadTime;
    const handleBlogTitle = props.handleBlogTitle;
    useEffect(() => {
        const authorsInfoFetchData = async () => {
            const res = await fetch('data.json');
            const data = await res.json();
            setAuthors(data);
        }
        authorsInfoFetchData()
    }, [])
    return (
        <>
            {
                authors.map((author) => <SingleAuthor key={author.id} author={author} totalReadTime={totalReadTime} handleBlogTitle={handleBlogTitle}></SingleAuthor>)
            }
        </>
    );
};

export default Main;