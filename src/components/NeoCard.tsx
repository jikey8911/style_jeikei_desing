interface NeoCardProps {
  title: string;
  value?: string | number;
  status?: string;
  color?: 'cyan' | 'orange' | 'red';
}

export default function NeoCard({ title, value, status = "OPTIMAL", color = 'cyan' }: NeoCardProps) {
  // Paleta dinámica extendida: incluye el color RGBA exacto para el borde superior de cristal
  const theme = {
    cyan: {
      text: "text-[#00e5ff]",
      glow: "text-glow-cyan",
      bg: "bg-[#00e5ff]",
      edge: "rgba(0, 229, 255, 0.6)"
    },
    orange: {
      text: "text-[#ff6400]",
      glow: "text-glow-orange",
      bg: "bg-[#ff6400]",
      edge: "rgba(255, 100, 0, 0.6)"
    },
    red: {
      text: "text-[#ff003c]",
      glow: "text-glow-red",
      bg: "bg-[#ff003c]",
      edge: "rgba(255, 0, 60, 0.6)"
    }
  };

  const t = theme[color];

  return (
    <div
      className="glass-panel p-5 flex flex-col relative group"
      style={{ borderTopColor: t.edge }} /* <-- Esto pinta el borde de cristal del color de la alerta */
    >
      {/* Esquinas (Siempre cian para mantener la estructura base como un "chasis" fijo) */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00e5ff]"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00e5ff]"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00e5ff]"></div>

      {/* Línea decorativa superior que cambia con el color */}
      <div className={`h-[2px] w-12 ${t.bg} opacity-70 mb-3 relative z-10`}></div>

      <div className="text-[10px] text-[#00e5ff]/70 tracking-[0.2em] uppercase font-mono mb-1 relative z-10">
        {title}
      </div>

      {/* El valor dinámico con su respectivo brillo y color */}
      <div className={`text-4xl font-bold font-mono ${t.text} ${t.glow} relative z-10`}>
        {value}
      </div>

      <div className="mt-6 flex justify-between items-end border-t border-[#00e5ff]/20 pt-2 relative z-10">
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