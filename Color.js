import React,{Component} from "react";
class Color extends Component{
    constructor(props){
        super(props);
        this.state={color : "Blue"};
    }
    render(){
        return(
          <div>
            <h2 onMouseOver={this.handleColor} onMouseOut={this.handleColor11} style={this.state}>Hello</h2>
          </div>  
        );
    }
    handleColor=()=>{
        this.setState({color : "Red"});
    };
    handleColor11=()=>{
        this.setState({color : "Green"});
    };
}
export default Color;