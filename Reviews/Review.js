import React from 'react'
import './index.css';

const Review = ({data, handleNext, handleRandom,index, handlePrevious}) => {
  return (
    <>
    <div className='reviewContainer'>
        <div className='reviewElements'>
            <div className='img-div'> <img src={data[index].image} alt={data[index].name} style={{width:"180px", height:"100%",objectFit: "cover", borderRadius:"48%"}}/> </div>
    <h1 style={{fontSize:"33px", fontWeight:"50"}}>{data[index].name}</h1>
    <h3 style={{fontSize:"24px", fontWeight:"500", color:"#645cff", marginTop:"-26px"}}>{data[index].job}</h3>
    <p style={{marginTop:"13px",fontSize:"20px", fontWeight:"50", color:"#475569"}} className=''>{data[index].text}</p>
    <div className='btn-div'>
        <button onClick={handlePrevious} style={{marginRight:"20px", fontSize:"32px", color:"#3c3799", fontWeight:"700", border:"none", backgroundColor:"#fff", cursor:"pointer"}}>&lt;</button>
        <button onClick={handleNext} style={{marginLeft:"20px",fontSize:"32px", color:"#3c3799", fontWeight:"700", border:"none", backgroundColor:"#fff", cursor:"pointer"}}>&gt;</button>
    </div>
    <button onClick={handleRandom} className='btn-sur'> Surprise me</button>
        </div>
    </div>
    </>
    
  )
}

export default Review