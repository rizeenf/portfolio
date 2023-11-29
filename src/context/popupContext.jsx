import { createContext, useState } from "react";

export const PopupContext = createContext();

const PopupProvider = ({ children }) => {
  const [image, setImage] = useState(null);

  const toggleImage = (e) => {
    setImage(e);
  };

  return (
    <PopupContext.Provider value={{ image, toggleImage }}>
      {children}
    </PopupContext.Provider>
  );
};

export default PopupProvider;
