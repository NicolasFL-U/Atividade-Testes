function validaSenha(senha) {
    const tamanhoMinimo = 8;
    const temMaiusculo = /[A-Z]/.test(senha);
    const temMinusculo = /[a-z]/.test(senha);
    const temNumero = /[0-9]/.test(senha);
    const temCaractereEspecial = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(senha);

    if (senha.length < tamanhoMinimo || !temMaiusculo || !temMinusculo || !temNumero || !temCaractereEspecial) {
        return false;
    }

    return true;
}

module.exports = validaSenha;