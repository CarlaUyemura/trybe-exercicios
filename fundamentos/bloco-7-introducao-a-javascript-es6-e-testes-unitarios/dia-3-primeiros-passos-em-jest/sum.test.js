const sum = require('./sum');

it('sums two values', () => {
  expect(sum(4, 5)).toBe(9);
});

it('sums two values', () => {
  expect(sum(0, 0)).toBe(0);
});

it('sums number and string return error', () => {
  expect(() => sum(4, '5')).toThrow(Error);
});

it('confirma a mensagem', () =>{
  expect(() => sum(4, '5')).toThrow('parameters must be numbers');
});


