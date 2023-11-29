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
      link: "rize-gallery.vercel.app",
      img: "https://i.ibb.co/CV7k8zm/screencapture-rize-gallery-vercel-app-2023-06-20-22-02-58.png",
      name: "Gallerysplash",
      desc: "Simple gallery website using API from Pixabay, you can search some random stuff here and it'll automatically refresh the page.",
      framework: "React, Tailwind",
      demo: "https://rize-gallery.vercel.app/",
      src: "https://github.com/rizeenf/gallery-ReactTailwind",
    },
    {
      id: 2,
      link: "rize-socialmedia.vercel.app",
      img: "https://i.ibb.co/qn6WHt5/screencapture-rize-socialmedia-vercel-app-profile-1001-2023-06-20-22-02-14.png",
      name: "Socialmedia",
      desc: "Mini social media that you can upload, post, like, comment, and share such as usual social media",
      framework: "React, Tailwind",
      demo: "https://rize-socialmedia.vercel.app/",
      src: "https://github.com/rizeenf/socialmedia",
    },
    {
      id: 3,
      link: "rize-shoprizing.vercel.app",
      img: "https://i.ibb.co/Jptm4Kx/screencapture-rize-shoprizing-vercel-app-2023-09-19-21-51-41.png",
      name: "Shop App",
      desc: "Shopping application using Image API from Pixabay, it also using Redux for storing Cart",
      framework: "React, Redux, Sass",
      demo: "https://rize-shoprizing.vercel.app/",
      src: "https://github.com/rizeenf/shoprizing",
    },
    {
      id: 4,
      link: "https://goatify-rize.vercel.app",
      img: "https://i.ibb.co/XLkTTys/screencapture-goatify-rize-vercel-app-2023-09-19-21-56-00.png",
      name: "Landing Page",
      desc: "Landing page for store (in this case Goat), it show multiple products that can be ordered",
      framework: "React, Tailwind",
      demo: "https://goatify-rize.vercel.app/",
      src: "https://github.com/rizeenf/goat-shop",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center h-full mb-5 gap-14 ">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className={`${
              proj.id % 2 == 0
                ? "flex flex-row justify-center  w-full max-w-4xl gap-5 sm:flex-col-reverse"
                : "flex flex-row-reverse justify-center   w-full max-w-4xl gap-5 sm:flex-col-reverse"
            }`}
          >
            <div className="flex-[5] border rounded-md card border-project">
              <div className="head">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
              <img
                src={proj.img}
                alt={proj.link}
                className="object-cover object-left-top project-img aspect-video"
                onClick={() => toggleImage(proj.img)}
              />
            </div>
            <div className="flex-[2] h-full detail ">
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
