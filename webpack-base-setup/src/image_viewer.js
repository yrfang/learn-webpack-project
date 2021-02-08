import '../styles/image_viewer.css';

const image = document.createElement('img');
image.src = 'http://lorempixel.com/400/400';

// remove document append because import in index.js (entry point)
// document.body.appendChild(image);
