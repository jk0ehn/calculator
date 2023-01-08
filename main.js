'use strict';

const button = document.querySelector('.switch');
const recess = document.querySelector('.recess');

button.addEventListener('click', () => {
  recess.classList.toggle('active');
});
