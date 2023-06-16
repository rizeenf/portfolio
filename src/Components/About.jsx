import React from "react";
import "./about.css";
import Me3 from "../assets/me3.jpg";
import JS from "../assets/JS.png";
import react from "../assets/react.png";
import css from "../assets/css.png";
import html from "../assets/html.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";

const About = () => {
  return (
    <div className="a h-screen flex">
      <div className="left flex-1">
        <div className="card h-1/2 w-1/2 relative ">
          <div className="card-bg bg-yellow-500 h-full w-full overflow-hidden absolute top-1/2 left-1/2 rounded-md"></div>
          <img
            src={Me3}
            alt=""
            className="img h-full w-full object-cover  absolute top-1/3 left-1/3 rounded-md"
          />
        </div>
      </div>
      <div className="right flex-1 flex flex-col gap-5 justify-center items-center">
        <div className="header flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mt-10">About me</h1>
          <p className=" w-2/3 text-xl font-thin">
            Motivated and able to adapt quickly to new technologies and
            programming languages. A quick learner with a keen eye for details.
            Skilled and adept at office productivity software.
          </p>
        </div>
        <div className="header flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold my-5">Skills</h1>
          <div className="flex flex-row gap-10 ">
            <img
              src={html}
              alt=""
              className=" h-14 w-14 object-cover rounded-md"
            />
            <img src={css} alt="" className=" h-14 w-10 rounded-md" />
            <img
              src={JS}
              alt=""
              className=" h-14 w-14 object-cover rounded-md"
            />
            <img
              src={react}
              alt=""
              className=" h-14 w-14 object-cover rounded-md"
            />
            <img
              src={tailwind}
              alt=""
              className=" h-14 w-14 object-cover rounded-md"
            />
            <img
              src={bootstrap}
              alt=""
              className=" h-14 w-14 object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
