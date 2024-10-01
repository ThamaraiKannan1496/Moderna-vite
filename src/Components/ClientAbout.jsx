import CountUp from "react-countup";

export const ClientAbout = () => {
  return (
    <div className="bg-[#F4F8FB]">
      <div className="flex w-[88.5%] mx-auto justify-evenly flex-col md:flex-row gap-10  py-10">
        <div className="clients text-center p-10">
          <h1 className="text-5xl font-bold text-[#68A4C4]">
            <CountUp end={232}></CountUp>
          </h1>
          <p className="pt-5 text-lg font-semibold text-[#959697]">Clients</p>
        </div>
        <div className="projects text-center p-10">
          <h1 className="text-5xl font-bold text-[#68A4C4]">
            <CountUp end={521}></CountUp>
          </h1>
          <p className="pt-5 text-lg font-semibold text-[#959697]">Projects</p>
        </div>
        <div className="hos text-center p-10">
          <h1 className="text-5xl font-bold text-[#68A4C4]">
            <CountUp end={1453}></CountUp>
          </h1>
          <p className="pt-5 text-lg font-semibold text-[#959697]">
            Hours of Support
          </p>
        </div>
        <div className="workers text-center p-10">
          <h1 className="text-5xl font-bold text-[#68A4C4]">
            <CountUp end={32}></CountUp>
          </h1>
          <p className="pt-5 text-lg font-semibold text-[#959697]">Workers</p>
        </div>
      </div>
    </div>
  );
};
