/*Exercício L03A - Pg 46
Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.*/
document.getElementById("exercicioL03A").addEventListener("click", function antecessor(){

alert("Tabuada");

let numero = parseInt(prompt("Digite um número:"));
let contador = 1;
while (contador <= 10){
    let resultado = numero * contador;
    alert(numero + "x" + contador + " = " + resultado)
    contador++;
}
});
