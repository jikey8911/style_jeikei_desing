import React, { InputHTMLAttributes } from 'react';

interface NeoInputProps extends InputHTMLAttributes<HTMLInputElement> {
    color?: 'cyan' | 'orange' | 'red';
    label?: string;
}

export default function NeoInput({ color = 'cyan', label, className = '', ...props }: NeoInputProps) {
    // Configuración de colores para el foco y el símbolo de terminal
    const theme = {
        cyan: "text-[#00e5ff] border-[#00e5ff] focus:border-[#00e5ff] focus:shadow-[0_4px_15px_-3px_rgba(0,229,255,0.5)] placeholder:text-[#00e5ff]/30",
        orange: "text-[#ff6400] border-[#ff6400] focus:border-[#ff6400] focus:shadow-[0_4px_15px_-3px_rgba(255,100,0,0.5)] placeholder:text-[#ff6400]/30",
        red: "text-[#ff003c] border-[#ff003c] focus:border-[#ff003c] focus:shadow-[0_4px_15px_-3px_rgba(255,0,60,0.6)] placeholder:text-[#ff003c]/30"
    };

    const t = theme[color];
    // Extraemos solo el color hexadecimal para el símbolo '>'
    const symbolColor = color === 'cyan' ? 'text-[#00e5ff]' : color === 'orange' ? 'text-[#ff6400]' : 'text-[#ff003c]';

    return (
        <div className={`flex flex-col gap-1 w-full ${className}`}>
            {label && (
                <label className="text-[9px] font-mono tracking-[0.2em] text-white/50 uppercase mb-1">
                    {label}
                </label>
            )}

            <div className="relative flex items-center group">
                {/* Símbolo de terminal (>) */}
                <span className={`absolute left-0 top-1/2 -translate-y-1/2 font-mono font-bold text-sm opacity-70 group-focus-within:opacity-100 transition-opacity ${symbolColor}`}>
                    {'>'}
                </span>

                {/* Input real */}
                <input
                    className={`w-full bg-transparent border-b border-white/20 pl-5 py-2 font-mono text-sm text-white focus:outline-none transition-all duration-300 ${t}`}
                    spellCheck="false"
                    {...props}
                />
            </div>
        </div>
    )
}