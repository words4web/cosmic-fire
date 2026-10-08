import React from "react";

export interface BlueprintNode {
  id: string;
  name: string;
  type: string;
  x: number;
  y: number;
  zone: string;
  status: string;
  specs: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}
