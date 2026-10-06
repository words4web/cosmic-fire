import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ShieldAlert,
  Bell,
  Droplets,
  Cpu,
  Flame,
  LogOut,
  Maximize2,
  RotateCw,
  Activity,
  CheckCircle2,
  Sparkles,
  Layers,
  ChevronRight,
  Info,
} from "lucide-react";
import * as THREE from "three";
import { HERO_HOTSPOTS } from "../data/mockData";
import { HotspotItem } from "../types";

interface HeroBuilding3DProps {
  onSelectHotspot: (hotspot: HotspotItem) => void;
  selectedHotspot: HotspotItem | null;
}

export const HeroBuilding3D: React.FC<HeroBuilding3DProps> = ({
  onSelectHotspot,
  selectedHotspot,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [networkIntensity, setNetworkIntensity] = useState<"normal" | "boost">(
    "normal",
  );
  const [webglSupported, setWebglSupported] = useState(true);

  // Hotspot icon mapping
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldAlert":
        return <ShieldAlert className="w-4 h-4 text-[#FF4D0A]" />;
      case "Bell":
        return <Bell className="w-4 h-4 text-[#FF4D0A]" />;
      case "Droplets":
        return <Droplets className="w-4 h-4 text-[#FF4D0A]" />;
      case "Cpu":
        return <Cpu className="w-4 h-4 text-[#FF4D0A]" />;
      case "Flame":
        return <Flame className="w-4 h-4 text-[#FF4D0A]" />;
      case "LogOut":
        return <LogOut className="w-4 h-4 text-[#FF4D0A]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#FF4D0A]" />;
    }
  };

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch (e) {
      console.warn("WebGL initialization fallback triggered", e);
      setWebglSupported(false);
      return;
    }

    const scene = new THREE.Scene();
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    // Camera setup - slightly low angle architectural hero perspective
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(13, 9, 14);
    camera.lookAt(0, 3.2, 0);

    // Warm Ivory lighting system matching #F8F5ED aesthetic
    const ambientLight = new THREE.AmbientLight(0xfffdf8, 1.4);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfffaed, 2.2);
    sunLight.position.set(15, 20, 10);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    sunLight.shadow.bias = -0.0005;
    scene.add(sunLight);

    // Warm orange bounce light from ground & interior conduits
    const orangeBounce = new THREE.PointLight(0xff6a00, 3.5, 25);
    orangeBounce.position.set(0, 3, 2);
    scene.add(orangeBounce);

    const softFill = new THREE.DirectionalLight(0xffce9a, 0.9);
    softFill.position.set(-12, 10, -8);
    scene.add(softFill);

    // Architectural Building Group
    const buildingGroup = new THREE.Group();
    scene.add(buildingGroup);

    // Materials
    const concreteMaterial = new THREE.MeshStandardMaterial({
      color: 0xded5c6,
      roughness: 0.85,
      metalness: 0.1,
    });

    const darkFrameMaterial = new THREE.MeshStandardMaterial({
      color: 0x242825,
      roughness: 0.4,
      metalness: 0.6,
    });

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.88,
      opacity: 0.85,
      transparent: true,
      roughness: 0.1,
      ior: 1.5,
      reflectivity: 0.6,
      thickness: 0.4,
    });

    const warmInteriorMaterial = new THREE.MeshStandardMaterial({
      color: 0xf5ebdc,
      roughness: 0.7,
    });

    const orangeConduitMaterial = new THREE.MeshStandardMaterial({
      color: 0xff4d0a,
      emissive: 0xff4d0a,
      emissiveIntensity: 1.8,
      roughness: 0.2,
      metalness: 0.1,
    });

    const orangeSensorGlowMaterial = new THREE.MeshStandardMaterial({
      color: 0xff6a00,
      emissive: 0xff6a00,
      emissiveIntensity: 2.6,
      roughness: 0.1,
    });

    // Base podium / foundation
    const foundationGeo = new THREE.BoxGeometry(9.5, 0.4, 7.5);
    const foundation = new THREE.Mesh(foundationGeo, concreteMaterial);
    foundation.position.y = -0.2;
    foundation.receiveShadow = true;
    buildingGroup.add(foundation);

    // Multi-floor construction (4 floors)
    const floorHeight = 1.7;
    const buildingWidth = 8.2;
    const buildingDepth = 6.2;

    for (let f = 0; f < 4; f++) {
      const y = f * floorHeight;

      // Floor slab
      const slabGeo = new THREE.BoxGeometry(buildingWidth, 0.18, buildingDepth);
      const slab = new THREE.Mesh(slabGeo, concreteMaterial);
      slab.position.set(0, y + 0.09, 0);
      slab.castShadow = true;
      slab.receiveShadow = true;
      buildingGroup.add(slab);

      // Interior architectural partitions & furnishings
      const coreGeo = new THREE.BoxGeometry(2.4, floorHeight - 0.2, 2.2);
      const core = new THREE.Mesh(coreGeo, warmInteriorMaterial);
      core.position.set(-1.2, y + (floorHeight - 0.2) / 2 + 0.18, -0.6);
      core.castShadow = true;
      buildingGroup.add(core);

      // Office desk modules inside glass
      const deskGeo = new THREE.BoxGeometry(1.6, 0.1, 0.8);
      const desk = new THREE.Mesh(deskGeo, warmInteriorMaterial);
      desk.position.set(1.4, y + 0.45, 0.8);
      buildingGroup.add(desk);

      // Floor ceiling slab
      if (f === 3) {
        const roofGeo = new THREE.BoxGeometry(
          buildingWidth + 0.4,
          0.3,
          buildingDepth + 0.4,
        );
        const roof = new THREE.Mesh(roofGeo, concreteMaterial);
        roof.position.set(0, 4 * floorHeight + 0.15, 0);
        roof.castShadow = true;
        roof.receiveShadow = true;
        buildingGroup.add(roof);

        // Rooftop plant room
        const plantRoomGeo = new THREE.BoxGeometry(3.5, 1.1, 2.8);
        const plantRoom = new THREE.Mesh(plantRoomGeo, concreteMaterial);
        plantRoom.position.set(-1.0, 4 * floorHeight + 0.8, -0.5);
        buildingGroup.add(plantRoom);
      }

      // Columns (structural)
      const colGeo = new THREE.BoxGeometry(0.24, floorHeight, 0.24);
      const colPositions = [
        [-buildingWidth / 2 + 0.4, -buildingDepth / 2 + 0.4],
        [buildingWidth / 2 - 0.4, -buildingDepth / 2 + 0.4],
        [-buildingWidth / 2 + 0.4, buildingDepth / 2 - 0.4],
        [buildingWidth / 2 - 0.4, buildingDepth / 2 - 0.4],
        [0.8, buildingDepth / 2 - 0.4],
        [-0.8, buildingDepth / 2 - 0.4],
      ];
      colPositions.forEach(([cx, cz]) => {
        const col = new THREE.Mesh(colGeo, darkFrameMaterial);
        col.position.set(cx, y + floorHeight / 2 + 0.09, cz);
        col.castShadow = true;
        buildingGroup.add(col);
      });
    }

    // Glass Facade walls
    const glassFacadeGeo = new THREE.BoxGeometry(
      buildingWidth + 0.04,
      4 * floorHeight,
      buildingDepth + 0.04,
    );
    const glassFacade = new THREE.Mesh(glassFacadeGeo, glassMaterial);
    glassFacade.position.set(0, (4 * floorHeight) / 2 + 0.1, 0);
    buildingGroup.add(glassFacade);

    // Mullions & window frames
    const frameLines = new THREE.Group();
    for (let f = 0; f <= 4; f++) {
      const horizontalMullion = new THREE.BoxGeometry(
        buildingWidth + 0.1,
        0.05,
        buildingDepth + 0.1,
      );
      const hm = new THREE.Mesh(horizontalMullion, darkFrameMaterial);
      hm.position.set(0, f * floorHeight + 0.1, 0);
      frameLines.add(hm);
    }
    for (let x = -3; x <= 3; x += 1.5) {
      const vm = new THREE.Mesh(
        new THREE.BoxGeometry(0.04, 4 * floorHeight, 0.04),
        darkFrameMaterial,
      );
      vm.position.set(x, (4 * floorHeight) / 2 + 0.1, buildingDepth / 2 + 0.03);
      frameLines.add(vm);
    }
    buildingGroup.add(frameLines);

    // ==========================================
    // THE GLOWING ORANGE PROTECTION NETWORK
    // ==========================================
    const networkConduits = new THREE.Group();
    buildingGroup.add(networkConduits);

    // Define continuous 3D paths for conduits traveling through the building
    const conduitCurves: THREE.CatmullRomCurve3[] = [
      // Primary riser 1: Ground to Roof through floor 1,2,3,4
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(-2.8, 0.3, 2.2),
        new THREE.Vector3(-2.8, 1.8, 2.2),
        new THREE.Vector3(-2.8, 1.8, -1.8),
        new THREE.Vector3(2.5, 1.8, -1.8),
        new THREE.Vector3(2.5, 3.5, -1.8),
        new THREE.Vector3(2.5, 3.5, 2.2),
        new THREE.Vector3(-0.5, 3.5, 2.2),
        new THREE.Vector3(-0.5, 5.2, 2.2),
        new THREE.Vector3(3.2, 5.2, 1.2),
        new THREE.Vector3(3.2, 6.9, 0),
      ]),
      // Secondary loop: Perimeter Sprinkler ring on Floor 3 & 4
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(-3.6, 5.3, 2.8),
        new THREE.Vector3(3.6, 5.3, 2.8),
        new THREE.Vector3(3.6, 5.3, -2.8),
        new THREE.Vector3(-3.6, 5.3, -2.8),
        new THREE.Vector3(-3.6, 5.3, 2.8),
      ]),
      // Egress pathway conduit: Ground floor exit to main stairwell
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(3.8, 0.25, 2.9),
        new THREE.Vector3(0.5, 0.25, 2.9),
        new THREE.Vector3(-1.5, 0.25, 1.2),
        new THREE.Vector3(-1.5, 0.25, -2.2),
      ]),
      // Core panel connection to sensors
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(2.0, 2.0, 2.9),
        new THREE.Vector3(2.0, 2.0, 0.0),
        new THREE.Vector3(0.0, 2.0, 0.0),
        new THREE.Vector3(0.0, 3.6, 0.0),
      ]),
    ];

    conduitCurves.forEach((curve) => {
      const tubeGeo = new THREE.TubeGeometry(curve, 64, 0.038, 8, false);
      const tubeMesh = new THREE.Mesh(tubeGeo, orangeConduitMaterial);
      networkConduits.add(tubeMesh);
    });

    // Add glowing terminal nodes / sensors
    const sensorGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const sensorPositions = [
      new THREE.Vector3(0.5, 5.4, 1.5), // Smoke detector floor 4
      new THREE.Vector3(-0.8, 3.7, 2.3), // Fire alarm floor 3
      new THREE.Vector3(3.2, 5.4, 2.2), // Sprinkler head roof/fl4
      new THREE.Vector3(2.0, 2.0, 2.9), // Fire control panel floor 2
      new THREE.Vector3(-2.2, 0.4, 2.7), // Extinguisher floor 1
      new THREE.Vector3(3.8, 0.35, 2.8), // Emergency exit ground
    ];

    const sensorMeshes: THREE.Mesh[] = [];
    sensorPositions.forEach((pos) => {
      const sensor = new THREE.Mesh(sensorGeo, orangeSensorGlowMaterial);
      sensor.position.copy(pos);
      networkConduits.add(sensor);
      sensorMeshes.push(sensor);

      // Beacon halo
      const haloGeo = new THREE.RingGeometry(0.16, 0.28, 24);
      const haloMat = new THREE.MeshBasicMaterial({
        color: 0xff6a00,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6,
      });
      const halo = new THREE.Mesh(haloGeo, haloMat);
      halo.position.copy(pos);
      halo.rotation.x = Math.PI / 2;
      networkConduits.add(halo);
    });

    // Moving signal pulses along conduits
    const pulseCount = 14;
    const pulseGeo = new THREE.SphereGeometry(0.075, 12, 12);
    const pulseMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.95,
    });
    const pulses: {
      mesh: THREE.Mesh;
      curveIndex: number;
      progress: number;
      speed: number;
    }[] = [];

    for (let i = 0; i < pulseCount; i++) {
      const pMesh = new THREE.Mesh(pulseGeo, pulseMat);
      const cIdx = i % conduitCurves.length;
      networkConduits.add(pMesh);
      pulses.push({
        mesh: pMesh,
        curveIndex: cIdx,
        progress: i / pulseCount,
        speed: 0.003 + (i % 3) * 0.0015,
      });
    }

    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Subtle atmospheric sway
      buildingGroup.rotation.y = -0.32 + Math.sin(elapsedTime * 0.25) * 0.04;

      // Update pulses
      pulses.forEach((pulse) => {
        pulse.progress += pulse.speed;
        if (pulse.progress > 1) pulse.progress = 0;
        const pt = conduitCurves[pulse.curveIndex].getPointAt(pulse.progress);
        pulse.mesh.position.copy(pt);
      });

      // Sensor pulsation
      sensorMeshes.forEach((sensor, idx) => {
        const scale = 1 + Math.sin(elapsedTime * 3 + idx) * 0.22;
        sensor.scale.set(scale, scale, scale);
      });

      // Orange bounce light breathe
      orangeBounce.intensity = 2.8 + Math.sin(elapsedTime * 2) * 1.0;

      renderer.render(scene, camera);
    };

    animate();

    // Handle container resize
    const handleResize = () => {
      if (!containerRef.current || !renderer) return;
      const nw = containerRef.current.clientWidth;
      const nh = containerRef.current.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
    };
  }, [networkIntensity]);

  return (
    <div
      ref={containerRef}
      id="hero-3d-visual-stage"
      className="relative w-full h-[580px] lg:h-[680px] select-none rounded-2xl overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-[#F8F5ED] to-[#F2EBDD] border border-[#E7DED0]/60 shadow-xl shadow-[#171B18]/5">
      {/* Background architectural grid and ambient halo */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FF6A00]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#FF4D0A]/10 rounded-full blur-2xl pointer-events-none" />

      {/* 3D WebGL Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing block"
      />

      {/* Telemetry HUD Top-Right Header */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-[#FFFDF8]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E7DED0] shadow-sm text-xs font-mono-tech text-[#52514B]">
        <span className="w-2 h-2 rounded-full bg-[#FF4D0A] animate-ping" />
        <span className="font-semibold text-[#171B18]">NETWORK ACTIVE</span>
        <span className="text-[#E7DED0]">|</span>
        <span>6 NODES MONITORED</span>
      </div>

      {/* Mode Controls Bottom-Left */}
      <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
        <button
          onClick={() =>
            setNetworkIntensity((prev) =>
              prev === "normal" ? "boost" : "normal",
            )
          }
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
            networkIntensity === "boost"
              ? "bg-[#FF4D0A] text-white shadow-md shadow-[#FF4D0A]/40"
              : "bg-[#FFFDF8]/90 text-[#171B18] border border-[#E7DED0] hover:border-[#FF4D0A]"
          }`}
          title="Toggle conduit luminescence boost">
          <Activity className="w-3.5 h-3.5 text-[#FF4D0A] fill-current" />
          <span>
            {networkIntensity === "boost"
              ? "CONDUIT BOOST ACTIVE"
              : "CONDUIT ENHANCE"}
          </span>
        </button>

        <button
          onClick={() => {
            setIsSimulating(true);
            setTimeout(() => setIsSimulating(false), 2600);
          }}
          disabled={isSimulating}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-[#FFFDF8]/90 text-[#171B18] border border-[#E7DED0] hover:border-[#FF4D0A] hover:text-[#FF4D0A] transition-all disabled:opacity-50 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#FF6A00]" />
          <span>
            {isSimulating ? "SIMULATING TELEMETRY..." : "TEST SIGNAL PATH"}
          </span>
        </button>
      </div>

      {/* Simulation Signal Pulse Overlay */}
      {isSimulating && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-[#FF4D0A]/10 backdrop-blur-[1px] pointer-events-none flex items-center justify-center z-30">
          <div className="bg-[#FFFDF8] px-5 py-3 rounded-xl border border-[#FF4D0A] shadow-xl text-center">
            <div className="flex items-center justify-center gap-2 text-sm font-bold text-[#FF4D0A] font-mono-tech mb-1">
              <CheckCircle2 className="w-4 h-4" />
              SYSTEM DIAGNOSTIC: OPTIMAL
            </div>
            <p className="text-xs text-[#52514B]">
              Addressable loop continuous ping latency: 0.4ms. Zero faults
              detected.
            </p>
          </div>
        </motion.div>
      )}

      {/* Interactive Floating Technical Callouts */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {HERO_HOTSPOTS.map((hotspot) => {
          const isSelected = selectedHotspot?.id === hotspot.id;
          const isHovered = activeHoverId === hotspot.id;

          return (
            <div
              key={hotspot.id}
              style={{
                left: `${hotspot.x}%`,
                top: `${hotspot.y}%`,
                transform: "translate(-50%, -50%)",
              }}
              className="absolute pointer-events-auto">
              {/* Leader Line / Anchor Pin */}
              <div className="relative group">
                {/* Glowing target beacon */}
                <button
                  onClick={() => onSelectHotspot(hotspot)}
                  onMouseEnter={() => setActiveHoverId(hotspot.id)}
                  onMouseLeave={() => setActiveHoverId(null)}
                  className={`relative flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all duration-300 shadow-md ${
                    isSelected
                      ? "bg-[#171B18] text-[#FFFDF8] border-[#FF4D0A] ring-2 ring-[#FF4D0A]/40 scale-105"
                      : isHovered
                        ? "bg-[#FFFDF8] text-[#171B18] border-[#FF4D0A] scale-105 shadow-lg shadow-[#FF4D0A]/20"
                        : "bg-[#FFFDF8]/95 text-[#171B18] border-[#E7DED0] hover:border-[#FF4D0A]"
                  }`}
                  aria-label={`Inspect ${hotspot.name}`}>
                  <span className="flex items-center justify-center w-5 h-5 rounded-md bg-[#F2EBDD]">
                    {getIcon(hotspot.iconName)}
                  </span>
                  <span className="text-xs font-semibold whitespace-nowrap tracking-tight">
                    {hotspot.name}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D0A] animate-pulse" />
                </button>

                {/* Extended Details Tooltip on Hover */}
                <AnimatePresence>
                  {isHovered && !isSelected && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-64 p-3 bg-[#FFFDF8] rounded-xl border border-[#FF4D0A]/40 shadow-xl shadow-[#171B18]/10 text-left z-40 pointer-events-none">
                      <div className="flex items-center justify-between text-[11px] font-mono-tech text-[#FF4D0A] uppercase tracking-wider mb-1">
                        <span>{hotspot.category}</span>
                        <span className="text-[#52514B]">{hotspot.floor}</span>
                      </div>
                      <p className="text-xs text-[#52514B] line-clamp-2 leading-relaxed mb-2">
                        {hotspot.description}
                      </p>
                      <div className="flex items-center justify-between pt-1.5 border-t border-[#E7DED0] text-[10px] text-[#171B18] font-semibold">
                        <span>Click to view technical specs</span>
                        <ChevronRight className="w-3 h-3 text-[#FF4D0A]" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Helper Banner */}
      <div className="absolute bottom-4 right-4 z-20 hidden sm:flex items-center gap-2 bg-[#FFFDF8]/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-[#E7DED0] text-[11px] text-[#52514B]">
        <Info className="w-3.5 h-3.5 text-[#FF4D0A]" />
        <span>Click callouts to inspect engineering specs & telemetry</span>
      </div>
    </div>
  );
};
