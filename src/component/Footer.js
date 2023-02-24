import React from 'react'

const Footer=(props)=> {
  return (
    <div>
        <hr/>
        <h4 style={{textAlign:"center"}}>&copy; Developer funal {props.year} {props.month} </h4>
    </div>
  )
}

export default Footer