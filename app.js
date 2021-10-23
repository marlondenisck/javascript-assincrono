const getTodos = url => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest()
  
  request.addEventListener('readystatechange', () => {
    const isOKRequest = request.readyState === 4 && request.status === 200
    const isNotOKRequest = request.readyState === 4
    
    if(isOKRequest) {
      resolve(JSON.parse(request.responseText))
    }

    if(isNotOKRequest) {
      reject('Não foi possível obter os dados da API')
    }
  })
  

  request.open('GET', url)
  request.send()
})
  
getTodos('https://pokeapi.co/api/v2/pokemon/1')
  .then(value => console.log(value))
  .catch(error => console.log(error))
  

// getTodos('./todos.json', (error, data) => {
//   console.log(data)

//   getTodos('https://jsonplaceholder.typicode.com/todos', (error, data) => {
//     console.log(data)
//   })
// })


// const getData = (() => {
//   return new Promise((resolve, reject) => {
//     resolve('dados aqui')
//     // reject('error')
//   })
// })


// getData()
//   .then(value => console.log(value))
//   .catch(error => console.log(error))


