import { useEffect, useState } from "react"
import { initNeural } from "./core/neural"
import NeoCard from "./components/NeoCard"
import NeoButton from "./components/NeoButton"
import NeoToggle from "./components/NeoToggle"
import NeoProgressBar from "./components/NeoProgressBar"
import NeoInput from "./components/NeoInput";
import NeoTextArea from "./components/NeoTextArea";
import NeoModal from "./components/NeoModal"
import NeoLoader from "./components/NeoLoader";
import NeoTabs from "./components/NeoTabs";
import NeoTable from "./components/NeoTable";
import NeoAlert from "./components/NeoAlert";
import NeoTooltip from "./components/NeoTooltip"
import "./index.css"

export default function App() {
  // Inicialización de la red neuronal
  useEffect(() => {
    const canvas = document.getElementById("neural") as HTMLCanvasElement
    if (canvas) initNeural(canvas)
  }, [])

  // ESTADOS DE INTERFAZ
  const [autoSync, setAutoSync] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState('overview');
  const [alerts, setAlerts] = useState<{ id: number, msg: string, type: any }[]>([]);
  // 2. Función para disparar alertas
  const addAlert = (msg: string, type: any) => {
    const id = Date.now();
    setAlerts(prev => [...prev, { id, msg, type }]);
  };

  // Datos para la tabla de logs
  const logData = [
    { id: "TX-982", node: "UAE-Alpha", action: "BUY_ORDER", status: "SUCCESS" },
    { id: "TX-983", node: "UAE-Beta", action: "MITOSIS_REQ", status: "PENDING" },
    { id: "TX-984", node: "UAE-Gamma", action: "SCAN_MARKET", status: "ACTIVE" },
    { id: "TX-985", node: "UAE-Delta", action: "PURGE_CACHE", status: "COMPLETED" },
  ];

  return (
    <div className="min-h-screen text-white p-6 relative font-sans overflow-hidden">
      <canvas id="neural" className="fixed inset-0 z-0 opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto space-y-8">

        <div className="fixed bottom-6 right-6 z-[100]">
          {alerts.map(alert => (
            <NeoAlert
              key={alert.id}
              message={alert.msg}
              type={alert.type}
              onClose={() => setAlerts(prev => prev.filter(a => a.id !== alert.id))}
            />
          ))}
        </div>

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
            REFRESH_SYS
          </NeoButton>
        </header>

        {/* --- NAVEGACIÓN POR PESTAÑAS --- */}
        <NeoTabs
          tabs={[
            { id: 'overview', label: 'Overview' },
            { id: 'logs', label: 'System_Logs' },
            { id: 'terminal', label: 'Terminal_I/O' }
          ]}
          activeTab={currentTab}
          onChange={setCurrentTab}
        />

        {/* --- CONTENIDO DINÁMICO --- */}
        {currentTab === 'overview' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            {/* Top Status Row */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <NeoCard title="Supervisor" value="4" status="ONLINE" color="cyan" />
              <NeoCard title="Docker" value="SYS" status="ONLINE" color="cyan" />
              <NeoCard title="M5 Health" value="ERR" status="OFFLINE" color="red" />
              <NeoCard title="Wallet" value="DISC" status="OFFLINE" color="red" />
              <NeoCard title="Ollama" value="2" status="MODELS" color="orange" />
            </div>

            {/* Middle Detail Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* Panel de UAEs */}
              <div className="glass-panel p-5 flex flex-col relative" style={{ borderTopColor: 'rgba(0, 229, 255, 0.6)' }}>
                <div className="text-[10px] text-[#00e5ff]/70 tracking-[0.2em] uppercase font-mono mb-4">UAEs Activos</div>
                <div className="space-y-4">
                  {["UAE-Alpha", "UAE-Beta", "UAE-Gamma"].map((name, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-[#00e5ff]/10 pb-2">
                      <span className="text-xs font-mono text-[#00e5ff]/90">{name}</span>
                      <NeoButton variant="red" className="!px-2 !py-0.5 !text-[9px]" onClick={() => setIsModalOpen(true)}>KILL</NeoButton>
                    </div>
                  ))}
                </div>
              </div>



              {/* Panel de Control de Sistema */}
              <div className="glass-panel p-5 flex flex-col relative" style={{ borderTopColor: 'rgba(255, 100, 0, 0.6)' }}>
                <div className="text-[10px] text-[#ff6400]/70 tracking-[0.2em] uppercase font-mono mb-4">System Control</div>
                <div className="space-y-4 mb-6">
                  <NeoToggle label="AUTO_REBALANCE" checked={autoSync} onChange={setAutoSync} color="cyan" />
                  <NeoToggle label="OVERRIDE_LOCK" checked={!autoSync} onChange={() => { }} color="red" />
                </div>
                <NeoProgressBar label="CPU_LOAD" value={42.5} color="cyan" />
                <div className="mt-4">
                  <NeoProgressBar label="RISK_FACTOR" value={95} color="red" />
                </div>
              </div>

              {/* Panel de Procesamiento (Loader) */}
              <div className="glass-panel p-5 flex flex-col items-center justify-center min-h-[200px]" style={{ borderTopColor: 'rgba(0, 229, 255, 0.3)' }}>
                <NeoLoader text="ANALYZING_MARKET_SPREAD" color="cyan" />
              </div>

            </div>

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
              <NeoTooltip content="INICIAR PROTOCOLO DE PURGA">
                <NeoButton variant="red" onClick={() => addAlert("PROTOCOLO INICIADO", "red")}>
                  PURGE
                </NeoButton>
              </NeoTooltip>
            </div>



          </div>




        )}

        {currentTab === 'logs' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <NeoTable
              headers={["ID_SEC", "SOURCE_NODE", "OPERATION", "STATUS"]}
              data={logData}
              color="cyan"
            />

          </div>


        )}



        {currentTab === 'terminal' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-in zoom-in-95 duration-300">
            <div className="glass-panel p-6 space-y-6">
              <NeoInput label="TARGET_NODE" placeholder="UAE-Alpha..." color="cyan" />
              <NeoInput label="SEC_KEY" type="password" placeholder="***" color="orange" />
              <NeoTextArea label="COMMAND_INJECTION" rows={6} placeholder="Enter payload..." />
              <NeoButton className="w-full">EXECUTE_SEQUENCE</NeoButton>
            </div>
          </div>
        )}

        {/* --- MODAL GLOBAL --- */}
        <NeoModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="SYSTEM_WARNING: PURGE_PROTOCOL"
          color="red"
          actionText="EXECUTE_PURGE"
        >
          <p>¿Confirmar eliminación del nodo? Esta acción purgará todos los hilos de ejecución activos en la memoria volátil.</p>
        </NeoModal>

      </div>
    </div>
  )
}

