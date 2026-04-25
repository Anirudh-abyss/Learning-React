import React ,{ Component } from "react";

class Form extends Component{
    constructor(props){
        super(props)
        this.state=({
            message:''
        })
    }
    handleCLick = (event)=>{
        this.setState({
            message: event.target.value
        })
    }

    handleClickSubmit = event =>{
        alert(`Hello ${this.state.message}`);
        event.preventDefault()
    }
    render(){
        return(
            <form>
                <label>Username</label>
                <input value={this.state.message} onChange={this.handleCLick}/>
                <button onClick={this.handleClickSubmit}>Submit</button>
            </form>
        )
    }
}
export default Form;