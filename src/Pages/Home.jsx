import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronDown, Mail } from "lucide-react";
import { featuredProjects } from "./index";
import ProjectModal from "../components/ProjectModal";
import myprofile from "../assets/Adobe Express - file.png";
import { react, typescript, javascript, nextjs, fastapi, docker, git, mongodb } from "../assets/icons";
import mlIcon from "../assets/icons/ml.png";

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

const ROLES = [
  "Building scalable web applications.",
  "Engineering real-time experiences.",
  "Developing data-driven solutions."
];

function Home() {
  const typed = useTypewriter(ROLES);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="relative w-full bg-[#0A0714] text-[#F5F3FF] min-h-screen pt-20">
      
      {/* ============ HERO ============ */}
      <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center">
        {/* Background Grids & Orbs */}
        <div
          className="absolute inset-0 opacity-[0.10] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(#C4B5FD 1px, transparent 1px), linear-gradient(90deg, #C4B5FD 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
          }}
        />
        <div
          className="blob-a absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full blur-[120px] opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)" }}
        />
        <div
          className="blob-b absolute bottom-[-10%] right-[5%] w-[380px] h-[380px] rounded-full blur-[120px] opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #10B981, transparent 70%)" }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-16 items-center">
          
          <div className="fade-up order-2 lg:order-1">
            <div className="font-mono-label inline-flex items-center gap-2 text-[10px] sm:text-xs tracking-wider uppercase text-[#C4B5FD] border border-[#7C3AED]/30 bg-[#7C3AED]/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] shadow-[0_0_8px_#4ADE80]" />
              Alexandria, Egypt
            </div>

            <h1 className="font-display font-bold leading-[1.1] text-4xl sm:text-5xl lg:text-[64px] mb-4">
              Menna Altear
            </h1>
            
            <h2 className="font-display font-medium text-xl sm:text-2xl lg:text-3xl text-[#C4B5FD] mb-4">
              Software Engineer
            </h2>
            
            <div className="font-mono-label text-xs sm:text-sm text-[#F5F3FF]/50 uppercase tracking-widest mb-6">
