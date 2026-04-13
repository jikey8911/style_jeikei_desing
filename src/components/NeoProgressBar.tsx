import React from "react"

interface NeoProgressBarProps {
    label: string;
    value: number; // Porcentaje de 0 a 100
    color?: 'cyan' | 'orange' | 'red';
    segments?: number; // Cuántos bloques componen la barra (por defecto 20)
}

export default function NeoProgressBar({ label, value, color = 'cyan', segments = 20 }: NeoProgressBarProps) {
    const theme = {
        cyan: { active: "bg-[#00e5ff] shadow-[0_0_10px_rgba(0,229,255,0.6)]", inactive: "bg-[#00e5ff]/10", text: "text-[#00e5ff]" },
        orange: { active: "bg-[#ff6400] shadow-[0_0_10px_rgba(255,100,0,0.6)]", inactive: "bg-[#ff6400]/10", text: "text-[#ff6400]" },
        red: { active: "bg-[#ff003c] shadow-[0_0_10px_rgba(255,0,60,0.8)]", inactive: "bg-[#ff003c]/10", text: "text-[#ff003c]" }
    };

    const t = theme[color];

    // Calculamos cuántos bloques deben estar encendidos
    const activeCount = Math.round((Math.max(0, Math.min(100, value)) / 100) * segments);

    return (
        <div className="w-full flex flex-col gap-2 group">
            {/* Cabecera de la barra */}
            <div className="flex justify-between items-end border-b border-white/5 pb-1">
                <span className="text-[10px] text-white/60 font-mono tracking-[0.2em] uppercase">
                    {label}
                </span>
                <span className={`text-xs font-bold font-mono ${t.text}`}>
                    {value.toFixed(1)}%
                </span>
            </div>

            {/* Renderizado de los bloques segmentados */}
            <div className="flex gap-[2px] h-3 w-full">
                {Array.from({ length: segments }).map((_, index) => {
                    const isActive = index < activeCount;
                    return (
                        <div
                            key={index}
                            className={`flex-1 h-full skew-x-[-15deg] transition-all duration-300 ${isActive ? t.active : t.inactive}`}
                        />
                    )
                })}
            </div>
        </div>
    )
}