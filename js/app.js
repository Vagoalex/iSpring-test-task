import burgerMenu from './components/burger.js';

window.addEventListener('DOMContentLoaded', function () {
  burgerMenu();

  new ItcSimpleSlider('.itcss', {
    loop: true,
    autoplay: false,
    interval: 5000,
    swipe: true,
  });
});
