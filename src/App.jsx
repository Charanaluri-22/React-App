/* eslint-disable no-unused-vars */
// import { useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
const App = ()=>{
  // const [count,setCount]=useState(0);
  // const[dept,setDept]=useState("it");
  return (
    <>
    {/* <div>
      count is {count}
      department is {dept}
    </div>
    <button onClick={()=>setCount(count+1)}>Clickme</button><br></br>
    <button onClick={()=>setDept("cse")}>Change department</button> */}
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>

  )
}
export default App;