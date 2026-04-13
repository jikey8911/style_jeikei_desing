import React from 'react';
import NeoButton from './NeoButton';

interface NeoModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAction?: () => void;
    title: string;
    children: React.ReactNode;
    actionText?: string;
    color?: 'cyan' | 'orange' | 'red';
}

export default function NeoModal({
    isOpen,
    onClose,
    onAction,
    title,
    children,
    actionText = "CONFIRM",
    color = 'red'
}: NeoModalProps) {

    if (!isOpen) return null;

    // Temas de resplandor para la ventana crítica
    const theme = {
        cyan: { text: "text-[#00e5ff]", glow: "text-glow-cyan", border: "rgba(0, 229, 255, 0.8)", bg: "bg-[#00e5ff]" },
        orange: { text: "text-[#ff6400]", glow: "text-glow-orange", border: "rgba(255, 100, 0, 0.8)", bg: "bg-[#ff6400]" },
        red: { text: "text-[#ff003c]", glow: "text-glow-red", border: "rgba(255, 0, 60, 0.8)", bg: "bg-[#ff003c]" }
    };

    const t = theme[color];

    return (
        // Capa de bloqueo global (Oscurece y desenfoca la red neuronal)
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#010204]/80 backdrop-blur-md p-4 animate-in fade-in duration-200">

            {/* Ventana de Cristal */}
            <div
                className="glass-panel w-full max-w-lg p-6 flex flex-col relative"
                style={{ borderTopColor: t.border, borderBottomColor: t.border }}
            >
                {/* Esquinas tácticas */}
                <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 opacity-80`} style={{ borderColor: t.border }}></div>
                <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 opacity-80`} style={{ borderColor: t.border }}></div>
                <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 opacity-80`} style={{ borderColor: t.border }}></div>
                <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 opacity-80`} style={{ borderColor: t.border }}></div>

                {/* Cabecera del Modal */}
                <div className="flex items-center gap-3 border-b border-white/10 pb-3 mb-4 relative z-10">
                    <div className={`w-2 h-2 animate-ping ${t.bg}`}></div>
                    <h2 className={`text-lg font-mono font-bold tracking-[0.2em] uppercase ${t.text} ${t.glow}`}>
                        {title}
                    </h2>
                </div>

                {/* Cuerpo del mensaje */}
                <div className="font-mono text-sm text-white/80 leading-relaxed mb-8 relative z-10">
                    {children}
                </div>

                {/* Controles de Acción */}
                <div className="flex justify-end gap-4 mt-auto border-t border-white/10 pt-4 relative z-10">
                    <NeoButton variant="ghost" onClick={onClose}>
                        CANCEL
                    </NeoButton>
                    <NeoButton variant={color} onClick={onAction || onClose}>
                        {actionText}
                    </NeoButton>
                </div>
            </div>
        </div>
    );
}