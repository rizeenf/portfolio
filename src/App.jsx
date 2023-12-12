import "./App.css";
import About from "./Components/About/About";
import ProjectList from "./Components/ProjectList/ProjectList";
import Contact from "./Components/Contact/Contact";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import PopupProvider from "./context/popupContext";

function App() {
  return (
    <div className="h-screen overflow-auto transition-all ease-in-out snap-y snap-mandatory !scroll-smooth">
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
