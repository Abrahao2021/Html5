const pessoa ={
    nome: "Joao",
    idade: 32,
    Peso:3.2
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([Chave, valor]) => {
    console.log(`${Chave} : ${valor}`)
}); 

Object.defineProperty( pessoa , 'Cargo',{
    enumerable : true,
    writable:false,
    value: '01/02/2020'
})

pessoa.Cargo = 'Fui'
 console.log(pessoa.Cargo)
 console.log(Object.keys(pessoa)) 
 // obj assai

 const local ={ a:2 ,b:3}
 const a = {c:3 , l:3}
 const b ={r: 5, w: 3}
 const obj = Object.assign(local,a,b)
 console.log(obj)