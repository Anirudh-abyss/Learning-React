import React,{Component} from "react";

// class Welcome extends Component{
//     render(){
//         return <h2>Welcome{this.props.name}</h2>
// }
// }

class Welcome extends Component{
    render(){
    const {name}=this.props;
        return(
            <h1>Welcome {name}</h1>
        )
    }
}
export default Welcome; 