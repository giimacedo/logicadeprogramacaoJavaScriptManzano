/*Exercício L01C - Pg 25
Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula:
Volume *Raio * Altura*/
document.getElementById("exercicioL01C").addEventListener("click", function antecessor(){

alert("Volume da lata de óleo:");

let raio = parseInt(prompt("Digite o raio da lata de óleo:"));
let altura = parseInt(prompt("Digite a altura da lata:"));
let volume = Math.PI * raio * raio * altura;

alert("Volume da lata: " + volume);
});