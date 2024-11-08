# calculadora-de-partidas-rankeadas
Este projeto calcula o nível de um jogador com base na quantidade de vitórias e derrotas em partidas ranqueadas.

## Tecnologias

- JavaScript

## Como Usar

1. Abra o console do desenvolvedor no seu navegador (F12).
2. Copie e cole o código JavaScript do projeto.
3. Execute o código.
4. Quando solicitado, insira o número de vitórias e derrotas do jogador.
5. O saldo de vitórias e o nível do jogador serão exibidos no console.

## Exemplo

Aqui está um exemplo de uso da função:

```javascript
// Função para calcular o nível baseado em vitórias e derrotas
function calculaRanked(vit, derr) {
    let saldoVit = vit - derr;
    let nivel;

    if (saldoVit < 10) {
        nivel = "Ferro";
    } else if (saldoVit >= 11 && saldoVit <= 20) {
        nivel = "Bronze";
    } else if (saldoVit >= 21 && saldoVit <= 50) {
        nivel = "Prata";
    } else if (saldoVit >= 51 && saldoVit <= 80) {
        nivel = "Ouro";
    } else if (saldoVit >= 81 && saldoVit <= 90) {
        nivel = "Diamante";
    } else if (saldoVit >= 91 && saldoVit <= 100) {
        nivel = "Lendário";
    } else if (saldoVit >= 101) {
        nivel = "Imortal";
    }

    console.log(`O Herói tem de saldo de ${saldoVit} está no nível de ${nivel}`);
}

// Função para validar a entrada do usuário
function solicitarEntrada(mensagem) {
    let valor;
    do {
        valor = prompt(mensagem);
        valor = parseInt(valor); // Tenta converter para número
    } while (isNaN(valor) || valor < 0); // Continua pedindo até receber um número válido e não negativo
}

// Pede para o usuário as vitórias e derrotas
const vit = solicitarEntrada("Digite número de vitórias do herói:");
const derr = solicitarEntrada("Digite número de derrotas do herói:");

// Chama a função
calculaRanked(vit, derr);
