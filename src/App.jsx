import "./App.css";
import About from "./Components/About/About";
import ProjectList from "./Components/ProjectList/ProjectList";
import Contact from "./Components/Contact/Contact";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import PopupProvider from "./context/popupContext";
import { useEffect } from "react";

function App() {
  return (
    <div className="transition-all ease-in-out">
      <PopupProvider>
        <Navbar />
        <Intro />
        <About />
        <ProjectList />
        <Contact />
      </PopupProvider>
    </div>
  );
}

export default App;
