// const readline = require('readline-sync');

// function sorteioAleatorio() {
//   let resp = 'S';

//   while(resp == 'S') {
//     const numero = readline.questionInt('Digite um número entre 0 e 10: ');
//     const numAleatorio = parseInt(Math.random() * 10);

//     if (numero === numAleatorio) {
//       console.log('PARABÉNS! Você acertou!!');
//     } else {
//       console.log(`Que pena, você errou o número. O número certo era ${numAleatorio}`);
//     }    

//     resp = readline.question('Deseja jogar novamente?[S/N] ').toUpperCase();
//   }
// };

// sorteioAleatorio();

// outro jeito sem usar o while
const readline = require('readline-sync');

function resultado(aleatorio, numero) {
  if (numero !== aleatorio) return console.log(`Que pena, você errou! O número certo era ${aleatorio}`);

  return console.log('PARABÉNS! Você acertou!!'); 
};

function jogo() {
  const numero = readline.questionInt('Digite um número entre 0 e 10: ');
  const aleatorio = parseInt(Math.random() * 10);

  resultado(aleatorio, numero);

  const novamente = readline.question('Deseja jogar novamente?[S/N]').toUpperCase();

  if(novamente !== 'S') return console.log('Obrigado por jogar!');

  jogo(); // funcão recursiva
};

module.exports = jogo;


 

