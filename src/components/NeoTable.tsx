import React from 'react';

interface NeoTableProps {
    headers: string[];
    data: any[];
    color?: 'cyan' | 'orange' | 'red';
}

export default function NeoTable({ headers, data, color = 'cyan' }: NeoTableProps) {
    const theme = {
        cyan: "hover:bg-[#00e5ff]/5 border-l-[#00e5ff] text-[#00e5ff]",
        orange: "hover:bg-[#ff6400]/5 border-l-[#ff6400] text-[#ff6400]",
        red: "hover:bg-[#ff003c]/5 border-l-[#ff003c] text-[#ff003c]"
    };

    return (
        <div className="glass-panel w-full overflow-hidden border-t border-white/10">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-[#00e5ff]/30 bg-[#00e5ff]/5">
                        {headers.map((header, i) => (
                            <th key={i} className="p-4 font-mono text-[10px] tracking-[0.2em] uppercase text-[#00e5ff] text-glow-cyan font-bold">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody className="font-mono text-[11px]">
                    {data.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={`group relative border-b border-white/5 transition-all duration-300 border-l-2 border-l-transparent ${theme[color]}`}
                        >
                            {Object.values(row).map((cell: any, i) => (
                                <td key={i} className="p-4 text-white/80 relative z-10">
                                    {cell}
                                </td>
                            ))}

                            {/* Capa de iluminación aleatoria (Scanner) */}
                            <td className="absolute inset-0 pointer-events-none overflow-hidden">
                                <div
                                    className="animate-scan"
                                    style={{
                                        animationDelay: `${Math.random() * 5}s`,
                                        animationDuration: `${2 + Math.random() * 4}s`
                                    }}
                                ></div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Footer con branding */}
            <div className="p-2 bg-black/40 flex justify-between items-center border-t border-white/5">
                <div className="flex gap-1 items-center">
                    <div className="w-1 h-1 bg-[#00e5ff] animate-pulse"></div>
                    <div className="w-8 h-[1px] bg-[#00e5ff]/30"></div>
                    <span className="text-[7px] font-mono text-[#00e5ff]/50 tracking-[0.3em]">SECURE_DATA_STREAM</span>
                </div>
                <span className="text-[8px] font-mono uppercase tracking-[0.4em] text-white/20">END_OF_STREAM</span>
            </div>
        </div>
    );
}