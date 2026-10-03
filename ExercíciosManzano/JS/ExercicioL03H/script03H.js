/*Exercício L03H - Pg 46
Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de 
10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O 
programa deve apresentar os valores das duas temperaturas. A fórmula de conversão 
é
5
9 +160
=
C
F , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius. */
document.getElementById("exercicioL03H").addEventListener("click", function antecessor(){

alert("Celsius para Fahrenheit");

let celsius = 10;
while (celsius <= 100){
    let fahrenheit = (9 * celsius + 160) / 5;

    alert("Celsius: " + celsius);
    alert("Fahrenheit: " + fahrenheit);
    celsus = celsius + 10;
}
});