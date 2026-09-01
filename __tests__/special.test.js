import { extractSpecialAttack } from '../src/js/special.js';

test('extracts special attacks and supplies default description', () => {
  const character = {
    name: 'Лучник',
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'double-shot.png',
        description: 'Двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'knockout.png',
      },
    ],
  };

  expect(extractSpecialAttack(character)).toEqual([
    {
      id: 8,
      name: 'Двойной выстрел',
      description: 'Двойной урон',
      icon: 'double-shot.png',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      description: 'Описание недоступно',
      icon: 'knockout.png',
    },
  ]);
});