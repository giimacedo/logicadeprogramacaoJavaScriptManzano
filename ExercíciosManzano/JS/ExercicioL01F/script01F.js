/*Exercício L01F - Pg 26
Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de 
forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da
variável A. Apresentar os valores trocados*/
document.getElementById("exercicioL01F").addEventListener("click", function antecessor(){

alert("Troca de valores");

let a = prompt("Digite o valor de A:");
let b =prompt("Digite o valor de B:");
let temporario = a;
a = b
b = temporario

alert("Valor de A após a troca: " + a);
alert("Valor de B após a troca: " + b);
});