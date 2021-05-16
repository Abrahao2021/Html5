
function Resolucao(erro) {
    throw new Error("Se ferrou")
}

function Erro(obj) {
    try {
        console.log(obj.nome.toUpperCase()+"!!!")    
    } catch (e) {
       Resolucao(e);    
    }finally{
        console.log("final")
    }
    
}

const obj = {nome:"Roberto"}
Erro(obj);