/*Exercício L05D - Pg 66
 Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 
1 até 500.*/
document.getElementById("exercicioL05D").addEventListener("click", function antecessor(){

alert("Soma dos pares de 1 até 500");

let soma = 0;

for(let numero = 1; numero <= 500; numero++){
    if (numero % 2 === 0){
        soma = soma + numero;
    }
}

alert("Somatório dos pares: " + soma);
});