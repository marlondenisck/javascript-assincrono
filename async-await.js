const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return await response.json()
}

// async await sempre retorna uma promise por isso usamos then novamente
getUsers()
  .then(users => console.log(users))
  .catch(error => console.log(error))

// ou 
// criamos mais uma funcao assincrona para mostrar os dados
const logUsers =  async () => {
  const users = await getUsers()
  console.log(users)
}


logUsers()