'use strict';

const button = document.querySelector('.switch');
const recess = document.querySelector('.recess');
const numbers = document.querySelector('.displayed-numbers');

console.log(numbers);

button.addEventListener('click', () => {
  recess.classList.toggle('active');
});
