/*Exercício L04A - Pg 50
Apresentar os quadrados dos números inteiros de 15 a 200. */
document.getElementById("exercicioL04A").addEventListener("click", function antecessor(){

alert("Quadrados de 15 até 200");

let numero = 15;

do{
    let quadrado = numero * numero;
    alert("O quadrado de " + numero + " é: " + quadrado);
    numero++;
} while (numero <= 200);
});