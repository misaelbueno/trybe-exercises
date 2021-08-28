const readline = require('readline-sync');

function calculaVelocidadeMedia() {
  const tempo = readline.questionInt('Digite o tempo(s): ');
  const distancia = readline.questionInt('Digite a distancia(m): ');

  const velocidadeMedia = (distancia / tempo).toFixed(2);

  console.log(`Velocidade média: ${velocidadeMedia}m/s`);
}

// calculaVelocidadeMedia();

module.exports = calculaVelocidadeMedia;