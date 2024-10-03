import { useEffect } from "react";
import "./index.css";
import Home from "./Pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Services from "./Pages/Services";
import { Portfolio } from "./Pages/Portfolio/Portfolio";
import { Blog } from "./Pages/Blog/Blog";
import { Team } from "./Pages/Team/Team";
import Contact from "./Pages/Contact/Contact";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/team" element={<Team></Team>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </>
  );
}

export default App;
