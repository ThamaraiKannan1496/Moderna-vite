import AboutClientsSlide from "../Components/AboutClientsSlide";
import { AboutTestimonials } from "../Components/AboutTestimonials";
import { ClientAbout } from "../Components/ClientAbout";
import Footer from "../Components/Footer";
import { HeadingsHome } from "../Components/HeadingsHome";
import NewsLetter from "../Components/NewsLetter";
import { TitleWithBorder } from "../Components/TitleWithBorder";
import VideoSection from "../Components/VideoSection";
import SkillSet from "./About/SkillSet";

const About = () => {
  return (
    <>
      <HeadingsHome
        head="Abouts"
        para={`Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat
          quibusdam quia assumenda numquam molestias.`}
      ></HeadingsHome>
      <VideoSection bgColor="#fff"></VideoSection>
      <ClientAbout></ClientAbout>
      <AboutClientsSlide></AboutClientsSlide>
      <TitleWithBorder
        head="Our Skills"
        para={`Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit`}
      ></TitleWithBorder>
      <SkillSet></SkillSet>
      <TitleWithBorder
        head="Testimonials"
        para={`Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit`}
      ></TitleWithBorder>
      <AboutTestimonials></AboutTestimonials>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </>
  );
};

export default About;
