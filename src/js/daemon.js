import Character from './character';

export default class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }

  damage(points) {
    if (this.health === 0) {
      throw new Error('Нельзя атаковать мертвого персонажа!');
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
