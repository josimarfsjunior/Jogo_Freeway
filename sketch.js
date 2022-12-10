let imagemDaEstrada;


function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();

}

//Funcão principal do jogo
function draw() {
  background(imagemDaEstrada);
  mostrarAtor();
  movimentarAtor();
  mostrarCarro();
  movimentarCarro();  
  voltarCarroParaPosicaoInicial();
  verificaColisao();
  exibirPlacar();
  marcarPontos();
  
 
}





















