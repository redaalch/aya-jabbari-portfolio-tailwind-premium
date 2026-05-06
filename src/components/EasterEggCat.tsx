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
    setMessage(DEFAULT_MESSAGES[Math.floor(Math.random() * DEFAULT_MESSAGES.length)]);
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
        className={`mb-3 whitespace-nowrap rounded-2xl rounded-br-none border border-[#E8D5D4] dark:border-[#334155] bg-white dark:bg-[#1E293B] px-4 py-2 text-xs font-bold text-[#3A2B29] dark:text-[#F8FAFC] shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-cyan-900/20 transition-all duration-300 origin-bottom-right ${
          isHovered || forceShow ? "scale-100 opacity-100" : "scale-50 opacity-0"
        }`}
      >
        {message}
      </div>

      {/* Cat body */}
      <div className="cursor-pointer rounded-t-[2rem] border-t border-l border-r border-[#E8D5D4]/20 dark:border-white/20 bg-[#3A2B29] dark:bg-[#38BDF8] p-5 text-[#FAF7F5] dark:text-[#050A15] shadow-2xl transition-colors duration-300 hover:bg-[#C28C88] dark:hover:bg-[#0284C7]">
        <Cat size={32} strokeWidth={1.5} />
      </div>
    </div>
  );
}
