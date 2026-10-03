/*Exercício L05J - Pg 66
Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de 
10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O 
programa deve apresentar os valores das duas temperaturas. A fórmula de conversão 
é
5
9 +160
=
C
F , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius. */
document.getElementById("exercicioL05J").addEventListener("click", function antecessor(){

alert("Celsius para Fahrenheit");

for(let contador = 1; contador <= 10; contador++){
    let celsius = contador * 10;
    let fahrenheit = (9 * celsius + 160) / 5;

    alert("Celsius: " + celsius);
    alert("Fahrenheit: " + fahrenheit);
}
});