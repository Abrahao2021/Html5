const Aluno = [
    {nome:'Joao', nota:7.3,bolsista:false},
    {nome:'Maria', nota:9.2,bolsista:true},
    {nome:'pedro', nota:9.8,bolsista:false},
    {nome:'ana', nota:8.3,bolsista:true},
]

const resultado = Aluno.map(a=>a.nota).reduce(function(convero, atual){
    console.log(convero , atual)
    return convero + atual
} ,10)