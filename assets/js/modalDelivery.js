const openDeliveryBtn = document.querySelector('.delivery_pay_method_header .change');
const openDeliveryBtnIcon = document.querySelector('.delivery_point_header .edit_icon');
const modalDelivery = document.querySelector('.modal_delivery');
const closeDeliveryBtn = document.querySelector('.close_delivery');
const radioDeliveryBtns = document.querySelectorAll('input[name="delivery_method"]');
const removeButtons = document.querySelectorAll(".variant_address_item_info .remove");

function openModal() {
  modalDelivery.style.display = 'flex';
  modalDelivery.classList.add('active');
  document.body.style.overflow = 'hidden';
}

openDeliveryBtn.addEventListener('click', openModal);
openDeliveryBtnIcon.addEventListener('click', openModal);


closeDeliveryBtn.addEventListener('click', () => {
  modalDelivery.style.display = 'none';
  modalDelivery.classList.remove('active');
  document.body.style.overflow = 'auto';
});

// Выбор радио
radioDeliveryBtns.forEach((radio) => {
  radio.addEventListener('change', (event) => {
    if (event.target.checked) {

      radioDeliveryBtns.forEach((otherRadio) => {
        otherRadio.parentElement.classList.remove('selected');
        if (otherRadio !== event.target) {
          otherRadio.checked = false;
        }
      });
      event.target.parentElement.classList.add('selected');
    }
  });
});

// Добавление/удаление класса на .choose_delivery_btn
document.addEventListener("DOMContentLoaded", function() {
  const deliveryButtons = document.querySelectorAll(".choose_delivery_btn");

  deliveryButtons.forEach(button => {
    button.addEventListener("click", function() {
      deliveryButtons.forEach(btn => btn.classList.remove("active"));
      this.classList.add("active");
    });
  });
});

// Удаление элементов из модального окна "Способ оплаты"
removeButtons.forEach(removeButton => {
  removeButton.addEventListener("click", function() {
    const variantAddressItem = this.closest(".variant_address_item");
    if (variantAddressItem) {
      variantAddressItem.remove();
    }
  });
});