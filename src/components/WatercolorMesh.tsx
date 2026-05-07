export function WatercolorMesh() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 block overflow-hidden dark:hidden">
      <div className="animate-blob absolute left-[-10%] top-[-10%] h-[45%] w-[45%] rounded-full bg-warm-300 opacity-[0.15] mix-blend-multiply blur-[90px]" />
      <div className="animate-blob animation-delay-2000 absolute right-[-10%] top-[20%] h-[50%] w-[50%] rounded-full bg-[#F4A5C7] opacity-[0.10] mix-blend-multiply blur-[90px]" />
      <div className="animate-blob animation-delay-4000 absolute bottom-[-20%] left-[20%] h-[55%] w-[55%] rounded-full bg-warm-200 opacity-[0.22] mix-blend-multiply blur-[90px]" />
    </div>
  );
}
