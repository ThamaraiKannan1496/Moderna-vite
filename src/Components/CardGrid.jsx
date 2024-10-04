import React from "react";
import {
  FaChalkboardTeacher,
  FaCubes,
  FaHeartbeat,
  FaSignal,
} from "react-icons/fa";

const Card = ({ icon, title, description, borderColor }) => {
  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-md hover:border ${borderColor} hover:border-2 transition-all`}
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full bg-gray-100 p-4 text-3xl text-blue-600">
          {icon}
        </div>
      </div>
      <h3 className="mb-2 text-center text-xl font-semibold text-gray-800">
        {title}
      </h3>
      <p className="text-center text-gray-500">{description}</p>
    </div>
  );
};

const CardGrid = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* First Card */}
        <Card
          icon={<FaHeartbeat />}
          title="Nesciunt Mete"
          description="Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequuntur."
          borderColor="hover:border-blue-400"
        />
        {/* Second Card */}
        <Card
          icon={<FaSignal />}
          title="Eosle Commodi"
          description="Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem."
          borderColor="hover:border-orange-400"
        />
        {/* Third Card */}
        <Card
          icon={<FaChalkboardTeacher />}
          title="Ledo Markt"
          description="Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti."
          borderColor="hover:border-green-400"
        />
        {/* Fourth Card */}
        <Card
          icon={<FaCubes />}
          title="Asperiores Commodit"
          description="Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque."
          borderColor="hover:border-red-400"
        />
      </div>
    </div>
  );
};

export default CardGrid;
