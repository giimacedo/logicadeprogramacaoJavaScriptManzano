/*Exercício L03B - Pg 46
Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100)*/
document.getElementById("exercicioL03B").addEventListener("click", function antecessor(){

alert("Soma dos 100 primeiros números");

let contador = 1;
let soma = 0;

while (contador <= 100){
    soma = soma + contador;
    contador++;
}

alert("A soma é: " + soma);
});