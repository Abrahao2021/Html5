class Lancamento {
    constructor(nome = "generico", valor = 0) {
        this.nome = nome;
        this.valor = valor;
    }

}

class ClicloFinaceiro {
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
    }
    addLancamento(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    sumario(){
        let ValorConsolidado = 0;
        this.lancamentos.forEach(l =>{
            ValorConsolidado += l.valor
        })
        return ValorConsolidado;
    }
}

const Salario = new Lancamento('Salaro', 45000)
const contadeLuz = new Lancamento("Luz",-200)

const conta = new ClicloFinaceiro(6,2018)
conta.addLancamento(Salario,contadeLuz)
console.log(conta.sumario())
