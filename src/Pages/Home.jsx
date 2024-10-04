import BannerSlide from "../Components/BannerSlide";
import CardSection from "../Components/CardSection";
import "../Components/DuplicateNavbar.scss";
import FeaturesOne from "../Components/FeaturesOne";
import Footer from "../Components/Footer";
import NewsLetter from "../Components/NewsLetter";
import { TitleWithBorder } from "../Components/TitleWithBorder";
import VideoSection from "../Components/VideoSection";
import "../index.css";

const Home = () => {
  return (
    <>
      <BannerSlide></BannerSlide>
      <CardSection></CardSection>
      <VideoSection bgColor="#F4F8FB"></VideoSection>
      <TitleWithBorder
        head="Features"
        para={`Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit`}
      ></TitleWithBorder>
      <FeaturesOne head="Features"></FeaturesOne>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </>
  );
};

export default Home;
