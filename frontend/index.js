"use strict";
//Utilizar la api de canvas 
//Que es un canvas?
//elemento HTML5 (<canvas>) que permite dibujar 
//Canvas es mas bien una hoja de papel 
const canvas = document.getElementById("canvas-principal");
//Recuperar la estructura <html>

const contexto = canvas.getContext("2d");
//el contexto es mas bien una caja de herramientas para pintar en esa hoja



let posicionInicialX;
let posicionInicialY;

const dibujar = (cursorX,cursorY) => {
      contexto.beginPath();
      contexto.moveTo(posicionInicialX,posicionInicialY);
      contexto.lineWith = 30;//Grosor de la linea del pincel
      contexto.strokeStyle = "red";//Color de la linea del pincel
      //context.lineCap = "round" ; 
      //context.lineJoin = "round" ;
      contexto.lineTo(cursorX,cursorY);//
      contexto.stroke();

      posicionInicialX = cursorX;
      posicionInicialY = cursorY;

};

const mouseDown = (evt) => {
      posicionInicialX = evt.offsetX;
      posicionInicialY = evt.offsetY;
      dibujar(posicionInicialX,posicionInicialY);
      canvas.addEventListener("mousemove",mouseMoving);
};

const mouseMoving = (evt) =>{
      dibujar(evt.offsetX,evt.offsetY);
};

const mouseUp = () => {
      canvas.removeEventListener("mousemove",mouseMoving);
};

canvas.addEventListener("mousedown",mouseDown);
canvas.addEventListener("mouseup", mouseUp);
