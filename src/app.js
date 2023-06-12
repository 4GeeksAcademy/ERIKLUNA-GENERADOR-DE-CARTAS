/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pintas = ['♥', '♠', '♣', '♦'];
  let valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  
  function generarCarta() {
    let randomPintas = pintas[Math.floor(Math.random() * pintas.length)];
    let randomValores = valores[Math.floor(Math.random() * valores.length)];
    
    let mostrarCarta = `${randomValores} <br> ${randomPintas}`;
  
    document.getElementById("mostrarCarta").innerHTML = mostrarCarta
    
  
  }
  
};
