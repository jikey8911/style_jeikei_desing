interface NeoCardProps {
  title: string;
  value: string;
  status?: string;
  color?: 'cyan' | 'orange' | 'red';
}

export default function NeoCard({ title, value, status = "OPTIMAL", color = 'cyan' }: NeoCardProps) {
  // Paleta dinámica para que las líneas decorativas y el texto coincidan
  const theme = {
    cyan: { text: "text-[#00e5ff]", glow: "text-glow-cyan", bg: "bg-[#00e5ff]" },
    orange: { text: "text-[#ff6400]", glow: "text-glow-orange", bg: "bg-[#ff6400]" },
    red: { text: "text-[#ff003c]", glow: "text-glow-red", bg: "bg-[#ff003c]" }
  };

  const t = theme[color];

  return (
    <div className="tech-panel p-5 flex flex-col relative group">
      {/* Esquinas (Siempre cian para mantener la estructura base) */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00e5ff]"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00e5ff]"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00e5ff]"></div>

      {/* Línea decorativa superior que cambia con el color */}
      <div className={`h-[2px] w-12 ${t.bg} opacity-70 mb-3`}></div>

      <div className="text-[10px] text-[#00e5ff]/70 tracking-[0.2em] uppercase font-mono mb-1">
        {title}
      </div>

      {/* El valor dinámico con su respectivo brillo y color */}
      <div className={`text-4xl font-bold font-mono ${t.text} ${t.glow}`}>
        {value}
      </div>

      <div className="mt-6 flex justify-between items-end border-t border-[#00e5ff]/20 pt-2">
        <span className={`text-[9px] font-mono tracking-widest ${t.text} opacity-80`}>
          SYS: {status}
        </span>

        {/* Barritas de datos decorativas */}
        <div className="flex gap-[2px] items-end">
          <div className={`w-1.5 h-2 ${t.bg} animate-pulse`}></div>
          <div className="w-1.5 h-3 bg-[#00e5ff]/40"></div>
          <div className="w-1.5 h-4 bg-[#00e5ff]/20"></div>
        </div>
      </div>
    </div>
  )
}