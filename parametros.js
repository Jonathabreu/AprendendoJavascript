// parêmatros de função

function soma(numero1, numero2) {
    return numero1 + numero2;
}

console.log(soma(2, 2))
console.log(soma(245, 200))
console.log(soma(-500, 60))

// parâmentros x argumentos

// ordem dos parâmentros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade("Jonathan", 27))

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)))

console.log(multiplica(soma(4, 5)))