import Character from './character';

export default class Swordsman extends Character {
  constructor(name, type = 'Swordsman') {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }

  damage(points) {
    if (this.health === 0) {
      throw new Error('Нельзя атаковать мертвого персонажа!');
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
