import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldAlert, 
  Bell, 
  Droplets, 
  Cpu, 
  Flame, 
  LogOut, 
  Play, 
  RotateCcw, 
  Layers, 
  Activity,
  CheckCircle2,
  Info
} from 'lucide-react';

interface BlueprintNode {
  id: string;
  name: string;
  type: string;
  x: number;
  y: number;
  zone: string;
  status: string;
  specs: string;
  description: string;
  icon: any;
}

export const InteractiveBlueprint: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('panel');
  const [simActive, setSimActive] = useState<boolean>(false);
  const [activeStage, setActiveStage] = useState<number>(0);

  const blueprintNodes: BlueprintNode[] = [
    {
      id: 'detector-zone1',
      name: 'Optical ASD Smoke Sensor',
      type: 'Detection Point',
      x: 28,
      y: 32,
      zone: 'Zone A — Main Commercial Floor',
      status: 'Normal Monitoring (0.01% obs/m)',
      specs: 'EN54-7 Dual Optical Chamber with Micro-Dust Filter',
      description: 'Continuously monitors ambient air density for sub-visible combustion aerosols with zero false alarms from HVAC air movement.',
      icon: ShieldAlert,
    },
    {
      id: 'sprinkler-zone1',
      name: 'Fast-Response ESFR Sprinkler',
      type: 'Suppression Nozzle',
      x: 48,
      y: 28,
      zone: 'Zone A — Perimeter Ceiling Grid',
      status: 'Standby / Monitored Hydraulic Pressure 145 PSI',
      specs: 'K-Factor 16.8, 68°C Frangible Thermal Quartz Bulb',
      description: 'Engineered wet-pipe distribution providing rapid cone dispersion directly over ignition focal points while isolating dry perimeter sectors.',
      icon: Droplets,
    },
    {
      id: 'alarm-strobe',
      name: 'Multi-Candela Voice Strobe',
      type: 'Acoustic & Visual Notification',
      x: 74,
      y: 35,
      zone: 'Zone B — Primary Corridor Egress',
      status: 'Loop Synchronized (0.5Hz Beacon Flash)',
      specs: '95dBA @ 10ft, 520Hz Low-Frequency Directional Sounder',
      description: 'Delivers high-intensity visual wayfinding and automated multilingual evacuation announcements to maintain calm exit flow.',
      icon: Bell,
    },
    {
      id: 'panel',
      name: 'Central Addressable Control Hub',
      type: 'Command Intelligence Core',
      x: 52,
      y: 65,
      zone: 'Zone C — Security & Infrastructure Hub',
      status: 'Loop 1 & 2 Normal | Polling Cycle 0.2s',
      specs: 'EN54-2/4 & UL864 10th Ed Listed Quad-Loop Panel',
      description: 'The master operational nerve center aggregating loop sensor telemetry, triggering damper releases, and relaying dispatches.',
      icon: Cpu,
    },
    {
      id: 'extinguisher-bay',
      name: 'Clean Agent Recessed Extinguisher',
      type: 'Manual First Response',
      x: 30,
      y: 72,
      zone: 'Zone C — Public Reception Egress',
      status: 'Ready / Monitored Pressure 195 PSI',
      specs: 'Class A, B, C & Electrical Non-Conductive Agent',
      description: 'Strategically recessed manual extinguisher point equipped with wireless tamper telemetry and pressure monitoring.',
      icon: Flame,
    },
    {
      id: 'emergency-door',
      name: 'Pressurized Emergency Exit Egress',
      type: 'Egress Pathway & Barrier',
      x: 82,
      y: 72,
      zone: 'Zone B — Stairwell Fire Door Airlock',
      status: 'Magnetic Hold Open / Failsafe Release Ready',
      specs: '120-Minute Fire Rated Door with Positive Pressure Seal',
      description: 'Fail-safe magnetic door holder linked to fire panel, instantly releasing upon alarm to compartmentalize stairwell escapes from smoke.',
      icon: LogOut,
    },
  ];

  const selectedNode = blueprintNodes.find((n) => n.id === selectedNodeId) || blueprintNodes[3];

  const handleTriggerSimulation = () => {
    if (simActive) return;
    setSimActive(true);
    setActiveStage(1);
    setSelectedNodeId('detector-zone1');

    setTimeout(() => {
      setActiveStage(2);
      setSelectedNodeId('panel');
    }, 1200);

    setTimeout(() => {
      setActiveStage(3);
      setSelectedNodeId('alarm-strobe');
    }, 2400);

    setTimeout(() => {
      setActiveStage(4);
      setSelectedNodeId('sprinkler-zone1');
    }, 3600);

    setTimeout(() => {
      setSimActive(false);
      setActiveStage(0);
    }, 5200);
  };

  return (
    <section id="interactive-blueprint" className="py-24 bg-[#F8F5ED] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-5 h-[2px] bg-[#FF4D0A]" />
              <span className="text-xs font-mono-tech uppercase tracking-widest text-[#FF4D0A] font-bold">
                CONCEPTUAL SYSTEM ARCHITECTURE
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#171B18]">
              SEE THE PROTECTION SYSTEM AT WORK.
            </h2>
            <p className="text-sm text-[#52514B] mt-2 max-w-xl">
              Interact with our conceptual floor plan blueprint. Inspect addressable nodes or run a live simulation of early detection and rapid response propagation.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleTriggerSimulation}
              disabled={simActive}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold font-mono-tech uppercase tracking-wider transition-all shadow-md ${
                simActive
                  ? 'bg-[#171B18] text-[#FFFDF8] border border-[#FF4D0A]'
                  : 'bg-[#FF4D0A] hover:bg-[#FF6A00] text-white shadow-[#FF4D0A]/30 active:scale-95'
              }`}
            >
              {simActive ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-[#FF4D0A] animate-ping" />
                  <span>SIMULATING STAGE 0{activeStage} / 04...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Test Alarm Simulation</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Master Blueprint Workspace Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Blueprint Canvas Display */}
          <div className="lg:col-span-8 bg-[#FFFDF8] rounded-2xl border border-[#E7DED0] p-4 sm:p-8 shadow-xl shadow-[#171B18]/5 relative overflow-hidden">
            
            {/* Architectural Grid Background */}
            <div className="absolute inset-0 bg-blueprint-grid opacity-80 pointer-events-none" />

            {/* Conceptual Blueprint Notice */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F2EBDD] border border-[#E7DED0] text-[10px] font-mono-tech text-[#52514B]">
              <Info className="w-3 h-3 text-[#FF4D0A]" />
              <span>CONCEPTUAL SCHEMATIC — NFPA 72 LOOP 01</span>
            </div>

            {/* Blueprint SVG Architecture & Orange Conduits */}
            <div className="relative aspect-[16/10] w-full mt-6">
              <svg
                viewBox="0 0 1000 620"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Structural Walls (Charcoal Blueprint Lines) */}
                <rect x="80" y="80" width="840" height="460" stroke="#171B18" strokeWidth="4" strokeLinecap="round" />
                
                {/* Interior Partition Walls */}
                <line x1="80" y1="260" x2="620" y2="260" stroke="#171B18" strokeWidth="2.5" strokeDasharray="6 4" />
                <line x1="420" y1="260" x2="420" y2="540" stroke="#171B18" strokeWidth="2.5" />
                <line x1="620" y1="80" x2="620" y2="440" stroke="#171B18" strokeWidth="2.5" />
                <line x1="620" y1="440" x2="920" y2="440" stroke="#171B18" strokeWidth="2.5" />
                
                {/* Stairwell / Corridor egress zones */}
                <rect x="760" y="320" width="160" height="220" stroke="#52514B" strokeWidth="1.5" strokeDasharray="4 4" />
                <text x="780" y="360" fill="#52514B" fontSize="11" fontFamily="JetBrains Mono" letterSpacing="1">STAIRWELL EXIT</text>
                <text x="120" y="130" fill="#52514B" fontSize="12" fontFamily="JetBrains Mono" letterSpacing="1">ZONE A — OPEN OFFICE &amp; TRADING</text>
                <text x="120" y="320" fill="#52514B" fontSize="12" fontFamily="JetBrains Mono" letterSpacing="1">ZONE C — CORE OPERATIONS &amp; COMM</text>
                <text x="660" y="130" fill="#52514B" fontSize="12" fontFamily="JetBrains Mono" letterSpacing="1">ZONE B — CORRIDOR</text>

                {/* THE GLOWING ORANGE PROTECTION CONDUIT NETWORK */}
                <path
                  d="M 520 400 L 520 280 L 280 280 L 280 190"
                  stroke="#FF4D0A"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  className={simActive ? 'animate-flow-fast' : 'animate-flow-dash'}
                  style={{ filter: 'drop-shadow(0 0 6px rgba(255, 77, 10, 0.7))' }}
                />
                <path
                  d="M 520 400 L 480 400 L 480 170"
                  stroke="#FF4D0A"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="animate-flow-dash"
                  style={{ filter: 'drop-shadow(0 0 5px rgba(255, 77, 10, 0.6))' }}
                />
                <path
                  d="M 520 400 L 740 400 L 740 215"
                  stroke="#FF4D0A"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  className={simActive ? 'animate-flow-fast' : 'animate-flow-dash'}
                  style={{ filter: 'drop-shadow(0 0 6px rgba(255, 77, 10, 0.7))' }}
                />
                <path
                  d="M 520 400 L 300 400 L 300 445"
                  stroke="#FF6A00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="animate-flow-dash"
                />
                <path
                  d="M 520 400 L 820 400 L 820 445"
                  stroke="#FF6A00"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="animate-flow-dash"
                  style={{ filter: 'drop-shadow(0 0 6px rgba(255, 77, 10, 0.6))' }}
                />

                {/* Dynamic Signal Pulses during Simulation */}
                {simActive && (
                  <circle
                    cx="520"
                    cy="400"
                    r="45"
                    fill="none"
                    stroke="#FF4D0A"
                    strokeWidth="2"
                    className="animate-ping"
                  />
                )}
              </svg>

              {/* Hotspot Interactive Markers Placed Dynamically */}
              {blueprintNodes.map((node) => {
                const isSelected = selectedNodeId === node.id;
                const Icon = node.icon;
                return (
                  <div
                    key={node.id}
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
                    onClick={() => setSelectedNodeId(node.id)}
                  >
                    <div
                      className={`relative flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300 shadow-md ${
                        isSelected
                          ? 'bg-[#171B18] text-[#FFFDF8] ring-4 ring-[#FF4D0A]/30 scale-110 border border-[#FF4D0A]'
                          : 'bg-[#FFFDF8] hover:bg-[#F2EBDD] text-[#171B18] border border-[#E7DED0] hover:border-[#FF4D0A]'
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          isSelected ? 'text-[#FF4D0A]' : 'text-[#171B18] group-hover:text-[#FF4D0A]'
                        }`}
                      />
                      {isSelected && (
                        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#FF4D0A] animate-ping" />
                      )}
                    </div>

                    {/* Node Tag Label */}
                    <div className="absolute top-full mt-1.5 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none">
                      <span
                        className={`text-[10px] font-mono-tech px-2 py-0.5 rounded shadow-sm transition-colors ${
                          isSelected
                            ? 'bg-[#171B18] text-white font-bold'
                            : 'bg-[#FFFDF8]/90 text-[#52514B] border border-[#E7DED0]'
                        }`}
                      >
                        {node.name.split(' ')[0]}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Status Bar */}
            <div className="mt-6 pt-4 border-t border-[#E7DED0] flex flex-wrap items-center justify-between gap-4 text-xs font-mono-tech text-[#52514B]">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF4D0A]" />
                  <span>Addressable Ring Conduits</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>6 Supervised Devices</span>
                </span>
              </div>
              <span>Protocol: NFPA 72 Class A Supervised Loop</span>
            </div>
          </div>

          {/* Right: Selected Node Inspection Card */}
          <div className="lg:col-span-4">
            <div className="bg-[#FFFDF8] rounded-2xl border border-[#E7DED0] p-6 sm:p-7 shadow-xl shadow-[#171B18]/5">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#E7DED0] mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F8F5ED] border border-[#E7DED0] flex items-center justify-center text-[#FF4D0A]">
                    {React.createElement(selectedNode.icon, { className: 'w-5 h-5' })}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-tech uppercase tracking-wider text-[#FF4D0A] font-bold">
                      {selectedNode.type}
                    </span>
                    <h3 className="text-base font-bold text-[#171B18]">
                      {selectedNode.name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Zone Tag */}
              <div className="mb-4 p-2.5 rounded-lg bg-[#F8F5ED] border border-[#E7DED0]/70 text-xs font-mono-tech text-[#52514B]">
                <div className="font-semibold text-[#171B18] mb-0.5">Location Zoning:</div>
                <div>{selectedNode.zone}</div>
              </div>

              {/* Telemetry Status */}
              <div className="mb-5">
                <div className="text-xs font-mono-tech uppercase tracking-wider text-[#52514B] font-semibold mb-1">
                  Active Telemetry Status
                </div>
                <div className="flex items-center gap-2 text-xs font-mono-tech text-emerald-700 bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-200">
                  <Activity className="w-4 h-4 text-emerald-600 animate-pulse" />
                  <span>{selectedNode.status}</span>
                </div>
              </div>

              {/* Engineering Specs */}
              <div className="mb-5">
                <div className="text-xs font-mono-tech uppercase tracking-wider text-[#52514B] font-semibold mb-1">
                  Hardware Specification
                </div>
                <p className="text-xs text-[#171B18] p-3 rounded-lg bg-[#F8F5ED] border border-[#E7DED0] leading-relaxed">
                  {selectedNode.specs}
                </p>
              </div>

              {/* Functional Description */}
              <div className="mb-6">
                <div className="text-xs font-mono-tech uppercase tracking-wider text-[#52514B] font-semibold mb-1">
                  System Architecture Function
                </div>
                <p className="text-xs text-[#52514B] leading-relaxed">
                  {selectedNode.description}
                </p>
              </div>

              {/* Switch Nodes Quick Links */}
              <div className="pt-4 border-t border-[#E7DED0]">
                <span className="text-[10px] font-mono-tech uppercase tracking-wider text-[#52514B] block mb-2 font-semibold">
                  Select Another Hardware Node:
                </span>
                <div className="grid grid-cols-2 gap-1.5">
                  {blueprintNodes.map((n) => (
                    <button
                      key={n.id}
                      onClick={() => setSelectedNodeId(n.id)}
                      className={`text-left text-[11px] px-2.5 py-1.5 rounded-lg transition-colors truncate font-mono-tech ${
                        selectedNodeId === n.id
                          ? 'bg-[#171B18] text-white font-bold'
                          : 'bg-[#F8F5ED] hover:bg-[#E7DED0] text-[#52514B]'
                      }`}
                    >
                      {n.name.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
