import React, { useRef, useState } from "react";
import ContactImag from "../assets/contact.png";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  // GitHub,
  // Linkedin,
  Send,
  MapPin,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isloading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const formRef = useRef();

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleOnsumbit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        setIsLoading(false);
        setStatus("error");
        console.error("Failed to send email:", err);
      });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0A0714] text-[#F5F3FF] flex items-center justify-center">
      <style>{`
        @keyframes blobMove {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -30px) scale(1.08); }
          66% { transform: translate(-30px, 20px) scale(0.95); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        .font-display { font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif; }
        .font-body { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .font-mono-label { font-family: 'JetBrains Mono', ui-monospace, monospace; }
        .fade-up { animation: fadeUp 0.7s ease-out both; }
        .pop-in { animation: popIn 0.3s ease-out both; }
        .contact-float { animation: floatY 5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .contact-float, .blob-a, .blob-b { animation: none !important; }
        }
      `}</style>

      {/* ambient grid */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#C4B5FD 1px, transparent 1px), linear-gradient(90deg, #C4B5FD 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
        }}
      />
      <div
        className="blob-a absolute -top-24 right-[10%] w-[380px] h-[380px] rounded-full blur-[110px] opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)", animation: "blobMove 16s ease-in-out infinite" }}
      />
      <div
        className="blob-b absolute bottom-[-10%] left-[5%] w-[340px] h-[340px] rounded-full blur-[110px] opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, #F472B6, transparent 70%)", animation: "blobMove 20s ease-in-out infinite reverse" }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 lg:py-16">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-10 shadow-[0_20px_80px_-30px_rgba(124,58,237,0.55)] backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start">
            <div className="fade-up">
              <div className="font-mono-label inline-flex items-center gap-2 text-xs tracking-wider uppercase text-[#C4B5FD] border border-[#7C3AED]/40 bg-[#7C3AED]/10 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] shadow-[0_0_8px_#4ADE80]" />
                Available for new opportunities
              </div>

              <h1 className="font-display font-bold leading-[1.05] text-4xl sm:text-5xl">
                <span className="text-white">Let's build</span>
                <br />
                <span className="bg-gradient-to-r from-[#C4B5FD] via-[#A78BFA] to-[#F472B6] text-transparent bg-clip-text">
                  something together.
                </span>
              </h1>

              <p className="font-body text-[#F5F3FF]/70 text-base mt-5 max-w-lg leading-relaxed">
                Have a project, a role, or just a front-end question? I’d love to hear about it and respond with a thoughtful reply.
              </p>

              <div className="mt-7 space-y-3 text-[#F5F3FF]/70">
                <a href="mailto:mennaaltear@gmail.com" className="font-mono-label flex items-center gap-2 text-sm hover:text-[#C4B5FD] transition-colors">
                  <Mail className="w-4 h-4" /> mennaaltear@gmail.com
                </a>
                <a href="tel:+201202033027" className="font-mono-label flex items-center gap-2 text-sm hover:text-[#C4B5FD] transition-colors">
                  <Phone className="w-4 h-4" /> +20 120-203-3027
                </a>
                <div className="font-mono-label flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4" /> Alexandria, Egypt
                </div>
                <div className="flex flex-wrap gap-3 pt-2 text-sm text-[#C4B5FD]">
                  <a href="https://github.com/mennaAltear78" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
                  <a href="https://www.linkedin.com/in/menna-altear" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                  <a href="https://mennaaltear.dev" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Portfolio</a>
                </div>
              </div>
            </div>

            <div className="fade-up" style={{ animationDelay: "0.1s" }}>
              <form
                ref={formRef}
                onSubmit={handleOnsumbit}
                className="w-full flex flex-col items-start gap-4"
              >
                <div className="w-full">
                  <label className="font-mono-label block text-[11px] tracking-wider uppercase text-[#C4B5FD]/70 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full h-11 rounded-lg bg-white/5 border border-white/10 text-[#F5F3FF] placeholder:text-[#F5F3FF]/30 px-4 focus:outline-none focus:border-[#A78BFA] focus:ring-2 focus:ring-[#7C3AED]/40 transition-colors font-body"
                    placeholder="Your name"
                    required
                    onChange={handleChange}
                    value={form.name}
                  />
                </div>

                <div className="w-full">
                  <label className="font-mono-label block text-[11px] tracking-wider uppercase text-[#C4B5FD]/70 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full h-11 rounded-lg bg-white/5 border border-white/10 text-[#F5F3FF] placeholder:text-[#F5F3FF]/30 px-4 focus:outline-none focus:border-[#A78BFA] focus:ring-2 focus:ring-[#7C3AED]/40 transition-colors font-body"
                    placeholder="you@email.com"
                    required
                    onChange={handleChange}
                    value={form.email}
                  />
                </div>

                <div className="w-full">
                  <label className="font-mono-label block text-[11px] tracking-wider uppercase text-[#C4B5FD]/70 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    onChange={handleChange}
                    value={form.message}
                    placeholder="Write your thoughts here..."
                    className="w-full rounded-lg bg-white/5 border border-white/10 text-[#F5F3FF] placeholder:text-[#F5F3FF]/30 p-4 focus:outline-none focus:border-[#A78BFA] focus:ring-2 focus:ring-[#7C3AED]/40 transition-colors font-body resize-none"
                  />
                </div>

                <button
                  disabled={isloading}
                  className="group w-full h-12 rounded-lg font-body font-medium text-[#0A0714] bg-gradient-to-r from-[#C4B5FD] to-[#A78BFA] hover:shadow-[0_0_30px_-5px_#A78BFA] disabled:opacity-60 transition-shadow duration-300 flex items-center justify-center gap-2"
                >
                  {isloading ? "Sending..." : "Send Message"}
                  {!isloading && <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
                </button>

                {status === "success" && (
                  <div className="pop-in font-body flex items-center gap-2 text-sm text-[#4ADE80]">
                    <CheckCircle2 className="w-4 h-4" /> Message sent — I'll get back to you soon.
                  </div>
                )}
                {status === "error" && (
                  <div className="pop-in font-body flex items-center gap-2 text-sm text-[#F87171]">
                    <AlertCircle className="w-4 h-4" /> Something went wrong — please try again.
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