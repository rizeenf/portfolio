import React from "react";
import "./about.css";
import Me3 from "/me3.jpg";

const skill = [
  {
    id: 1,
    image: "html.svg",
    name: "html 5",
  },
  {
    id: 2,
    image: "/css.svg",
    name: "css",
  },
  {
    id: 3,
    image: "/sass.svg",
    name: "sass",
  },
  {
    id: 4,
    image: "/JS.png",
    name: "javascript",
  },
  {
    id: 5,
    image: "/react.svg",
    name: "react",
  },
  {
    id: 6,
    image: "/bootstrap.svg",
    name: "bootstrap",
  },
  {
    id: 7,
    image: "/tailwind.svg",
    name: "tailwind",
  },
  {
    id: 8,
    image: "/git.svg",
    name: "git",
  },
  {
    id: 9,
    image: "/vitejs.svg",
    name: "vite",
  },
  {
    id: 10,
    image: "/mysql.svg",
    name: "mysql",
  },
];

const skillLearning = [
  {
    id: 1,
    image: "next-js.svg",
    name: "next js",
  },
  {
    id: 2,
    image: "typescript.svg",
    name: "typescript",
  },
  {
    id: 3,
    image: "mongodb.svg",
    name: "mongodb",
  },
];

const About = () => {
  return (
    <>
      <div
        className="flex h-screen transition-all ease-in-out a sm:flex-col"
        id="about"
      >
        <div className="flex-1 left">
          <div className="relative w-1/2 card h-1/2 ">
            <div className="absolute w-full h-full overflow-hidden bg-yellow-500 rounded-md card-bg top-1/2 left-1/2"></div>
            <img
              src={Me3}
              alt=""
              className="absolute object-cover w-full h-full rounded-md img top-1/3 left-1/3"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 gap-5 right">
          <div className="flex flex-col items-center justify-center gap-5 header ">
            <h1 className="text-4xl font-bold ">About me</h1>
            <p className="w-2/3 font-thin text-justify text-md ">
              I’m a web developer. I have been working with some technologies
              such as JavaScript, React, Tailwind and others. I have an
              educational background as an Information Technology college
              student. I’m motivated and able to adapt quickly to new
              technologies and programming languages. I also skilled and
              proficient at office productivity software.
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center my-32 header sm:p-10"
        id="skill"
      >
        <h1 className="my-5 text-4xl font-bold">Skills</h1>
        <h4 className="my-3 text-base text-gray-700 uppercase">Using Now : </h4>
        <div className="flex flex-row flex-wrap items-center justify-around max-w-xl gap-14">
          {skill.map((item) => (
            <div
              className="flex flex-col items-center justify-between gap-2 item "
              key={item.id}
            >
              <img
                src={item.image}
                alt={item.name}
                className="object-cover h-14 aspect-auto"
              />
              <span className="text-xs font-thin text-gray-600 uppercase">
                {item.name}
              </span>
            </div>
          ))}
        </div>
        <h4 className="my-3 mt-10 text-base text-gray-700 uppercase">
          learning :
        </h4>
        <div className="flex flex-row flex-wrap items-center justify-around max-w-xl gap-14 ">
          {skillLearning.map((item) => (
            <div
              className="flex flex-col items-center justify-between gap-2 item "
              key={item.id}
            >
              <img
                src={item.image}
                alt={item.name}
                className="object-cover h-14 aspect-auto"
              />
              <span className="text-xs font-thin text-gray-600 uppercase">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
