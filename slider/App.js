import React, { useEffect, useState } from 'react';
import './index.css';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

const App = () => { 
 
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [index]);
   const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % data.length);
  };
   const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <>
    <div className='reviewContainer'>
        <div className='reviewElements'>
            <div className='img-div'> <img src={data[index].image} alt={data[index].name} style={{width:"180px", height:"100%",objectFit: "cover", borderRadius:"48%"}}/> </div>
    <h1 style={{fontSize:"33px", fontWeight:"50", marginTop:"5px"}}>{data[index].name}</h1>
    <h3 style={{fontSize:"24px", fontWeight:"500", color:"#645cff", marginTop:"-20px", marginBottom:"2px"}}>{data[index].title}</h3>
    <div style={{display:"flex", justifyContent:"center", height:"105px", alignItems:"center"}}><p style={{fontSize:"20px", fontWeight:"50", color:"#475569", width:"85%"}} className=''>{data[index].quote}</p></div>
    <div className='btn-div'>
        <button onClick={handlePrevious} style={{marginRight:"20px", fontSize:"32px", color:"#3c3799", fontWeight:"700", border:"none", cursor:"pointer", backgroundColor:"#f1f5f9"}}><FiChevronLeft/></button>
        <button onClick={handleNext} style={{marginLeft:"20px",fontSize:"32px", color:"#3c3799", fontWeight:"700", border:"none", cursor:"pointer", backgroundColor:"#f1f5f9"}}><FiChevronRight/></button>
    </div>
        </div>
    </div>
    </>
  );
};

export default App;
