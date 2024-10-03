import { useSpring, animated } from "react-spring";

const ProgressBarAbout = ({ skill, percentage }) => {
  // Animating the width based on the percentage
  const props = useSpring({
    width: `${percentage}%`,
    from: { width: "0%" },
    config: { tension: 10, friction: 50 },
  });

  return (
    <div className="mb-4 md:w-5/12 pb-5 ">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{skill}</span>
        <span className="text-sm font-medium text-gray-700">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 h-3 rounded">
        <animated.div className="h-full bg-[#68A4C4] rounded" style={props} />
      </div>
    </div>
  );
};

export default ProgressBarAbout;
