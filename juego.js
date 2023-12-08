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

let jugador1 = new Juego("Player1",3,Number(prompt("Ingrese un numero del 1 a 7")));
let jugador2 = new Juego("Player2",3,Number(prompt("Ingrese un numero del 1 a 7")));


let etiquetaplayerOne=document.getElementById("nickplayerone").innerHTML = `Player: ${jugador1.apodo}`;
let etiquetaplayerOnevidas=document.getElementById("nlifesplayerone").innerHTML = `Vidas: ${jugador1.nvidas}`;
let etiquetaplayerOnevalor=document.getElementById("valueplayerone").innerHTML = `Valor de la carta: ${jugador1.valor}`;

let etiquetaplayerTwo=document.getElementById("nickplayertwo").innerHTML = `Player: ${jugador2.apodo}`;
let etiquetaplayerTwovidas=document.getElementById("nlifesplayertwo").innerHTML = `Vidas: ${jugador2.nvidas}`;
let etiquetaplayerTwovalor=document.getElementById("valueplayertwo").innerHTML = `Valor de la carta: ${jugador2.valor}`;

