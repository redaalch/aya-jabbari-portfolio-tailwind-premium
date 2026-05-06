import { useEffect, useState } from "react";
import { Mail, Menu, Moon, Globe } from "lucide-react";
import { MobileSheet } from "./nav/MobileSheet";
import logo from "../assets/logo.png";

const links = [
  { href: "#about", label: "About" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#work", label: "Work" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [sheetOpen, setSheetOpen] = useState(false);
  const isProjectArchive =
    typeof window !== "undefined" &&
    window.location.pathname.replace(/\/$/, "").startsWith("/projects");
  const navLinks = links.map((link) => ({
    ...link,
    href: isProjectArchive ? `/${link.href}` : link.href,
  }));

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const checkpoint = window.scrollY + 100;
      for (let i = links.length - 1; i >= 0; i--) {
        const el = document.querySelector(links[i].href) as HTMLElement | null;
        if (el && el.offsetTop <= checkpoint) {
          setActive(links[i].href);
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

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-6 pt-5">
        <div
          className="relative flex w-full items-center justify-between"
        >
          {/* ── Far left: Logo ── */}
          <a
            href={isProjectArchive ? "/" : "#top"}
            className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
          >
            <img src={logo} alt="Aya Jabbari" className="h-12 w-auto mix-blend-multiply" />
          </a>

          {/* ── Center: Glass nav capsule (absolutely centered) ── */}
          <nav
            aria-label="Site sections"
            className={`absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-0.5 rounded-full border border-white/35 px-2.5 py-2 shadow-[0_8px_28px_rgba(54,23,42,0.10)] backdrop-blur-xl transition-all duration-base ease-standard ${
              scrolled ? "bg-white/25" : "bg-white/18"
            }`}
          >
            {navLinks.map((link, index) => {
              const isActive = !isProjectArchive && active === links[index].href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-3.5 py-2 text-[13px] font-semibold transition-all duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 ${
                    isActive
                      ? "bg-white/55 text-[#2F1730] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
                      : "text-[#4A3B45] hover:bg-white/35 hover:text-[#36172A]"
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
              href="mailto:ayajabbari81@gmail.com"
              className="hidden lg:inline-flex items-center gap-1.5 rounded-full bg-[#36172A] px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_10px_24px_rgba(54,23,42,0.22)] transition-all duration-base ease-standard hover:-translate-y-0.5 hover:bg-[#4A2340] hover:shadow-[0_14px_30px_rgba(54,23,42,0.28)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
            >
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              Email Aya
            </a>

            {/* Language pill */}
            <button
              className="hidden lg:inline-flex h-10 items-center gap-1.5 rounded-full border border-white/35 bg-white/20 px-3 text-[12px] font-semibold text-[#4A3B45] shadow-[0_8px_24px_rgba(31,23,42,0.08)] backdrop-blur-xl transition-all duration-fast hover:bg-white/35 hover:text-[#2F1730] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              aria-label="Switch language"
            >
              <Globe className="h-3.5 w-3.5" aria-hidden="true" />
              EN
            </button>

            {/* Theme toggle */}
            <button
              className="hidden lg:grid h-10 w-10 place-items-center rounded-full border border-white/35 bg-white/20 text-[#4A3B45] shadow-[0_8px_24px_rgba(31,23,42,0.08)] backdrop-blur-xl transition-all duration-fast hover:bg-white/35 hover:text-[#2F1730] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              aria-label="Toggle theme"
            >
              <Moon className="h-4 w-4" aria-hidden="true" />
            </button>

            {/* Mobile: email pill + hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="mailto:ayajabbari81@gmail.com"
                className="rounded-full bg-[#36172A] px-4 py-2 text-[13px] font-semibold text-white shadow-[0_6px_16px_rgba(54,23,42,0.20)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              >
                Email
              </a>
              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={sheetOpen}
                aria-controls="mobile-sheet"
                onClick={() => setSheetOpen(true)}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/35 bg-white/20 text-[#36172A] backdrop-blur-xl transition-colors duration-fast hover:bg-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
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
      />
    </>
  );
}
