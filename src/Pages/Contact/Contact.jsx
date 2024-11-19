import Footer from "../../Components/Footer";
import { HeadingsHome } from "../../Components/HeadingsHome";
import NewsLetter from "../../Components/NewsLetter";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <>
      <HeadingsHome
        head="Contact"
        para={`Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat
    quibusdam quia assumenda numquam molestias.`}
      ></HeadingsHome>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15550.063233969462!2d77.6634368!3d13.00279115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1728458724140!5m2!1sen!2sin"
          className="w-full h-[500px]"
          loading="lazy"
        ></iframe>
      </div>
      <ContactForm />
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </>
  );
};

export default Contact;
