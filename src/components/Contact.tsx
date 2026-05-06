import { useState, useEffect, type FormEvent } from "react";
import {
  Mail, MapPin, Copy, Send, ArrowRight, Hand, X, Check, Loader2,
  ArrowUpRight, Download, Linkedin, Github, CalendarDays,
} from "lucide-react";
import { profile } from "../data/profile";
import logoUrl from "../assets/logo.png";

type FormStatus = "idle" | "submitting" | "success" | "error";

function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);
  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return { copied, copy };
}

export function Contact() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formMessage, setFormMessage] = useState("");
  const { copied, copy } = useCopyToClipboard();
  const [time, setTime] = useState("");
  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_KEY;

  useEffect(() => {
    const updateTime = () => {
      try {
        setTime(
          new Intl.DateTimeFormat("en-US", {
            timeZone: "Africa/Casablanca",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          }).format(new Date()),
        );
      } catch {
        setTime("");
      }
    };
    updateTime();
    const id = setInterval(updateTime, 60000);
    return () => clearInterval(id);
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!web3FormsKey) {
      setFormStatus("error");
      setFormMessage("The contact form is not configured yet.");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", web3FormsKey as string);
    formData.append("subject", "New portfolio message from Aya Jabbari");
    formData.append("from_name", "Aya Jabbari Portfolio");

    setFormStatus("submitting");
    setFormMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const result = (await response.json()) as { success?: boolean; message?: string };

      if (response.ok && result.success) {
        setFormStatus("success");
        setFormMessage("");
        form.reset();
        setTimeout(() => setFormStatus("idle"), 3000);
        return;
      }

      setFormStatus("error");
      setFormMessage(result.message ?? "Message could not be sent. Please try again.");
    } catch {
      setFormStatus("error");
      setFormMessage("Network error. Please try again or email me directly.");
    }
  }

  return (
    <div
      id="contact"
      className="min-h-screen bg-[#FAF7F5] flex flex-col font-sans selection:bg-rose-300 text-[#3A2B29] overflow-hidden"
    >
      {/* ── Contact Section ── */}
      <div className="flex-1 w-full max-w-7xl mx-auto flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 relative z-10">

        {/* Initial CTA */}
        <div
          className={`transition-all duration-700 ease-in-out flex flex-col items-center justify-center text-center
            ${isRevealed
              ? "opacity-0 -translate-y-12 pointer-events-none h-0"
              : "opacity-100 translate-y-0 py-20"
            }`}
        >
          <div className="inline-flex items-center justify-center p-5 bg-white rounded-full text-[#C28C88] mb-8 shadow-sm border border-[#E8D5D4]">
            <Hand size={32} strokeWidth={1.5} />
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#3A2B29] mb-6 tracking-tight">
            Let's connect.
          </h2>
          <p className="text-[#5C4D4B] text-lg md:text-xl font-light mb-12 max-w-xl mx-auto leading-relaxed">
            Open to end-of-studies (PFE) internship opportunities, project collaborations, and technical conversations.
          </p>
          <button
            onClick={() => setIsRevealed(true)}
            className="group bg-[#3A2B29] text-white px-10 py-5 rounded-full text-lg font-bold flex items-center gap-3 mx-auto hover:bg-[#C28C88] transition-all duration-300 shadow-xl shadow-[#3A2B29]/10 hover:-translate-y-1"
          >
            Start a Conversation{" "}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Revealed Form */}
        <div
          className={`w-full transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] origin-top
            ${isRevealed
              ? "opacity-100 scale-y-100 translate-y-0 mt-8 mb-12 relative"
              : "opacity-0 scale-y-95 translate-y-12 absolute pointer-events-none"
            }`}
        >
          <div className="flex justify-end mb-10">
            <button
              onClick={() => setIsRevealed(false)}
              className="flex items-center gap-2 text-[#8C7A78] text-xs font-bold uppercase tracking-[0.15em] hover:text-[#C28C88] transition-colors"
            >
              <X size={16} /> Close Form
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start w-full">

            {/* Left: Form */}
            <div className="w-full lg:w-[60%] flex flex-col">
              <p className="text-[#C28C88] font-bold tracking-[0.2em] text-[10px] uppercase mb-4">
                Direct Message
              </p>
              <h3 className="font-display text-4xl md:text-5xl text-[#3A2B29] mb-12">Reach out.</h3>

              <form className="space-y-10" onSubmit={handleSubmit}>
                <input type="hidden" name="botcheck" className="hidden" />

                <div className="flex flex-col sm:flex-row gap-10">
                  <FloatingField id="name" name="name" type="text" label="Your Name" />
                  <FloatingField id="email" name="email" type="email" label="Email Address" />
                </div>

                <div className="relative pt-4">
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Message"
                    rows={3}
                    className="peer w-full py-2 bg-transparent border-b border-[#E8D5D4] text-base outline-none focus:border-[#C28C88] transition-colors resize-none placeholder-transparent text-[#3A2B29]"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-0 transition-all duration-300 pointer-events-none text-[#8C7A78]
                               top-0 text-[10px] font-bold tracking-[0.2em] uppercase
                               peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:font-light peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-[#8C7A78]/70
                               peer-focus:top-0 peer-focus:text-[10px] peer-focus:font-bold peer-focus:tracking-[0.2em] peer-focus:uppercase peer-focus:text-[#C28C88]"
                  >
                    Tell me about your project or opportunity...
                  </label>
                </div>

                {formMessage && (
                  <p
                    role="status"
                    aria-live="polite"
                    className={`text-sm font-medium ${formStatus === "error" ? "text-error-600" : "text-success-600"}`}
                  >
                    {formMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formStatus !== "idle" && formStatus !== "error"}
                  className={`px-10 py-4 rounded-full text-sm font-bold flex items-center gap-2 transition-all duration-300 shadow-md mt-6
                    ${formStatus === "idle" || formStatus === "error"
                      ? "bg-[#3A2B29] text-white hover:bg-[#C28C88] hover:shadow-lg hover:-translate-y-0.5"
                      : ""}
                    ${formStatus === "submitting" ? "bg-[#8C7A78] text-white cursor-wait" : ""}
                    ${formStatus === "success" ? "bg-success-600 text-white" : ""}
                  `}
                >
                  {formStatus === "submitting" && <><Loader2 size={16} className="animate-spin" /> Sending...</>}
                  {formStatus === "success" && <><Check size={16} /> Message Sent!</>}
                  {(formStatus === "idle" || formStatus === "error") && <><Send size={16} /> Send Message</>}
                </button>
              </form>
            </div>

            {/* Right: Details */}
            <div className="w-full lg:w-[40%] flex flex-col pt-2 border-t lg:border-t-0 lg:border-l border-[#E8D5D4] lg:pl-16">
              <h3 className="text-lg font-display mb-10 text-[#3A2B29]">Contact Details</h3>

              <div className="space-y-10 flex-1">
                <DetailRow icon={<Mail size={20} strokeWidth={1.5} />} label="Email">
                  <p className="text-sm font-medium mb-3 text-[#3A2B29]">{profile.email}</p>
                  <button
                    onClick={() => copy(profile.email)}
                    className="group flex items-center gap-1.5 text-[10px] font-bold text-[#C28C88] uppercase tracking-[0.15em] hover:text-[#3A2B29] transition-colors"
                  >
                    <Copy size={12} className="group-hover:scale-110 transition-transform" />
                    {copied ? "Copied!" : "Copy Email"}
                  </button>
                </DetailRow>

                <DetailRow icon={<CalendarDays size={20} strokeWidth={1.5} />} label="Meeting">
                  <p className="text-sm font-medium text-[#3A2B29]">Schedule a call</p>
                </DetailRow>

                <DetailRow icon={<MapPin size={20} strokeWidth={1.5} />} label="Location">
                  <p className="text-sm font-medium text-[#3A2B29]">{profile.location}</p>
                </DetailRow>
              </div>

              <div className="mt-12 pt-8 border-t border-[#E8D5D4]">
                <h3 className="text-lg font-display mb-6 text-[#3A2B29]">Socials</h3>
                <div className="flex items-center gap-8">
                  {profile.socials.linkedin ? (
                    <SocialLink href={profile.socials.linkedin} icon={<Linkedin size={18} />} label="LinkedIn" />
                  ) : null}
                  {profile.socials.github ? (
                    <SocialLink href={profile.socials.github} icon={<Github size={18} />} label="GitHub" />
                  ) : null}
                  {!profile.socials.linkedin && !profile.socials.github && (
                    <p className="text-sm text-[#8C7A78] italic">Links pending confirmation.</p>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="w-full mt-auto relative z-10 pt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="w-full border-t border-[#E8D5D4]" />
        </div>

        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24 pt-16 pb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 relative z-20">

          <div className="space-y-6">
            <img src={logoUrl} alt="Aya Jabbari" className="h-10 md:h-12 w-auto object-contain" />
            <div className="space-y-2">
              <p className="text-sm md:text-base text-[#5C4D4B] font-light">{profile.role}</p>
              <p className="text-sm md:text-base text-[#5C4D4B] font-light">
                Software Engineering, Data, and Applied AI
              </p>
              <p className="text-sm md:text-base text-[#5C4D4B] font-light">{profile.location}</p>
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="inline-block text-sm md:text-base text-[#C28C88] hover:text-[#3A2B29] font-medium transition-colors group relative"
            >
              {profile.email}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#3A2B29] transition-all duration-300 group-hover:w-full" />
            </a>
          </div>

          <div className="flex flex-col items-start md:items-end gap-8 w-full md:w-auto">
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                download
                className="group flex items-center gap-3 text-xs md:text-sm font-bold text-[#3A2B29] hover:text-[#C28C88] transition-colors"
              >
                <span className="uppercase tracking-[0.15em]">Download CV</span>
                <Download size={16} className="group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300" />
              </a>
            )}

            <div className="flex flex-col items-start md:items-end gap-3 md:mt-12">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A67571] bg-white/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#E8D5D4]">
                <div className="w-1.5 h-1.5 rounded-full bg-success-600 animate-pulse" />
                {time ? `Local Time — ${time}` : "Fès, Morocco"}
              </div>
              <p className="text-[10px] md:text-[11px] text-[#8C7A78] font-medium tracking-widest uppercase mt-2">
                © {new Date().getFullYear()} Aya Jabbari. Built with React & Tailwind.
              </p>
            </div>
          </div>
        </div>

        {/* Watermark — absolute so it sits behind the footer content */}
        <div
          aria-hidden
          className="absolute bottom-0 left-0 right-0 flex justify-center items-end select-none pointer-events-none opacity-[0.03] overflow-hidden z-0"
        >
          <p className="font-display text-[19vw] leading-[0.72] tracking-tighter font-black text-[#3A2B29] whitespace-nowrap">
            JABBARI
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ── Helpers ── */

function FloatingField({
  id, name, type, label,
}: {
  id: string; name: string; type: string; label: string;
}) {
  return (
    <div className="flex-1 relative pt-4">
      <input
        id={id}
        name={name}
        type={type}
        required
        placeholder={label}
        className="peer w-full py-2 bg-transparent border-b border-[#E8D5D4] text-base outline-none focus:border-[#C28C88] transition-colors placeholder-transparent text-[#3A2B29]"
      />
      <label
        htmlFor={id}
        className="absolute left-0 transition-all duration-300 pointer-events-none text-[#8C7A78]
                   top-0 text-[10px] font-bold tracking-[0.2em] uppercase
                   peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:font-light peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-[#8C7A78]/70
                   peer-focus:top-0 peer-focus:text-[10px] peer-focus:font-bold peer-focus:tracking-[0.2em] peer-focus:uppercase peer-focus:text-[#C28C88]"
      >
        {label}
      </label>
    </div>
  );
}

function DetailRow({
  icon, label, children,
}: {
  icon: React.ReactNode; label: string; children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-5">
      <div className="p-3 bg-white rounded-2xl text-[#C28C88] shrink-0 border border-[#E8D5D4] shadow-sm">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-bold tracking-[0.15em] text-[#8C7A78] uppercase mb-1">{label}</p>
        {children}
      </div>
    </div>
  );
}

function SocialLink({
  href, icon, label,
}: {
  href: string; icon: React.ReactNode; label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-2 text-sm font-medium text-[#8C7A78] hover:text-[#C28C88] transition-colors"
    >
      <span className="group-hover:scale-110 transition-transform duration-300">{icon}</span>
      {label}
      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform opacity-50" />
    </a>
  );
}

export function Footer() {
  return null;
}
