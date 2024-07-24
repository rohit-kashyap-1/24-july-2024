import React from "react";
import './Li.css'
function Li(props){
    return(
        <li className="list-item">
            <div><strong>{props.title}</strong></div>
            <div>{props.content}</div>
        </li>
    )
}

export default Li