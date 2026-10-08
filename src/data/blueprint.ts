import { ShieldAlert, Bell, Droplets, Cpu, Flame, LogOut } from "lucide-react";
import { BlueprintNode } from "../types";

export const BLUEPRINT_NODES: BlueprintNode[] = [
  {
    id: "detector-zone1",
    name: "Optical ASD Smoke Sensor",
    type: "Detection Point",
    x: 28,
    y: 32,
    zone: "Zone A — Main Commercial Floor",
    status: "Normal Monitoring (0.01% obs/m)",
    specs: "EN54-7 Dual Optical Chamber with Micro-Dust Filter",
    description:
      "Continuously monitors ambient air density for sub-visible combustion aerosols with zero false alarms from HVAC air movement.",
    icon: ShieldAlert,
  },
  {
    id: "sprinkler-zone1",
    name: "Fast-Response ESFR Sprinkler",
    type: "Suppression Nozzle",
    x: 48,
    y: 28,
    zone: "Zone A — Perimeter Ceiling Grid",
    status: "Standby / Monitored Hydraulic Pressure 145 PSI",
    specs: "K-Factor 16.8, 68°C Frangible Thermal Quartz Bulb",
    description:
      "Engineered wet-pipe distribution providing rapid cone dispersion directly over ignition focal points while isolating dry perimeter sectors.",
    icon: Droplets,
  },
  {
    id: "alarm-strobe",
    name: "Multi-Candela Voice Strobe",
    type: "Acoustic & Visual Notification",
    x: 74,
    y: 35,
    zone: "Zone B — Primary Corridor Egress",
    status: "Loop Synchronized (0.5Hz Beacon Flash)",
    specs: "95dBA @ 10ft, 520Hz Low-Frequency Directional Sounder",
    description:
      "Delivers high-intensity visual wayfinding and automated multilingual evacuation announcements to maintain calm exit flow.",
    icon: Bell,
  },
  {
    id: "panel",
    name: "Central Addressable Control Hub",
    type: "Command Intelligence Core",
    x: 52,
    y: 65,
    zone: "Zone C — Security & Infrastructure Hub",
    status: "Loop 1 & 2 Normal | Polling Cycle 0.2s",
    specs: "EN54-2/4 & UL864 10th Ed Listed Quad-Loop Panel",
    description:
      "The master operational nerve center aggregating loop sensor telemetry, triggering damper releases, and relaying dispatches.",
    icon: Cpu,
  },
  {
    id: "extinguisher-bay",
    name: "Clean Agent Recessed Extinguisher",
    type: "Manual First Response",
    x: 30,
    y: 72,
    zone: "Zone C — Public Reception Egress",
    status: "Ready / Monitored Pressure 195 PSI",
    specs: "Class A, B, C & Electrical Non-Conductive Agent",
    description:
      "Strategically recessed manual extinguisher point equipped with wireless tamper telemetry and pressure monitoring.",
    icon: Flame,
  },
  {
    id: "emergency-door",
    name: "Pressurized Emergency Exit Egress",
    type: "Egress Pathway & Barrier",
    x: 82,
    y: 72,
    zone: "Zone B — Stairwell Fire Door Airlock",
    status: "Magnetic Hold Open / Failsafe Release Ready",
    specs: "120-Minute Fire Rated Door with Positive Pressure Seal",
    description:
      "Fail-safe magnetic door holder linked to fire panel, instantly releasing upon alarm to compartmentalize stairwell escapes from smoke.",
    icon: LogOut,
  },
];
