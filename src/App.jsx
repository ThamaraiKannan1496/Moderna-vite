import { useEffect } from "react";
import "./index.css";
import Home from "./Pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (optional)
      // once: true, // Whether animation should happen only once (optional)
    });
  }, []);
  return (
    <>
      <Routes>
        <Route path="/Moderna-vite">
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
