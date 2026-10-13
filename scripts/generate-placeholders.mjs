import { mkdir, writeFile } from "node:fs/promises";

const outputDirectory = new URL("../public/images/", import.meta.url);
await mkdir(outputDirectory, { recursive: true });

for (let index = 1; index <= 8; index += 1) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="96" viewBox="0 0 240 96"><rect width="240" height="96" fill="#fff"/><text x="120" y="54" fill="#6b7280" font-family="Arial, sans-serif" font-size="20" font-weight="600" text-anchor="middle">Partner ${index}</text></svg>\n`;
  await writeFile(new URL(`partner-${index}.svg`, outputDirectory), svg, "utf8");
}

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#f3f4f6"/><circle cx="600" cy="245" r="76" fill="none" stroke="#6b7280" stroke-width="8"/><path d="M560 245h80M600 205v80" stroke="#6b7280" stroke-width="8" stroke-linecap="round"/><text x="600" y="390" fill="#4b5563" font-family="Arial, sans-serif" font-size="36" font-weight="600" text-anchor="middle">Risezonic Academics</text></svg>\n`;
const map = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675"><rect width="1200" height="675" fill="#f3f4f6"/><g fill="none" stroke="#d1d5db" stroke-width="14" stroke-linecap="round"><path d="M-40 170 250 330 510 210 790 360 1240 140"/><path d="M40 570 300 430 570 560 850 390 1200 540"/><path d="M340-30 450 180 400 390 520 720"/><path d="M910-30 800 190 880 410 760 710"/></g><path d="M600 250c-54 0-98 44-98 98 0 75 98 177 98 177s98-102 98-177c0-54-44-98-98-98zm0 132a34 34 0 1 1 0-68 34 34 0 0 1 0 68z" fill="#6b7280"/><text x="600" y="600" fill="#4b5563" font-family="Arial, sans-serif" font-size="24" text-anchor="middle">Academy location map placeholder</text></svg>\n`;

await writeFile(new URL("og-default.svg", outputDirectory), og, "utf8");
await writeFile(new URL("contact-map.svg", outputDirectory), map, "utf8");

console.log("Generated 10 non-photo SVG placeholders in public/images/.");
