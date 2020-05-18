'use strict'
// pruebas con let y var

// Prueba con var
var numero = 40;
console.log(numero);

if (true) {
    var numero = 50;
    console.log(numero);
}

console.log(numero); //valor 50

//Prueba con let

var texto = "JS Anggye";
console.log(texto);

if (true) {
    let texto = "JS Anggye con Let";
    console.log(texto);
}

console.log(texto);