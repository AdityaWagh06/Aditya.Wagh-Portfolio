// ─────────────────────────────────────────────────────────────────────────────
// src/content.js — Single source of truth for ALL portfolio content
// Edit only this file to update any text, links, images, or data on the site.
// ─────────────────────────────────────────────────────────────────────────────

// ── Src/assets imports (Vite processes these at build time) ──────────────────
import profileImg from './assets/DP.jpg'
import resume     from './assets/Aditya_Wagh_Resume.pdf'
import photo1     from './assets/1.jpeg'
import photo2     from './assets/2.jpeg'
import photo3     from './assets/3.jpeg'
import photo4     from './assets/4.jpeg'
import photo5     from './assets/5.jpeg'
import photo6     from './assets/6.jpeg'
import photo7     from './assets/7.jpeg'

// ─────────────────────────────────────────────────────────────────────────────
// SITE — global info used in multiple places
// ─────────────────────────────────────────────────────────────────────────────
export const SITE = {
    name:         'Aditya Wagh',
    logoText:     'aditya.',
    email:        'adityawagh2525@gmail.com',
    github:       'https://github.com/AdityaWagh06',
    linkedin:     'https://linkedin.com/in/aditya-wagh-0609',
    instagram:    'https://instagram.com/adityawagh06',
    web3formsKey: 'YOUR_WEB3FORMS_KEY',   // ← paste your Web3Forms key here
}

// ─────────────────────────────────────────────────────────────────────────────
// NAVBAR — navigation links
// ─────────────────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
    { label: 'Home',       href: '#top' },
    { label: 'About me',   href: '#about' },
    { label: 'Services',   href: '#services' },
    { label: 'My Work',    href: '#work' },
    { label: 'Contact me', href: '#contact' },
]

// ─────────────────────────────────────────────────────────────────────────────
// HEADER — hero section
// ─────────────────────────────────────────────────────────────────────────────
export const HEADER = {
    greeting:   "Hi! I'm Aditya Wagh",
    headline:   'Software developer & AI researcher.',
    bio:        'Final-year B.Tech student in CS (AI/ML) at VIIT Pune with 4 IEEE publications. I build full-stack applications, work with machine learning and generative AI, and love turning data into real-world impact.',
    profileImg,
    resume,
}

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT — about section
// ─────────────────────────────────────────────────────────────────────────────
export const ABOUT = {
    bio: 'I am a final-year B.Tech student in Computer Science (AI/ML) at VIIT Pune. With 4 IEEE publications, research experience at IIT Bombay FOSSEE, and internship work building production tools and educational platforms, I enjoy working across full-stack development, data science, and AI research. Currently exploring opportunities in software engineering, machine learning, and generative AI.',

    // Photos shown in the scroll-driven strip (add/remove/reorder freely)
    photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7],

    // Three stat cards below the bio
    stats: [
        {
            name:        'Languages',
            icon1:       '/assets/code-icon.png',
            icon2:       '/assets/code-icon-dark.png',
            description: 'Python, Java, JavaScript, C++, SQL, HTML/CSS, Bash',
        },
        {
            name:        'Education',
            icon1:       '/assets/edu-icon.png',
            icon2:       '/assets/edu-icon-dark.png',
            description: 'B.Tech CS (AI/ML) — VIIT Pune (2022–2026) · CGPA 8.32',
        },
        {
            name:        'Projects',
            icon1:       '/assets/project-icon.png',
            icon2:       '/assets/project-icon-dark.png',
            description: '4 IEEE publications & 5+ projects in AI/ML and Full Stack',
        },
    ],

    // Tool icons row
    tools: [
        { name: 'vscode',   icon: '/assets/vscode.png' },
        { name: 'firebase', icon: '/assets/firebase.png' },
        { name: 'mongodb',  icon: '/assets/mongodb.png' },
        { name: 'figma',    icon: '/assets/figma.png' },
        { name: 'git',      icon: '/assets/git.png' },
    ],
}

// ─────────────────────────────────────────────────────────────────────────────
// SERVICES — services section
// ─────────────────────────────────────────────────────────────────────────────
export const SERVICES = {
    subtitle: 'From building scalable software to training ML models and writing research papers — here is what I can bring to your team.',
    items: [
        {
            name:        'Software Development',
            icon:        '/assets/mobile-icon.png',
            description: 'Designing and building full-stack applications with React, Node.js, Express.js, Flask, and TailwindCSS backed by MongoDB, MySQL, and Supabase.',
            link:        '#work',
        },
        {
            name:        'Machine Learning & AI',
            icon:        '/assets/web-icon.png',
            description: 'Developing intelligent systems with Scikit-learn, TensorFlow, HuggingFace, and OpenCV — spanning NLP, computer vision, and predictive modelling.',
            link:        '#work',
        },
        {
            name:        'GenAI & LLMs',
            icon:        '/assets/ui-icon.png',
            description: 'Building applications powered by large language models, RAG pipelines, BART summarization, and generative AI frameworks.',
            link:        '#work',
        },
        {
            name:        'Data Science & Research',
            icon:        '/assets/graphics-icon.png',
            description: 'Extracting insights from data, publishing research (4 IEEE papers), and applying statistical methods to solve real-world problems.',
            link:        '#highlights',
        },
    ],
}

