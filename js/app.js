import burgerMenu from './components/burger.js';
import validateForm from './components/validateForm.js';
import subscribeForm from './components/subscribeForm.js';

window.addEventListener('DOMContentLoaded', function () {
  burgerMenu();
  validateForm();
  subscribeForm();

  new ItcSimpleSlider('.itcss', {
    loop: true,
    autoplay: false,
    interval: 5000,
    swipe: true,
  });
});
