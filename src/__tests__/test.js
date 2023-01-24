import Team from '../app/Team';
import Character from '../app/Character';

describe(('Check class Team'), () => {
  const team = new Team();
  const demon = new Character('Демон', 'Demon');
  const mag = new Character('Маг', 'Mag');
  team.addAll(demon, mag);

  test(('Check iteration class Team'), () => {
    let arr;
    const expectedResult = [{
      name: 'Демон',
      type: 'Demon',
      health: 100,
      level: 1,
      attack: 100,
      defence: 100,
    }, {
      name: 'Маг',
      type: 'Mag',
      health: 100,
      level: 1,
      attack: 100,
      defence: 100,
    }];
    for (const key of team) {
      arr = [...team[Object.keys(key)]];
    }
    expect(arr).toEqual(expectedResult);
  });
});
