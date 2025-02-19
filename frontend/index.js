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

function dibujar(cursorX,cursorY) {
      contexto.beginPath();// "inicia" un nuevo trazo con el pincel
      contexto.moveTo(posicionInicialX,posicionInicialY);
      contexto.lineWidth = parseInt(document.getElementById("grosor").value*0.9);//Grosor de la linea del pincel
      console.log(parseInt(document.getElementById("grosor").value));

      contexto.strokeStyle = document.getElementById("color").value;//Color de la linea del pincel
      contexto.lineCap = "round" ; 
      contexto.lineJoin = "round" ;
      contexto.lineTo(cursorX,cursorY);//
      contexto.stroke();

      posicionInicialX = cursorX;
      posicionInicialY = cursorY;

};

function mouseDown (evt)  {

      posicionInicialX = evt.offsetX;
      posicionInicialY = evt.offsetY;
      dibujar(posicionInicialX,posicionInicialY);
      canvas.addEventListener("mousemove",mouseMoving);

      
};

 function mouseMoving (evt) {
      dibujar(evt.offsetX,evt.offsetY);
};

 function mouseUp ()  {
      canvas.removeEventListener("mousemove",mouseMoving);
};

canvas.addEventListener("mousedown",mouseDown);
canvas.addEventListener("mouseup", mouseUp);
