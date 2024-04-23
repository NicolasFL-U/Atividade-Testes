function ordenarLista(lista, ordem) {
    if (ordem === 'crescente') {
        return lista.sort((a, b) => a - b);
    } else if (ordem === 'decrescente') {
        return lista.sort((a, b) => b - a);
    } else {
        return false
    }
}

module.exports = ordenarLista;