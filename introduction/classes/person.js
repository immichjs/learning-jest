class Person {
  constructor (name, lastName, age) {
    if (typeof name !== 'string' || typeof lastName !== 'string' || typeof age !== 'number') return

    this.name = name
    this.lastName = lastName
    this.age = age
    this.speed = 0
  }

  set changeName (value) {
    this.name = value
  }

  get fullName () {
    return `${this.name} ${this.lastName}`
  }

  incrementAge () {
    this.age++
  }

  say (message) {
    return `${this.name}: ${message}`
  }

  run () {
    if (this.speed < 100) {
      this.speed += 10
      return
    }
    
    this.speed = 100
  }

  slowDown () {
    if (this.speed > 0) {
      this.speed -= 10
      return
    }
    
    this.speed = 0
  }
}

module.exports = Person