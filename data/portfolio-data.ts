import type { PortfolioData } from "@/types/portfolio"

export const portfolioData: PortfolioData = {
  personal: {
    name: "Jayesh Shete",
    title: "Full Stack Developer & AI Enthusiast",
    email: "jayeshshete1512@gmail.com",
    phone: "+91 8624024320",
    location: "Nagpur, Maharashtra",
    dateOfBirth: "15th December 2004",
    linkedin: "https://linkedin.com/in/jayesh-shete",
    github: "https://github.com/jayesh-shete",
    codolio: "https://codolio.com/jayesh-shete",
    bio: "Passionate developer building innovative solutions while exploring the intersection of technology and creativity. When not coding, you'll find me cheering for my favorite football team or analyzing F1 race strategies.",
  },
  education: [
    {
      degree: "BTech, Computer Science and Engineering",
      institution: "Shri Ramdeobaba College of Engineering and Management",
      duration: "2022 - 2026",
      grade: "CGPA: 9.53/10",
    },
    {
      degree: "Class 12, State Board",
      institution: "Saint Paul Jr. College, Nagpur",
      duration: "2021 - 2022",
      grade: "Aggregate: 90%",
    },
  ],
  experience: [
    {
      title: "Full Stack Web Developer",
      company: "Star Origin Business Solutions",
      duration: "Sept 2024 - March 2025",
      description: [
        "Developed and deployed 4+ SEO-friendly, production-grade websites, improving average load speed by ~30%",
        "Integrated web scraping scripts with CRON jobs for real-time Amazon price tracking",
      ],
      certificate: "Available",
    },
    {
      title: "Frontend Web Developer",
      company: "Kwik Twik Technologies Private Limited",
      duration: "March 2024 - April 2024",
      description: [
        "Designed SEO-optimized, responsive UI templates using Next.js and TailwindCSS",
        "Ensured pixel-perfect design implementation and cross-browser compatibility",
      ],
      certificate: "Available",
    },
    {
      title: "Freelance Engineer",
      company: "Outlier",
      duration: "Ongoing",
      description: [
        "Developed complex prompts to test AI model limitations",
        "Collaborated on identifying edge cases for large language model refinement",
      ],
    },
  ],
  projects: [
    {
      title: "ImpostrX - Fake Instagram Profile Detection",
      description:
        "AI-powered system for detecting fake social media profiles with real-time cybercrime data integration",
      technologies: ["Python", "Flask", "Node.js", "React", "TesseractJS", "Gemini API", "Firebase"],
      link: "",
      code : "https://github.com/Jayesh1512/impostrx"
    },
    {
      title: "Ink-spect - Fake Signature Detection",
      description: "Vision Transformer-based system for signature authenticity verification",
      technologies: ["Python", "PyTorch", "Vision Transformers", "NumPy", "Matplotlib"],
      supervisor: "Prof. Rina Damdoo, RCOEM Nagpur",
      code: "https://github.com/Jayesh1512/ink-spect"
    },
    {
      title: "Job Critique - Job Data Analyser",
      description: "Scalable data warehouse analyzing 65,000+ job listings for market insights",
      technologies: ["Snowflake", "SQL", "Python", "Streamlit", "Pandas"],
      code: "https://github.com/Jayesh1512/job-critique",
    },
  ],
  skills: [
    {
      category: "Programming & Languages",
      items: ["C", "C++", "Java", "JavaScript", "Python", "SQL", "Ruby", "HTML", "CSS"],
    },
    {
      category: "Frameworks & Tools",
      items: ["ReactJS", "Next.js", "TailwindCSS", "NodeJS", "ExpressJS", "Docker", "Git", "Puppeteer"],
    },
    {
      category: "Cloud & Data Technologies",
      items: ["AWS", "Google Cloud Platform", "Snowflake", "AWS Redshift", "PowerBI", "MongoDB", "Firebase", "Oracle"],
    },
  ],
  achievements: [
    {
      title: "AWS Cloud Practitioner Certified",
      description: "Amazon Web Services certification demonstrating cloud computing knowledge",
      certificate: "Available",
    },
    {
      title: "Cyber-Hack 2024 Winner",
      description: "Winner at Nagpur Police hackathon for fake account detection using ML",
      date: "Feb 2025",
    },
    {
      title: "Filecoin AI Blueprints Hackathon",
      description: "1st Place Randamu Bounty Winner and 3rd Place overall",
      date: "2024",
    },
    {
      title: "Cambridge ESOL Certification",
      description: "English language proficiency certification",
      certificate: "Available",
    },
  ],
  interests: [
    {
      name: "Football",
      icon: "Trophy",
      description: "Passionate about the beautiful game and tactical analysis",
    },
    {
      name: "Formula 1",
      icon: "Zap",
      description: "Following the fastest sport on earth and engineering marvels",
    },
    {
      name: "Music",
      icon: "Music",
      description: "Music fuels creativity and coding sessions",
    },
  ],
}
