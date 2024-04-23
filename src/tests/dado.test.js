const rolada = require('../dados.js');

test('A função rolada funciona corretamente', () => {
    expect(rolada()).toBeGreaterThanOrEqual(1)
    expect(rolada()).toBeLessThanOrEqual(6)
})
