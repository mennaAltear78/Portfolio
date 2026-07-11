import React from "react";
import { skills } from "./index";
import { GraduationCap, Award, Briefcase } from "lucide-react";

const EXPERIENCE = [
  {
    role: "Front-End Developer",
    org: "Digiations",
    meta: "Riyadh, Saudi Arabia (Remote)",
    period: "Oct 2025 — Present",
    points: [
      "Built and maintained 4+ enterprise dashboard applications using React, TypeScript, and Tailwind CSS for internal client products.",
      "Contributed reusable components to the company’s internal Design System and helped standardize UI patterns across projects.",
      "Integrated FastAPI REST APIs with JWT-based authentication, role-based access, pagination, advanced filtering, and complex multi-step forms.",
      "Improved performance and maintainability through rendering optimizations, component refactoring, and Agile sprint debugging.",
    ],
  },
  {
    role: "Front-End Developer",
    org: "Genius AI",
    meta: "Remote",
    period: "Jul 2025 — Present",
    points: [
      "Improved a production gym-management platform’s performance by 40% by profiling render cycles and applying targeted memoization.",
      "Built the front-end architecture for a live-streaming platform using React and LiveKit, including room join/leave logic and real-time participant management.",
      "Engineered camera and microphone controls with the Media Devices API, and implemented Canvas-based rendering for synchronized streaming experiences.",
      "Used Framer Motion to deliver polished, production-quality UI animations and interactions.",
    ],
  },
  {
    role: "Coding Instructor",
    org: "G7",
    meta: "Alexandria, Egypt",
    period: "Jun 2024 — Jul 2025",
    points: [
      "Designed and delivered a structured programming curriculum and mentored students through coding projects with personalized technical guidance.",
      "Earned the government-accredited Training of Trainers (TOT) Certificate in Feb 2025 for instructional and curriculum-design competency.",
    ],
  },
  {
    role: "Front-End Instructor",
    org: "Semicolon",
    meta: "Alexandria, Egypt",
    period: "Jul 2024 — Sep 2024",
    points: [
      "Taught HTML, CSS, JavaScript, and React fundamentals through interactive exercises and mini-projects.",
      "Delivered one-on-one code reviews and mentoring sessions that helped learners turn concepts into working applications.",
    ],
  },
  {
    role: "React.js Training & WordPress Dev Intern",
    org: "ITI Summer Training / i-fkra",
    meta: "Alexandria, Egypt",
    period: "Aug 2024 — Sep 2025",
    points: [
      "Completed an intensive React.js training track covering HTML5, CSS3, Bootstrap, and JavaScript.",
      "Developed two client WordPress sites with responsive layouts and plugin integrations.",
    ],
  },
];

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Python", "Java", "Dart"],
  },
  {
    title: "Frontend Frameworks & Libraries",
    items: [
      "React.js",
      "Next.js",
      "Three.js",
      "TensorFlow.js",
      "Tailwind CSS",
      "Bootstrap",
      "Chakra UI",
      "shadcn/ui",
      "Framer Motion",
      "Flutter",
    ],
  },
  {
    title: "State Management & Auth",
    items: ["Redux", "Clerk", "JWT Authentication"],
  },
  {
    title: "Real-Time & Media",
    items: ["LiveKit", "Media Devices API", "Canvas API", "WebGL"],
  },
  {
    title: "Backend Integration & APIs",
    items: ["REST APIs", "FastAPI", "CRUD Operations", "Role-Based Access Control"],
  },
  {
    title: "Databases & ORMs",
    items: ["MongoDB", "Prisma", "SQL Server", "MySQL"],
  },
  {
    title: "Tools & DevOps",
    items: ["Git", "GitHub", "Docker", "Vercel", "Visual Studio", "Postman"],
  },
  {
    title: "Core Concepts",
    items: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "Component Architecture",
      "Design Systems",
      "Responsive Design",
      "Accessibility",
      "Cross-Browser Compatibility",
      "Agile",
    ],
  },
  {
    title: "Additional Expertise",
    items: [
      "Human-Computer Interaction (HCI)",
      "Discrete Mathematics",
      "Operating Systems",
      "Image Processing",
      "Machine Learning",
    ],
  },
];

