import { BrowserRouter as Router, Routes,BrowserRouter, Route } from "react-router-dom";
import Home from "./components/pages/Home"
import Company from "./components/pages/Company"
import Contact from "./components/pages/Contact"
import Projects from "./components/pages/Projects"
import NewProjects from "./components/pages/NewProjects"

import Container from "./components/layout/Container"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>
            <Route path= "/" element={<Home/>}/> 
            <Route path= "/Company" element={<Company/>}/> 
            <Route path= "/Contact" element={<Contact/>}/>
            <Route path= "/Projects" element={<Projects/>}/>   
            <Route path= "/NewProjects" element={<NewProjects/>}/>    
          </Routes>
        </Container>  
      <Footer />
    </BrowserRouter>
  );
}

export default App;
