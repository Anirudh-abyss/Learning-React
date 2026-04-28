import React , { PureComponent } from "react";

class Pure extends PureComponent{
    render(){
        return(
            <div>
                PureComponent{this.props.name}
            </div>
        )
    }
}
export default Pure;
