import React from "react";
import "./project.css";

const Project = () => {
  const projects = [
    {
      id: 1,
      link: "rize-gallery.vercel.app",
      img: "https://i.ibb.co/CV7k8zm/screencapture-rize-gallery-vercel-app-2023-06-20-22-02-58.png",
    },
    {
      id: 2,
      link: "rize-socialmedia.vercel.app",
      img: "https://i.ibb.co/qn6WHt5/screencapture-rize-socialmedia-vercel-app-profile-1001-2023-06-20-22-02-14.png",
    },
  ];

  return (
    <div className="h-full flex flex-col flex-wrap gap-5">
      {projects.map((proj) => (
        <div
          key={proj.id}
          className="card w-2/3 h-1/3 rounded-md border overflow-hidden relative"
        >
          <div className="head">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
          <img src={proj.img} alt={proj.link} className="object-cover " />
        </div>
      ))}
    </div>
  );
};

export default Project;
