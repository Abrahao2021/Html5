const contadorA = require("./instaciaUnica")
const contadorB = require('./instaciaUnica')

const contadorC = require("./instanciaNova")()
const contadorD = require("./instanciaNova")()

contadorA.inicio()
contadorA.inicio()

console.log(contadorB.valor)


contadorC.inicio()
contadorC.inicio()

console.log(contadorD.valor)