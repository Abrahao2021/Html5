const Pessoas = ["joao","Maria","carlos"]
Pessoas.forEach(function(nome,indice, array){
 console.log(`${indice + 1}, ${nome} , ${array}`)
})

Pessoas.forEach(nome => console.log(nome))

const Lugar = Pessoas;

console.log(Lugar)