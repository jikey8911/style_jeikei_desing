import React, { useState } from 'react';

interface NeoTooltipProps {
    content: string;
    children: React.ReactNode;
    position?: 'top' | 'bottom';
}

export default function NeoTooltip({ content, children, position = 'top' }: NeoTooltipProps) {
    const [isVisible, setIsVisible] = useState(false);

    const posClasses = position === 'top'
        ? "bottom-full mb-2"
        : "top-full mt-2";

    return (
        <div
            className="relative flex items-center justify-center inline-block"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}

            {isVisible && (
                <div className={`absolute ${posClasses} z-[100] animate-in fade-in zoom-in-95 duration-200 pointer-events-none`}>
                    <div className="glass-panel px-3 py-1.5 border-[#00e5ff]/40 bg-black/80 backdrop-blur-xl min-w-max">
                        <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-[#00e5ff]"></div>
                        <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-[#00e5ff]"></div>
                        <p className="text-[9px] font-mono text-[#00e5ff] tracking-tight uppercase">
                            {content}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}