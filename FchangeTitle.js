import { useEffect } from "react";
import React,{useState} from "react";
function FchangeTitle(){
    const [count,setCount]=useState(0);
    useEffect(()=>{document.title=`Counter is updated to ${count}`},[count]); 
    return(
        <div>
            <button onClick={()=>{setCount(count+1)}}>Count = {count}</button>
            
        </div>
    );
}
export default FchangeTitle;