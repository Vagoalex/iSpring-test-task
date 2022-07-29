import burgerMenu from './components/burger.js';
import validateForm from './components/validateForm.js';
import UI from './components/UI/UI.js';

window.addEventListener('DOMContentLoaded', function () {
  burgerMenu();
  validateForm(UI.fields, UI.btn);

  new ItcSimpleSlider('.itcss', {
    loop: true,
    autoplay: false,
    interval: 5000,
    swipe: true,
  });
});
