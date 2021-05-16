const Aluno = [
    {nome:'Joao', nota:7.3,bolsista:false},
    {nome:'Maria', nota:9.2,bolsista:true},
    {nome:'pedro', nota:9.8,bolsista:false},
    {nome:'ana', nota:8.3,bolsista:true},
]

// todos os alunos são bolsitas
const sao = (bolsa,luva) => bolsa && luva
const resultado = Aluno.map(a=> a.bolsista).reduce(sao)
console.log(resultado)

// alguns alguns alonos e bolsista

const verdade = (verdader,rua) => verdader || rua
console.log(Aluno.map(a => a.bolsista).reduce(verdade))