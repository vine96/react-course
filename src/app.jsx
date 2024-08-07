import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "./Title";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App(){
  return (
    <div>
      <BrowserRouter basename="/react-course/">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sobre" element={<About/>}/>
          <Route path="/contato" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    <Title color="red" name="Vinicius" paragraph={false} />
    <Title color="orangered" name="Godofredo" paragraph={true} />
    <Title color="purple"/>
    </div>
  )
  
}

export default App