import React, { useEffect, useState } from 'react';

interface NeoAlertProps {
    message: string;
    type?: 'cyan' | 'orange' | 'red';
    duration?: number;
    onClose: () => void;
}

export default function NeoAlert({ message, type = 'cyan', duration = 5000, onClose }: NeoAlertProps) {
    const [progress, setProgress] = useState(100);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => Math.max(0, prev - (100 / (duration / 10))));
        }, 10);

        const closeTimer = setTimeout(onClose, duration);

        return () => {
            clearInterval(timer);
            clearTimeout(closeTimer);
        };
    }, [duration, onClose]);

    const theme = {
        cyan: { border: "border-[#00e5ff]", bg: "bg-[#00e5ff]", text: "text-[#00e5ff]", glow: "text-glow-cyan" },
        orange: { border: "border-[#ff6400]", bg: "bg-[#ff6400]", text: "text-[#ff6400]", glow: "text-glow-orange" },
        red: { border: "border-[#ff003c]", bg: "bg-[#ff003c]", text: "text-[#ff003c]", glow: "text-glow-red" }
    };

    const t = theme[type];

    return (
        <div className={`glass-panel p-3 min-w-[280px] flex flex-col relative animate-in slide-in-from-right-full duration-300 mb-3`} style={{ borderLeftWidth: '4px', borderLeftColor: t.border.split('-')[1] }}>
            <div className="flex justify-between items-start mb-2 relative z-10">
                <span className={`text-[9px] font-mono font-bold tracking-widest ${t.text} ${t.glow}`}>
                    SYSTEM_EVENT :: {type.toUpperCase()}
                </span>
                <button onClick={onClose} className="text-white/30 hover:text-white text-[10px] font-mono">
                    [X]
                </button>
            </div>
            <p className="text-[11px] font-mono text-white/90 relative z-10">
                {message}
            </p>

            {/* Barra de tiempo restante */}
            <div className="absolute bottom-0 left-0 h-[1px] bg-white/10 w-full">
                <div
                    className={`h-full ${t.bg} shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all linear`}
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
}