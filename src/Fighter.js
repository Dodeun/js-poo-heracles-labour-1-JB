/* Fighter class definition */
const MAX_LIFE = 100;

export class Fighter {
	constructor(name, strength, dexterity) {
		this.name = name;
		this.strength = strength;
		this.dexterity = dexterity;
		this.life = MAX_LIFE;
	}

	fight(fighter) {
		const damagePoints = Math.floor(Math.random() * this.strength + 1);
		const damageDealt = damagePoints - fighter.dexterity;
		if (damageDealt > 0) {
			if (fighter.life - damageDealt <= 0) {
				fighter.life = 0;
			} else {
				fighter.life -= damageDealt;
			}
		}
	}

	isAlive() {
		return this.life > 0;
	}
}
