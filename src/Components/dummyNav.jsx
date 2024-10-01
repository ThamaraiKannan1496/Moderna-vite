import { useState } from "react";
import "./DuplicateNavbar.scss";

const dummyNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  console.log(isMenuOpen);
  return (
    <nav className="bg-[#023B6D] px-14 py-6">
      <div className="flex items-center justify-between">
        <a
          href="#"
          className="font-raleway text-3xl font-bold tracking-wider text-white md:ms-14"
        >
          Moderna
        </a>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="h-6 w-6"
            >
              <path d="M4 6h16M4 12h16M4 18h16M4"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden items-center space-x-10 font-poppins text-base font-[400] text-white md:me-14 md:flex">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      {isMenuOpen ? (
        <ul className="flex-col items-center text-center font-poppins text-white md:flex md:hidden md:space-x-5">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      ) : null}
    </nav>
  );
};

export default dummyNav;
