const { questionInt, questionFloat } = require('readline-sync');

function calculoIMC() {
  const altura = questionFloat("Digite sua altura: ");
  const peso = questionInt("Digite seu peso: ");

  const calculoIMC = peso / (altura ** 2);

  if (calculoIMC < 18.5) {
    return console.log("Abaixo do peso (magreza)");
  } 
  if (calculoIMC >= 18.5 && calculoIMC <= 24.9) {
    return console.log("Peso normal");
  } 
  if (calculoIMC >= 25 && calculoIMC <= 29.9) {
    return console.log("Acima do peso (sobrepeso)");
  } 
  if (calculoIMC >= 30 && calculoIMC <= 34.9) {
    return console.log("Obesidade grau I");
  } 
  if (calculoIMC >= 35 && calculoIMC <= 39.9) {
    return console.log("Obesidade grau II");
  }  

  console.log("Obesidade graus III e IV");


  console.log('IMC:', calculoIMC.toFixed(2));
}

module.exports = calculoIMC;