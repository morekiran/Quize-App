import { useRef } from "react"

export default function Start({setUserName}) {

    const inputRef = useRef();

    const handleClick =()=>{
        inputRef.current.value  &&   setUserName(inputRef.current.value);
    };
  return (
    <div className="start">
        <input type="text" placeholder="Enter Your Name" className="startinput" ref={inputRef}/>
         <button className="startbtn" onClick={handleClick}>Start</button>
    </div>
  )
}
