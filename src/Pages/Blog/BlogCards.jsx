import i1 from "../../assets/img/blog/blog-1.jpg";
import i2 from "../../assets/img/blog/blog-2.jpg";
import i3 from "../../assets/img/blog/blog-3.jpg";
import i4 from "../../assets/img/blog/blog-4.jpg";
import i5 from "../../assets/img/blog/blog-5.jpg";
import i6 from "../../assets/img/blog/blog-6.jpg";
import icon1 from "../../assets/img/blog/blog-author-1.jpg";
import icon2 from "../../assets/img/blog/blog-author-2.jpg";
import icon3 from "../../assets/img/blog/blog-author-3.jpg";
import icon4 from "../../assets/img/blog/blog-author-4.jpg";
import icon5 from "../../assets/img/blog/blog-author-5.jpg";
import icon6 from "../../assets/img/blog/blog-author-6.jpg";
export const BlogCards = () => {
  const BlogMembers = [
    {
      image: i1,
      field: "Politics",
      description: "Dolorum optio tempore voluptas dignissimos",
      iconImage: icon1,
      iconName: "Maria Doe",
      iconDate: "Jan 1, 2022",
    },
    {
      image: i2,
      field: "Sports",
      description: "Nisi magni odit consequatur autem nulla dolorem",
      iconImage: icon2,
      iconName: "Allisa Mayer",
      iconDate: "Jun 5, 2022",
    },
    {
      image: i3,
      field: "Entertainment",
      description: "Possimus soluta ut id suscipit ea ut in quo quia et soluta",
      iconImage: icon3,
      iconName: "Mark Dower",
      iconDate: "Jun 22, 2022",
    },
    {
      image: i4,
      field: "Sports",
      description: "Non rem rerum nam cum quo minus olor distincti",
      iconImage: icon4,
      iconName: "Lisa Neymar",
      iconDate: "Jun 30, 2023",
    },
    {
      image: i5,
      field: "Politics",
      description: "Accusamus quaerat aliquam qui debitis facilis consequatur",
      iconImage: icon5,
      iconName: "Denis Peterson",
      iconDate: "Jan 30, 2024",
    },
    {
      image: i6,
      field: "Entertainment",
      description: "Distinctio provident quibusdam numquam aperiam aut",
      iconImage: icon6,
      iconName: "Mika Lendon",
      iconDate: "Feb 14, 2022",
    },
  ];
  return (
    <>
      <div className="flex justify-center  flex-wrap w-[88.5%] mx-auto flex-col  md:flex-row gap-[1.5%] my-20">
        {BlogMembers.map((val) => {
          return (
            <>
              <div className="blog-card mb-7 rounded-lg  md:w-[32%] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                <img
                  src={val.image}
                  alt="images"
                  className="rounded-t-lg block bg-cover w-full h-[250px]"
                />
                <div className="details py-4 px-7">
                  <h5 className="text-md font-roboto my-3 font-medium text-gray-400">
                    {val.field}
                  </h5>
                  <p className="font-raleway mb-3 font-bold text-[#1E4356] text-xl">
                    {val.description}
                  </p>
                  <div className="flex gap-5 items-center">
                    <img
                      src={val.iconImage}
                      alt="images"
                      className="rounded-full block bg-cover w-[50px] h-[50px] "
                    />
                    <div className="inside-details font-roboto">
                      <p className="font-bold text-gray-600">{val.iconName}</p>
                      <p className="font-normal text-gray-500">
                        {val.iconDate}
                      </p>
                    </div>
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
