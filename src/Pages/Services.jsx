import CardSection from "../Components/CardSection";
import Footer from "../Components/Footer";
import { HeadingsHome } from "../Components/HeadingsHome";
import NewsLetter from "../Components/NewsLetter";
import { PortfolioCards } from "./ServicePage/PortfolioCards";

const Services = () => {
  return (
    <>
      <HeadingsHome
        head="Services"
        para={`Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat
          quibusdam quia assumenda numquam molestias.`}
      ></HeadingsHome>
      <CardSection></CardSection>
      <PortfolioCards></PortfolioCards>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </>
  );
};

export default Services;
