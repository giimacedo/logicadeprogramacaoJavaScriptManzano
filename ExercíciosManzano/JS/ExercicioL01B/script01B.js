/*Exercício L01B - Pg 25
b) Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius. A fórmula de 
conversão é C  (F - 32) * (5/9) , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.
*/
document.getElementById("exercicioL01B").addEventListener("click", function antecessor(){

alert("Fahrenheit para Celsius");

let f = parseInt(prompt("Digite a temperatura em Fahrenheit:"));
let c = (f - 32) * (5/9);

alert("Temperatura em Celsius: " + c);
});