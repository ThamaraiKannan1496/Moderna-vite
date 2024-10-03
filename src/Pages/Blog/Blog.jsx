import Navbar from "../../Components/Navbar";
import { HeadingsHome } from "../../Components/HeadingsHome";
import NewsLetter from "../../Components/NewsLetter";
import Footer from "../../Components/Footer";
export const Blog = () => {
  return (
    <>
      <Navbar></Navbar>
      <HeadingsHome
        head="Blog"
        para={`Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat
    quibusdam quia assumenda numquam molestias.`}
      ></HeadingsHome>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </>
  );
};
