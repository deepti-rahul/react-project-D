import logo from './logo.svg';
import './App.css';
var devsri = "my name is devshri rathoree";
var a =10;
function App() {
  return (
    <>
    <div>hello</div>
    <h1>tata</h1>
    <p>namme ={devshri}</p>
    <p>{(a)> 0 ? "true" : "false"}</p> 
    </>
  );
}

export default App;


//rule1: html code must wrap into one top level element.
// rule2 : js expression in jsx must be wrapped in {}
//rule 3 : no if else condition inside jsx but ternary operator is okay
//rule 4 : for styling , attribute  class = className 


// 1. a div for print "hello guys"
// 2. create fragment to add multiple elements
// 3. add js code {}
// 4. add condition in jsx by using ternary operator inside {}

