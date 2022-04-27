let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

for(let i = 0; i < numbers.length; i +=1){
  console.log("Itens do array: " + numbers[i]);
}

// 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let resultado = 0;

for(let i2 = 0; i2 < numbers.length; i2 +=1){
 resultado += numbers[i2];
  
} console.log("Total: " + resultado);

// 3 -Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let media = 0;

for(i3 = 0; i3 < numbers.length; i3 +=1){
  media = (resultado / numbers.length);
}console.log("Média: " + media);

// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if(media > 20){
  console.log("valor maior que 20");

}else {
  console.log("Valor menor ou igual a 20");
}

// 5 -Utilizando for , descubra qual o maior valor contido no array e imprima-o;


let maiorNumber = 0;

for(let i4 = 0; i4 < numbers.length; i4 += 1){
    
  if(numbers[i4] > maiorNumber){
    maiorNumber = numbers[i4];
  
  }
}  console.log("Maior número do array: " + maiorNumber);


// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let impar = 0;

for(let i5 = 0; i5 < numbers.length; i5 += 1){
  if(numbers[i5] % 2 === 1){
    impar += 1;

  }else if(impar === 0){
    console.log("nenhum valor ímpar encontrado");
  }
} console.log("Quantidade de números ímpares no array: " + impar);

// 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menorNumber = 0;

for(let i6 = 0; i6 < numbers.length; i6 += 1){
    
    
    if(numbers[i6] < menorNumber){
      menorNumber = numbers[i6];

      
    }
}console.log("Menor número do Array: " + menorNumber);

// 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
 let newArray = [];

 for(let index = 0; index < 25; index += 1){
       
             newArray.push(index +1);

      }console.log(newArray);

 // 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

 let resultadoDivisao = [];
 
 for(let index2 = 0; index2 < newArray.length; index2 += 1){
   let divisao = newArray[index2] / 2;
    resultadoDivisao.push(divisao);
    
 }console.log(resultadoDivisao);