import axios from 'axios'
import React,{useState,useEffect} from "react"

function Axios()
{
    const [items,setItems] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").
        then((res)=>{setItems(res.data)})
    })
    return(<div>
        {items.map((item)=>(<p key={item.id}>
            User_Name: { item.username }, 
            Full_Name: { item.name }, 
            User_Email: { item.email } 
        </p>))}
    </div>)
}
export default Axios;