import React, { useContext, useState } from "react";
import "./project.css";
import { PopupContext } from "../../context/popupContext";
import Popup from "./Popup";

const Project = () => {
  const { image, toggleImage } = useContext(PopupContext);

  // FAKE DATA
  const projects = [
    {
      id: 1,
      link: "rize-chatreact-firebase.vercel.app/",
      img: "/projChatApp.png",
      name: "Chat Apps",
      desc: "Chat application build using React for UI and Firebase for handling Auth and Storage (Firestore)",
      framework: "React, Tailwind, Firebase",
      demo: "https://rize-chatreact-firebase.vercel.app/",
      src: "https://github.com/rizeenf/chat-react-firebase",
    },
    {
      id: 2,
      link: "rize-socialmedia.vercel.app",
      img: "/projSocialmed.png",
      name: "Socialmedia",
      desc: "Mini social media that you can upload, post, like, comment, and share such as usual social media",
      framework: "React, Tailwind",
      demo: "https://rize-socialmedia.vercel.app/",
      src: "https://github.com/rizeenf/socialmedia",
    },
    {
      id: 3,
      link: "rize-shoprizing.vercel.app",
      img: "/projShoprizing.png",
      name: "Shop App",
      desc: "Shopping application using Image API from Pixabay, it also using Redux for storing Cart",
      framework: "React, Redux, Sass",
      demo: "https://rize-shoprizing.vercel.app/",
      src: "https://github.com/rizeenf/shoprizing",
    },
    {
      id: 4,
      link: "https://zashboard.vercel.app",
      img: "/projZashboard.png",
      name: "Admin Dashboard",
      desc: "Dashboard provides charts for every data collected, using Charts from recharts and Data Table from MaterialUI",
      framework: "React, Sass, MaterialUI, Recharts",
      demo: "https://zashboard.vercel.app",
      src: "https://github.com/rizeenf/admindashboard",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center h-full mb-5 snap-start gap-14 ">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className={`${
              proj.id % 2 == 0
                ? "flex flex-row items-center justify-center snap-start h-[93svh]  w-full max-w-4xl gap-5 sm:flex-col-reverse"
                : "flex flex-row-reverse items-center justify-center snap-start h-[93svh]  w-full max-w-4xl gap-5 sm:flex-col-reverse"
            }`}
          >
            <div className="flex-[5] border rounded-md card border-project aspect-video max-h-[24rem] object-cover overflow-hidden">
              <div className="head">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
              <img
                src={proj.img}
                alt={proj.link}
                className="object-cover w-full project-img "
                onClick={() => toggleImage(proj.img)}
              />
            </div>
            <div className="flex-[2] max-h-[24rem] detail ">
              <div className="flex flex-col items-center justify-center gap-5 text-justify name">
                <span className="mt-1 text-2xl font-semibold ">
                  {proj.name}
                </span>
                <span className="text-sm">{proj.desc} </span>
                <span className="text-lg font-bold underline rounded-md ">
                  {proj.framework}
                </span>
                <div className="flex flex-row w-full gap-3 link">
                  <div className="w-1/2 p-2 text-white bg-yellow-500 rounded-md cursor-pointer github hover:bg-yellow-600 ">
                    <a href={proj.src} target="_blank" className="text-sm ">
                      <img
                        src="https://cdn.cdnlogo.com/logos/g/69/github-icon.svg"
                        className="w-6 h-6 rounded-full "
                        alt="Github"
                      />
                      Source code
                    </a>
                  </div>
                  <div className="w-1/2 p-2 text-white bg-yellow-500 rounded-md cursor-pointer vercel hover:bg-yellow-600">
                    <a href={proj.demo} target="_blank" className="text-sm ">
                      <img
                        src="https://cdn.cdnlogo.com/logos/v/78/vercel.svg"
                        className="object-cover w-6 h-6 overflow-hidden rounded-full "
                        alt="Vercel"
                      />
                      Live demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="showProject ">{image ? <Popup /> : ""}</div>
    </>
  );
};

export default Project;
