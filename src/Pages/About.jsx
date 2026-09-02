import React from "react";
import { skills } from "./index";
import { GraduationCap, Briefcase, Code2, Server, Activity, Database } from "lucide-react";

// Highlight specific technical keywords in experience bullets
const HIGHLIGHTS = [
  // Products / Domains
  { words: ["dashboard", "dashboards", "enterprise dashboard", "4+ enterprise dashboard applications"], color: "text-[#60A5FA] font-medium" },
  { words: ["live streaming platform", "streaming platform", "real-time live streaming"], color: "text-[#4ADE80] font-medium" },
  { words: ["Design System"], color: "text-[#C4B5FD] font-medium" },
  { words: ["fitness management platform"], color: "text-[#F59E0B] font-medium" },
  // Technologies
  { words: ["React", "TypeScript", "Tailwind CSS", "Vite", "LiveKit", "WebRTC", "FastAPI", "JWT", "Canvas API", "MediaPipe", "Media Devices API", "React Router"], color: "text-[#A78BFA] font-medium" },
  // Actions / Achievements
  { words: ["~40%", "approximately 40%"], color: "text-[#4ADE80] font-semibold" },
];

function highlightText(text) {
  // Build a sorted list of all keyword occurrences in the text
  const segments = [];
  HIGHLIGHTS.forEach(({ words, color }) => {
    words.forEach((word) => {
      const regex = new RegExp(`(${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, "gi");
      let match;
      while ((match = regex.exec(text)) !== null) {
        segments.push({ start: match.index, end: match.index + match[0].length, color, found: match[0] });
      }
    });
  });

  if (segments.length === 0) return text;

  // Sort by start, remove overlaps
  segments.sort((a, b) => a.start - b.start);
  const merged = [];
  for (const seg of segments) {
    if (merged.length && seg.start < merged[merged.length - 1].end) continue;
    merged.push(seg);
  }

  const parts = [];
  let cursor = 0;
  merged.forEach(({ start, end, color, found }, i) => {
    if (cursor < start) parts.push(<span key={`t-${i}`}>{text.slice(cursor, start)}</span>);
    parts.push(<span key={`h-${i}`} className={color}>{found}</span>);
    cursor = end;
  });
  if (cursor < text.length) parts.push(<span key="tail">{text.slice(cursor)}</span>);
  return parts;
}

const EXPERIENCE = [
  {
    role: "Front-End Developer",
    org: "Digiations",
    meta: "Riyadh, Saudi Arabia — Remote",
    period: "Sep 2025 — Aug 2026",
    points: [
      "Developed and maintained 4+ enterprise dashboard applications using React, TypeScript, Tailwind CSS, and Vite for multiple enterprise clients.",
      "Built and enhanced the company's internal Design System using reusable UI components and standardized design patterns.",
      "Integrated REST APIs with FastAPI backends, implementing JWT authentication, role-based access control, CRUD operations, pagination, advanced filtering, search, and complex multi-step forms.",
      "Optimized React applications through component refactoring, memoization, rendering improvements, and production issue resolution.",
      "Collaborated with cross-functional teams in an Agile/Scrum environment using Git and Docker."
    ],
    primary: true
  },
  {
    role: "Front-End Developer",
    org: "Genius AI",
    meta: "Remote (Part-Time)",
    period: "Jul 2025 — Aug 2026",
    points: [
      "Refactored a production fitness management platform and improved application performance by approximately 40% through React profiling, memoization, component optimization, and elimination of unnecessary re-renders.",
      "Developed the frontend architecture of a real-time live streaming platform using React, TypeScript, LiveKit, and WebRTC.",
      "Implemented multi-participant rooms, room lifecycle management, and real-time synchronization.",
      "Built camera, microphone, device selection, live switching, mute/unmute controls, and fallback mechanisms using the Media Devices API.",
      "Built a real-time streaming studio using Canvas API for video composition and implemented a real-time Virtual Background feature using MediaPipe."
    ],
    primary: true
  },
  {
    role: "Teaching Assistant",
    org: "Faculty of Science, Alexandria University",
    meta: "Alexandria, Egypt (Part-Time)",
    period: "Sep 2025 — Jun 2026",
    points: [
      "Assisted in teaching undergraduate Computer Science courses.",
      "Supported laboratory sessions, practical assignments, and programming exercises.",
      "Mentored students in software development, debugging, problem-solving, and programming best practices."
    ],
    primary: false
  },
  {
    role: "Programming Instructor",
    org: "Preply",
    meta: "Remote (Freelance)",
    period: "Jan 2026 — Present",
    points: [
      "Delivered one-on-one programming lessons to international students.",
      "Explained programming concepts and coding practices in clear, accessible English.",
      "Adapted technical explanations and hands-on coding exercises to different learning levels."
    ],
    primary: false
  },
  {
    role: "React.js & WordPress Development Intern",
    org: "ITI Summer Training / i-fkra",
    meta: "Alexandria, Egypt",
    period: "Aug 2024 — Sep 2024",
    points: [
      "Completed intensive training in React.js, JavaScript, HTML5, CSS3, Bootstrap, and WordPress.",
      "Developed responsive websites using modern UI practices and plugin integration."
    ],
    primary: false
  },
];

const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    items: ["Python", "JavaScript", "TypeScript", "Java", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "React Router", "Redux", "Context API", "Tailwind CSS", "Bootstrap", "Chakra UI", "shadcn/ui", "Framer Motion", "Three.js", "TensorFlow.js"],
  },
  {
    title: "Backend & APIs",
    items: ["FastAPI", "RESTful APIs", "JWT Authentication", "RBAC", "CRUD Operations"],
  },
  {
    title: "Real-Time & Media",
    items: ["LiveKit", "WebRTC", "MediaPipe", "Media Devices API", "Canvas API", "WebGL"],
  },
  {
    title: "AI & Machine Learning",
    items: ["Scikit-learn", "Classification", "Regression", "Model Evaluation", "Feature Engineering"],
  },
  {
    title: "Data Analysis",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Preprocessing", "EDA"],
  },
  {
    title: "Databases & ORMs",
    items: ["MongoDB", "Prisma ORM", "MySQL", "SQL Server", "PostgreSQL"],
  },
  {
    title: "Developer Tools",
    items: ["Git", "GitHub", "Docker", "Vite", "Vercel", "Postman", "VS Code", "npm", "pnpm"],
  },
  {
    title: "Software Engineering",
    items: ["Component Architecture", "Design Systems", "Responsive Web Design", "Accessibility", "Cross-Browser Compatibility", "Performance Optimization", "Data Structures", "Algorithms", "OOP", "Agile/Scrum"],
  },
];

function About() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A0714] text-[#F5F3FF] py-24 min-h-screen">
      
      {/* background */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#C4B5FD 1px, transparent 1px), linear-gradient(90deg, #C4B5FD 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 100%)",
        }}
      />
      <div
        className="absolute top-0 left-[10%] w-[380px] h-[380px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        
        {/* Intro */}
        <div className="fade-up">
          <h1 className="font-display font-bold text-4xl sm:text-5xl leading-tight mb-6 text-white">
            About Me
          </h1>
          <p className="font-body text-[#F5F3FF]/80 leading-relaxed text-lg sm:text-xl max-w-3xl">
Computer Science graduate and Software Engineer with professional experience building production-ready web applications and end-to-end software solutions. Strong expertise in React and TypeScript, with professional experience developing real-time and streaming applications using LiveKit, alongside backend integration, REST APIs, Docker, and Machine Learning. Experienced in building scalable interfaces, real-time communication features, and data-driven applications using modern software technologies.          </p>
        </div>

        {/* Education */}
        <div className="mt-12 fade-up" style={{ animationDelay: "0.1s" }}>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 max-w-3xl flex flex-col sm:flex-row sm:items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/20 border border-[#7C3AED]/40 flex items-center justify-center shrink-0">
              <GraduationCap className="w-6 h-6 text-[#C4B5FD]" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg text-white">Bachelor's Degree in Computer Science</h3>
              <div className="font-body text-sm text-[#F5F3FF]/70 mb-2">Faculty of Science, Alexandria University</div>
              <div className="font-mono-label text-[11px] text-[#C4B5FD]/70 mb-3 uppercase tracking-wider">Sept 2021 – July 2025 • Alexandria, Egypt</div>
              <p className="font-body text-sm text-[#F5F3FF]/90">
                Graduated with Highest Honors <span className="font-mono-label text-[#A78BFA] ml-2">(CGPA: 3.69/4.0)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="mt-20 fade-up" style={{ animationDelay: "0.15s" }}>
          <h2 className="font-display font-bold text-2xl mb-8 text-white">Engineering Pillars</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:border-[#3B82F6]/30 transition-colors">
              <Code2 className="w-6 h-6 text-[#3B82F6] mb-4" />
              <h3 className="font-display font-semibold text-base text-white mb-2">Frontend Engineering</h3>
              <p className="font-body text-xs text-[#F5F3FF]/60 mb-4">React • TypeScript • Next.js</p>
            </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
         <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:border-[#A78BFA]/30 transition-colors">
  <Radio className="w-6 h-6 text-[#A78BFA] mb-4" />
  <h3 className="font-display font-semibold text-base text-white mb-2">
    Real-Time & Streaming
  </h3>
<p className="font-body text-xs text-[#F5F3FF]/60 mb-4">
  LiveKit • Participant Control • Camera & Audio • Screen Sharing • Chat • Virtual Backgrounds • Streaming
</p>
</div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:border-[#10B981]/30 transition-colors">
              <Server className="w-6 h-6 text-[#10B981] mb-4" />
              <h3 className="font-display font-semibold text-base text-white mb-2">Full-Stack & APIs</h3>
              <p className="font-body text-xs text-[#F5F3FF]/60 mb-4">FastAPI • REST APIs • Authentication</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:border-[#F59E0B]/30 transition-colors">
              <Activity className="w-6 h-6 text-[#F59E0B] mb-4" />
              <h3 className="font-display font-semibold text-base text-white mb-2">Real-Time Systems</h3>
              <p className="font-body text-xs text-[#F5F3FF]/60 mb-4">WebRTC • LiveKit • Media APIs</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:border-[#7C3AED]/30 transition-colors">
              <Database className="w-6 h-6 text-[#7C3AED] mb-4" />
              <h3 className="font-display font-semibold text-base text-white mb-2">Machine Learning</h3>
              <p className="font-body text-xs text-[#F5F3FF]/60 mb-4">Python • Scikit-learn • Data Analysis</p>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-20 fade-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="font-display font-bold text-2xl mb-8 flex items-center gap-2 text-white">
            <Briefcase className="w-5 h-5 text-[#A78BFA]" />
            Experience
          </h2>

          <div className="relative pl-6 md:pl-8 border-l border-white/10 space-y-12">
            {EXPERIENCE.map((job) => (
              <div key={job.role + job.org} className={`relative ${!job.primary ? 'opacity-80' : ''}`}>
                <span className={`absolute -left-[31px] md:-left-[39px] top-1.5 w-3 h-3 rounded-full ${job.primary ? 'bg-gradient-to-br from-[#C4B5FD] to-[#7C3AED] shadow-[0_0_10px_#7C3AED]' : 'bg-white/20 border border-white/30'}`} />
                <div className="font-mono-label text-[10px] tracking-wider uppercase text-[#C4B5FD]/70 mb-2">
                  {job.period}
                </div>
                <h3 className="font-display font-bold text-lg md:text-xl text-white">
                  {job.role} <span className="text-[#A78BFA] font-medium">· {job.org}</span>
                </h3>
                <div className="font-body text-xs md:text-sm text-[#F5F3FF]/50 mb-4">{job.meta}</div>
                <ul className="font-body text-sm md:text-base text-[#F5F3FF]/80 space-y-2 list-none">
                  {job.points.map((p, i) => (
                    <li key={i} className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:bg-[#A78BFA] before:rounded-full">
                      {highlightText(p)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Core Skills Summary */}
        <div className="mt-24 fade-up" style={{ animationDelay: "0.25s" }}>
          <h2 className="font-display font-bold text-2xl mb-8 text-white">Primary Technologies</h2>
          <div className="flex flex-wrap gap-4 justify-start">
            {skills.map((skill) => (
              <div key={skill.name} className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.02]">
                {skill.imageUrl && (
                  <img src={skill.imageUrl} alt={skill.name} className="w-5 h-5 object-contain" />
                )}
                <span className="font-body font-medium text-sm text-[#F5F3FF]">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Technical Skills */}
        <div className="mt-16 fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((group) => (
              <div key={group.title} className="rounded-xl border border-white/10 bg-white/[0.01] p-5">
                <h3 className="font-mono-label text-[10px] tracking-wider uppercase text-[#C4B5FD]/70 mb-4">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-body text-xs text-[#F5F3FF]/70 bg-white/5 border border-white/10 rounded-md px-2.5 py-1 hover:border-[#A78BFA]/50 hover:text-white transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default About;