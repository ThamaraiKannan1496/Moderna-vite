import { NavLink } from "react-router-dom";
export const HeadingsHome = ({ head, para }) => {
  return (
    <>
      <div className="bg-[#1E4356] py-10 text-center font-roboto text-white">
        <h1 className="font-raleway text-5xl font-semibold capitalize">
          {head}
        </h1>
        <p className="py-8 font-roboto">{para}</p>
        <span className="flex justify-center gap-5 pb-6 pt-3 font-roboto">
          <NavLink to="/">Home</NavLink>|<NavLink href="#">{head}</NavLink>
        </span>
      </div>
    </>
  );
};
