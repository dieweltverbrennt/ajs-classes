import Swordsman from '../swordsman';

test('Swordsman constructor should be correct', () => {
    const result = new Swordsman('Nare', 'Swordsman');
    const expected = {
        name: 'Nare',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
      };
    expect(result).toEqual(expected);
  });

  test('Swordsman should not be damaged', () => {
    const user = new Swordsman('Nare', 'Swordsman');
    user.health = 0;
    const result = () => user.damage(20);
    expect(result).toThrow('Нельзя атаковать мертвого персонажа!');
  });

  test('Swordsman should be damaged', () => {
    const user = new Swordsman('Nare', 'Swordsman');
    user.damage(50);
    expect(user.health).toBe(55);
  });