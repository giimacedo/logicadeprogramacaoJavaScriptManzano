/*Exercício L03J - Pg 46
Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores 
pares situados na faixa numérica de 50 a 70. */
document.getElementById("exercicioL03J").addEventListener("click", function antecessor(){

alert("Soma e média dos pares de 50 até 70");

let numero = 50;
let soma = 0;
let quantidade = 0;

while(numero <= 70){
    if (numero % 2 === 0){
        soma = soma + numero;
        quantidade++;
    }
    numero++;
}

let media = soma / quantidade;

alert("Soma: " + soma);
alert("Méida: " + media);
});