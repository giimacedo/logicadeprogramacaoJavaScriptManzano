/*Exercício L04I - Pg 50
Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo 
seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo 
usuário. */
document.getElementById("exercicioL04I").addEventListener("click", function antecessor(){

alert("Maior e menor valor");

let numero;
let maior = null;
let menor = null;

do {

    numero = parseInt(prompt("Digite um valor positivo ou um valor negativo para encerrar:"));

    if (numero >= 0) {

        if (maior === null) {
            maior = numero;
            menor = numero;
        } else {

            if (numero > maior) {
                maior = numero;
            }

            if (numero < menor) {
                menor = numero;
            }
        }
    }

} while (numero >= 0);

if (maior === null) {

    alert("Nenhum valor positivo foi informado.");

} else {

    alert("Maior valor: " + maior + "\nMenor valor: " + menor);
}
});