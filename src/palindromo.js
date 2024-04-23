function isPalindromo(str) {
    const string = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const stringReversa = string.split('').reverse().join('');

    return string === stringReversa;
}

module.exports = isPalindromo;