/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pintas = ['♥','♠','♣','♦',];
let valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

window.onload = function() {
  generarCarta();
};

let pintas = ['♥','♠','♣','♦',];
let valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function generarCarta() {
    let randomPintas = pintas[Math.floor(Math.random() * pintas.length)];
    let randomValores = valores[Math.floor(Math.random() * valores.length)];
    
    let cartaHTML = `
    <div class="col1 d-flex justify-content-start position-absolute top-0 start-0" ">${randomPintas}</div>
    <div class="col2 d-flex justify-content-center">${randomValores}</div>
    <div class="col3 d-flex justify-content-end position-absolute bottom-0 end-0">${randomPintas}</div>
  `;
  
    if (randomPintas === '♥' || randomPintas === '♦') {
      document.getElementById("mostrarCarta").style.color = "red";
    } else {
      document.getElementById("mostrarCarta").style.color = "black";
    }


    document.getElementById("mostrarCarta").innerHTML = cartaHTML;
    document.getElementById("carta").innerHTML = cartaHTML; 
  
  }