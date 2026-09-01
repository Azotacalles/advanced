import { orderByProps } from './js/cart.js';

const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
const props = ['name', 'level'];

const result = orderByProps(obj, props);
console.log(result);