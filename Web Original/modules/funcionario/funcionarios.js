const Url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require('axios')
//axios.get(Url).then(response =>{
//    const funcionarios = response.data
//    console.log(funcionarios)
//})

axios.get(Url).then(perfil =>{
 
  const pais = perfil.data
  const genero = g => g.genero == "F"
  const p = p => p.pais == "China"

  const resultado = pais.filter(genero).filter(p).reduce(function (inicio,atual) {
    return inicio < atual ? inicio : atual
  })
  console.log( resultado)
  
})