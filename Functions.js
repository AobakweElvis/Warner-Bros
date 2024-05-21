window.addEventListener('scroll', function() {
  var carousel = document.querySelector('.carousel');
  var pillNav = document.querySelector('.pill-nav');

  if (window.pageYOffset > carousel.offsetHeight) {
    carousel.style.opacity = 0;
    pillNav.style.position = 'fixed';
  } else {
    carousel.style.opacity = 1;
    pillNav.style.position = 'relative';
  }
});