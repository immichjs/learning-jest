describe('Matchers Comuns', () => {
  test('dois mais dois é quatro', () => {
    expect(2 + 2).toBe(4)
  })
  
  test('Atribuição de Object', () => {
    const data = { one: 1 }
    data['two'] = 2
    
    expect(data).toEqual({ one: 1, two: 2 })
  })
  
  test('Adicionando números positivos não é zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0)
      }
    }
  })
})

describe('Verdade', () => {
  test('null', () => {
    const n = null

    expect(n).toBeNull()
    expect(n).toBeDefined()
    expect(n).not.toBeUndefined()
    expect(n).not.toBeTruthy()
    expect(n).toBeFalsy()
  })

  test('zero', () => {
    const z = 0

    expect(z).not.toBeNull()
    expect(z).toBeDefined()
    expect(z).not.toBeUndefined()
    expect(z).not.toBeTruthy()
    expect(z).toBeFalsy()
  })
})

describe("Números", () => {
  test('dois mais dois', () => {
    const value = 2 + 2

    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqual(3.5)
    expect(value).toBeLessThan(5)
    expect(value).toBeLessThanOrEqual(4.5)

    expect(value).toBe(4)
    expect(value).toEqual(4)
  })

  test('Testando números flutuantes', () => {
    const value = 0.1 + 0.2

    expect(value).toBeCloseTo(0.3)
  })
})

describe("Strings", () => {
  it('Não existe I em team', () => {
    expect('team').not.toMatch(/I/)
  })

  it('Mas existe "stop" em Christoph', () => {
    expect('Christoph').toMatch(/stop/)
  })
})

describe('Arrays e iteráveis', () => {
  const shoppingList = [
    'fraldas',
    'kleenex',
    'sacos de lixo',
    'papel toalha',
    'leite',
  ]
  
  test('A lista de compras tem leite nela', () => {
    expect(shoppingList).toContain('leite')
    expect(new Set(shoppingList)).toContain('leite')
  })
})

describe('Exceções', () => {
  function compileAndroidCode () {
    throw new Error('Você está usando o JDK errado')
  }

  it('Compilando para android segue conforme esperado', () => {
    expect(() => compileAndroidCode()).toThrow()
    expect(() => compileAndroidCode()).toThrow(Error)

    expect(() => compileAndroidCode()).toThrow('Você está usando o JDK errado')
    expect(() => compileAndroidCode()).toThrow(/JDK/)
  })
})
