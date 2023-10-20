const favoriteSvg = document.querySelector('.favorite svg');
const removeSvg = document.querySelector('.remove svg');
const countLeft = document.querySelector('.count_left');
const addedCartEl = document.querySelectorAll('.added_cart');
const favoriteRemoveEl = document.querySelectorAll('.favorite_remove');

favoriteSvg.addEventListener('mouseenter', () => {
  countLeft.style.color = '#f55123';
});

removeSvg.addEventListener('mouseenter', () => {
  countLeft.style.color = '#f55123';
});

favoriteSvg.addEventListener('mouseleave', () => {
  countLeft.style.color = '';
});


addedCartEl.forEach((addedCart, index) => {
  addedCart.addEventListener('mouseenter', () => {
    favoriteRemoveEl[index].style.display = 'flex';
  });

  addedCart.addEventListener('mouseleave', () => {
    favoriteRemoveEl[index].style.display = 'none';
  });
});