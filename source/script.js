
let navMain = document.querySelector('.header-nav');
let navToggle = document.querySelector('.header-nav__toggle');

navMain.classList.remove('header-nav--open');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('header-nav')) {
    navMain.classList.add('header-nav--open');
  } else {
    navMain.classList.add('header-nav--close');
    navMain.classList.remove('header-nav--open');
  }
});
