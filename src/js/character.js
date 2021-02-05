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
  
  // levelUp() {
  //   let levelTable = [0, 0, 100];
  //   for (let i = 2; i <= this.level; i++) {
  //     levelTable.push(levelTable[i] + 50);
  //   }
  //   levelTable.forEach(function(threshold, index) {
  //     if ((this.xp >= threshold) && (this.level < index)) {
  //       this.level += 1;
  //       this.xp -= levelTable[index];
  //       return `You've leveled up! You're now Level ${this.level}`;
  //     }
  //   })
  // }

  attack(monster) {
    monster.hp -= Math.max(Math.ceil(Math.random() * this.str - monster.armor), 1);
    if (monster.hp <= 0) {
      this.xp += monster.xp;
      // this.levelUp();
      return `${monster.constructor.name} is dead.`;
    } else {
      this.hp -= Math.max(Math.ceil(Math.random() * monster.atkDmg), 1);
      if (this.hp <= 0) {
        return `${this.name} is dead.`;
      }
    }
    return "This round is over; choose your next action.";
  }

  
  
  //levelUp() {
  //   this.level += 1;
  //   this.xp -= 100;
  //   if (this.role = "Mage") {
  //     this.int =+ 10
  //   }
  // }

  // levelUp() {
  //   const lvlThresh = [0,0,100,150,200];
  //   const currentLevel = this.level;
  //   this.level = Math.ceil(this.xp / lvlThresh[this.level]);
  //   if (currentLevel != this.level) {
  //     return `You've leveled up! You're now Level ${this.level}`
  //   }

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