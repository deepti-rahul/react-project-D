import React from "react";
import { createContext } from "react";
import ChildA from "./ChildA";
const data = createContext();
const data1 = createContext();
function App() {
  const name = "Devshri";
  const gender = "female";
  return (
    <>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <ChildA />
        </data1.Provider>
      </data.Provider>
    </>
  )
}
export default App;
export {data, data1};




// what is use of context api?
// create, provider, consumer
//