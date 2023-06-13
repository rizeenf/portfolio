import React from "react";
import "./Intro.css";
import Me from "../assets/me.png";
import Me2 from "../assets/me2.png";

const Intro = () => {
  return (
    <div className=" flex w-screen h-screen">
      <div className="left flex flex-1 justify-center items-center">
        <div className="name text-4xl font-bold flex flex-col">
          <span>Hello. </span>
          <span className=" text-2xl">How's life?</span>
          <span>
            My Name is
            <span className=" text-yellow-600 text-4xl"> Rizki Nurpadilah</span>
          </span>
          <div className="intro-list text-2xl flex flex-row items-center h-8 overflow-hidden">
            <span className="">Currently i'm learning </span>
            <div className="list-wrap h-full">
              <div className="list text-yellow-500"> ReactJS</div>
              <div className="list text-yellow-500"> Web Developer</div>
              <div className="list text-yellow-500"> Front-End Developer</div>
            </div>
          </div>
        </div>
      </div>
      <div className="right justify-center flex flex-1">
        <div className=" w-full relative">
          <div className="img-bg bg-yellow-600 h-full w-full absolute top-0 right-0 "></div>
          <img
            src={Me2}
            className=" w-full h-full object-cover absolute"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
