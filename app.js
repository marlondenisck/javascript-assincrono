const getTodos = callback => {
  
  // 1- Instancia o objeto 
  const request = new XMLHttpRequest()

  // 1.1 - cria um eventlistener que para checar o estado das requisicoes
  // request.readyState = 4 -> DONE  
  // request.status === 200 -> SUCCESS
  // https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest/readyState
  // https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
  request.addEventListener('readystatechange', () => {
    const isOKRequest = request.readyState === 4 && request.status === 200
    const isNotOKRequest = request.readyState === 4
    
    if(isOKRequest) {
      callback(null, JSON.parse(request.responseText))
      return
    }

    if(isNotOKRequest) {
      callback('Não foi possível obter os dados da API', null)
    }
  })
  
  // 2- Configure o tipo de request e qual seu endpoint
  request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
  
  // 3 - Envie a request
  request.send()
  
}

getTodos((error, data) => {
  console.log('callback executado')
  
  if(error) {
    console.log(error)
    return
  }

  console.log(data)
})

