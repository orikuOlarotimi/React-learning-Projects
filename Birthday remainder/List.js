import React from 'react'
import './index.css'
import removeAll from './App'

const List = ({ details }) => {
  return (
    <div className='listContainer'>
      <h3>{details.length > 0 ? details.length : 0} Birthdays Today</h3>
      {details.map((detail, index) => (
        <div key={index} className='listElements'>
          <img src={detail.image} alt={detail.name}  className="small-img"/>
            <div className='secondElement'>
            <h2>{detail.name}</h2>
            <h4 style={{marginTop: "-20px"}}>{detail.age}</h4>
            </div>
        </div>
      ))}
      
    </div>
  );
};

export default List