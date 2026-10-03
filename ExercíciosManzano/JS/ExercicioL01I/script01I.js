/*Exercício L01I - Pg 26
Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo 
segundo.*/
document.getElementById("exercicioL01I").addEventListener("click", function antecessor(){

alert("Quadrado da diferença");
 
let a = parseInt(prompt("Digite A:"));
let b = parseInt(prompt("Digite B:"));
let resultado =(a - b) * (a - b);

alert("Quadrado da diferença é: " + resultado);
});