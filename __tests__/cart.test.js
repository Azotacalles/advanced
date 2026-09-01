import { orderByProps } from '../src/js/cart.js';

test('test_1', () => {
  const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
  const props = ['name', 'level'];
  const result = orderByProps(obj, props);

  expect(result).toEqual([
    {key: 'name', value: 'мечник'},
    {key: 'level', value: 2},
    {key: 'attack', value: 80},
    {key: 'defence', value: 40},
    {key: 'health', value: 10},
  ]);
});

test('test_2', () => {
  const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
  const props = [];
  const result = orderByProps(obj, props);

  expect(result).toEqual([
    {key: 'attack', value: 80},
    {key: 'defence', value: 40},
    {key: 'health', value: 10},
    {key: 'level', value: 2},
    {key: 'name', value: 'мечник'},
  ]);
});

test('test_3', () => {
  const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
  const props = ['name', 'level', 'attack', 'defence', 'health'];
  const result = orderByProps(obj, props);

  expect(result).toEqual([
    {key: 'name', value: 'мечник'},
    {key: 'level', value: 2},
    {key: 'attack', value: 80},
    {key: 'defence', value: 40},
    {key: 'health', value: 10},
  ]);
});
