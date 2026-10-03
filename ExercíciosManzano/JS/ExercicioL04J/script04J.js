/*Exercício L04J - Pg 50
 Elaborar um programa que apresente o resultado inteiro da divisão de dois números quaisquer. 
Para a elaboração do programa, não utilizar em hipótese alguma o conceito do operador aritmético 
DIV. A solução deve ser alcançada com a utilização de looping. Ou seja, o programa deve 
apresentar como resultado (quociente) quantas vezes o divisor cabe no dividendo. */
document.getElementById("exercicioL04J").addEventListener("click", function antecessor(){

alert("Divisão inteira sem DIV");

let dividendo = parseInt(prompt("Digite o dividendo:"));
let divisor = parseInt(prompt("Digite o divisor:"));
let quociente = 0;
let resto = dividendo;

do{
    if (resto >= divisor){
        resto = resto - divisor;
        quociente++;
    }
} while (resto >= divisor);

alert("Resultado inteiro da divisão: " + quociente);
});
