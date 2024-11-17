import {useState, useEffect, React} from "react";

function App(){
  const [count, setCount] = useState(0);
  const [data, setData] = useState("ram");

  useEffect(()=>{
    console.log("component is mounted")
  },[count])
  function updatecount(){
    setCount(count+1);  
  }
  function updatedata(){
    setData("seeta");
  }
  return(
    <>
    <h1>use useEffect hook for value {count} {data}</h1>
    <button onClick={updatecount}>click me</button>
    <button onClick={updatedata}> update value</button>
    </>
  )
}
export default App;


// use - function component me koe bhi side effect task perform krna hota hai ,
// side effect task - ese task jisme timer function (settimeout,setinterval) ka use krna hota h, 
// ya dom ko direactly update krna hota h, esa koe task perform krna hota hai jisme data ko fetch 
// krte hai .