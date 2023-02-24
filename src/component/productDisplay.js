import React from "react";
import './product.css'

const Display=(props)=>{
    console.log(props)
    const renderProduct=props.productData.map((item)=>{
        return (<div className="card">
            <img src={item.image} alt={item.name}></img>
             <h3>{item.name} </h3>
             <p>Rs.{item.cost} {item.description}</p>
             <p>{item.uses}</p>
        </div>
        )
    })

    return <div className="main">
        {renderProduct}
    </div>
}

export default Display;