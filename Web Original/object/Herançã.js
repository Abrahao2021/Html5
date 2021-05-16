const ferrari = {
    modelo: "F40",
    VeloMax: 350
}

const Volvo ={
    Modelo: 'V20',
    VeloMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)