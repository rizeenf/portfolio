import { X } from "lucide-react";
import React from "react";

const ListMenu = ({ isOpened, handleOpened }) => {
  return (
    <>
      <div
        className={`fixed z-10 overflow-auto top-0 right-0 bg-white transition-all duration-500 h-full flex justify-center flex-col max-w-[100dvw] ${
          isOpened ? "w-[20rem]" : "w-[0]"
        }`}
      >
        <X onClick={handleOpened} className="self-end mx-2 cursor-pointer " />
        <ul className="flex flex-col items-center gap-5 ">
          <li>Home</li>
          <li>About me</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>
            <a
              href="#contact"
              className="text-white bg-orange-500 rounded hover:bg-orange-700"
            >
              Contact me
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ListMenu;
