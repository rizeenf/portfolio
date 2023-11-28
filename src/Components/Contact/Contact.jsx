import React, { useRef } from "react";
import arrow from "../../assets/arrow.svg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6ybgowr",
        "template_bhroiqi",
        form.current,
        "ISchR0uKrdcTJau1I"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    const reset = document.getElementsByName("formMsg")[0];

    setInterval(() => {
      reset.reset();
    }, 1000);
  };

  return (
    <div className="h-screen text-white bg-yellow-500" id="contact">
      <div className="flex flex-col items-center justify-center header h-1/6">
        <h1 className="my-20 text-5xl font-bold">
          Let's discuss
          <span className="font-mono italic "> something cool </span>
          together!
        </h1>
      </div>
      <div className="flex flex-row items-center justify-center main h-5/6 ">
        <div className="flex flex-col items-center justify-center flex-1 h-full left ">
          <form
            ref={form}
            onSubmit={sendEmail}
            action=""
            name="formMsg"
            className="flex flex-col items-center justify-center w-full gap-5 "
          >
            <span className="text-xl ">
              Your Message will sent using EmailJS
            </span>
            <input
              type="text"
              placeholder="Your name.."
              name="sender_name"
              className="w-1/2 h-16 p-3 text-gray-600 bg-white border-b-2 rounded border-b-gray-400"
            />
            <input
              type="email"
              placeholder="Email.."
              name="sender_email"
              className="w-1/2 h-16 p-3 text-gray-600 bg-white border-b-2 rounded border-b-gray-400"
            />
            <input
              type="text"
              placeholder="Message.."
              name="message"
              className="w-1/2 p-3 text-gray-600 bg-white border-b-2 rounded h-52 border-b-gray-400"
            />
            <input
              type="submit"
              value="Send me a Message"
              name="message"
              className="w-1/3 p-3 text-gray-500 bg-yellow-100 rounded cursor-pointer "
            />
          </form>
        </div>
        <div className="flex items-center justify-center flex-1 w-full h-full bg-white rounded-tr-none rounded-bl-none right rounded-3xl">
          <div className="flex flex-col items-center justify-center w-full h-full gap-5 text-gray-600 about ">
            <div className="flex flex-col items-center justify-center w-full top">
              {/* <div className="flex flex-col items-center justify-center w-full top h-1/2">
                <img
                  src="https://cdn.cdnlogo.com/logos/g/93/gmail.svg"
                  alt="Mail"
                  className=" h-14 w-14"
                />
                <span>Email</span>
                <span>rize.nf11@gmail.com</span>
              </div>
              <div className="flex flex-col items-center justify-center w-full top h-1/2">git 
                <img src={arrow} alt="" className="font-bold w-14 h-14" />
                <span>Location</span>
                <span>Bekasi, Jawa Barat</span>
              </div> */}
            </div>
            {/* <MapChart /> */}
            <div className="flex flex-col flex-wrap items-center justify-center w-full gap-10 m-5 bottom h-1/3">
              <div className="map"></div>
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
