// src/content.js
// Single source of truth for all portfolio content.
// House style: short lines, no em-dashes, no invented numbers.

import profileImg from './assets/DP.jpg'
import resume     from './assets/Aditya_Wagh_Resume.pdf'

// SITE: global info
export const SITE = {
    name:         'Aditya Wagh',
    email:        'adityawagh2525@gmail.com',
    github:       'https://github.com/AdityaWagh06',
    linkedin:     'https://www.linkedin.com/in/aditya-wagh25/',
    x:            'https://x.com/adityawagh_94',
    medium:       'https://medium.com/@adityawagh2525',
    web3formsKey: 'e37a6ac1-322f-43bd-88d2-cbcb8c07bfe2',
    profileImg,
    resume,
    // Banner at the top of the page: Aditya's animated clip (from his GIF, stored as
    // animated WebP at a quarter of the size) shown over a still frame while it loads.
    // Set to null to show the designed ModelDiff banner instead.
    bannerAnimated: '/banner.webp',
    bannerPoster:   '/banner-poster.jpg',
}

// NAV (main page)
export const NAV_LINKS = [
    { label: 'Projects',      href: '#projects' },
    { label: 'Experience',    href: '#experience' },
    { label: 'About',         href: '#about' },
    { label: 'Papers',        href: '#papers' },
    { label: 'Contact',       href: '#contact' },
]

// HERO: bento header
export const HERO = {
    eyebrow:  'AI Engineer',
    title:    'Aditya Wagh',
    handle:   '@adityawagh_94',
    line:     'I build LLM apps, RAG pipelines and tools for AI coding agents, and I make sure they are tested.',
    location: ['Pune, India', 'Stuttgart, Germany'],
    status:   'Open to AI and software engineering roles',
    roles:    ['AI Engineer', 'Software Engineer', 'Open-source maintainer', 'LLM and RAG builder'],
    now: [
        { label: 'Building', value: 'ModelDiff and Veriflow' },
        { label: 'Founder',  value: 'OpenWave India' },
        { label: 'Co-founder', value: 'Nailed It Bro' },
        { label: 'Next',     value: 'M.Sc. CS, University of Stuttgart' },
    ],
    highlights: [
        { k: '3',      v: 'papers in IEEE Xplore' },
        { k: 'PR #46', v: 'merged in openapi/gknowledge' },
        { k: '8.42',   v: 'CGPA, B.Tech CSE (AI & ML)' },
    ],
    // short counts for the mobile profile header
    stats: [
        { k: '3',    v: 'IEEE papers' },
        { k: '1',    v: 'merged upstream PR' },
        { k: '8.42', v: 'CGPA' },
    ],
    meta: [
        { icon: 'pin',  text: 'Pune, India' },
        { icon: 'work', text: 'Founder, OpenWave India' },
        { icon: 'cap',  text: 'B.Tech CSE (AI & ML), 2026' },
    ],
}

// ModelDiff comparison shown in the hero terminal. Taken from the project README,
// where the outputs are hand-written fixtures (labelled as an example on the page).
export const TERMINAL = {
    title: 'modeldiff · example on fixtures',
    lines: [
        { t: 'cmd',  text: 'modeldiff compare baseline.json candidate.json' },
        { t: 'info', text: 'support-assistant · baseline-q8 → candidate-q4' },
        { t: 'row',  name: 'ticket-json',        status: 'REGRESSED' },
        { t: 'row',  name: 'intent-billing',     status: 'REGRESSED' },
        { t: 'row',  name: 'tool-lookup',        status: 'REGRESSED' },
        { t: 'row',  name: 'sentiment-positive', status: 'FIXED' },
        { t: 'row',  name: 'summary-length',     status: 'CHANGED' },
        { t: 'info', text: '9 cases · 4 regressed · 1 fixed · exit 1' },
    ],
}

// INTRO: short paragraphs under the name. **double asterisks** mark bold words.
export const INTRO = [
    "I'm Aditya, an **AI engineer** from Pune. I build **LLM apps**, **RAG pipelines** and **tools for AI coding agents**, and I care about the part most demos skip: making them **tested and measurable**.",
    'I founded **OpenWave India**, where I maintain **ModelDiff** and **Veriflow**. Before that I was a research intern at **IIT Bombay (FOSSEE)**, and I have **3 papers in IEEE Xplore**.',
    'I graduated from VIIT Pune in 2026 and start an **M.Sc. in Computer Science at the University of Stuttgart** in April 2027.',
]

