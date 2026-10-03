/*Exercício L04F - Pg 50
Elaborar um programa que efetue a leitura sucessiva de valores numéricos e apresente no final o 
total do somatório, a média aritmética e o total de valores lidos. O programa deve fazer as leituras 
dos valores enquanto o usuário estiver fornecendo valores positivos. Ou seja, o programa deve 
parar quando o usuário fornecer um valor negativo. Não se esqueça que o usuário pode entrar 
como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da 
média.*/
document.getElementById("exercicioL04F").addEventListener("click", function antecessor(){

alert("Soma, média e quantidade");

let soma = 0;
let quantidade = 0;
let numero;

do{
    numero = parseInt(prompt("Digite um valor positivo ou negativo para encerrar:"));
    if (numero >= 0){
        soma = soma + numero;
        quantidade++;
    }
} while(numero >= 0);

alert("Total da soma: " + soma);
alert("Total de valores lidos: " + quantidade);

if (quantidade > 0){
    let media = soma / quantidade;
    alert("Média: " + media);
} else{
    alert("Não foi possível calcular a média.");
}
});