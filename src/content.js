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
import photo5     from './assets/5.jpeg'
import certDoc    from './assets/6.pdf'
import droneWorkshopImg from './assets/drone workshop.jpg'
import nssLetterImg from './assets/nss.jpg.jpeg'

// ─────────────────────────────────────────────────────────────────────────────
// SITE — global info used in multiple places
// ─────────────────────────────────────────────────────────────────────────────
export const SITE = {
    name:         'Aditya Wagh',
    logoText:     'aditya.',
    email:        'adityawagh2525@gmail.com',
    github:       'https://github.com/AdityaWagh06',
    linkedin:     'https://www.linkedin.com/in/aditya-wagh25/',
    instagram:    'https://www.instagram.com/_adityawagh_7',
    web3formsKey: 'e37a6ac1-322f-43bd-88d2-cbcb8c07bfe2',
}

// ─────────────────────────────────────────────────────────────────────────────
// NAVBAR — navigation links
// ─────────────────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
    { label: 'Home',       href: '#top' },
    { label: 'About me',   href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills',     href: '#skills' },
    { label: 'Projects',   href: '#projects' },
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
    photos: [photo1, photo2, photo3, photo5],

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
// SKILLS — skills section (formerly Services)
// ─────────────────────────────────────────────────────────────────────────────
export const SKILLS = {
    subtitle: 'From building scalable software to training ML models and writing research papers — here is what I can bring to your team.',
    items: [
        {
            name:        'Software Development',
            icon:        '/assets/mobile-icon.png',
            description: 'Designing and building full-stack applications with React, Node.js, Express.js, Flask, and TailwindCSS backed by MongoDB, MySQL, and Supabase.',
            skills:      ['React', 'Node.js', 'Express.js', 'Flask', 'TailwindCSS', 'MongoDB', 'MySQL', 'Supabase', 'REST APIs', 'JavaScript', 'TypeScript', 'HTML / CSS'],
        },
        {
            name:        'Machine Learning & AI',
            icon:        '/assets/web-icon.png',
            description: 'Developing intelligent systems with Scikit-learn, TensorFlow, HuggingFace, and OpenCV — spanning NLP, computer vision, and predictive modelling.',
            skills:      ['Scikit-learn', 'TensorFlow', 'Keras', 'HuggingFace', 'OpenCV', 'Pandas', 'NumPy', 'NLP', 'Computer Vision', 'BERT', 'Feature Engineering', 'Predictive Modelling'],
        },
        {
            name:        'GenAI & LLMs',
            icon:        '/assets/ui-icon.png',
            description: 'Building applications powered by large language models, RAG pipelines, BART summarization, and generative AI frameworks.',
            skills:      ['OpenAI API', 'LangChain', 'RAG Pipelines', 'BART', 'T5', 'BLIP', 'Prompt Engineering', 'Vector Databases', 'HuggingFace Transformers', 'Generative Models'],
        },
        {
            name:        'Data Science & Research',
            icon:        '/assets/graphics-icon.png',
            description: 'Extracting insights from data, publishing research (4 IEEE papers), and applying statistical methods to solve real-world problems.',
            skills:      ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Statistical Analysis', 'IEEE Publishing', 'Data Visualization', 'EDA', 'Jupyter Notebooks'],
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
            name:               'A to Z Education',
            icon:               '/assets/work-1.png',
            description:        'React · Node.js/Express · Supabase · Razorpay',
            detailedDescription: 'Full-stack e-learning platform with Google authentication, role-based student/admin dashboards, class-wise subjects, video lessons, test management, paid test unlocks with Razorpay, announcements, and a fully mobile-responsive UI. Deployed on Vercel (frontend) and Render (backend).',
            tech:               ['React', 'Node.js', 'Express', 'Supabase', 'Razorpay'],
            link:               'https://atozeducation.study',
            linkLabel:          'Live →',
        },
        {
            name:               'NeuroQuery - NLP to SQL Chatbot',
            icon:               '/assets/work-2.png',
            description:        'NLP · Flask · React · 96% Accuracy',
            detailedDescription: 'Converts plain English queries into SQL commands using NLP techniques. Achieves 96% accuracy on complex multi-table query translations with schema inference. Built with a Flask backend and a React frontend.',
            tech:               ['NLP', 'Flask', 'React', 'MySQL', 'Python'],
            link:               'https://github.com/AdityaWagh06',
        },
        {
            name:               'NewsGenie - Smart News App',
            icon:               '/assets/work-3.png',
            description:        'BART · Supabase · Collaborative Filtering',
            detailedDescription: 'AI-powered news aggregator with BART transformer summarization and a collaborative filtering recommendation engine. Delivers personalized feeds stored on Supabase with real-time updates.',
            tech:               ['BART', 'Supabase', 'React', 'Python', 'ML'],
            link:               'https://github.com/AdityaWagh06',
        },
        {
            name:               'Blind Reader App',
            icon:               '/assets/work-4.png',
            description:        'BLIP · T5 · Bark TTS · Accessibility',
            detailedDescription: 'Accessibility app for visually impaired users combining BLIP image captioning, T5 text summarization, and Bark TTS audio output — making digital content fully accessible through AI-powered audio descriptions.',
            tech:               ['BLIP', 'T5', 'Bark TTS', 'Python', 'AI'],
            link:               'https://github.com/AdityaWagh06',
        },
        {
            name:               'OCR-to-Excel Pipeline',
            icon:               '/assets/gymdemo.png',
            description:        'Computer Vision · Python · Automation',
            detailedDescription: 'Automated pipeline that extracts structured data from scanned documents and images using computer vision and OCR. Converts unstructured image text into organized Excel/CSV files, reducing manual data entry by over 90%.',
            tech:               ['OpenCV', 'Python', 'Tesseract', 'Pandas'],
            link:               'https://github.com/AdityaWagh06',
        },
    ],
    freelance: {
        subtitle: 'Freelance work focused on practical, production-ready solutions for founders, creators, and small teams.',
        services: [
            {
                name: 'Landing pages & portfolio sites',
                description: 'Fast, responsive websites designed to convert visitors and present your brand clearly.',
            },
            {
                name: 'Web apps & dashboards',
                description: 'Custom React-based dashboards, admin panels, and internal tools for real workflows.',
            },
            {
                name: 'Automation & AI integrations',
                description: 'Workflow automation, document processing, and AI-powered features that save time.',
            },
        ],
        projects: [
            {
                name: 'A to Z Education',
                icon: '/assets/atoz.png',
                description: 'React · Node.js/Express · Supabase · Razorpay',
                detailedDescription: 'Full-stack e-learning platform with Google authentication, role-based student/admin dashboards, class-wise subjects, video lessons, test management, paid test unlocks with Razorpay, announcements, and a fully mobile-responsive UI. Deployed on Vercel (frontend) and Render (backend).',
                tech: ['React', 'Node.js', 'Express', 'Supabase', 'Razorpay'],
                link: 'https://atozeducation.study',
                linkLabel: 'Live →',
            },
            {
                name: 'AdAlchemist',
                icon: '/assets/alchemist.png',
                description: 'AI · React · Tailwind · Prisma · Video & Image Generation',
                detailedDescription: 'AdAlchemist is an AI-powered marketing creative generation platform that converts product images and prompts into high-converting static and short-form video ads. Built as a full-stack system (React + Vite frontend, Node/Express backend, Prisma + PostgreSQL), it features instant generation, video motion synthesis, a credit-based economy, and an admin dashboard. Live demo available.',
                tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Prisma', 'PostgreSQL', 'Redis'],
                link: 'https://www.ad-alchemist.shop/',
                linkLabel: 'Live →',

            },
            {
                name: 'FORGE Strength & Performance',
                icon: '/assets/gymdemo.png',
                description: 'React · Vite · Tailwind CSS · Fitness Brand Site',
                detailedDescription: 'Engineered gym website built around strength, performance, and recovery. Features a metric-driven hero section, training pillars, coach profiles, membership tiers, weekly schedule, testimonials, and clear inquiry calls-to-action for a premium fitness brand experience.',
                tech: ['React', 'Vite', 'Tailwind CSS', 'Responsive UI'],
                link: 'https://gym-website-demo-gamma.vercel.app/',
                linkLabel: 'Live →',
            },
            {
                name: 'XYZ Dental Care',
                icon: '/assets/dental.png',
                description: 'React · Tailwind CSS · Framer Motion',
                detailedDescription: 'Modern dental clinic landing page featuring a premium healthcare UI with responsive layouts, smooth animations, service showcases, doctor profiles, testimonials, appointment call-to-actions, and a clean user experience. Designed as a professional business website template with a mobile-first approach.',
                tech: ['React', 'Tailwind CSS', 'Framer Motion', 'React Icons'],
                link: 'https://doc-portfoliodemo1.vercel.app/',
                linkLabel: 'Live →',
            },
            {
                name: 'XYZ Restaurant',
                icon: '/assets/restaurant.png',
                description: 'React · Tailwind CSS · Framer Motion',
                detailedDescription: 'Luxury restaurant landing page inspired by modern fine dining aesthetics. Features an immersive hero section, featured dishes, menu showcase, chef introduction, reservation CTA, gallery, testimonials, elegant animations, and a fully responsive design optimized for all devices.',
                tech: ['React', 'Tailwind CSS', 'Framer Motion', 'React Icons', 'Swiper.js'],
                link: 'https://restaurant-template-demo2.vercel.app/',
                linkLabel: 'Live →',
            },
            {
                name: 'Online fitness coach',
                icon: '/assets/marcusvance.png',
                description: 'React · Vanilla CSS · Lucide Icons · AI Fitness Tools',
                detailedDescription: 'High-converting online transformation coaching web app for elite fitness coaching. Features aggressive dark aesthetics, interactive Before/After comparison sliders, AI-powered macro and BMI metabolic calculators, 4-step intake qualification funnel, and embedded WhatsApp consultation booking.',
                tech: ['React', 'Vite', 'Vanilla CSS', 'Lucide React', 'AI Calculators'],
                link: 'https://online-coach-website-pmr2.vercel.app/',
                linkLabel: 'Live →',
            },
        ],
    },
}

// ─────────────────────────────────────────────────────────────────────────────
// HIGHLIGHTS — achievements (papers, blog, GitHub activity)
// ─────────────────────────────────────────────────────────────────────────────
export const HIGHLIGHTS = {
    subtitle: 'A short snapshot of my research work, writing, and GitHub consistency.',

    github: {
        profileUrl:            'https://github.com/AdityaWagh06',
        fallbackContributions: '120+ (90d)',
        fallbackCommits:       '80 recent',
        fallbackStatus:        'Recent push activity available on GitHub profile.',
    },

    // Papers (kept concise for the Achievements section)
    publications: [
        {
            venue:  'IEEE ICCUBEA 2025',
            title:  'Contextual Filler Word Detection Using BERT & Prosodic Features',
            footer: 'Published in IEEE Xplore · NLP · Speech Analysis',
            link:   '#',
        },
        {
            venue:  'IEEE INSPECT 2025',
            title:  'AI Agent for Scientific Paper Analysis',
            footer: 'Published in IEEE Xplore · AI Agents · LLMs',
            link:   '#',
        },
        {
            venue:  'APCIT 2025',
            title:  'Robust Facial Expression Recognition with VGG16',
            footer: 'Published in IEEE Xplore · Computer Vision · CNN',
            link:   '#',
        },
        {
            venue:  'ICRRAI 2025',
            title:  'Bridging the Language Gap: Chatbots for Indian Languages — A Survey',
            footer: 'Accepted · NLP · Multilingual',
            link:   '#',
        },
    ],

    achievements: [
        {
            id:          'ucsi-immersion',
            title:       'Global Immersion Program at UCSI University, Malaysia',
            period:      'Sept 2025',
            description: 'Completed the Global Immersion Program at UCSI University, Malaysia.',
            details: {
                photo:        photo1,
                photoAlt:     'Aditya Wagh at UCSI University, Malaysia',
                certificates: [
                    { name: 'AI-Driven Cybersecurity Tools', file: certDoc },
                    { name: 'Data Privacy in AI Applications', file: certDoc },
                    { name: 'AI in Ethical Decision-Making', file: certDoc },
                ],
            },
        },
        {
            id:          'osdag-bridge',
            title:       'Open-Source Contributor — Osdag Bridge (FOSSEE Project)',
            period:      '2025',
            description: 'Contributed to the open-source development of Osdag Bridge, an interdisciplinary civil engineering software for bridge analysis and design.',
        },
        {
            id:          'cdac-drone',
            title:       'CDAC UAV 5-Day Bootcamp on AI & Drone Systems',
            period:      '2025',
            description: 'Completed the CDAC UAV bootcamp with intensive training in AI-driven drone operations and autonomous systems.',
            details: {
                photo:        droneWorkshopImg,
                photoAlt:     'Aditya Wagh during CDAC UAV AI and Drone Systems bootcamp',
                certificates: [
                    { name: 'AI-Driven Drone Operations', file: certDoc },
                    { name: 'Autonomous Systems Fundamentals', file: certDoc },
                    { name: 'UAV Mission Planning & Safety', file: certDoc },
                ],
            },
        },
        {
            id:          'nss-volunteer',
            title:       'National Service Scheme (NSS) Volunteer',
            period:      '2024',
            description: 'Served as an NSS volunteer for 1 year, participating in community service, social awareness drives, and outreach programs.',
            details: {
                photo:        nssLetterImg,
                photoAlt:     'NSS appreciation letter',
                certificates: [
                    { name: 'NSS Appreciation Letter', file: nssLetterImg },
                ],
            },
        },
    ],

    // Blog highlight
    blog: {
        url:         'https://medium.com/@adityawagh2525/766a12d3712e',
        displayUrl:  'medium.com/@adityawagh2525',
        title:       'Peter Thiel: The Billionaire Who Questions School',
        description: 'Peter Thiel is one of Silicon Valley’s most influential and controversial thinkers. He is known less for following trends and more for questioning systems most people accept without doubt – including education.',
        author:      'Aditya Wagh · Medium',
    },
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPERIENCE — professional experience timeline
// ─────────────────────────────────────────────────────────────────────────────
export const EXPERIENCE = [
    {
        role:     'Research Intern',
        company:  'IIT Bombay – FOSSEE',
        period:   'Oct 2025 – FEB 2026',
        location: 'Mumbai, India',
        type:     'Research Internship (Remote)',
        color:    'from-violet-500 to-purple-600',
        dot:      'bg-violet-500',
        points: [
            'Contributed to Osdag Bridge, an open-source structural engineering software for bridge analysis and design, improving overall GUI usability and workflow clarity.',
            'Improved UI responsiveness by ~15%: developed and optimized Python-based GUI modules using PySide6 (Qt), applying OOP, modular architecture, and software engineering best practices in collaboration with researchers and senior developers.',
        ],
        tags: ['Python', 'PySide6 (Qt)', 'OOP', 'Open Source', 'GUI Engineering'],
    },
    {
        role:     'Project Developer Intern',
        company:  'BigBuddy Foundation',
        period:   'JAN 2025 – JUN 2025',
        location: 'Pune, India',
        type:     'Internship (Remote)',
        color:    'from-blue-500 to-indigo-600',
        dot:      'bg-blue-500',
        points: [
            'Built an end-to-end OCR-to-Excel automation pipeline using Tesseract OCR, OpenAI LLMs, and Python for intelligent document processing.',
            'Reduced manual data entry time by ~50%: implemented reliable data extraction, cleaning, and structuring workflows to capture prices, product names, phone numbers, and addresses from scanned documents using NLP and AI-driven automation.',
        ],
        tags: ['Python', 'Tesseract OCR', 'OpenAI LLMs', 'NLP', 'Automation'],
    },
]

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT — contact section
// ─────────────────────────────────────────────────────────────────────────────
export const CONTACT = {
    subtitle:    "I'd love to hear from you! If you have any questions, collaboration ideas, or opportunities, please use the form below.",
    formSubject: 'Aditya Wagh Portfolio - New form Submission',
    fromName:    'Portfolio Contact Form',
}
