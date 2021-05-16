class pai {
    constructor(nome = "joao", idade = 21, sexo = "M") {
       this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.conta = 1;

    }
}

class filho extends pai {
    constructor(nome, idade =21, sexo = "F", abilitação = true) {
        super(nome);
        this.idade = idade;
        this.sexo = sexo;
        this.conta = 1;
        abilitação = abilitação;
    }
}

const Joao = new filho()
console.log(Joao)