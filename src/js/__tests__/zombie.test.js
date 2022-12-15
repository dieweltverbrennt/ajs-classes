import Zombie from '../zombie';

test('Zombie constructor should be correct', () => {
    const result = new Zombie('Nare', 'Zombie');
    const expected = {
        name: 'Nare',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
      };
    expect(result).toEqual(expected);
  });

  test('Zombie should not be damaged', () => {
    const user = new Zombie('Nare', 'Zombie');
    user.health = 0;
    const result = () => user.damage(70);
    expect(result).toThrow('Нельзя атаковать мертвого персонажа!');
  });

  test('Undead should be damaged', () => {
    const user = new Zombie('Nare', 'Zombie');
    user.damage(30);
    expect(user.health).toBe(73);
  });