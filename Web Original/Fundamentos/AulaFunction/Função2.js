const SomaDois = function (a, b) {
    console.log(a+b);
}
SomaDois(2,4)
// função arrow da variavel
const açao = (a ,b) =>{
    return (a+b)
}
console.log(açao(2,8));

//retorno implicito

const curto = (a,b) => (a - b);
console.log( curto(5 ,4))

const lugar = a => console.log(a)
lugar(2)