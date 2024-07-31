import React from "react"; //default import
import { Component } from "react"; //named import

//this
class HomeClass extends Component{

   

    hello(){
        console.log('hello world')
    }
    render(){
        let {price,section} = this.props
        return(
            <>
            <h1>Homepage of class component</h1>
            <p>lorem ipsum</p>
            <div className="border p-4 rounded">{price}</div>
            <div>{section}</div>
            </>
        )
    }
}

export default HomeClass