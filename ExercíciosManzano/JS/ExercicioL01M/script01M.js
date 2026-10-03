/*Exercício L01M - Pg 26
 Elaborar um programa que efetue a leitura de três valores (A,B e C) e apresente como resultado final o 
quadrado da soma dos três valores lidos.
*/
document.getElementById("exercicioL01M").addEventListener("click", function antecessor(){

alert("Quadrado da soma");

let a = parseInt(prompt("Digite A:"));
let b = parseInt(prompt("Digite B:"));
let c = parseInt(prompt("Digite C:"));
let resultado = (a + b + c) * (a + b + c);

alert("Quadrado da soma: " + resultado);
});