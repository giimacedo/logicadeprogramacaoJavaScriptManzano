/*Exercício L04B - Pg 50
Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 
1 até 500. */
document.getElementById("exercicioL04B").addEventListener("click", function antecessor(){

alert("Soma dos pares de 1 até 500");

let numero = 1;
let soma = 0;

do{
    if (numero % 2 === 0){
        soma = soma + numero;
    }
    numero++;
} while (numero <= 500);

alert("Somatório dos pares: " + soma);
});