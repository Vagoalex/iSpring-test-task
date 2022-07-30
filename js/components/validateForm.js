import UI from './UI/UI.js';
import { request } from './request.js';
import validate from './validateCustomFunction.js';

const validateForm = () => {
  //   получаем элементы со страницы
  const { form, fields, btn } = UI;

  let isSubmit = false;

  const submit = () => {
    alert('Данные отправлены');
    const submitData = {};

    fields.forEach((elem) => {
      switch (elem.name) {
        case 'partner-form-name':
          submitData['name'] = elem.value;
          break;
        case 'partner-form-phone':
          submitData['phone'] = elem.value;
          break;
        case 'partner-form-email':
          submitData['email'] = elem.value;
          break;
        case 'partner-form-text':
          submitData['text'] = elem.value;
          break;

        default:
          throw new Error('Invalid name');
      }

      // request(JSON.stringify(submitData), 'http://localhost:3000/companies');
      // заливаю на deploy без отправки данных на сервер, т.к. не до конца настроил отправку и возиться долго

      elem.value = '';
    });

    console.log(`data: ${JSON.stringify(submitData)}`);
  };

  fields.forEach((elem) => {
    elem.addEventListener('blur', () => {
      validate(elem, 'partner-form');
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    // проверка на заполнение полей

    fields.forEach((elem) => {
      if (elem.value === '') {
        btn.classList.add('button-error');
        btn.textContent = 'No entered data';
        setTimeout(() => {
          btn.classList.remove('button-error');
          btn.textContent = 'Become a Partner';
        }, 1000);
        isSubmit = false;
      } else {
        isSubmit = true;
      }
    });

    if (isSubmit) {
      submit();
    }
  });
};

export default validateForm;
