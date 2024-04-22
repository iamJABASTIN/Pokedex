const pokemonContainer = document.getElementById('pokemon-container')
const pokemonCount = 700
const colors = {
    fire:'#FDDFDF',
    grass:'#DEFDE0',
    electric:'#FCF7DE',
    water:'#DEF3FD',
    ground:'#f4e7da',
    rock:'#d5d5d4',
    fairy:'#FCEAFF',
    poison:'#98D7A5',
    bug:'#f8d5a3',
    dragon:'#97b3e6',
    psychic:'#eaeda1',
    flying:'#e6e0d4',
    normal:'#f5f5f5',
    fighting:'#deb887',
    ice:'#5cadff',
    ghost: '#778899',
    dark:'#777790',
    steel:'lightgray'
}

const fetchPokemons = async () => {
    for(let i=500;i<=pokemonCount;i++){
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(id,data);
}

const createPokemonCard = (id,pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')
    const {type} = pokemon.types[0]
    const { name : typeName } = type
    const pokemonInnerHTML = `
    <div class="img-container">
        <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${String(id).padStart(3, '0')}.png"
        alt="pokemon"
        />
    </div>
    <div class="info">
        <span class="number">#${String(id).padStart(3,'0')}</span>
        <h3 class="name">${pokemon.name}</h3>
        <small class="type">Type : <span>${typeName}</span></small>
    </div>
    `
    pokemonEl.style.backgroundColor = colors[typeName]
    pokemonEl.innerHTML = pokemonInnerHTML
    pokemonContainer.appendChild(pokemonEl)
}

fetchPokemons()