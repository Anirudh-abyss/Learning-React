import React ,{ Component } from "react"


class ConditionalRending extends Component{
    constructor(props){
        super(props)
        this.state=({
            isLoggedIn:true
        })
    }

// METHOD 1 (IF-ELSE STATEMENT)
//     render(){
//         if(this.state.isLoggedIn){
//             return(<div>Hello Anirudh</div>)
//         }
//         else{
//             return(<div>Hello Guest</div>)
//         }
//     }   
// }

// METHOD 2 (ELEMENT VARIABLE)
// render(){
//     let message;

//     if(this.state.isLoggedIn){
//         message = <div>Hello Anirudh</div>
//     }    
//     else{
//         message = <div>Hello Guest</div>
//     }

//     return(
//         <div>{message}</div>
//     )
// }

//METHOD 3
// render(){
//     return(
//         this.state.isLoggedIn ?
//         (<div>Hello Anirudh</div>):
//         (<div>Hello Guest</div>)
//     )
// }

// METHOD 4
render(){
    return(this.state.isLoggedIn && <div>Hello Anirudh</div>)
}

}
export default ConditionalRending;