//7 - Escreva um teste que verifique a chamada da callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

// const teste = (seiLa) => {
//   console.log(seiLa);
// }

// uppercase("testando", teste);

it('verifique a chamada da callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas', () => {
  
});