const myRemove = require('./myRemove');

const newArr= [1, 2, 4];

it('verifica se retorna o array esperado'), () => {
  expect(([1, 2, 3, 4], 3)).test.todo(expect.arrayContaining(newArr));
}

// expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(expected))