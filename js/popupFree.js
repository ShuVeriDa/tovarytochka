const svgs = document.querySelectorAll(".selling_company_icon");
const popups = document.querySelectorAll(".popupCompany");
const freeEl = document.querySelectorAll(".free");
const popupFree = document.querySelectorAll(".popup");
const old_priceEl = document.querySelectorAll(".old_price");
const popupOldPrice = document.querySelectorAll(".popup_old_price");

function addPopupListeners(elements, popups) {
  elements.forEach((element, index) => {
    element.addEventListener("mouseover", () => {
      popups[index].style.display = "flex";
    });

    element.addEventListener("mouseout", () => {
      popups[index].style.display = "none";
    });
  });
}

addPopupListeners(freeEl, popupFree);
addPopupListeners(svgs, popups);
addPopupListeners(old_priceEl, popupOldPrice);