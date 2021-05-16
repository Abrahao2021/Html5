const Funcionario = {
    nome: "joão Carlos",
    idade: 32,
    casado: true,
    Endereço :{
        rua: "São conseição",
        Numero: 16
    }
}
const{nome: N, casado:C} = Funcionario;
console.log(N ,C);

const{Endereço:{Numero: U}} = Funcionario;
console.log(U);