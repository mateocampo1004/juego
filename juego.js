'use strict'
function Juego(apodo,nvidas,valor,cont,cont1){
this.apodo = apodo;
this.nvidas = nvidas;
this.valor = valor; 
this.cont = cont;
this.cont1= cont1;
}


function realizarJuego(){
    

    if(jugador1.valor>jugador2.valor){
        jugador2.nvidas--;
        document.getElementById("nlifesplayertwo").innerHTML = `Vidas: ${jugador2.nvidas}`;
       jugador1.cont++;
        document.getElementById("contador").innerHTML = `Veces ganadas: ${jugador1.cont}`;
        alert(`Gano jugador ${jugador1.apodo}`);
       
     }else{
        jugador1.nvidas--;
        document.getElementById("nlifesplayerone").innerHTML = `Vidas: ${jugador1.nvidas}`;
        alert(`Gano jugador ${jugador2.apodo}`);
        jugador2.cont1++;
        document.getElementById("contador1").innerHTML = `Veces ganadas: ${jugador2.cont1}`;
    
        
     }
        if(jugador1.nvidas <= 0 || jugador2.nvidas <=0 ){
          if(jugador1.vidas>0){
             alert(`${jugador1.apodo} ha ganado. Reinicie la pagina para jugar nuevamente."` )
            }else{
                alert(`${jugador2.apodo} ha ganado. Reinicie la pagina para jugar nuevamente."` )  
            }
        }
    }

    let jugador1 = new Juego(prompt("Ingrese su apodo"),3,0,0,0);
    let jugador2 = new Juego("Maquina",3,0,0,0);
    


let etiquetaplayerOne=document.getElementById("nickplayerone").innerHTML = `Player: ${jugador1.apodo}`;
let etiquetaplayerOnevidas=document.getElementById("nlifesplayerone").innerHTML = `Vidas: ${jugador1.nvidas}`;
let etiquetaplayerOnevalor=document.getElementById("valueplayerone").innerHTML = `Valor de la carta: ${jugador1.valor}`;
let etiquetaplayerOnecont=document.getElementById("contador").innerHTML = `Veces ganadas: ${jugador1.cont}`;

let etiquetaplayerTwo=document.getElementById("nickplayertwo").innerHTML = `Player: ${jugador2.apodo}`;
let etiquetaplayerTwovidas=document.getElementById("nlifesplayertwo").innerHTML = `Vidas: ${jugador2.nvidas}`;
let etiquetaplayerTwovalor=document.getElementById("valueplayertwo").innerHTML = `Valor de la carta: ${jugador2.valor}`;
let etiquetaplayerTwocont=document.getElementById("contador1").innerHTML = `Veces ganadas: ${jugador2.cont1}`;


let boton = document.getElementById("boton");

boton.addEventListener('click', function(){

    if(jugador1.nvidas <= 0 || jugador2.nvidas <=0 ){
        if(jugador1.nvidas>0){
           alert(`${jugador1.apodo} ha ganado. Reinicie la pagina para jugar nuevamente.` ) 
           return;
          }else{
              alert(`${jugador2.apodo} ha ganado. Reinicie la pagina para jugar nuevamente.` )  
              return;
          }
      }

let valorplayerone = Number(prompt("Ingrese un numero"));
let valorplayertwo = Math.floor(Math.random()*100)+1;

jugador1.valor=valorplayerone;
jugador2.valor=valorplayertwo;
document.getElementById("valueplayerone").innerHTML = `Valor de la carta: ${jugador1.valor}`;
document.getElementById("valueplayertwo").innerHTML = `Valor de la carta: ${jugador2.valor}`;

    realizarJuego();

  
});
