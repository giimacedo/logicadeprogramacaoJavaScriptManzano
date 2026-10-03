/*Exercício L05E - Pg 66
Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar 
se o número é ímpar, efetuar dentro da malha a verificação lógica desta condição com a instrução 
se, perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo. */
document.getElementById("exercicioL05E").addEventListener("click", function antecessor(){

alert("Números ímpares de 0 até 200");

for(let numero = 0; numero <= 200; numero++){
    if (numero % 2 !== 0){
        alert(numero)
    }
}
});