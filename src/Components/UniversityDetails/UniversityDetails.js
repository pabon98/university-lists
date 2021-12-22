import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UniversityDetails = () => {
    const{detailsId} = useParams()
    const[data, setData] = useState([])
    useEffect( ()=>{
     fetch('/university.json')
     .then(res=> res.json())
     .then(data=>setData(data))
    },[])
    // console.log(data);
    const ExactCountry = data.filter(dt=> dt.domains == detailsId)
    // console.log(ExactCountry);
    return (
        <div>
            <h1>University Details</h1>
            <h2 className='text-danger'>This is {ExactCountry[0]?.name}</h2>
            <h4 className='text-success'>Location: {ExactCountry[0]?.country}</h4>
            <h5 className='text-primary'>Site Link: {ExactCountry[0]?.web_pages}</h5>
            <h6 className='text-dark'>Domain name: {ExactCountry[0]?.domains}</h6>
        </div>
    );
};

export default UniversityDetails;