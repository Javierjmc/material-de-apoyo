import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import NivelI from "./components/NivelI"
import NivelII from "./components/NivelII"
import NivelIII from "./components/NivelIII"
import Home from "./components/Home"


function App() {
  

  return (
    <>
      <Header />
      <Routes>
      <Route path="/" element={ <Home /> } />
        <Route path="nivel-uno" element={ <NivelI /> } />
        <Route path="nivel-dos" element={ <NivelII /> } />
        <Route path="nivel-tres" element={ <NivelIII /> } />
      </Routes> 
          
    </>
  )
}

export default App
