import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Navbar from "./Components/Navbar";
import "./index.css";
import About from "./Pages/About";
import { Blog } from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home";
import { Portfolio } from "./Pages/Portfolio/Portfolio";
import Services from "./Pages/Services";
import { Team } from "./Pages/Team/Team";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/team" element={<Team></Team>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
      <ScrollToTop
        smooth
        color="#000"
        className="p-[5px] !bg-[#68A4C4]"
      />
    </div>
  );
}

export default App;
