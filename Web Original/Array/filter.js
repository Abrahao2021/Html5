
const pessoa = [
    {Nome:"notebook", preco:2499,fragil:true},
    {Nome:'ipad pro', preco:4199,fragil:true},
    {Nome:'Copo de vidro', preco: 12.19,fragil:true},
    {Nome:'copo de plastico', preco:18.99,fragil: false}
]



console.log(pessoa.filter(function(p){
     if (p.preco > 2000 && p.fragil == true) {
      return p
        
    }
}))

const caro = Produto => Produto.preco >=500
const fragil = f => f.fragil
console.log(pessoa.filter(caro).filter(fragil))