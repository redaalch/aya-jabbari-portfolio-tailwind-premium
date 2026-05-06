export function MeshAurora() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden dark:block">
      <div className="animate-blob absolute left-[-10%] top-[-10%] h-[40%] w-[40%] rounded-full bg-[#0284C7] opacity-25 blur-[90px] [will-change:transform]" />
      <div className="animate-blob animation-delay-2000 absolute right-[-10%] top-[20%] h-[50%] w-[50%] rounded-full bg-[#38BDF8] opacity-10 blur-[90px] [will-change:transform]" />
      <div className="animate-blob animation-delay-4000 absolute bottom-[-20%] left-[20%] h-[55%] w-[55%] rounded-full bg-[#1E3A5F] opacity-40 blur-[90px] [will-change:transform]" />
    </div>
  );
}
