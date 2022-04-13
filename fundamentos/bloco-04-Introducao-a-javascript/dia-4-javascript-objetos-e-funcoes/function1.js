// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

//Exemplo de palíndromo: arara .
//verificaPalindrome('arara') ;
//Retorno esperado: true
//verificaPalindrome('desenvolvimento') ;
//Retorno esperado: false


function palindromo (word){
  let verificaPalindrome = false;

  for(let i = 0; i < word.length; i += 1){
    
    if(word[i] == word[(word.length - 1)-i]){
      return verificaPalindrome = true;
    
    }
    else{
      return verificaPalindrome = false;
      
    }
  }
}

console.log(palindromo("banana"));
