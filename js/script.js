let mobile_menu = document.querySelector('.mobile_menu');
document
  .querySelector('.btn-menu-mobile')
  .addEventListener('click', (event) => {
    mobile_menu.classList.add('open');
  });
document
  .querySelector('.btn-close-mobile-menu')
  .addEventListener('click', (event) => {
    mobile_menu.classList.remove('open');
  });
