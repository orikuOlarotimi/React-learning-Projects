import React from 'react'

const Menu = ({data}) => {
  return (
    <>
    <div>
        {data.map((item) => {
            return (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    
                    <img src={item.img} alt={item.title}/>
                    <p>{item.desc}</p>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default Menu