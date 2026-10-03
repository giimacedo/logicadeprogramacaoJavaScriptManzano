/*Exercício L05A - Pg 66
Apresentar os quadrados dos números inteiros de 15 a 200*/
document.getElementById("exercicioL05A").addEventListener("click", function antecessor(){

alert("Quadrados de 15 até 200");

for (let numero = 15; numero <= 200; numero++) {
    let quadrado = numero * numero;

    alert("O quadrado de " + numero + " é " + quadrado);
}
});