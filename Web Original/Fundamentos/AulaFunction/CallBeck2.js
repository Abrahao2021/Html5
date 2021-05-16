const nota =[2.3,6.7,5.3,8,9,10]
const notabaixo =[]

for (const i in nota) {
    if (nota[i] < 7) {
        notabaixo.push(nota[i])
    }
}
console.log(notabaixo)

// com calBeck

const nota2 = [2.3,6.7,5.3,8,9,10]

const notabaixo2 = nota.filter(function (nota) {
    return nota < 7
})

console.log(notabaixo2)

// com Arrow

const notabaixo3 = nota.filter((nota) => nota < 7)
console.log(notabaixo3)