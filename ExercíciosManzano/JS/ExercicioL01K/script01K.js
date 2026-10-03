/*Exercício L01K - Pg 26
Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em 
real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível 
com o usuário, para que seja apresentado o valor em moeda americana*/
document.getElementById("exercicioL01K").addEventListener("click", function antecessor(){

alert("Real para dólar");

let coracao = parseInt(prompt("Digite a cotação do dólar:"));
let reais = parseInt(prompt("Digite a quantidade de reais:"));
let dolares = reais / cotacao;

alert("Valor em dólares: " + dolares);
});