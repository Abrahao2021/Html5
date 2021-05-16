Array.prototype.map2 = function(callbak){
 const NewArray=[]
 for (let i = 0; i < this.length; i++) {
     NewArray.push(callbak(this[i], this, i))
     
 }
 return NewArray
}



const carrinho = [
    '{"nome" : "Borracha","preco": 3.42}' ,
    '{"nome" : "Caderno","preco": 19.42}',
    '{"nome" : "Kit de Lapis" , "preco": 41.22}',
    '{"nome" : "Caneta" , "preco": 7.50}'
]

const convert = jason => JSON.parse(jason)
const Produto = objeto=> objeto.preco

console.log(carrinho.map2(convert).map2(Produto))