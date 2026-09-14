// Monochrome placeholder for a future photo or video.
// Swap-in path: replace the <div> body with next/image or a <video> tag —
// the aspect ratio + label are the only things callers rely on.
export function EditorialPlaceholder({
  ratio = "4/5",
  label,
  tone = "on-white",
  video = false,
  className = "",
}: {
  ratio?: string;
  label?: string;
  tone?: "on-white" | "on-black";
  video?: boolean;
  className?: string;
}) {
  const isDark = tone === "on-black";
  return (
    <div
      className={`relative overflow-hidden ${isDark ? "bg-[#141414]" : "bg-[#e7e6e3]"} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: isDark
            ? "repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 26px)"
            : "repeating-linear-gradient(135deg, rgba(10,10,10,0.06) 0 1px, transparent 1px 26px)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? "radial-gradient(120% 90% at 30% 0%, rgba(255,255,255,0.08), transparent 60%)"
            : "radial-gradient(120% 90% at 70% 100%, rgba(10,10,10,0.06), transparent 60%)",
        }}
      />
      {video && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-full border ${
              isDark ? "border-paper/40" : "border-ink/30"
            }`}
          >
            <div
              className={`ml-1 h-0 w-0 border-y-8 border-l-[14px] border-y-transparent ${
                isDark ? "border-l-paper/70" : "border-l-ink/60"
              }`}
            />
          </div>
        </div>
      )}
      {label && (
        <span
          className={`absolute right-4 bottom-4 font-sans text-[10px] tracking-[0.14em] uppercase ${
            isDark ? "text-paper/30" : "text-ink/25"
          }`}
        >
          {label}
        </span>
      )}
    </div>
  );
}
