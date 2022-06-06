
let navMain = document.querySelector('.header-nav');
let navToggle = document.querySelector('.header-nav__toggle');

navMain.classList.remove('header-nav__open');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('header-nav')) {
    navMain.classList.add('header-nav__open');
  } else {
    navMain.classList.add('header-nav__close');
    navMain.classList.remove('header-nav__open');
  }
});
