/*Exercício L01E - Pg 26
Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula 
PRESTACAO  VALOR + (VALOR * TAXA/100) * TEMPO).*/
document.getElementById("exercicioL01E").addEventListener("click", function antecessor(){

alert("Prestação em atraso");

let valor = parseInt(prompt("Digite o valor da prestação:"));
let taxa = parseInt(prompt("Digite a taxa:"));
let tempo = parseInt(prompt("Digite o tempo de atraso:"));
let prestacao = valor + (valor * taxa / 100) * tempo;

alert("Valor da prestação em atraso: " + prestacao);
});