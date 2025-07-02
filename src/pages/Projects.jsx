import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Code2, Sparkles, Terminal, Zap } from 'lucide-react';

const projects = [
    
  {
    id: 1,
    title: "NeuroQuery",
    description: "AI-Powered Database Query Assistant",
    longDesc: "Built a system to interpret voice/text queries using NLP and execute SQL actions for real-time data retrieval. Achieved 96% intent classification accuracy.",
    tech: ["Python", "Scikit-learn", "Flask", "React", "SQL"],
    date: "May 2025",
    color: "#8B5CF6",
    bgPattern: "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)"
  },
  {
    id: 2,
    title: "NewsGenie",
    description: "Personalized News Summarizer & Recommender", 
    longDesc: "Full-stack app that fetches live news, summarizes articles using BART, and recommends content based on user preferences.",
    tech: ["Flask", "React", "Supabase", "BART"],
    date: "June 2025",
    color: "#10B981",
    bgPattern: "radial-gradient(circle at 30% 20%, rgba(16, 185, 129, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(5, 150, 105, 0.4) 0%, transparent 50%)"
  },
  {
    id: 3,
    title: "FakeGuard",
    description: "Fake News Detection System",
    longDesc: "Designed a real-time NLP model using BERT and Transformers with 93% accuracy for detecting misinformation.",
    tech: ["Python", "BERT", "Hugging Face", "Scikit-learn"],
    date: "Feb 2025",
    color: "#F59E0B",
    bgPattern: "radial-gradient(circle at 40% 60%, rgba(245, 158, 11, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 30%, rgba(217, 119, 6, 0.4) 0%, transparent 50%)"
  },
  {
    id: 4,
    title: "EmotiVision",
    description: "Facial Emotion Recognition",
    longDesc: "CNN model trained on FER-2013 dataset with real-time webcam detection using OpenCV for emotion analysis.",
    tech: ["TensorFlow", "OpenCV", "Python"],
    date: "Aug 2024",
    color: "#EF4444",
    bgPattern: "radial-gradient(circle at 50% 40%, rgba(239, 68, 68, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 70%, rgba(220, 38, 38, 0.4) 0%, transparent 50%)"
  },
];

const ProjectCard = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);
  
  return (
    <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
      <div className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:scale-[1.02]">
        
        {/* Header with gradient */}
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
        
        {/* Content */}
        <div className="p-6 space-y-4">
          <p className="text-gray-400 text-sm leading-relaxed">
            {project.longDesc}
          </p>
          
          {/* Tech stack */}
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
          
          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button 
              className="flex-1 bg-white text-black py-2.5 px-4 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              View Project
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button className="px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 transition-colors">
              <Code2 className="w-4 h-4 text-gray-300" />
            </button>
          </div>
        </div>
        
        {/* Hover glow */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none rounded-2xl"
          style={{ boxShadow: `0 0 50px ${project.color}` }}
        />
      </div>
    </div>
  );
};

const Projects = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section id="projects" className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '20px 20px',
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Terminal className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 font-mono text-sm tracking-wider">RECENT_WORK.exe</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Featured
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative solutions in AI, machine learning, and full-stack development. 
            Each project tackles real-world problems with cutting-edge technology.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
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