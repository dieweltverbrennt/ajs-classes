import Bowman from '../bowman';

test('Bowman constructor should be correct', () => {
  const result = new Bowman('Nare', 'Bowman');
  const expected = {
    name: 'Nare',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(result).toEqual(expected);
});

test('Bowman should not be damaged', () => {
  const user = new Bowman('Nare', 'Bowman');
  user.health = 0;
  const result = () => user.damage(20);
  expect(result).toThrow('Нельзя атаковать мертвого персонажа!');
});

test('Bowman should be damaged', () => {
  const user = new Bowman('Nare', 'Bowman');
  user.damage(20);
  expect(user.health).toBe(85);
});
