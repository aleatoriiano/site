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
    level: 18,
    foto: "voando___alto.jpeg",
    teams: {"gremio.png":17,}, {"vitoria.png":1,},
    guardiao: 1,
  },
];
