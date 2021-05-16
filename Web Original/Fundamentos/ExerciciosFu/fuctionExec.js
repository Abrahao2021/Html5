//Exercicio 1
function Soma(A, B) {
    let soma = A + B
    let Mult = A * B
    let Div = A / B

    return console.log(soma, Mult, Div)
}

Soma(12, 6)

// Exercicio 2

const quadrado = function (a, b, c) {

    if (a == b && b == c && a == c) {

        console.log("Equilátero")
    } else if (a == c && a == b && b == a && b) {

    }
}

quadrado(2, 6, 2)

// exercicio 3

const expor = function (nota, l) {
    return Math.pow(nota, l)
}

console.log(expor(10, 5))

// exercicio 4

const resto = (a, b) => a % b

console.log(resto(10, 3))

// exercicio 5

function Valor() {
    let vonta = 0.30000000000000004
    return console.log(vonta.toFixed(2))

}

Valor()

// exercicio 6
function juros(Capita = 200, taxa = 5, tempo = 2) {

    let juros = 0
    this.juroSimple = function () {
        juros = Capita * taxa
        return juros
    }

    this.composto = function () {
        return juros + tempo
    }

}

const lucro = new juros

console.log(lucro.juroSimple())
console.log(lucro.composto())

// exercicio 7

const formula = function (ax, bx, c) {
    let x = Math.pow(ax, 2) - bx + c

    if (x < 0) {
        return console.log(x + " O delta e negativo")
    } else {
        return console.log(x + "O delta e positivo")
    }

}

formula(1, 50, 12)

// exercicio 8

const jogador = function () {
    jo = ["30", "23", "3", "29", "40", "35"]
    let melhor = []
    let pior = []
    for (let i = 0; i < jo.length; i++) {
        if (jo[i] >= 30) {
            melhor.push(jo[i])



        } else {

            pior.push(jo[i])

        }

    }
    console.log(`O jogador ganhou${melhor.length} e os pontos são de ${melhor}`)

    console.log(`O piores são de ${pior.length} é os pontos são de ${pior}`)




}
jogador()


// exercicio 9

const Alunos = function (N) {
    N += 3
    if (N <= 40) {
        N -= 3
        console.log(`Esta reprovado ${N}`)

    } else {
        console.log(`Esta aprovado ${N}`)
    }
}
Alunos(32)

// exercicio 10

const Divisivel = function (numero) {
    let resposta = numero % 3
    const R = !resposta
    console.log(R)
}

Divisivel(8539)
