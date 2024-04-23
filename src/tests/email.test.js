const validaEmail = require('../email.js');

test('A função validaEmail funciona corretamente', () => {
    expect(validaEmail('joao@')).toBe(false)  
    expect(validaEmail('joao@com')).toBe(false)
    expect(validaEmail('joao.com')).toBe(false)
    expect(validaEmail('joao@com.')).toBe(false)
    expect(validaEmail('joao@joao.com')).toBe(true)
})