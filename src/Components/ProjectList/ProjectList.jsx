import React from "react";
import Project from "./Project";
import { Terminal } from "lucide-react";

const ProjectList = () => {
  return (
    <div className=" sm:p-5 h-[372svh] snap-start" id="project">
      <div className="flex flex-col items-center justify-center header">
        <h1 className="text-4xl font-bold ">Projects</h1>
        <p>Each project is a unique piece of my development </p>
      </div>
      <Project />
    </div>
  );
};

export default ProjectList;
