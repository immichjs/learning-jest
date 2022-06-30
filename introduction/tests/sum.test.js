const sum = require('../sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
})

test('Deve retornar ao identificar que o tipo dos parâmetros é !== de number', () => {
  expect(sum('1', 2)).toBeFalsy()
})