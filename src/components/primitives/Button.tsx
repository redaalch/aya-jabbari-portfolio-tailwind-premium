import { forwardRef } from "react";

type Variant = "primary" | "secondary" | "tertiary";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-base ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "h-[52px] min-w-[160px] rounded-xl bg-plum-900 px-8 text-[15px] tracking-[-0.005em] text-cream-50 shadow-[0_4px_12px_rgba(42,27,45,0.15)] hover:-translate-y-0.5 hover:bg-plum-800 hover:shadow-[0_8px_16px_rgba(42,27,45,0.2)] active:translate-y-0",
  secondary:
    "h-[52px] min-w-[160px] rounded-xl border border-plum-900/10 bg-transparent px-8 text-[15px] text-plum-900 hover:border-plum-900/20 hover:bg-white active:bg-cream-100",
  tertiary:
    "h-10 rounded-md px-2 text-[14px] text-plum-900 hover:text-rose-500",
};

export function getButtonClass(variant: Variant = "primary", extra = "") {
  return `${base} ${variants[variant]}${extra ? ` ${extra}` : ""}`;
}

type ButtonProps = { variant?: Variant } & React.ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonLinkProps = { variant?: Variant } & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className = "", ...props }, ref) => (
    <button ref={ref} className={getButtonClass(variant, className)} {...props} />
  )
);
Button.displayName = "Button";

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ variant = "primary", className = "", ...props }, ref) => (
    <a ref={ref} className={getButtonClass(variant, className)} {...props} />
  )
);
ButtonLink.displayName = "ButtonLink";
