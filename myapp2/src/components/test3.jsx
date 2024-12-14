function Test3(){
    return(
      <div>
        <h2>This is Test3 functional component</h2>
      </div>
    )
  }
  
  function App() {
    return (
    <div>
  <h2 style={{color:"red",textAlign: "center"}}>Welcome to App.jsx</h2>
   <Test1/>
   <Test2/>
   <Test3/>
     </div>
    )
  }
  export default App