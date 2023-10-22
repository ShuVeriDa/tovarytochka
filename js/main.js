const favoriteSvg = document.querySelector('.favorite svg');
const removeSvg = document.querySelector('.remove svg');
const countLeft = document.querySelector('.count_left');
const addedCartEl = document.querySelectorAll('.added_cart');
const favoriteRemoveEl = document.querySelectorAll('.favorite_remove');
const arrowDownEl = document.querySelector('.choose_all .arrow_down');
const arrowUpEl = document.querySelector('.choose_all .arrow_up');
const addedCartItems = document.querySelectorAll('.in_stock_wrapper .added_cart');
const chooseAllText = document.querySelector('.choose_all_text span');
const arrowDownElNotAvailable = document.querySelector('.not_available_header .arrow_down');
const arrowUpElNotAvailable = document.querySelector('.not_available_header .arrow_up');
const addedCartItemsNotAvailable = document.querySelectorAll('.not_available_items .added_cart');


favoriteSvg.addEventListener('mouseenter', () => {
  countLeft.style.color = '#f55123';
});

removeSvg.addEventListener('mouseenter', () => {
  countLeft.style.color = '#f55123';
});

favoriteSvg.addEventListener('mouseleave', () => {
  countLeft.style.color = '';
});

//
addedCartEl.forEach((addedCart, index) => {
  addedCart.addEventListener('mouseenter', () => {
    favoriteRemoveEl[index].style.display = 'flex';
  });

  addedCart.addEventListener('mouseleave', () => {
    favoriteRemoveEl[index].style.display = 'none';
  });
});

// Свернуть/показать товары
arrowUpEl.addEventListener('click', function () {
  addedCartItems.forEach(function (cartItem) {
    cartItem.style.display = 'none';
    arrowUpEl.style.display = 'none'
    arrowDownEl.style.display = 'flex'
    chooseAllText.style.fontWeight = 600
  });

  const {formattedPrice, countOrder, allChecked, allUnchecked} = updateTotalPrice()

  if (allUnchecked || !allChecked || allChecked) {
    chooseAllText.textContent = `${countOrder} товаров · ${formattedPrice} сом`

  }
});


arrowDownEl.addEventListener('click', function () {
  addedCartItems.forEach(function (cartItem) {
    cartItem.style.display = 'flex';
    arrowUpEl.style.display = 'flex'
    arrowDownEl.style.display = 'none'
    chooseAllText.style.fontWeight = 400
  });
  chooseAllText.textContent = 'Выбрать все'
});

arrowUpElNotAvailable.addEventListener('click', function () {
  addedCartItemsNotAvailable.forEach(function (cartItem) {
    cartItem.style.display = 'none';
    arrowUpElNotAvailable.style.display = 'none'
    arrowDownElNotAvailable.style.display = 'flex'
  });
});

arrowDownElNotAvailable.addEventListener('click', function () {
  addedCartItemsNotAvailable.forEach(function (cartItem) {
    cartItem.style.display = 'flex';
    arrowUpElNotAvailable.style.display = 'flex'
    arrowDownElNotAvailable.style.display = 'none'
  });
});

// Получите ссылки на элементы

const removeOrderButton = document.querySelectorAll(".remove");
const favoriteOrderButton = document.querySelectorAll(".favorite");

removeOrderButton.forEach((removeButton, index) => {
  removeButton.addEventListener("click", function() {
    const variantAddressItem = this.closest(".added_cart");
    if (variantAddressItem) {
      variantAddressItem.remove();
    }
  });
});

favoriteOrderButton.forEach((favoriteButton, index) => {
  favoriteButton.addEventListener("click", function() {
    const variantAddressItem = this.closest(".added_cart");
    if (variantAddressItem) {
      this.classList.toggle("active");
    }
  });
});