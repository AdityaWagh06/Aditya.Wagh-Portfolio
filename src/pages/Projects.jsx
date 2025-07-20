import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Code2, Terminal, Zap } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Float, Torus, Environment } from '@react-three/drei';

const projects = [
    {
        id: 1,
        title: "NeuroQuery",
        description: "AI-Powered Database Query Assistant",
        longDesc:
            "Interprets user voice/text queries using NLP and executes SQL actions for real-time data retrieval. Achieved 96% accuracy in intent classification.",
        tech: ["Python", "Scikit-learn", "SQL", "Flask", "React"],
        date: "May 2025",
        color: "#8B5CF6",
        bgPattern:
            "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)",
        repo: "https://github.com/AdityaWagh06/neuroquery",
    },
    {
        id: 2,
        title: "NewsGenie",
        description: "Personalized News Summarizer & Recommender",
        longDesc:
            "Fetches live news, summarizes using BART, and recommends articles based on user preferences. Built with Flask, React, and Supabase.",
        tech: ["Flask", "React", "Supabase", "BART"],
        date: "June 2025",
        color: "#10B981",
        bgPattern:
            "radial-gradient(circle at 30% 20%, rgba(16, 185, 129, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(5, 150, 105, 0.4) 0%, transparent 50%)",
    },
    {
        id: 3,
        title: "Fake News Detection",
        description: "LLM-based Classifier using BERT",
        longDesc:
            "Text classification model using BERT + Hugging Face Transformers. Achieved 93% accuracy. Integrated real-time NLP inference pipeline using Python and Scikit-learn.",
        tech: ["Python", "BERT", "Hugging Face", "Transformers", "Scikit-learn"],
        date: "May 2025",
        color: "#F59E0B",
        bgPattern:
            "radial-gradient(circle at 40% 60%, rgba(245, 158, 11, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 30%, rgba(217, 119, 6, 0.4) 0%, transparent 50%)",
    },
    {
        id: 4,
        title: "Educational Website",
        description: "MERN Stack Platform for Students",
        longDesc:
            "Designed and developed a MERN-based Educational Skill Website for students (6–16 yrs) to enhance learning through interactive content and progress tracking.",
    tech: ["MongoDB", "Express", "React", "Node.js", "TailwindCSS"],
        date: "Mar 2025",
        color: "#3B82F6",
        bgPattern:
            "radial-gradient(circle at 20% 40%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(96, 165, 250, 0.4) 0%, transparent 50%)",
        repo: "https://github.com/AdityaWagh06/educational-website-",
    },
    {
        id: 5,
        title: "OCR Document Extractor",
        description: "FastAPI-based Document Parsing & Excel Export",
        longDesc:
            "Developed an OCR tool using Python, Tesseract, and OpenAI API to extract structured data from PDFs/images and export to Excel. Integrated with a React frontend and document-type filtering.",
        tech: ["FastAPI", "Python", "Tesseract", "OpenAI API", "React", "ExcelJS"],
        date: "Feb 2025",
        color: "#E11D48",
        bgPattern:
            "radial-gradient(circle at 50% 30%, rgba(225, 29, 72, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 70%, rgba(244, 63, 94, 0.4) 0%, transparent 50%)",
        repo: "https://github.com/AdityaWagh06/cyberpunk-ocr",
    },
];

const ProjectCard = ({ project, index }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), index * 150);
        return () => clearTimeout(timer);
    }, [index]);

    return (
        <div
            className={`transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
        >
            <div className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:scale-[1.02]">
                <div
                    className="relative h-48 p-6 flex flex-col justify-between"
                    style={{ background: project.bgPattern }}
                >
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10 flex justify-between items-start">
                        <div
                            className="w-3 h-3 rounded-full animate-pulse"
                            style={{ backgroundColor: project.color }}
                        />
                        <span className="text-xs text-gray-400 font-mono bg-black/30 px-2 py-1 rounded">
                            {project.date}
                        </span>
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-gray-300 text-sm">{project.description}</p>
                    </div>
                </div>

                <div className="p-6 space-y-4">
                    <p className="text-gray-400 text-sm leading-relaxed">{project.longDesc}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 bg-zinc-800 text-gray-300 text-xs rounded-full border border-zinc-700 hover:border-zinc-600 transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {project.repo && (
                        <div className="pt-4">
                            <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 transition-colors text-gray-300 text-sm font-medium"
                                title="View Code on GitHub"
                            >
                                <Code2 className="w-4 h-4" />
                                View on GitHub
                            </a>
                        </div>
                    )}
                </div>

                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none rounded-2xl"
                    style={{ boxShadow: `0 0 50px ${project.color}` }}
                />
            </div>
        </div>
    );
};

const Animated3DProjectsBG = () => (
    <div className="absolute inset-0 w-full h-full z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
            <ambientLight intensity={0.7} />
            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                <Torus args={[2, 0.5, 16, 100]}>
                    <meshStandardMaterial color="#38bdf8" metalness={0.7} roughness={0.2} />
                </Torus>
            </Float>
            <Environment preset="sunset" />
        </Canvas>
    </div>
);

const Projects = () => {
    const [scrollY, setScrollY] = useState(0);
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [showMore, setShowMore] = useState(false);

    const displayedProjects = showMore ? projects : projects.slice(0, 3);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        const handleMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", handleMove);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMove);
        };
    }, []);

    return (
        <section id="projects" className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Glow */}
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
            <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 animate-fade-in">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-6 tracking-tight text-white animate-slide-up">
                        Featured<br />Projects
                    </h1>
                    <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                        A showcase of innovative solutions in AI, machine learning, and full-stack development.
                        Each project tackles real-world problems with cutting-edge technology.
                    </p>
                </div>

                {/* Grid */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {displayedProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>

                    {/* Toggle Button */}
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowMore(!showMore)}
                            className="inline-flex items-center gap-2 px-6 py-2 text-sm font-semibold rounded-full border border-emerald-400 text-emerald-300 hover:bg-emerald-400 hover:text-black transition"
                        >
                            {showMore ? "Show Less" : "Show More Projects"}
                            <ArrowUpRight
                                className={`w-4 h-4 transition-transform ${showMore ? "rotate-180" : "rotate-45"
                                    }`}
                            />
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <div className="max-w-4xl mx-auto text-center mt-20">
                    <div className="flex items-center justify-center gap-4 text-gray-500">
                        <div className="h-px bg-gradient-to-r from-transparent to-gray-600 flex-1" />
                        <div className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-emerald-400 animate-pulse" />
                            <span className="font-mono text-sm">More coming soon</span>
                            <Zap className="w-4 h-4 text-emerald-400 animate-pulse" />
                        </div>
                        <div className="h-px bg-gradient-to-l from-transparent to-gray-600 flex-1" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
