const validarCartao = require('../cartao.js');

// validar numero de cartão seguindo o algoritmo de Luhn
test('A função validarCartao funciona corretamente', () => {
    expect(validarCartao('4532015112830366')).toBe(true)
    expect(validarCartao('4532015112830367')).toBe(false)
    expect(validarCartao('453201511283036')).toBe(false)
    expect(validarCartao('45320151128303666')).toBe(false)
})