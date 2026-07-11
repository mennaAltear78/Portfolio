import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../Hooks/Auth-context";
import myprofile from "../assets/Adobe Express - file.png";
import { projects } from "./index";
import {
  Code2,
  Boxes,
  Sparkles,
  ArrowUpRight,
  ChevronDown,
  Mail,
  MapPin,
  Briefcase,
  MessageCircle,
} from "lucide-react";

const ROLES = [
  "Front-End Engineer",
  "React & Next.js Developer",
  "Real-Time Interfaces",
  "Three.js / WebGL",
  "Component Systems",
];

function useTypewriter(words, typeSpeed = 55, deleteSpeed = 30, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout;
    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout = setTimeout(() => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        );
      }, deleting ? deleteSpeed : typeSpeed);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

const ORBIT_BADGES = [
  { label: "React", angle: 20, delay: "0s" },
  { label: "Next.js", angle: 130, delay: "0.6s" },
  { label: "TypeScript", angle: 210, delay: "1.2s" },
  { label: "Three.js", angle: 300, delay: "1.8s" },
  { label: "Streaming", angle: 300, delay: "1.1s" },
];

function Home() {
  // const ctx = useContext(AuthContext);
  const typed = useTypewriter(ROLES);
  const previewProjects = projects.slice(0, 3);

  return (
    <div className="relative w-full bg-[#0A0714] text-[#F5F3FF]">
      <style>{`
        @keyframes blobMove {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -30px) scale(1.08); }
          66% { transform: translate(-30px, 20px) scale(0.95); }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes ringSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes ringSpinReverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceSm {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(6px); opacity: 1; }
        }
        .font-display { font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif; }
        .font-body { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .font-mono-label { font-family: 'JetBrains Mono', ui-monospace, monospace; }
        .fade-up { animation: fadeUp 0.7s ease-out both; }
        .orbit-ring { animation: ringSpin 26s linear infinite; }
        .badge-counter-spin { animation: ringSpinReverse 26s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .orbit-ring, .badge-counter-spin, .blob-a, .blob-b, .blob-c, .blob-d, .contact-float { animation: none !important; }
        }
      `}</style>

      {/* ============ HERO ============ */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center">
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#C4B5FD 1px, transparent 1px), linear-gradient(90deg, #C4B5FD 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
          }}
        />
        <div
          className="blob-a absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full blur-[110px] opacity-40 pointer-events-none"
          style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)", animation: "blobMove 14s ease-in-out infinite" }}
        />
        <div
          className="blob-b absolute bottom-[-10%] right-[5%] w-[380px] h-[380px] rounded-full blur-[110px] opacity-30 pointer-events-none"
          style={{ background: "radial-gradient(circle, #F472B6, transparent 70%)", animation: "blobMove 18s ease-in-out infinite reverse" }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 sm:gap-12 lg:gap-16 items-center py-16 sm:py-20 lg:py-0">
          <div className="fade-up">
            <div className="font-mono-label inline-flex items-center gap-2 text-xs tracking-wider uppercase text-[#C4B5FD] border border-[#7C3AED]/40 bg-[#7C3AED]/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] shadow-[0_0_8px_#4ADE80]" />
              Open to new roles · Alexandria, EG
            </div>

            <h1 className="font-display font-bold leading-[1.05] text-4xl sm:text-5xl lg:text-6xl">
              <span className="text-white">Menna Altear</span>
              <br />
              <span className="bg-gradient-to-r from-[#C4B5FD] via-[#A78BFA] to-[#F472B6] text-transparent bg-clip-text">
                builds interfaces
              </span>
              <br />
              <span className="text-white">that feel alive.</span>
            </h1>

            <p className="font-body text-[#C4B5FD]/90 text-lg sm:text-xl lg:text-2xl mt-6 min-h-[2.25rem]">
              {typed}
              <span className="inline-block w-[2px] h-6 bg-[#C4B5FD] ml-1 align-middle animate-pulse" />
            </p>

            <p className="font-body text-[#F5F3FF]/60 text-sm sm:text-base mt-5 max-w-md leading-relaxed">
              Front-end engineer shipping production React &amp; Next.js
              applications — from design systems to real-time, WebGL-powered
              experiences.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-9">
              <Link
                to="/projects"
                className="group font-body font-medium inline-flex items-center gap-2 rounded-full px-5 sm:px-6 py-3 text-sm sm:text-base text-[#0A0714] bg-gradient-to-r from-[#C4B5FD] to-[#A78BFA] hover:shadow-[0_0_30px_-5px_#A78BFA] transition-shadow duration-300"
              >
                View My Work
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/contact"
                className="font-body font-medium inline-flex items-center gap-2 rounded-full px-5 sm:px-6 py-3 text-sm sm:text-base border border-[#C4B5FD]/30 text-[#F5F3FF] hover:bg-white/5 transition-colors duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[420px] aspect-square fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="orbit-ring absolute inset-0 rounded-full border border-dashed border-[#A78BFA]/25" />
            <div className="absolute inset-[14%] rounded-full overflow-hidden ring-2 ring-[#C4B5FD]/40 shadow-[0_0_60px_-10px_#7C3AED]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/20 to-transparent z-10" />
              <img src={myprofile} alt="Menna Altear" className="w-full h-full object-cover" />
            </div>
            {ORBIT_BADGES.map(({ label, angle, delay }) => (
              <div key={label} className="orbit-ring absolute inset-0" style={{ animationDuration: "26s" }}>
                {/* position at fixed angle/radius around the ring */}
                <div
                  className="absolute top-1/2 left-1/2"
                  style={{ transform: `rotate(${angle}deg) translate(190px)` }}
                >
                  {/* counter-rotate so the label stays upright as the ring spins */}
                  <div className="badge-counter-spin" style={{ animationDuration: "26s" }}>
                    {/* center the badge on its anchor point */}
                    <div style={{ transform: "translate(-50%, -50%)" }}>
                      <span
                        className="block font-mono-label text-[11px] whitespace-nowrap bg-[#150C29] border border-[#A78BFA]/30 text-[#E9D5FF] rounded-full px-3 py-1.5 shadow-lg"
                        style={{ animation: "floatY 3.5s ease-in-out infinite", animationDelay: delay }}
                      >
                        {label}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#C4B5FD]/50 font-mono-label text-[10px] tracking-widest uppercase">
          Scroll
          <ChevronDown className="w-4 h-4" style={{ animation: "bounceSm 1.8s ease-in-out infinite" }} />
        </div>
      </section>

      {/* ============ ABOUT BRIEF ============ */}
      <section className="relative w-full overflow-hidden py-24 border-t border-white/5">
        <div
          className="blob-c absolute top-0 left-[10%] w-[340px] h-[340px] rounded-full blur-[110px] opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)", animation: "blobMove 18s ease-in-out infinite" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 fade-up">
          <div className="font-mono-label inline-flex items-center gap-2 text-xs tracking-wider uppercase text-[#C4B5FD] border border-[#7C3AED]/40 bg-[#7C3AED]/10 rounded-full px-4 py-1.5 mb-6">
            About
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6">
            A bit about <span className="bg-gradient-to-r from-[#C4B5FD] to-[#F472B6] text-transparent bg-clip-text">me</span>
          </h2>
          <p className="font-body text-[#F5F3FF]/70 leading-relaxed max-w-2xl mb-8">
            Currently shipping enterprise dashboards at Digiations and a
            real-time, LiveKit-powered streaming platform at Genius AI. My
            work spans component architecture, design systems, and
            interactive features built on the Media Devices, Canvas, and
            WebGL APIs — backed by a Computer Science degree from
            Alexandria University (Highest Honors, CGPA 3.69/4.0) and a
            background in mentoring and teaching front-end fundamentals.
          </p>
          <Link
            to="/about"
            className="group font-body font-medium inline-flex items-center gap-2 rounded-full px-6 py-3 border border-[#C4B5FD]/30 text-[#F5F3FF] hover:bg-white/5 transition-colors duration-300"
          >
            <Briefcase className="w-4 h-4" />
            View Full Story
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-10 pt-6 border-t border-white/10 text-[#F5F3FF]/50">
            {[
              { icon: Code2, label: "React · Next.js · TypeScript" },
              { icon: Boxes, label: "Design Systems" },
              { icon: Sparkles, label: "Three.js · WebGL" },
              { icon: Sparkles, label: "Streaming" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="font-mono-label flex items-center gap-2 text-xs">
                <Icon className="w-3.5 h-3.5" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROJECTS PREVIEW ============ */}
      <section className="relative w-full overflow-hidden py-24 border-t border-white/5">
        <div
          className="blob-d absolute bottom-0 right-[8%] w-[340px] h-[340px] rounded-full blur-[110px] opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #F472B6, transparent 70%)", animation: "blobMove 20s ease-in-out infinite reverse" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="fade-up flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <div className="font-mono-label inline-flex items-center gap-2 text-xs tracking-wider uppercase text-[#C4B5FD] border border-[#7C3AED]/40 bg-[#7C3AED]/10 rounded-full px-4 py-1.5 mb-6">
                Selected Work
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl">
                A few <span className="bg-gradient-to-r from-[#C4B5FD] to-[#F472B6] text-transparent bg-clip-text">projects</span>
              </h2>
            </div>
            <Link
              to="/projects"
              className="group font-body font-medium inline-flex items-center gap-2 rounded-full px-6 py-3 border border-[#C4B5FD]/30 text-[#F5F3FF] hover:bg-white/5 transition-colors duration-300 shrink-0"
            >
              See All Projects
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 fade-up" style={{ animationDelay: "0.1s" }}>
            {previewProjects.map((project, i) => (
              <Link
                to="/projects"
                key={project.name || i}
                className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-[#A78BFA]/40 hover:-translate-y-1 transition-all duration-300"
              >
                {project.imge && (
                  <div className="rounded-lg overflow-hidden border border-white/10 mb-4 aspect-video">
                    <img src={project.imge} alt={project.name} className="w-full h-full object-cover" />
                  </div>
                )}
                <h3 className="font-display font-semibold text-base text-white flex items-center justify-between gap-2">
                  {project.name}
                  <ArrowUpRight className="w-4 h-4 text-[#C4B5FD]/50 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#C4B5FD]" />
                </h3>
                <p className="font-body text-sm text-[#F5F3FF]/60 mt-2 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT CTA ============ */}
      <section className="relative w-full overflow-hidden py-24 border-t border-white/5">
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center fade-up">
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
            Let's build{" "}
            <span className="bg-gradient-to-r from-[#C4B5FD] via-[#A78BFA] to-[#F472B6] text-transparent bg-clip-text">
              something together.
            </span>
          </h2>
          <p className="font-body text-[#F5F3FF]/60 mb-8 max-w-md mx-auto">
            Have a project, a role, or just a front-end question? I read
            every message myself.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Link
              to="/contact"
              className="group font-body font-medium inline-flex items-center gap-2 rounded-full px-6 py-3 text-[#0A0714] bg-gradient-to-r from-[#C4B5FD] to-[#A78BFA] hover:shadow-[0_0_30px_-5px_#A78BFA] transition-shadow duration-300"
            >
              <Mail className="w-4 h-4" />
              Get In Touch
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <div className="font-mono-label flex items-center justify-center gap-2 text-xs text-[#F5F3FF]/40">
            <MapPin className="w-3.5 h-3.5" /> Alexandria, Egypt
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/201202033027"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-medium text-white shadow-[0_10px_30px_-10px_#25D366] transition-transform duration-300 hover:scale-105"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </div>
  );
}

export default Home;