import React, {useState} from 'react'
import './index.css';
import menu from './data'
import Categories from './Categories';

const App = () => { 
   const [value, setValue] = useState('All')
   const handleChange = (str) => {
    setValue(str)
   }
    return(
    <>
    <section className='container'>
      <div className='items-container'>
        <div style={{ marginBottom:"20px"}}>
          <h1 style={{textAlign:"center"}}> Our Menu</h1>
          <hr style={{marginTop:"-6px"}}></hr>
      </div>
      <div style={{display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"50px"}}>
        <div style={{display:"flex", width:"27%", height:"30px", justifyContent:"space-between"}}>
      <button type='button' onClick={() =>handleChange('All')} style={{width:"40px"}} className='btn'>All</button>
      <button type='button' onClick={() =>handleChange('breakfast')} style={{width:"90px"}} className='btn'>Breakfast</button>
      <button type='button' onClick={() =>handleChange('lunch')} className='btn'>Lunch</button>
      <button type='button' onClick={() =>handleChange('shakes')} className='btn'>Shakes</button>
        </div>
      </div>
    <Categories items={menu} category={value} />
      </div>
    </section>
   </>
  )
}


export default App;
