import { useState, useEffect } from "react";
import { Cat } from "lucide-react";

const DEFAULT_MESSAGES = ["Meow!", "Hire her!", "Clean code!", "I love React", "Prrrr..."];

export function EasterEggCat() {
  const [isPeeking, setIsPeeking] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [forceShow, setForceShow] = useState(false);
  const [message, setMessage] = useState("Meow!");

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.5 && !isHovered && !forceShow) {
        setIsPeeking(true);
        setTimeout(() => setIsPeeking(false), 4000);
      }
    }, 15000);

    const handlePeekEvent = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      setMessage(detail || "Meow!");
      setForceShow(true);
      setTimeout(() => {
        setForceShow(false);
        setMessage("Meow!");
      }, 4000);
    };

    window.addEventListener("cat-peek", handlePeekEvent);
    return () => {
      clearInterval(interval);
      window.removeEventListener("cat-peek", handlePeekEvent);
    };
  }, [isHovered, forceShow]);

  const handleClick = () => {
    const next = DEFAULT_MESSAGES[Math.floor(Math.random() * DEFAULT_MESSAGES.length)];
    setMessage(next);
    if (!isHovered && !forceShow) {
      setForceShow(true);
      setTimeout(() => {
        setForceShow(false);
        setMessage("Meow!");
      }, 4000);
    }
  };

  const transform =
    isHovered || forceShow
      ? "translate-y-0"
      : isPeeking
        ? "translate-y-[45%]"
        : "translate-y-[120%]";

  return (
    <div
      className={`fixed bottom-0 left-6 md:left-12 z-[100] flex flex-col items-center transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${transform}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setMessage("Meow!"); }}
      onClick={handleClick}
    >
      {/* Speech bubble */}
      <div
        className={`mb-3 whitespace-nowrap rounded-2xl rounded-br-none border border-warm-200 dark:border-abyssal-border-hover bg-white dark:bg-abyssal-border px-4 py-2 text-xs font-bold text-warm-900 dark:text-abyssal-text shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-cyan-900/20 transition-all duration-300 origin-bottom-right ${
          isHovered || forceShow ? "scale-100 opacity-100" : "scale-50 opacity-0"
        }`}
      >
        {message}
      </div>

      {/* Cat body */}
      <div className="cursor-pointer rounded-t-[2rem] border-t border-l border-r border-warm-200/20 dark:border-white/20 bg-warm-900 dark:bg-abyssal-accent p-5 text-warm-50 dark:text-abyssal-base shadow-2xl transition-colors duration-300 hover:bg-warm-300 dark:hover:bg-abyssal-accent-hover">
        <Cat size={32} strokeWidth={1.5} />
      </div>
    </div>
  );
}
