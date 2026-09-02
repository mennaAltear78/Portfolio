import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, 
  //  Linkedin, FileText
   } from "lucide-react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const formRef = useRef();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      emailjs
        .send(
          serviceId,
          templateId,
          {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
            to_name: "Menna",
            reply_to: form.email,
          },
          publicKey
        )
        .then(() => {
          setIsLoading(false);
          setStatus("success");
          setForm({ name: "", email: "", message: "" });
        })
        .catch((err) => {
          setIsLoading(false);
          setStatus("error");
          console.error("EmailJS Error:", err);
        });
    } else {
      // Missing env vars — show configuration warning in console
      console.warn("EmailJS environment variables are not set.");
      setIsLoading(false);
      setStatus("error");
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0A0714] text-[#F5F3FF] flex items-center justify-center py-24">
      
      {/* background */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#C4B5FD 1px, transparent 1px), linear-gradient(90deg, #C4B5FD 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
        }}
      />
      <div
        className="absolute top-[20%] right-[10%] w-[380px] h-[380px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)" }}
      />
      <div
        className="absolute bottom-[10%] left-[5%] w-[340px] h-[340px] rounded-full blur-[120px] opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #10B981, transparent 70%)" }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.02] p-8 sm:p-12 lg:p-16 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
            
            {/* Contact Info */}
            <div className="fade-up">
              <div className="font-mono-label inline-flex items-center gap-2 text-[10px] tracking-wider uppercase text-[#C4B5FD] border border-[#7C3AED]/30 bg-[#7C3AED]/10 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] shadow-[0_0_8px_#4ADE80]" />
                Available for Engineering Roles
              </div>

              <h1 className="font-display font-bold text-4xl sm:text-5xl leading-tight mb-6">
                Let's build<br />
                <span className="bg-gradient-to-r from-[#C4B5FD] via-[#A78BFA] to-[#F472B6] text-transparent bg-clip-text">
                  something together.
                </span>
              </h1>

              <p className="font-body text-[#F5F3FF]/70 text-base max-w-lg leading-relaxed mb-10">
                Have a project, a role, or just a technical question? I’d love to hear about it and respond with a thoughtful reply.
              </p>

              <div className="space-y-6 text-[#F5F3FF]/80 border-b border-white/10 pb-10 mb-10">
                <a href="mailto:mennaaltear@gmail.com" className="group font-body flex items-center gap-4 text-sm hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#7C3AED]/20 group-hover:border-[#7C3AED]/40 transition-colors">
                    <Mail className="w-4 h-4 text-[#C4B5FD]" />
                  </div>
                  mennaaltear@gmail.com
                </a>
                <a href="tel:+201202033027" className="group font-body flex items-center gap-4 text-sm hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#10B981]/20 group-hover:border-[#10B981]/40 transition-colors">
                    <Phone className="w-4 h-4 text-[#6EE7B7]" />
                  </div>
                  +20 120-203-3027
                </a>
                <div className="font-body flex items-center gap-4 text-sm">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#F59E0B]" />
                  </div>
                  Alexandria, Egypt
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/mennaAltear78" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all font-body text-sm">
                  {/* <Github className="w-4 h-4" />  */}
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/menna-altear" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-[#3B82F6]/30 bg-[#3B82F6]/10 text-[#93C5FD] hover:bg-[#3B82F6]/20 transition-all font-body text-sm">
                  {/* <Linkedin className="w-4 h-4" /> */}
                   LinkedIn
                </a>
                <a href="/Menna_Altear_CV.pdf" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-[#F472B6]/30 bg-[#F472B6]/10 text-[#FBCFE8] hover:bg-[#F472B6]/20 transition-all font-body text-sm">
                  {/* <FileText className="w-4 h-4" />  */}
                  Resume
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="fade-up" style={{ animationDelay: "0.15s" }}>
              <form
                ref={formRef}
                onSubmit={handleOnSubmit}
                className="w-full flex flex-col gap-5 p-1 bg-[#120D21]/50 rounded-2xl"
              >
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="w-full">
                    <label htmlFor="name" className="font-mono-label block text-[10px] tracking-wider uppercase text-[#C4B5FD]/70 mb-2 ml-1">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full h-12 rounded-xl bg-[#0A0714]/80 border border-white/10 text-white placeholder:text-white/20 px-4 focus:outline-none focus:border-[#A78BFA] focus:ring-1 focus:ring-[#A78BFA] transition-all font-body text-sm"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="email" className="font-mono-label block text-[10px] tracking-wider uppercase text-[#C4B5FD]/70 mb-2 ml-1">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full h-12 rounded-xl bg-[#0A0714]/80 border border-white/10 text-white placeholder:text-white/20 px-4 focus:outline-none focus:border-[#A78BFA] focus:ring-1 focus:ring-[#A78BFA] transition-all font-body text-sm"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <label htmlFor="message" className="font-mono-label block text-[10px] tracking-wider uppercase text-[#C4B5FD]/70 mb-2 ml-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, roles, or what you're working on..."
                    className="w-full rounded-xl bg-[#0A0714]/80 border border-white/10 text-white placeholder:text-white/20 p-4 focus:outline-none focus:border-[#A78BFA] focus:ring-1 focus:ring-[#A78BFA] transition-all font-body text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="group w-full h-14 rounded-xl font-body font-medium text-[#0A0714] bg-gradient-to-r from-[#C4B5FD] to-[#A78BFA] hover:shadow-[0_0_30px_-5px_#A78BFA] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 mt-2"
                >
                  {isLoading ? "Sending Message..." : "Send Message"}
                  {!isLoading && <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />}
                </button>

                {status === "success" && (
                  <div className="font-body flex items-center gap-2 text-sm text-[#4ADE80] bg-[#4ADE80]/10 border border-[#4ADE80]/20 rounded-lg p-4 mt-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" /> Message sent successfully! I'll be in touch soon.
                  </div>
                )}
                {status === "error" && (
                  <div className="font-body flex items-center gap-2 text-sm text-[#F87171] bg-[#F87171]/10 border border-[#F87171]/20 rounded-lg p-4 mt-2">
                    <AlertCircle className="w-4 h-4 shrink-0" /> Failed to send message. Please try emailing me directly.
                  </div>
                )}
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;