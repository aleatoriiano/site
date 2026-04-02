/**
 * Artilheiros — foto padrão (pode trocar por URL ou caminho local).
 * Níveis: 1 a 20 (cada nível usa cards/N.png).
 * Cada item: name, level, teams (array de nomes de ficheiro em escudos/, ex.: "corinthians.png").
 * Opcional: foto própria por artilheiro com a propriedade `foto` (URL ou caminho).
 */
const FOTO_PERFIL_PADRAO =
  "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/91ee08999f843f5d8901c92471fb6fa0~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=cc9aa2d7&x-expires=1775271600&x-signature=2lchSzMWkS%2Fwh%2BAdTXVLp3x%2BNsA%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my";

const ARTILHEIROS = [
  { name: "Ricardo Mendes", level: 20, teams: ["corinthians.png", "flamengo.png"] },
  { name: "Lucas Ferreira", level: 18, teams: ["palmeiras.png"] },
  { name: "Gabriel Nunes", level: 16, teams: ["gremio.png", "internacional.png"] },
  { name: "Felipe Araújo", level: 14, teams: ["santos.png", "vasco.png", "bahia.png"] },
  { name: "Matheus Costa", level: 12, teams: ["atletico-mg.png"] },
  { name: "Bruno Oliveira", level: 10, teams: ["athletico-pr.png", "coritiba.png"] },
  { name: "André Silva", level: 8, teams: ["remo.png"] },
  { name: "Thiago Ribeiro", level: 6, teams: ["real-madrid.png", "fluminense.png"] },
  { name: "Pedro Henrique", level: 4, teams: ["chapecoense.png", "mirassol.png", "botafogo.png"] },
  { name: "Diego Martins", level: 2, teams: ["cruzeiro.png"] },
  { name: "Jailson Mendes", level: 1, teams: ["bahia.png"] },
];
