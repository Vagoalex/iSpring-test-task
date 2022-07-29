function validateForm(fields, btn) {
  fields.forEach((inp) => {
    if (inp.required) {
      inp.addEventListener('change', () => {
        checkField(inp, btn);
      });
    }
  });
}

function checkElementMatch(input) {
  const validityState = input.validity;
  let name = '';

  switch (input.name) {
    case 'partner-form-name':
      name = 'Name';
      break;
    case 'partner-form-phone':
      name = 'Phone';
      break;
    case 'partner-form-email':
      name = 'Email';
      break;
    case 'partner-form-text':
      name = 'Textarea';
      break;

    default:
      name = '';
      break;
  }

  if (validityState.valueMissing) {
    input.setCustomValidity(`${name} is required`);
  }
  input.reportValidity();
}

function checkField(inp, btn) {
  if (inp.checkValidity()) {
    inp.classList.remove('field-invalid');
    inp.classList.add('field-valid');

    checkElementMatch(inp);

    btn.disabled = inp.checkValidity() ? false : true;
    btn.disabled ? btn.classList.add('btn-invalid') : null;
  } else {
    inp.classList.remove('field-valid');
    inp.classList.add('field-invalid');
    inp.reportValidity();

    checkElementMatch(inp);

    btn.disabled = inp.checkValidity() ? false : true;
    btn.disabled ? btn.classList.add('btn-invalid') : null;
  }
}

export default validateForm;
