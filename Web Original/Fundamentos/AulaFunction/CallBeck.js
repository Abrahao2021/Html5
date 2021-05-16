const carro = ["MercdesBes", "Ford","Chevrolett"]

function Imprimir(Nome , indice) {
 return   console.log(`${indice + 1} ${Nome}`)
}

carro.forEach(Imprimir)
carro.forEach((a) => console.log(a))