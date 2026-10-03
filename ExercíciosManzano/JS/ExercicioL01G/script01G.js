/*Exercício L01G - Pg 26
Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na 
utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D,
devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim 
C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de 
multiplicação e apresentar doze resultados de saída.*/
document.getElementById("exercicioL01G").addEventListener("click", function antecessor(){

alert("Adição e multiplicação");

let a = parseInt(prompt("Digite A:"));
let b = parseInt(prompt("Digite B:"));
let c = parseInt(prompt("Digite C:"));
let d = parseInt(prompt("Digite D:"));

alert("A + B = " + a + b);
alert("A * B = " + a * b);
alert("A + C = " + a + c);
alert("A * C = " + a * c);
alert("A + D = " + a + d);
alert("A * D = " + a * d);
alert("B + C = " + b + c);
alert("B * C = " + b * c);
alert("B + D = " + b + d);
alert("B * D = " + b * d);
alert("C + D = " + c + d);
alert("C * D = " + c * d);
});