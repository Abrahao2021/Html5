const pessoa = Object.preventExtensions({
 nome:"Calos", preso:1.99,tag:"promoção"   
})

console.log('Extensivel:', Object.isExtensible(pessoa))
pessoa.nome = 'Borracha';
pessoa.Descricao = 'Moderno'
delete pessoa.tag;
console.log(pessoa)


// Objct.seal

const banco = {Nome:"publico", idde:100}
Object.seal(banco)
console.log('Sealdao', Object.isSealed(banco))

banco.Sobrenome = 'Roberto';
banco.Nome = 'Privado';
 delete banco.Nome;
 console.log(banco);