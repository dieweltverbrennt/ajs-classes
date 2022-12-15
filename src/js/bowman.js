import Character from './character';

export default class Bowman extends Character {
  constructor(name, type = 'Bowman') {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }

  damage(points) {
    if (this.health === 0) {
      throw new Error('Нельзя атаковать мертвого персонажа!');
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
