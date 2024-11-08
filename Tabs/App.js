import React, { useEffect, useState } from 'react';
import './index.css';
import { FaAngleDoubleRight } from 'react-icons/fa';

const url = 'data.json';

const App = () => { 
  const [value, setValue] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null); // State to store selected person's details
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setValue(data);
        if (data.length > 0) {
          setSelectedPerson(data[0]);
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, []);

  const handleClick = (person) => {
    setSelectedPerson(person);
    setIsActive(!isActive);
    };

  return (
    <section className="container">
        <div className="button-container">
        {value.map((person) => (
          <div key={person.id}>
            <button 
              type="button" 
              onClick={() => handleClick(person)} className={`btn ${isActive ? 'active' : ''}`}>
              {person.company}
            </button>
          </div>
        ))}
      </div>

      <div className="details-container">
        {selectedPerson ? (
          <div className='details'>
            <h3 style={{fontSize:"32px", margin:"0", fontWeight:"50", paddingTop:"17px"}} >{selectedPerson.title}</h3>
            <h4 style={{marginTop:"15px", fontSize:"18px", fontWeight:"50",marginBottom:"13px", color:"#334155", background:"#cbd5e1", width:"100px", textAlign:"center", height:"25px",paddingTop:"5px", borderRadius:".25rem"}}>{selectedPerson.company}</h4>
            <p style={{marginTop:"10px", letterSpacing:"1px", marginBottom:"20px", color:"#64748b"}}>{selectedPerson.dates}</p>
            <ul style={{listStyleType:"none"}}>
              {selectedPerson.duties.map((duty, index) => (
                <li key={index} style={{marginTop:"27px", display:"flex"}}>
                  <FaAngleDoubleRight className="icon" style={{marginRight:"20px", paddingTop:"20px", color:"#14b8a6"}}/>  <span style={{lineHeight:"25px", color:"#334155"}}>{duty}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Loading details...</p>
        )}
      </div>
    </section>
  );
};

export default App;
