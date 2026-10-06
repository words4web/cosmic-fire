export interface HotspotItem {
  id: string;
  name: string;
  shortName: string;
  category: string;
  description: string;
  specs: string[];
  status: "online" | "monitoring" | "active";
  x: number;
  y: number;
  floor: string;
  iconName: string;
}
