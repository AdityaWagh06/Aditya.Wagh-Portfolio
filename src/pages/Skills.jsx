import React from "react";
import { BadgeCheck } from "lucide-react";

const mainSkills = [
  "Python",
  "TensorFlow",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Hugging Face Transformers",
  "LLMs (BERT, GPT, T5)",
  "LangChain",
  "OpenCV",
  "Flask",
  "FastAPI",
  "MongoDB",
  "SQL",
  "Git & GitHub",
  "Prompt Engineering",
  "Data Preprocessing",
  "Model Deployment",
  "ML Pipelines",
  "MLOps (basic)"
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-black text-white py-20 px-6 sm:px-10 md:px-20">
      <div className="text-center mb-16">
        <h2 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4">
          AI / ML / GenAI Skills
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          My core strengths in AI/ML, Data Science, and Generative AI that power impactful, intelligent applications.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
        {mainSkills.map((skill, idx) => (
          <span
            key={idx}
            className="px-4 py-2 bg-zinc-900 text-gray-200 border border-zinc-700 rounded-full text-sm font-medium inline-flex items-center gap-2 hover:border-yellow-400 hover:text-yellow-300 transition"
          >
            <BadgeCheck size={14} className="text-yellow-400" />
            {skill}
          </span>
        ))}
      </div>

      <div className="text-center mt-20">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:scale-105 hover:shadow-lg transition shadow-yellow-400/30"
        >
          🚀 See My Projects
        </a>
      </div>
    </section>
  );
};

export default Skills;
