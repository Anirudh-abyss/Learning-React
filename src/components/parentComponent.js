import React , { Component } from "react";
import ChildComponent from "./childComponent";


class ParentComponent extends Component{
    constructor(){
        super()
        this.state=({
            parentName:'parent'
        })
        this.greetParent = this.greetParent.bind(this)
    }
    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${this.childName}`)
    }

    render(){
        return(
            <div>
                <ChildComponent GreetHandler = {this.greetParent}/>
            </div>
        )
    }
}
export default ParentComponent;