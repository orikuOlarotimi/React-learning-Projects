import React, {useState} from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({data}) => {
    const [openItem, setOpenItem] = useState(null);
    const toggleInfo = (id) => {
    setOpenItem(openItem === id ? null : id);
  };
  return (
    <>
    <section className='container'>
        <div className='items-big-div'>
            <h1 style={{textAlign:"center", color:"#334155"}}>Questions</h1>
        {data.map((item) =>{
        return <div key={item.id} className='item-big-div'>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <h4 style={{paddingLeft:"20px", color:"#334155"}}>{item.title}</h4>
                <button onClick={() => toggleInfo(item.id)} className='btn'>
                {openItem === item.id ? <AiOutlineMinus/> : <AiOutlinePlus />}
                </button>
            </div>
          {openItem === item.id && <p style={{padding:"20px", color:"#64748b",lineHeight:"2"}}>{item.info}</p>}
        </div>
    })}
    </div>
    </section>
    
    </>
  )
}

export default Question