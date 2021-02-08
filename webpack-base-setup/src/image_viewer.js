import big from '../assets/big.jpeg';
import '../styles/image_viewer.css';

export default () => {
  const bigImage = document.createElement('img');
  bigImage.src = big;
  
  document.body.appendChild(bigImage);
};
