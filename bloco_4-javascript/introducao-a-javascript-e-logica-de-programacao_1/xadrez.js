let pieceChess = "kINg"; 

switch (pieceChess.toLowerCase()) {
    case 'horse':
        console.log("Anda em L");
        break;
    case 'bishop':
        console.log("Anda pelas diagonais");
        break;
    case 'king':
        console.log("Anda para qualquer lado, mas só uma casa");
        break;
    case 'queen':
        console.log("Anda para qualquer lado e quantas casas quiser");
        break;
    default:
        console.log("Peça inválida!")
} 