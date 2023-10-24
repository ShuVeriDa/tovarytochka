document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const submitBtn = document.querySelector(".order_btn button");
  const inputs = form.querySelectorAll("input");
  const labels = form.querySelectorAll('label')
  const errorTitles = form.querySelectorAll('.error_title')

  const addError = (input, index, text) => {
    input.classList.add("error");
    labels[index].classList.add("error");
    errorTitles[index].style.display = "block";
    if (text) {
      errorTitles[index].textContent = text;
    }
  };

  const removeError = (input, index) => {
    input.classList.remove("error");
    labels[index].classList.remove("error");
    errorTitles[index].style.display = "none";
  };

  inputs.forEach(function (input, index) {
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (input.id === 'phone' || input.id === 'inn') {
      input.addEventListener("input", function () {
        if (input.id === 'phone') {
          input.value = input.value.replace(/[^\d+]/g, "");
        }

        if (input.id === 'inn') {
          input.value = input.value.replace(/\D/g, "");
        }
      });
    }

    input.addEventListener("click", function () {
      const validatePhone = input.value.startsWith('+7')
      if (input.id === 'phone') {
        if (!validatePhone) {
          input.value = "+7" + input.value;
        }
      }
    });


    input.addEventListener("input", function () {
      if (input.id === 'name') {
        if (input.value.length >= 2) {
          removeError(input, index)
        }
      }

      if (input.id === 'surname') {
        if (input.value.length >= 2) {
          removeError(input, index)
        }
      }

      if (input.id === "inn" && input.value.length === 12) {
        removeError(input, index);
      }

      if (input.id === "email" && emailPattern.test(input.value)) {
        removeError(input, index);
      }

      if (input.id === "phone" && input.value.length === 12) {
        removeError(input, index);
      }
    })

    input.addEventListener("blur", function () {
      if (input.value === "") {
        removeError(input, index)
      }

      if (input.id === 'name') {
        if (input.value.length < 2) {
          addError(input, index, "Длина имени не должна быть менее 2 символов.")
        } else {
          removeError(input, index)
        }

        if (input.value === '') {
          removeError(input, index)
        }
      }

      if (input.id === 'surname') {
        if (input.value.length < 2) {
          addError(input, index, "Длина фамилии не должна быть менее 2 символов.")
        } else {
          removeError(input, index)
        }

        if (input.value === '') {
          removeError(input, index)
        }
      }

      if (input.id === 'inn') {
        if (input.value.length !== 12) {
          addError(input, index, "ИНН должен содержать ровно 12 символов")
        } else {
          removeError(input, index)
        }

        if (input.value === '') {
          removeError(input, index)
        }
      }

      if (input.id === 'email') {
        const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const emailValue = input.value;

        if (!emailPattern.test(input.value)) {
          if (!/^[A-Za-z0-9._%+-]*$/.test(emailValue)) {
            errorTitles[index].textContent = "Email может содержать только латинские буквы, цифры и специальные символы ._%+-";
          } else if (emailValue.indexOf('@') === -1) {
            errorTitles[index].textContent = "Email может содержать символ @";
          } else {
            errorTitles[index].textContent = "Недопустимый формат Email";
          }
          addError(input, index)
        } else {
          removeError(input, index)
        }

        if (input.value === '') {
          removeError(input, index)
        }
      }

      if (input.id === 'phone') {
        const phoneValue = input.value.replace(/\D/g, ""); // Удаляем все нецифровые символы

        if (input.value.length !== 12) {
          addError(input, index, "Номер телефона должен содержать ровно 11 символов")
        } else {
          removeError(input, index)
        }

        if (input.value === '+7') {
          input.value = ''
          removeError(input, index)
        }

        if (input.value === '') {
          removeError(input, index)
        }

        if (phoneValue.length === 11) {
          input.value = `+7 ${phoneValue.substring(1, 4)} ${phoneValue.substring(4, 7)}-${phoneValue.substring(7, 9)}-${phoneValue.substring(9, 11)}`;
        }
      }
    });
  });

  // вместо click должно быть submit
  submitBtn.addEventListener("click", function () {
    inputs.forEach(function (input, index) {
      if (input.value === "") {
        addError(input, index)
      }

      if (input.id === 'name') {
        if (input.value === '') {
          addError(input, index, "Укажите имя")
        }
      }

      if (input.id === 'surname') {
        if (input.value === '') {
          addError(input, index, "Укажите фамилию")
        }
      }

      if (input.id === 'phone') {
        if (input.value === '') {
          addError(input, index, "Укажите телефон")
        }
      }

      if (input.id === 'email') {
        if (input.value === '') {
          addError(input, index, "Укажите электронную почту")
        }
      }

      if (input.id === 'inn') {
        if (input.value === '') {
          addError(input, index, "Укажите инн")
        }
      }

      // if (input.id === 'name') {
      //   if (input.value === '') {
      //     addError(input, index, "Укажите имя")
      //   } else if (input.value.length < 2) {
      //     addError(input, index, "Длина имени не должна быть менее 2 символов.")
      //   } else {
      //     removeError(input, index)
      //   }
      // }
      //
      // if (input.id === 'surname') {
      //   if (input.value === '') {
      //     addError(input, index, "Укажите фамилию")
      //   } else if (input.value.length < 2) {
      //     addError(input, index, "Длина фамилии не должна быть менее 2 символов.")
      //   } else {
      //     removeError(input, index)
      //   }
      // }

      // if (input.id === 'inn') {
      //   if (input.value === '') {
      //     addError(input, index, "Укажите инн")
      //   } else if (input.value.length !== 12) {
      //     addError(input, index, "ИНН должен содержать ровно 12 символов")
      //   }
      //   else {
      //     removeError(input, index)
      //   }
      // }
    });
  });
});
