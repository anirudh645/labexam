import React,{Component} from 'react';
class Count extends Component{
    constructor(Props){
        super(Props);
        this.state={count:0,style:"color:red"};
    }
    render(){
        return(<div>
            <button onClick={this.handleCount}>count - {this.state.count}</button>
        </div>)
    }
    handleCount=()=>{this.setState({count:this.state.count+1})};
}
export default Count;


//onClick={()=>{this.setState({count:this.state.count+1})}}