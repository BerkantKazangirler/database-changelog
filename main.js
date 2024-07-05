window.onscroll = function() {scroolbar()};
function scroolbar() {
  if (document.documentElement.scrollTop >= 1) {
    document.querySelector('.header-container').classList.add('header-scrool');
  }
  else {
    document.querySelector('.header-container').classList.remove('header-scrool');
  }
}