import React, {useState} from 'react'
import './index.css';
import questions from './data';
import Question from './Question';


const App = () => { 
  return(
    <>
    <Question data={questions}/>
   </>
  )
}


export default App;
