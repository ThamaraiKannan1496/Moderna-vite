import Footer from "../../Components/Footer";
import { HeadingsHome } from "../../Components/HeadingsHome";
import NewsLetter from "../../Components/NewsLetter";
import { BlogCards } from "./BlogCards";
export const Blog = () => {
  return (
    <>
      <HeadingsHome
        head="Blog"
        para={`Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat
          quibusdam quia assumenda numquam molestias.`}
      ></HeadingsHome>
      <BlogCards></BlogCards>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </>
  );
};
