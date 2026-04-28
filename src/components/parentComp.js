
import React,{ Component } from "react";
import MemoComp from "./Memo";
class Parent extends Component{
    constructor(props){
        super(props)
        this.state=({
            name:'Anirudh'
        })
    }
    componentDidUpdate(){
        setInterval(()=>{
            this.setState({
                name:'Anirudh'
            })
        },2000)
    }
    render(){
        console.log('----Parent Component------')
        return(
            <div>
                ParentComponent
                {/* <renderComp name={this.state.name}/>
                <pureComp name={this.state.name}/> */}
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}
export default Parent;