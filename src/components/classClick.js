import { Component } from "react";

class ClassClick extends Component{
    ClickHandler(){
            console.log('clicked again');
    }
    render(){
        return(
            <div><button onClick={this.ClickHandler}>CLICK ME</button></div>
        )
    }
}
export default ClassClick;