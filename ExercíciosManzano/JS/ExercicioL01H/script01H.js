/*Exercício L01H - Pg 26
Elaborar um programa que calcule e apresente o volume*/
document.getElementById("exercicioL01H").addEventListener("click", function antecessor(){

alert("Volume da caixa");

let comprimento = parseInt(prompt("Digite o comprimento:"));
let largura = parseInt(prompt("Digite a largura:"));
let altura = parseInt(prompt("Digite a altura:"));
let volume = comprimento * largura * altura;

alert("Volume da caixa: " + volume);
});