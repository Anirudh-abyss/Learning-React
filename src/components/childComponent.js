import React  from "react";

function ChildComponent(props){
    return(
         <button onClick={()=>props.GreetHandler('child')}>GREET</button>
    )
}
export default ChildComponent