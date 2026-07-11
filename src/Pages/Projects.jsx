import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { projects } from "./index";
import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2 } from "lucide-react";

function Projects() {
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

        /* override react-vertical-timeline-component's light-theme defaults */
        .vertical-timeline::before { background: rgba(167, 139, 250, 0.2) !important; }
        .vertical-timeline-element-date {
          color: #C4B5FD !important;
          font-family: 'JetBrains Mono', ui-monospace, monospace !important;
          font-size: 11px !important;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
      `}</style>

      {/* ambient background */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#C4B5FD 1px, transparent 1px), linear-gradient(90deg, #C4B5FD 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 15%, black 40%, transparent 100%)",
        }}
      />
      <div
        className="blob-a absolute top-0 right-[8%] w-[380px] h-[380px] rounded-full blur-[110px] opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)", animation: "blobMove 18s ease-in-out infinite" }}
      />
      <div
        className="blob-b absolute bottom-0 left-[6%] w-[340px] h-[340px] rounded-full blur-[110px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #F472B6, transparent 70%)", animation: "blobMove 22s ease-in-out infinite reverse" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* intro */}
        <div className="fade-up mb-14">
          <div className="font-mono-label inline-flex items-center gap-2 text-xs tracking-wider uppercase text-[#C4B5FD] border border-[#7C3AED]/40 bg-[#7C3AED]/10 rounded-full px-4 py-1.5 mb-6">
            <FolderGit2 className="w-3.5 h-3.5" />
            Selected Work
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl leading-tight mb-6">
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-[#C4B5FD] via-[#A78BFA] to-[#F472B6] text-transparent bg-clip-text">
              Projects
            </span>
          </h1>

          <p className="font-body text-[#F5F3FF]/70 leading-relaxed max-w-2xl">
            A range of projects that pushed me as a developer — from a
            full vendor management dashboard secured with JWT auth, to a
            3D interactive portfolio built on Three.js, to a hand-pose
            recognition app powered by TensorFlow.js.
            <br /><br />
            One I'm especially proud of is a full-stack task management
            app built with Next.js, TypeScript, and Clerk, where the
            focus was clean structure and a smooth end-to-end experience.
            Across all of them I've worked with real REST APIs,
            authentication systems, responsive design, and tools like
            Tailwind CSS, MongoDB, and Vercel — and every one taught me
            something I carried into the next.
          </p>
        </div>

        {/* timeline */}
        <div className="fade-up" style={{ animationDelay: "0.1s" }}>
          <VerticalTimeline lineColor="rgba(167, 139, 250, 0.2)">
            {projects.map((project, index) => (
              <VerticalTimelineElement
                key={index}
                contentStyle={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(167, 139, 250, 0.25)",
                  borderRadius: "14px",
                  boxShadow: "0 8px 30px -10px rgba(124, 58, 237, 0.35)",
                  backdropFilter: "blur(10px)",
                  padding: "20px",
                  color: "#F5F3FF",
                }}
                contentArrowStyle={{ borderRight: "7px solid rgba(167, 139, 250, 0.25)" }}
                iconStyle={{
                  background: "transparent",
                  boxShadow: "none",
                }}
                icon={
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex justify-center items-center w-full h-full rounded-full p-2 bg-gradient-to-br from-[#C4B5FD] to-[#7C3AED] shadow-[0_0_20px_-2px_#7C3AED]"
                  >
                    <img
                      src={project.iconUrl}
                      alt={project.name}
                      className="w-[60%] h-[60%] object-contain rounded-full"
                    />
                  </motion.div>
                }
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="group"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display font-semibold text-lg text-white">
                        {project.name}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-[#C4B5FD]/50 shrink-0 mt-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#C4B5FD]" />
                    </div>
                    <p className="font-body text-sm text-[#F5F3FF]/60 mt-2 leading-relaxed">
                      {project.description}
                    </p>
                    {project.imge && (
                      <img
                        src={project.imge}
                        alt=""
                        className="mt-4 rounded-lg border border-white/10 w-full object-cover"
                      />
                    )}
                  </motion.div>
                </a>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}

export default Projects;