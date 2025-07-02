import Home from "./pages/Home";
import Summary from "./pages/Summary";
import BottomNavbar from "./components/Bottomnavbar";
import BlurText from "../Reactbits/BlurText/BlurText";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Home />
      <Summary/>
      <Projects />
      <Skills />
      <Contact />
      {/* Add other pages as needed */}
      <BottomNavbar />
      <BlurText/>
      <Footer />
    </div>
  );
}

export default App;
