const openPayButton = document.querySelector('.delivery_pay_method_header.payment .change');
const openButtonIcon = document.querySelector('.purchase_card_header .edit_icon');
const modalPay = document.querySelector('.modal_pay');
const closeButton = document.querySelector('.close_pay');
const radioButtons = document.querySelectorAll('input[name="payment_method"]');

function openModal() {
  modalPay.style.display = 'flex';
  modalPay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

openPayButton.addEventListener('click', openModal);
openButtonIcon.addEventListener('click', openModal);


closeButton.addEventListener('click', () => {
  modalPay.style.display = 'none';
  document.body.style.overflow = 'auto';
});

// Add event listeners to handle radio button behavior
radioButtons.forEach((radio) => {
  radio.addEventListener('change', (event) => {
    if (event.target.checked) {

      radioButtons.forEach((otherRadio) => {
        otherRadio.parentElement.classList.remove('selected');
        if (otherRadio !== event.target) {
          otherRadio.checked = false;
        }
      });
      event.target.parentElement.classList.add('selected');
    }
  });
});