Front-End Developer • ML Knowledge
            </div>

            <p className="font-body text-[#F5F3FF]/80 text-lg sm:text-xl lg:text-2xl min-h-[3rem] mb-10">
              {typed}
              <span className="inline-block w-[2px] h-6 bg-[#C4B5FD] ml-1 align-middle animate-pulse" />
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="group font-body font-medium inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm sm:text-base text-[#0A0714] bg-gradient-to-r from-[#C4B5FD] to-[#A78BFA] hover:shadow-[0_0_30px_-5px_#A78BFA] transition-shadow duration-300"
              >
                View Projects
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/contact"
                className="font-body font-medium inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm sm:text-base border border-white/20 text-[#F5F3FF] hover:bg-white/5 hover:border-white/40 transition-colors duration-300"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* ===== Profile + Orbiting Skills ===== */}
          <div
            className="relative mx-auto w-full max-w-[340px] lg:max-w-[420px] aspect-square fade-up order-1 lg:order-2 flex items-center justify-center"
            style={{ animationDelay: "0.15s" }}
          >
            {/* Orbit ring 1 (outer) */}
            <div
              className="absolute rounded-full border border-dashed border-[#A78BFA]/20 pointer-events-none"
              style={{
                inset: "0%",
                animation: "orbitRing1 30s linear infinite",
              }}
            >
              {[react, typescript, javascript, nextjs, docker, fastapi, git, mongodb, mlIcon].map((icon, i) => {
                const angle = (i / 9) * 2 * Math.PI;
                const x = 50 + 50 * Math.cos(angle);
                const y = 50 + 50 * Math.sin(angle);
                return (
                  <div
                    key={i}
                    className="absolute w-9 h-9 rounded-xl bg-[#0A0714] border border-white/10 shadow-lg flex items-center justify-center"
                    style={{
                      left: `calc(${x}% - 18px)`,
                      top: `calc(${y}% - 18px)`,
                      animation: `orbitIconCounter1 30s linear infinite`,
                    }}
                  >
                    <img src={icon} alt="" className="w-5 h-5 object-contain" />
                  </div>
                );
              })}
            </div>

            {/* Profile photo */}
            <div className="relative w-[62%] aspect-square rounded-full overflow-hidden ring-2 ring-[#C4B5FD]/50 shadow-[0_0_60px_-10px_rgba(124,58,237,0.6)] z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/20 to-transparent z-10 pointer-events-none" />
              <img
                src={myprofile}
                alt="Menna Altear"
                className="w-full h-full object-cover"
              />
            </div>

            <style>{`
              @keyframes orbitRing1 {
                from { transform: rotate(0deg); }
                to   { transform: rotate(360deg); }
              }
              @keyframes orbitIconCounter1 {
                from { transform: rotate(0deg); }
                to   { transform: rotate(-360deg); }
              }
            `}</style>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#C4B5FD]/50 font-mono-label text-[10px] tracking-widest uppercase">
          <ChevronDown className="w-4 h-4" style={{ animation: "floatY 2s ease-in-out infinite" }} />
        </div>
      </section>

      {/* ============ FEATURED PROJECTS ============ */}
      <section className="relative w-full overflow-hidden py-24 border-t border-white/5">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="fade-up flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-2">
                Featured Work
              </h2>
              <p className="font-body text-[#F5F3FF]/60 text-base max-w-2xl">
                A selection of end-to-end platforms and systems demonstrating my capability across the stack.
              </p>
            </div>
            <Link
              to="/projects"
              className="group font-body font-medium inline-flex items-center gap-2 text-sm text-[#C4B5FD] hover:text-white transition-colors"
            >
              View all projects
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 fade-up" style={{ animationDelay: "0.1s" }}>
            {featuredProjects.map((project, idx) => (
              <div
                key={project.name}
                className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-[#A78BFA]/30 transition-all duration-300 h-full"
              >
                <div className="p-6 flex flex-col h-full z-10">
                  <div className="font-mono-label text-[10px] uppercase tracking-wider text-[#C4B5FD] mb-4">
                    {project.category}
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-3 leading-tight group-hover:text-[#E9D5FF] transition-colors">
                    {project.name}
                  </h3>
                  <p className="font-body text-[#F5F3FF]/60 text-sm leading-relaxed mb-6 flex-grow line-clamp-4">
                    {project.problem}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.slice(0,4).map(tech => (
                      <span key={tech} className="font-mono-label text-[10px] text-[#F5F3FF]/40 border border-white/10 rounded-md px-2 py-1">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="font-mono-label text-[10px] text-[#F5F3FF]/40 border border-transparent px-1 py-1">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="mt-auto w-full py-3 rounded-lg border border-[#A78BFA]/30 text-sm font-medium text-[#E9D5FF] hover:bg-[#7C3AED]/20 transition-colors flex items-center justify-center gap-2"
                  >
                    Engineering Case Study
                  </button>
                </div>
                
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/0 to-[#7C3AED]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT TEASER ============ */}
      <section className="relative w-full overflow-hidden py-24 border-t border-white/5">
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center fade-up">
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
            Let's build{" "}
            <span className="bg-gradient-to-r from-[#C4B5FD] via-[#A78BFA] to-[#F472B6] text-transparent bg-clip-text">
              something together.
            </span>
          </h2>
          <p className="font-body text-[#F5F3FF]/60 mb-8 max-w-md mx-auto">
            Have a project, a role, or just a technical question? Let's connect.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Link
              to="/contact"
              className="group font-body font-medium inline-flex items-center gap-2 rounded-full px-8 py-4 text-[#0A0714] bg-gradient-to-r from-[#C4B5FD] to-[#A78BFA] hover:shadow-[0_0_30px_-5px_#A78BFA] transition-shadow duration-300"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

    </div>
  );
}

export default Home;