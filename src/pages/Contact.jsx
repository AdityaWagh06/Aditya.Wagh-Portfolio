import { Mail, Phone, Linkedin, Github, Instagram } from "lucide-react";

const socials = [
  {
    name: "LinkedIn",
    icon: <Linkedin size={20} />,
    link: "http://www.linkedin.com/in/aditya-wagh25",
  },
  {
    name: "GitHub",
    icon: <Github size={20} />,
    link: "https://github.com/AdityaWagh06",
  },
  {
    name: "Instagram",
    icon: <Instagram size={20} />,
    link: "https://instagram.com/yourusername",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white py-16 px-6 sm:px-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-12">
        Let's Connect ✉️
      </h2>

      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8 shadow-lg">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-300 mb-4">
              Contact Information
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={18} className="text-yellow-400" />
                <span>adityawagh2525@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={18} className="text-yellow-400" />
                <span>+91 9999999999</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-yellow-400">📍</span>
                <span>Pune, India</span>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-300 mb-4">
              Social Profiles
            </h3>
            <div className="space-y-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-yellow-400 transition"
                >
                  {social.icon}
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm mb-3">
            Want to collaborate or just say hi?
          </p>
          <a
            href="mailto:aditya.wagh@gmail.com"
            className="inline-block bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition"
          >
            Say Hello 👋
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
