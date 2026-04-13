import React from 'react';

interface Tab {
    id: string;
    label: string;
}

interface NeoTabsProps {
    tabs: Tab[];
    activeTab: string;
    onChange: (id: string) => void;
    color?: 'cyan' | 'orange' | 'red';
}

export default function NeoTabs({ tabs, activeTab, onChange, color = 'cyan' }: NeoTabsProps) {
    const theme = {
        cyan: { text: "text-[#00e5ff]", glow: "text-glow-cyan", border: "bg-[#00e5ff]", shadow: "shadow-[0_0_15px_rgba(0,229,255,0.6)]" },
        orange: { text: "text-[#ff6400]", glow: "text-glow-orange", border: "bg-[#ff6400]", shadow: "shadow-[0_0_15px_rgba(255,100,0,0.6)]" },
        red: { text: "text-[#ff003c]", glow: "text-glow-red", border: "bg-[#ff003c]", shadow: "shadow-[0_0_15px_rgba(255,0,60,0.6)]" }
    };

    const t = theme[color];

    return (
        <div className="flex gap-1 border-b border-white/10 relative w-fit mb-6">
            {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                    <button
                        key={tab.id}
                        onClick={() => onChange(tab.id)}
                        className={`px-6 py-2 font-mono text-[10px] tracking-[0.3em] uppercase transition-all duration-300 relative group
              ${isActive ? t.text + " " + t.glow : "text-white/40 hover:text-white/70"}`}
                    >
                        {tab.label}

                        {/* Indicador de Energía Activo */}
                        {isActive && (
                            <div className={`absolute bottom-[-1px] left-0 w-full h-[2px] ${t.border} ${t.shadow} animate-in fade-in zoom-in duration-300`}></div>
                        )}

                        {/* Efecto Hover sutil */}
                        {!isActive && (
                            <div className="absolute bottom-[-1px] left-0 w-0 h-[1px] bg-white/20 group-hover:w-full transition-all duration-300"></div>
                        )}
                    </button>
                );
            })}
        </div>
    );
}
