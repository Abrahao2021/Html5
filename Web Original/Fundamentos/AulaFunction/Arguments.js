function soma() {


    let soma = 0
    for (const i in arguments) {
        soma+= arguments[i]     
    }
    return soma
}
console.log( soma(3,4,"texto"))