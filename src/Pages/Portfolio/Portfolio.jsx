import Footer from "../../Components/Footer";
import { HeadingsHome } from "../../Components/HeadingsHome";
import Navbar from "../../Components/Navbar";
import NewsLetter from "../../Components/NewsLetter";

export const Portfolio = () => {
  return (
    <>
      <Navbar></Navbar>
      <HeadingsHome
        head="Portfolio"
        para={`Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat
    quibusdam quia assumenda numquam molestias.`}
      ></HeadingsHome>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </>
  );
};
