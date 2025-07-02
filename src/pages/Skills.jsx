import React, { useState, useEffect, useRef } from 'react';

const skills = {
  "AI & Machine Learning": {
    icon: "🤖",
    skills: ["Python", "TensorFlow", "Scikit-learn", "OpenCV", "Hugging Face", "Transformers", "BERT", "CNN"],
    color: "from-purple-500 to-pink-500",
    particles: "🔮✨🧠"
  },
  "Web Development": {
    icon: "🌐",
    skills: ["React", "Flask", "Supabase", "HTML", "CSS", "JavaScript"],
    color: "from-blue-500 to-cyan-500",
    particles: "💻⚡🚀"
  },
  "Tools & Platforms": {
    icon: "🛠️",
    skills: ["Git", "GitHub", "VS Code", "Android Studio", "SQL"],
    color: "from-green-500 to-emerald-500",
    particles: "⚙️🔧📱"
  }
};

const FloatingParticle = ({ particle, delay }) => {
  return (
    <div 
      className="absolute text-2xl opacity-30 pointer-events-none animate-pulse"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${3 + Math.random() * 2}s`
      }}
    >
      {particle}
    </div>
  );
};

const SkillOrb = ({ skill, index, isHovered }) => {
  const orbRef = useRef(null);
  
  useEffect(() => {
    if (orbRef.current && isHovered) {
      const orb = orbRef.current;
      orb.style.transform = `scale(1.1) rotate(${Math.random() * 360}deg)`;
    } else if (orbRef.current) {
      orbRef.current.style.transform = 'scale(1) rotate(0deg)';
    }
  }, [isHovered]);

  return (
    <div
      ref={orbRef}
      className="relative px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-full hover:border-white/40 transition-all duration-300 cursor-pointer group overflow-hidden"
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
      <span className="relative z-10 text-white font-medium text-sm group-hover:text-yellow-300 transition-colors">
        {skill}
      </span>
    </div>
  );
};

const SkillCategory = ({ category, data, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 0.2}s`
      }}
    >
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        {data.particles.split('').map((particle, i) => (
          <FloatingParticle key={i} particle={particle} delay={i * 0.5} />
        ))}
      </div>

      {/* Main card */}
      <div className={`relative bg-gradient-to-br ${data.color} p-[1px] rounded-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1`}>
        <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-8 h-full border border-white/10">
          {/* Header */}
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4 transform transition-transform group-hover:rotate-12 group-hover:scale-110">
              {data.icon}
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {category}
            </h3>
          </div>

          {/* Skills grid */}
          <div className="flex flex-wrap gap-3">
            {data.skills.map((skill, skillIndex) => (
              <div
                key={skillIndex}
                onMouseEnter={() => setActiveSkill(skill)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <SkillOrb 
                  skill={skill} 
                  index={skillIndex} 
                  isHovered={activeSkill === skill} 
                />
              </div>
            ))}
          </div>

          {/* Skill count badge */}
          <div className="mt-6 inline-flex items-center px-3 py-1 bg-white/10 rounded-full border border-white/20">
            <span className="text-xs text-white/70 font-medium">
              {data.skills.length} Skills Mastered
            </span>
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${data.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
    </div>
  );
};

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#00ff00';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-10 pointer-events-none"
    />
  );
};

const Skills = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="skills" className="relative min-h-screen bg-black text-white py-20 px-6 md:px-12 overflow-hidden">
      {/* Matrix rain background */}
      <MatrixRain />
      
      {/* Dynamic cursor glow */}
      <div 
        className="fixed w-96 h-96 bg-gradient-radial from-yellow-400/20 to-transparent rounded-full pointer-events-none blur-3xl transition-all duration-300 -z-10"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <div className="inline-block">
          <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4 animate-pulse">
            MY SUPERPOWERS
          </h2>
          <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full animate-pulse"></div>
        </div>
        
        <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed">
          Welcome to my digital arsenal. These aren't just skills—they're weapons of mass creation. 
          <span className="text-yellow-400 font-semibold"> Ready to build the impossible?</span>
        </p>
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {Object.entries(skills).map(([category, data], index) => (
          <SkillCategory
            key={index}
            category={category}
            data={data}
            index={index}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-20 relative z-10">
        <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-black font-bold text-lg hover:scale-105 transition-transform cursor-pointer shadow-lg hover:shadow-yellow-400/50">
          <span className="mr-2">🚀</span>
          Ready to launch something amazing?
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
    </section>
  );
};

export default Skills;