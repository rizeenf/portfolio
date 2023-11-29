import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const [emailSent, setEmailSent] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    try {
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
      setEmailSent(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    form.current.reset();

    return () => {};
  }, [emailSent]);

  const socmeds = [
    {
      id: 1,
      image: "linkedin.svg",
      name: "linkedin",
      url: "https://www.linkedin.com/in/rizki-nurpadilah",
    },
    {
      id: 2,
      image: "github.svg",
      name: "github",
      url: "https://github.com/rizeenf",
    },
    {
      id: 3,
      image: "facebook.svg",
      name: "facebook",
      url: "https://facebook.com/rizenf",
    },
    {
      id: 4,
      image: "twitter.svg",
      name: "twitter",
      url: "https://twitter.com/rizenf",
    },
  ];

  return (
    <div className="h-screen " id="contact">
      <div className="flex flex-col items-center justify-center header ">
        <h1 className="my-20 text-5xl font-bold">
          Let's discuss
          <span className="font-mono italic text-yellow-500 ">
            {" "}
            something cool{" "}
          </span>
          together!
        </h1>
      </div>
      <div className="flex flex-row items-center justify-center h-full main sm:flex-col ">
        <div className="flex flex-col items-center justify-center flex-[10] h-full text-white bg-yellow-500 left slash">
          <form
            ref={form}
            onSubmit={sendEmail}
            action=""
            name="formMsg"
            className="flex flex-col items-center justify-center w-full gap-5 "
          >
            <span className="text-xl font-semibold ">
              Message will sent using EmailJS library
            </span>
            <input
              type="text"
              placeholder="Your name.."
              name="sender_name"
              className="w-1/2 h-16 p-3 text-white bg-transparent border-b-2 rounded border-b-slate-50 placeholder:text-white"
            />
            <input
              type="email"
              placeholder="Email.."
              name="sender_email"
              className="w-1/2 h-16 p-3 text-white bg-transparent border-b-2 rounded border-b-slate-50 placeholder:text-white"
            />
            <input
              type="text"
              placeholder="Message.."
              name="message"
              className="w-1/2 p-3 text-white bg-transparent border-b-2 rounded h-52 border-b-slate-50 placeholder:text-white"
            />
            <input
              type="submit"
              value="Send Message"
              name="message"
              className="w-1/3 p-3 text-sm text-gray-600 bg-yellow-100 rounded cursor-pointer hover:bg-slate-100 "
            />
            {emailSent ? (
              <div className="sent ">
                Thank you, your message has been sent successfully!
              </div>
            ) : (
              ""
            )}
          </form>
        </div>
        <div className="flex-[10] h-full ">
          <div className="flex flex-col items-center justify-center right">
            <h1 className="my-10 text-2xl font-bold">
              <span className="font-mono italic text-yellow-500 ">Let's </span>
              connect!
            </h1>
            <div className="flex flex-row flex-wrap items-center justify-around max-w-xl socmed gap-14">
              {socmeds.map((item) => (
                <a
                  className="flex flex-col items-center justify-between gap-2 item "
                  key={item.id}
                  href={item.url}
                  target="_blank"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover h-10 rounded aspect-auto"
                  />
                  <span className="text-xs font-thin text-gray-600 uppercase ">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-[2] h-full bg-yellow-500 slash2 sm:hidden"></div>
      </div>
    </div>
  );
};

export default Contact;
