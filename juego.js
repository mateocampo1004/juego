'use strict'
function Juego(apodo,nvidas,valor){
this.apodo = apodo;
this.nvidas = nvidas;
this.valor = valor; 

    this.quitarVidas = function(){
      
     
            this.nvidas--;
              
    }
  

    this.mostrarPlayer = function(){
        alert(`${this.apodo} - Vidas: ${this.nvidas}`);
     };

    }

let jugador1 = new Juego("Player1",3,Number=prompt("Ingrese un numero del 1 a 7"));


let etiquetaplayerOne = document.getElementById("nickplayerone");
etiquetaplayerOne.innerHTML = `Player: ${jugador1.apodo}`;
let etiquetaplayerOnevidas = document.getElementById("nlifesplayerone");
etiquetaplayerOnevidas.innerHTML = `Vidas: ${jugador1.nvidas}`;
let etiquetaplayerOnevalor = document.getElementById("valueplayerone");
etiquetaplayerOnevalor.innerHTML = `Valor de la carta: ${jugador1.valor}`;