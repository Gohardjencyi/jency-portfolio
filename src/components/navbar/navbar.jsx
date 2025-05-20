import { useState } from "react";
import "./navbar.css";
// import photo from "../../assets/jency-profile.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

  const menu = [
    { name: "Home", url: "#intro" },
    { name: "About", url: "#about" },
    { name: "Resume", url: "#resume" },
    { name: "Portfolio", url: "#portfolio" },
    { name: "Contact", url: "#contact" },
  ];

  return (
    <header className="header-section px-7 items-center border-b-2 flex md:block justify-between lg:justify-start md:border-r-2 border-white md:h-screen">
      {/* Profile Section */}
      <div className="md:p-10 p-2 md:border-b-2 border-white">
        <img
          src='../../assets/jency-profile.jpg'
          alt="jency-photo"
          className="w-full max-w-[60px] aspect-square rounded-full object-cover md:max-w-[200px]"
        />
      </div>

      {/* Hamburger Menu for Mobile */}
      <button
        className="block md:hidden p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Menu Items */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:block my-10 leading-10 md:relative md:top-auto md:left-auto absolute top-10 left-0 pl-4 text-lg tracking-wide`}
      >
        {menu.map((menu, index) => (
          <li key={index} className="list-none">
            {menu.url.startsWith("#") ? (
              <span
                className="text-white/80 cursor-pointer"
                onClick={() => {
                  const target = document.querySelector(menu.url);
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                    setIsOpen(false); // Close menu on selection
                  }
                }}
              >
                {menu.name}
              </span>
            ) : (
              <Link
                className="text-white"
                to={menu.url}
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {menu.name}
              </Link>
            )}
          </li>
        ))}
      </div>
      <div className="text-center btn-hire">
      <Link
                className="text-amber-500 font-semibold hover:bg-amber-600 hover:text-white rounded-full  border-2 w-full block border-amber-600  py-2 px-4"
                to="/contact"
              >
                Hire Me
              </Link>
      </div>
    </header>
  );
}

export default Navbar;
