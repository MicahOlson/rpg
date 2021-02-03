import { Wolf } from '../src/js/monsters.js'

describe('Wolf', () => {
  test('Should construct a wolf obj with properties', () => {
    const newWolf = new Wolf();
    expect(newWolf.hp).toEqual(5);
    expect(newWolf.atkDmg).toEqual(3);
    expect(newWolf.armor).toEqual(1);
  });
});