import React, { useEffect, useState } from 'react';
import './index.css';

const App = () => {
 const [item, setItem] = useState(''); // Current input value
  const [items, setItems] = useState([]); // List of items
  const [flashMessage, setFlashMessage] = useState(''); // Flash message for deletion

  // Handle form submission to add items
  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.trim()) {
      setItems([...items, item]); // Add the new item to the list
      setItem(''); // Clear the input field
    }
  };

  // Handle deleting an item
  const handleDelete = (index) => {
    const deletedItem = items[index];
    const updatedItems = items.filter((_, i) => i !== index); // Remove the item at the given index
    setItems(updatedItems);

    // Show flash message
    setFlashMessage(`"${deletedItem}" has been deleted!`);
    setTimeout(() => setFlashMessage(''), 2000); // Clear flash message after 2 seconds
  };

  return (
    <>
      <div className='body-container'>
        <section className='container'>
        <form onSubmit={handleSubmit} className='form-container'>
          <h2 style={{textAlign:"center"}}>Grocery Bud</h2>
          <div style={{display:"flex", width:"100%, fixed",height:"34px",paddingLeft:"25px", paddingRight:"25px" }}>
            <input
            type="text"
            placeholder="Add an item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            style={{width:"70%", border:"1px solid #e2e8f0", borderTopLeftRadius:".25rem", borderBottomLeftRadius:".25rem"}}
          />
          <button type="submit" style={{width:"30%", color:"#fff", background:"#06b6d4", cursor:"pointer", border:"none", borderTopRightRadius:".25em", borderBottomRightRadius:".25rem"}}>Add Item</button>
          </div>
        </form>

        {/* Flash Message */}
        {flashMessage && <p className="flash-message" style={{marginLeft:"25px"}}>{flashMessage}</p>}

        <div>
          {items.length === 0 ? (
            <p style={{marginLeft:"25px"}}>No items added yet.</p>
          ) : (
            <ul style={{paddingLeft:"25px", paddingRight:"25px"}}>
              {items.map((item, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'center', width:"100%", justifyContent:"space-between",marginBottom:"8px"}}>
                  {item}
                  <button
                    onClick={() => handleDelete(index)}
                    style={{
                      marginLeft: '10px',
                      background: '#222',
                      color: 'white',
                      border: 'none',
                      padding: '5px 10px',
                      cursor: 'pointer',
                      borderRadius: '4px',
                      cursor:"pointer",

                    }}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      </div>
    </>
  );

};

export default App;
