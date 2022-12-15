import Magician from '../magician';

test('Magician constructor should be correct', () => {
  const result = new Magician('Nare', 'Magician');
  const expected = {
    name: 'Nare',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(result).toEqual(expected);
});

test('Magician should not be damaged', () => {
  const user = new Magician('Nare', 'Magician');
  user.health = 0;
  const result = () => user.damage(20);
  expect(result).toThrow('Нельзя атаковать мертвого персонажа!');
});

test('Magician should be damaged', () => {
  const user = new Magician('Nare', 'Daemon');
  user.damage(30);
  expect(user.health).toBe(82);
});
