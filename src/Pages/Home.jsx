import BannerSlide from "../Components/BannerSlide";
import CardSection from "../Components/CardSection";
import FeaturesOne from "../Components/FeaturesOne";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import NewsLetter from "../Components/NewsLetter";
import VideoSection from "../Components/VideoSection";
import "../index.css";
import "../Components/DuplicateNavbar.scss";
const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <BannerSlide></BannerSlide>
      <CardSection></CardSection>
      <VideoSection bgColor="#F4F8FB"></VideoSection>
      <FeaturesOne></FeaturesOne>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </>
  );
};

export default Home;
