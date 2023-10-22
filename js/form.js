// // Получаем все поля ввода
// const nameInput = document.getElementById('name');
// const surnameInput = document.getElementById('surname');
// const emailInput = document.getElementById('email');
// const phoneInput = document.getElementById('phone');
// const innInput = document.getElementById('inn');
//
// // Функция для валидации отдельного поля
// function validateField(input) {
//   const value = input.value.trim(); // Убираем начальные и конечные пробелы
//   const label = input.nextElementSibling; // Получаем элемент с классом "placeholder"
//
//   if (value === '') {
//     // Если поле пустое, подсвечиваем его
//     label.classList.add('error');
//   } else {
//     // Если поле не пустое, убираем подсветку
//     label.classList.remove('error');
//   }
// }
//
// // Добавляем обработчики событий для каждого поля ввода
// nameInput.addEventListener('blur', () => validateField(nameInput));
// surnameInput.addEventListener('blur', () => validateField(surnameInput));
// emailInput.addEventListener('blur', () => validateField(emailInput));
// phoneInput.addEventListener('blur', () => validateField(phoneInput));
// innInput.addEventListener('blur', () => validateField(innInput));
//
// // Убираем подсветку, когда пользователь начинает вводить что-то
// nameInput.addEventListener('input', () => {
//   const label = nameInput.nextElementSibling;
//   label.classList.remove('error');
// });
// surnameInput.addEventListener('input', () => {
//   const label = surnameInput.nextElementSibling;
//   label.classList.remove('error');
// });
// emailInput.addEventListener('input', () => {
//   const label = emailInput.nextElementSibling;
//   label.classList.remove('error');
// });
// phoneInput.addEventListener('input', () => {
//   const label = phoneInput.nextElementSibling;
//   label.classList.remove('error');
// });
// innInput.addEventListener('input', () => {
//   const label = innInput.nextElementSibling;
//   label.classList.remove('error');
// });