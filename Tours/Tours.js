import React from 'react'
import './index.js'
import ReadMore from './Readmore.js'

const Tours = ({data, removeElement}) => {
  return (
    <>
    <div className='tourContainer'>
        <div>
            <div><h1 style={{textAlign:"center"}}> Our Tours </h1>
            <hr></hr>
        </div>
        <div className='tourElements'>
            {data.map((tour) => {
            return(
                    <div key={data.id} className='tourElement'>
                    <img src={tour.image} alt={tour.name} style={{width: "100%", height:"350px"}} />
                    <p className='elementPrice'>${tour.price}</p>
                    <h4 style={{marginTop:"40px", textAlign:"center", lineHeight:"2rem", fontSize:"1.25rem" }}>{tour.name}</h4>
                    <ReadMore text={tour.info} />
                    <button type='submit' onClick={() => removeElement(tour.id)} className='removeButton'>not interested</button>
                    </div>
            )
        })}
        </div> 
        </div>
    </div>
    
    </>
  )
}

export default Tours