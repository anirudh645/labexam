import React,{useState} from 'react';
function DigitaClock(){
let time  = new Date().toLocaleTimeString()

  const [ctime,setTime] = useState(time)
  const UpdateTime=()=>{
    time =  new Date().toLocaleTimeString()
    setTime(time)
  }
  setInterval(UpdateTime)
  return <h1>{ctime}</h1>
}
export default DigitaClock;