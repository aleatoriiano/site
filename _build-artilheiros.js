const fs = require("fs");

const ARTILHEIROS = require("./_artilheiros-input.js");

function teamsToObject(teams) {
  if (!Array.isArray(teams)) return teams || {};
  const counts = Object.create(null);
  teams.forEach(function (t) {
    if (!t) return;
    counts[t] = (counts[t] || 0) + 1;
  });
  return counts;
}

function formatTeams(teams) {
  const obj = teamsToObject(teams);
  const keys = Object.keys(obj);
  if (keys.length === 0) return "{}";
  if (keys.length <= 3) {
    return "{" + keys.map(function (k) {
      return JSON.stringify(k) + ":" + obj[k];
    }).join(",") + "}";
  }
  const lines = keys.map(function (k) {
    return "      " + JSON.stringify(k) + ": " + obj[k] + ",";
  });
  lines[lines.length - 1] = lines[lines.length - 1].slice(0, -1);
  return "{\n" + lines.join("\n") + "\n    }";
}

function formatEntry(a) {
  const parts = [
    "  {",
    '    name: ' + JSON.stringify(a.name) + ",",
    "    level: " + a.level + ",",
    '    foto: ' + JSON.stringify(a.foto || "") + ",",
    "    teams: " + formatTeams(a.teams) + ",",
  ];
  if (a.guardiao === 1) parts.push("    guardiao: 1,");
  else if (a.guardiao === 0) parts.push("    guardiao: 0,");
  parts.push("  }");
  return parts.join("\n");
}

const header = `/**
 * Artilheiros — níveis 1 a 20 (cards/N.png).
 * Cada item: name, level, foto, teams (objeto escudo→qtd), guardiao (0 ou 1), since (data ISO, opcional).
 * Guardiões (guardiao: 1) ganham animação de asas (asa1; o de maior nível usa asa2).
 *
 * TEAMS — objeto chave=escudo (escudos/N.png), valor=quantidade de títulos naquele time:
 *   teams: { "corinthians.png": 5, "gremio.png": 2 }
 *
 * FOTO DE PERFIL — baixe a imagem, salve em fotos/ (ex: davi.jpeg) e coloque só o nome:
 *   foto: "davi.jpeg"
 *
 * SINCE — data em que o artilheiro entrou no site (YYYY-MM-DD):
 *   since: "2025-06-15"
 */
const ARTILHEIROS = [
`;

const body = ARTILHEIROS.map(formatEntry).join(",\n") + "\n];\n";
fs.writeFileSync("artilheiros.js", header + body, "utf8");
console.log("artilheiros.js gerado com", ARTILHEIROS.length, "artilheiros");
