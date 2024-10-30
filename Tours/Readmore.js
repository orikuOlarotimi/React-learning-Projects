import React, { useState } from 'react';

const ReadMore = ({ text, maxLength = 180 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
 
  return (
    <div style={{width:"92%"}}>
      <p style={{lineHeight:"1.5rem", color:"#64748b", marginBottom:"20px"}}>
        {isExpanded ? text : `${text.slice(0, maxLength)}...`}<span> <button onClick={toggleReadMore} style={{border:"none", color:"#10b981"}}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </button></span>
      </p>
      
    </div>
  );
};

export default ReadMore;
