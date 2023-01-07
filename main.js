'use strict';

// const button = document.getElementById('switch');
// const recess = document.getElementById('recess');

// console.log(button);
// console.log(recess);

// button.addEventListener('click', () => {
//   recess.classList.toggle('active');
// });

const button = document.querySelector('.switch');
const recess = document.querySelector('.recess');

console.log(button);
console.log(recess);

button.addEventListener('click', () => {
  recess.classList.toggle('active');
});
