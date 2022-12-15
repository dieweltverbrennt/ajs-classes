import Character from '../character';

test('name length should be correct', () => {
  const result = () => new Character('t', 'Daemon');
  expect(result).toThrow('Имя должно содержать не менее 2 символов и не более 10!');
});

test('type should be correct', () => {
  const result = () => new Character('Nare', 'Archer');
  expect(result).toThrow('Выберите один их существующих классов!');
});

test('constructor should be correct', () => {
  const result = new Character('Nare', 'Bowman');
  const expected = {
    name: 'Nare',
    type: 'Bowman',
    health: 100,
    level: 1,
  };
  expect(result).toEqual(expected);
});

test('should not level up', () => {
  const user = new Character('Nare', 'Bowman');
  user.health = 0;
  const result = () => user.levelUp();
  expect(result).toThrow('Нельзя повысить уровень мертвого персонажа!');
});

test('should level up', () => {
  const user = new Character('Nare', 'Bowman');
  user.levelUp();
  const expected = 2;
  expect(user.level).toBe(expected);
});
