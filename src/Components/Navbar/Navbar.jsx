import React from "react";
import logo from "/logoipsum-248.svg";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex flex-row items-center justify-between w-full px-5 py-3 transition-all ease-linear bg-white rounded shadow-sm">
      <div className="left">
        <img src={logo} alt="" className="w-10 " />
      </div>
      <div className="mx-5 right">
        <ul className="flex flex-row items-center justify-center gap-5">
          <a href="#about" className="hover:border-t hover:text-gray-500">
            About me
          </a>
          <a href="#skill" className="hover:border-t hover:text-gray-500">
            Skill
          </a>
          <a href="#project" className="hover:border-t hover:text-gray-500">
            Project
          </a>
          <a
            href="#contact"
            className="p-1 px-2 text-white bg-orange-500 rounded hover:bg-orange-700"
          >
            Contact me
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
