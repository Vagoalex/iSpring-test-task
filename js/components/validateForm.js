// const validate = (values) => {
//   const errors = {};

//   if (!values.name) {
//     errors.name = 'Укажите имя.';
//   } else if (values.name.length < 4) {
//     errors.name = 'Минимум 4 символа.';
//   }

//   if (!values.email) {
//     errors.email = 'Укажите email.';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Неверный email адрес.';
//   }

//   if (!values.amount || values.amount < 10) {
//     errors.amount = 'Минимальное количество - 10.';
//   }

//   if (values.currency === '') {
//     errors.currency = 'Поле не должно быть пустым.';
//   }

//   return errors;
// };
