import { useEffect, useState } from "react";
import { GraduationCap, Briefcase } from "lucide-react";

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
      className="min-h-screen w-full bg-black text-white flex items-center justify-center px-6 py-16 relative overflow-hidden"
    >
      {/* Soft cursor-following glow */}
      <div
        className="fixed pointer-events-none z-0"
        style={{
          left: mouse.x - 120,
          top: mouse.y - 120,
          width: 240,
          height: 240,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 80%)",
          filter: "blur(32px)",
          transition: "left 0.1s, top 0.1s",
        }}
      />

      <div className="max-w-5xl w-full z-10 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Quick Snapshot</h2>

        {/* Section Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Education Card */}
          <div className="bg-neutral-900 border border-white/10 rounded-xl p-6 hover:shadow-yellow-400/10 transition duration-300">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap size={20} className="text-yellow-300" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-4 text-sm text-gray-300">
              <div>
                <p className="font-medium text-white">B.Tech – CSE (AI & ML)</p>
                <p>VIIT, Pune • 2022–2026</p>
                <p className="text-gray-400">CGPA: 8.1</p>
              </div>
              <div>
                <p className="font-medium text-white">HSC – Science</p>
                <p>Trimurti College, Shrirampur • 2022</p>
                
              </div>
              <div>
                <p className="font-medium text-white">SSC – Maharashtra Board</p>
                <p>St. Xavier’s High School, Shrirampur • 2020</p>
                
              </div>
            </div>
          </div>

          {/* Experience Card */}
          <div className="bg-neutral-900 border border-white/10 rounded-xl p-6 hover:shadow-yellow-400/10 transition duration-300">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase size={20} className="text-yellow-300" />
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>
            <div className="space-y-4 text-sm text-gray-300">
              <div>
                <p className="font-medium text-white">AI Intern – BigBuddy Foundation</p>
                <p>Jan 2025 – May 2025</p>
                <ul className="list-disc list-inside mt-2 ml-2 space-y-1">
                  <li>Built an OCR-based text extraction system using Python, Tesseract & OpenAI API</li>
                  <li>Developed a full-stack MERN platform for structured data management</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Summary;
