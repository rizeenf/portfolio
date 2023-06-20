import React from "react";
import Project from "./Project";

const ProjectList = () => {
  return (
    <div className=" h-screen ">
      <div className="header flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold mb-5">Projects</h1>
        <p>Each project is a unique piece of my development </p>
      </div>
      <div className=" h-full flex justify-center items-center flex-wrap mt-5">
        <Project />
      </div>
    </div>
  );
};

export default ProjectList;
