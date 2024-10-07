import { useState } from "react";
import app1 from "../../assets/img/portfolio/app-1.jpg";
import app2 from "../../assets/img/portfolio/app-2.jpg";
import app3 from "../../assets/img/portfolio/app-3.jpg";
import book1 from "../../assets/img/portfolio/books-1.jpg";
import book2 from "../../assets/img/portfolio/books-2.jpg";
import book3 from "../../assets/img/portfolio/books-3.jpg";
import b1 from "../../assets/img/portfolio/branding-1.jpg";
import b2 from "../../assets/img/portfolio/branding-2.jpg";
import b3 from "../../assets/img/portfolio/branding-3.jpg";
import p1 from "../../assets/img/portfolio/product-1.jpg";
import p2 from "../../assets/img/portfolio/product-2.jpg";
import p3 from "../../assets/img/portfolio/product-3.jpg";

const products = [
  {
    id: 1,
    name: "App Design",
    category: "App",
    image: app1,
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "App",
    image: app2,
  },
  {
    id: 3,
    name: "Cosmetics",
    category: "App",
    image: app3,
  },
  {
    id: 4,
    name: "Cosmetics",
    category: "Product",
    image: p1,
  },
  {
    id: 5,
    name: "Cosmetics",
    category: "Product",
    image: p2,
  },
  {
    id: 6,
    name: "Cosmetics",
    category: "Product",
    image: p3,
  },
  {
    id: 7,
    name: "Photography",
    category: "Branding",
    image: b1,
  },
  {
    id: 8,
    name: "Book Design",
    category: "Branding",
    image: b2,
  },
  {
    id: 9,
    name: "Book Design",
    category: "Branding",
    image: b3,
  },
  {
    id: 10,
    name: "Book Design",
    category: "Books",
    image: book1,
  },
  {
    id: 11,
    name: "Book Design",
    category: "Books",
    image: book2,
  },
  {
    id: 12,
    name: "Book Design",
    category: "Books",
    image: book3,
  },
  // Add more products as needed
];

const PortfolioTabs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="w-[88.5%] mx-auto font-roboto text-xl mt-16 mb-28">
      {/* Filter Navigation */}
      <div className="flex justify-center my-8 ">
        {["All", "App", "Product", "Branding", "Books"].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 font-medium rounded ${
              selectedCategory === category ? "text-blue-500" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Flex Layout */}
      <div className="flex flex-wrap justify-center gap-2">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col md:flex-row justify-center border rounded-lg overflow-hidden shadow-lg sm:w-1/2 lg:w-1/3"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover block"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioTabs;
