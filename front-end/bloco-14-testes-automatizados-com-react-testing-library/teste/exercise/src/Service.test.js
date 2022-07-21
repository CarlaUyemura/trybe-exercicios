import { render, screen } from '@testing-library/react';
import App from './App';

const func = require('./Service');

// 1 -Crie uma função que gere um número aleatório
// Defina uma função que gere um número aleatório entre 0 e 100.
// Desenvolva os testes para essa função.
// Utilize o mock e defina o retorno padrão como 10.
// Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

test('Verifica se a funcao retornar um numero', () => {
  func.geraNumeroAleatorio = jest.fn().mockReturnValue(10)
  expect(func.geraNumeroAleatorio()).toBe(10);
  expect(func.geraNumeroAleatorio).toHaveBeenCalled();
  expect(func.geraNumeroAleatorio).toHaveBeenCalledTimes(1);
});

// 2- Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez.
// Defina o mock da função para a nova funcionalidade da função.
// Teste se a função foi chamada e a nova implementação de divisão foi aplicada.
// Verifique se a aplicação da nova implementação acontece apenas uma vez.

test('Verifica se a funciona a nova implementação', () => {
 func.geraNumeroAleatorio = jest.fn(func, 'geraNumeroAleatorio').mockImplementation((a,b) => a / b)

 expect(func.geraNumeroAleatorio(4,2)).toBe(2);
 expect(func.geraNumeroAleatorio).toHaveBeenCalled();
 expect(func.geraNumeroAleatorio).toBeCalledTimes(1);
  expect(func.geraNumeroAleatorio).toHaveBeenCalledWith(4, 2);
});

// 3- Use a mesma função do primeiro exercício
// Utilize o mock e desenvolva uma nova implementação que receba três parâmetros
// Retorne a multiplicação dos parâmetros.
// Realize os testes que achar necessário.
// Resete sua implementação e crie uma nova, que receba apenas um parâmetro e retorne o dobro.
// Faça os testes que achar necessário.

test('Verifica se a funciona recebe outra implementação', () => {
  func.geraNumeroAleatorio = jest.spyOn(func, 'geraNumeroAleatorio').mockImplementation((a,b, c) => a * b * c)
 
  expect(func.geraNumeroAleatorio(4,2, 1)).toBe(8);
  expect(func.geraNumeroAleatorio).toHaveBeenCalled();
  expect(func.geraNumeroAleatorio).toBeCalledTimes(1);
   expect(func.geraNumeroAleatorio).toHaveBeenCalledWith(4, 2, 1);

   func.geraNumeroAleatorio = jest.fn().mockRestore();

   func.geraNumeroAleatorio = jest.fn().mockImplementation((a) => a * 2);
   expect(func.geraNumeroAleatorio(5)).toBe(10)
   expect(func.geraNumeroAleatorio).toHaveBeenCalled();
   expect(func.geraNumeroAleatorio).toBeCalledTimes(1);
    expect(func.geraNumeroAleatorio).toHaveBeenCalledWith(5);
 });