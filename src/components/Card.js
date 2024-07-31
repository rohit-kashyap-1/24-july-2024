import React from "react";
import Price from "./Price";
//destructuring 

//let obj = {title:"hello",content:"world"}
//let {title,content} = obj
export default function Card({title,content,price}){
 
    return(
        <div className='border p-3 rounded'>
          <h3>{title}</h3>
          <p>{content}</p>
        <Price price={price} />
        </div>
    )
}