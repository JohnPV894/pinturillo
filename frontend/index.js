"use strict";
//Utilizar la api de canvas 
//Que es un canvas?
//elemento HTML5 (<canvas>) que permite dibujar 
//Canvas es mas bien una hoja de papel 
const HTML_CANVAS = document.getElementById("canvas-principal");
//Recuperar la estructura <html>

const contexto = HTML_CANVAS.getContext("2d");
//el contexto es mas bien una caja de herramientas para pintar en esa hoja

let inicial_posicionX_pincel;
let inicial_posicionY_pincel;

function dibujar(cursorX,cursorY) {
      contexto.lineWidth = parseInt(document.getElementById("grosor").value*0.5);//Grosor de la linea del pincel
      contexto.strokeStyle = document.getElementById("color").value;//Color de la linea del pincel
      contexto.lineCap="round";//Redondea los extremos del trazo (cabeza y cola)
      contexto.lineJoin = "round";//Redondea los cambios de direccion del trazo 

      contexto.beginPath();// "inicia" un nuevo trazo con el pincel
      contexto.moveTo(inicial_posicionX_pincel,inicial_posicionY_pincel);//Mover el pincel a esa posicion especifica
      contexto.lineTo(cursorX,cursorY);//"Traza" una linea desde La posicion X,Y de moveTo hasta la de lineTo
      contexto.stroke();//Dibuja/Pinta la linea trazada desde MoveTo hasta LineTo

      inicial_posicionX_pincel = cursorX;
      inicial_posicionY_pincel = cursorY;
      

};

function mouseDown (cursor)  {
      //Obtener posicion actual cursor
      inicial_posicionX_pincel = cursor.offsetX;
      inicial_posicionY_pincel = cursor.offsetY;
      dibujar(inicial_posicionX_pincel,inicial_posicionY_pincel);
      HTML_CANVAS.addEventListener("mousemove",mouseMoving);

      
};

function mouseMoving (evt) {
      dibujar(evt.offsetX,evt.offsetY);
};

function mouseUp ()  {
      HTML_CANVAS.removeEventListener("mousemove",mouseMoving);
};

HTML_CANVAS.addEventListener("mousedown",mouseDown);
HTML_CANVAS.addEventListener("mouseup", mouseUp);
