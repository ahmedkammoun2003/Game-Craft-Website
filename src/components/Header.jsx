import { useState } from "react";
import styles from "../style";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Header = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(true);

  return (
    <nav className="w-full flex py-8 px-7  justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[20px] ${
              active === nav.title ? "text-[#f6a135]" : "text-[#f6a135]"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} hover:underline shadow-2xl`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <li className="font-poppins font-normal cursor-pointer text-[20px] text-white bg-[#2e0457] mr-0 ml-10 text-underline border-solid border-2 border-[#f6a135] rounded px-4 py-2">
          <a href="#register">Register</a>
        </li>
      </ul>

      <div className="sm:hidden z-10 shadow-lg flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"} hover:underline`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li className="font-poppins font-medium cursor-pointer text-[16px] text-white bg-cyan-500 mb-0 mt-4 hover:underline rounded px-4 py-2">
              <a href="#register">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
