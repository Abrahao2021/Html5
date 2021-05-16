function Random(max,min) {
  let conta = Math.random()*(max-min) + min;
   return Math.floor(conta);
}
let opcao = 0;

while (opcao != -1) {
  opcao =  Random( -1 , 10);
  console.log(opcao)
}
console.log("fim")
