import { Wolf, Orc} from '../src/js/monsters.js'

describe('Monsters', () => {
  test('Should construct a wolf obj with properties', () => {
    const newWolf = new Wolf();
    expect(newWolf.hp).toEqual(30);
    expect(newWolf.atkDmg).toEqual(15);
    expect(newWolf.armor).toEqual(1);
    expect(newWolf.xp).toEqual(10);
  });
  
  test('Should construct an orc obj with properties', () => {
    const newOrc = new Orc();
    expect(newOrc.hp).toEqual(65);
    expect(newOrc.atkDmg).toEqual(35);
    expect(newOrc.armor).toEqual(5);
    expect(newOrc.xp).toEqual(20);
  });
});
