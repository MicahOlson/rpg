import { Character, Mage, Barbarian, Rogue } from '../src/js/character.js';
import { Wolf } from '../src/js/monsters.js';

describe('Character', () => {

  test('Should create a character obj with properties', () => {
    const newCharacter = new Character("Bill", "Mage");
    expect(newCharacter.name).toEqual("Bill");
    expect(newCharacter.hp).toEqual(50);
    expect(newCharacter.int).toEqual(50);
    expect(newCharacter.str).toEqual(50);
    expect(newCharacter.dex).toEqual(50);
    expect(newCharacter.inv).toEqual({});
    expect(newCharacter.wallet).toEqual(100);
    expect(newCharacter.xp).toEqual(0);
    expect(newCharacter.level).toEqual(1);
  });

  test('Should create Mage obj as an extension to Character', () => {
    const newCharacter = new Mage("Bill");
    expect(newCharacter.name).toEqual("Bill");
    expect(newCharacter.role).toEqual("Mage");
    expect(newCharacter.int).toEqual(100);
    expect(newCharacter.str).toEqual(25);
  });

  test('Should create Barbarian  obj as an extension to Character', () => {
    const newCharacter = new Barbarian("Fran");
    expect(newCharacter.name).toEqual("Fran");
    expect(newCharacter.role).toEqual("Barb");
    expect(newCharacter.int).toEqual(25);
    expect(newCharacter.str).toEqual(100);
  });

  test('Should create Rogue obj as an extension to Character', () => {
    const newCharacter = new Rogue("Tim");
    expect(newCharacter.name).toEqual("Tim");
    expect(newCharacter.role).toEqual("Rogue");
    expect(newCharacter.dex).toEqual(100);
    expect(newCharacter.str).toEqual(35);
    expect(newCharacter.int).toEqual(35);
  });

  test('Barb.attack() should reduce the value of wolf.hp', () => {
    const newCharacter = new Barbarian("Fran");
    const newWolf = new Wolf();
    newCharacter.attack(newWolf);
    expect(newWolf.hp).toBeLessThanOrEqual(30);
  });
  test('.attack() will also check to see if wolf.hp <= 0', () => {
    const newCharacter = new Barbarian("Fran");
    const newWolf = new Wolf();
    newWolf.hp = 1;
    expect(newCharacter.attack(newWolf)).toEqual("Monster is dead.");

  })


  // test ('Barb.attack should also reduce barb.hp if wolf is able to retaliate', () => {

  // })


});
