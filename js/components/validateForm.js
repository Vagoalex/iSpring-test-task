import UI from './UI/UI.js';
const validateForm = () => {
  //   получаем элементы со страницы
  const { form, fields, btn } = UI;

  let isSubmit = false;

  const regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

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

      elem.value = '';
    });

    console.log(`data: ${JSON.stringify(submitData)}`);
  };

  const validate = (elem) => {
    if (elem.name === 'partner-form-name') {
      if (elem.value.length <= 2 && elem.value !== '') {
        elem.nextElementSibling.textContent =
          'Please enter a valid company name';
      } else {
        elem.nextElementSibling.textContent = '';
      }
    }

    if (elem.name === 'partner-form-phone') {
      if (isNaN(parseFloat(elem.value)) && elem.value !== '') {
        elem.nextElementSibling.textContent = 'Please enter a valid phone';
      } else if (elem.value.length !== 11) {
        elem.nextElementSibling.textContent = 'Valid phone - 11 symbols';
      } else {
        elem.nextElementSibling.textContent = '';
      }
    }

    if (elem.name === 'partner-form-email') {
      if (!regExpEmail.test(elem.value) && elem.value !== '') {
        elem.nextElementSibling.textContent = 'Please enter a valid email';
      } else {
        elem.nextElementSibling.textContent = '';
      }
    }

    if (elem.name === 'partner-form-text') {
      if (elem.value.length <= 2 && elem.value !== '') {
        elem.nextElementSibling.textContent = 'Please enter a valid text';
      } else {
        elem.nextElementSibling.textContent = '';
      }
    }
  };

  fields.forEach((elem) => {
    elem.addEventListener('blur', () => {
      validate(elem, isSubmit);
    });
  });

  form.addEventListener('submit', function (event) {
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
