import React from "react"; 

// function greet(){
//     return <h1>Hello Anirudh</h1>
// }

const greet = (props) => {
    return(<div>
        <h1>Hello {props.name}</h1>
        {props.children}
    </div>)
    
}

export default greet; 

