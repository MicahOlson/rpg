export default class Character {
  constructor(name, role) {
    this.name = name;
    this.role = role;
    this.hp = 50;
    this.int = 50;
    this.str = 50;
    this.dex = 50;
    this.inv = {}
    this.wallet = 100;
    this.xp = 0;
    this.level = 1;
  }
};
