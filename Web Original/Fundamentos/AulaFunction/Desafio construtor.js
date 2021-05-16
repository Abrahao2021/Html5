function pessoa (Nome){

    this.nome = Nome

    this.fala = function () {
        console.log(`${this.nome} como voce esta `)
    }
}

const p1 = new pessoa("Batista")

p1.fala()