/*Exercício L04H - Pg 50
Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha, 
banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do 
nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área 
do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar 
calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor 
total acumulado da área residencial.*/
document.getElementById("exercicioL04H").addEventListener("click", function antecessor(){

alert("Área total da residência");

let areaTotal = 0;
let resposta;

do{
    let nomeComodo = prompt("Digite o nome do cômodo:");
    let largura = parseInt(prompt("Digite a largura:"));
    let comprimento = parseInt(prompt("Digite o comprimento:"));
    let area = largura + comprimento;

    areaTotal = areaTotal + area;

    alert("Cômodo: " + nomeComodo);
    alert("Área do cômodo: " + area);

    resposta = prompt("Deseja continuar? Digite Sim ou Não.");
    resposta = resposta.toUpperCase();

} while (resposta !== "Não");

alert("Área total da residência: " + areaTotal);
});