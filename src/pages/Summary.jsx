const Summary = () => {
  return (
    <section
      id="summary"
      className="min-h-screen w-full bg-black text-gray-200 flex items-center justify-center px-6 py-16"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8 text-center">
          Summary
        </h2>

        <p className="text-lg leading-relaxed tracking-wide">
          I am <span className="text-white font-semibold">Aditya Wagh</span>, an enthusiastic developer and researcher specializing in{" "}
          <span className="text-yellow-300 font-medium">Web Development, Android Applications</span>, and{" "}
          <span className="text-yellow-300 font-medium">Artificial Intelligence</span>. I’m passionate about building real-world systems that enhance accessibility, automation, and user experience.
          <br /><br />
          With a strong foundation in both backend and frontend technologies, I’ve built and deployed several intelligent solutions:
        </p>

        <ul className="list-disc list-inside mt-4 space-y-2 pl-4 text-gray-300 text-base">
          <li>
            <span className="text-yellow-300 font-medium">NeuroQuery</span> – an AI-powered voice assistant that understands user queries and executes SQL commands in real time.
          </li>
          <li>
            <span className="text-yellow-300 font-medium">NewsGenie</span> – a personalized news summarizer and recommender using NLP models like BART.
          </li>
          <li>
            <span className="text-yellow-300 font-medium">Fake News Detection System</span> – a transformer-based model that detects misinformation with over 93% accuracy.
          </li>
          <li>
            <span className="text-yellow-300 font-medium">Facial Emotion Recognition</span> – a deep learning model using CNN + OpenCV for real-time facial expression detection.
          </li>
        </ul>

        <p className="mt-6 text-lg tracking-wide">
          I’ve actively participated in <span className="text-white font-semibold">hackathons</span> and contributed to research as a{" "}
          <span className="text-white font-semibold">co-author</span> on a paper in Facial Emotion Recognition. I’m currently exploring{" "}
          <span className="text-yellow-300">Generative AI, voice-enabled interfaces, and intelligent automation</span> to develop inclusive and futuristic applications.
        </p>
      </div>
    </section>
  );
};

export default Summary;
