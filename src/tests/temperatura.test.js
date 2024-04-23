const { celsiusToFahrenheit, fahrenheitToCelsius } = require('../temperatura');

test('A função celsiusToFahrenheit funciona corretamente', () => {
    expect(celsiusToFahrenheit(0)).toBe(32)
    expect(celsiusToFahrenheit(100)).toBe(212)
    expect(fahrenheitToCelsius(32)).toBe(0)
    expect(fahrenheitToCelsius(212)).toBe(100)
})
