// First Labour : Heracles vs Nemean Lion
// use your Figher class here
import { Fighter } from "./src/Fighter.js";

function message(winner, loser, round) {
	console.log(`${loser.name} is dead on round ${round}`);
	console.log(`${winner.name} wins (HP: ${winner.life})`);
}

const heracles = new Fighter("🧔 Heracles", 20, 6);
const nemeanLion = new Fighter("🦁 Nemean Lion", 11, 13);

let round = 1;

while (heracles.isAlive() && nemeanLion.isAlive()) {
	console.log(round);
	heracles.fight(nemeanLion);
	console.log(
		`${heracles.name} ATTACKS ${nemeanLion.name}; HP LEFT: ${nemeanLion.life}`,
	);
	if (!nemeanLion.isAlive()) break;

	nemeanLion.fight(heracles);
	console.log(
		`${nemeanLion.name} ATTACKS ${heracles.name}; HP LEFT: ${heracles.life}`,
	);
	if (!heracles.isAlive()) break;
	round++;
}

if (nemeanLion.isAlive()) {
	message(nemeanLion, heracles, round);
} else {
	message(heracles, nemeanLion, round);
}
