const isPrimo = require('../primos');

test('A função isPrimo funciona corretamente', () => {
    expect(isPrimo(120)).toBe(false)
    expect(isPrimo(37)).toBe(true)
    expect(isPrimo(2)).toBe(true)
    expect(isPrimo(0)).toBe(false)
})