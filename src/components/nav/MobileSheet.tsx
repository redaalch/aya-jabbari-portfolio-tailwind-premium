import { useEffect, useRef } from "react";
import { X, Mail, Globe } from "lucide-react";
import { profile } from "../../data/profile";
import { useLanguage } from "../../contexts/LanguageContext";

type Link = { href: string; label: string };

type MobileSheetProps = {
  id: string;
  open: boolean;
  onClose: () => void;
  links: Link[];
  active: string;
  onToggleLang: () => void;
};

export function MobileSheet({ id, open, onClose, links, active, onToggleLang }: MobileSheetProps) {
  const { t } = useLanguage();
  const panelRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (open) {
      previousFocusRef.current = document.activeElement as HTMLElement;

      const closeBtn = panelRef.current?.querySelector('button[aria-label="Close menu"]') as HTMLElement;
      if (closeBtn) closeBtn.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          e.preventDefault();
          onClose();
          return;
        }

        if (e.key === "Tab") {
          if (!panelRef.current) return;
          const focusableElements = panelRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    }
  }, [open, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-plum-900/20 dark:bg-black/60 backdrop-blur-sm transition-opacity duration-slow ease-standard ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sheet panel */}
      <div
        id={id}
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-y-0 right-0 z-50 flex w-72 flex-col bg-cream-50 dark:bg-[#0F172A] shadow-[0_0_60px_rgba(42,27,45,0.14)] dark:shadow-[0_0_60px_rgba(0,0,0,0.5)] transition-all duration-slow ease-standard ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-cream-200 dark:border-[#1E293B] px-6 transition-colors duration-500">
          <span className="font-display text-[18px] font-medium text-plum-900 dark:text-[#F8FAFC] transition-colors duration-500">Menu</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-full text-plum-700 dark:text-[#94A3B8] transition-colors duration-fast hover:bg-blush-50 dark:hover:bg-[#1E293B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 dark:focus-visible:ring-offset-[#0F172A]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Links */}
        <nav aria-label="Mobile site sections" className="flex flex-col gap-1 px-4 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`flex min-h-[48px] items-center rounded-xl px-4 text-[15px] font-medium transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 dark:focus-visible:ring-offset-[#0F172A] ${
                active === link.href
                  ? "bg-blush-50 dark:bg-[#1E293B] text-rose-500 dark:text-[#38BDF8]"
                  : "text-plum-700 dark:text-[#94A3B8] hover:bg-cream-100 dark:hover:bg-[#1E293B] hover:text-plum-900 dark:hover:text-[#F8FAFC]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Language toggle */}
        <div className="px-6 pt-2 pb-4 border-t border-cream-200 dark:border-[#1E293B] mt-auto transition-colors duration-500">
          <button
            type="button"
            onClick={() => { onToggleLang(); onClose(); }}
            aria-label={t("nav.switch_language")}
            className="flex w-full items-center justify-center gap-2 h-11 rounded-xl border border-cream-200 dark:border-[#1E293B] text-[14px] font-semibold text-plum-700 dark:text-[#94A3B8] transition-colors duration-300 hover:bg-cream-100 dark:hover:bg-[#1E293B] hover:text-plum-900 dark:hover:text-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
          >
            <Globe className="h-4 w-4" aria-hidden="true" />
            {t("nav.switch_language")}
          </button>
        </div>

        {/* Email CTA */}
        <div className="px-6 pb-8">
          <a
            href={`mailto:${profile.email}`}
            onClick={onClose}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-plum-900 dark:bg-[#38BDF8] px-7 text-[15px] font-semibold text-cream-50 dark:text-[#050A15] shadow-cta transition-all duration-300 ease-standard hover:bg-plum-700 dark:hover:bg-[#0284C7] hover:shadow-cta-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 dark:focus-visible:ring-offset-[#0F172A]"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {t("nav.email")}
          </a>
        </div>
      </div>
    </>
  );
}
