import Undead from '../undead';

test('Undead constructor should be correct', () => {
    const result = new Undead('Nare', 'Undead');
    const expected = {
        name: 'Nare',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
      };
    expect(result).toEqual(expected);
  });

  test('Undead should not be damaged', () => {
    const user = new Undead('Nare', 'Undead');
    user.health = 0;
    const result = () => user.damage(70);
    expect(result).toThrow('Нельзя атаковать мертвого персонажа!');
  });

  test('Undead should be damaged', () => {
    const user = new Undead('Nare', 'Undead');
    user.damage(70);
    expect(user.health).toBe(47.5);
  });