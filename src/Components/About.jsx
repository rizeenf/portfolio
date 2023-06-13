import React from "react";
import Me3 from "../assets/me3.jpg";

const About = () => {
  return (
    <div className="h-screen flex">
      <div className="left flex-1">
        <div className="card h-1/2 w-1/2 relative ">
          <div className="card-bg bg-yellow-500 h-full w-full overflow-hidden absolute top-1/2 left-1/2 rounded-md"></div>
          <img
            src={Me3}
            alt=""
            className=" h-full w-full object-cover  absolute top-1/3 left-1/3 rounded-md"
          />
        </div>
      </div>
      <div className="right flex-1 flex flex-col justify-center items-center">
        <div className="header flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mt-10">About me</h1>
          <p className=" w-2/3 text-xl font-thin">
            Motivated and able to adapt quickly to new technologies and
            programming languages. A quick learner with a keen eye for details.
            Skilled and adept at office productivity software.
          </p>
        </div>
        <div className="header flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mt-10">Skills</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
