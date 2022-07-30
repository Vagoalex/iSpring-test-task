const validate = (elem, nameForm) => {
  const regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

  if (elem.name === `${nameForm}-name`) {
    if (elem.value.length <= 2 && elem.value !== '') {
      elem.nextElementSibling.textContent = 'Please enter a valid company name';
    } else {
      elem.nextElementSibling.textContent = '';
    }
  }

  if (elem.name === `${nameForm}-phone`) {
    if (isNaN(parseFloat(elem.value)) && elem.value !== '') {
      elem.nextElementSibling.textContent = 'Please enter a valid phone';
    } else if (elem.value.length !== 11) {
      elem.nextElementSibling.textContent = 'Valid phone - 11 symbols';
    } else {
      elem.nextElementSibling.textContent = '';
    }
  }

  if (elem.name === `${nameForm}-email`) {
    if (!regExpEmail.test(elem.value) && elem.value !== '') {
      elem.nextElementSibling.textContent = 'Please enter a valid email';
    } else {
      elem.nextElementSibling.textContent = '';
    }
  }

  if (elem.name === `${nameForm}-form-text`) {
    if (elem.value.length <= 2 && elem.value !== '') {
      elem.nextElementSibling.textContent = 'Please enter a valid text';
    } else {
      elem.nextElementSibling.textContent = '';
    }
  }
};

export default validate;