function About() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A0714] text-[#F5F3FF] py-24">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blobMove {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -30px) scale(1.08); }
          66% { transform: translate(-30px, 20px) scale(0.95); }
        }
        .font-display { font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif; }
        .font-body { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .font-mono-label { font-family: 'JetBrains Mono', ui-monospace, monospace; }
        .fade-up { animation: fadeUp 0.7s ease-out both; }
        @media (prefers-reduced-motion: reduce) {
          .blob-a, .blob-b { animation: none !important; }
        }
      `}</style>

      {/* ambient background */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#C4B5FD 1px, transparent 1px), linear-gradient(90deg, #C4B5FD 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 100%)",
        }}
      />
      <div
        className="blob-a absolute top-0 left-[10%] w-[380px] h-[380px] rounded-full blur-[110px] opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)", animation: "blobMove 18s ease-in-out infinite" }}
      />
      <div
        className="blob-b absolute bottom-0 right-[8%] w-[340px] h-[340px] rounded-full blur-[110px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #F472B6, transparent 70%)", animation: "blobMove 22s ease-in-out infinite reverse" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* intro */}
        <div className="fade-up">
          <div className="font-mono-label inline-flex items-center gap-2 text-xs tracking-wider uppercase text-[#C4B5FD] border border-[#7C3AED]/40 bg-[#7C3AED]/10 rounded-full px-4 py-1.5 mb-6">
            About
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl leading-tight mb-6">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-[#C4B5FD] via-[#A78BFA] to-[#F472B6] text-transparent bg-clip-text">
              Menna Altear
            </span>
          </h1>

          <p className="font-body text-[#F5F3FF]/70 leading-relaxed">
            Front-End Engineer with production experience building and maintaining enterprise-grade React and Next.js applications. My work spans component architecture, design systems, REST API integration, and real-time interactive features, with a track record of improving application performance and collaborating cross-functionally with backend and design teams.
            <br /><br />
            I hold a Bachelor’s in Computer Science from Alexandria University (2021 – 2025, Highest Honors, CGPA 3.69/4.0), and alongside development work I’ve spent over a year mentoring and teaching front-end fundamentals — work recognized with a government-accredited Training of Trainers certificate.
          </p>
        </div>

        {/* experience timeline */}
        <div className="mt-16 fade-up" style={{ animationDelay: "0.1s" }}>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 mb-10">
            <h2 className="font-display font-bold text-2xl mb-3 text-[#E9D5FF]">Professional Summary</h2>
            <p className="font-body text-sm text-[#F5F3FF]/70 leading-relaxed">
              Front-End Engineer with production experience building and maintaining enterprise-grade React and Next.js applications. Skilled in component architecture, design systems, REST API integration, and real-time interactive features, with a track record of improving application performance and collaborating closely with backend and design teams.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Design Systems', 'Real-Time Interfaces', 'Mentoring'].map((tag) => (
                <span key={tag} className="font-mono-label text-[10px] uppercase tracking-wider text-[#C4B5FD] border border-[#7C3AED]/30 rounded-full px-3 py-1 bg-[#7C3AED]/10">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-[#A78BFA]/20 bg-[#7C3AED]/10 p-4">
                <h3 className="font-display font-semibold text-base text-[#E9D5FF] mb-2">Streaming</h3>
                <p className="font-body text-sm text-[#F5F3FF]/70 mb-3">
                  Real-time streaming experiences with production-ready features.
                </p>
                <ul className="font-body text-sm text-[#F5F3FF]/70 list-disc list-inside space-y-1">
                  <li>Real-time multi-participant rooms</li>
                  <li>Screen sharing</li>
                  <li>WebRTC & LiveKit integration</li>
                  <li>Participant controls</li>
                  <li>Canvas-based video composition</li>
                  <li>Camera, mic & screen controls</li>
                </ul>
              </div>

              <div className="rounded-lg border border-[#A78BFA]/20 bg-[#7C3AED]/10 p-4">
                <h3 className="font-display font-semibold text-base text-[#E9D5FF] mb-2">Dashboards</h3>
                <p className="font-body text-sm text-[#F5F3FF]/70 mb-3">
                  Data-driven dashboards built for insights and performance.
                </p>
                <ul className="font-body text-sm text-[#F5F3FF]/70 list-disc list-inside space-y-1">
                  <li>Admin & analytics dashboards</li>
                  <li>Interactive charts & metrics</li>
                  <li>Data visualization & reporting</li>
                  <li>Role-based access control</li>
                  <li>REST API integration</li>
                  <li>Reusable components & performance optimization</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="font-display font-bold text-2xl mb-8 flex items-center gap-2 text-[#E9D5FF]">
            <Briefcase className="w-5 h-5 text-[#A78BFA]" />
            Experience
          </h2>

          <div className="relative pl-8 border-l border-white/10 space-y-10">
            {EXPERIENCE.map((job) => (
              <div key={job.role + job.org} className="relative">
                <span className="absolute -left-[35px] top-1.5 w-3 h-3 rounded-full bg-gradient-to-br from-[#C4B5FD] to-[#7C3AED] shadow-[0_0_10px_#7C3AED]" />
                <div className="font-mono-label text-[11px] tracking-wider uppercase text-[#C4B5FD]/70 mb-1">
                  {job.period}
                </div>
                <h3 className="font-display font-semibold text-lg text-white">
                  {job.role} <span className="text-[#A78BFA]">· {job.org}</span>
                </h3>
                <div className="font-body text-sm text-[#F5F3FF]/40 mb-3">{job.meta}</div>
                <ul className="font-body text-sm text-[#F5F3FF]/70 space-y-1.5 list-disc list-inside">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* education + certification */}
        <div className="mt-16 grid sm:grid-cols-2 gap-6 fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-display font-semibold text-lg mb-3 flex items-center gap-2 text-[#E9D5FF]">
              <GraduationCap className="w-4.5 h-4.5 text-[#A78BFA]" />
              Education
            </h3>
            <div className="font-body text-sm text-[#F5F3FF]/70 leading-relaxed">
              <div className="text-white font-medium">Bachelor's Degree in Computer Science</div>
              <div className="text-[#F5F3FF]/50">Faculty of Science, Alexandria University</div>
              <div className="font-mono-label text-[11px] text-[#C4B5FD]/70 mt-2">Sept 2021 — Jul 2025</div>
              <div className="mt-2">Graduated with Highest Honors (Excellent with Distinction), CGPA 3.69/4.0</div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-display font-semibold text-lg mb-3 flex items-center gap-2 text-[#E9D5FF]">
              <Award className="w-4.5 h-4.5 text-[#A78BFA]" />
              Certification
            </h3>
            <div className="font-body text-sm text-[#F5F3FF]/70 leading-relaxed">
              <div className="text-white font-medium">Training of Trainers (TOT)</div>
              <div className="font-mono-label text-[11px] text-[#C4B5FD]/70 mt-2">Feb 2025</div>
              <div className="mt-2">Government-accredited certificate in instructional and curriculum-design competency.</div>
            </div>
          </div>
        </div>

        {/* skills */}
        <div className="mt-16 fade-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="font-display font-bold text-2xl mb-8 text-[#E9D5FF]">My Skills</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {skills.map((skill) => (
              <div className="group flex flex-col items-center gap-2" key={skill.name}>
                <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex justify-center items-center transition-all duration-300 group-hover:border-[#A78BFA]/50 group-hover:shadow-[0_0_20px_-4px_#7C3AED] group-hover:-translate-y-1">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
                <span className="font-mono-label text-[10px] text-[#F5F3FF]/40">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* detailed technical skills, grouped as on the CV */}
        <div className="mt-16 fade-up" style={{ animationDelay: "0.25s" }}>
          <h2 className="font-display font-bold text-2xl mb-8 text-[#E9D5FF]">Technical Skills</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {SKILL_CATEGORIES.map((group) => (
              <div key={group.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="font-mono-label text-[11px] tracking-wider uppercase text-[#C4B5FD]/70 mb-3">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-body text-xs text-[#F5F3FF]/80 bg-white/5 border border-white/10 rounded-full px-3 py-1 hover:border-[#A78BFA]/50 hover:text-white transition-colors"
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