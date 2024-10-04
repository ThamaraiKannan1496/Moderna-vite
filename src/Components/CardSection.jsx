import {
  FaChalkboardTeacher,
  FaCubes,
  FaHeartbeat,
  FaSignal,
} from "react-icons/fa";

const Card = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg transition-shadow hover:shadow-inherit  hover:border-[0.25px] transition duration-300 hover:border-sky-500">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full bg-gray-100 p-4 text-3xl text-blue-600">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-500">{description}</p>
    </div>
  );
};

const CardSection = () => {
  return (
    <div className="mx-auto w-11/12 px-4 py-10">
      <div className="flex flex-col justify-between gap-6 md:flex-row">
        {/* First Card */}
        <Card
          icon={<FaHeartbeat />}
          title="Nesciunt Mete"
          description="Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequuntur."
        />
        {/* Second Card */}
        <Card
          icon={<FaSignal />}
          title="Eosle Commodi"
          description="Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem."
        />
        {/* Third Card */}
        <Card
          icon={<FaChalkboardTeacher />}
          title="Ledo Markt"
          description="Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti."
        />
        {/* Fourth Card */}
        <Card
          icon={<FaCubes />}
          title="Asperiores Commodit"
          description="Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque."
        />
      </div>
    </div>
  );
};

export default CardSection;
