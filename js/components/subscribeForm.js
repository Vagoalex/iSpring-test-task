import UI from './UI/UI.js';
import validate from './validateCustomFunction.js';

// 2.	Разработайте скрипт на PHP, предоставляющий возможность просмотреть запросы, отправленные из формы “Напишите мне”. Скрипт должен на вход получать параметр email и выводить данные соответствующего пользователя в виде аккуратно оформленной таблицы на страницу. В случае, если данные отсутствуют, необходимо показывать сообщение об ошибке.

// Сорян, я с пхп еще не дружу, поэтому данный скриптик будет на js.....

function subscribeForm() {
  const { subscribeForm, subscribeInput, subscribeBtn } = UI;

  let countSubscribers = 1;
  let isSubmit = false;
  const subscribers = [];

  subscribeInput.addEventListener('blur', () => {
    validate(subscribeInput, 'subscribe-form');
  });

  const submit = (value) => {
    alert('Данные отправлены');

    const userName = value.split('@')[0];

    subscribers.push({ id: countSubscribers, [userName]: value });
    countSubscribers++;

    console.log(subscribers);
  };

  subscribeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // проверка на заполнение полей

    const value = subscribeInput.value;

    if (value === '') {
      subscribeBtn.classList.add('button-error');
      subscribeBtn.textContent = 'No entered data';
      setTimeout(() => {
        subscribeBtn.classList.remove('button-error');
        subscribeBtn.textContent = 'Subscribe';
      }, 1000);
      isSubmit = false;
    } else {
      isSubmit = true;
    }

    if (isSubmit) {
      submit(value);
      subscribeInput.value = '';
    }
  });
}
function validateSubscribeForm() {}

export default subscribeForm;
