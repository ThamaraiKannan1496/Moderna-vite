import Navbar from "../Components/Navbar";
import VideoSection from "../Components/VideoSection";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";
import { ClientAbout } from "../Components/ClientAbout";
import AboutClientsSlide from "../Components/AboutClientsSlide";
import { HeadingsHome } from "../Components/HeadingsHome";
import { AboutTestimonials } from "../Components/AboutTestimonials";

const About = () => {
  return (
    <>
      <Navbar></Navbar>
      <HeadingsHome
        head="About"
        para={`Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat
          quibusdam quia assumenda numquam molestias.`}
      ></HeadingsHome>
      <VideoSection bgColor="#fff"></VideoSection>
      <ClientAbout></ClientAbout>
      <AboutClientsSlide></AboutClientsSlide>
      <AboutTestimonials></AboutTestimonials>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </>
  );
};

export default About;
