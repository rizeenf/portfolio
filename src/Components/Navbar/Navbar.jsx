import React, { useEffect, useRef, useState } from "react";
import logo from "/logoipsum-248.svg";
import "./Navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const navbarList = document.querySelectorAll(".navbar");

  useEffect(() => {
    navbarList.forEach((item) => {
      item.classList.remove("active");
      if (item.hash == window.location.hash) {
        item.classList.add("active");
        setIsActive(true);
      }
    });

    return () => {};
  }, [isActive]);

  return (
    <div className="sticky top-0 z-50 flex flex-row items-center justify-between w-full px-5 py-3 transition-all ease-linear bg-white rounded shadow-sm">
      <div className="left">
        <a href="">
          <img src={logo} alt="" className="w-10" />
        </a>
      </div>
      <div className="mx-5 right sm:text-sm sm:mx-1">
        <ul className="flex flex-row items-center justify-center gap-5 ">
          <a
            href="#about"
            className={` navbar hover:border-b hover:text-gray-500 ${
              isActive ? "active" : ""
            }`}
            onClick={() => setIsActive(!isActive)}
          >
            About me
          </a>
          <a
            href="#skill"
            className={` navbar hover:border-b hover:text-gray-500 ${
              isActive ? "active" : ""
            }`}
            onClick={() => setIsActive(!isActive)}
          >
            Skill
          </a>
          <a
            href="#project"
            className={` navbar hover:border-b hover:text-gray-500 ${
              isActive ? "active" : ""
            }`}
            onClick={() => setIsActive(!isActive)}
          >
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
