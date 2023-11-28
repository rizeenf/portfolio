import React from "react";
import Project from "./Project";

const ProjectList = () => {
  return (
    <div className=" min-h-fit" id="project">
      <div className="flex flex-col items-center justify-center header">
        <h1 className="mb-5 text-4xl font-bold">Projects</h1>
        <p>Each project is a unique piece of my development </p>
      </div>
      <Project />
    </div>
  );
};

export default ProjectList;
