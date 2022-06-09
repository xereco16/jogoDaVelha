const {
    ler,
    escrever
} = require('./utils/utils');


const tabuleiro = "_|_|_\n_|_|_\n | | ";
const valoresTabuleiro = "0|1|2\n3|4|5\n6|7|8";

console.log("Como sabemos, um tabuleiro de jogo da velha possui o seguinte formato:\n" + tabuleiro);
console.log("para saber o valor de cada posição, consulte o seguinte tabuleiro:\n" + valoresTabuleiro);

let jogo = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]



for (let i = 0; i < 7; i++) { 
    let jogadaX = Number(ler("Qual a sua jogada 'X'?"));
    let jogadaO = Number(ler("Qual a sua jogada 'O'?"));
    switch (jogadaX) {
    case 0:
        if(jogo[0][0] == ""){
            jogo[0][0] = "X";
        }else{
            console.log("Posição já ocupada");
        }
        break;
    case 1:
        jogo[0][1] = "X";
        console.log("_|X|_\n_|_|_\n | | ")
        break;
    case 2:
        jogo[0][2] = "X";
        console.log("_|_|X\n_|_|_\n | | ")
        break;
    case 3:
        jogo[1][0] = "X";
        console.log("_|_|_\nX|_|_\n | | ")
        break;
    case 4:
        jogo[1][1] = "X";
        console.log("_|_|_\n_|X|_\n | | ")
        break;
    case 5:
        jogo[1][2] = "X";
        console.log("_|_|_\n_|_|X\n | | ")
        break;
    case 6:
        jogo[2][0] = "X";
        console.log("_|_|_\n_|_|_\nX| | ")
        break;
    case 7:
        jogo[2][1] = "X";
        console.log("_|_|_\n_|_|_\n |X| ")
        break;
    case 8:
        jogo[2][2] = "X";
        console.log("_|_|_\n_|_|_\n | |X")
        break;
    default:
        console.log("Jogada inválida");
        break;
    }
    switch (jogadaO) {
    case 0:
        if(!jogo[0][0] == "X"){
            jogo[0][0] = "O";
            console.log("O|_|_\n_|_|_\n | | ")
        }else{
            console.log("Posição já ocupada");
        }
        break;
    case 1:
        jogo[0][1] = "O";
        console.log("_|O|_\n_|_|_\n | | ")
        break;
    case 2:
        jogo[0][2] = "O";
        console.log("_|_|O\n_|_|_\n | | ")
        break;
    case 3:
        jogo[1][0] = "O";
        console.log("_|_|_\nO|_|_\n | | ")
        break;
    case 4:
        jogo[1][1] = "O";
        console.log("_|_|_\n_|O|_\n | | ")
        break;
    case 5:
        jogo[1][2] = "O";
        console.log("_|_|_\n_|_|O\n | | ")
        break;
    case 6:
        jogo[2][0] = "O";
        console.log("_|_|_\n_|_|_\nO| | ")
        break;
    case 7:
        jogo[2][1] = "O";
        console.log("_|_|_\n_|_|_\n |O| ")
        break;
    case 8:
        jogo[2][2] = "O";
        console.log("_|_|_\n_|_|_\n | |O")
        break;
    default:
        console.log("Jogada inválida");
        break;
    }
    console.log(jogo);
    if(jogo[0][0] == "X" && jogo[0][1] == "X" && jogo[0][2] == "X"){
        console.log("Jogador 1 ganhou");
        break;
    }else if (jogo[1][0] == "X" && jogo[1][1] == "X" && jogo[1][2] == "X"){
        console.log("Jogador 1 ganhou");
        break;
    }else if (jogo[2][0] == "X" && jogo[2][1] == "X" && jogo[2][2] == "X"){
        console.log("Jogador 1 ganhou");
        break;
    }else if (jogo[0][0] == "X" && jogo[1][0] == "X" && jogo[2][0] == "X"){
        console.log("Jogador 1 ganhou");
        break;
    }else if (jogo[0][1] == "X" && jogo[1][1] == "X" && jogo[2][1] == "X"){
        console.log("Jogador 1 ganhou");
        break;
    }else if (jogo[0][2] == "X" && jogo[1][2] == "X" && jogo[2][2] == "X"){
        console.log("Jogador 1 ganhou");
        break;
    }else if (jogo[0][0] == "X" && jogo[1][1] == "X" && jogo[2][2] == "X"){
        console.log("Jogador 1 ganhou");
        break;
    }
    if(jogo[0][0] == "O" && jogo[0][1] == "O" && jogo[0][2] == "O"){
        console.log("Jogador 2 ganhou");
        break;
    }else if (jogo[1][0] == "O" && jogo[1][1] == "O" && jogo[1][2] == "O"){
        console.log("Jogador 2 ganhou");
        break;
    }else if (jogo[2][0] == "O" && jogo[2][1] == "O" && jogo[2][2] == "O"){
        console.log("Jogador 2 ganhou");
        break;
    }else if (jogo[0][0] == "O" && jogo[1][0] == "O" && jogo[2][0] == "O"){
        console.log("Jogador 2 ganhou");
        break;
    }else if (jogo[0][1] == "O" && jogo[1][1] == "O" && jogo[2][1] == "O"){
        console.log("Jogador 2 ganhou");
        break;
    }else if (jogo[0][2] == "O" && jogo[1][2] == "O" && jogo[2][2] == "O"){
        console.log("Jogador 2 ganhou");
        break;
    }else if (jogo[0][0] == "O" && jogo[1][1] == "O" && jogo[2][2] == "O"){
        console.log("Jogador 2 ganhou");
        break;
    }
}







