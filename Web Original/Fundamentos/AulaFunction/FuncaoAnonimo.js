const soma = function(x , y ) {
    return x + y
}

const resultado = function (a ,b , operacao = soma) {
     console.log(operacao(a,b))
}
resultado(2 , 3)
resultado(4,8, function(a,b){
    return a -b
})
resultado(1 ,7 , (a,b) => a* b)

const Pessoa = {
    falar: function(){
        console.log(" oba")
    }
}
Pessoa.falar()