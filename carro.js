/*Código mais simples, porém com muitas variáveis*/
//variáveis do carro 1
let posicaoXdoCarro1 = 600;
let posicaoYdoCarro1 = 40;
let comprimetoCarro1 = 50;
let alturaCarro1 = 40;
let velocidadeCarro1 = 2.2;

//variáveis do carro 2
let posicaoXdoCarro2 = 600;
let posicaoYdoCarro2 = 96;
let comprimetoCarro2 = 50;
let alturaCarro2 = 40;
let velocidadeCarro2 = 2.6;

//variáveis do carro 3
let posicaoXdoCarro3 = 600;
let posicaoYdoCarro3 = 150;
let comprimetoCarro3 = 50;
let alturaCarro3 = 40;
let velocidadeCarro3 = 3.2;

//Funções para do Carro
function mostrarCarro(){
  image(imagemDoCarro1, posicaoXdoCarro1, posicaoYdoCarro1, comprimetoCarro1, alturaCarro1);
  image(imagemDoCarro2, posicaoXdoCarro2, posicaoYdoCarro2, comprimetoCarro2, alturaCarro2);
  image(imagemDoCarro3, posicaoXdoCarro3, posicaoYdoCarro3, comprimetoCarro3, alturaCarro3);
  
}

function movimentarCarro(){
  posicaoXdoCarro1 -= velocidadeCarro1;
  posicaoXdoCarro2 -= velocidadeCarro2;
  posicaoXdoCarro3 -= velocidadeCarro3;
}

function voltarCarroParaPosicaoInicial(){
  if (posicaoXdoCarro1 < -50){
    posicaoXdoCarro1 = 600;
  }
   if (posicaoXdoCarro2 < -50){
    posicaoXdoCarro2 = 600;
  }
   if (posicaoXdoCarro3 < -50){
    posicaoXdoCarro3 = 600;
  }
}