import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import i1 from "../../assets/img/team/team-1.jpg";
import i2 from "../../assets/img/team/team-2.jpg";
import i3 from "../../assets/img/team/team-3.jpg";
import i4 from "../../assets/img/team/team-4.jpg";
import i5 from "../../assets/img/team/team-5.jpg";
import i6 from "../../assets/img/team/team-6.jpg";
export const TeamCard = () => {
  const Members = [
    {
      id: 1,
      image: i1,
      name: "Walter White",
      position: "Chief Executive Officer",
      description:
        "Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow",
    },
    {
      id: 2,
      image: i2,
      name: "Sarah Jhonson",
      position: "Product Manager",
      description:
        "Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut",
    },
    {
      id: 3,
      image: i3,
      name: "William Anderson",
      position: "CTO",
      description:
        "Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui",
    },
    {
      id: 4,
      image: i4,
      name: "Amanda Jepson",
      position: "Accountant",
      description:
        "Magni voluptatem accusamus assumenda cum nisi aut qui dolorem voluptate sed et veniam quasi quam consectetur",
    },
    {
      id: 5,
      image: i5,
      name: "Brian Doe",
      position: "Marketing",
      description:
        "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit",
    },
    {
      id: 6,
      image: i6,
      name: "Josepha Palas",
      position: "Operation",
      description:
        "Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et omnis fugit eligendi cupiditate vel",
    },
  ];
  return (
    <>
      <div className="flex justify-center flex-wrap w-[88.5%] mx-auto flex-col md:flex-row gap-[1.5%] my-20">
        {Members.map((val) => {
          return (
            <>
              <div className="card1 md:w-[32%]">
                <div className="relative rounded-lg group overflow-hidden">
                  <img
                    src={val.image}
                    alt="images"
                    className="rounded-lg block bg-cover w-full h-[420px]"
                  />
                  <div className="absolute -top-[420px] rounded-lg opacity-0 left-0 flex items-center justify-center gap-5 w-full h-[420px] bg-black text-white text-3xl transition duration-200 ease-in group-hover:opacity-100 group-hover:top-0 group-hover:bg-black/50">
                    <FaXTwitter />
                    <FaFacebook />
                    <FaInstagram />
                    <FaLinkedin />
                  </div>
                  <div className="details p-4 text-center">
                    <h3 className="text-xl font-raleway mb-2 font-bold">
                      {val.name}
                    </h3>
                    <h6 className="font-roboto mb-3 font-normal text-gray-500">
                      {val.position}
                    </h6>
                    <p className="font-roboto font-light text-gray-900">
                      {val.description}
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

//  <div className="card1 md:w-[32%]">
//         <div className="relative rounded-lg group overflow-hidden">
//           <img
//             src={i1}
//             alt="images"
//             className="rounded-lg block bg-cover w-full h-[420px]"
//           />
//           <div className="absolute -top-[420px] rounded-lg opacity-0 left-0 flex items-center justify-center gap-5 w-full h-[420px] bg-black text-white text-3xl transition duration-200 ease-in group-hover:opacity-100 group-hover:top-0 group-hover:bg-black/50">
//             <FaXTwitter />
//             <FaFacebook />
//             <FaInstagram />
//             <FaLinkedin />
//           </div>
//           <div className="details p-4 text-center">
//             <h3 className="text-xl font-raleway mb-2 font-bold">
//               Walter white
//             </h3>
//             <h6 className="font-roboto mb-3 font-normal text-gray-500">
//               Chief Executive Officer
//             </h6>
//             <p className="font-roboto font-light text-gray-900">
//               Aliquam iure quaerat voluptatem praesentium possimus unde
//               laudantium vel dolorum distinctio dire flow
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="card1 md:w-[32%]">
//         <div className="relative rounded-lg group overflow-hidden">
//           <img
//             src={i1}
//             alt="images"
//             className="rounded-lg block bg-cover w-full h-[420px]"
//           />
//           <div className="absolute -top-[420px] rounded-lg opacity-0 left-0 flex items-center justify-center gap-5 w-full h-[420px] bg-black text-white text-3xl transition duration-200 ease-in group-hover:opacity-100 group-hover:top-0 group-hover:bg-black/50">
//             <FaXTwitter />
//             <FaFacebook />
//             <FaInstagram />
//             <FaLinkedin />
//           </div>
//           <div className="details p-4 text-center">
//             <h3 className="text-xl font-raleway mb-2 font-bold">
//               Walter white
//             </h3>
//             <h6 className="font-roboto mb-3 font-normal text-gray-500">
//               Chief Executive Officer
//             </h6>
//             <p className="font-roboto font-light text-gray-900">
//               Aliquam iure quaerat voluptatem praesentium possimus unde
//               laudantium vel dolorum distinctio dire flow
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="card1 md:w-[32.5%]">
//         <div className="relative rounded-lg group overflow-hidden">
//           <img
//             src={i1}
//             alt="images"
//             className="rounded-lg block bg-cover w-full h-[420px]"
//           />
//           <div className="absolute -top-[420px] rounded-lg opacity-0 left-0 flex items-center justify-center gap-5 w-full h-[420px] bg-black text-white text-3xl transition duration-200 ease-in group-hover:opacity-100 group-hover:top-0 group-hover:bg-black/50">
//             <FaXTwitter />
//             <FaFacebook />
//             <FaInstagram />
//             <FaLinkedin />
//           </div>
//           <div className="details p-4 text-center">
//             <h3 className="text-xl font-raleway mb-2 font-bold">
//               Walter white
//             </h3>
//             <h6 className="font-roboto mb-3 font-normal text-gray-500">
//               Chief Executive Officer
//             </h6>
//             <p className="font-roboto font-light text-gray-900">
//               Aliquam iure quaerat voluptatem praesentium possimus unde
//               laudantium vel dolorum distinctio dire flow
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="card1 md:w-[32.5%]">
//         <div className="relative rounded-lg group overflow-hidden">
//           <img
//             src={i1}
//             alt="images"
//             className="rounded-lg block bg-cover w-full h-[420px]"
//           />
//           <div className="absolute -top-[420px] rounded-lg opacity-0 left-0 flex items-center justify-center gap-5 w-full h-[420px] bg-black text-white text-3xl transition duration-200 ease-in group-hover:opacity-100 group-hover:top-0 group-hover:bg-black/50">
//             <FaXTwitter />
//             <FaFacebook />
//             <FaInstagram />
//             <FaLinkedin />
//           </div>
//           <div className="details p-4 text-center">
//             <h3 className="text-xl font-raleway mb-2 font-bold">
//               Walter white
//             </h3>
//             <h6 className="font-roboto mb-3 font-normal text-gray-500">
//               Chief Executive Officer
//             </h6>
//             <p className="font-roboto font-light text-gray-900">
//               Aliquam iure quaerat voluptatem praesentium possimus unde
//               laudantium vel dolorum distinctio dire flow
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="card1 md:w-[32.5%]">
//         <div className="relative rounded-lg group overflow-hidden">
//           <img
//             src={i1}
//             alt="images"
//             className="rounded-lg block bg-cover w-full h-[420px]"
//           />
//           <div className="absolute -top-[420px] rounded-lg opacity-0 left-0 flex items-center justify-center gap-5 w-full h-[420px] bg-black text-white text-3xl transition duration-200 ease-in group-hover:opacity-100 group-hover:top-0 group-hover:bg-black/50">
//             <FaXTwitter />
//             <FaFacebook />
//             <FaInstagram />
//             <FaLinkedin />
//           </div>
//           <div className="details p-4 text-center">
//             <h3 className="text-xl font-raleway mb-2 font-bold">
//               Walter white
//             </h3>
//             <h6 className="font-roboto mb-3 font-normal text-gray-500">
//               Chief Executive Officer
//             </h6>
//             <p className="font-roboto font-light text-gray-900">
//               Aliquam iure quaerat voluptatem praesentium possimus unde
//               laudantium vel dolorum distinctio dire flow
//             </p>
//           </div>
//         </div>
//       </div>
