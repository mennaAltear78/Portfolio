import React, { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0A0714]/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#120D21] border border-white/10 shadow-[0_0_40px_rgba(124,58,237,0.15)] flex flex-col z-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#120D21]/90 backdrop-blur-md">
              <div className="font-mono-label text-xs uppercase tracking-wider text-[#C4B5FD]">
                {project.category}
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 md:p-10">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-6">
                {project.name}
              </h2>

              {project.image && (
                <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/10 mb-10">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="grid md:grid-cols-[2fr_1fr] gap-10">
                <div className="space-y-8">
                  {project.problem && (
                    <section>
                      <h3 className="font-display font-semibold text-lg text-[#E9D5FF] mb-3">
                        The Problem
                      </h3>
                      <p className="font-body text-[#F5F3FF]/70 leading-relaxed text-sm sm:text-base">
                        {project.problem}
                      </p>
                    </section>
                  )}

                  {(project.solution || project.description) && (
                    <section>
                      <h3 className="font-display font-semibold text-lg text-[#E9D5FF] mb-3">
                        What I Built
                      </h3>
                      <p className="font-body text-[#F5F3FF]/70 leading-relaxed text-sm sm:text-base">
                        {project.solution || project.description}
                      </p>
                    </section>
                  )}

                  {project.challenges && (
                    <section>
                      <h3 className="font-display font-semibold text-lg text-[#E9D5FF] mb-3">
                        Technical Challenges
                      </h3>
                      <p className="font-body text-[#F5F3FF]/70 leading-relaxed text-sm sm:text-base">
                        {project.challenges}
                      </p>
                    </section>
                  )}

                  {project.decisions && (
                    <section>
                      <h3 className="font-display font-semibold text-lg text-[#E9D5FF] mb-3">
                        Engineering Decisions
                      </h3>
                      <p className="font-body text-[#F5F3FF]/70 leading-relaxed text-sm sm:text-base">
                        {project.decisions}
                      </p>
                    </section>
                  )}
                </div>

                <div className="space-y-8">
                  <section>
                    <h3 className="font-display font-semibold text-base text-[#E9D5FF] mb-3 border-b border-white/10 pb-2">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map((tech) => (
                        <span
                          key={tech}
                          className="font-body text-xs text-[#C4B5FD] bg-[#7C3AED]/10 border border-[#7C3AED]/30 rounded-full px-3 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>

                  <section className="flex flex-col gap-3">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="font-body text-sm font-medium flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-gradient-to-r from-[#C4B5FD] to-[#A78BFA] text-[#0A0714] hover:shadow-[0_0_20px_-5px_#A78BFA] transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="font-body text-sm font-medium flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-white/20 text-white hover:bg-white/5 transition-all"
                      >
                        {/* <Github className="w-4 h-4" /> */}
                        View Source
                      </a>
                    )}
                    {(project.link && !project.demo && !project.github) && (
                       <a
                       href={project.link}
                       target="_blank"
                       rel="noreferrer"
                       className="font-body text-sm font-medium flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-gradient-to-r from-[#C4B5FD] to-[#A78BFA] text-[#0A0714] hover:shadow-[0_0_20px_-5px_#A78BFA] transition-all"
                     >
                       <ExternalLink className="w-4 h-4" />
                       View Project
                     </a>
                    )}
                  </section>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default ProjectModal;
