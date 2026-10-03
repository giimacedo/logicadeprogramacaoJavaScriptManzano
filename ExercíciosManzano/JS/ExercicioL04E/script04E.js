/*Exercícios L04E - Pg 50 
Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o 
total do somatório da fatorial de cada valor lido. */
document.getElementById("exercicioL04E").addEventListener("click", function antecessor(){

alert("Somatório das fatoriais"); 

let contador = 1;
let soma = 0;

do{
    let numero = parseInt(prompt("Digite o " + contador + "º valor:"));
    let fatorial = 1;
    let auxiliar = numero;

        while (auxiliar > 1){
            fatorial = fatorial * auxiliar;
            auxiliar--;
        }
        soma = soma + fatorial;
        contador++;
} while (contador <= 15){
    alert("Somatório das fatoriais: " + soma);
}
});