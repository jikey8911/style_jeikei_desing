import React from 'react';

interface NeoLoaderProps {
    text?: string;
    color?: 'cyan' | 'orange' | 'red';
}

export default function NeoLoader({ text = "AWAITING_DATA", color = 'cyan' }: NeoLoaderProps) {
    // Paleta dinámica de estado
    const theme = {
        cyan: { text: "text-[#00e5ff]", border: "border-[#00e5ff]", bg: "bg-[#00e5ff]", glow: "shadow-[0_0_15px_rgba(0,229,255,0.5)]" },
        orange: { text: "text-[#ff6400]", border: "border-[#ff6400]", bg: "bg-[#ff6400]", glow: "shadow-[0_0_15px_rgba(255,100,0,0.5)]" },
        red: { text: "text-[#ff003c]", border: "border-[#ff003c]", bg: "bg-[#ff003c]", glow: "shadow-[0_0_15px_rgba(255,0,60,0.5)]" }
    };

    const t = theme[color];

    return (
        <div className="flex flex-col items-center justify-center gap-4 w-full py-6">

            {/* Estructura Geométrica (Núcleo de Datos) */}
            <div className="relative w-12 h-12 flex items-center justify-center">

                {/* Rombo exterior escaneando (rotación lenta) */}
                <div
                    className={`absolute inset-0 border ${t.border} opacity-40 animate-[spin_4s_linear_infinite]`}
                    style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                ></div>

                {/* Anillo intermedio fragmentado (rotación rápida inversa) */}
                <div
                    className={`absolute inset-2 border-t-2 border-b-2 border-l border-r border-transparent border-t-[#ffffff]/40 border-b-[#ffffff]/40 ${t.border} opacity-80 animate-[spin_2s_linear_infinite_reverse]`}
                ></div>

                {/* Núcleo de energía central (Pulse + Ping) */}
                <div
                    className={`absolute w-2 h-2 ${t.bg} ${t.glow} animate-ping`}
                    style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                ></div>
                <div className={`w-1.5 h-1.5 ${t.bg} opacity-80`}></div>

            </div>

            {/* Texto de Consola con bloque parpadeante */}
            <div className="flex items-center gap-1">
                <span className={`text-[10px] font-mono tracking-[0.3em] uppercase ${t.text}`}>
                    {text}
                </span>
                {/* Cursor de terminal _ */}
                <span className={`w-[6px] h-[10px] ${t.bg} animate-pulse`}></span>
            </div>

        </div>
    );
}