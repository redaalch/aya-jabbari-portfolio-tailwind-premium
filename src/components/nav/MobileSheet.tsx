import { useEffect, useRef } from "react";
import { X, Mail, Globe } from "lucide-react";
import { profile } from "../../data/profile";
import type { Lang } from "../../i18n/translations";

type Link = { href: string; label: string };

type MobileSheetProps = {
  id: string;
  open: boolean;
  onClose: () => void;
  links: Link[];
  active: string;
  lang: Lang;
  onToggleLang: () => void;
};

export function MobileSheet({ id, open, onClose, links, active, lang, onToggleLang }: MobileSheetProps) {
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
        className={`fixed inset-0 z-40 bg-plum-900/20 backdrop-blur-sm transition-opacity duration-slow ease-standard ${
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
        className={`fixed inset-y-0 right-0 z-50 flex w-72 flex-col bg-cream-50 shadow-[0_0_60px_rgba(42,27,45,0.14)] transition-transform duration-slow ease-standard ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-cream-200 px-6">
          <span className="font-display text-[18px] font-medium text-plum-900">Menu</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-full text-plum-700 transition-colors duration-fast hover:bg-blush-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50"
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
              className={`flex min-h-[48px] items-center rounded-xl px-4 text-[15px] font-medium transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 ${
                active === link.href
                  ? "bg-blush-50 text-rose-500"
                  : "text-plum-700 hover:bg-cream-100 hover:text-plum-900"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Language toggle */}
        <div className="px-6 pt-2 pb-4 border-t border-cream-200 mt-auto">
          <button
            type="button"
            onClick={() => { onToggleLang(); onClose(); }}
            aria-label={lang === "en" ? "Switch to French" : "Passer en anglais"}
            className="flex w-full items-center justify-center gap-2 h-11 rounded-xl border border-cream-200 text-[14px] font-semibold text-plum-700 transition-colors hover:bg-cream-100 hover:text-plum-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
          >
            <Globe className="h-4 w-4" aria-hidden="true" />
            {lang === "en" ? "Passer en Français" : "Switch to English"}
          </button>
        </div>

        {/* Email CTA */}
        <div className="px-6 pb-8">
          <a
            href={`mailto:${profile.email}`}
            onClick={onClose}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-plum-900 px-7 text-[15px] font-semibold text-cream-50 shadow-cta transition-all duration-base ease-standard hover:bg-plum-700 hover:shadow-cta-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email Aya
          </a>
        </div>
      </div>
    </>
  );
}
