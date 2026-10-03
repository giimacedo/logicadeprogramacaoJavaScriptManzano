/*Exercício L05B - Pg 66 
Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer. */
document.getElementById("exercicioL05B").addEventListener("click", function antecessor(){
alert("Tabuada");

let numero = parseInt(prompt("Digite um  número:"));

for(let contador = 1; contador <= 10; contador++){
    let resultado = numero * contador;

    alert(numero + "x" + contador + " = " + resultado);
}
});