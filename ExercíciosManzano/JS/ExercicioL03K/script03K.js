/*Exercício 47 - pg 47
Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha, 
banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do 
nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área 
MANZANO, José Augusto N. G., Estudo Dirigido: ALGORITMOS - Editora Érica, 2000.
do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar 
calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor 
total acumulado da área residencial. */
document.getElementById("exercicioL03K").addEventListener("click", function antecessor(){

alert("Área total da residência");

let areaTotal = 0;
let resposta = "Sim";

while (resposta === "Sim"){
    let nomeComodo = prompt("Digite o nome do cômodo:");
    let largura = parseInt(prompt("Digite a largura:"));
    let comprimento = parseInt(prompt("Digite o comprimento:"));
    let area = largura * comprimento;
    
    areaTotal = areaTotal + area;

    alert("Cômodo: " + nomeComodo);
    alert("Área: " + area);

    resposta = prompt("Deseja continuar? Digite Sim ou Não.");
    resposta = resposta.toUpperCase();
}

alert("Área total da residência: " + areaTotal);
});