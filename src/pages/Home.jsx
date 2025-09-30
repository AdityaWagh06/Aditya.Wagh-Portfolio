import { useEffect, useState } from "react";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import resumeFile from "../assets/Aditya_Wagh_Resume.pdf";
import profilePic from "../assets/DP.jpg"; // Add your profile image here

const Home = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen w-full bg-black flex items-center justify-center sm:px-6 relative overflow-hidden"
    >
      {/* Subtle cursor-following glow */}
      <div
        className="fixed pointer-events-none z-0"
        style={{
          left: mouse.x - 120,
          top: mouse.y - 120,
          width: 240,
          height: 240,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 80%)",
          filter: "blur(32px)",
          transition: "left 0.1s, top 0.1s",
        }}
      />

      {/* Animated soft background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900 via-black to-gray-800 animate-gradient-slow opacity-30 blur-2xl" />

      {/* Content */}
      <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 text-center z-10">
        {/* Badge */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-8 z-20">
          <span className="inline-block border border-green-400 text-green-300 text-xs font-semibold px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm shadow-sm">
            🟢 Open to work
          </span>
        </div>

        {/* Profile Image */}
        <div className="w-44 h-44 rounded-full border-[1.5px] border-white/30 shadow-xl relative group overflow-hidden mb-8">
          <img
            src={profilePic}
            alt="Aditya Wagh"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300 ease-in-out"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-300 rounded-full" />
        </div>

        {/* Title & Tagline */}
        <p className="text-white text-xs sm:text-sm tracking-wider mb-2 font-light">
          Data Science | Web Dev | AIML | Gen AI
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">Aditya Wagh</h1>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 mt-4">
          <a
            href="mailto:adityawagh2525@gmail.com"
            className="p-2 border border-white rounded-full text-white hover:scale-110 hover:border-yellow-400 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://linkedin.com/in/aditya-wagh25"
            className="p-2 border border-white rounded-full text-white hover:scale-110 hover:border-yellow-400 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/AdityaWagh06"
            className="p-2 border border-white rounded-full text-white hover:scale-110 hover:border-yellow-400 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} />
          </a>
        </div>

        <p className="text-xs text-gray-400 mt-6">Let’s connect</p>

        {/* Location Info */}
        <div className="flex items-center gap-2 text-gray-400 text-sm mt-4">
          <MapPin size={16} className="text-yellow-400" />
          <span>Pune, India</span>
        </div>

        {/* Download Button */}
        <a
          href={resumeFile}
          download
          className="mt-6 inline-block bg-slate-300 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition text-sm sm:text-base"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Home;
