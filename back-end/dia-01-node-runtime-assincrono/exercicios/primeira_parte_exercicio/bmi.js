const readline = require('readline-sync');

const imc = (weight,height) => {
  const cmForM = height / 100;
  const result = weight / (cmForM * cmForM);
  return result;
}

function returnQuestion () {
  const peso = readline.questionFloat('What\'s your weight? (kg) ');
  const alt = readline.questionInt('What\'s your height? (cm) ');
  const result = imc(peso, alt).toFixed(2);

  if (result < 18.5) {
    console.log(`IMC: ${result} - Abaixo do peso (magreza)`);
  }
  if (result >= 18.5 && result < 24.9) {
    console.log(`IMC: ${result} - Peso normal`);
  }
  if (result >= 25 && result < 29.9) {
    console.log(`IMC: ${result} - Acima do peso (sobrepeso)`);
  }
  if (result >= 30 && result < 34.9) {
    console.log(`IMC: ${result} - Obesidade grau I`);
  }
  if (result >= 35 && result < 39.9) {
    console.log(`IMC: ${result} - Obesidade grau II`);
  }
  if (result >= 40) {
    console.log(`IMC: ${result} - Obesidade grau III e IV`);
  }
}

returnQuestion();
// module.export = imc;