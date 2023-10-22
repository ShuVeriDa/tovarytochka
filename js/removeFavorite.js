// Удаление или добавление в избранное товаров
const removeOrderButton = document.querySelectorAll(".remove");
const favoriteOrderButton = document.querySelectorAll(".favorite");

removeOrderButton.forEach((removeButton, index) => {
  removeButton.addEventListener("click", function() {
    const variantAddressItem = this.closest(".added_cart");
    if (variantAddressItem) {
      variantAddressItem.remove();
      updateTotalPrice();
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