import React, { useState } from "react";
import { Cpu, Play, Activity, Info } from "lucide-react";
import { BLUEPRINT_NODES } from "../data/blueprint";
import { BlueprintSvgCanvas } from "./graphics/BlueprintSvgCanvas";

export const InteractiveBlueprint: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("panel");
  const [simActive, setSimActive] = useState<boolean>(false);
  const [activeStage, setActiveStage] = useState<number>(0);

  const selectedNode =
    BLUEPRINT_NODES.find((n) => n.id === selectedNodeId) || BLUEPRINT_NODES[3];

  const handleTriggerSimulation = () => {
    if (simActive) return;
    setSimActive(true);
    setActiveStage(1);
    setSelectedNodeId("detector-zone1");

    setTimeout(() => {
      setActiveStage(2);
      setSelectedNodeId("panel");
    }, 1200);

    setTimeout(() => {
      setActiveStage(3);
      setSelectedNodeId("alarm-strobe");
    }, 2400);

    setTimeout(() => {
      setActiveStage(4);
      setSelectedNodeId("sprinkler-zone1");
    }, 3600);

    setTimeout(() => {
      setSimActive(false);
      setActiveStage(0);
    }, 5200);
  };

  return (
    <section
      id="interactive-blueprint"
      className="py-12 sm:py-16 md:py-24 bg-surface-bg relative overflow-hidden border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-surface-border text-[10px] sm:text-xs font-mono-tech uppercase tracking-widest text-brand-primary font-bold mb-3 shadow-xs">
              <Cpu className="w-3.5 h-3.5 text-brand-primary shrink-0" />
              <span>Conceptual System Architecture</span>
            </div>
            <h2 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl lg:text-5xl tracking-tight text-text-primary leading-[1.12]">
              SEE THE PROTECTION SYSTEM AT WORK.
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary mt-2 max-w-xl leading-relaxed">
              Interact with our conceptual floor plan blueprint. Inspect
              addressable nodes or run a live simulation of early detection and
              rapid response propagation.
            </p>
          </div>

          <div className="flex items-center">
            <button
              onClick={handleTriggerSimulation}
              disabled={simActive}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-full text-xs font-bold font-mono-tech uppercase tracking-wider transition-all shadow-md cursor-pointer ${
                simActive
                  ? "bg-text-primary text-surface-card border border-brand-primary"
                  : "bg-brand-primary hover:bg-brand-primary-hover active:scale-95 text-white shadow-brand-primary/30"
              }`}>
              {simActive ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-brand-primary animate-ping" />
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-8 bg-surface-card rounded-2xl sm:rounded-3xl border border-surface-border p-3 sm:p-6 md:p-8 shadow-xl shadow-text-primary/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-blueprint-grid opacity-80 pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between gap-2 mb-3 sm:mb-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-bg border border-surface-border text-[10px] font-mono-tech text-text-secondary">
                <Info className="w-3 h-3 text-brand-primary shrink-0" />
                <span className="truncate">
                  CONCEPTUAL SCHEMATIC — NFPA 72 LOOP 01
                </span>
              </div>
            </div>

            <div className="relative aspect-[16/10] sm:aspect-[16/10] w-full mt-2 sm:mt-4 rounded-xl overflow-hidden bg-surface-card/60">
              <BlueprintSvgCanvas simActive={simActive} />

              {BLUEPRINT_NODES.map((node) => {
                const isSelected = selectedNodeId === node.id;
                const Icon = node.icon;
                return (
                  <div
                    key={node.id}
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
                    onClick={() => setSelectedNodeId(node.id)}>
                    <div
                      className={`relative flex items-center justify-center w-8 h-8 xs:w-9 xs:h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl transition-all duration-300 shadow-md ${
                        isSelected
                          ? "bg-text-primary text-surface-card ring-2 sm:ring-4 ring-brand-primary/30 scale-110 border border-brand-primary"
                          : "bg-surface-card hover:bg-surface-muted text-text-primary border border-surface-border hover:border-brand-primary"
                      }`}>
                      <Icon
                        className={`w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 ${
                          isSelected
                            ? "text-brand-primary"
                            : "text-text-primary group-hover:text-brand-primary"
                        }`}
                      />
                      {isSelected && (
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-brand-primary animate-ping" />
                      )}
                    </div>

                    <div className="hidden xs:block absolute top-full mt-1 sm:mt-1.5 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none">
                      <span
                        className={`text-[9px] sm:text-[10px] font-mono-tech px-1.5 py-0.5 sm:px-2 rounded shadow-xs transition-colors ${
                          isSelected
                            ? "bg-text-primary text-white font-bold"
                            : "bg-surface-card/90 text-text-secondary border border-surface-border"
                        }`}>
                        {node.name.split(" ")[0]}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-surface-border flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 text-[11px] sm:text-xs font-mono-tech text-text-secondary">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-primary" />
                  <span>Addressable Ring Conduits</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>6 Supervised Devices</span>
                </span>
              </div>
              <span className="truncate">
                Protocol: NFPA 72 Class A Supervised Loop
              </span>
            </div>
          </div>

          <div className="w-full lg:col-span-4">
            <div className="bg-surface-card rounded-2xl sm:rounded-3xl border border-surface-border p-5 sm:p-7 shadow-xl shadow-text-primary/5">
              <div className="flex items-center justify-between pb-4 border-b border-surface-border mb-4 sm:mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-surface-bg border border-surface-border flex items-center justify-center text-brand-primary shadow-xs">
                    {React.createElement(selectedNode.icon, {
                      className: "w-5 h-5",
                    })}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-tech uppercase tracking-wider text-brand-primary font-bold">
                      {selectedNode.type}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-text-primary">
                      {selectedNode.name}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="mb-4 p-2.5 rounded-xl bg-surface-bg border border-surface-border/70 text-xs font-mono-tech text-text-secondary">
                <div className="font-semibold text-text-primary mb-0.5">
                  Location Zoning:
                </div>
                <div>{selectedNode.zone}</div>
              </div>

              <div className="mb-4 sm:mb-5">
                <div className="text-xs font-mono-tech uppercase tracking-wider text-text-secondary font-semibold mb-1">
                  Active Telemetry Status
                </div>
                <div className="flex items-center gap-2 text-xs font-mono-tech text-emerald-700 bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-200">
                  <Activity className="w-4 h-4 text-emerald-600 animate-pulse shrink-0" />
                  <span className="leading-snug">{selectedNode.status}</span>
                </div>
              </div>

              <div className="mb-4 sm:mb-5">
                <div className="text-xs font-mono-tech uppercase tracking-wider text-text-secondary font-semibold mb-1">
                  Hardware Specification
                </div>
                <p className="text-xs text-text-primary p-3 rounded-xl bg-surface-bg border border-surface-border leading-relaxed">
                  {selectedNode.specs}
                </p>
              </div>

              <div className="mb-5 sm:mb-6">
                <div className="text-xs font-mono-tech uppercase tracking-wider text-text-secondary font-semibold mb-1">
                  System Architecture Function
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {selectedNode.description}
                </p>
              </div>

              <div className="pt-4 border-t border-surface-border">
                <span className="text-[10px] font-mono-tech uppercase tracking-wider text-text-secondary block mb-2 font-semibold">
                  Select Another Hardware Node:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-1.5">
                  {BLUEPRINT_NODES.map((n) => (
                    <button
                      key={n.id}
                      onClick={() => setSelectedNodeId(n.id)}
                      className={`text-left text-[11px] px-2.5 py-1.5 rounded-lg transition-colors truncate font-mono-tech cursor-pointer border ${
                        selectedNodeId === n.id
                          ? "bg-text-primary text-white font-bold border-text-primary"
                          : "bg-surface-bg hover:bg-surface-muted text-text-secondary border-surface-border"
                      }`}>
                      {n.name.split(" ")[0]}
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
