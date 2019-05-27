import React from 'react'

let defaultMood = 'happy'

const SimplerComponent = (props) => 
    <div onClick={() => props.handleClick(defaultMood)}>I am just {props.messageProp || defaultMood}</div>


export default SimplerComponent