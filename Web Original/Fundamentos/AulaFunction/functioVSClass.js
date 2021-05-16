// Classe

class pessoa {
    constructor(Nome){
        this.nome = Nome
    }
    fala(){
        console.log(`${this.nome} como voce esta `)
    }
}

const p1 = new pessoa("Batista")

p1.fala()

//Função factory    

const Pessoa = (nome) =>{
    return{
        falar: () => console.log(`Meu nome e ${nome}`)
    }
}

const p2 =  Pessoa("Carlos")
p2.falar()