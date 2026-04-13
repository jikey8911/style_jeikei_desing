import { useEffect, useState } from "react"
import { initNeural } from "./core/neural"
import NeoCard from "./components/NeoCard"
import NeoButton from "./components/NeoButton"
import NeoToggle from "./components/NeoToggle"
import NeoProgressBar from "./components/NeoProgressBar"
import NeoInput from "./components/NeoInput";
import NeoTextArea from "./components/NeoTextArea";
import "./index.css"

export default function App() {
  // Inicialización de la red neuronal
  useEffect(() => {
    const canvas = document.getElementById("neural") as HTMLCanvasElement
    if (canvas) initNeural(canvas)
  }, [])

  // Estado para el interruptor táctico
  const [autoSync, setAutoSync] = useState(true);

  return (
    // Contenedor principal con fondo oscuro puro y tipografía de sistema
    <div className="min-h-screen text-white p-6 relative font-sans overflow-hidden">
      {/* Red neuronal de fondo (más opacidad para el look oscuro) */}
      <canvas id="neural" className="fixed inset-0 z-0 opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto space-y-8">

        {/* --- HEADER --- */}
        <header className="flex justify-between items-start pb-4 border-b border-[#00e5ff]/30">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center border border-[#00e5ff] bg-[#00e5ff]/10 rounded-sm relative">
              <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-[#00e5ff]"></div>
              <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-[#00e5ff]"></div>
              <span className="text-[#00e5ff] font-bold text-2xl font-mono leading-none mt-1 text-glow-cyan">A</span>
            </div>
            <div>
              <h1 className="text-2xl font-mono font-bold tracking-[0.3em] text-[#00e5ff] uppercase">
                AUTOMATA SUPERVISOR
              </h1>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#00e5ff]/60 mt-1 font-mono">
                Neural Monitoring Interface_
              </p>
            </div>
          </div>
          <NeoButton variant="ghost" className="gap-2 px-6 flex items-center border-[#00e5ff]/30">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
              <path d="M21 2v6h-6M3 12a9 9 0 0 1 15-6.7L21 8M3 22v-6h6M21 12a9 9 0 0 1-15 6.7L3 16" />
            </svg>
            REFRESH_SYS
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ml-2 opacity-40">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </NeoButton>
        </header>

        {/* --- TOP STATUS ROW --- */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <NeoCard title="Supervisor" value="4" status="ONLINE" color="cyan" />
          <NeoCard title="Docker" value="SYS" status="ONLINE" color="cyan" />
          <NeoCard title="M5 Health" value="ERR" status="OFFLINE" color="red" />
          <NeoCard title="Wallet" value="DISC" status="OFFLINE" color="red" />
          <NeoCard title="Ollama" value="2" status="MODELS" color="orange" />
        </div>

        {/* --- MIDDLE DETAIL ROW --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* UAEs Section */}
          <div className="glass-panel p-5 lg:col-span-1 flex flex-col relative group" style={{ borderTopColor: 'rgba(0, 229, 255, 0.6)' }}>
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00e5ff]"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00e5ff]"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00e5ff]"></div>
            <div className="h-[2px] w-12 bg-[#00e5ff] opacity-70 mb-4 relative z-10"></div>

            <div className="text-[10px] text-[#00e5ff]/70 tracking-[0.2em] uppercase font-mono mb-4 relative z-10">UAEs Activos</div>

            <div className="space-y-4 relative z-10">
              {[
                { name: "UAE-Alpha", status: "RUNNING" },
                { name: "UAE-Beta", hasButtons: true },
                { name: "UAE-Gamma", hasButtons: true },
                { name: "UAE-Delta", hasButtons: true }
              ].map((uae, i) => (
                <div key={i} className="flex justify-between items-center group/uae border-b border-[#00e5ff]/10 pb-2 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-none bg-[#00e5ff] text-glow-cyan animate-pulse" />
                    <span className="text-xs font-mono tracking-wider text-[#00e5ff]/90">{uae.name}</span>
                  </div>
                  {uae.status ? (
                    <NeoButton variant="cyan" className="!px-2 !py-0.5 !text-[9px]">RUNNING</NeoButton>
                  ) : (
                    <div className="flex gap-2">
                      <NeoButton variant="orange" className="!px-2 !py-0.5 !text-[9px]">MITOSIS</NeoButton>
                      <NeoButton variant="red" className="!px-2 !py-0.5 !text-[9px]">KILL</NeoButton>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-5 lg:col-span-1 flex flex-col relative group" style={{ borderTopColor: 'rgba(0, 229, 255, 0.6)' }}>
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00e5ff]"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00e5ff]"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00e5ff]"></div>
            <div className="h-[2px] w-12 bg-[#00e5ff] opacity-70 mb-4 relative z-10"></div>

            <div className="text-[10px] text-[#00e5ff]/70 tracking-[0.2em] uppercase font-mono mb-4 relative z-10">
              Terminal I/O
            </div>

            <div className="space-y-6 relative z-10">
              {/* Input de un sola línea */}
              <NeoInput
                label="TARGET_NODE"
                placeholder="Ej: UAE-Alpha..."
                color="cyan"
              />

              {/* Input en modo alerta (Naranja) */}
              <NeoInput
                label="OVERRIDE_KEY"
                type="password"
                placeholder="***"
                color="orange"
              />

              {/* Text Area para inyectar código o prompts */}
              <NeoTextArea
                label="INJECT_PAYLOAD"
                placeholder="Escribe la directiva aquí..."
                rows={4}
                color="cyan"
              />
            </div>
          </div>

          {/* Balance Section */}
          <div className="glass-panel p-5 lg:col-span-1 flex flex-col relative group" style={{ borderTopColor: 'rgba(0, 229, 255, 0.6)' }}>
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00e5ff]"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00e5ff]"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00e5ff]"></div>
            <div className="h-[2px] w-12 bg-[#00e5ff] opacity-70 mb-4 relative z-10"></div>

            <div className="text-[10px] text-[#00e5ff]/70 tracking-[0.2em] uppercase font-mono mb-2 relative z-10">Saldo Génesis</div>

            <div className="mt-2 space-y-1 relative z-10">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-mono font-bold text-[#00e5ff] text-glow-cyan">5000.00</span>
                <span className="text-[10px] text-[#00e5ff]/50 font-mono">USDT</span>
              </div>
              <div className="text-[#00e5ff]/60 text-xs font-mono tracking-wider mt-2">USDC 3180.23</div>

              <div className="mt-6 flex gap-[2px] items-end pt-4 border-t border-[#00e5ff]/20">
                <div className="w-1.5 h-3 bg-[#00e5ff] animate-pulse"></div>
                <div className="w-1.5 h-4 bg-[#00e5ff]/40"></div>
                <p className="text-[9px] text-[#00e5ff]/60 uppercase font-mono tracking-widest ml-2">Rebalanceo FUND/UNIFIED activo</p>
              </div>
            </div>
          </div>

          {/* NUEVO: System Control Section (Toggles y Progress Bars) */}
          <div className="glass-panel p-5 lg:col-span-1 flex flex-col relative group" style={{ borderTopColor: 'rgba(255, 100, 0, 0.6)' }}>
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#ff6400]"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#ff6400]"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#ff6400]"></div>
            <div className="h-[2px] w-12 bg-[#ff6400] opacity-70 mb-4 relative z-10"></div>

            <div className="text-[10px] text-[#ff6400]/70 tracking-[0.2em] uppercase font-mono mb-4 relative z-10">System Control</div>

            <div className="space-y-4 relative z-10">
              {/* Uso del Toggle */}
              <NeoToggle label="AUTO_REBALANCE" checked={autoSync} onChange={setAutoSync} color="cyan" />
              <NeoToggle label="OVERRIDE_LOCK" checked={!autoSync} onChange={() => { }} color="red" />
            </div>

            <div className="mt-8 space-y-4 relative z-10 border-t border-[#ff6400]/20 pt-4">
              {/* Uso de las Barras de Progreso Segmentadas */}
              <NeoProgressBar label="CPU_LOAD" value={42.5} color="cyan" />
              <NeoProgressBar label="RAM_ALLOC" value={88.2} color="orange" segments={15} />
              <NeoProgressBar label="RISK_FACTOR" value={95} color="red" />
            </div>
          </div>

        </div>

        {/* --- BOTTOM LOG SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="glass-panel p-5 relative" style={{ borderTopColor: 'rgba(0, 229, 255, 0.3)' }}>
            <div className="text-[10px] text-[#00e5ff]/70 tracking-[0.2em] uppercase font-mono mb-4 border-b border-[#00e5ff]/20 pb-2 relative z-10">Logs Supervisor</div>
            <div className="space-y-2 font-mono text-[9px] relative z-10">
              {[
                { time: "23:45:01", msg: "Monitor intentando mitosis", tag: "INFO", v: "cyan" },
                { time: "23:45:59", msg: "UAE-Beta: inactivo MAS_HB_ROUTE_FAIL", tag: "WARN", v: "orange" },
                { time: "23:45:59", msg: "Error de RPC: reaccionar UAEs", tag: "WARN", v: "orange" },
                { time: "23:45:59", msg: "UAE-Gamma: request de mitosis", tag: "CRIT", v: "red" }
              ].map((log, i) => (
                <div key={i} className="flex justify-between items-center py-1 border-b border-[#00e5ff]/10 last:border-0 hover:bg-[#00e5ff]/5 px-1 transition-colors">
                  <span className="text-[#00e5ff]/50">[{log.time}] <span className="text-[#00e5ff] mx-1">›</span> <span className="text-white/80">{log.msg}</span></span>
                  <NeoButton variant={log.v as any} className="!px-2 !py-0.5 cursor-default">{log.tag}</NeoButton>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-5 relative" style={{ borderTopColor: 'rgba(0, 229, 255, 0.3)' }}>
            <div className="text-[10px] text-[#00e5ff]/70 tracking-[0.2em] uppercase font-mono mb-4 border-b border-[#00e5ff]/20 pb-2 relative z-10">Logs UAEs / Actividad</div>
            <div className="space-y-2 font-mono text-[9px] relative z-10">
              {[
                { uae: "UAE-Alpha :: INFO", msg: "Heartbeat recibido", tag: "SYNC", v: "cyan" },
                { uae: "UAE-Beta  :: WARN", msg: "Reacción de mitosis", tag: "ERR", v: "red" },
                { uae: "UAE-Gamma :: WARN", msg: "Analisis de mercado activo", tag: "ERR", v: "red" },
                { uae: "UAE-Delta :: RUN", msg: "Procesando bloque", tag: "", v: "" }
              ].map((log, i) => (
                <div key={i} className="flex justify-between items-center py-1 border-b border-[#00e5ff]/10 last:border-0 h-7 hover:bg-[#00e5ff]/5 px-1 transition-colors">
                  <span className="text-[#00e5ff]/50"><span className="text-[#ff6400]/80">{log.uae}</span> <span className="text-white/80 ml-4">{log.msg}</span></span>
                  {log.tag && <NeoButton variant={log.v as any} className="!px-2 !py-0.5">{log.tag}</NeoButton>}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}