import React, { useContext } from "react";
import { PopupContext } from "../../context/popupContext";

const Popup = () => {
  const { image, toggleImage } = useContext(PopupContext);

  return (
    <div className="fixed h-full w-full top-0 left-0 z-[100] bg-gray-600 bg-opacity-50 transition-all ease-linear">
      {image && (
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
          <img
            src={image}
            alt="images"
            className=" object-left-top object-cover w-[99dvw] max-h-[99dvh] rounded"
          />
          <button
            className="absolute w-6 h-6 text-white bg-red-600 rounded-sm hover:bg-red-200 top-2 right-3"
            onClick={() => toggleImage(null)}
          >
            x
          </button>
        </div>
      )}
    </div>
  );
};

export default Popup;
