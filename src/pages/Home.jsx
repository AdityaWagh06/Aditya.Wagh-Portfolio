import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"; // ✅ added Github icon
import bgImage from "../assets/batman.jpg";
import resumeFile from "../assets/Aditya_Wagh_Resume.pdf";
import BlurText from "../../Reactbits/BlurText/BlurText";

const handleAnimationComplete = () => {
  console.log("✅ Animation completed!");
};

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center sm:px-6"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="w-full min-h-screen bg-black/70 flex flex-col items-center justify-center px-4 sm:px-6 py-12 relative text-center">
        {/* Badge */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-8">
          <span className="inline-block border border-green-400 text-green-300 text-xs font-semibold px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm shadow-sm">
            🟢 Open to work
          </span>
        </div>

        {/* Title & Intro */}
        <p className="text-yellow-500 font-semibold text-xs sm:text-sm tracking-wider mt-16 sm:mt-0">
          Data Science | WEB DEV | AIML | Gen AI
        </p>

        <BlurText
          text="Aditya Wagh"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-4xl sm:text-5xl font-bold mb-8 text-white"
        />

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300 mt-8 text-left max-w-xl w-full px-16 sm:px-8">
          <div className="flex items-center gap-2">
            <Mail size={18} className="text-yellow-400" />
            <span>adityawagh2525@gmail.com</span>
          </div>

          <div className="flex items-center gap-2">
            <Linkedin size={18} className="text-yellow-400" />
            <a
              href="http://www.linkedin.com/in/aditya-wagh25"
              className="hover:underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/aditya-wagh
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Github size={18} className="text-yellow-400" />
            <a
              href="https://github.com/AdityaWagh06"
              className="hover:underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/aditya-wagh
            </a>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-yellow-400" />
            <span>Pune, India</span>
          </div>
        </div>

        {/* Download Button */}
        <a
          href={resumeFile}
          download
          className="mt-8 inline-block bg-slate-300 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition text-sm sm:text-base"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Home;
