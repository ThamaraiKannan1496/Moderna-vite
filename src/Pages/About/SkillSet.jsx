import ProgressBarAbout from "./ProgressBarAbout";

const skills = [
  { skill: "HTML", percentage: 100 },
  { skill: "CSS", percentage: 90 },
  { skill: "JavaScript", percentage: 75 },
  { skill: "PHP", percentage: 80 },
  { skill: "WordPress/CMS", percentage: 90 },
  { skill: "Photoshop", percentage: 55 },
];

const SkillSet = () => {
  return (
    <div className="">
      <div className="flex mx-auto pt-14 flex-col md:flex-row justify-evenly flex-wrap w-[88.5%] gap-1 py-16 mt-11 ">
        {skills.map((item, index) => (
          <ProgressBarAbout
            key={index}
            skill={item.skill}
            percentage={item.percentage}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillSet;
