import React, { useEffect, useState } from 'react';
import './index.css';
import text from './data';

const App = () => { 
  const [paragraph, setParagraph] = useState(1)
  const [outputText, setOutputText] = useState([]);
  const handleSubmit = (e) => {
  e.preventDefault()
  const numParagraphs = Math.min(Math.max(paragraph, 1), 8);
  setOutputText(text.slice(0, numParagraphs));
  }
 

  
  return (
    <>
   <section className='section'>
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h4 >Tired of boring lorem ipsum?</h4>
        <div className='form-container'>
          <label htmlFor="paragraph">Paragraphs:</label>
          <input
            type="number"
            id="paragraph"
            name="paragraph"
            min="1"
            max="8"
            value={paragraph}
            onChange={(e) => setParagraph(Number(e.target.value))}
          />
          <button type="submit" className='btn'>Generate</button>
        </div>
      </form>
      {outputText.map((text, index) => {
        return <p key={index}>{text}</p>
      })}
    </div>
   </section>
    </>
  );
};

export default App;
