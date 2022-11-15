"use strict";
const cantidadPC = document.querySelector('#cantidadPC');
const selector = document.querySelector('#selector');
const precio = document.querySelector('#precio');
const button = document.querySelector('#boton');
const costo = document.querySelector('#costo');
const cantidad = document.querySelector('#cantidad');
const colorElegido = document.querySelector('#color');

button.addEventListener("click", () => {
    costo.textContent = Number(precio.textContent) * Number(cantidad.value)
    cantidadPC.textContent = cantidad.value
    colorElegido.textContent = selector.value
});

