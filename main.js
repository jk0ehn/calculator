'use strict';

const button = document.querySelector('.switch');
const recess = document.querySelector('.recess');
const numbers = document.querySelector('.displayed-numbers');

button.addEventListener('click', () => {
  recess.classList.toggle('active');
  numbers.classList.toggle('active');
});
