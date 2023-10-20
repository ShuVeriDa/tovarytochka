const totalPriceElement = document.getElementById('totalPrice');
const totalOrderPriceElement = document.getElementById('totalOrderPrice');
const discount = document.getElementById('discount');
const payBtn = document.getElementById('payBtn');
const payImmediately = document.getElementById('payImmediately');
const checkboxes = document.querySelectorAll('.added_cart_item input[type="checkbox"]');
const chooseAllCheckbox = document.querySelector(".choose_all input[type='checkbox']");
const totalOrderEl = document.querySelector(".total_order");

function formatNumberWithSpaces(number) {
  const parts = number.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join('.');
}

function updateTotalPrice() {
  const checkboxes = document.querySelectorAll('.in_stock_wrapper .checkbox_item input[type="checkbox"]');

  let totalPrice = 0;
  let totalOldPrice = 0;
  let countOrder = 0
  let quantityProduct = checkboxes.length

  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      const item = checkbox.closest('.added_cart');

      const priceEl = item.querySelector('.added_cart_price .price');
      const oldPriceEl = item.querySelector('.added_cart_price .price_currency');
      const countEl = item.querySelector(".count");

      if (priceEl) {
        const priceText = priceEl.textContent;
        const price = parseFloat(priceText.replace(/ /g, ''));
        totalPrice += Number(price);
      }

      if (oldPriceEl) {
        const oldPriceText = oldPriceEl.textContent;
        const price = parseFloat(oldPriceText.replace(/ /g, ''));
        totalOldPrice += Number(price);
      }

      if (countEl) {
        const countAll = countEl.textContent
        countOrder += Number(countAll)
      }
    }
  });

  const discountSaved = totalOldPrice - totalPrice
  const formattedPrice = formatNumberWithSpaces(totalPrice);
  const formattedOldPrice = formatNumberWithSpaces(totalOldPrice);
  const formattedDiscount = formatNumberWithSpaces(discountSaved)

  totalPriceElement.textContent = formattedPrice + " сом";
  totalOrderPriceElement.textContent = formattedOldPrice + " сом";
  discount.textContent = discountSaved === 0 ? 0 : "-" + formattedDiscount + " сом";
  totalOrderEl.textContent = `${countOrder} товара`

  if (payImmediately.checked) {
    payBtn.textContent = "Оплатить " + formattedPrice + " сом";
  }

  if (!payImmediately.checked) {
    payBtn.textContent = "Заказать"
  }

  const allUnchecked = [...checkboxes].every(checkbox => !checkbox.checked);
  const allChecked = [...checkboxes].every(checkbox => checkbox.checked);

  if (allUnchecked || !allChecked) {
    chooseAllCheckbox.checked = false;
  }

  if (allChecked) {
    chooseAllCheckbox.checked = true;
  }
}

function handleChooseAllChange() {
  const isChecked = chooseAllCheckbox.checked;
  checkboxes.forEach(checkbox => {
    checkbox.checked = isChecked;
  });
  updateTotalPrice();
}


checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    updateTotalPrice();
  });
});

chooseAllCheckbox.addEventListener("change", handleChooseAllChange);

payImmediately.addEventListener('click', function () {
  if (payImmediately.checked) {
    payBtn.textContent = "Оплатить " + totalPriceElement.textContent;
  }

  if (!payImmediately.checked) {
    payBtn.textContent = "Заказать"
  }
});

updateTotalPrice();