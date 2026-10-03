/*Exercício L05C - Pg 66
Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100). */
document.getElementById("exercicioL05C").addEventListener("click", function antecessor(){

alert("Soma dos 100 primeiros números");

let soma = 0;

for(let numero = 1; numero <= 100; numero++){
    soma = soma + numero;
}

alert("A soma dos 100 primeiros números é: " + soma);
});