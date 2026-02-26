import { useEffect, useState } from "react";
import { GraduationCap, Briefcase, Sparkles } from "lucide-react";

const Summary = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      id="About"
      className="min-h-screen w-full bg-black text-white flex items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Cursor Glow */}
      <div
        className="fixed pointer-events-none z-0"
        style={{
          left: mouse.x - 150,
          top: mouse.y - 150,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,215,0,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
          transition: "all 0.08s ease-out",
        }}
      />

      <div className="max-w-6xl w-full z-10 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-yellow-400 text-sm tracking-widest uppercase mb-2">
            Professional Overview
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Engineering AI. Building Systems. Solving Real Problems.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* EDUCATION */}
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10 rounded-2xl p-8 hover:border-yellow-400/40 transition duration-300">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-yellow-400" size={22} />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            <div className="space-y-6 text-sm text-gray-300">
              <div>
                <p className="text-lg font-semibold text-white">
                  B.Tech – Computer Science (AI & ML)
                </p>
                <p>Vishwakarma Institute of Information Technology, Pune</p>
                <p className="text-gray-400">2022 – 2026 • CGPA: 8.32 / 10</p>
              </div>

              <div className="border-l border-white/10 pl-4">
                <p className="text-white font-medium">HSC – Science</p>
                <p>Trimurti College, Shrirampur • 2022</p>
              </div>

              <div className="border-l border-white/10 pl-4">
                <p className="text-white font-medium">
                  SSC – Maharashtra Board
                </p>
                <p>St. Xavier’s High School, Shrirampur • 2020</p>
              </div>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10 rounded-2xl p-8 hover:border-yellow-400/40 transition duration-300">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-yellow-400" size={22} />
              <h3 className="text-2xl font-semibold">Experience</h3>
            </div>

            <div className="space-y-8 text-sm text-gray-300">

              {/* IIT Bombay */}
              <div>
                <p className="text-lg font-semibold text-white">
                  Research Intern – IIT Bombay (FOSSEE)
                </p>
                <p className="text-gray-400">Dec 2025 – Feb 2026</p>
                <ul className="list-disc list-inside mt-3 space-y-2">
                  <li>
                    Contributed to <span className="text-yellow-400">Osdag Bridge</span>,
                    an open-source structural engineering software.
                  </li>
                  <li>
                    Improved GUI responsiveness by 15% using PySide6 (Qt),
                    modular architecture & OOP best practices.
                  </li>
                  <li>
                    Collaborated with researchers to enhance usability and
                    workflow clarity.
                  </li>
                </ul>
              </div>

              {/* BigBuddy */}
              <div>
                <p className="text-lg font-semibold text-white">
                  Project Developer Intern – BigBuddy Foundation
                </p>
                <p className="text-gray-400">Jan 2025 – Jun 2025</p>
                <ul className="list-disc list-inside mt-3 space-y-2">
                  <li>
                    Built an OCR-to-Excel automation pipeline using
                    Tesseract, OpenAI LLMs & Python.
                  </li>
                  <li>
                    Reduced manual data entry time by 50% through
                    intelligent NLP-based data structuring.
                  </li>
                  <li>
                    Extracted structured data (prices, names, phone numbers,
                    addresses) from scanned documents.
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 text-center max-w-3xl mx-auto text-gray-400 text-sm">
          <Sparkles className="inline-block mr-2 text-yellow-400" size={16} />
          Focused on building scalable AI systems, intelligent automation tools,
          and research-driven software that bridges theory with real-world
          impact.
        </div>
      </div>
    </section>
  );
};

export default Summary;