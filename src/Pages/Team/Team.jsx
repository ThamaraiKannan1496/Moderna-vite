import Footer from "../../Components/Footer";
import { HeadingsHome } from "../../Components/HeadingsHome";
import NewsLetter from "../../Components/NewsLetter";
import { TeamCard } from "./TeamCard";
export const Team = () => {
  return (
    <>
      <HeadingsHome
        head="Team"
        para={`Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat
    quibusdam quia assumenda numquam molestias.`}
      ></HeadingsHome>
      <TeamCard></TeamCard>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </>
  );
};
