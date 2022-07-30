import UI from './UI/UI.js';

function burgerMenu() {
  if (UI.burgerMenu) {
    const menuBody = document.querySelector('.header__links');
    UI.burgerMenu.addEventListener('click', () => {
      document.body.classList.toggle('burger-body--lock');
      UI.burgerMenu.classList.toggle('header__burger--active');
      menuBody.classList.toggle('header__links--active');
      UI.headerLogo.classList.toggle('header__logo--none');
      UI.fog.classList.toggle('fog--active');
    });
  }

  if (UI.exitMenu) {
    const menuBody = document.querySelector('.header__links');
    UI.exitMenu.addEventListener('click', (e) => {
      if (e.target.value === '/') {
        return;
      }
      if (e.target.value.includes('#')) {
        e.target.selectedIndex = 0;
      }
      if (e.target.value === 'en' || e.target.value === 'ru') {
        return;
      }
      document.body.classList.remove('burger-body--lock');
      UI.burgerMenu.classList.remove('header__burger--active');
      menuBody.classList.remove('header__links--active');
      UI.headerLogo.classList.remove('header__logo--none');
      UI.fog.classList.remove('fog--active');
    });
  }

  if (UI.fog) {
    const menuBody = document.querySelector('.header__links');
    UI.fog.addEventListener('click', () => {
      document.body.classList.remove('burger-body--lock');
      UI.burgerMenu.classList.remove('header__burger--active');
      menuBody.classList.remove('header__links--active');
      UI.headerLogo.classList.remove('header__logo--none');
      UI.fog.classList.remove('fog--active');
    });
  }
}

export default burgerMenu;
