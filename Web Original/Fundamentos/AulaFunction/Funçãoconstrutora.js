function Carro(VelocidadeMaxima = 200 , Delta = 5) {
    // atributo privado

    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function (){
        if (velocidadeAtual + Delta <= VelocidadeMaxima) {
            velocidadeAtual += Delta
            
        } else {
            velocidadeAtual = VelocidadeMaxima
        }
    }
    // metodo público
    this.getVelocidade = function () {
        return velocidadeAtual
    }
}

const uno = new Carro

uno.acelerar
console.log(uno.getVelocidade())