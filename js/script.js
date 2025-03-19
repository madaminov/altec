let window_width = window.outerWidth;
window.addEventListener('resize', function () {
  window_width = window.outerWidth;
  console.log(window_width);
});
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

$(function () {
  if (window_width > 768) {
    new WOW().init();
  }
  $(
    ".content a[href$='.jpg'],.content a[href$='.jpeg'],.content a[href$='.png'], .content a[href$='.gif'], .content a[href$='.webP'], .content a[href$='.webp']"
  )
    .attr('data-fancybox', 'gallery')
    .addClass('fancybox');
});
