import "./App.css";
import About from "./Components/About/About";
import ProjectList from "./Components/ProjectList/ProjectList";
import Contact from "./Components/Contact/Contact";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="transition-all ease-in-out ">
      <Navbar />
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
