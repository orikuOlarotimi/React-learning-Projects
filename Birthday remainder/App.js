import React, {useState} from 'react'
import {data} from "./data"
import List from './List'
import './index.css'


const App = () => { 
  const [details,setDetails] = useState(data)
  const removeAll = () => {
    setDetails([])
  }
    return (
   <>
   <div>
    <List details={details} />
    <button type='submit' onClick={removeAll} className='btn'> Clear All</button>
   </div>
   </>
  )
}


export default App;
