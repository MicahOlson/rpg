export class Character {
  constructor(name) {
    this.name = name;
    this.role = `${this.constructor.name}`;
    this.hp = 50;
    this.int = 50;
    this.str = 50;
    this.dex = 50;
    this.inv = {};
    this.wallet = 100;
    this.xp = 0;
    this.level = 1;
  }

  levelUp() {
    const levelCap = 10;
    let levelThresholds = [0, 100];
    for (let i = 1; i < levelCap - 1; i++) {
      levelThresholds.push(levelThresholds[i] + 50);     
    }
    if (this.xp >= levelThresholds[this.level])  {
      this.xp -= levelThresholds[this.level];
      this.level += 1;
      return ` You've leveled up! You're now Level ${this.level}`;
    } else {
      return "";
    }
  }

  attack(monster) {
    monster.hp -= Math.max(Math.ceil(Math.random() * this.str - monster.armor), 1);
    if (monster.hp <= 0) {
      this.xp += monster.xp;
      const levelUpMessage = this.levelUp();
      return `${monster.constructor.name} is dead.${levelUpMessage}`;
    } else {
      this.hp -= Math.max(Math.ceil(Math.random() * monster.atkDmg), 1);
      if (this.hp <= 0) {
        return `${this.name} is dead.`;
      }
    }
    return "This round is over; choose your next action.";
  }
}

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