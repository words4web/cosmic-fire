import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = "https://www.cosmicfiresolutions.co.uk";
const today = new Date().toISOString().split("T")[0];

const servicesFilePath = path.resolve(__dirname, "../src/data/services.ts");
const servicesContent = fs.readFileSync(servicesFilePath, "utf-8");

const idRegex = /id:\s*["']([^"']+)["']/g;
const serviceIds = new Set<string>();
let match;
while ((match = idRegex.exec(servicesContent)) !== null) {
  if (match[1] && !["fire-barriers"].includes(match[1])) {
    serviceIds.add(match[1]);
  }
}

const staticRoutes = [
  { path: "", priority: "1.0", changefreq: "weekly" },
  { path: "about", priority: "0.8", changefreq: "monthly" },
];

const urls = [
  ...staticRoutes.map(
    (route) => `  <url>
    <loc>${BASE_URL}/${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  ),
  ...Array.from(serviceIds).map(
    (id) => `  <url>
    <loc>${BASE_URL}/services/${id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`,
  ),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

const outputPath = path.resolve(__dirname, "../public/sitemap.xml");
fs.writeFileSync(outputPath, xml.trimStart(), "utf-8");

console.log(
  `[sitemap] Successfully generated sitemap.xml with ${urls.length} URLs at ${outputPath}`,
);
