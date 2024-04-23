const validaSenha = require('../senha.js');

test('A função validaSenha funciona corretamente', () => {
    expect(validaSenha('12345678')).toBe(false)
    expect(validaSenha('12345678a')).toBe(false)
    expect(validaSenha('12345678A')).toBe(false)
    expect(validaSenha('12345678Aa')).toBe(false)
    expect(validaSenha('12345678Aa!')).toBe(true)
    expect(validaSenha('12345678Aa!@')).toBe(true)
})