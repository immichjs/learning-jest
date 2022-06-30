const Person = require('../classes/person')

test('Deve instânciar um objeto com os parâmetros informados', () => {
  const person = new Person('Mich', 'França', 20)

  expect(person).toEqual({
    name: 'Mich',
    lastName: 'França',
    age: 20,
    speed: 0
  })
})

test('Parâmetros name e lastName devem ser do tipo string e age do tipo number', () => {
  const person = new Person('Mich', 'França', '20')

  expect(person).toEqual({})
})

test('Setter para mudar o nome deve mudar o atributo name da instância da classe Person', () => {
  const person = new Person('Mich', 'França', 20)
  person.changeName = 'Laura'

  expect(person.name).toBe('Laura')
})

test('Incrementar +1 para o atributo age da instância de Person', () => {
  const person = new Person('Mich', 'França', 20)
  person.incrementAge()

  expect(person.age).toBe(21)
})

test('Deve retornar o nome completo da pessoa instânciada', () => {
  const person = new Person('Mich', 'França', 20)

  expect(person.fullName).toBe('Mich França')
})

test('Deve falar uma mensagem', () => {
  const person = new Person('Mich', 'França', 20)

  const message = 'Hello World'
  const personSpoke = person.say(message)

  expect(personSpoke).toBe('Mich: Hello World')
})

test('Pessoa deve correr', () => {
  const person = new Person('Mich', 'França', 20)
  person.run()

  expect(person.speed).toBe(10)
})

test('Pessoa deve correr', () => {
  const person = new Person('Mich', 'França', 20)

  for (let i = 0; i < 15; i++) {
    person.run()
  }

  expect(person.speed).toBe(100)
})

test('Pessoa deve reduzir a velocidade da corrida até parar', () => {
  const person = new Person('Mich', 'França', 20)

  for (let i = 0; i < 10; i++) {
    person.slowDown()
  }

  expect(person.speed).toBe(0)
})