import { Character, Mage, Barbarian, Rogue } from '../src/js/character.js';
import { Wolf, Orc } from '../src/js/monsters.js';

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
    expect(newCharacter.role).toEqual("Barbarian");
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
});

describe('Character.attack()', () => {

  let newCharacter;
  let newWolf;
  beforeEach(() => {
    newCharacter = new Barbarian("Fran");
    newWolf = new Wolf();
  });

  test('Barb.attack() should reduce the value of wolf.hp', () => {
    newCharacter.attack(newWolf);
    expect(newWolf.hp).toBeLessThanOrEqual(30);
  });

  test('.attack() will also check to see if wolf.hp <= 0', () => {
    newWolf.hp = 1;
    expect(newCharacter.attack(newWolf)).toEqual(`${newWolf.constructor.name} is dead.`);
  });

  test('.attack() should reduce the value of barb.hp in as return damage from monster', () => {
    newWolf.hp = 100;
    newCharacter.attack(newWolf);
    expect(newCharacter.hp).toBeLessThanOrEqual(50);
  });

  test('if barb.hp <= 0, let player know they died', () => {
    newCharacter.hp = 1;
    newWolf.hp = 100;
    expect(newCharacter.attack(newWolf)).toEqual(`${newCharacter.name} is dead.`);
  });

  test('.attack() should return a "round over" notification if no obj dies', () => {
    newWolf.hp = 100;
    expect(newCharacter.attack(newWolf)).toEqual("This round is over; choose your next action.");
  });

  test('.attack() should add xp to character when monster is killed', () => {
    newWolf.hp = 1;
    newCharacter.attack(newWolf)
    expect(newCharacter.xp).toEqual(10);
  });

});

describe('Character.levelup', () => {
  
  let newCharacter;
  let newOrc;
  beforeEach(() => {
    newCharacter = new Barbarian("Fran");
    newOrc = new Orc();
  });

  test('Should provide a character with an additional level upon reaching an xp threshold', () => {
    newCharacter.level = 9;
    newCharacter.xp = 495;
    newOrc.hp = 1;
    expect(newCharacter.attack(newOrc)).toEqual(`${newOrc.constructor.name} is dead. You've leveled up! You're now Level ${newCharacter.level}`);
    expect(newCharacter.level).toEqual(10);
    expect(newCharacter.xp).toEqual(15);
  });
});
