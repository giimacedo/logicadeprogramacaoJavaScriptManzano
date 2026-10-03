/*Exercício l01J - Pg 26
Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em 
dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares 
disponível com o usuário, para que seja apresentado o valor em moeda brasileira.*/
document.getElementById("exercicioL01J").addEventListener("click", function antecessor(){

alert("Dólar para Real");

let cotacao = parseInt(prompt("Digite a cotação do dólar:"));
let dolares = parseInt(prompt("Digite a quantidade de dólares:"));
let reais = cotacao * dolares

alert("Valor em reais: " + reais);
});