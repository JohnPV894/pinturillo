"use strict";
//lienzo para rayar
let elemento_html_canvas = document.getElementById("canvas-principal");
//Herramientas para rayar
let contexto = elemento_html_canvas.getContext("2d");

let posicion_inicial_X;
let posicion_inicial_Y;

function dibujar() {
      contexto.beginPath();// "inicia" un nuevo trazo con el pincel
      contexto.moveTo(posicion_inicial_X,posicion_inicial_Y);//Mover el pincel a las coordenadas X,Y
      contexto.lineWidth(30);//grosor del pincel
      contexto.strokeStyle("")
}
