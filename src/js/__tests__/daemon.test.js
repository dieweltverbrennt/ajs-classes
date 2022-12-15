import Daemon from '../daemon';

test('Daemon constructor should be correct', () => {
    const result = new Daemon('Nare', 'Daemon');
    const expected = {
        name: 'Nare',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
      };
    expect(result).toEqual(expected);
  });

  test('Daemon should not be damaged', () => {
    const user = new Daemon('Nare', 'Daemon');
    user.health = 0;
    const result = () => user.damage(20);
    expect(result).toThrow('Нельзя атаковать мертвого персонажа!');
  });

  test('Daemon should be damaged', () => {
    const user = new Daemon('Nare', 'Daemon');
    user.damage(30);
    expect(user.health).toBe(82);
  });