// 3- Considere o array de strings abaixo:
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
      ////      0         1           2        3      4   
let array = ['java', 'javascript', 'python', 'html', 'css'];
      ////      1       2             3         4       5

let bigWord = array[0];

  for (i = 1; i < array.length; i += 1){
    
    
    if(array[i].length > bigWord.length){

      bigWord = array[i];
      
  }
  
} console.log(bigWord);

/////////////////////////////////////////////

let lessWord = array[0];

  for (i = 1; i < array.length; i += 1){
    
    
    if(array[i].length < lessWord.length){

      lessWord = array[i];
      
  }
  
} console.log(lessWord);