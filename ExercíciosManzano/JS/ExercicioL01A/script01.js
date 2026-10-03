/*Exercício L01A - Pg 25
a) Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de 
conversão é F  (9 * C + 160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.*/
document.getElementById("exercicioL01A").addEventListener("click", function antecessor(){

alert("Celsius para Fahrenheit");
let c = parseInt(prompt("Digite a temperatura em Celsius:"));
let f = (9 * c + 160) / 5;
alert("Temperatura em Fahrenheit: " + f);
});