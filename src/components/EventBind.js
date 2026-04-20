import { Component } from "react";

class EventBind extends Component{
    constructor(props){
        super(props)
        this.state=({
            message:'Hello'
        })
    //     this.ClickHandler= this.ClickHandler.bind(this);
     }
    // ClickHandler(){
    //     this.setState({
    //         message:'GOODBYE'
    //     })
    // }

    ClickHandler=()=>{
        this.setState({
            message:'GOODBYE'
        })
    }
    


    render(){
        return(
            <div>
            <h1>{this.state.message}</h1>
                {/* <button onClick={this.ClickHandler.bind(this)}>CLICK ME</button> */}   
                {/* <button onClick={()=>this.ClickHandler()}>CLICK ME</button> */}
                {/* <button onClick={this.ClickHandler}>CLICK ME</button> */}
                <button onClick={this.ClickHandler}>CLICK ME</button>
            </div>
        )
    }
}
export default EventBind;