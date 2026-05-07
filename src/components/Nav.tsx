import { useEffect, useState } from "react";
import { Mail, Menu, Moon, Sun, Globe } from "lucide-react";
import { MobileSheet } from "./nav/MobileSheet";
import logo from "../assets/logo.png";
import { profile } from "../data/profile";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import { currentAppPath, toHref } from "../utils/paths";

const linkDefs = [
  { href: "#about", labelKey: "nav.about" },
  { href: "#capabilities", labelKey: "nav.capabilities" },
  { href: "#work", labelKey: "nav.work" },
  { href: "#certifications", labelKey: "nav.certifications" },
  { href: "#contact", labelKey: "nav.contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [sheetOpen, setSheetOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const isProjectArchive = currentAppPath().replace(/\/$/, "").startsWith("/projects");
  const links = linkDefs.map((link) => ({ href: link.href, label: t(link.labelKey) }));
  const navLinks = links.map((link) => ({
    ...link,
    href: isProjectArchive ? toHref(`/${link.href}`) : link.href,
  }));

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const checkpoint = window.scrollY + 100;
      for (let i = linkDefs.length - 1; i >= 0; i--) {
        const el = document.querySelector(linkDefs[i].href) as HTMLElement | null;
        if (el && el.offsetTop <= checkpoint) {
          setActive(linkDefs[i].href);
          return;
        }
      }
      setActive("");
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = sheetOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sheetOpen]);

  function toggleLang() {
    setLang(lang === "en" ? "fr" : "en");
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-6 pt-5">
        <div className="relative flex w-full items-center justify-between">
          {/* ── Far left: Logo ── */}
          <a
            href={isProjectArchive ? toHref("/") : "#top"}
            className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
          >
            <img
              src={logo}
              alt="Aya Jabbari"
              className="h-12 w-auto mix-blend-multiply transition-all duration-500 dark:mix-blend-normal dark:brightness-0 dark:invert"
            />
          </a>

          {/* ── Center: Glass nav capsule (absolutely centered) ── */}
          <nav
            aria-label="Site sections"
            className={`absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-0.5 rounded-full border border-white/35 dark:border-white/10 px-2.5 py-2 shadow-[0_8px_28px_rgba(54,23,42,0.10)] dark:shadow-[0_8px_28px_rgba(0,0,0,0.30)] backdrop-blur-xl transition-all duration-500 ease-standard ${
              scrolled
                ? "bg-white/25 dark:bg-abyssal-surface/80"
                : "bg-white/18 dark:bg-abyssal-surface/60"
            }`}
          >
            {navLinks.map((link, index) => {
              const isActive = !isProjectArchive && active === linkDefs[index].href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-3.5 py-2 text-[13px] font-semibold transition-all duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 ${
                    isActive
                      ? "bg-white/55 dark:bg-white/10 text-warm-975 dark:text-abyssal-text shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-none"
                      : "text-warm-800 dark:text-abyssal-text-muted hover:bg-white/35 dark:hover:bg-white/10 hover:text-warm-950 dark:hover:text-abyssal-text"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* ── Far right: CTA + utilities ── */}
          <div className="flex items-center gap-3">

            {/* Email Aya CTA */}
            <a
              href={`mailto:${profile.email}`}
              className="hidden lg:inline-flex items-center gap-1.5 rounded-full bg-warm-950 dark:bg-abyssal-accent px-5 py-2.5 text-[13px] font-semibold text-white dark:text-abyssal-base shadow-[0_10px_24px_rgba(54,23,42,0.22)] dark:shadow-[0_10px_24px_rgba(56,189,248,0.20)] transition-all duration-500 ease-standard hover:-translate-y-0.5 hover:bg-[#4A2340] dark:hover:bg-abyssal-accent-hover hover:shadow-[0_14px_30px_rgba(54,23,42,0.28)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
            >
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              {t("nav.email")}
            </a>

            {/* Language toggle */}
            <button
              type="button"
              onClick={toggleLang}
              aria-label={t("nav.switch_language")}
              className="hidden lg:inline-flex h-10 items-center gap-1.5 rounded-full border border-white/35 dark:border-white/10 bg-white/20 dark:bg-abyssal-surface/60 px-3 text-[12px] font-semibold text-warm-800 dark:text-abyssal-text-muted shadow-[0_8px_24px_rgba(31,23,42,0.08)] backdrop-blur-xl transition-all duration-fast hover:bg-white/35 dark:hover:bg-abyssal-surface/80 hover:text-warm-975 dark:hover:text-abyssal-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
            >
              <Globe className="h-3.5 w-3.5" aria-hidden="true" />
              {lang.toUpperCase()}
            </button>

            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="hidden lg:grid h-10 w-10 place-items-center rounded-full border border-white/35 dark:border-white/10 bg-white/20 dark:bg-abyssal-surface/60 text-warm-800 dark:text-abyssal-accent shadow-[0_8px_24px_rgba(31,23,42,0.08)] backdrop-blur-xl transition-all duration-fast hover:bg-white/35 dark:hover:bg-abyssal-surface/80 hover:text-warm-975 dark:hover:text-abyssal-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4" aria-hidden="true" />
              )}
            </button>

            {/* Mobile: email pill + hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full bg-warm-950 dark:bg-abyssal-accent px-4 py-2 text-[13px] font-semibold text-white dark:text-abyssal-base shadow-[0_6px_16px_rgba(54,23,42,0.20)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              >
                {t("nav.email_short")}
              </a>
              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={sheetOpen}
                aria-controls="mobile-sheet"
                onClick={() => setSheetOpen(true)}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/35 dark:border-white/10 bg-white/20 dark:bg-abyssal-surface/60 text-warm-950 dark:text-abyssal-text-muted backdrop-blur-xl transition-colors duration-fast hover:bg-white/35 dark:hover:bg-abyssal-surface/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

          </div>
        </div>
      </header>

      <MobileSheet
        id="mobile-sheet"
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        links={navLinks}
        active={isProjectArchive ? "" : active}
        onToggleLang={toggleLang}
        onToggleTheme={toggleTheme}
        theme={theme}
      />
    </>
  );
}
