import React, {useState} from 'react'
import './index.css';
import data from './Data';
import Review from './Review';

const App = () => { 
  const [index, setIndex] = useState(0);
   const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handleRandom = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * data.length);
    } while (randomIndex === index); // To avoid the same object as the current one
    setIndex(randomIndex);
  };

   const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

    return (
   <>
   <div>
      <Review data={data} handleNext={handleNext} handleRandom={handleRandom} index={index} handlePrevious={handlePrevious}/>
   </div>
   </>
  )
}


export default App;
