/*Exercício L04G - Pg 50
Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares 
situados na faixa numérica de 1 a 10.*/
document.getElementById("exercicioL04G").addEventListener("click", function antecessor(){

alert("Fatorial dos números ímpares");

let numero = 1;

do {
    if (numero % 2 !== 0){
        let fatorial = 1;
        let contador = 1;

        do{
            fatorial = fatorial + contador;
            contador++;
        } while (contador <= numero);
        alert("Fatorial de " + numero + " = " + fatorial);
    }
    numero++;
} while (numero <= 10);
});