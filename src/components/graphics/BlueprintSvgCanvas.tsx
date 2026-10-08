import React from "react";

export const BlueprintSvgCanvas = ({ simActive }: { simActive: boolean }) => {
  return (
    <svg
      viewBox="0 0 1000 620"
      className="w-full h-full select-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect
        x="80"
        y="80"
        width="840"
        height="460"
        stroke="#171B18"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <line
        x1="80"
        y1="260"
        x2="620"
        y2="260"
        stroke="#171B18"
        strokeWidth="2.5"
        strokeDasharray="6 4"
      />
      <line
        x1="420"
        y1="260"
        x2="420"
        y2="540"
        stroke="#171B18"
        strokeWidth="2.5"
      />
      <line
        x1="620"
        y1="80"
        x2="620"
        y2="440"
        stroke="#171B18"
        strokeWidth="2.5"
      />
      <line
        x1="620"
        y1="440"
        x2="920"
        y2="440"
        stroke="#171B18"
        strokeWidth="2.5"
      />

      <rect
        x="760"
        y="320"
        width="160"
        height="220"
        stroke="#52514B"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      <text
        x="780"
        y="360"
        fill="#52514B"
        fontSize="11"
        fontFamily="JetBrains Mono"
        letterSpacing="1">
        STAIRWELL EXIT
      </text>
      <text
        x="120"
        y="130"
        fill="#52514B"
        fontSize="12"
        fontFamily="JetBrains Mono"
        letterSpacing="1">
        ZONE A — OPEN OFFICE
      </text>
      <text
        x="120"
        y="320"
        fill="#52514B"
        fontSize="12"
        fontFamily="JetBrains Mono"
        letterSpacing="1">
        ZONE C — OPERATIONS &amp; COMM
      </text>
      <text
        x="660"
        y="130"
        fill="#52514B"
        fontSize="12"
        fontFamily="JetBrains Mono"
        letterSpacing="1">
        ZONE B — CORRIDOR
      </text>

      <path
        d="M 520 400 L 520 280 L 280 280 L 280 190"
        stroke="#FF4D0A"
        strokeWidth="3.5"
        strokeLinecap="round"
        className={simActive ? "animate-flow-fast" : "animate-flow-dash"}
        style={{
          filter: "drop-shadow(0 0 6px rgba(255, 77, 10, 0.7))",
        }}
      />
      <path
        d="M 520 400 L 480 400 L 480 170"
        stroke="#FF4D0A"
        strokeWidth="3"
        strokeLinecap="round"
        className="animate-flow-dash"
        style={{
          filter: "drop-shadow(0 0 5px rgba(255, 77, 10, 0.6))",
        }}
      />
      <path
        d="M 520 400 L 740 400 L 740 215"
        stroke="#FF4D0A"
        strokeWidth="3.5"
        strokeLinecap="round"
        className={simActive ? "animate-flow-fast" : "animate-flow-dash"}
        style={{
          filter: "drop-shadow(0 0 6px rgba(255, 77, 10, 0.7))",
        }}
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
        style={{
          filter: "drop-shadow(0 0 6px rgba(255, 77, 10, 0.6))",
        }}
      />

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
  );
};
