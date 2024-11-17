function App(){

  var x= 10;
  function add(){
    x= x+10;
  }
  return (
    <>
    <h1>hello value of x = {x}</h1>
    <button onClick={add}>click Me</button>
    </>
  )
}

export default App




//State in React

//1.the state is a build-in react object that is used to contain data or informantion
//about the component.
//2.A state can be modified based on user action or network changes.
//3.Everytime when the state of an object changes ,React re-render the component to 
//the browser.

