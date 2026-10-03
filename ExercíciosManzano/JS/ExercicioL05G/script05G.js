/*Exercício L05G - Pg 66
Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser 
considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que 
neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^). */
document.getElementById("exercicioL05G").addEventListener("click", function antecessor(){

alert("Potência de 3");

let resultado = 1;

for(let expoente = 0; expoente <= 15; expoente++){
    alert("3 elevado a " + expoente + " = " + resultado);

    resultado = resultado * 3;
}
});