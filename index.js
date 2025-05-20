// First Labour : Heracles vs Nemean Lion
// use your Figher class here
import { Fighter } from "./src/Fighter.js";

function message(winner, loser, round) {
	console.log(`${loser.name} is dead on round ${round - 1}`);
	console.log(`${winner.name} wins (HP: ${winner.life})`);
}

const heracles = new Fighter("🧔 Heracles", 20, 6);
const nemeanLion = new Fighter("🦁 Nemean Lion", 11, 13);

let round = 1;

while (heracles.isAlive() && nemeanLion.isAlive()) {
	console.log("round: ", round);
	heracles.fight(nemeanLion);
	if (nemeanLion.isAlive()) {
		nemeanLion.fight(heracles);
	}
	round++;
}

if (nemeanLion.isAlive()) {
	message(nemeanLion, heracles, round);
} else {
	message(heracles, nemeanLion, round);
}
