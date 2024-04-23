const ordenarLista = require('../ordenar');

test('A função ordenarLista funciona corretamente', () => {
    expect(ordenarLista([1, 2, 3, 4, 5], 'crescente')).toEqual([1, 2, 3, 4, 5])
    expect(ordenarLista([5, 4, 3, 2, 1], 'crescente')).toEqual([1, 2, 3, 4, 5])
    expect(ordenarLista([1, 2, 3, 4, 5], 'decrescente')).toEqual([5, 4, 3, 2, 1])
    expect(ordenarLista([5, 4, 3, 2, 1], 'decrescente')).toEqual([5, 4, 3, 2, 1])
    expect(ordenarLista([1, 3, 2, 5, 4], 'erro')).toEqual(false)
})

