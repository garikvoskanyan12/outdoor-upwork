const mobileMenu = document.querySelector('.mobile-menu');
const menuBtn = document.querySelector('#menu-btn');
const burgerBtn = document.querySelector('.burger');
const body = document.body;

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  burgerBtn.classList.toggle('open-burger');

  body.classList.toggle('no-scroll');
});

mobileMenu.addEventListener('click', (e) => {
  if (e.target.classList.contains('form-control')) return;
  menuBtn.classList.remove('open');
  mobileMenu.classList.remove('open');
  mobileMenu.classList.remove('open-burger');
  body.classList.remove('no-scroll');
});
