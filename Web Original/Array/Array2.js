const Carro = ["chevette","BMW","Safira"]

const Marca = Carro;
Marca.splice(3,0,'Monsa')
console.log(Marca)
Marca.pop() /// Remover a ultima array
console.log(Marca)
Marca.shift() // Remove o primeiro elemento
console.log(Marca)
Marca.unshift("Fusca") //Coloca o primeiro elemento do arrey
console.log(Marca)
Marca.splice(3,0,"Corseu",'Vulgade', 'Mercedes',"Porche")
console.log(Marca)
const Reserva = Marca.slice(3);//Criar outro array apartir de outro
console.log(Reserva)
delete Reserva;
console.log(Reserva)

