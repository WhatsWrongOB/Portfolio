import React from "react";
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from "./Components/Skills/Skills";
import Projects from './Components/Projects/Projects'
import ProjectPage from './Components/ProjectPage/ProjectPage'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Error from './Components/Error/Error'
import data from './Data/data.json'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
  
      <Router>

        <Routes>

          <Route exact path="/" element={
            <>
              <Navbar />
              <Home />
              <About />
              <Skills />
              <Projects portfolio={data.portfolio} />
              <Contact />
              <Footer />
            </>

          } />

          <Route exact path="/projectspage" element={
            <>
              <ProjectPage projects={data.project} />
              <Footer />
            </>

          } />

          <Route exact path="*" element={<Error />} />

        </Routes>

      </Router>

  );
}
export default App;
