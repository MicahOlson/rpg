import Character from '../src/character.js';

describe('Character', () => {

  test('Should create a character obj with properties', () =>
  {
    const newCharacter = new Character("Bill","Mage");
    expect(newCharacter.name).toEqual("Bill");
    expect(newCharacter.role).toEqual("Mage");

  });
});