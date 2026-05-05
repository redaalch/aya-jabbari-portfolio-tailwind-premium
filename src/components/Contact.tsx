import { useState, type ComponentType, type FormEvent } from "react";
import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Download,
  ArrowUpRight,
  Send,
  Loader2,
  Copy,
  Check,
} from "lucide-react";
import { profile } from "../data/profile";
import { SectionHeader } from "./primitives/SectionHeader";
import { Button, ButtonLink } from "./primitives/Button";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formMessage, setFormMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_KEY;
  const isSubmitting = formStatus === "submitting";

  function handleCopyEmail() {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!web3FormsKey) {
      setFormStatus("error");
      setFormMessage("The contact form is not configured yet.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", web3FormsKey);
    formData.append("subject", "New portfolio message from Aya Jabbari");
    formData.append("from_name", "Aya Jabbari Portfolio");

    setFormStatus("submitting");
    setFormMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (response.ok && result.success) {
        setFormStatus("success");
        setFormMessage("Message sent. I'll get back to you soon.");
        form.reset();
        return;
      }

      setFormStatus("error");
      setFormMessage(
        result.message || "Message could not be sent. Please try again.",
      );
    } catch {
      setFormStatus("error");
      setFormMessage("Network error. Please try again or email me directly.");
    }
  }

  return (
    <section id="contact" className="bg-cream-100 py-16 md:py-20 lg:py-24">
      <div className="container-default">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto grid max-w-[1120px] overflow-hidden rounded-3xl border border-[rgba(42,27,45,0.06)] bg-white shadow-card lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px]"
        >
          {/* Left: Form */}
          <div className="p-8 md:p-10 xl:p-12">
            <SectionHeader
              eyebrow="Contact"
              heading="Let's connect."
              description="Open to end-of-studies (PFE) internship opportunities, project collaborations, and technical conversations — reach out directly."
              className="mb-8"
            />

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              aria-describedby={formMessage ? "contact-form-status" : undefined}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block" htmlFor="name-input">
                  <span className="text-body-sm font-semibold text-plum-900">
                    Name
                  </span>
                  <input
                    id="name-input"
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    aria-invalid={formStatus === "error"}
                    className="mt-2 block w-full rounded-xl border border-cream-100 bg-cream-50 px-4 py-3 text-body-md text-plum-900 outline-none transition placeholder:text-plum-500 max-sm:placeholder:text-sm focus:border-rose-500 focus:bg-white focus:ring-4 focus:ring-rose-500/10"
                  />
                </label>
                <label className="block" htmlFor="email-input">
                  <span className="text-body-sm font-semibold text-plum-900">
                    Email
                  </span>
                  <input
                    id="email-input"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    aria-invalid={formStatus === "error"}
                    className="mt-2 block w-full rounded-xl border border-cream-100 bg-cream-50 px-4 py-3 text-body-md text-plum-900 outline-none transition placeholder:text-plum-500 max-sm:placeholder:text-sm focus:border-rose-500 focus:bg-white focus:ring-4 focus:ring-rose-500/10"
                  />
                </label>
              </div>

              <label className="block" htmlFor="message-input">
                <span className="text-body-sm font-semibold text-plum-900">
                  Message
                </span>
                <textarea
                  id="message-input"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity"
                  aria-invalid={formStatus === "error"}
                  className="mt-2 block w-full resize-none rounded-xl border border-cream-100 bg-cream-50 px-4 py-3 text-body-md text-plum-900 outline-none transition placeholder:text-plum-500 max-sm:placeholder:text-sm focus:border-rose-500 focus:bg-white focus:ring-4 focus:ring-rose-500/10"
                />
              </label>

              <input type="hidden" name="botcheck" className="hidden" />

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>

              <p
                id="contact-form-status"
                role="status"
                aria-live="polite"
                className={`min-h-[24px] text-body-sm font-medium ${
                  formStatus === "success"
                    ? "text-success-600"
                    : formStatus === "error"
                      ? "text-error-600"
                      : "text-transparent"
                }`}
              >
                {formMessage || "."}
              </p>
            </form>
          </div>

          {/* Right: Details Pane */}
          <div className="flex flex-col border-t border-[rgba(42,27,45,0.06)] bg-plum-900 p-8 text-cream-50 lg:border-l lg:border-t-0 md:p-10 xl:p-12">
            <h3 className="mb-6 font-display text-display-xs text-white">
              Contact Details
            </h3>
            <div className="flex flex-col gap-6">
              {/* Special Email Row with Copy functionality */}
              <div className="group flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white shadow-soft transition-colors group-hover:bg-white/20">
                  <Mail className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="eyebrow mb-0.5 text-white/60">Email</p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-body-md font-medium text-white transition-colors hover:text-rose-500"
                  >
                    {profile.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="mt-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-rose-500 transition-colors hover:text-rose-600"
                    title="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        <span>Email copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <ContactRow
                icon={Phone}
                label="Phone"
                value={profile.phone}
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
              />
              <ContactRow
                icon={MapPin}
                label="Location"
                value={profile.location}
              />
            </div>

            <h3 className="mb-6 mt-10 font-display text-display-xs text-white">
              Socials
            </h3>
            <div className="flex flex-col gap-6">
              {profile.socials.github && (
                <ContactRow
                  icon={Github}
                  label="GitHub"
                  value="github.com/aya-jabbari"
                  href={profile.socials.github}
                />
              )}
              {profile.socials.linkedin && (
                <ContactRow
                  icon={Linkedin}
                  label="LinkedIn"
                  value="linkedin.com/in/aya-jabbari"
                  href={profile.socials.linkedin}
                />
              )}
              {(!profile.socials.github || !profile.socials.linkedin) && (
                <p className="text-body-sm text-white/60 italic">
                  Links pending confirmation.
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

type ContactRowProps = {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
};

function ContactRow({ icon: Icon, label, value, href }: ContactRowProps) {
  const content = (
    <div className="group flex items-center gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white shadow-soft transition-colors group-hover:bg-white/20">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="eyebrow mb-0.5 text-white/60">{label}</p>
        <p className="truncate text-body-md font-medium text-white transition-colors group-hover:text-rose-500">
          {value}
        </p>
      </div>
      {href ? (
        <ArrowUpRight className="h-4 w-4 text-white/40 opacity-0 transition group-hover:opacity-100" />
      ) : null}
    </div>
  );

  if (!href) return content;

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-plum-900"
    >
      {content}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[rgba(42,27,45,0.06)] bg-cream-50 py-12 md:py-16">
      <div className="container-default flex flex-col gap-10 md:flex-row md:justify-between md:items-end">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold tracking-tight text-plum-900">
            {profile.name}
          </h2>
          <div className="space-y-1 text-body-md text-plum-600">
            <p>{profile.role}</p>
            <p>Software Engineering, Data, and Applied AI</p>
            <p>{profile.location}</p>
            <a
              href={`mailto:${profile.email}`}
              className="inline-block pt-1 font-medium text-rose-500 transition-colors hover:text-rose-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
            >
              {profile.email}
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-4 md:justify-end">
            {profile.resumeUrl && (
              <ButtonLink href={profile.resumeUrl} variant="tertiary" download>
                Download CV
              </ButtonLink>
            )}
            {profile.socials.linkedin && (
              <ButtonLink
                href={profile.socials.linkedin}
                variant="tertiary"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </ButtonLink>
            )}
            {profile.socials.github && (
              <ButtonLink
                href={profile.socials.github}
                variant="tertiary"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </ButtonLink>
            )}
          </div>
          <p className="text-body-sm text-plum-500 md:text-right">
            © {new Date().getFullYear()} {profile.name}. Built with Vite & React.
          </p>
        </div>
      </div>
    </footer>
  );
}
