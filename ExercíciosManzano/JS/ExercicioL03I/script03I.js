/*Exercício L03I - Pg 46
Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do 
somatório e a média aritmética dos valores lidos.*/
document.getElementById("exercicioL03I").addEventListener("click", function antecessor(){

alert("Soma e média de 10 valores");

let contador = 1;
let soma = 0;

while (contador <= 10){
    let numero = parseInt(prompt("Digite o " + contador + "º valor:"));
    soma = soma + numero;
    contador++;
}

let media = soma /10;
alert("Somatário: " + soma);
alert("Média: " + media);
});