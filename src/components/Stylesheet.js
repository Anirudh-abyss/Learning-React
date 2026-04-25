import React  from "react";
import './style.css'

function Stylesheet(props){
    let className = props.primary ? 'primary' : '';
    return(
        // <h1 className={className}>Stylesheet</h1>
        <h1 className = {`${className} , font-xl`}>Stylesheet</h1>
    );
}
export default Stylesheet;