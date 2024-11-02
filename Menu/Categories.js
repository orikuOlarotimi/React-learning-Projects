import React from 'react'
import './index.css'

const Categories = ({ items, category }) => {
  const filteredItems = category === 'All' ? items : items.filter(item => item.category === category);

   return (
      <div className='category-container'>
         {filteredItems.length > 0 ? (
            filteredItems.map(item => (
               <div key={item.id} className='item-container'>
                <img src={item.img} alt={item.title} style={{width:"100%", height:"270px", objectFit:"cover", borderTopLeftRadius:".25rem",borderTopRightRadius:".25rem"}}/>
                  <div style={{ height:"40px", display:"flex", justifyContent:"space-between", padding:"10px"}}>
                    <h4 style={{letterSpacing:"1.5px", fontSize:"19px", fontWeight:"400"}}>{item.title}</h4>
                    <h4 style={{ color:"#fff",letterSpacing:"1px", backgroundColor:"#f59e0b", height:"22px", borderRadius:".25rem", textAlign:"center"}}>${item.price}</h4>
                  </div>
                  <p style={{paddingLeft:"10px", paddingRight:"10px", color:"#94a3b8", fontSize:"15px", letterSpacing:"1.3px"}}>{item.desc}</p>
               </div>
            ))
         ) : (
            <p>No items available for this category.</p>
         )}
      </div>
   );
}

export default Categories