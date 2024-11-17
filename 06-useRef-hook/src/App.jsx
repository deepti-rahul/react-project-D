import { useState } from "react";
import {useRef} from "react";

function App(){
  const refElement = useRef();
  console.log(refElement);

  const [name, setName] = useState("devshri")

  function reset(){
    setName(" ")
    refElement.current.focus()
  }
  function handle_input(){
    refElement.current.style.color = "red"; 
    refElement.current.value = "deviji"; 
   }
  return(
    <>
    <h1>use of useRef hook</h1>
    <input ref={refElement} type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
    <button onClick={reset}> Reset</button>
    <button onClick={handle_input}> handle input</button>
    </>
  )
}
export default App;
