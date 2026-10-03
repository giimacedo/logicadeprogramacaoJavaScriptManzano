/*Exercício L03L - Pg 47
Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo 
seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo 
usuário. */
document.getElementById("exercicioL03L").addEventListener("click", function antecessor(){

alert("Maior e menor valor");

let numero = parseInt(prompt("Digite um valor positivo:"));

if(numero >= 0){
    let maior = numero;
    let menor = numero;

    while(numero > maior){
        if (numero > maior){
            maior = numero;
        }
        if (numero < menor){
            menor = numero;
        }

        numero = parseInt(prompt("Digite outro valor positivo ou um valolr negativo para encerrar:"));
    }

    alert("Maior valor: " + maior);
    alert("Menor valor: " + menor);
} else{
    alert("Nenhum valor positivo foi informado.");
}
});