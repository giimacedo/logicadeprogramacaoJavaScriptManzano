/*Exercício L01D - Pg 25
 Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um 
automóvel que faz 12 Km por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto 
(TEMPO) e a velocidade média (VELOCIDADE) durante a viagem. Desta forma, será possível obter a 
distância percorrida com a fórmula DISTANCIA  TEMPO * VELOCIDADE. Possuindo o valor da 
distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula 
LITROS_USADOS  DISTANCIA / 12. Ao final, o programa deve apresentar os valores da velocidade 
média (VELOCIDADE), tempo gasto na viagem (TEMPO), a distancia percorrida (DISTANCIA) e a 
quantidade de litros (LITROS_USADOS) utilizada na viagem*/
document.getElementById("exercicioL01D").addEventListener("click", function antecessor(){

alert("Combustível gasto na viagem");

let tempo = parseInt(prompt("Digite o tempo gasto na viagem:"));
let velocidade = parseInt(prompt("Digite a velocidade média:"));
let distancia = tempo * velocidade;
let litros_Usados = distancia / 12;

alert("Velocidade média: " + velocidade);
alert("Tempo gasto: " + tempo);
alert("Distância percorrida: " + distancia);
alert("Litros usados: " + litros_Usados);
});