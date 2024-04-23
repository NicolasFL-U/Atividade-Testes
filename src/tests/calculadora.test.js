const { somar, subtrair, multiplicar, dividir } = require('../calculadora.js')

test('A função somar funciona corretamente', () => {
    expect(somar(1, 2)).toBe(3)
    expect(somar(1, -2)).toBe(-1)
})

test('A função subtrair funciona corretamente', () => {
    expect(subtrair(1, 2)).toBe(-1)
    expect(subtrair(1, -2)).toBe(3)
})

test('A função multiplicar funciona corretamente', () => {
    expect(multiplicar(1, 2)).toBe(2)
    expect(multiplicar(1, -2)).toBe(-2)
})

test('A função dividir funciona corretamente', () => {
    expect(dividir(1, 2)).toBe(0.5)
    expect(dividir(1, -2)).toBe(-0.5)
    expect(dividir(1, 0)).toBe("Não se pode dividir por 0")
})