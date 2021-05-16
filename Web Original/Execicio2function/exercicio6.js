const { indexOf } = require("lodash")

function reverso(p) {
    const valor = typeof p


    if (valor == "boolean") {
        return console.log(!valor)
    } else if (valor == "number") {
        return console.log(-p)
    } else {
        return console.log("descreva")
    }

}

reverso(-10)

//exercicio 7

const parametros = function (numero, minimo, maximo, incluido) {

    if (incluido == true) {
        console.log(true)
    } else if (numero > minimo && numero <= maximo) {
        console.log(true)
    } else {
        console.log(false)

    }

}

parametros(50, 10, 100,)

//exercicio 8

const mutiplicador = (l, N) => {
    let resultado = 0
    for (let i = 1; i < N; i++) {
        console.log(resultado += l)
    }

}
mutiplicador(0, 5)

//exercicio 9

const repetir = (Variavel, repetidor) => {
    const objeto = []
    for (let i = 0; i < repetidor; i++) {
        objeto.push(Variavel)
    }
    console.log(objeto)
}

repetir('Lugar', 3)

//exercicio 10

const Mais = (Mais) => {
    const X = []
    for (let i = 0; i < Mais; i++) {
        X.push("+")
    }
    console.log(`repetir ${X}`)
}

Mais(3)
// exercicio 11

const novoArray = (array, array2, array3) => {
    let novo = []
    novo.push(array)
    novo.push(array2)
    novo.push(array3)
    novo.splice(1, 1)
    console.log(novo)
}

novoArray(7, 14, "olá")

//execicio 12


const ob = {
    a: 1,
    b: 2
}
const resolva = Object.is(ob.a, ob.a)
if (resolva == true) {
    delete ob.a
}
console.log(Object.keys(ob))

const arreyNumber = (params, parans2, params3) => {
    const Num = [params, parans2, params3]
    const R = []
    Num.forEach(function (nome) {
        if (isNaN(nome) == false) {
            R.push(nome)
        }
    })

    console.log(R)
}

arreyNumber("cola", 2, 8)

//exercicio 13

function parametrosobjetoParaArray() {
    const pessoa = {
        nome: "maria",
        profissao: "desenvolvedora"
    }
    return console.log(Object.entries(pessoa))
}
parametrosobjetoParaArray()

//exercicio 14

function receberSomente(num, nun2, num3) {
    const resolver = [num, nun2, num3]
    const par = a => a % 2 == 0
    const R = resolver.filter(par)
    return console.log(R)
}

receberSomente(10, 70, 22, 43)

// exercicio 15

const bisexto = (ano) => {
    if ((ano % 400 == 0) || (ano % 100 != 0 && ano % 4 == 0)) {
        console.log('bissexto')
    } else {
        console.log('não e')
    }
}

bisexto(2020)
bisexto(2100)

//execicio 16

const somaMais = (soma1, soma2, soma3, soma4) => {
    const arrey = [soma1, soma2, soma3, soma4]
    const local = arrey.reduce(function (a, b) { return a + b })
    console.log(local)

}

somaMais(10, 10, 10)
somaMais(15, 15, 15, 15)

// exercicio 17

const DespesasTotal = () => {
    const Pessoa = [
        { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
        { nome: "Cinema", categoria: "Entretenimento", preco: 150 }
    ]

    const verificar = a => a.preco
    const soma = function (a, b) { return a + b }
    console.log(Pessoa.map(verificar).reduce(soma))
}

DespesasTotal()

// exercicio 18

const Media = (numeros) => {

    const quantidade = numeros.length


    const soma = function (a, b) { return a + b }
    const div = function (a) { return a / 2 }


    console.log(quantidade)

}
Media(0, 10, 23, 45)

//exercicio 19

const triagulo = (altura, largura) => {

    let resultado = (altura * largura) / 2
    console.log(parseFloat(resultado).toFixed(2))
}

triagulo(10, 15)
triagulo(7, 9)

const menor = (numero1, numero2, numero3, numero4) => {
    const com = [numero1, numero2, numero3, numero4]
    const resultado = []
    com.reduce(function (A, B) {
        if (A < B) {
            resultado.push(A)
        } else if (B < A) {
            resultado.push(B)
        }
    })
    console.log(resultado)
}
menor(10, 5, 35, 65)
menor(5, -15, 50, 3)

// exercicio 20

const round = (X) => {
    const Num = Math.floor((Math.random() * 10) + 1)
    if (Num == 10) {

        return console.log(`parabens o numero sorteado e ${Num}`)
    } else {

        return console.log(`Desculpe o numero sorteado é ${Num}`)

    }
}

round(10)

//exercicio 21

const Palavras = (strind) => {
    const letra = strind.split(" ").length
    console.log(letra)
}

Palavras("Sou uma frase")

//exercicio 22

const Procura = (a, b) => {
    const palavras = b.split("")
    let conta = 0

    for (let i = 0; i < palavras.length; i++) {
        if (palavras[i] == a) {
            conta += 1
        } else {

        }
    }
    console.log(conta)
}

Procura("r", "A sorte favorece os audazes")
Procura("c", "Conhece-te a ti mesmo")

//exercicio 23
const semelhanca = (a, l1, l2, l3) => {
    const resultado = []
    const R = [l1, l2, l3]
    for (let i = 0; i < R; i++) {
        if (R.includes(a)) {
         return   resultado.push(R)
        }

    }
    console.log(resultado)
}

semelhanca("pro", "programação", "mobile", "profissional")