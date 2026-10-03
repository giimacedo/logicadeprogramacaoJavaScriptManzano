/*Exercício L01L - Pg 26
Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final à 
soma dos quadrados dos três valores lidos*/
document.getElementById("exercicioL01L").addEventListener("click", function antecessor(){

alert("Soma dos quadrados");

let a = parseInt(prompt("Digite A:"));
let b = parseInt(prompt("Digite B:"));
let c = parseInt(prompt("Digite C:"));
let resultado = (a * a) + (b * b) + (c * c);

alert("Soma dos quadrados: " + resultado);
});