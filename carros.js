/*Criando carros usando arry e for */
//Arry
let posicaoXdosCarros = [600,600,600,600,600,600];
let posicaoYdosCarros = [40, 96, 150, 210, 270, 318];
let velocidadeDosCarros = [3.9, 2.8, 3.8, 2.1, 3.1, 2.8];
let comprimentoDosCarros = 55;
let alturaDosCarros = 40;



//Funções para do Carro
function mostrarCarro(){
  
  for(let i = 0; i < imagemDosCarros.length; i ++ ){    
      image(imagemDosCarros[i], posicaoXdosCarros[i], posicaoYdosCarros[i],comprimentoDosCarros, alturaDosCarros);
  }  
  
}

function movimentarCarro(){
  
  for(let i = 0; i < imagemDosCarros.length; i++){
    posicaoXdosCarros[i] -= velocidadeDosCarros[i];
  }

}
  

function voltarCarroParaPosicaoInicial(){
  
  for(let i = 0; i < imagemDosCarros.length; i++){
    
     if(seCarroPassouTodaTela(posicaoXdosCarros[i])){
       posicaoXdosCarros[i] = 600;
     }
  }  
}

function seCarroPassouTodaTela(posicaoXdosCarros){
  return posicaoXdosCarros < -50;
}



















