 function name({Max = 100 , Min = 0}) {
    const Valor = Math.random() * (Max - Min) - Min;
    return Math.floor(Valor);
}
const obj = {Max: 200 ,Min: 50}
console.log(name(obj));
console.log(name({Min:50}))