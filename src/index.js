import Character from './app/Character';
import Team from './app/Team';

const team = new Team();
const demon = new Character('Демон', 'Demon');
const mag = new Character('Маг', 'Mag');
team.addAll(demon, mag);

for (const key of team) {
  console.log(key);
}
