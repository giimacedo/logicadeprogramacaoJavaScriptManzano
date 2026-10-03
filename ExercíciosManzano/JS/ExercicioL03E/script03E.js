/*Exercício L03E - Pg 46
Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser 
considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que 
neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^). */
document.getElementById("exercicioL03E").addEventListener("click", function antecessor(){

alert("Potências de 3");

let expoente = 0;
let resultado = 1;

while (expoente <= 15){
    alert("3 elevado a " + expoente + " = " + resultado);
    resultado = resultado * 3;
    expoente++;
}
});