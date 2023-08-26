/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pintas = ["♥", "♠", "♣", "♦"];
  let valores = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  let mostrarCartaElement = document.getElementById("mostrarCarta");
  let botonCarta = document.getElementById("Boton_Carta");

  function cambiarCarta() {
    let randomPintas = pintas[Math.floor(Math.random() * pintas.length)];
    let randomValores = valores[Math.floor(Math.random() * valores.length)];

    let cartaHTML = `
      <div class="col1 d-flex justify-content-start position-absolute top-0 start-0">${randomPintas}</div>
      <div class="col2 d-flex justify-content-center">${randomValores}</div>
      <div class="col3 d-flex justify-content-end position-absolute bottom-0 end-0">${randomPintas}</div>
    `;

    if (randomPintas === "♥" || randomPintas === "♦") {
      mostrarCartaElement.style.color = "red";
    } else {
      mostrarCartaElement.style.color = "black";
    }

    mostrarCartaElement.innerHTML = cartaHTML;
    let ancho = document.getElementById("Ancho").value + "px";
    let alto = document.getElementById("Alto").value + "px";

    mostrarCartaElement.style.width = ancho;
    mostrarCartaElement.style.height = alto;

    setInterval(cambiarCarta, 10000);
  }

  botonCarta.addEventListener("click", cambiarCarta);
  cambiarCarta();
};
