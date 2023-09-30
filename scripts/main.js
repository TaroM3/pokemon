class Pokemon {
    constructor({ name, healthPoints = 100, strength = 3, moves = [], skillPower = 5, experience = 0, level = 0, element }) {
        this.name = name
        this.healthPoints = healthPoints
        this.strength = strength
        this.moves = moves
        this.skillPower = skillPower
        this.experience = experience
        this.level = level
        this.element = element
    }
    attack = ({ enemySelected, attackSelected = 1 }) => {
        if (enemySelected.healthPoints !== 0) { 
            attackSelected -= 1
            if (enemySelected.element.strongAgainst.some(property => property === this.moves[attackSelected].type)) {
                enemySelected.healthPoints -= this.getDamage(attackSelected, 'weak')
                if (enemySelected.healthPoints <= 0) enemySelected.healthPoints = 0
            } else if (enemySelected.element.weakAgainst.some(element => element === this.moves[attackSelected].type)) {
                enemySelected.healthPoints -= this.getDamage(attackSelected, 'strong')
                if (enemySelected.healthPoints <= 0) enemySelected.healthPoints = 0
            } else {
                enemySelected.healthPoints -= this.getDamage(attackSelected, 'normal')
                if (enemySelected.healthPoints <= 0) enemySelected.healthPoints = 0
            }
            console.log(`${this.name} uso ${this.moves[attackSelected].name} contra ${enemySelected.name}`)
        }else{
            console.log(`No se puede atacar a ${enemySelected.name}, ya ha sido derrotado...`)
        }
    }
    getHealthPoints = () => {
        return this.healthPoints
    }
    getDamage = (attackSelected, bonus) => {
        const behaviour = {
            strong: Math.round(this.moves[attackSelected].damage * 1.2),
            weak: Math.round(this.moves[attackSelected].damage * 0.8),
            normal: Math.round(this.moves[attackSelected].damage * 1)
        }
        return behaviour[bonus]
    }

}
const fireMoves = [{ name: 'Scratch', damage: 10, type: 'normal' }, { name: 'Fire Fang', damage: 11, type: 'fuego' }, { name: 'Fire Spin', damage: 13, type: 'fuego' }]
const waterMoves = [{ name: 'Tackle', damage: 10, type: 'normal' }, { name: 'Water Gun', damage: 11, type: 'agua' }, { name: 'Aqua Tail', damage: 13, type: 'agua' }]
const plantMoves = [{ name: 'Tackle', damage: 10, type: 'normal' }, { name: 'Vine Whip', damage: 11, type: 'planta' }, { name: 'Seed Bomb', damage: 13, type: 'planta' }]
const pokemonElement = {
    '1': { type: 'fuego', moves: fireMoves, strongAgainst: ['planta'], weakAgainst: ['agua'] },
    '2': { type: 'agua', moves: waterMoves, strongAgainst: ['fuego'], weakAgainst: ['planta'] },
    '3': { type: 'planta', moves: plantMoves, strongAgainst: ['agua'], weakAgainst: ['fuego'] }
}
const pokeballsKitx3 = []
const pokemonCreationMenu = (pokeballsKitx3) => {
    let pokemonName
    let pokemonElementChosen
    do {
        pokemonName = prompt("Ingrese el nombre de su pokemon.", '');
    } while (pokemonName === '');

    console.log(pokemonName);
    do {
        pokemonElementChosen = prompt("Ingrese el elemento de su pokemon\n 1 fuego \n 2 agua\n 3 planta\n");
        console.log(pokemonElementChosen);

    } while (pokemonElementChosen != '1' && pokemonElementChosen != '2' && pokemonElementChosen != '3')

    pokeballsKitx3.push(new Pokemon({ name: pokemonName, element: pokemonElement[pokemonElementChosen], moves: pokemonElement[pokemonElementChosen].moves }))
}
const randomNumber = (max = 4, min = 1) => {
    return (Math.floor(Math.random() * (4 - 1)) + 1)
}
const createEnemy = () => {
    let random = randomNumber()
    switch (random) {
        case 1:
            return new Pokemon({ name: 'Charmander', healthPoints: 100, moves: pokemonElement[String(random)].moves, element: { type: pokemonElement[String(random)].type, strongAgainst: pokemonElement[String(random)].strongAgainst, weakAgainst: pokemonElement[String(random)].weakAgainst } })
        case 2:
            return new Pokemon({ name: 'Squirtle', healthPoints: 100, moves: pokemonElement[String(random)].moves, element: { type: pokemonElement[String(random)].type, strongAgainst: pokemonElement[String(random)].strongAgainst, weakAgainst: pokemonElement[String(random)].weakAgainst } })
        case 3:
            return new Pokemon({ name: 'Bulbasaur', healthPoints: 100, moves: pokemonElement[String(random)].moves, element: { type: pokemonElement[String(random)].type, strongAgainst: pokemonElement[String(random)].strongAgainst, weakAgainst: pokemonElement[String(random)].weakAgainst } })
    }

}
const showMoves = (pokemon) => {
    let movesString = ''
    for (let index = 0; index < pokemon.moves.length; index++) {

        movesString += `\t \t ${index + 1}. ${pokemon.moves[index].name} (${pokemon.moves[index].type})\n \t \t \t Damage: ${pokemon.moves[index].damage}\n`

    }
    return movesString
}
const showStats = (pokemon) => {
    return `${pokemon.name}\n \t HP: ${pokemon.healthPoints}\n \t Type: ${pokemon.element.type}\n`
}
const showPokemon = (pokemon) => {
    console.log(
        showStats(pokemon),
        '\t Moves:\n',
        showMoves(pokemon)
    )
}
const winner = (winner) => {
    console.log(winner)
}
const choosePokemonToAttack = (pokemones, enemies, index) => {
    let pokemonSelected = index
        let attackSelected = 0
        do {
            attackSelected = Number(prompt(`${pokemones[pokemonSelected].name}:\n Moves\n ${showMoves(pokemones[pokemonSelected])}`))
        } while (attackSelected !== 1 && attackSelected !== 2 && attackSelected !== 3)
        let enemySelectedPosition = 0
        do {
            enemySelectedPosition = Number(prompt('Seleccione el enemigo al que desea atacar', '1 o 2 o 3'))
        } while (enemySelectedPosition !== 1 && enemySelectedPosition !== 2 && enemySelectedPosition !== 3);
    pokemones[pokemonSelected].healthPoints !== 0 ? pokemones[pokemonSelected].attack({enemySelected: enemies[enemySelectedPosition - 1],attackSelected: attackSelected}) : console.log('Mi pokemon' + pokemones[pokemonSelected].name + ': No puede atacar...')
}
const attackRandom = (pokemons, enemies, index) => {
    enemies[index].healthPoints !== 0 ? enemies[index].attack({enemySelected: pokemons[randomNumber() - 1], attackSelected: randomNumber()}) : console.log(enemies[index].name + '(enemigo): No puede atacar...')
}
const battle = (pokeballsKitx3, enemies) => {
    let canFight = true
    let count
    do {
        console.log('Pokemones enemigos\n------------------')
        count = 0
        for (let index = 0; index < enemies.length; index++) {        
            console.log(++count + '. ' + showStats(enemies[index]))
        }
        count = 0
        console.log('Mis Pokemones\n------------------')
        for (let index = 0; index < pokeballsKitx3.length; index++) {
            console.log(++count +'. '+ showStats(pokeballsKitx3[index]))
            
        }
        for (let index = 0; index < 3; index++) {
            choosePokemonToAttack(pokeballsKitx3, enemies, index)
            attackRandom(pokeballsKitx3, enemies, index)
        }
        canFight = confirm('Desea continuar jugando?')
        if ((pokeballsKitx3[0].healthPoints === 0 && pokeballsKitx3[1].healthPoints === 0 && pokeballsKitx3[2].healthPoints === 0) || (enemies[0].healthPoints === 0 && enemies[1].healthPoints === 0 && enemies[2].healthPoints === 0)) {
            if (pokeballsKitx3[0].healthPoints === 0 && pokeballsKitx3[1].healthPoints === 0 && pokeballsKitx3[2].healthPoints === 0) {
                winner('El rival te ha derrotado. . . ')
            }else{
                winner('Has vencido al rival. . . ')
            }
            canFight = false
        }
        
    }while (canFight)
}

const main = () => {

    const enemies = []
    const pokeballsKitx3 = []

    for (let index = 0; index < 3; index++) {
        pokemonCreationMenu(pokeballsKitx3)
        enemies.push(createEnemy())
    }

    console.log(pokeballsKitx3)
    console.log(enemies)

    battle(pokeballsKitx3, enemies)
    console.log('juego terminado')
}


main()