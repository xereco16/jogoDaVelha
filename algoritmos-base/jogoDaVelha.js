const {
    ler
} = require('./utils/utils');

let tabuleiro = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
]


jogar();

function jogar() {
    let jogador = ler('Digite o simbolo do jogador: ');
    let jogadas = 0;
    while (true) {
        jogadas++;
        mostrarTabuleiro(tabuleiro);
        let linha = Number(ler('Digite a linha: ')) - 1;
        let coluna = Number(ler('Digite a coluna: ')) - 1;
        if (tabuleiro[linha][coluna] === ' ') {
            tabuleiro[linha][coluna] = jogador.toUpperCase();
        } else {
            let casaOcupada = true;
            console.log('Casa ocupada');
            while (casaOcupada) {
                let linha = Number(ler('Digite a linha: ')) - 1;
                let coluna = Number(ler('Digite a coluna: ')) - 1;
                if (tabuleiro[linha][coluna] === ' ') {
                    tabuleiro[linha][coluna] = jogador.toUpperCase();
                    casaOcupada = false;
                } else {
                    console.log('Casa ocupada');
                }
            }
        }
        if (validarLinhas(jogador, tabuleiro) || validarColunas(jogador, tabuleiro) || validarDiagonais(jogador, tabuleiro)) {
            mostrarTabuleiro(tabuleiro);
            console.log(`${jogador} venceu!`);
            break;
        } else {
            if (jogadas === 9) {
                console.log('EMPATE!');
                break;
            }
        }

        //jogador === 'X' ? jogador = 'O' : jogador = 'X';
        if (jogador === 'X') {
            jogador = 'O';
        } else {
            jogador = 'X';
        }
    }
}

/**
 * Função para validar as linhas do tabuleiro
 * @param {String} simboloJogador - 'X' ou 'O'
 * @param {Array} tabuleiro - Tabuleiro com as jogadas
 */
function validarLinhas(simboloJogador, tabuleiro) {
    let vitoria;
    for (let linha = 0; linha < 3; linha++) {
        vitoria = false;
        for (let coluna = 0; coluna < 3; coluna++) {
            //console.log(`Verificando valor da linha ${linha} e coluna ${coluna}`);
            let valorCasa = tabuleiro[linha][coluna];
            if (valorCasa === simboloJogador) {
                vitoria = true;
            } else {
                vitoria = false;
                break;
            }
        }
        if (vitoria == true) {
            break;
        }
    }
    return vitoria;
}

/**
 * Função para validar as colunas do tabuleiro
 * @param {String} simboloJogador - 'X' ou 'O'
 * @param {Array} tabuleiro - Tabuleiro com as jogadas
 */
function validarColunas(simboloJogador, tabuleiro) {
    let vitoria;
    for (let coluna = 0; coluna < 3; coluna++) {
        vitoria = false;
        for (let linha = 0; linha < 3; linha++) {
            //console.log(`Verificando valor da linha ${linha} e coluna ${coluna}`);
            let valorCasa = tabuleiro[linha][coluna];
            if (valorCasa === simboloJogador) {
                vitoria = true;
            } else {
                vitoria = false;
                break;
            }
        }
        if (vitoria == true) {
            break;
        }
    }
    return vitoria;
}

/**
 * Função para validar as diagonais do tabuleiro
 * @param {String} simboloJogador - 'X' ou 'O'
 * @param {Array} tabuleiro - Tabuleiro com as jogadas
 */
function validarDiagonais(simboloJogador, tabuleiro) {
    let vitoria = false;
    if (tabuleiro[0][0] === simboloJogador && tabuleiro[1][1] === simboloJogador && tabuleiro[2][2] === simboloJogador) {
        vitoria = true;
    } else if (tabuleiro[0][2] === simboloJogador && tabuleiro[1][1] === simboloJogador && tabuleiro[2][0] === simboloJogador) {
        vitoria = true;
    }
    return vitoria;
}

function mostrarTabuleiro(tabuleiro) {
    console.log(tabuleiro[0][0] + ' | ' + tabuleiro[0][1] + ' | ' + tabuleiro[0][2]);
    console.log('---+---+---');
    console.log(tabuleiro[1][0] + ' | ' + tabuleiro[1][1] + ' | ' + tabuleiro[1][2]);
    console.log('---+---+---');
    console.log(tabuleiro[2][0] + ' | ' + tabuleiro[2][1] + ' | ' + tabuleiro[2][2]);
}