
function App() {
  const position = ['left', 'right', 'top', 'down', 'center','right']

  return (
    <>
      {position.map((item,index) => <h1 key={index}>{item} index is {index}</h1>)}
    </>
  )
}



export default App