import React from "react"

interface NeoToggleProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    color?: 'cyan' | 'orange' | 'red';
}

export default function NeoToggle({ label, checked, onChange, color = 'cyan' }: NeoToggleProps) {
    // Colores del bloque activo y su sombra de energía
    const theme = {
        cyan: "bg-[#00e5ff] shadow-[0_0_15px_rgba(0,229,255,0.6)]",
        orange: "bg-[#ff6400] shadow-[0_0_15px_rgba(255,100,0,0.6)]",
        red: "bg-[#ff003c] shadow-[0_0_15px_rgba(255,0,60,0.8)]"
    };

    const activeColor = theme[color];

    return (
        <div
            className="flex items-center justify-between group cursor-pointer"
            onClick={() => onChange(!checked)}
        >
            <span className={`text-[10px] font-mono tracking-[0.2em] uppercase transition-colors duration-300 ${checked ? 'text-white' : 'text-white/40'}`}>
                {label}
            </span>

            {/* Riel del Toggle */}
            <div className={`relative w-12 h-4 border transition-all duration-300 ${checked ? 'border-white/20 bg-white/5' : 'border-white/10 bg-black/40'}`} style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }}>

                {/* Línea de fondo del riel */}
                <div className="absolute top-1/2 left-2 right-2 h-[1px] bg-white/10 -translate-y-1/2"></div>

                {/* Bloque deslizante (Knob) */}
                <div
                    className={`absolute top-0 h-full w-5 transition-all duration-300 ease-out flex items-center justify-center ${checked ? 'left-[calc(100%-1.25rem)] ' + activeColor : 'left-0 bg-white/10'}`}
                    style={{ clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0 100%)' }}
                >
                    {/* Micro-detalle técnico dentro del bloque */}
                    <div className="w-[1px] h-2 bg-black/50"></div>
                    <div className="w-[1px] h-2 bg-black/50 ml-1"></div>
                </div>
            </div>
        </div>
    )
}