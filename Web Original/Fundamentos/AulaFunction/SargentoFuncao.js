const array =[function(a,b){return a + b}]
console.log(array[0](2,7))

//Objeto

const obj = {}
    obj.falar = function(){return "Oba pai"}
    console.log(obj.falar()); 
//Passar funçao com parametros

function rum(fun) {
    fun()
}

rum(function() {
 console.log("como bolo");
})
