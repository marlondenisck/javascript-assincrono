const getPokemons = async () => {

    const pokemon1 = fetch('https://pokeapi.co/api/v2/pokemon/1')
    const pokemon2 = fetch('https://pokeapi.co/api/v2/pokemon/4')
    const pokemon3 = fetch('https://pokeapi.co/api/v2/pokemon/7')
    
    const results = await Promise.all([pokemon1, pokemon2, pokemon3])
    results.forEach(async response => console.log(await response.json()))
 
}

getPokemons()

