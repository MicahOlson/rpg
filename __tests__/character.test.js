// import Character from '../src/character.js';
// import Mage from '../src/character.js';

import { Character , Mage } from '../src/character.js';

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
      console.log(newCharacter);
  })



});



