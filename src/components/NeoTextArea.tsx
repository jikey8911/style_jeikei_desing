import React, { TextareaHTMLAttributes } from 'react';

interface NeoTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    color?: 'cyan' | 'orange' | 'red';
    label?: string;
}

export default function NeoTextArea({ color = 'cyan', label, className = '', ...props }: NeoTextAreaProps) {
    // Brillos de cristal para la caja completa
    const theme = {
        cyan: "focus:border-[#00e5ff] focus:shadow-[0_0_20px_rgba(0,229,255,0.2)] placeholder:text-[#00e5ff]/30 text-[#00e5ff]",
        orange: "focus:border-[#ff6400] focus:shadow-[0_0_20px_rgba(255,100,0,0.2)] placeholder:text-[#ff6400]/30 text-[#ff6400]",
        red: "focus:border-[#ff003c] focus:shadow-[0_0_20px_rgba(255,0,60,0.3)] placeholder:text-[#ff003c]/30 text-[#ff003c]"
    };

    const t = theme[color];
    const edgeColor = color === 'cyan' ? 'border-[#00e5ff]' : color === 'orange' ? 'border-[#ff6400]' : 'border-[#ff003c]';

    return (
        <div className={`flex flex-col gap-2 w-full ${className}`}>
            {label && (
                <div className="flex justify-between items-end border-b border-white/10 pb-1">
                    <label className="text-[10px] text-white/60 font-mono tracking-[0.2em] uppercase">
                        {label}
                    </label>
                    {/* Pequeño adorno decorativo en el label */}
                    <div className="flex gap-[2px]">
                        <div className={`w-1 h-1 ${color === 'red' ? 'bg-[#ff003c]' : color === 'orange' ? 'bg-[#ff6400]' : 'bg-[#00e5ff]'} opacity-50`}></div>
                        <div className={`w-3 h-1 ${color === 'red' ? 'bg-[#ff003c]' : color === 'orange' ? 'bg-[#ff6400]' : 'bg-[#00e5ff]'} opacity-50`}></div>
                    </div>
                </div>
            )}

            <div className="relative group mt-1">
                {/* Escuadras tácticas (Crosshairs) */}
                <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l opacity-50 group-focus-within:opacity-100 transition-opacity z-10 ${edgeColor}`}></div>
                <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r opacity-50 group-focus-within:opacity-100 transition-opacity z-10 ${edgeColor}`}></div>

                <textarea
                    className={`w-full bg-black/40 backdrop-blur-sm border border-white/10 p-3 pl-4 font-mono text-sm focus:outline-none transition-all duration-300 resize-none rounded-sm ${t}`}
                    spellCheck="false"
                    {...props}
                />
            </div>
        </div>
    )
}