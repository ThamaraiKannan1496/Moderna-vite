import BorderLine from "./BorderLine";
export const TitleWithBorder = ({ head, para }) => {
  return (
    <>
      <h2 className="pb-2 pt-12 text-center font-raleway text-3xl font-bold capitalize text-[#1E4356]">
        {head}
      </h2>
      <BorderLine></BorderLine>
      <p className="pt-2 text-center font-roboto">
        {para}
        {/* */}
      </p>
    </>
  );
};
