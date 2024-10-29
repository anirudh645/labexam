import React,{Component} from 'react'

class Fetch extends Component
{
constructor(props)
{
    super(props)
    this.state={items:[]}
}
componentDidMount()
{
    fetch("https://jsonplaceholder.typicode.com/users").
    then((res)=>res.json()).
    then((x)=>{this.setState({items:x})})
}
render()
{
    const {items} = this.state;
    return(<div>
        <h5>items fetched from external source</h5>
        {items.map((item)=>(<ol key={item.id}>
                    User_Name: { item.username }, 
                    Full_Name: { item.name }, 
                    User_Email: { item.email } 
                 </ol>))}
          </div>)
}
}
export default Fetch;