const CPF = require('../classes/cpf')

test('Deve ser instância de CPF', () => {
  const cpf = new CPF('325.093.148-90')

  expect(cpf).toBeInstanceOf(CPF)
})

test('Atributo clearCPF não deve conter caracteres especiais', () => {
  const cpf = new CPF('325.093.148-90')

  expect(cpf.clearCPF).toBe('32509314890')
})

test('Deve validar se o CPF é válido', () => {
  const cpf = new CPF('325.093.148-90')
  const isValid = cpf.validate()

  expect(isValid).toBeTruthy()
})