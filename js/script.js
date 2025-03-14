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
formControl = document.querySelectorAll(
  '.form-group-label-transform .form-control'
);
formControl.forEach((box) => {
  box.addEventListener('focus', function (event) {
    form_group = event.target.closest('.form-group-label-transform');
    form_group.classList.add('form-group-label-top');
  });
  box.addEventListener('blur', function (event) {
    form_group = event.target.closest('.form-group-label-transform');
    if (event.target.value.length > 0) {
      form_group.classList.add('form-group-label-top');
    } else {
      form_group.classList.remove('form-group-label-top');
    }
  });
});
