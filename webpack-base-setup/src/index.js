// Because babel-preset-env, it's able to use ES6 modules
import sum from './sum';
import './image_viewer'; //only render, so just import the img

const total = sum(10, 5);
console.log(total);