// ABOUT
export const ABOUT = {
    text: 'AI engineer from Pune. I care about the part most demos skip: making AI systems reliable, tested and measurable. Currently learning German (A2).',
    pillars: [
        { icon: 'build',  title: 'LLM apps and agents', line: 'Tool calling, structured outputs and Claude Code skills.' },
        { icon: 'search', title: 'Retrieval',           line: 'RAG pipelines, embeddings and rerankers.' },
        { icon: 'check',  title: 'Verification',        line: 'Tests, evals and regression checks for model changes.' },
    ],
    stack: ['Python', 'LLM APIs', 'RAG', 'Embeddings', 'Agents & tool calling', 'Structured outputs', 'FastAPI', 'React', 'TypeScript', 'pytest', 'Docker', 'GitHub Actions'],
}

// Groups for the filter above the project index
export const PROJECT_GROUPS = [
    { id: 'testing', label: 'Testing AI' },
    { id: 'search',  label: 'Search and RAG' },
    { id: 'media',   label: 'Documents, voice and vision' },
]

// PROJECTS: AI work only. The first one gets the big panel.
export const PROJECTS = [
    {
        name:   'ModelDiff',
        group:  'testing',
        short:  'Shows what broke when you swap a local AI model.',
        line:   'Regression testing for local AI. Runs one test suite against a baseline and a candidate model, quantization, prompt or runtime, and reports what broke, what got fixed and what only changed. Runs offline, no API keys.',
        points: [
            'Six check types: exact, JSON Schema, classification, required fields, tool calls and custom',
            'Separates regressions from fixes and harmless output changes',
            'Text, Markdown or JSON reports, with exit codes for CI',
        ],
        tags:   ['Python', 'Ollama', 'YAML suites', 'CI'],
        org:    'OpenWave India',
        panel:  'modeldiff',
        link:   'https://github.com/OpenWave-India/modeldiff',
    },
    {
        name:   'Veriflow',
        group:  'testing',
        short:  'Makes AI coding agents prove their work is done.',
        line:   'A verification skill for Claude Code. Makes the agent run your real tests, linters and builds before it says "done", and reports PASS, FAIL, BLOCKED or UNKNOWN with evidence.',
        tags:   ['Python', 'Claude Code', 'Testing'],
        org:    'OpenWave India',
        panel:  'verdicts',
        link:   'https://github.com/OpenWave-India/veriflow',
    },
    {
        name:   'DocExtract Pro',
        group:  'media',
        short:  'Turns GST invoices into clean, checked data.',
        line:   'GST invoices to structured data, with OCR and checksum validation.',
        visual: 'docextract',
        tags:   ['OpenAI', 'PaddleOCR', 'Flask'],
        link:   'https://github.com/AdityaWagh06/Document-to-Excel',
    },
    {
        name:   'RAGBench',
        group:  'search',
        short:  'Compares RAG setups on one fixed dataset.',
        line:   'Compares chunking, embeddings and rerankers on one fixed dataset.',
        visual: 'ragbench',
        tags:   ['RAG', 'FAISS', 'pytest'],
        status: 'In progress',
        link:   'https://github.com/AdityaWagh06/RAGBench-RAG-Evaluation-Optimization-Framework',
    },
    {
        name:   'NeuroCode AI',
        group:  'search',
        short:  'Code search that understands your repo.',
        line:   'Tree-sitter parsing as the base for repo-aware code search.',
        visual: 'neurocode',
        tags:   ['Python', 'Tree-sitter'],
        status: 'In progress',
        link:   'https://github.com/AdityaWagh06/neurocode-ai',
    },
    {
        name:   'NeuroQuery',
        group:  'search',
        short:  'Ask a database in plain English or by voice.',
        line:   'Plain English or voice to SQL. 96% intent accuracy in my evaluation.',
        visual: 'neuroquery',
        tags:   ['scikit-learn', 'Flask', 'React'],
        link:   'https://github.com/AdityaWagh06/Neuroquery-ai-query-assistant',
    },
    {
        name:   'NewsGenie',
        group:  'media',
        short:  'Short news summaries, picked for your interests.',
        line:   'BART news summaries with interest-based recommendations.',
        visual: 'newsgenie',
        tags:   ['BART', 'Flask', 'Supabase'],
        link:   'https://github.com/AdityaWagh06/News-genie',
    },
    {
        name:   'Blind Reader',
        group:  'media',
        short:  'Describes photos out loud for blind users.',
        line:   'Describes images out loud with BLIP, T5 and Bark.',
        visual: 'blindreader',
        tags:   ['BLIP', 'T5', 'Bark'],
        link:   'https://github.com/AdityaWagh06/Blind_reader_app',
    },
]

