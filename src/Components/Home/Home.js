import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import University from '../University/University';
import './Home.css'

const Home = () => {
    const[universities, setUniversity] = useState([])
    useEffect( ()=>{
     fetch('./university.json')
     .then(res=>res.json())
     .then(data=> setUniversity(data))
    },[])
    // console.log(universities)
    return (
        <div className='container'>
            <h1 className='text-success'>Total Universities: {universities.length}</h1>
           <div className="row my-4 gy-4">
             
             {
              
                   universities.map(university=>{
                       return(
                           <div className="col-md-4">
                              <University
                   key={university.domains[0]}
                   university={university}
                   ></University> 
                           </div>
                    )
                   }) 
               }
             </div>
             <Footer></Footer>
           </div>

        
    );
};

export default Home;