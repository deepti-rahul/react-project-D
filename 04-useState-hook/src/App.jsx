import React, {useState} from "react";
function App(){
  const [count, setCount] = useState(0);
  function increase(){
    setCount(count+1)
  }
  function decrease(){
    setCount(count-1)
  }
  return (
    <>
    <h1>Use of useState Hook with value = {count} </h1>
    <button onClick={increase}>click me for increament</button>
    <button onClick={decrease}>click me for increament</button>
    </>
  )
}
export default App;



// rules of hooks
// 1. must be written inside function component.
// 2. must be import in component.
// 3. must be call at top level of component.
// 4. cannot be conditional .