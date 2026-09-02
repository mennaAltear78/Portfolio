import React, { useState } from "react";
import { featuredProjects, projects } from "./index";
import { FolderGit2, ArrowUpRight } from "lucide-react";
import ProjectModal from "../components/ProjectModal";

const CATEGORIES = ["All", "Full-Stack", "Machine Learning", 
  // "Real-Time", 
  "Frontend", "Algorithms"];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category.includes(activeCategory));

  return (
    <section className="relative w-full overflow-hidden bg-[#0A0714] text-[#F5F3FF] py-24 min-h-screen">
      
      {/* background */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#C4B5FD 1px, transparent 1px), linear-gradient(90deg, #C4B5FD 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 15%, black 40%, transparent 100%)",
        }}
      />
      <div
        className="absolute top-0 right-[8%] w-[380px] h-[380px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Intro */}
        <div className="fade-up mb-16 max-w-3xl">
          <div className="font-mono-label inline-flex items-center gap-2 text-[10px] tracking-wider uppercase text-[#C4B5FD] border border-[#7C3AED]/30 bg-[#7C3AED]/10 rounded-full px-4 py-1.5 mb-6">
            <FolderGit2 className="w-3.5 h-3.5" />
            Engineering Portfolio
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl leading-tight mb-6 text-white">
            Featured Projects
          </h1>

          <p className="font-body text-[#F5F3FF]/70 leading-relaxed text-lg">
            A comprehensive look at the systems and applications I’ve built across the stack — featuring full-stack platforms, machine learning pipelines, and real-time streaming interfaces.
          </p>
        </div>

        {/* Featured Showcase */}
        <div className="space-y-16 lg:space-y-24 mb-24 fade-up" style={{ animationDelay: "0.1s" }}>
          {featuredProjects.map((project, idx) => (
            <div key={project.name} className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Visual Side */}
              <div className="w-full lg:w-1/2 rounded-2xl border border-white/10 bg-white/[0.02] p-2 hover:border-[#A78BFA]/30 transition-colors aspect-video flex items-center justify-center relative overflow-hidden group">
                {project.image ? (
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105" />
                ) : (
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#120D21] to-[#0A0714] flex items-center justify-center border border-white/5">
                    <span className="font-display font-medium text-2xl text-white/30">{project.name} Visual Spec</span>
                  </div>
                )}
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <div className="font-mono-label text-[10px] uppercase tracking-wider text-[#C4B5FD] mb-4">
                  {project.category}
                </div>
                <h3 className="font-display font-bold text-3xl text-white mb-4">
                  {project.name}
                </h3>
                <p className="font-body text-[#F5F3FF]/70 text-base leading-relaxed mb-6">
                  {project.problem}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map(tech => (
                    <span key={tech} className="font-body text-xs text-[#F5F3FF]/60 border border-white/10 bg-white/5 rounded-md px-3 py-1.5">
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="font-body font-medium inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm text-[#0A0714] bg-gradient-to-r from-[#C4B5FD] to-[#A78BFA] hover:shadow-[0_0_20px_-5px_#A78BFA] transition-shadow duration-300"
                >
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects & Filtering */}
        <div className="fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-t border-white/10 pt-16">
            <div>
              <h2 className="font-display font-bold text-3xl text-white mb-2">Other Projects</h2>
              <p className="font-body text-[#F5F3FF]/60 text-sm">Explore additional applications, tools, and technical implementations.</p>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`font-body text-xs px-4 py-2 rounded-full transition-colors ${
                    activeCategory === category 
                    ? "bg-[#7C3AED]/20 border border-[#A78BFA]/40 text-[#E9D5FF]" 
                    : "bg-white/5 border border-transparent text-[#F5F3FF]/50 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => (
              <div key={project.name} className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-[#A78BFA]/30 transition-all duration-300">
                <div className="font-mono-label text-[10px] uppercase tracking-wider text-[#C4B5FD] mb-3">
                  {project.category}
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-[#E9D5FF] transition-colors">
                  {project.name}
                </h3>
                <p className="font-body text-[#F5F3FF]/60 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0,3).map(tech => (
                    <span key={tech} className="font-mono-label text-[9px] text-[#F5F3FF]/40 border border-white/10 rounded px-2 py-1">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="font-mono-label text-[9px] text-[#F5F3FF]/40 border border-transparent px-1 py-1">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-auto font-body text-xs font-medium text-[#C4B5FD] hover:text-white flex items-center gap-1 w-fit transition-colors"
                >
                  View Details
                  <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}

export default Projects;