export default class Character {
  static characterType = [
    'Bowman',
    'Swordsman',
    'Magician',
    'Daemon',
    'Undead',
    'Zombie',
  ];

  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно содержать не менее 2 символов и не более 10!');
    }
    this.name = name;
    if (Character.characterType.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Выберите один их существующих классов!');
    }
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Нельзя повысить уровень мертвого персонажа!');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }
}
