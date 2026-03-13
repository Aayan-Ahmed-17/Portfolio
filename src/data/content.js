export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#learning', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
];

export const aboutStats = [
  { number: '11+', label: 'Python Concepts Mastered' },
  { number: '3rd', label: 'Semester @ MAJU' },
  { number: '∞', label: 'Problems Solved by Building' },
  { number: '2028', label: 'Expected Graduation' },
];

export const skills = [
  {
    icon: '// CORE',
    name: 'Python Fundamentals & OOP',
    description:
      "Solid grounding in Python's core — data structures, control flow, functions, and object-oriented design patterns including classes, inheritance, and encapsulation.",
  },
  {
    icon: '// API',
    name: 'FastAPI',
    description:
      'Building modern, high-performance REST APIs with automatic docs, request validation, and async support. My go-to framework for backend services.',
  },
  {
    icon: '// DATABASE',
    name: 'MongoDB + Motor',
    description:
      'Designing and querying NoSQL databases with MongoDB, and using Motor for fully asynchronous database operations in Python applications.',
  },
  {
    icon: '// ASYNC',
    name: 'Async Programming',
    description:
      'Writing non-blocking, concurrent Python with asyncio. Building applications that handle multiple operations simultaneously without blocking threads.',
  },
  {
    icon: '// WEB',
    name: 'Web Scraping',
    description:
      'Extracting structured data from websites using Requests and BeautifulSoup. Built scrapers that navigate pagination, handle dynamic content, and parse HTML efficiently.',
  },
  {
    icon: '// PATTERNS',
    name: 'Decorators & Error Handling',
    description:
      'Writing clean, Pythonic code using decorators for reusable logic, and implementing robust error handling patterns for production-ready applications.',
  },
  {
    icon: '// SYSTEM',
    name: 'OS & File Handling',
    description:
      "Automating file operations, directory management, and system-level tasks using Python's os and pathlib modules for real-world utility scripts.",
  },
  {
    icon: '// EXTRA',
    name: 'MERN Stack (Familiar)',
    description:
      'Prior exposure to MongoDB, Express, React, and Node.js. Not my primary focus, but gives me a broader understanding of full-stack architecture and how systems connect.',
  },
  {
    icon: '// NEXT',
    name: 'AI Agents (In Progress)',
    description:
      'Currently completing an agentic AI course. Studying LLM pipelines, diffusion models, embeddings, and how to build autonomous AI systems end-to-end.',
  },
];

export const projects = [
  {
    number: 'Project — 01',
    name: 'Async REST API with FastAPI & MongoDB',
    description:
      'A fully asynchronous backend API built with FastAPI and Motor (async MongoDB driver). Features CRUD operations, request validation via Pydantic, custom error handling, and automatic OpenAPI documentation. Designed with clean architecture principles.',
    tags: [
      { label: 'FastAPI', highlight: true },
      { label: 'MongoDB', highlight: true },
      { label: 'Async', highlight: true },
      { label: 'Motor' },
      { label: 'Pydantic' },
      { label: 'Python' },
    ],
  },
  {
    number: 'Project — 02',
    name: 'Web Scraper & Data Extractor',
    description:
      'A targeted web scraper built with Requests and BeautifulSoup that extracts, cleans, and structures data from multiple pages. Handles pagination, error retries, and exports structured output. Demonstrates real-world data engineering thinking.',
    tags: [
      { label: 'BeautifulSoup', highlight: true },
      { label: 'Requests', highlight: true },
      { label: 'Python' },
      { label: 'Data Extraction' },
      { label: 'File I/O' },
    ],
  },
  {
    number: 'Project — 03',
    name: 'File Automation Utility',
    description:
      "A command-line utility for automating file organization, batch renaming, and directory management using Python's os module. Uses decorators for logging, timing, and error wrapping — demonstrating clean, production-style patterns.",
    tags: [
      { label: 'OS Module', highlight: true },
      { label: 'Decorators', highlight: true },
      { label: 'Error Handling' },
      { label: 'CLI' },
      { label: 'Python' },
    ],
  },
];

export const journey = [
  {
    label: 'Now · 2025',
    title: 'Agentic AI Course + Daily Python Practice',
    description:
      'Studying AI pipelines, LLMs, diffusion models, embeddings, and building toward autonomous AI agents. Applying Python skills in every project.',
  },
  {
    label: '2025 · SP25',
    title: 'BS Computing & Business — MAJU (3rd Semester)',
    description:
      'Enrolled at Mohammed Ali Jinnah University. Combining academic CS fundamentals with self-driven, project-based Python learning.',
  },
  {
    label: '2024–2025',
    title: 'Python Deep Dive — Built Everything From Scratch',
    description:
      'Covered fundamentals, OOP, FastAPI, MongoDB, async programming, web scraping, decorators, error handling, and file systems — all through real projects.',
  },
  {
    label: 'Next · 2025',
    title: 'First Junior Python Developer Role',
    description:
      'Actively seeking a junior role where I can contribute to real systems, learn from senior engineers, and grow fast in a team environment.',
  },
  {
    label: 'Future · 2026+',
    title: 'AI Engineer & Agent Builder',
    description:
      'Long-term goal: building intelligent, autonomous AI systems. Every project I do today is a step toward this.',
  },
];

export const contactLinks = [
  { label: 'Email', value: 'your@email.com', href: 'mailto:your@email.com' },
  { label: 'GitHub', value: 'github.com/yourusername', href: 'https://github.com/yourusername' },
  { label: 'LinkedIn', value: 'linkedin.com/in/yourusername', href: 'https://linkedin.com/in/yourusername' },
];
