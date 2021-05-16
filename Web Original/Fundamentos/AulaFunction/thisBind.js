Pessoa = {
    Nome: "Lucas",
    falar(){
        console.log(this.Nome)
    }
}

Pessoa.falar();

const falarMais = Pessoa.falar;

falarMais()//conflito entre OO e variavel

const Resolver = Pessoa.falar.bind(Pessoa);
Resolver()