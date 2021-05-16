const pessoa = [1,2,3,4,5]
let resultado = pessoa.map(function (p) {
 return   p*2
})
console.log(resultado)

const e =(e) => e*2
const b = b => b + 2
const c =c => `R$ ${parseFloat(c).toFixed(2).replace(".",",")}`

 resultado = pessoa.map(e).map(b).map(c)

console.log(resultado)