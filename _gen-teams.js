const fs = require("fs");

fs.writeFileSync("_thais-teams.json", JSON.stringify(Array(120).fill("cruzeiro.png")));

const vitorRaw = `
atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png
atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png
atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png
atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png
atletico-mg.png paysandu.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png
atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png
atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png
atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png
atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png
atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png
atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png
atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png
atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png
atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png
atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png
atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png
atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png
atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png
atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png
atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png
atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png
atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png
atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png
atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png
atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png
atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png
atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png
atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png
atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png
atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png
atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png
atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png
atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png
atletico-mg.png atletico-mg.png atletico-mg.png atletico-mg.png
`.trim();

const vitor = vitorRaw.split(/\s+/).filter(Boolean);
fs.writeFileSync("_vitor-teams.json", JSON.stringify(vitor));

console.log("thais:", 120, "vitor:", vitor.length);
