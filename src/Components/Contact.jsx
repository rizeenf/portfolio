import React from "react";
import arrow from "../assets/arrow.svg";

const Contact = () => {
  return (
    <div className=" h-screen bg-yellow-500 text-white">
      <div className="header flex justify-center items-center flex-col h-1/6">
        <h1 className="text-5xl font-bold my-20">
          Let's discuss
          <span className=" font-mono italic"> something cool </span>
          together!
        </h1>
      </div>
      <div className="main flex flex-row justify-center items-center h-5/6  ">
        <div className="left flex justify-center items-center flex-col flex-1 h-full  ">
          <form
            action=""
            className=" w-full flex justify-center items-center flex-col gap-5 "
          >
            <input
              type="text"
              placeholder="Your name.."
              className=" bg-white rounded p-3 text-white h-16 w-1/2 border-b-gray-400 border-b-2"
            />
            <input
              type="email"
              placeholder="Email.."
              className=" bg-white rounded p-3 text-white h-16 w-1/2 border-b-gray-400 border-b-2"
            />
            <input
              type="text"
              placeholder="Message.."
              className=" bg-white rounded p-3 text-white w-1/2 h-52 border-b-gray-400 border-b-2"
            />
            <input
              type="submit"
              value="Send me a Message"
              className=" bg-yellow-100 p-3 w-1/3 text-gray-500 rounded"
            />
          </form>
        </div>
        <div className="right flex-1 flex justify-center items-center w-full h-full bg-white rounded-3xl rounded-tr-none rounded-bl-none">
          <div className="about flex justify-center items-center h-full w-full flex-col gap-5 text-gray-600 ">
            <div className="top flex  flex-col justify-center items-center h-2/3 w-full">
              {/* <div className="top flex flex-col justify-center items-center h-1/2 w-full">
                <img
                  src="https://cdn.cdnlogo.com/logos/g/93/gmail.svg"
                  alt="Mail"
                  className=" h-14 w-14 "
                />
                <span>Email</span>
                <span>rize.nf11@gmail.com</span>
              </div>
              <div className="top flex  flex-col justify-center items-center h-1/2 w-full">
                <img src={arrow} alt="" className=" font-bold w-14 h-14" />
                <span>Location</span>
                <span>Bekasi, Jawa Barat</span>
              </div> */}
            </div>
            <div className="bottom flex flex-wrap justify-center items-center flex-col h-1/3 w-full gap-10 m-5">
              <span>About us</span>
              <span>Features</span>
              <span>Our blogs</span>
              <span>Integrations</span>
              <span>Terms of service</span>
              <span>Privacy policy</span>
              <span>Cookies settings</span>
              <span>Community</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;