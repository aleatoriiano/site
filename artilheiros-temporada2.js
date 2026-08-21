/**
 * Temporada 2 — artilheiros (começa vazia).
 * Cada item: name, level, foto, teams (objeto escudo→qtd), guardiao (0 ou 1), since (data ISO, opcional).
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
window.ARTILHEIROS_BY_SEASON = window.ARTILHEIROS_BY_SEASON || {};
window.ARTILHEIROS_BY_SEASON[2] = [
  {
    name: "voando_alto",
    level: 24,
    foto: "voando___alto.jpeg",
    teams: {"gremio.png":23, "vitoria.png":1},
    guardiao: 1,
  },
  {
    name: "Kevin Nunes da Silva",
    level: 1,
    foto: "kevinnunesdasi556.jpeg",
    teams: {"mirassol.png":1},
    guardiao: 0,
  },
   {
    name: "Universo Links shop",
    level: 4,
    foto: "universo_links_shop.jpeg",
    teams: {"gremio.png":3, "ibis.png":1,},
    guardiao: 0,
  },
   {
    name: "Luã Santtos",
    level: 1,
    foto: "eucariocarj.jpeg",
    teams: {"flamengo.png":1},
    guardiao: 0,
  },
   {
    name: "🦋Gleicy Araujo✨",
    level: 2,
    foto: "gleicyaraujo_.jpeg",
    teams: {"corinthians.png":2},
    guardiao: 0,
  },
   {
    name: "darlã",
    level: 1,
    foto: "darloliveira2.jpeg",
    teams: {"botafogo.png":1},
    guardiao: 0,
  },
  {
    name: "bruno",
    level: 2,
    foto: "bruno.geb.jpeg",
    teams: {"vitoria.png":1, "brasil-de-pelotas.png": 1},
    guardiao: 0,
  },
];
