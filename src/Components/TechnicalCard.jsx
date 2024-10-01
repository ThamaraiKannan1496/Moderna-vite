import { GiSpiderWeb } from "react-icons/gi";
import { ImAndroid } from "react-icons/im";
import { FaApple } from "react-icons/fa";
import { MdOutlineWifiTethering } from "react-icons/md";
import "./TechnicalCard.scss";
function TechnicalCard() {
  return (
    <div className="bg-[#EBEBEB]">
      <div className="mx-auto flex w-5/6 flex-col items-center justify-between gap-x-14 py-16 text-center font-roboto md:flex-row">
        <div className="cardTech">
          <span className="cardTechIcon">
            <GiSpiderWeb />
          </span>
          <h3 className="cardTechHead">Web Development</h3>
          <p className="cardTechPara">
            Web development is the process of creating websites or web
            applications. It involves coding, design, and ensuring usability
            across devices, enhancing user experience.
          </p>
        </div>
        <div className="cardTech">
          <span className="cardTechIcon">
            <ImAndroid />
          </span>
          <h3 className="cardTechHead">Android Development</h3>
          <p className="cardTechPara">
            Android development is the process of creating mobile apps for
            Android devices using programming languages like Java or Kotlin, and
            tools like Android Studio.
          </p>
        </div>
        <div className="cardTech">
          <span className="cardTechIcon">
            <FaApple />
          </span>
          <h3 className="cardTechHead">iOS Development</h3>
          <p className="cardTechPara">
            iOS development involves building apps for Apple devices. Swift is
            the primary language, and Xcode is the main IDE.Seamless integration
            with other Apple devices, like Handoff, and Continuity Camera.
          </p>
        </div>
        <div className="cardTech">
          <span className="cardTechIcon">
            <MdOutlineWifiTethering />
          </span>
          <h3 className="cardTechHead">IOT Development</h3>
          <p className="cardTechPara">
            IoT links devices to the web, enabling automation, data collection,
            and smart decision-making.Machines in factories for predictive
            maintenance, equipment monitoring, and automation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TechnicalCard;
