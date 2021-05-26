'use strict';
// Header

const header = document.querySelector('.header');
const headerToggle = document.querySelector('.header__toggle');

header.classList.remove('header--no-js');

headerToggle.addEventListener('click', () => {
  header.classList.toggle('header--opened');
});

// const btnsPriceLink = document.querySelectorAll('.price__link');
// const popup = document.querySelector('.popup');

// for (const btnPriceLink of btnsPriceLink) {
//   btnPriceLink.addEventListener('click', () => {
//     popup.classList.add('popup--opened');
//     console.log('hi');
//   });
// }
