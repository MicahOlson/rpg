export class Character {
  constructor(name) {
    this.name = name;
    this.role = `${this.constructor.name}`;
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
    monster.hp -= Math.ceil(Math.random() * this.str + 1);
    if (monster.hp <= 0) {
      //this.xp += monster.xp;
      //this.levelup();
      //add in monster armor;
      return `${monster.constructor.name} is dead.`;
    } else {
      this.hp -= Math.ceil(Math.random() * monster.atkDmg + 1);
      if (this.hp <= 0) {
        return `${this.name} is dead.`;
      }
    }
    return "This round is over; choose your next action.";
  }
};

export class Mage extends Character {
  constructor(name) {
    super(name);
    this.int = 100;
    this.str = 25;
  }
}

export class Barbarian extends Character {
  constructor(name) {
    super(name);
    this.int = 25;
    this.str = 100;
  }
}

export class Rogue extends Character {
  constructor(name) {
    super(name);
    this.dex = 100;
    this.int = 35;
    this.str = 35;

  }
}