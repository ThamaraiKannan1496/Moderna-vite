import Navbar from "../../Components/Navbar";
import { HeadingsHome } from "../../Components/HeadingsHome";
import NewsLetter from "../../Components/NewsLetter";
import Footer from "../../Components/Footer";
const Contact = () => {
  return (
    <>
      <Navbar></Navbar>
      <HeadingsHome
        head="Contact"
        para={`Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat
    quibusdam quia assumenda numquam molestias.`}
      ></HeadingsHome>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </>
  );
};

export default Contact;
