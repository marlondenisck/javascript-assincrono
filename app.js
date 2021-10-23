const getTodos = (url, callback) => {
  const request = new XMLHttpRequest()
  
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
  

  request.open('GET', url)
  request.send()
  
}

getTodos('./todos.json', (error, data) => {
  console.log(data)

  getTodos('https://jsonplaceholder.typicode.com/todos', (error, data) => {
    console.log(data)
  })
})


