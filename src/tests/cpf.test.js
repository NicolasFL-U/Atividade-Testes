const validarCPF = require('../cpf.js');

// não sei testar as linhas 22 e 33 do cpf.js
test('A função validarCPF funciona corretamente', () => {
    expect(validarCPF('123')).toBe(false)
    expect(validarCPF('111.111.111-11')).toBe(false)
    expect(validarCPF('123.456.789-09')).toBe(true)
    expect(validarCPF('073.607.951-33')).toBe(true)
})