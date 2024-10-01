import { useState } from "react";
import "./DuplicateNavbar.scss";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  console.log(isMenuOpen);
  return (
    <>
      <nav className="bg-[#1E4356] px-14 py-6">
        <div className="flex items-center justify-between">
          <Link
            to="#"
            className="font-raleway text-3xl font-bold tracking-wider text-white md:ms-14"
          >
            Moderna
          </Link>
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
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/team">Team</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contac">Contact</NavLink>
            </li>
          </ul>
        </div>
        {isMenuOpen ? (
          <ul className="flex-col items-center text-center font-poppins text-white md:flex md:hidden md:space-x-5">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/team">Team</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        ) : null}
      </nav>
    </>
  );
};

export default Navbar;
