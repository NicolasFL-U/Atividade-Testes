const isPalindromo = require('../palindromo.js')

test('A função isPalindromo funciona corretamente', () => {
    expect(isPalindromo('ovo')).toBe(true)
    expect(isPalindromo('Ovo')).toBe(true)
    expect(isPalindromo('arara')).toBe(true)
    expect(isPalindromo('Arara')).toBe(true)
    expect(isPalindromo('cachorro')).toBe(false)
    expect(isPalindromo('Cachorro')).toBe(false)
})