// 1- Instancia o objeto 
const request = new XMLHttpRequest()

// 1.1 - cria um eventlistener que para checar o estado das requisicoes
// request.readyState = 4 -> DONE  
// request.status === 200 -> SUCCESS
// https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest/readyState
// https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
request.addEventListener('readystatechange', () => {
  if(request.readyState === 4 && request.status === 200) {
    console.log(JSON.parse(request.responseText))
  }
})

// 2- Configure o tipo de request e qual seu endpoint
request.open('GET', 'https://jsonplaceholder.typicode.com/todos')

// 3 - Envie a request
request.send()

