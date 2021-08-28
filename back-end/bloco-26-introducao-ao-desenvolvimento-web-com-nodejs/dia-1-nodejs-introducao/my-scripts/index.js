const readline = require('readline-sync');
const imc = require('./imc');
const velMedia = require('./velocidade');
const numAleatorio = require('./sorteio'); 

function chooseScript() {
  const scripts = ['1 - imc' , '2 - velocidade', '3 - sorteio'];

  console.log('Qual script você quer rodar?');
  scripts.map(script => console.log(script));

  const resposta = readline.questionInt('Digite o número do script escolhido: ');

  switch(resposta) {
    case 1:
      console.log('===========================')
      console.log('Calculo do IMC')
      imc()
      break;
    case 2:
      console.log('===========================')
      console.log('Calculo da Velocidade Média')
      velMedia();
      break;
    case 3:
      console.log('===========================')
      console.log('Acerte o número aleatório')
      numAleatorio();
      break;
  };

  const resp = readline.question('Deseja esoclher outro script?[S/N] ').toUpperCase();
  if (resp == 'S') return chooseScript();
  console.log('Até Breve!');
};

chooseScript();