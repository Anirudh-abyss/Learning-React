import React from "react";
const Hello=()=>{

    //WITH JSX
    return(
        <div>
            <h1>Hello</h1>
        </div>
    );
    //WITHOUT JSX
    // return(React.createElement('div', null,React.createElement('h1',null,'Hello')));
}
export default Hello;