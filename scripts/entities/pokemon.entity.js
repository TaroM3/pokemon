export class Pokemon{
    constructor({ name, lifePoints = 100, strength = 3, moves = [], skillPower = 5, experience = 0, level = 0, element}){
        
        this.name = name
        this.lifePoints = lifePoints
        this.strength = strength
        this.moves = moves
        this.skillPower = skillPower
        this.experience = experience
        this.level = level
        this.element = element
    }

    attack = ({enemySelected, attackSelected = 0}) => {
        if(this.element.strongAgainst.some(element => element === enemySelected.type)){
            let damage = Math.round(this.moves[attackSelected].damage * 1.2)
        } 
        enemySelected.lifePoints = enemySelected.lifePoints - damage
    }

    getLifePoints = () => {
        return this.lifePoints
    }

    getDamage = (attackSelected, bonus) => {
        if (bonus) {
            if(bonus === 'strong'){
                return Math.round(this.moves[attackSelected].damage * 1.2)
            }else if(bonus === 'weak'){
                return Math.round(this.moves[attackSelected].damage * 0.8)
            }
        } else {
            return this.moves[attackSelected].damage
        }
    }

}