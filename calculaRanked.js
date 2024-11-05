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
    return valor;
}

// Pede para o usuário as vitórias e derrotas
const vit = solicitarEntrada("Digite número de vitórias do herói:");
const derr = solicitarEntrada("Digite número de derrotas do herói:");

// Chama a função
calculaRanked(vit, derr);
