import React, { useEffect, useState } from 'react';

const Main = () => {
    const [autors,setAutors] = useState([])

    useEffect(()=>{
        const autorsInfoFetchData = async()=> {
            const res = await fetch('data.json');
            const data = await res.json();
            setAutors(data);
        }
        autorsInfoFetchData()
    },[])
    return (
        <>
            {
                autors.map((autor)=> console.log(autor))
            }
        </>
    );
};

export default Main;