import { NavLink } from "react-router-dom";
import Navbar from "../Components/Navbar";
import VideoSection from "../Components/VideoSection";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";
import { ClientAbout } from "../Components/ClientAbout";

const About = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-[#1E4356] py-10 text-center font-roboto text-white">
        <h1 className="font-raleway text-5xl font-semibold capitalize">
          About
        </h1>
        <p className="py-8 font-roboto">
          Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat
          quibusdam quia assumenda numquam molestias.
        </p>
        <span className="flex justify-center gap-5 pb-6 pt-3 font-roboto">
          <NavLink to="/">Home</NavLink>|<NavLink href="#">About</NavLink>
        </span>
      </div>
      <VideoSection bgColor="#fff"></VideoSection>
      <ClientAbout></ClientAbout>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </>
  );
};

export default About;
