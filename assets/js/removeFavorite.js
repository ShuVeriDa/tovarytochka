// Удаление или добавление в избранное товаров
const removeOrderButton = document.querySelectorAll(".favorite_remove_icons .remove");
const favoriteOrderButton = document.querySelectorAll(".favorite_remove_icons .favorite");

removeOrderButton.forEach((removeButton, index) => {
  const deliveryOrderImg = document.querySelectorAll('#deliveryInfoItem3 .more_info_item .delivery_order_img')
  const deliveryInfoItem =  document.querySelector('#deliveryInfoItem3')
  const moreInfoText =  document.querySelector('#deliveryInfoItem3 .more_info_item .more_info_text.img_component')
  removeButton.addEventListener("click", function() {

    const variantAddressItem = this.closest(".added_cart");
    if (variantAddressItem) {
      variantAddressItem.remove();
      if (index < deliveryOrderImg.length) {
        deliveryOrderImg[index].remove()
      }

      if (moreInfoText.children.length === 0) {
       deliveryInfoItem.remove()
      }

      updateTotalPrice();
    }



    // if (deliveryOrderImg.length === 0) {
    //   deliveryOrderImg.remove()
    //   updateTotalPrice();
    // }
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