import React from "react";
import "./Intro.css";
import Me2 from "/me2n.png";

const Intro = () => {
  return (
    <div className="flex h-[100dvh] ">
      <div className="flex items-center justify-center flex-[2] left">
        <div className="flex flex-col text-4xl font-bold name">
          <span>Hello. </span>
          <span className="text-2xl ">How's life?</span>
          <span>
            My Name is
            <span className="text-4xl text-yellow-600 "> Rizki Nurpadilah</span>
          </span>
          <div className="flex flex-row items-center h-8 overflow-hidden text-2xl intro-list sm:h-16 ">
            <span className="mr-3 ">Currently i'm learning </span>
            <div className="h-full list-wrap">
              <div className="text-yellow-500 list">ReactJS</div>
              <div className="text-yellow-500 list">Web Developer</div>
              <div className="text-yellow-500 list">Front-End Developer</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-[3] right sm:hidden">
        <div className="relative w-full">
          <div className="z-0 w-full h-full bg-yellow-500 img-bg"></div>
          <img
            src={Me2}
            className="absolute bottom-0 z-10 object-cover w-[530px] overflow-hidden right-24"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
