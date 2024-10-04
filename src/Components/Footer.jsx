import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1E4356] py-10 font-roboto text-gray-300">
      <div className="container mx-auto w-[90%] px-4">
        <div className="flex flex-wrap justify-between">
          {/* Contact Information */}
          <div className="mb-6 w-full md:w-1/4">
            <h2 className="mb-4 !font-raleway text-xl font-bold text-white">
              Moderna
            </h2>
            <p>
              A108 Adam Street
              <br />
              New York, NY 535022
            </p>
            <p className="mt-2">
              <strong>Phone:</strong> +1 5589 55488 55
            </p>
            <p>
              <strong>Email:</strong> info@example.com
            </p>
          </div>

          {/* Useful Links */}
          <div className="mb-6 w-full md:w-1/4">
            <h2 className="mb-4 !font-raleway text-xl font-bold text-white">
              Useful Links
            </h2>
            <ul>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-white before:content-['>'] before:mr-2"
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-white before:content-['>'] before:mr-2"
                >
                  About us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-white before:content-['>'] before:mr-2"
                >
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-white before:content-['>'] before:mr-2"
                >
                  Terms of service
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="mb-6 w-full md:w-1/4">
            <h2 className="mb-4 !font-raleway text-xl font-bold text-white">
              Our Services
            </h2>
            <ul>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-white before:content-['>'] before:mr-2"
                >
                  Web Design
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-white before:content-['>'] before:mr-2"
                >
                  Web Development
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-white before:content-['>'] before:mr-2"
                >
                  Product Management
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-white before:content-['>'] before:mr-2"
                >
                  Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="mb-6 w-full md:w-1/4">
            <h2 className="mb-4 !font-raleway text-xl font-bold text-white">
              Follow Us
            </h2>
            <p className="mb-4">
              Cras fermentum odio eu feugiat lide par naso tierra videa magna
              derita valies
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-500">
                <FaTwitter />
              </a>
              <a href="#" className="text-white hover:text-blue-500">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white hover:text-pink-500">
                <FaInstagram />
              </a>
              <a href="#" className="text-white hover:text-blue-700">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-white pt-6 text-center text-sm text-gray-400">
          © Copyright <strong>Moderna</strong>. All Rights Reserved
          <br /> Designed by{" "}
          <a href="#" className="hover:text-white">
            Thamarai Kannan
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
