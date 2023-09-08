// Pokemon = {
//     name: String,
//     lifePoints: Number,
//     strength: Number,
//     moves: [String],
//     skillPower: Number,
//     experience: Number,
//     level: Number,
//     element: String
// }

const fireMoves = [{ }, { }, { }]
const waterMoves = [ { }, { }, { }]
const plantMoves = [{ }, { }, { }] 


const getPokemon = () => {
    return pokemon
}


const setPokemon = ({ name,
    lifePoints = 100,
    strength = 3,
    moves = [],
    skillPower = 5,
    experience = 0,
    level = 0,
    element
    }) => {
    
    pokemon = {
        name,
        lifePoints,
        strength,
        moves,
        skillPower,
        experience,
        level,
        element
    }

    return pokemon
}



const pokemonElement = {
    '1': {type: 'fuego', moves: [''], strongAgainst: ['planta']},
    '2': {type: 'agua', moves: [''], strongAgainst: ['fuego']},
    '3': {type: 'planta', moves: [''], strongAgainst: ['agua']} 
}




const battle = (pokemon) => {
    pokemon
}


let pokeballsKitx3 = []

// let golpe = Math.ceil(Math.random()*100);
// console.log(golpe)

//Menu simple para definir el pokemon interactuando con el usuario
const pokemonCreationMenu = () => {
    let pokemonName 
    let pokemonElementChosen
    let pokemon1
    let pokemon2
    let pokemon3

    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
        
        do {
            pokemonName = prompt("Ingrese el nombre de su pokemon.", ''); 
        } while ( pokemonName === '' );
        
        console.log(pokemonName);
        do{
            pokemonElementChosen = prompt("Ingrese el elemento de su pokemon\n 1 fuego \n 2 agua\n 3 planta\n");
            console.log(pokemonElementChosen);
            //  = pokemonName;
            // pokemon.element = pokemonElement[pokemonElementChosen];
            
            
        } while(pokemonElementChosen != '1' && pokemonElementChosen != '2' && pokemonElementChosen != '3')
        
        setPokemon({name: pokemonName, element: pokemonElement[pokemonElementChosen]  })
        // pokeballsKitx3.push(pokemon1)
    // }
}



pokemonCreationMenu()
console.log(pokemon)