import { useEffect, useState } from "react";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import resumeFile from "../assets/Aditya_Wagh_Resume.pdf";
import profilePic from "../assets/DP.jpg";

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
      {/* Cursor Glow */}
      <div
        className="fixed pointer-events-none z-0"
        style={{
          left: mouse.x - 120,
          top: mouse.y - 120,
          width: 240,
          height: 240,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 80%)",
          filter: "blur(32px)",
          transition: "left 0.1s, top 0.1s",
        }}
      />

      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-30 blur-2xl" />

      <div className="w-full flex flex-col items-center justify-center px-4 py-16 text-center z-10">

        {/* Open to Work Badge */}
        <div className="absolute top-6 left-8 z-20">
          <span className="inline-block border border-green-400 text-green-300 text-xs font-semibold px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm">
            🟢 Open to SDE / AI Roles
          </span>
        </div>

        {/* Profile Image */}
        <div className="w-44 h-44 rounded-full border border-white/30 shadow-xl overflow-hidden mb-8">
          <img
            src={profilePic}
            alt="Aditya Wagh"
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />
        </div>

        {/* Name */}
        <p className="text-white text-xs tracking-wider mb-2 font-light">
          AI Engineer • Full Stack Developer • Research Enthusiast
        </p>
        <h1 className="text-5xl font-bold text-white mb-4">
          Aditya Wagh
        </h1>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 mt-4">
          <a
            href="mailto:adityawagh2525@gmail.com"
            className="p-2 border border-white rounded-full text-white hover:scale-110 hover:border-yellow-400 transition"
          >
            <Mail size={20} />
          </a>

          <a
            href="https://linkedin.com/in/aditya-wagh25"
            className="p-2 border border-white rounded-full text-white hover:scale-110 hover:border-yellow-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://github.com/AdityaWagh06"
            className="p-2 border border-white rounded-full text-white hover:scale-110 hover:border-yellow-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} />
          </a>
        </div>

        <div className="flex items-center gap-2 text-gray-400 text-sm mt-4">
          <MapPin size={16} className="text-yellow-400" />
          <span>Pune, India</span>
        </div>

        {/* Download Button */}
        <a
          href={resumeFile}
          download
          className="mt-6 bg-slate-300 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition"
        >
          Download CV
        </a>

        {/* GitHub Contribution Graph 
        <div className="mt-16 w-full max-w-6xl">
          <h2 className="text-xl text-white mb-6 font-semibold">
            GitHub Contributions – 2026
          </h2>

          <div className="bg-neutral-900 p-4 rounded-2xl border border-white/10 shadow-xl">
            <img
              src="https://ghchart.rshah.org/22c55e/AdityaWagh06?year=2026"
              alt="GitHub Contribution Graph 2026"
              className="w-full rounded-lg"
            />
          </div>
        </div> */}

      </div>
    </section>
  );
};

export default Home;