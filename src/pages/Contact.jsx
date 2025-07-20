import { useEffect, useState } from "react";
import { Mail, Phone, Linkedin, Github, Instagram } from "lucide-react";

const socials = [
  {
    name: "LinkedIn",
    icon: <Linkedin size={18} />,
    link: "http://www.linkedin.com/in/aditya-wagh25",
  },
  {
    name: "GitHub",
    icon: <Github size={18} />,
    link: "https://github.com/AdityaWagh06",
  },
  {
    name: "Instagram",
    icon: <Instagram size={18} />,
    link: "https://www.instagram.com/_adityawagh_7?igsh=MTh5bndxczl4bGVocg==",
  },
];

const Contact = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white py-24 px-6 sm:px-12 relative overflow-hidden"
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
          background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 80%)",
          filter: "blur(32px)",
          transition: "left 0.1s, top 0.1s",
        }}
      />

      <div className="text-center mb-20 relative z-10">
        <h2 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
          Contact Me
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
          Open to collaborations, freelance gigs, or just a conversation about AI, Web, or GenAI projects 🚀
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-3xl p-10 shadow-xl z-10 relative">
        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">Reach Out</h3>
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-yellow-400" />
              <span className="text-gray-300">adityawagh2525@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-yellow-400" />
              <span className="text-gray-300">+91 9834181871</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-yellow-400">📍</span>
              <span className="text-gray-300">Pune, India</span>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="mailto:adityawagh2525@gmail.com"
              className="inline-block bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition-all"
            >
              Send Message 📬
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-2xl font-bold text-yellow-400 mb-6">Connect Socially</h3>
          <div className="flex gap-6">
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-yellow-500 text-white hover:text-black transition-all duration-300 shadow-md"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
