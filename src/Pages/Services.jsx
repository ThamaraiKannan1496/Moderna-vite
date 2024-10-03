import CardSection from "../Components/CardSection";
import Footer from "../Components/Footer";
import { HeadingsHome } from "../Components/HeadingsHome";
import Navbar from "../Components/Navbar";
import NewsLetter from "../Components/NewsLetter";

const Services = () => {
  return (
    <>
      <Navbar> </Navbar>
      <HeadingsHome
        head="Services"
        para={`Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat
    quibusdam quia assumenda numquam molestias.`}
      ></HeadingsHome>
      <CardSection></CardSection>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </>
  );
};

export default Services;
