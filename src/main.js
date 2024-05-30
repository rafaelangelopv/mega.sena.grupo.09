/* Intregrantes: [Nome/Matrícula]
Rafael Angelo Pinheiro Do Vale
Maria Beatriz Gadelha de Oliveira
Isaias Do Amaral Sousa / 2416767
Rodrigo Fernandes Targino de Souza
Lucas Ramos Ribeiro */

document.getElementById("btnIniciar").addEventListener("click", function() {
    megaSena();
});
function megaSena(){
    var numerosEscolhidos = [];
    var numerosSorteados = [];

    // Insira 6 números diferentes entre 1 e 60
    for (var i = 0; i < 6; i++){
        var numero = parseInt(prompt("Insira um " + (i + 1) + " número entre 1 e 60:"));

        // Verifique se o número é válido e diferente dos anteriores
        if (numero < 1 || numero > 60 || numerosEscolhidos.includes(numero)){
            alert("Insira um número válido, diferente dos anteriores.");
            return;
        }
        numerosEscolhidos.push(numero);
    }
        // Ordena os números escolhidos em ordem crescente
        numerosEscolhidos.sort(function(a, b) {
        return a - b;
        });

    // Sorteie 6 números aleatórios entre 1 e 60
    for (var i = 0; i < 6; i++){
        var numeroSorteado;
        do{
            numeroSorteado = Math.floor(Math.random() * 60) + 1;
        } while (numerosSorteados.includes(numeroSorteado));
        numerosSorteados.push(numeroSorteado);
    }
   // Compare os números e determine os acertos
    var acertos = 0;
    for (var i = 0; i < 6; i++){
        if (numerosEscolhidos.includes(numerosSorteados[i])){
            acertos++;
        }
    }

    // Mostre a mensagem de acordo com os acertos
    if (acertos === 6){
        alert("Parabéns! Você acertou a SENA e ganhou!");
    } else if (acertos === 5){
        alert("Parabéns! Você acertou a QUINA e ganhou!");
    } else if (acertos === 4){
        alert("Parabéns! Você acertou a QUADRA e ganhou!");
    } else{
        alert("Infelizmente, você perdeu!");
    }

 // Mostre os números escolhidos e sorteados
    alert("Números escolhidos: " + numerosEscolhidos.join(", "));
    alert("Números sorteados: " + numerosSorteados.join(", "));
}