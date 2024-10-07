import Footer from "../../Components/Footer";
import { HeadingsHome } from "../../Components/HeadingsHome";
import NewsLetter from "../../Components/NewsLetter";
import PortfolioTabs from "./PortfolioTabs";

export const Portfolio = () => {
  return (
    <>
      <HeadingsHome
        head="Portfolio"
        para={`Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat
    quibusdam quia assumenda numquam molestias.`}
      ></HeadingsHome>
      <PortfolioTabs></PortfolioTabs>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </>
  );
};
