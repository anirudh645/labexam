import React,{useState,useEffect} from 'react';
function FChangeCounter(){
    const[count,changeCount]=useState(0);
    const[flag,changeFlag]=useState(true);
    useEffect(()=>{changeCount(count+1)},[flag]);
    return(
        <div>
            <button onClick={()=>{changeFlag(!flag)}}>{flag.toString()}</button>
            <h1>count-{count}</h1>
        </div>
    );
}
export default FChangeCounter;