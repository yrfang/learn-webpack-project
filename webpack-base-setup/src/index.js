// Because babel-preset-env, it's able to use ES6 modules
import small from '../assets/small.jpeg';
import '../styles/image_viewer.css';

const smallImage = document.createElement('img');
smallImage.src = small;

document.body.appendChild(smallImage);

// add a button for code splitting of the big image
const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
  import('./image_viewer').then(module => {
    module.default();
  });
};

document.body.appendChild(button);
