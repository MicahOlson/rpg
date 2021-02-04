import { Wolf, Orc} from '../src/js/monsters.js'

describe('Wolf', () => {
  test('Should construct a wolf obj with properties', () => {
    const newWolf = new Wolf();
    expect(newWolf.hp).toEqual(5);
    expect(newWolf.atkDmg).toEqual(3);
    expect(newWolf.armor).toEqual(1);
  });
});

describe('Orc', () => {
  test('Should construct an orc obj with properties', () => {
    const newOrc = new Orc();
    expect(newOrc.hp).toEqual(15);
    expect(newOrc.atkDmg).toEqual(10);
    expect(newOrc.armor).toEqual(5);
  });
});