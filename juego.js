'use strict'
function Juego(apodo,nvidas,valor){
this.apodo = apodo;
this.nvidas = nvidas;
this.valor = valor; 

    this.quitarVidas = function(){
      
     
            this.nvidas--;
            alert(`${this.apodo} perdió una vida! Vidas restantes: ${this.nvidas}`);

          
    }
  

    this.mostrarPlayer = function(){
        alert(`${this.apodo} - Vidas: ${this.nvidas}`);
    };

    }

let jugador1 = new Juego("Player1",3,Number=prompt("Ingrese un numero del 1 a 7"));
let jugador2 = new Juego("Player2",3,Number=prompt("Ingrese un numero del 1 a 7"));

jugador1.mostrarPlayer();
jugador1.quitarVidas();
jugador2.mostrarPlayer();
jugador2.quitarVidas();

