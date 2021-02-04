export class Character {
  constructor(name) {
    this.name = name;
    this.hp = 50;
    this.int = 50;
    this.str = 50;
    this.dex = 50;
    this.inv = {}
    this.wallet = 100;
    this.xp = 0;
    this.level = 1;
  }
  attack(monster) {
    monster.hp -= Math.ceil(Math.random() * this.str);
    if (monster.hp <= 0) {
      return "Monster is dead."
    }
  }
};

export class Mage extends Character {
  constructor(name) {
    super(name);
    this.role = "Mage";
    this.int = 100;
    this.str = 25;
  }
}

export class Barbarian extends Character {
  constructor(name) {
    super(name);
    this.role = "Barb";
    this.int = 25;
    this.str = 100;
  }
}

export class Rogue extends Character {
  constructor(name) {
    super(name);
    this.role = "Rogue";
    this.dex = 100;
    this.int = 35;
    this.str = 35;

  }
}