// ORGANISATIONS: where I have worked, contributed or studied, newest first
export const ORGS = [
    { name: 'OpenWave India',      mark: 'OW', role: 'Founder',                  period: 'Oct 2026 – present', line: 'Open-source developer tools for AI that run locally and are properly tested. Maintains ModelDiff and Veriflow.', link: 'https://github.com/OpenWave-India', tags: ['Python', 'Ollama', 'Claude Code', 'pytest'] },
    { name: 'openapi / gknowledge', mark: 'GK', role: 'Open-source contributor', period: 'Oct 2026',           line: 'Merged PR #46: discovery of local Ollama models.', link: 'https://github.com/openapi/gknowledge/pull/46', tags: ['Python', 'Ollama'] },
    { name: 'Nailed It Bro',       mark: 'NB', role: 'Co-founder',               period: 'May 2026 – present', line: 'Studio for AI automations and web apps.', link: 'https://www.naileditbro.com/', tags: ['React', 'Next.js', 'Automations'] },
    { name: 'IIT Bombay · FOSSEE', mark: 'IB', role: 'Research Intern',          period: 'Dec 2025 – Feb 2026', line: 'Python and PySide6 modules for Osdag Bridge, the bridge design module of Osdag.', tags: ['Python', 'PySide6'] },
    { name: 'BigBuddy Foundation', mark: 'BB', role: 'Project Developer Intern', period: 'Jan – Jun 2025',     line: 'OCR and LLM document pipeline that cut manual work by about 70%.', tags: ['Python', 'OCR', 'LLM APIs'] },
]

export const EDUCATION = [
    { name: 'University of Stuttgart', mark: 'US', role: 'M.Sc. Computer Science', period: 'From April 2027', line: 'Elective focus: Autonomous Systems.' },
    { name: 'VIIT Pune',               mark: 'VI', role: 'B.Tech CSE (AI & ML)',   period: '2022 – 2026',     line: 'Graduated with a CGPA of 8.42.' },
]

// PAPERS
export const PAPERS = [
    { title: 'Contextual Filler Word Detection using BERT and Prosodic Features', venue: 'ICCUBEA 2025', status: 'IEEE Xplore' },
    { title: 'AI Agent for Scientific Paper Analysis', venue: 'INSPECT 2025', status: 'IEEE Xplore' },
    { title: 'Robust Facial Expression Recognition with VGG16', venue: 'APCIT 2025', status: 'IEEE Xplore' },
    { title: 'Bridging the Language Gap: Open-Source Chatbots for Indian Languages', venue: 'ICRRAI 2025', status: 'Accepted' },
]

// CONTACT
export const CONTACT = {
    title:       'Let\'s build something reliable.',
    text:        'Hiring for an AI or software engineering role, or have an open-source idea? Email is fastest.',
    formSubject: 'Portfolio: new message',
    fromName:    'Portfolio contact form',
}

// FREELANCE PAGE (/freelance): websites and products for businesses
export const FREELANCE = {
    title: 'Freelance',
    line:  'Websites and web apps for small businesses, built on my own and through Nailed It Bro.',
    services: ['Business websites', 'Web apps & dashboards', 'Automations'],
    items: [
        { name: 'A to Z Education',     note: 'Live EdTech platform',        image: '/assets/atoz.png',            tech: 'React · Node · Supabase · Razorpay', link: 'https://atozeducation.study' },
        { name: 'Saachi Skincare',      note: 'Dermatology clinic',          image: '/assets/saachi-skincare.png', tech: 'Next.js · Tailwind',                 link: 'https://saachi-skincare.vercel.app/' },
        { name: 'CraveCraft Cafe',      note: 'Cafe and roastery, Pune',     image: '/assets/cafe-demo-2.png',     tech: 'Next.js · Tailwind',                 link: 'https://cravecraft-cafe-pune.vercel.app/' },
        { name: 'AdAlchemist',          note: 'AI ad creative generator',    image: '/assets/alchemist.png',       tech: 'React · Node · Prisma',              link: 'https://www.ad-alchemist.shop/' },
        { name: 'FORGE Strength',       note: 'Gym website (demo)',          image: '/assets/gymdemo.png',         tech: 'React · Vite · Tailwind',            link: 'https://gym-website-demo-gamma.vercel.app/' },
        { name: 'Dental clinic',        note: 'Clinic landing page (demo)',  image: '/assets/dental.png',          tech: 'React · Tailwind',                   link: 'https://doc-portfoliodemo1.vercel.app/' },
        { name: 'Restaurant',           note: 'Fine dining site (demo)',     image: '/assets/restaurant.png',      tech: 'React · Tailwind',                   link: 'https://restaurant-template-demo2.vercel.app/' },
        { name: 'Online fitness coach', note: 'Coaching site (demo)',        image: '/assets/marcusvance.png',     tech: 'React · Vite',                       link: 'https://online-coach-website-pmr2.vercel.app/' },
    ],
    cta: 'Need a website for your business?',
}
