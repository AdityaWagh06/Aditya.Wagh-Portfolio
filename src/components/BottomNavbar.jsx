import {
  Home,
  FileText,
  Briefcase,
  Star,
  Contact as ContactIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

const BottomNavbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "summary", "projects", "skills", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed bottom-12 left-1/2 transform -translate-x-1/2 bg-white/10 text-white rounded-full px-4 py-2 shadow-lg z-50 backdrop-blur-md border border-white/20 w-[95%] max-w-md">
      <div className="flex justify-between items-center w-full">
        <NavItem
          icon={<Home size={20} />}
          label="Home"
          href="#home"
          active={activeSection === "home"}
        />
        <NavItem
          icon={<FileText size={20} />}
          label="Summary"
          href="#summary"
          active={activeSection === "summary"}
        />
        <NavItem
          icon={<Briefcase size={20} />}
          label="Projects"
          href="#projects"
          active={activeSection === "projects"}
        />
        <NavItem
          icon={<Star size={20} />}
          label="Skills"
          href="#skills"
          active={activeSection === "skills"}
        />
        <NavItem
          icon={<ContactIcon size={20} />}
          label="Contact"
          href="#contact"
          active={activeSection === "contact"}
        />
      </div>
    </nav>
  );
};

const NavItem = ({ icon, label, href, active }) => (
  <a
    href={href}
    className={`flex flex-col items-center justify-center px-3 py-1 transition-all duration-200 ease-in-out ${
      active
        ? "text-yellow-400 font-semibold"
        : "text-gray-300 hover:text-yellow-300"
    }`}
  >
    {icon}
    <span className="text-[10px] sm:text-xs mt-0.5">{label}</span>
  </a>
);

export default BottomNavbar;
