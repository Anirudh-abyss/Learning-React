import React, { Component } from "react";

class OnHoverTwo extends Component{
    render(){
        const {count,incrementCount} = this.state
        return(
            <h1 onMouseOver={incrementCount}>Hover {count} times</h1>
        )
    }
}
export default OnHoverTwo;