// ─────────────────────────────────────────────────────────────────────────────
// WORK — projects section
// ─────────────────────────────────────────────────────────────────────────────
export const WORK = {
    subtitle:  'Explore a collection of projects showcasing my expertise in AI/ML, web development, and building intelligent applications.',
    githubUrl: 'https://github.com/AdityaWagh06',
    projects: [
        {
            name:        'NeuroQuery - NLP to SQL Chatbot',
            icon:        '/assets/work-1.png',
            description: 'NLP · Flask · React · 96% Accuracy',
            link:        'https://github.com/AdityaWagh06',
        },
        {
            name:        'NewsGenie - Smart News App',
            icon:        '/assets/work-2.png',
            description: 'BART · Supabase · Collaborative Filtering',
            link:        'https://github.com/AdityaWagh06',
        },
        {
            name:        'Blind Reader App',
            icon:        '/assets/work-3.png',
            description: 'BLIP · T5 · Bark TTS · Accessibility',
            link:        'https://github.com/AdityaWagh06',
        },
        {
            name:        'OCR-to-Excel Pipeline',
            icon:        '/assets/work-4.png',
            description: 'Computer Vision · Python · Automation',
            link:        'https://github.com/AdityaWagh06',
        },
    ],
}

// ─────────────────────────────────────────────────────────────────────────────
// HIGHLIGHTS — publications, blog, certifications, experience
// ─────────────────────────────────────────────────────────────────────────────
export const HIGHLIGHTS = {
    subtitle: 'Publications, certifications, and thoughts — a glimpse into my journey beyond projects.',

    // Large featured publication card (top-left)
    featured: {
        venue:       'IEEE ICCUBEA 2025',
        title:       'Contextual Filler Word Detection Using BERT & Prosodic Features',
        description: 'Published at IEEE ICCUBEA 2025. Developed a BERT-based model combined with prosodic features for contextual filler word detection in speech, advancing NLP-driven speech analysis.',
        tags:        ['NLP', 'BERT', 'Speech Analysis'],
        link:        '#',
    },

    // Smaller publication cards
    publications: [
        {
            venue:  'IEEE INSPECT 2025',
            title:  'AI Agent for Scientific Paper Analysis',
            footer: 'Published · AI Agents · LLMs',
            link:   '#',
        },
        {
            venue:  'APCIT 2025',
            title:  'Robust Facial Expression Recognition with VGG16',
            footer: 'Accepted · Computer Vision · CNN',
            link:   '#',
        },
        {
            venue:  'ICRRAI 2025',
            title:  'Bridging the Language Gap: Chatbots for Indian Languages — A Survey',
            footer: 'Accepted · NLP · Multilingual',
            link:   '#',
        },
    ],

    // Blog post card
    blog: {
        url:         'https://medium.com/@adityawagh2525/766a12d3712e',
        displayUrl:  'medium.com/@adityawagh2525',
        title:       'Peter Thiel: The Billionaire Who Questions School',
        description: 'Peter Thiel is one of Silicon Valley’s most influential and controversial thinkers. He is known less for following trends and more for questioning systems most people accept without doubt – including education.',
        author:      'Aditya Wagh · Medium',
    },

    // Individual certification cards (cards 6–10; card 11 uses the combined card below)
    certifications: [
        { name: 'MongoDB RAG',            issuer: 'MongoDB',         date: 'Aug 2025' },
        { name: 'IBM AI Engineering',     issuer: 'IBM · Coursera',  date: 'Oct 2024' },
        { name: 'IBM Full Stack Developer', issuer: 'IBM · Coursera', date: 'Jul 2024' },
        { name: 'GenAI for Everyone',     issuer: 'DeepLearning.AI', date: 'Sep 2024' },
    ],

    // Combined cert card (card 11 — pairs two certs)
    combinedCerts: [
        { name: 'CCNA: Intro to Networks', issuer: 'Cisco', date: 'Nov 2024' },
        { name: 'UX/UI Design',            issuer: 'Meta',  date: 'Oct 2024' },
    ],

    
}

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT — contact section
// ─────────────────────────────────────────────────────────────────────────────
export const CONTACT = {
    subtitle:    "I'd love to hear from you! If you have any questions, collaboration ideas, or opportunities, please use the form below.",
    formSubject: 'Aditya Wagh Portfolio - New form Submission',
    fromName:    'Portfolio Contact Form',
}
