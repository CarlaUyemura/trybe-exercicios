// 1 - Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


for (let index = 1; index < numbers.length; index += 1) {

  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {

    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}console.log(numbers);

for (let index = 1; index < numbers.length; index += 1) {

  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {

    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}console.log(numbers);

///////////////////////////

const n = 9;

let resultado = 100;
for( let i = 0; i <= n; i += 1){
  resultado -= i;
}
console.log(resultado);