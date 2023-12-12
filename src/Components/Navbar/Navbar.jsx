import React, { useEffect, useRef, useState } from "react";
import logo from "/logoipsum-248.svg";
import "./Navbar.css";
import ListMenu from "../ListMenu";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const navbarList = document.querySelectorAll(".navbar");
  const [isOpened, setIsOpened] = useState(false);

  const handleOpened = () => {
    setIsOpened((prev) => !prev);
  };
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
    <div className="sticky top-0 z-50 flex flex-row items-center justify-between w-full px-5 h-[7svh] transition-all ease-linear bg-white rounded shadow-sm snap-start">
      <div className="left">
        <a href="#home">
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

        <ListMenu isOpened={isOpened} handleOpened={handleOpened} />
      </div>
    </div>
  );
};

export default Navbar;
