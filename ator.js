//Variáveis do Ator
let posicaoXdoAtor = 85;
let posicaoYdoAtor = 366;
let comprimentoDoAtor = 30;
let alturaDoAtor = 30;

let meuPlacar = 0;


//Funções do Ator
function mostrarAtor(){
   image(imagemDoAtor, posicaoXdoAtor, posicaoYdoAtor, comprimentoDoAtor,alturaDoAtor);
  
}

function movimentarAtor(){
  if(keyIsDown(UP_ARROW)){
    posicaoYdoAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      posicaoYdoAtor += 3;
    }
    
  }
}

let colisao = false;

function verificaColisao(){
  
  for(let i = 0; i < imagemDosCarros.length; i++){
    colisao = collideRectCircle(posicaoXdosCarros[i], posicaoYdosCarros[i], comprimentoDosCarros, 25, posicaoXdoAtor, posicaoYdoAtor, comprimentoDoAtor);
    
    if(colisao){
      voltarAtorParaPosicaoInicial();
      somDaColisao.play();
      if(pontosMaiorQueZero()){
        meuPlacar -= 1;
      }
    }
    
  }
}

function voltarAtorParaPosicaoInicial(){
  posicaoYdoAtor = 366;
}


function exibirPlacar(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 0, 255))
  text(meuPlacar, width/2, 27);
}

function marcarPontos(){
  if(posicaoYdoAtor < 6){
    meuPlacar += 1; 
    somDoPonto.play();
    voltarAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meuPlacar > 0;
}

function podeSeMover(){
  return posicaoYdoAtor < 366;
}













