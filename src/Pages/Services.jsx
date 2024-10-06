import CardSection from "../Components/CardSection";
import Footer from "../Components/Footer";
import { HeadingsHome } from "../Components/HeadingsHome";
import NewsLetter from "../Components/NewsLetter";
import { TitleWithBorder } from "../Components/TitleWithBorder";
import { PortfolioCards } from "./ServicePage/PortfolioCards";
import PricingService from "./ServicePage/PricingService";

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
      <TitleWithBorder
        head="Pricing"
        para={
          "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        }
      ></TitleWithBorder>
      <PricingService></PricingService>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </>
  );
};

export default Services;
