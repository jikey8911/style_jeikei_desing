interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'cyan' | 'orange' | 'red' | 'ghost';
}

export default function NeoButton({ children, variant = 'cyan', className = '', ...props }: NeoButtonProps) {
  const baseStyle = "px-6 py-2 uppercase tracking-[0.15em] text-xs font-bold font-mono transition-all duration-300 border backdrop-blur-sm relative overflow-hidden group";

  // Diccionario de colores exactos para texto, borde y brillo
  const variants = {
    // Sistema Estándar
    cyan: "bg-[#00e5ff]/10 text-[#00e5ff] text-glow-cyan border-[#00e5ff]/50 hover:bg-[#00e5ff]/20 hover:border-[#00e5ff] hover:shadow-[0_0_20px_rgba(0,229,255,0.6)]",

    // Alertas y Datos Activos
    orange: "bg-[#ff6400]/10 text-[#ff6400] text-glow-orange border-[#ff6400]/50 hover:bg-[#ff6400]/20 hover:border-[#ff6400] hover:shadow-[0_0_20px_rgba(255,100,0,0.6)]",

    // Crítico / Peligro (Rojo Intenso)
    red: "bg-[#ff003c]/10 text-[#ff003c] text-glow-red border-[#ff003c]/50 hover:bg-[#ff003c]/20 hover:border-[#ff003c] hover:shadow-[0_0_20px_rgba(255,0,60,0.7)]",

    // Secundario/Invisible
    ghost: "bg-transparent text-white/40 border-white/10 hover:text-[#00e5ff] hover:text-glow-cyan hover:border-[#00e5ff]/50 hover:bg-black/40"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}