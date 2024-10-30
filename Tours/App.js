import React, {useEffect, useState} from 'react'
import './index.css'
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://cors-anywhere.herokuapp.com/https://course-api.com/react-tours-project'

const App = () => { 
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const removeElement = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };
  useEffect(() => {
    const fetchData = async() => {
    setLoading(true)
    try{  
    const response = await fetch(url)
    const data = await response.json()
    setTours(data)
    setLoading(false)
    }
    catch(error){
      console.error("Error fetching data:", error);
      setLoading(false);
    }
    }
    fetchData();
  },[])

  if(loading){
    return <Loading/>
  }

    return (
   <>
   <div>
    <Tours data={tours} removeElement={removeElement}/>
   </div>
   </>
  )
}


export default App;
