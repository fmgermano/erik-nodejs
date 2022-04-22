
 /*
 0 - Obter um usuario
 1 - Obter o numero de telefone de um usuario a partir de seu ID
 2 - Obter o endereço do usuario pelo Id
*/ 

function obterUsuario(callback) {
 //executa a funcao,quando ela chegar nesse ponto,espera pra retornar o valor,depois de um segundo ela retorna: 
 // quando chamar o usuario, passo uma funcao como parametro e ela vai ser chamada passando o resultado para quem chamou assim que ela for resolvida
  setTimeout(function () {
    return callback(null, {
      id: 1,
      nome: 'Aladin',
      dataNascimento : new Date()
    })
  },1000  )
}   
 
function obterTelefone(idUsuario,callback) {
  setTimeout (() => {
    return callback(null,  {
      telefone : '11001212',
      ddd: 11
    })
  }, 2000);


}

function obterEndereco (idUsuario,callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'dos bobos',
      numero: 0
    })
  },2000);

}

function resolverUsuario(erro,usuario) {
  console.log('usuario', usuario)

}

 obterUsuario(function resolverUsuario(error,usuario ) {
   // VALOR NULO,VAZIO,ZERO =>  null || '' || 0 === false
   if(error) {
     console.error('Deu ruim em usuario', error)
     return;
   }
   obterTelefone(usuario.id, function resolverTelefone(error1,telefone) {
    if(error1) {
      console.error('Deu ruim em Telefone', error)
      return;
    }
    obterEndereco(usuario.id, function resolverEndereco(error2,endereco) {
      if(error2) {
        console.error('Deu ruim em usuario', error)
        return;
      }
      console.log(`
      Nome: ${usuario.nome},
      Endereco: ${endereco.rua}, ${endereco.numero},
      Telefone: (${telefone.ddd}),${telefone.telefone}
      `)
    })
 })
})
